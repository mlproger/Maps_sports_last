import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {checkIsAuth, logout} from '../redux/features/auth/authSlice.js'

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    //window.location.reload();
  }
 
  return (
    <div className='flex justify-between items-center w-[100%] mx-auto bg-navBarColor py-0 pr-5'>
      <div>
        <NavLink to= {'/'}><img src = "logo.png" className='w-40'/></NavLink>
      </div>
      <ul className='flex items-center gap-[5vw]'>
        <li><NavLink to={'/MapPlaces'} href="/" className='text-xl text-black hover:underline'>Карта объектов</NavLink></li>
        <li><NavLink to={'/ListPlaces '} href="/" className='text-xl text-black hover:underline'>Список объектов</NavLink></li>
      </ul>
      <div className='bg-btnColor text-white px-5 py-2 rounded-3xl hover:bg-btnColorHover'>
      {isAuth==false ? (
      <Link to = {'/login'}>
          <button>Войти</button>
        </Link>) : 
        (<button onClick={logoutHandler}>Выйти</button>)}
        
      </div>    
    </div>
    
  )
}
