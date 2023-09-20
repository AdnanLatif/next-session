import Link from 'next/link';
import NavBar from '../components/NavBar';
import { RestaurantCard } from './componenets/RestaurantCard';
import { SearchSideBar } from './componenets/SearchSideBar';
import { Header } from './componenets/Header';

export default function Search() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen text-gray-500'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSideBar />

          <div className='w-5/6'>
            <Link href={'restaurant/kfc'}>
              <RestaurantCard />
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
