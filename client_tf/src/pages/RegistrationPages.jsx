import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, registerUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'


export const RegistrationPages = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {status} = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(status){
      toast(status)
      if(isAuth){
        navigate('/')
      }
    }
  }, [status, isAuth, navigate])

  const submit = () => {
    try {
      dispatch(registerUser({email, password}))
      setPassword('')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form 
    onSubmit={(e) => e.preventDefault()}
    className='w-1/4 mx-auto mt-56 h-96'
    >
        <h1 className='text-center text-3xl font-bold text-white'>Зарегистриоваться</h1>
        <label>
          <input 
            type="text" placeholder='Email'
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            className='mt-2 w-full rounded-lg bg-gray border py-3 px-2 text-m outline-none'/>
        </label>
        <label>
          <input 
          type="text" placeholder='Пароль'
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          className='mt-4 w-full rounded-lg bg-gray border py-3 px-2 text-m outline-none'/>
        </label>
        <div className='flex justify-between items-center w-full'>
            <div className='bg-btnColor text-white px-5 py-2 rounded-xl hover:bg-btnColorHover mt-4'><Link to = '/login'><button>Уже есть аккаунт?</button></Link></div>
            <div className='bg-btnColor text-white px-5 py-2 rounded-xl hover:bg-btnColorHover mt-4'>
              <button type='submit' 
              onClick={submit}
              >Продолжить</button>
            </div>
        </div>
        
    </form>
  )
}
