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

export default function PopupEditProject({
    setTechNameProject,setStaffNameProject,setStatusNameProject,setTypeNameProject,setCenterNameProject,
    typeName, centerName, staffName, techName, statusName,
    techNameProject,staffNameProject,statusNameProject,typeNameProject,centerNameProject,
    open,onClose,setPage,rowData,getData,url,
    title = "Sửa thông tin dự án",
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
      rows.center = centerNameProject;
      rows.tech = techNameProject;
      rows.staff = staffNameProject;
      rows.status = statusNameProject;
      rows.type = typeNameProject;
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
  
  const handleChangeTech = (event) => {
    setTechNameProject(event.target.value);
  };

  const handleChangeCenter = (event) => {
    setCenterNameProject(event.target.value);
  };

  const handleChangeStaff = (event) => {
    setStaffNameProject(event.target.value);
  };


  const onCancel = () => {
        onClose() ;
        setCenterNameProject([]);
        setTechNameProject([]);
        setStaffNameProject([]);
        setStatusNameProject('');
        setTypeNameProject('');
  }

  const checkEmpty = (rows) => {
    let errors = true;
    if (rows.name.trim() && 
        rows.description.trim() 
        // row.type.length == 0
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
                    label="Tên dự án" 
                    defaultValue={rows.name}
                    onChange={(e)=>{
                    rows.name = e.target.value;
                    }} 
                />
                </div>

                <div className='input'>
                <TextField
                    className='textfeild-description-center'
                    id="description"
                    label="Mô tả"
                    defaultValue={rows.description}
                    multiline
                    rows={2}
                    onChange={(e)=>{
                    rows.description = e.target.value;
                    }}
                />                 
                </div>
                <div className='select-one'>  
                <div className='input'>
                    <InputLabel required >Trạng thái</InputLabel>
                    <Select
                        className='select-status'
                        id={statusNameProject}
                        value={statusNameProject}
                        onChange={(e)=>{setStatusNameProject(e.target.value)}}
                        >
                        {statusName.map((option) => (
                            <MenuItem value={option}>{option}</MenuItem>
                            ))}
                    </Select>
                </div>
                <div className='input' style={{width:'317px'}}>
                    <InputLabel required >Loại dự án</InputLabel>
                    <Select
                        style={{width:'inherit'}}
                        className='select-status'
                        id={typeNameProject}
                        value={typeNameProject}
                        onChange={(e)=>{setTypeNameProject(e.target.value)}}
                        >
                        {typeName.map((option) => (
                            <MenuItem value={option}>{option}</MenuItem>
                            ))}
                    </Select>
                </div>
                </div>
            <div className="select">
                <div className='input'>
                <FormControl className='select'>
                    <InputLabel>Tech Stack</InputLabel>
                    <Select
                        multiple
                        value={techNameProject}
                        onChange={handleChangeTech}
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
                        {techName.map((name) => (
                        <MenuItem key={name} value={name} >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </div>
                <div className='input'>
                <FormControl className='select'>
                    <InputLabel>Trung tâm đảm nhiệm</InputLabel>
                    <Select
                        multiple
                        value={centerNameProject}
                        onChange={handleChangeCenter}
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
                        {centerName.map((name) => (
                        <MenuItem key={name} value={name} >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </div>
                <div className='input'>
                <FormControl className='select'>
                    <InputLabel>Nhân viên trong dự án</InputLabel>
                    <Select
                        multiple
                        value={staffNameProject}
                        onChange={handleChangeStaff}
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
                        {staffName.map((name) => (
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

