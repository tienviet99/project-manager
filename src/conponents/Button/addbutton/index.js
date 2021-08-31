import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

export default function AddButton() {
    return (
        <Button
            variant="contained"
            color="primary"
            algin='center'
            startIcon={<AddIcon />}
            onClick = {AddButton.this}
            style={{margin: "1em 0em 0em 101em"}}
        >
            Thêm
        </Button>
    )
}
