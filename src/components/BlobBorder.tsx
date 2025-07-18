"use client"

import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useRef } from "react"
import { TextureLoader } from "three/src/loaders/TextureLoader"

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision mediump float;

uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

// Simple pseudo-noise
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(41.0, 289.0))) * 43758.5453123);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f); 

  float a = noise(i);
  float b = noise(i + vec2(1.0, 0.0));
  float c = noise(i + vec2(0.0, 1.0));
  float d = noise(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec2 center = vec2(0.5);
  vec2 pos = vUv - center;
  float radius = length(pos);

  // Distort the radius with smooth noise for wavy blob shape
  float distortion = smoothNoise(vUv * 3.0 + uTime * 0.5) * 0.05;
  float blobRadius = 0.4 + distortion;

  // Sharp alpha edge using step
  float alpha = step(radius, blobRadius);

  vec4 texColor = texture2D(uTexture, vUv);
  gl_FragColor = vec4(texColor.rgb, alpha);
}


`

const BlobMaterial = shaderMaterial({ uTime: 0, uTexture: null }, vertexShader, fragmentShader)

extend({ BlobMaterial })

declare module "@react-three/fiber" {
  interface ThreeElements {
    blobMaterial: any
  }
}

function BlobMesh({ imageSrc }: { imageSrc: string }) {
  const ref = useRef<THREE.ShaderMaterial>(null!)
  const texture = useLoader(TextureLoader, imageSrc)
  const { viewport } = useThree()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh scale={[1, viewport.height / viewport.width, 1]}>
      <planeGeometry args={[1, 1]} />
      <blobMaterial ref={ref} attach="material" transparent uniforms-uTexture-value={texture} />
    </mesh>
  )
}

export function BlobBorder({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative w-[240px] h-[310px]">
      <Canvas className="absolute inset-0" orthographic camera={{ zoom: 200, position: [0, 0, 10] }}>
        <BlobMesh imageSrc={imageSrc} />
      </Canvas>
    </div>
  )
}
