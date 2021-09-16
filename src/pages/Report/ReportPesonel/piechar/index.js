import React from 'react';
import { useEffect, useState } from 'react'

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './style.css'
import PiecharExperience from './PieCharExperience';
import PiecharTech from './PieCharTech';
import PiecharFramework from './PieCharFramework';
import PiecharCount from './PieCharCount';


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
  const url = 'http://localhost:8000/staffs'
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

    const experience = rows.map((staff)=>{
      return staff.experience
    })
    
    const techArr = rows.map((staff)=>{
        return staff.tech
      })
      const techArr1=techArr.flat(Infinity)
      const techArr2 = techArr1.map((tech)=>{
        return tech.nameTech
      })
    
    const frameworkArr = rows.map((staff)=>{
        return staff.tech
      })
      const frameworkArr1=frameworkArr.flat(Infinity)
      const frameworkArr2 = frameworkArr1.map((frame)=>{
        return frame.framework
      })
    
    const project = rows.map((staff)=>{
        return staff.project
      })  
        let countArr = []
      for (let i = 0; i < project.length; i++){
        countArr=[...countArr,project[i].length]
        }

    const rowsExper = handleData(experience)
    const rowsTech = handleData(techArr2)
    const rowsFramework = handleData(frameworkArr2)
    const rowsCount = handleData(countArr)

  return (
    <>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600', marginTop:'1.5em'}}>
         Báo cáo số lượng nhân sự
    </Typography>
    <Container style={{maxWidth:'1690px'}}>
        <div className='line-one'>
            <Paper className='line-one-paper'>
                <PiecharExperience data={rowsExper}/>
            </Paper>
            <Paper className='line-one-paper'>
                <PiecharTech data={rowsTech}/>
            </Paper>
        </div>
        <div className='line-two'>
            <Paper className='line-two-paper'>
                <PiecharFramework data={rowsFramework}/>
            </Paper>
            <Paper className='line-two-paper'>
                <PiecharCount data={rowsCount}/>
            </Paper>      
        </div>
        
    </Container>
    </>
  );
}
