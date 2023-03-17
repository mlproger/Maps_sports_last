import { Link } from '@mui/material'
import React from 'react'


export const MainPage = () => {
  return (
    <div className='w-full h-full m-auto text-center text-4xl py-4'>
      <h1 className='py-5'>Приветствуем Вас на Maps.Sports </h1>
      <h2 className=''>На сайте вы сможете просмотреть информацию </h2>
      <h2>по спортивным объектам со всей страны</h2>
      <h2 className='py-5'>Информация взята c
        {
          <Link href='https://data.gov.ru/opendata/7703771271-sportobjects'> сайта</Link>
        }</h2>
        <h2 className='mt-5'>Есть возможность просмотра интерактивной карты </h2>
        <h2>и подробной информации по объектам</h2>
        <h2 className='py-5'>Добавлена обратная связь в форме отзывов и оценок</h2>
    </div>
  )
}
