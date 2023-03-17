import React from 'react'
import { useEffect, useState, useCallback,} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../utils/axios.js'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Button} from 'antd'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {useQuery} from 'react-query'
import Grid from '@mui/material/Grid';
import { ServoiceFeedback } from 'react-feedback-widget';
import {checkIsAuth, logout} from '../redux/features/auth/authSlice.js'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export const Review = () => {
const params = useParams()
const [currentId, setCurrentId] = useState(0)
const [data, setData] = useState()
const isAuth = useSelector(checkIsAuth)
const navigate = useNavigate()
const fetchData = useCallback(async () => {
    const data = await axios.get(`/reviews/${params.id}`)
    console.log(data)
    setData(data["data"])
  }, [params.id])

useEffect(() => {
    fetchData()
}, [fetchData])


    const next = () => {
        if(currentId+1 < data.len){
            setCurrentId(currentId+1)
        }
      }
      const prev = () => {
        if(currentId-1 >= 0){
            setCurrentId(currentId-1)
        }
      }

      const createReview = () => {
        if(!isAuth){
            console.log(2)
            toast("Чтобы написать отзыв, необходимо авторизоваться")
        }
        else{
            //console.log(params.id)
            navigate(`/review/${params.id}`)
        }
      }

      if(!data){
        return(<CircularProgress></CircularProgress>)
      } else {
        return (
            <div className='h-auto m-auto py-10 bg-white overflow-x-hidden' >
                {
                    data.len != 0 ? (
                    <div className=''>
                        <div className='text-xl'>
                            <h4>{
                                data.reviews[currentId]['author'] ?? 'dd'
                            }</h4>
                            <p className='py-5'>{
                            data.reviews[currentId]['text'] ?? 'ds'
                            }
                            </p>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                            <Rating name="read-only" value={data.reviews[currentId]["raithing"]} readOnly /></Box>
                        </div>
                        <div className='mt-20 flex justify-evenly'>
                            <Button icon={<LeftOutlined></LeftOutlined>} onClick={prev}></Button>
                            <Button onClick={createReview}>Написать отзыв</Button>
                            <Button icon={<RightOutlined></RightOutlined>} onClick={next}></Button>
                        </div>
                    </div>
                    
                
                    ) : (
                        <div>Отзывов нет
                            <div><Button onClick={createReview}>Написать отзыв</Button></div>
                        </div>
                    )
                }
            </div>
          )
      }
    
      
  }

