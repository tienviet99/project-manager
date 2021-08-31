import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {

  return (
    <div>
      <AppBar position="fixed" color = 'primary'>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Phần mềm quản lý dự án
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
