'use client';

import { fetchBooks, fetchNewReleases } from '@/app/lib/services/apiService'
import BookSlider from '../book/bookSlider'
import BookSkeleton from '../book/bookSkeleton';
import SearchBar from '../searchBar';
import ThemeToggle from '../theme/themeToggle';

// Advanced Search
// Trending based of of people reading
// Announcements?

const HomeComponent: React.FC = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <SearchBar/>
      <ThemeToggle/>
      <BookSlider fetchData={fetchNewReleases} title={"New Releases"} />
    </div>
  )
}

export default HomeComponent;