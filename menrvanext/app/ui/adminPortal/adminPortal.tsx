import React from 'react'
import SearchTable from './searchTable'
import AdminTabs from './adminTabs'
import Sidebar from './sidebar'

const adminPortal = () => {
  return (
    <div className="w-full h-full">
      <Sidebar/>
      <AdminTabs />
      {/* <SearchTable/> */}
    </div>
  )
}

export default adminPortal