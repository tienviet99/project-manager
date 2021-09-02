import React from "react";
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import './style.css'

export default function PopupDelete({
  onOk,
  onCancel,
  title = "Bạn có muốn xoá ?",
}) {
  return (
    <>
      <Container className="popupcontainer" width={300} height={160} >
        <div className="popuptemplate-title">
          <span>{title}</span>
        </div>
        <div className="popuptemplate-btn-control">
          <Button
            variant="contained"
            color="secondary"
            algin='center'
            style={{margin:'5px'}}
            accessKey={'enter'}
            onClick={(e) => {
              if (typeof onOk === "function") onOk(e);
            }}
          >
              Xoá
          </Button>
          <Button
            variant="contained"
            color="secondary"
            algin='center'
            style={{margin:'5px'}}
            accessKey={'esc'}
            onClick={(e) => {
              if (typeof onCancel === "function") onCancel(e);
            }}
          >
              Huỷ
          </Button>
        </div>
      </Container>
    </>
  );
}

