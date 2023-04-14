import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {cookies} from 'next/headers';

interface AnimeDataType {
  animeId: string,
  animeTitle: string,
  animeImg: string,
  latestEp: string,
  animeUrl: string,
  genres: string[],
}

const getAnimeList = async (page: number) => {
  const resArray = await Promise.all(Array.from({length: 6}, (_, i) => {
    const p = (page * 5) + (i + 1);
    return fetch("https://gogoanime.consumet.stream/top-airing?page=" + p)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return [];
      })
      .catch((e) => {
        console.log(e);
        return [];
      });
  }));
  const animeData: AnimeDataType[] = resArray.reduce((acc, v) => [...acc, ...v]);
  console.log(animeData?.length);
  return animeData;
};

async function AnimePage() {
  const cookieStore = cookies();
  const page = cookieStore.get('Page')?.value;
  console.log('skip = ', Number(page ?? 0));
  const animeList = await getAnimeList(Number(page ?? 0));

  if (!animeList) {
    return 'No Items'
  }

  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-8 w-full justify-items-center'>
      {animeList?.map((item) => <AnimeCard key={item?.animeId} {...item} />)}
    </div>
  );
}

const AnimeCard = ({
  animeId,
  animeTitle,
  animeImg,
  latestEp,
  animeUrl,
  genres,
}: AnimeDataType) => {
  return (
    <div className='max-w-xs w-full m-4 flex-shrink-0 rounded-xl border-white border-2'>
      <Link href={animeUrl}><Image src={animeImg ?? ''} alt='Anime' width={240} height={240} className='w-full object-cover h-72 rounded-t-xl hover:ease-in hover:object-contain cursor-pointer' /></Link>
      <div className='p-4 rounded-b-xl flex-col flex justify-between'>
        <div className='text-lg font-semibold h-16'>{animeTitle?.slice(0, 35)}{animeTitle?.length > 35 && '...'}</div>
        <div className='h-24'>
          <div className='border-t-1 border-t mt-3 pt-3'><span className='text-green-300'>Genre:</span> {genres?.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;