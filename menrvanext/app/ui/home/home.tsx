import { fetchBooks } from '@/app/services/apiService'
import BookSlider from '../bookSlider'

const HomeComponent: React.FC = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start'>
      <BookSlider callback={fetchBooks} title='All Books'/>
    </div>
  )
}

export default HomeComponent;