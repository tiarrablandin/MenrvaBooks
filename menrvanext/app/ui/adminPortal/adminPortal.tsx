import React from 'react'
import SearchTable from './searchTable'
import AdminTabs from './adminTabs'

const adminPortal = () => {
  return (
    <div className="w-full h-full">
      <AdminTabs />
      {/* <SearchTable/> */}
    </div>
  )
}

export default adminPortal