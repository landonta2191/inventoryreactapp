import React from 'react'
// import './sidebar.css'

export default class Topbar extends React.Component {
  render() {
    return (
      <section className='topbar'> 
        <input className='topbar__search' type='text' placeholder='Search' />
        <div className='topbar__right'>
            <img className='topbar__right--avatar' src='../Assets/WDFT_-_Jenn_Blunt.jpg' alt='user avatar'/>
            <img className='topbar__right--dropdown'src='../Assets/Icons/Dropdown.svg' alt='dropdown icon'/>
            <option />
        </div>
      </section>
    )
  }
}