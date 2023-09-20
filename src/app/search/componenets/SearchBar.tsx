'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchBar() {
  const [location, setLocation] = useState('');
  const router = useRouter();
  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <input
        className='rounded  mr-3 p-2 w-[450px]'
        type='text'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className='rounded bg-red-600 px-9 py-2 text-white'
        onClick={() => {
          if (location === 'mcg') {
            console.log('Routing to some location');
            router.push('/restaurant/kfc/menu');
          }
        }}>
        GO!
      </button>
    </div>
  );
}
