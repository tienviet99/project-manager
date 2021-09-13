import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import { useState } from "react";

import PopupEditStaff from '../../popupform/editpopupform';

export default function EditButton({
    data, id, getData, url, setPage,
    projectName, techName
    }) {
    
    const [rowData, setRowData] = useState(data.find((row) => row.id === id));
    const [techNameStaff, setTechNameStaff] = useState([]);
    const [projectNameStaff, setProjectNameStaff] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (e) => {
        setOpen(true);
        setTechNameStaff(rowData.tech);
        setProjectNameStaff(rowData.project);
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
            <PopupEditStaff
                projectName={projectName} 
                techName={techName}
                techNameStaff={techNameStaff}
                projectNameStaff={projectNameStaff}
                setTechNameStaff={setTechNameStaff}
                setProjectNameStaff={setProjectNameStaff}
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
