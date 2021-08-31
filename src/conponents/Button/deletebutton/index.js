import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteButton() {
    return (
        <Button
            variant="contained"
            color="secondary"
            algin='center'
            startIcon={<DeleteIcon />}
            style={{margin:'5px'}}
        >
            Xoá
        </Button>
    )
}
