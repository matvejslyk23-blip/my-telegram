export const metadata = {
  title: 'Telegram Clone',
  description: 'Secure Messenger'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}