import FluidBackground from "../components/FluidBackground"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FluidBackground />
        {children}
      </body>
    </html>
  )
}
