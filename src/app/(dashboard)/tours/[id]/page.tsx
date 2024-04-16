import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { generateTourImage, getSingleTour } from '@/utils/actions';
import { TourInfo } from '@/components/TourInfo';
import prisma from '@/utils/db';

type SingleTourPageProps = {
  params: {
    id: string;
  };
};

const SingleTourPage = async ({ params }: SingleTourPageProps) => {
  const tour = await prisma.tour.findUnique({
    where: {
      id: params.id,
    },
  });

  const tourImage = await generateTourImage({
    city: tour.city,
    country: tour.country,
  });

  return (
    <div>
      <Link href='/tours' className='btn btn-secondary mb-12'>
        back to tours
      </Link>

      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
            alt={tour.title}
            priority
          />
        </div>
      ) : null}

      <TourInfo tour={tour} />
    </div>
  );
};

export default SingleTourPage;
