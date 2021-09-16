import React from 'react';
import { useEffect, useState } from 'react'

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './style.css'
import PieCharStatus from './PieCharStatus';
import PieCharType from './PieCharType';
import PieCharTech from './PieCharTech';

function handleData(arr) {
  let name = [], value = [], prev;
  let result = []

  arr.sort();
  for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          name.push(arr[i]);
          value.push(1);
      } else {
          value[value.length-1]++;
      }
      prev = arr[i];
  }
  for (let i = 0; i < name.length; i++){
      result=[...result,{name:name[i],value:value[i]}]
  }
  return result
}

export default function PieChar() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/projects'
  const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then(function(e){
            setRows(e.reverse());
        })
    }

    useEffect(() => {
        getData();
      },[])

    const status = rows.map((project)=>{
      return project.status
    })

    const type = rows.map((project)=>{
      return project.type
    })
  
    const techArr = rows.map((project)=>{
      return project.tech
    })
    const tech=techArr.flat(Infinity)

  const rowsStatus = handleData(status)
  const rowsType = handleData(type);
  const rowsTech = handleData(tech);
  return (
    <>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600', marginTop:'1.5em'}}>
         Báo cáo số lượng dự án
    </Typography>
    <Container style={{maxWidth:'1690px'}}>
        <div className='line-one'>
            <Paper className='line-one-paper'>
                <PieCharStatus data={rowsStatus}/>
            </Paper>
            <Paper className='line-one-paper'>
                <PieCharType data={rowsType}/>
            </Paper>
        </div>
        <div className='line-two'>
            <Paper className='line-two-paper'>
                <PieCharTech data={rowsTech}/>
            </Paper>   
        </div>
        
    </Container>
    </>
  );
}
