import Navbar from '@/components/Navbar'
import './globals.css'
// Import the Poppins font from Google Fonts
import { Poppins } from 'next/font/google'

// Configure the font
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'] 
})

export const metadata = {
  title: 'Debate Association of Kenya',
  description: 'Shaping Tomorrow\'s Voices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font class to the body tag */}
      <body className={poppins.className}> 
        <Navbar />
        {children}
      </body>
    </html>
  )
}