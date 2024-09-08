import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-red-400 gap-4 flex P-6'>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Conditions</Link>
        <Link href="#">contact</Link>
        
    </div>
  )
}

export default Footer