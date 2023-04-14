import Link from 'next/link';
import React from 'react';
import Instagram from '../public/Images/instagram.png';
import Image from 'next/image';
import localFont from 'next/font/local';

export const vibeFont = localFont({
  src: [
    {
      path: '../public/Fonts/GreatVibes-Regular.ttf',
      weight: '500'
    }
  ],
  variable: '--great-vibes'
});

function Navbar() {
  return (
    <div className='flex py-4 px-2 sm:px-10 box-border w-full items-center justify-between bg-navbar bg-[#000000]'>
      <div className='flex items-center'>
        <Link href={'/'}>
          <div className={`${vibeFont.variable} font-sans text-7xl`}>Rex</div>
        </Link>
      </div>
      <div className='flex items-center'>
        <Link href={'/next'} className='mr-6'>
          <div>Next.Js</div>
        </Link>
        <Link href={'https://www.instagram.com/raveen_rex'}>
          <Image
            src={Instagram}
            alt= 'Seminal Logo'
            className='h-10 object-cover w-auto mr-5'
          />
        </Link>
      </div>
    </div>

  );
}

export default Navbar;