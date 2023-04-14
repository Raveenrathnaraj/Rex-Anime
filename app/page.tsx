import AnimeList from "./AnimeList";
import AnimePage from "./AnimePage";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-3">
      <h1 className='text-7xl mb-10 text-center'>Top Airing Anime</h1>
      <AnimeList>
      {/* @ts-expect-error Async Server Component */}
        <AnimePage/>
      </AnimeList>
    </main>
  );
}
