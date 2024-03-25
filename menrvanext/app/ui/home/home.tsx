'use client';

import { fetchBooks } from '@/app/services/apiService'
import BookSlider from '../book/bookSlider'
import BookSkeleton from '../book/bookSkeleton';

const HomeComponent: React.FC = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <BookSlider fetchData={fetchBooks} title='All Books' />
    </div>
  )
}

export default HomeComponent;