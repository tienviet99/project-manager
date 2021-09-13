import React from 'react';
import { useEffect, useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { TableFooter, TablePagination } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import EditButton from '../button/editbutton';
import DeleteButton from '../button/deletebutton';
import AddButton from '../button/addbutton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function Row(props) {
  const { rows, row, index, rowsPerPage, page , getData, url,  statusName, typeName, centerName, staffName, techName, setPage } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow >
        <TableCell style={{width:'30px'}}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" style={{padding:'8px', width:"45px"}} >{index+1+page*rowsPerPage}</TableCell>
        <TableCell component="th" scope="row" align="left" style={{padding:'8px', width:'418px', height:'46px'}}>
          {row.name}
        </TableCell>
        <TableCell align="left" style={{padding:'8px', width:'514px', maxHeight:'95px'}}>
          <div style={{maxHeight:'60px', overflow:'auto'}}>
            {row.description}
          </div>
        </TableCell>
        <TableCell align="center" style={{padding:'8px'}} >
            <EditButton 
                data={rows} id={row.id} getData={getData} url={url} setPage={setPage}
                statusName={statusName}  typeName={typeName} 
                centerName={centerName} staffName={staffName} 
                techName={techName} 
            />
            <DeleteButton id={row.id} getData={getData} url={url} setPage={setPage}/>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi tiết
              </Typography>
              <Table size="small" aria-label="purchases" style={{width:'auto'}}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:'600',fontSize:'medium'}}>Tên</TableCell>
                    <TableCell align="left" style={{fontWeight:'600',fontSize:'medium'}}>Mô tả</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Loại dự án</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Trạng thái</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Tech Stack</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Trung tâm</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Thành Viên</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow key={row.id}>
                      <TableCell component="th" scope="row" style={{width:'200px'}}>{row.name}</TableCell>
                      <TableCell style={{width:'344px'}}>{row.description}</TableCell>
                      <TableCell align="center" style={{width:'200px'}} >{row.type}</TableCell>
                      <TableCell align="center" style={{width:'200px'}} >{row.status}</TableCell>
                      <TableCell align="center" style={{padding:'8px'}}>
                        <TableContainer >
                          <Table aria-label="simple table" style={{width:'180px'}}>
                              <TableBody >
                              {row.tech.map((rowTech) => (
                                  <TableRow>
                                    <TableCell align="right" style={{padding:'5px', textAlign:'center'}}>
                                      <Chip key={rowTech} label={rowTech}/>
                                    </TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
                        </TableContainer>
                      </TableCell>

                      <TableCell align="center" style={{padding:'8px'}}>
                        <TableContainer >
                          <Table aria-label="simple table" style={{width:'180px'}}>
                              <TableBody >
                              {row.center.map((rowCenter) => (
                                  <TableRow>
                                    <TableCell align="right" style={{padding:'5px', textAlign:'center'}}><Chip key={rowCenter} label={rowCenter}/></TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
                        </TableContainer>
                      </TableCell>

                      <TableCell align="center" style={{padding:'8px'}}>
                        <TableContainer >
                          <Table aria-label="simple table" style={{width:'180px'}}>
                              <TableBody >
                              {row.staff.map((rowStaff) => (
                                  <TableRow>
                                    <TableCell align="right" style={{padding:'5px', textAlign:'center'}}><Chip key={rowStaff} label={rowStaff}/></TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
                        </TableContainer>
                      </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

export default function ContentProject() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/projects'
  const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then(function(e){
            setRows(e.reverse());
        })
}


    const [dataStaff, setDataStaff] = useState([])
    const urlStaff = 'http://localhost:8000/staffs'
    const getDataStaff = () => {
    fetch(urlStaff)
        .then((response) => response.json())
        .then(function(e){
            setDataStaff(e);
        })
    }

    const [dataType, setDataType] = useState([])
    const urlType = 'http://localhost:8000/projecttypes'
    const getDataType = () => {
    fetch(urlType)
        .then((response) => response.json())
        .then(function(e){
            setDataType(e);
        })
    }

    const [dataCenter, setDataCenter] = useState([])
    const urlCenter = 'http://localhost:8000/centers'
    const getDataCenter = () => {
    fetch(urlCenter)
        .then((response) => response.json())
        .then(function(e){
            setDataCenter(e);
        })
    }

    const [dataStatus, setDataStatus] = useState([])
    const urlStatus = 'http://localhost:8000/state'
    const getDataStatus = () => {
    fetch(urlStatus)
        .then((response) => response.json())
        .then(function(e){
            setDataStatus(e);
        })
    }

    const [dataTech, setDataTech] = useState([])
    const urlTech = 'http://localhost:8000/techstacks'
    const getDataTech = () => {
    fetch(urlTech)
        .then((response) => response.json())
        .then(function(e){
            setDataTech(e);
        })
    }
    useEffect(() => {
        getData();
        getDataStaff();
        getDataType();
        getDataCenter();
        getDataStatus();
        getDataTech();
      },[])


    const staffName = dataStaff.map((data) =>{
        return data.name
    })
    const techName = dataTech.map((data) =>{
        return data.name
    })
    const typeName = dataType.map((data) =>{
      return data.name
    })
    const centerName = dataCenter.map((data) =>{
      return data.name
    })
    const statusName = dataStatus.map((data) =>{
      return data.name
    })
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);
  return (
    <>
    <AddButton getData={getData} url={url} staffName={staffName} statusName={statusName} typeName={typeName} centerName={centerName} techName={techName} setPage={setPage}/>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600'}}>
         Dự án
      </Typography>
    <TableContainer component={Paper} style={{margin: "1em 0em 0em 4em"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:'1500px', margin: '1em -3em 0em 1em'}}>
        <TableHead>
 
          <TableRow style={{width:'100%'}}>
            <TableCell />
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger'}}>STT</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'larger', padding :'4px'}}>Tên</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'larger',padding :'0px'}}>Mô tả</TableCell>
            <TableCell align="center" style={{width: "14em", fontWeight:'700',fontSize:'larger'}}>Thao tác</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row,index) => (
            <Row key={row.id} rows={rows} row={row} index={index} page={page} rowsPerPage={rowsPerPage} 
                 getData={getData} url={url} staffName={staffName} statusName={statusName} typeName={typeName} centerName={centerName} techName={techName} setPage={setPage}
            />
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow >
            <TablePagination
              style={{paddingRight:'20em'}}
              rowsPerPageOptions={[5,10]}
              colSpan={4}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={'Số hàng hiển thị :'}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
}
