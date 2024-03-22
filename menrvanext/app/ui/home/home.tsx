import React from 'react'
import BookSlider from '../common/CardSlider/BookSlider/BookSlider'
import SearchBar from '../search/SearchBar'

const HomeComponent = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <SearchBar />
      <BookSlider/>
    </div>
  )
}

export default HomeComponent