import React from "react";
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import './style.css'

export default function PopupAddProjectType({
  getData, 
  url,
  onCancel,
  title = "Thêm dữ liệu ",
}) {
  const rows = {} ;
  const handleOnClickCreate = () => {
      console.log(rows)
      const data = rows ;

      fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <>
      <Container className="popupcontainer-add" >
        <div className="popuptemplate-title-add">
          <span>{title}</span>
        </div>
        <div className='textfield'>
          <div className='textfeild-id-name'>
            <div className='textfeild-id'>
              <TextField 
                  required id="id"
                  label="Mã loại dự án"  
                  onChange={(e)=>{
                    rows.id = e.target.value;
                  }}
              />              
            </div>
          <div className='textfeild-name'>
              <TextField 
                  required id="name" 
                  label="Tên loại dự án" 
                  onChange={(e)=>{
                    rows.name = e.target.value;
                  }} 
              />                   
          </div>
          </div>
          <div className='textfeild-priority-status-decripton'>
            <div className='textfeild-priority-status'>
              <div className='textfeild-priority'>
                <TextField 
                  required id="priority" 
                  label="Mức độ ưu tiên"  
                  onChange={(e)=>{
                    rows.priority = e.target.value;
                  }}
                />                
              </div>
              <div className='textfeild-status'>
                <TextField 
                  required id="status" 
                  label="Trạng thái" 
                  onChange={(e)=>{
                    rows.status = e.target.value;
                  }} 
                />                  
              </div>
            </div>
            <div className='textfeild-decription'>
            <TextField
                id="decription"
                label="Mô tả"
                multiline
                rows={4}
                onChange={(e)=>{
                  rows.decription = e.target.value;
                }}
            />          
            </div>            
          </div>

        </div>
        <div className="popuptemplate-btn-control-add">
          <Button
            variant="contained"
            color="secondary"
            algin='center'
            style={{margin:'5px'}}
            accessKey={'enter'}
            onClick={(e) => {
                handleOnClickCreate(e)
                onCancel(e)
                getData()
            }}
          >
              Thêm
          </Button>
          <Button
            variant="contained"
            color="secondary"
            algin='center'
            style={{margin:'5px'}}
            accessKey={'esc'}
            onClick={(e) => {
              if (typeof onCancel === "function") onCancel(e);
            }}
          >
              Huỷ
          </Button>
        </div>
      </Container>
    </>
  );
}

