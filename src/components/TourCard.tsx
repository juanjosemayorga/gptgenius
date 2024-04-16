import Link from 'next/link';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const TourCard = ({ tour }: any) => {
  const { city, title, id, country } = tour;
  const labelToShow = `${capitalize(city)}, ${capitalize(country)}`;

  return (
    <Link
      href={`/tours/${id}`}
      className='card card-compact rounded-xl bg-base-100'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-center'>
          {labelToShow}
        </h2>
      </div>
    </Link>
  );
};
