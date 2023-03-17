import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {status} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(checkIsAuth)
  useEffect(() => {
    if(status){
      toast(status)
      if(isAuth) navigate('/')
    }
  }, [status, isAuth, navigate])

  const submit = () => {
    try {
      dispatch(loginUser({email, password}))
      setPassword('')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}
    className='w-1/4 mx-auto mt-56 h-96'
    >
        <h1 className='text-center text-3xl font-bold text-white'>Войти</h1>
        <label>
          <input 
            type="text" placeholder='Email/телефон'
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            className='mt-2 w-full rounded-lg bg-gray border py-3 px-2 text-m outline-none'/>
        </label>
        <label>
          <input 
          type="password" placeholder='Пароль'
          value={password}
          onChange = {(e) => setPassword(e.target.value)} 
          className='mt-4 w-full rounded-lg bg-gray border py-3 px-2 text-m outline-none'/>
        </label>
        <div className='flex justify-center items-center w-full'>
            <div className='bg-btnColor text-white px-5 py-2 rounded-xl hover:bg-btnColorHover mt-4'>
                <Link to = '/reg'><button>Нет аккаунта?</button></Link>
            </div>
        </div>
        <div className='bg-btnColor text-white px-5 py-2 rounded-xl hover:bg-btnColorHover mt-4 text-center'>
          <button type='submit' onClick={submit}>Продолжить</button>
        </div>
    </form>
  )
}
