import { YMaps, Map, Placemark, Clusterer, ObjectManager, ZoomControl} from '@pbe/react-yandex-maps';
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { useDispatch } from 'react-redux';
import axios from '../utils/axios.js'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';

export const MapPlacesPage = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "places/all"
    ).then((res) => res.data)
  );

  const places = []


  if(isLoading){
    return <div className="mx-auto h-full, w-full">
      <CircularProgress></CircularProgress>
    </div>
  }

  const features = []
  data["data"].map((i) => (
    features.push({
      type: "Feature",
      id: i["id:"],
      geometry: {
        type: "Point",
        coordinates: [i["Яндекс координата объекта Y:"], i["Яндекс координата объекта X:"]]
      },
      properties: {
        "balloonContent": i["Название:"]
      }
    })
  ))



  return (
    <YMaps>
      <div>
        <Map 
          defaultState={{ center: [50, 20], zoom: 3 }}
          width="100vw"
          height="90vh"
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
  
  )
}
