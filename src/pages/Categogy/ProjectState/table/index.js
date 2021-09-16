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
import Typography from '@material-ui/core/Typography';

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

export default function ContentProjectState() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/state'

  useEffect(() => {
    getData();
  },[])
  const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then(function(e){
            setRows(e.reverse());
        })
}

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

  return (
    <>
    <AddButton getData={getData} url={url} setPage={setPage}/>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600'}}>
          Trạng thái dự án
      </Typography>
    <TableContainer component={Paper} style={{margin: "1em 0em 0em 4em"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:'1500px', margin: '1em -3em 0em 1em'}}>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontWeight:'700',fontSize:'medium'}}>STT</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'medium'}}>Tên</TableCell>
            <TableCell align="left" style={{fontWeight:'700',fontSize:'medium'}}>Mô tả</TableCell>
            <TableCell align="center" style={{width: "14em", fontWeight:'700',fontSize:'medium'}}>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row,index) => (
            <TableRow key={row.id} >
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
                  <EditButton data={rows} id={row.id} getData={getData} url={url} setPage={setPage}/>
                  <DeleteButton id={row.id} getData={getData} url={url} setPage={setPage}/>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
        <TableFooter>
          <TableRow >
            <TablePagination
              rowsPerPageOptions={[5,10]}
              colSpan={3}
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
