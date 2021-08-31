import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';

export default function EditButton() {
    return (
        <Button
            variant="contained"
            color="default"
            algin='center'
            startIcon={<CreateIcon />}
            style={{margin:'5px'}}
        >
            Sửa
        </Button>
    )
}
