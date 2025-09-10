import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ProfilePic from './components/ProfilePic'
import Introduction from './components/Introduction'

function App() {
  return (
    <>
    <Header />
    <SideBar />
    <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        <Introduction/>
      </div>
      <div className='hidden md:block'>
        <ProfilePic/> 
      </div>
    </div>
    </>
  )
}

export default App