import { Button } from '@material-ui/core';
import React from 'react';
import Popup from 'reactjs-popup';
import PopupAddProjectType from '../ProjectType/popupform/addpopupform';
import './style.css'

export default () => (
  <Popup
    trigger={<Button variant="contained" color="primary" className="button"> Open Modal </Button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="actions">
          <Popup
            trigger={<Button variant="contained" color="primary" className="button"> Trigger </Button>}
            position="top center"
            nested
          >
                <PopupAddProjectType
                    onCancel={() => {
                        console.log('popup closed ');
                        close();
                      }}
                />  
          </Popup>
          <Button
          variant="contained"
             color="primary"
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </Button>
        </div>
      </div>
    )}
  </Popup>
);