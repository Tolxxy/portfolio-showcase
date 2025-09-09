import React from 'react'
import Logo from '../assets/logo-2.png'


function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SKILLS",
    },
    {
      id: 3,
      name: "PROJECTS",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ];
  return (
    <>
      <div className='w-[60px] h-[60px] flex'>
        <img className='' src={Logo} alt="Logo" />
      </div>
      <div>
        {menu.map((item)=>(
          <div>
            {item.name}
          </div>
        ))}
      </div>

    </>
  )
}

export default Header