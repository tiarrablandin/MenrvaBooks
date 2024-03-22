import React from 'react'
import BookSlider from '../bookSlider'
import SearchBar from '../searchBar'
import { fetchBooks } from '@/app/services/apiService'

const HomeComponent = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <SearchBar />
      <BookSlider callback={fetchBooks}/>
    </div>
  )
}

export default HomeComponent;