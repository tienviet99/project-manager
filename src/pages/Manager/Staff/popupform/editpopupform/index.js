import React from "react";
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { Container } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import { NotificationManager} from 'react-notifications';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { v4 as uuidv4 } from 'uuid';

import '../addpopupform/style.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function PopupEditStaff({
    open,onClose,setPage,getData,url,rowData,
    projectName, techName,
    techNameStaff,projectNameStaff,
    setTechNameStaff,setProjectNameStaff,
    title = "Sửa thông tin nhân sự ",
}) {
  const [rows, setRows] = useState(rowData)
  const handleOnClickEdit = () => {

    fetch(url + '/' + rows.id, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(function(res){
        res.json();
    })
    .then(function(){
        getData();
    })

      rows.id=uuidv4();
      rows.tech = techNameStaff;
      rows.project = projectNameStaff;
      console.log(rows);

      fetch(url, {
        method: 'POST', 
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

  const handleChangeNameTech = (id,event) => {
    techNameStaff.map((tech) =>{ 
      if (id === tech.id){
        tech.nameTech = event.target.value;
      }
      return tech
    });
    setTechNameStaff(techNameStaff)
  };

  const handleChangeTimeTech = (id,event) => {
    techNameStaff.map((tech) =>{ 
      if (id === tech.id){
        tech.time = event.target.value;
      }
      return tech
    });
    setTechNameStaff(techNameStaff)
  };

  const handleChangeFrameworkTech = (id,event) => {
    techNameStaff.map((tech) =>{ 
      if (id === tech.id){
        tech.framework = event.target.value;
      }
      return tech
    });
    setTechNameStaff(techNameStaff)
  };

  const handleAddTech = () =>{
    setTechNameStaff([...techNameStaff,{
      id:uuidv4(),
      nameTech:'',
      time:'',
      framework:''
    }])
  }

  const handleRemoveTech = (id) =>{
    setTechNameStaff(techNameStaff.filter((tech) => tech.id !== id))
  }

  const handleChangeProject = (event) => {
    setProjectNameStaff(event.target.value);
  };

  const onCancel = () => {
        onClose() ;
        setRows({
          id :uuidv4(),
          name : '',
          date: '',
          phone : '',
          tech:[],
          project:[]
        })
        setTechNameStaff([{
          id:uuidv4(),
          nameTech:'',
          time:'',
          framework:''
        }]);
        setProjectNameStaff([]);
  }

  const checkEmpty = (rows) => {
    let errors = true;
    if (rows.name.trim() && 
        rows.date.trim() &&
        rows.phone.trim()
    ) errors = false ;  
    return errors ;
  }


  return (
    <>
      <Dialog open={open} onClose={onClose} >
        <div className='dialog'>
        <DialogTitle className='title'>{title}</DialogTitle>
        <DialogContent>
          <form >
                <div className='input'>
                <TextField 
                    className='textfeild-name-center'
                    required id="name" 
                    label="Tên nhân sự" 
                    defaultValue={rows.name}
                    onChange={(e)=>{
                    rows.name = e.target.value;
        
                    }} 
                />
                </div>
                <div className='textflied-date-phone'>
                  <div className='input'>
                    <TextField
                        id="date"
                        label="Ngày sinh"
                        type="date"
                        defaultValue={rows.date}
                        style={{ width: "150px" }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        onChange={(e)=>{
                          rows.date = e.target.value;
                          }} 
                      />
                  </div>
                  <div className='input'>
                    <TextField 
                        className='textfeild-phone-center'
                        required id="phone" 
                        label="Số điện thoại" 
                        defaultValue={rows.phone}
                        onChange={(e)=>{
                        rows.phone = e.target.value;
                        }} 
                    />
                  </div>  
                </div>
              {techNameStaff.map((techDetail,index) => (
                <Box key={techDetail.id}>
                  <div className="select">
                    <div className='input-tech'>
                    <div className='input'>
                      <FormControl className='select-tech'>
                          <InputLabel>Tech Stack</InputLabel>
                          <Select
                              id={techDetail.nameTech}
                              value={techDetail.nameTech}
                              onChange={(e) => handleChangeNameTech(techDetail.id,e)}
                              >
                              {techName.map((option) => (
                                <MenuItem value={option}>{option}</MenuItem>
                                ))}
                          </Select>
                      </FormControl>
                    </div>
                      <Box>
                        <IconButton onClick={handleAddTech}>
                          <AddIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleRemoveTech(techDetail.id)}>
                          <RemoveIcon/>
                        </IconButton>
                      </Box>
                  </div>
                </div>
                  <div className='textflied-detail-tech'>
                    <div className='input'>
                      <TextField 
                          className='textfeild-time-tech'
                          required id="time" 
                          label="Thời gian làm việc" 
                          defaultValue={techDetail.time}
                          onChange={(e)=>{handleChangeTimeTech(techDetail.id,e)}} 
                      />
                    </div>
                    <div className='input'>
                      <TextField 
                          className='textfeild-framework'
                          required id="framework" 
                          label="Frame work" 
                          defaultValue={techDetail.framework}
                          onChange={(e)=>{handleChangeFrameworkTech(techDetail.id,e)}}
                      />
                    </div>  
                </div>
                </Box>
              ))}
              <div className='select'>
                <div className='input'>
                <FormControl className='select'>
                    <InputLabel>Dự án</InputLabel>
                    <Select
                        multiple
                        value={projectNameStaff}
                        onChange={handleChangeProject}
                        input={<Input/>}
                        renderValue={(selected) => (
                            <div>
                            {selected.map((value) => (
                                <Chip key={value} label={value}/>
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {projectName.map((name) => (
                        <MenuItem key={name} value={name} >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>                 
                </div>
              </div>
          </form>
        </DialogContent>
        <DialogActions>
            <div className="popuptemplate-btn-control-add">
            <Button
                variant="contained"
                color="secondary"
                algin='center'
                style={{margin:'5px'}}
                accessKey={'enter'}
                onClick={(e) => {
                if (!checkEmpty(rows)) {
                    handleOnClickEdit(e)
                    onCancel()
                    setPage(0)
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
                onClick={onCancel}
            >
                Huỷ
            </Button>
            </div>
        </DialogActions>
        </div> 
      </Dialog>
    </>
  );
}

