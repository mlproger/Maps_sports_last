import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {createReview, send} from '../redux/features/reviews/reviewsSlice'
import { toast } from 'react-toastify'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from 'antd';
const { TextArea } = Input;

export const ReviewPage = () => {

  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const params = useParams()
  const [raithing, setraithing] = useState(0)
  const {status} = useSelector((state) => state.review)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if(status){
      toast(status)
      navigate(`/${params.id}`)
      dispatch(send())
    }
  }, [status,navigate])

  const submit = () => {
    try {
        const id_places = Number(params.id)
        console.log(id_places)
      dispatch(createReview({text, raithing, author, id_places}))
      setText('')
      setAuthor('')
      setraithing(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}
    className='w-2/4 mx-auto mt-20 '
    >
        <h1 className='text-center text-3xl font-bold text-white'>Написать отзыв</h1>
        <TextArea rows={6} placeholder={"Отзыв"} value={text} onChange = {(e) => setText(e.target.value)}/>
        <label>
          <input 
          type="text" placeholder='Отображаемое имя'
          value={author}
          onChange = {(e) => setAuthor(e.target.value)} 
          className='mt-4 w-full rounded-lg bg-gray border py-3 px-2 text-m outline-none'/>
        </label>
        <Box sx={{ minWidth: 120 }} className='py-5'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ваша оценка</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={raithing}
                label="Оценка"
                onChange={(e) => setraithing(e.target.value)}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <div className='bg-btnColor text-white px-5 py-2 rounded-xl hover:bg-btnColorHover mt-4 text-center'>
          <button type='submit' onClick={submit}>Отправить</button>
        </div>
    </form>
  )
}
