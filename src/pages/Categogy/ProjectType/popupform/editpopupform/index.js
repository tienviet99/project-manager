import React from "react";
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { Container } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { NotificationManager} from 'react-notifications';

import '../addpopupform/style.css'

const statuss = [
  {
    value: 'active',
    label: 'active',
  },
  {
    value: 'inactive',
    label: 'inactive',
  }
];

export default function PopupEditProjectType({
    setPage,
    rowData,
    getData, 
    url,
    onCancel,
    title = "Sửa loại dự án ",
}) {
  const [rows, setRows] = useState(rowData)
  const handleOnClickEdit = () => { 

      fetch(url + "/" + rows.id, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rows),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .then(function(){
            getData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  const handleChange = (event) => {
    const name = event.target.name;
    setRows({
      ...rows,
      [name]: event.target.value,
    });
  }

  const checkEmpty = (rows) => {
    let errors = true;
    if (rows.name.trim() && 
        rows.priority.trim() &&
        rows.status.trim() &&
        rows.description.trim()
    ) errors = false ;  
    return errors ;
  }

  return (
    <>
      <Container className="popupcontainer-add" >
        <div className="popuptemplate-title-add">
          <span className='title'>{title}</span>
        </div>
        <div className='textfield'>
            <div className='textfeild-name'>
              <TextField 
                  style={{ width: '422px'}}
                  required id="name" 
                  label="Tên loại dựa án" 
                  defaultValue={rows.name}
                  onChange={(e)=>{
                    rows.name = e.target.value;
                  }} 
              />                   
            </div>
          <div className='textfeild-priority-status'>
              <div className='textfeild-priority'>
                <TextField 
                  required id="priority" 
                  label="Mức độ ưu tiên"
                  defaultValue={rows.priority}  
                  onChange={(e)=>{
                    rows.priority = e.target.value;
                  }}
                />                
              </div>
              <div className='textfeild-status'>
                <InputLabel required >Trạng thái</InputLabel>
                <Select
                  className='select-status'
                  native
                  defaultValue={rows.status}
                  onChange={handleChange}
                  inputProps={{
                    name: 'status',
                  }}
                >
                      <option aria-label="None" value="" />
                  {statuss.map((option) => (
                      <option value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </Select>
              </div>
            </div>
            <div className='textfeild-description'>
            <TextField
                style={{ width: '422px'}}
                id="description"
                label="Mô tả"
                multiline
                rows={2}
                defaultValue={rows.description}
                onChange={(e)=>{
                  rows.description = e.target.value;
                }}
            />          
            </div>            
        </div>
        <div className="popuptemplate-btn-control-add">
          <Button
            variant="contained"
            color="secondary"
            algin='center'
            style={{margin:'5px'}}
            accessKey={'enter'}
            onClick={(e) => 
            {
              if (!checkEmpty(rows)) {
                handleOnClickEdit(e);
                onCancel(e);
                setPage(0);
                NotificationManager.success('Dữ liệu đã được cập nhật', 'Thành Công');
              }
              else {
                NotificationManager.warning('Vui lòng nhập đủ thông tin', 'Thất Bại!', 5000, () => {
                  alert('callback');
                });
              }
            }
          }
          >
              Lưu
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

