import React from 'react';
import InfiniteScroll from '../../public/Images/InfiniteScrollNext.png';
import Image from 'next/image';
import Link from 'next/link';
import leftArrow from "../../public/Images/left-arrow.png";

export const metadata = {
  title: 'Next.Js 13 Infinite Scrolling Using App directory',
  description: "Learn how to implement infinite scrolling functionality on your Next.js app directory with our sample anime list application. Checkout step-by-step instructions, code repo, component Architecture to create Infinite scrolling functionality using the combination of server and client components.",
  keywords: ['Next.js', 'Next.js 13', 'Next.js 13.3', 'app directory', 'server components', 'client components', 'infinite scrolling', 'frontend development'],
  openGraph: {
    title: 'Next.Js 13 Infinite Scrolling Using App directory',
    url: 'https://rex-anime.vercel.app/',
    images: [
      {
        url: 'https://s1.zerochan.net/Rex.Salazar.600.542515.jpg',
        width: 800,
        height: 600,
      },
    ],
    authors: ['Raveen'],
    description: "Learn how to implement infinite scrolling functionality on your Next.js app directory with our sample anime list application. Checkout step-by-step instructions, code repo, component Architecture to create Infinite scrolling functionality using the combination of server and client components.",
  },
  twitter: {
    title: 'Next.Js 13 Infinite Scrolling Using App directory',
    images: [
      {
        url: 'https://s1.zerochan.net/Rex.Salazar.600.542515.jpg',
        width: 800,
        height: 600,
      },
    ],
    creator: 'Raveen',
    description: "Learn how to implement infinite scrolling functionality on your Next.js app directory with our sample anime list application. Checkout step-by-step instructions, code repo, component Architecture to create Infinite scrolling functionality using the combination of server and client components.",
  },
}

function Next() {
  return (
    <div className='flex flex-col justify-center items-center mt-6 px-2'>
      <div className='text-3xl'>
        Next Js 13.3
      </div>
      <div className='mt-4'>
        This App was built using Next js 13.3 with App directory.
      </div>
      <Link href={''} className='mt-4 mb-10'>
        <Image src={leftArrow} alt='left Arrow' className='inline-block mr-2 w-4'/>
        View App
      </Link>
      <div className='w-5/6'>
        <p className='text-4xl '>Infinite Scroll</p>
        <div className='pl-5 text-lg'>
          <ul>
            <li>&bull; The purpose of this app is demonstrate Infinite scroll using the both client and server components combined.</li>
            <li>&bull; We use a server component that just makes the API calls and generate ReactNode with a list of items (In our case it is 60).</li>
            <li>&bull; We wrap the server component around a client component so that the client component gets the server component&apos;s React element as a child.</li>
            <li>&bull; We maintain a react state which stores a list of children nodes in the client component.</li>
            <li>&bull; So every time when we scroll near the threshold we do a soft refresh of page using router.refresh() which is a function of next which does a refresh of page without losing the client states.</li>
            <li>&bull; When the refresh is happening the server component code will be executed again, at that time we need to specify the server component to skip the initial few values and return the next list of items.</li>
            <li>&bull; For that purpose we use cookies.</li>
            <li>&bull; Just before doing router.refresh we set the cookies on how man list is already displayed in the ui, so that the server component can get the cookies before execution and skip the values to get the next list.</li>
            <li>&bull; Thus once the server returns the list we append it to our state and the combined list is shown in the UI.</li>
          </ul>
        </div>
      </div>
      <div className='mt-4'>The Github URL for this App is: <Link className='text-blue-600 text-lg' href={'https://github.com/Raveenrathnaraj'}>https://github.com/Raveenrathnaraj</Link></div>
        <div className='mt-8 mb-10'>The Architecture diagram for Infinite scroll flow is as below</div>
      <div>
        <Image src={InfiniteScroll} className='w-11/12' alt='InfiniteScroll architecture' />
      </div>
    </div>
  );
}

export default Next;