import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex p-3  gap-7 bg-red-300'>
      <Link href="/">home</Link>
      <Link href="address/">addresss</Link>
      <Link href="about/">about</Link>
      <Link href="contact/">contact</Link>
    </div>
  )
}

export default Header