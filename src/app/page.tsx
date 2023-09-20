import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const getAllRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    include: {
      location: true,
      cuisine: true,
    },
  });
  return restaurants;
};
export default async function Home() {
  const restaurants = await getAllRestaurants();
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <main>
          <Header />
          <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </main>
      </main>
    </main>
  );
}
