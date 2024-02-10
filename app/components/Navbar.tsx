import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav>
            <Link href='/'> Home</Link>
            <Link href='/tickets'>Tickets</Link>
            <Link href='/tickets/create'>CreateTicket</Link>
        </nav>
        
        
      
    </div>
  )
}
