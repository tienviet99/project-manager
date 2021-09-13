import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

import PopupAddStaff from 'pages/Manager/Staff/popupform/addpopupform';

export default function AddButton({getData, url, projectName, techName, setPage}) {
    
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
            <PopupAddStaff
                setPage={setPage}
                open={open}
                onClose={handleClose}
                projectName={projectName} 
                techName={techName}
                getData={getData} 
                url={url}
            /> 
        </>
    )
}
