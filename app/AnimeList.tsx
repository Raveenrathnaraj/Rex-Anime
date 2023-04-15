'use client';
import React, {Fragment, ReactNode, useEffect, useState} from 'react';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import AnimeCardSkeleton from './AnimeCardSkeleton';

function AnimeList({
  children,
}: {children: ReactNode}) {
  const [animeList, setAnimeList] = useState<ReactNode[]>([]);
  const [childrenValue, setChildrenValue] = useState();
  const cookiePage = Number(Cookies.get('Page') ?? 0);
  const router = useRouter();

  const onScrollToEnd = () => {
    if (!!childrenValue && animeList?.length > cookiePage && animeList[animeList?.length - 1] !== 'No Items') {
      Cookies.set('Page', (animeList?.length).toString());
      router.refresh();
    }
  };

  const removeCookie = () => {
    Cookies.remove('Page');
  };

  useEffect(() => {
    window.addEventListener("beforeunload", () => removeCookie());
    return () => {
      removeCookie();
      window.removeEventListener("beforeunload", () => removeCookie());
    };
  }, []);

  const loadChildren = async (children: any) => {
    const data = await children?._payload;
    setChildrenValue(data?.props);
    !!data ? setAnimeList([...animeList, children]) : setAnimeList([...animeList, '']);
  };

  useEffect(() => {
    loadChildren(children);
  }, [children]);

  return (
    <Fragment>
      <InfiniteScrollWrapper eventCallback={onScrollToEnd} marginFromBottom='3000px'>
        {animeList}
      </InfiniteScrollWrapper>
      {animeList[0] === 'No Items' ?
        <div className='flex flex-col justify-center h-[calc(100vh-90px)] items-center w-full'>
          <div>No Results Found</div>
        </div> : animeList[animeList?.length - 1] !== 'No Items' && animeList?.length === cookiePage && <AnimeCardSkeleton />
      }
    </Fragment>
  );
}

export default AnimeList;