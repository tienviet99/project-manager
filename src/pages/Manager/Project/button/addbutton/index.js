import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

import PopupAddProject from 'pages/Manager/Project/popupform/addpopupform';

export default function AddButton({getData, url, typeName, centerName, staffName,statusName, techName, setPage}) {
    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
    setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                algin='center'
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
                style={{margin: "1em 0em 0em 101em"}}
            >
                Thêm
            </Button>
            <PopupAddProject
                setPage={setPage}
                open={open}
                onClose={handleClose}
                typeName={typeName} 
                statusName={statusName}
                centerName={centerName}
                staffName={staffName}
                techName={techName}
                getData={getData} 
                url={url}
            /> 
        </>
    )
}
