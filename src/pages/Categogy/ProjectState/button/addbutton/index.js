import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import Popup from 'reactjs-popup';
import PopupAddProjectState from 'pages/Categogy/ProjectState/popupform/addpopupform';

export default function AddButton({getData, url,setPage}) {
    return (
        <Popup trigger={
            <Button
                variant="contained"
                color="primary"
                algin='center'
                startIcon={<AddIcon />}
                style={{margin: "1em 0em 0em 101em"}}
            >
                Thêm
            </Button>
            }  
                modal
            >
            {close => (
                <PopupAddProjectState
                    setPage={setPage}
                    getData={getData} 
                    url={url}
                    onCancel={() => {
                        console.log('popup closed ');
                        close();
                      }}
                />        
            )}    
          </Popup>
    )
}
