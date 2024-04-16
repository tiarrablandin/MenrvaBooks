import AdminTabs from './adminTabs'
import Sidebar from './sidebar'

const adminPortal = () => {
  return (
    <div className="w-full h-full">
      <Sidebar/>
      <AdminTabs />
    </div>
  )
}

export default adminPortal