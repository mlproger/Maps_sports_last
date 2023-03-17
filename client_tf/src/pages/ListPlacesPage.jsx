import React, {useEffect, useState}from 'react'
import axios from '../utils/axios.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {useQuery} from 'react-query'
import { Collapse } from 'antd';
import { Carousel } from 'antd';


const { Panel } = Collapse;


export const ListPlacesPage = () => {
  //const [places, setAppState] = useState()

  const { isLoading, error, data, isFetching } = useQuery("repoData",
  
  async () =>
    await axios.get(
      "places/all"
    ).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
    }
  )
  

  if(isLoading){
    return <div className="d">'LOADING...'</div>
  }

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


  return (
      <div className='py-12 px-8 w-full'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 8 }}>
        {
          Array.from(data["data"]).map((i, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
            {/* //   <Collapse ghost={true} defaultActiveKey={['0']} onChange={null} bordered={true} style={{ background: '#ffffff' }} size="large">
            //     <Panel header= {i["Название:"]} key="1">
            //       <p>{i["Название:"]}</p>
            //     </Panel>
            //   </Collapse> */}
            <Carousel afterChange={null}>
              <div>
                <h6 className='text-2xl' style={contentStyle}>{i["Название:"]}</h6>
              </div>
              <div>
                <h3 style={contentStyle}>{i["Адрес:"]}</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
            </Grid>


            // <Collapse defaultActiveKey={['1']} onChange={null}>
            //     <Panel header="This is panel header 1" key="1">
            //       <p>{i["Название:"]}</p>
            //     </Panel>
            //   </Collapse>

            

          ))
        }
        </Grid>
        
      </div>
    //</div>
)
}




{/* <Card>
              <Card variant="outlined">{
                <React.Fragment>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {i["Адрес:"]}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {i["Название:"]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to = {`/${i["id:"]}`}>
                    <Button size="small">Learn More</Button>
                  </Link> 
                </CardActions>
              </React.Fragment>
              }</Card>
            </Card> */}