import Link from "next/link";
import AnimeList from "./AnimeList";
import AnimePage from "./AnimePage";
import rightArrow from "../public/Images/right-arrow.png";
import Image from "next/image";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-3">
      <div className="flex justify-between w-full items-center md:flex-row flex-col mb-10 gap-6">
        <h1 className='text-5xl text-center'>Top Airing Anime</h1>
        <Link href={'/next'}>
          <span className="text-center">
            View Next js architecture
            <Image src={rightArrow} alt='Arrow' className="w-4 inline-block ml-2" />
          </span>
        </Link>
      </div>
      <AnimeList>
        {/* @ts-expect-error Async Server Component */}
        <AnimePage />
      </AnimeList>
    </main>
  );
}
