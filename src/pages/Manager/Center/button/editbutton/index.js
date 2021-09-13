import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import { useState } from "react";

import PopupEditCenter from '../../popupform/editpopupform';

export default function EditButton({data, id, getData, url, projectName, staffName, techName, setPage}) {
    
    const [rowData, setRowData] = useState(data.find((row) => row.id === id));
    const [techNameCenter, setTechNameCenter] = useState([]);
    const [projectNameCenter, setProjectNameCenter] = useState([]);
    const [staffNameCenter, setStaffNameCenter] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (e) => {
        setOpen(true);
        setTechNameCenter(rowData.tech);
        setProjectNameCenter(rowData.project);
        setStaffNameCenter(rowData.staff);
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
            <PopupEditCenter
                techNameCenter={techNameCenter}
                setTechNameCenter={setTechNameCenter}
                projectNameCenter={projectNameCenter}
                setProjectNameCenter={setProjectNameCenter}
                staffNameCenter={staffNameCenter}
                setStaffNameCenter={setStaffNameCenter}
                rowData={rowData}
                setPage={setPage}
                open={open}
                onClose={handleClose}
                projectName={projectName} 
                staffName={staffName}
                techName={techName}
                getData={getData} 
                url={url}
            /> 
        </>
    )
}
