import Link from 'next/link';

// Helper function to map price rating to dollar signs
const getPriceSigns = (priceRating) => {
  switch (priceRating) {
    case 'CHEAP':
      return '$';
    case 'REGULAR':
      return '$$';
    case 'EXPENSIVE':
      return '$$$$';
    default:
      return '';
  }
};

export default function RestaurantCard({ restaurant }) {
  const { name, image, reviews, pricing } = restaurant;
  const locationName = restaurant.location.name;
  const cuisineName = restaurant.cuisine.name;
  const priceSigns = getPriceSigns(pricing); // Get the dollar signs for price rating

  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={image} alt={name} className='w-full h-36' />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2 text-black'>{name}</h3>
          <div className='flex items-start text-gray-700'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>{reviews} reviews</p>
          </div>
          <div className='flex text-reg font-light capitalize text-gray-500'>
            <p className='mr-3'>{cuisineName}</p>
            <p className='mr-3'>{priceSigns}</p> {/* Use the dollar signs */}
            <p>{locationName}</p>
          </div>
          <p className='text-sm mt-1 font-bold text-gray-500'>
            Booked 3 times today
          </p>
        </div>
      </Link>
    </div>
  );
}
