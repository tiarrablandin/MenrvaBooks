import { Footer } from '../footer'
import AdminTabs from './adminTabs'
import Sidebar from './sidebar'

const adminPortal = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className='flex h-full'>
        <Sidebar />
        <AdminTabs />
      </div>
      {/* <div className='flex flex-col'>
        <Footer />
      </div> */}
    </div>
  )
}

export default adminPortal