import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import { useState } from "react";

import PopupEditProject from '../../popupform/editpopupform';

export default function EditButton({
    data, id, getData, url, setPage,
    statusName, typeName, centerName, staffName, techName
    }) {
    
    const [rowData, setRowData] = useState(data.find((row) => row.id === id));
    const [techNameProject, setTechNameProject] = useState([]);
    const [staffNameProject, setStaffNameProject] = useState([]);
    const [statusNameProject, setStatusNameProject] = useState('');
    const [typeNameProject, setTypeNameProject] = useState('');
    const [centerNameProject, setCenterNameProject] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (e) => {
        setOpen(true);
        setTechNameProject(rowData.tech);
        setStaffNameProject(rowData.staff);
        setStatusNameProject(rowData.status);
        setTypeNameProject(rowData.type);
        setCenterNameProject(rowData.center);
        console.log('rowData : ',rowData);
      };
    const handleClose = () => {
    setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                color="default"
                algin='center'
                startIcon={<CreateIcon />}
                onClick={(e) =>{
                    handleClickOpen()
                }}
                style={{margin:'5px'}}
            >
                Sửa
            </Button>
            <PopupEditProject
                statusName={statusName}  
                typeName={typeName} 
                centerName={centerName} 
                staffName={staffName} 
                techName={techName}
                techNameProject={techNameProject}
                staffNameProject={staffNameProject}
                statusNameProject={statusNameProject}
                typeNameProject={typeNameProject}
                centerNameProject={centerNameProject}
                setTechNameProject={setTechNameProject}
                setStaffNameProject={setStaffNameProject}
                setStatusNameProject={setStatusNameProject}
                setTypeNameProject={setTypeNameProject}
                setCenterNameProject={setCenterNameProject}
                rowData={rowData}
                setPage={setPage}
                open={open}
                onClose={handleClose}
                getData={getData} 
                url={url}
            /> 
        </>
    )
}
