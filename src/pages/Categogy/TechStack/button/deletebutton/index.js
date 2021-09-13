import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import Popup from 'reactjs-popup';
import PopupDelete from 'conponents/popup/deletepopup';
import { NotificationManager} from 'react-notifications';

export default function DeleteButton({id, getData, url,setPage}) {

    const handleDeleteRow = (id) =>{
        fetch(url + '/' + id, {
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
    }

return (
  <Popup trigger={
    <Button
        variant="contained"
        color="secondary"
        algin='center'
        startIcon={<DeleteIcon />}
        style={{margin:'5px'}}
    >
        Xoá
    </Button>
    } 
        position="bottom right"
    >
    {close => (
        <PopupDelete
            onOk={() => {
                handleDeleteRow(id);
                close();
                setPage(0);
                NotificationManager.success('Dữ liệu đã được cập nhật', 'Thành Công');
            }}
            onCancel={() => {
                console.log('popup closed ');
                close();
              }}
        />        
    )}    
  </Popup>
);
}
