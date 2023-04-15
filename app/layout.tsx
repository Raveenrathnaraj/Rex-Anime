import Navbar from './Navbar';
import './globals.css';
import {getAnimeList} from './AnimePage'
import {Metadata} from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const animeList = await getAnimeList(0);
  return {
    title: 'Rex Anime',
    description: "Looking for the best anime to watch? Look no further than our website, where you can find a hand-picked selection of the top airing anime shows. From action-packed adventures to heartwarming dramas, we've got it all. Browse our list today and discover your new favorite series!",
    keywords: [...animeList.map((data) => data?.animeTitle), 'Top Airing Anime', 'Best Anime', 'Weekly Top Anime', 'Highest Rated Anime', 'Next.js', 'Next.js 13', 'Next.js 13.3', 'app directory', 'server components', 'client components', 'infinite scrolling', 'frontend development'],
    openGraph: {
      title: 'Top Airing Animes',
      url: 'https://rex-anime.vercel.app/',
      images: [
        {
          url: 'https://s1.zerochan.net/Rex.Salazar.600.542515.jpg',
          width: 800,
          height: 600,
        },
      ],
      authors: ['Raveen'],
      description: "Looking for the best anime to watch? Look no further than our website, where you can find a hand-picked selection of the top airing anime shows. From action-packed adventures to heartwarming dramas, we've got it all. Browse our list today and discover your new favorite series!",
    },
    twitter: {
      title: 'Top Airing Animes',
      images: [
        {
          url: 'https://s1.zerochan.net/Rex.Salazar.600.542515.jpg',
          width: 800,
          height: 600,
        },
      ],
      creator: 'Raveen',
      description: "Looking for the best anime to watch? Look no further than our website, where you can find a hand-picked selection of the top airing anime shows. From action-packed adventures to heartwarming dramas, we've got it all. Browse our list today and discover your new favorite series!",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
