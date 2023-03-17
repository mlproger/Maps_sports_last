import React, {useCallback, useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../redux/features/places/placesSlice.js'
import axios from '../utils/axios.js'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Collapse } from 'antd';
import { YMaps, Map, Placemark, Clusterer, ObjectManager, ZoomControl} from '@pbe/react-yandex-maps';
import { Review } from '../components/Review.jsx'
import Paper from '@mui/material/Paper';

const { Panel } = Collapse;

export const CurretnPlacePage = () => {
  const params = useParams()
  const [place, setPlace] = useState()
  const fetchPlace = useCallback(async () => {
    const data = await axios.get(`/places/current/${params.id}`)
    setPlace(data["data"])
  }, [params.id])


  useEffect(() => {
    fetchPlace()
  }, [fetchPlace])

  if (!place) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
}

const features = []
features.push({
  type: "Feature",
  id: place["id:"],
  geometry: {
    type: "Point",
    coordinates: [place["Яндекс координата объекта Y:"], place["Яндекс координата объекта X:"]]
  },
  properties: {
    "balloonContent": place["Название:"]
  }
})
  return (
    <div className='m-auto py-6'>
      {
        <h1 className='text-center text-2xl mb-5'>{place["Название:"]}</h1>
      }
      <div className="flex justify-evently">
      <div className="text w-1/3">
        <Collapse defaultActiveKey={['0']} onChange={null}>
          <Panel header="Кратоке описание объекта" key="1">
            <p>{place["Краткое описание:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Детальное описание" key="2">
            <p>{place["Детальное описание:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Адрес объекта" key="3">
            <p>{place["Адрес:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="ОКТМО" key="4">
            <p>{place["ОКТМО:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="ФЦП (федеральная целевая программа):" key="5">
            <p>{place["ФЦП (федеральная целевая программа):"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Действия с объектом:" key="6">
            <p>{place["Действия с объектом:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Дата начала строительства / реконструкции:" key="7">
            <p>{place["Дата начала строительства / реконструкции:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Дата завершения строительства / реконструкции:" key="8">
            <p>{place["Дата завершения строительства / реконструкции:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Общий объём финансирования::" key="9">
            <p>{place["Общий объём финансирования:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из федерального бюджета (из них освоено):" key="10">
            <p>{place["Финансирование из федерального бюджета (из них освоено):"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из бюджета субъекта федерации:" key="11">
            <p>{place["Финансирование из бюджета субъекта федерации:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из бюджета субъекта федерации (из них освоено):" key="12">
            <p>{place["Финансирование из бюджета субъекта федерации (из них освоено):"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из бюджета муниципального образования:" key="13">
            <p>{place["Финансирование из бюджета муниципального образования:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из бюджета субъекта федерации:" key="14">
            <p>{place["Финансирование из бюджета субъекта федерации:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из внебюджетных источников:" key="15">
            <p>{place["Финансирование из внебюджетных источников:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из внебюджетных источников:" key="16">
            <p>{place["Финансирование из внебюджетных источников:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Финансирование из внебюджетных источников (из них освоено):" key="17">
            <p>{place["Финансирование из внебюджетных источников (из них освоено):"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Курирующий орган:" key="18">
            <p>{place["Курирующий орган:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Телефон курирующего органа" key="19">
            <p>{place["Телефон курирующего органа:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Контактный телефон объекта" key="20">
            <p>{place["Контактный телефон объекта:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Режим работы Пн.-Пт." key="21">
            <p>{place["Режим работы Пн.-Пт.:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Режим работы Сб." key="22">
            <p>{place["Режим работы Сб.:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Режим работы Вс." key="23">
            <p>{place["Режим работы Вс.:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Площадь" key="24">
            <p>{place["Площадь:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="E-mail" key="25">
            <p>{place["E-mail:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="URL сайта" key="26">
            <p>{place["URL сайта:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Внесён в реестр?" key="27">
            <p>{place["Внесён в реестр?:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Тип спортивного комплекса" key="28">
            <p>{place["Тип спортивного комплекса:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Какие соревнования проводятся?" key="29">
            <p>{place["Какие соревнования проводятся?:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Виды спорта" key="30">
            <p>{place["Виды спорта:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Яндекс координата объекта X" key="31">
            <p>{place["Яндекс координата объекта X:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Яндекс координата объекта Y" key="32">
            <p>{place["Яндекс координата объекта Y:"]??'Данные не найдены'}</p>
          </Panel>
          <Panel header="Генеральный план" key="33">
            <p>{place["Генеральный план:"]??'Данные не найдены'}</p>
          </Panel>
        </Collapse>
      </div>
        <div className="w-2/3 mx-10">
          <div className="pb-20 border-red-200">
              {
                place!=null ? (
                  <YMaps>
          <div>
            <Map 
              defaultState={{ center: [place["Яндекс координата объекта Y:"], place["Яндекс координата объекта X:"]], zoom: 14 }}
              width="65vw"
              height="50vh"
            >
              <ZoomControl />
              <ObjectManager
              options={{
                clusterize: true,
                gridSize: 32
              }}
              objects={{
                openBalloonOnClick: true,
                preset: "islands#greenDotIcon"
              }}
              clusters={{
                preset: "islands#redClusterIcons"
              }}
              defaultFeatures={features}
              modules={["objectManager.addon.objectsBalloon"]}
              
            />
            </Map>
          </div>
          {
      }
      </YMaps>
                ) : (
                  <CircularProgress />
                )
              }
          </div>
          <div className="h-1/4 text-center w-2/3 m-auto items-center">Отзывы{
              <Review></Review>
          }</div>
        </div>
      </div>
      
    </div>
  )
}
