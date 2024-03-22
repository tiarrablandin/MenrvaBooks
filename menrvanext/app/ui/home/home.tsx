import React from 'react'
import BookSlider from '../bookSlider'
import SearchBar from '../searchBar'

const HomeComponent = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <SearchBar />
      <BookSlider/>
    </div>
  )
}

export default HomeComponent