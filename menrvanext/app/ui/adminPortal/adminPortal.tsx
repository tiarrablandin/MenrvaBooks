import AdminTabs from './adminTabs'
import Sidebar from './sidebar'

const adminPortal = () => {
  return (
    <div className="w-full h-full flex">
      <Sidebar/>
      <AdminTabs />
    </div>
  )
}

export default adminPortal