"use client"

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

// GLSL: Fullscreen blob shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 resolution;

  float blob(vec2 p, float t) {
    float strength = 0.4;
    for (int i = 0; i < 3; i++) {
      p += vec2(
        sin(t * 0.3 + float(i) * 1.3 + p.y * 3.0),
        cos(t * 0.5 + float(i) * 1.1 + p.x * 3.0)
      ) * strength;
      strength *= 0.5;
    }
    return 0.5 + 0.5 * sin(length(p) * 6.0 - t);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float t = uTime * 0.5;
    float b = blob(uv, t);

    vec3 color = mix(vec3(0.9, 0.5, 1.0), vec3(0.0, 0.9, 0.7), b);
    gl_FragColor = vec4(color, 1.0);
  }
`

// Shader material
const BlobShaderMaterial = shaderMaterial({ uTime: 0, resolution: new THREE.Vector2() }, vertexShader, fragmentShader)

extend({ BlobShaderMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      blobShaderMaterial: ReactThreeFiber.Node<typeof BlobShaderMaterial, typeof BlobShaderMaterial>
    }
  }
}

// Material component
function BlobMaterial() {
  const ref = useRef<any>()
  useFrame(({ clock, size }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime()
      ref.current.resolution.set(size.width, size.height)
    }
  })
  return <blobShaderMaterial ref={ref} attach="material" />
}

// Fullscreen mesh using viewport width/height
function FullscreenQuad() {
  const { viewport } = useThree()
  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <BlobMaterial />
    </mesh>
  )
}

// Final export
export default function FluidBackground() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
        <FullscreenQuad />
      </Canvas>
    </div>
  )
}
