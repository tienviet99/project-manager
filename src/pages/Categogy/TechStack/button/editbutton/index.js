import React from 'react'
import { useState } from 'react';
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import Popup from 'reactjs-popup';

import PopupEditTechStack from '../../popupform/editpopupform';

export default function EditButton({data, id, getData, url,setPage}) {
    const [rowData, setRowData] = useState(data.find((row) => row.id === id));
    const handleEditButton = (e) =>{
        console.log(rowData)
    }
    return (
        <Popup trigger={
            <Button
                variant="contained"
                color="default"
                algin='center'
                startIcon={<CreateIcon />}
                style={{margin:'5px'}}
        >
            Sửa
        </Button>
            }  
                modal
                onOpen={handleEditButton}
            >
            {close => (
                <PopupEditTechStack
                    setPage={setPage}
                    rowData={rowData}
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
