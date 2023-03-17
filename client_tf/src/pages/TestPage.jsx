import React from 'react'
import {Box, CircularProgress, gridClasses, Typography} from '@mui/material'
import {DataGrid, useGridSelector} from '@mui/x-data-grid'
import {useQuery} from 'react-query'
import axios from '../utils/axios.js'
import { useMemo } from 'react'
import { borderColor } from '@mui/system'
import { Link } from 'react-router-dom'

export const TestPage = () => {


    const { isLoading, error, data, isFetching } = useQuery("repoData",
        async () =>
            await axios.get(
            "places/all"
            ).then((res) => res.data),
            {
            refetchOnWindowFocus: true,
            }
    )

    const columns = useMemo(() => [
        {field: "Название:",headerName:<strong className='text-xl'>Название объекта</strong>, width: 350, editable:false},
        // {field: "Контактный телефон объекта:", headerName:'Телефон', width: 3000, editable:false},
        // {field: "URL сайта:", headerName:'Сайт', width: 120, editable:false},
        // {field: "E-mail:", headerName:'Email', width: 120, editable:false},
        {field: "Адрес:", headerName:<strong className='text-xl'>Адрес</strong>, width: 400, editable:false},
        {field: "Активный:", headerName:<strong className='text-xl'>Работает?</strong>, width: 140, editable:false},
        {field: "ФЦП (федеральная целевая программа):", headerName:<strong className='text-xl'>ФЦП</strong>, width: 250, editable:false},
        {field: "id:", headerName:<strong className='text-xl'>Полная информация</strong>, type:'actions',width:300, renderCell:(params) => 
        (
                <Link to = {`/${params.row["id:"]}`} style={{color:'#e99f4c'}}>Страница объекта</Link>
        )},
    ], [])
  

  if(isLoading){
    return <div className="m-auto h-full w-full text-center my-auto">
        <CircularProgress></CircularProgress>
    </div>
  }

  return (
    <div className='h-full px-6'>
        <Box 
            sx = {{
                height:600,
                width:'100%',
            }}
        >
            <Typography variant='h3' component='h3' sx={{textAlign:'center', mt:3, mb:3}}> 
                Подробный список объектов
            </Typography>
            <DataGrid 
                columns={columns}
                rows={data["data"]}
                getRowId={row=>row._id}
                componentsProps={{
                    pagination:{
                        labelRowsPerPage: 'Показывать по'
                    }
                }}
                disableColumnFilter={true}
                disableRowSelectionOnClick={true}
                disableColumnSelector={true}
                disableDensitySelector={true}
                disableColumnMenu={true}
                sx={{
                    border: 1,
                    borderRadius:8,
                    borderWidth:2,
                }}
            />
        </Box>
    </div>
  )
}
