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
  const { rows, row, index, rowsPerPage, page , getData, url, projectName, staffName, techName, setPage } = props;
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
            <EditButton data={rows} id={row.id} getData={getData} url={url} projectName={projectName} staffName={staffName} techName={techName} setPage={setPage}/>
            <DeleteButton id={row.id} getData={getData} url={url} setPage={setPage}/>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi ti???t
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:'600',fontSize:'medium'}}>T??n</TableCell>
                    <TableCell style={{fontWeight:'600',fontSize:'medium'}}>M?? t???</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Tech Stack</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>D??? ??n</TableCell>
                    <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Nh??n vi??n</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="center" style={{padding:'8px',width:"100px"}}>
                      <TableContainer style={{width:'170px'}}>
                          <Table aria-label="simple table">
                              <TableBody >
                              {row.tech.map((rowTech) => (
                                  <TableRow>
                                    <TableCell align="right" style={{padding:'5px', textAlign:'center'}}><Chip key={rowTech} label={rowTech}/></TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
                          </TableContainer>
                      </TableCell>
                      <TableCell align="center" style={{padding:'8px',width:"530px"}}>
                        <TableContainer  style={{width:'530px'}}>
                          <Table aria-label="simple table">
                              <TableBody >
                              {row.project.map((rowProject) => (
                                  <TableRow >
                                    <TableCell align="right" style={{padding:'5px', textAlign:'center'}}><Chip key={rowProject} label={rowProject}/></TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
                        </TableContainer>
                      </TableCell>
                      <TableCell align="center" style={{padding:'8px',width:"100px"}}>
                        <TableContainer style={{width:'170px'}}>
                          <Table aria-label="simple table">
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

export default function ContentCenter() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/centers'
  const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then(function(e){
            setRows(e.reverse());
        })
}

    const [dataProject, setDataProject] = useState([])
    const urlProject = 'http://localhost:8000/projects'
    const getDataProject = () => {
    fetch(urlProject)
        .then((response) => response.json())
        .then(function(e){
            setDataProject(e);
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
        getDataProject();
        getDataStaff();
        getDataTech()
      },[])

    const projectName = dataProject.map((data) =>{
        return data.name
    })
    const staffName = dataStaff.map((data) =>{
        return data.name
    })
    const techName = dataTech.map((data) =>{
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
    <AddButton getData={getData} url={url} projectName={projectName} staffName={staffName} techName={techName} setPage={setPage}/>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600'}}>
         Trung t??m, b??? ph???n, ph??ng ban
      </Typography>
    <TableContainer component={Paper} style={{margin: "1em 0em 0em 4em"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:'1500px', margin: '1em -3em 0em 1em'}}>
        <TableHead>
 
          <TableRow style={{width:'100%'}}>
            <TableCell />
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger'}}>STT</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'larger'}}>T??n</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'larger'}}>M?? t???</TableCell>
            <TableCell align="center" style={{width: "14em", fontWeight:'700',fontSize:'larger'}}>Thao t??c</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row,index) => (
            <Row key={row.id} rows={rows} row={row} index={index} page={page} rowsPerPage={rowsPerPage} 
                 getData={getData} url={url} projectName={projectName} staffName={staffName} techName={techName} setPage={setPage}
            />
          ))}


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
              labelRowsPerPage={'S??? h??ng hi???n th??? :'}
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
