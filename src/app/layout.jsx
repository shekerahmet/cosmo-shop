

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss"
import { roboto } from '@/utils/font';
import { SessionProvider } from "next-auth/react"









export const metadata = {
  title:{
		template:  "%s | Cosmo Shop",
		default: "Cosmo Shop"
	},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-100`}>
      <body className=" d-flex flex-column justify-content-between h-100">
        
        <SessionProvider>
        {children}
       </SessionProvider>
        
        </body>
    </html>
  )
}
