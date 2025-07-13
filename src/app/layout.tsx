import "./globals.css"
import FluidBackground from "../components/FluidBackground"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/byd7aya.css" />
      </head>
      <body>
        <FluidBackground />
        {children}
      </body>
    </html>
  )
}
