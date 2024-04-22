import AdminTabs from './adminTabs'

const adminPortal = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className='flex h-full'>
        <AdminTabs />
      </div>
      {/* <div className='flex flex-col'>
        <Footer />
      </div> */}
    </div>
  )
}

export default adminPortal