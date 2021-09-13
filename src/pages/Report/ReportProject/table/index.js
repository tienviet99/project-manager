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
import TextField from '@material-ui/core/TextField';


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

function handleData(arr) {
  let name = [], quantity = [], prev;
  let result = []

  arr.sort();
  for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          name.push(arr[i]);
          quantity.push(1);
      } else {
          quantity[quantity.length-1]++;
      }
      prev = arr[i];
  }
  for (let i = 0; i < name.length; i++){
      result=[...result,{name:name[i],quantity:quantity[i]}]
  }
  return result
}

export default function ContentReportProject() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/projects'
  const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then(function(e){
            setRows(e.reverse());
        })
    }

    useEffect(() => {
        getData();
      },[])

    const status = rows.map((project)=>{
      return project.status
    })

    const type = rows.map((project)=>{
      return project.type
    })
  
    const techArr = rows.map((project)=>{
      return project.tech
    })
    const tech=techArr.flat(Infinity)

  const rowsStatus = handleData(status)
  const rowsType = handleData(type);
  const rowsTech = handleData(tech);

    
    const classes = useStyles();
    const [pageStatus, setPageStatus] = React.useState(0);
    const [rowsPerPageStatus, setRowsPerPageStatus] = React.useState(5);
    const [pageType, setPageType] = React.useState(0);
    const [rowsPerPageType, setRowsPerPageType] = React.useState(5);
    const [pageTech, setPageTech] = React.useState(0);
    const [rowsPerPageTech, setRowsPerPageTech] = React.useState(5);

    const emptyRowsStatus = rowsPerPageStatus - Math.min(rowsPerPageStatus, rowsStatus.length - pageStatus * rowsPerPageStatus);
    const emptyRowsType = rowsPerPageType - Math.min(rowsPerPageType, rowsType.length - pageType * rowsPerPageType);
    const emptyRowsTech = rowsPerPageTech - Math.min(rowsPerPageTech, rowsTech.length - pageTech * rowsPerPageTech);

    const handleChangePageStatus = (event, newPage) => {
        setPageStatus(newPage);
    };

    const handleChangeRowsPerPageStatus = (event) => {
        setRowsPerPageStatus(parseInt(event.target.value, 10));
        setPageStatus(0);
    };

    const handleChangePageType = (event, newPage) => {
      setPageType(newPage);
    };

    const handleChangeRowsPerPageType = (event) => {
        setRowsPerPageType(parseInt(event.target.value, 10));
        setPageType(0);
    };

    const handleChangePageTech = (event, newPage) => {
      setPageTech(newPage);
    };

    const handleChangeRowsPerPageTech = (event) => {
        setRowsPerPageTech(parseInt(event.target.value, 10));
        setPageTech(0);
    };

    const [openStatus, setOpenStatus] = React.useState(false);
    const [openType, setOpenType] = React.useState(false);
    const [openTech, setOpenTech] = React.useState(false);

    const handleFind = (event) => {
        // const value = event.target.value.toLowerCase();
        // const rowsStatusFind = rowsStatus.find(function(row) {
        //    return row.name.toLowerCase() === value
        // });
    }

  return (
    <>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600'}}>
         Báo cáo Số lượng dự án
      </Typography>
    <TableContainer component={Paper} style={{margin: "1em 0em 0em 4em"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:'1500px', margin: '1em -3em 0em 1em'}}>

        <TableHead>
          <TableRow style={{width:'100%'}}>
            <TableCell />
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger', padding:'7px'}} >Tên</TableCell>
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger', padding:'7px'}} >Tổng số dự án</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow style={{width:'auto'}}>
            <TableCell style={{width:'30px'}}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenStatus(!openStatus)}>
                {openStatus ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Trạng thái</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{status.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openStatus} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo trạng thái chi tiết
                  </Typography>
                  {/* <TextField
                      label="Tìm kiếm"
                      id="outlined-margin-dense"
                      margin="dense"
                      variant="outlined"
                      onChange={handleFind} 
                    /> */}
                  <Table size="small" aria-label="purchases" style={{width:'auto'}}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'268px'}}>STT</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px'}}>Tên</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'115px'}}>Số lượng dự án</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageStatus > 0
                            ? rowsStatus.slice(pageStatus * rowsPerPageStatus, pageStatus * rowsPerPageStatus + rowsPerPageStatus)
                            : rowsStatus
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageStatus*rowsPerPageStatus}</TableCell>
                                <TableCell align="left" style={{width:'620px'}}>{row.name}</TableCell>
                                <TableCell align="left" style={{width:'500px', paddingLeft:'180px'}}>{row.quantity}</TableCell>
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsStatus.length}
                                rowsPerPage={rowsPerPageStatus}
                                page={pageStatus}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageStatus}
                                onRowsPerPageChange={handleChangeRowsPerPageStatus}
                                ActionsComponent={TablePaginationActions}
                            />
                          </TableRow>
                        </TableFooter>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
          
          <TableRow style={{width:'100%'}}>
            <TableCell style={{width:'30px'}}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenType(!openType)}>
                {openType ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Loại dự án</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{type.length}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openType} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo loại dự án chi tiết
                  </Typography>
                  {/* <TextField
                      label="Tìm kiếm"
                      id="outlined-margin-dense"
                      margin="dense"
                      variant="outlined"
                      onChange={handleFind} 
                    /> */}
                  <Table size="small" aria-label="purchases" style={{width:'auto'}}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'268px'}}>STT</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px'}}>Tên</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'115px'}}>Số lượng dự án</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageType > 0
                            ? rowsType.slice(pageType * rowsPerPageType, pageType * rowsPerPageType + rowsPerPageType)
                            : rowsType
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageType*rowsPerPageType}</TableCell>
                                <TableCell align="left" style={{width:'620px'}}>{row.name}</TableCell>
                                <TableCell align="left" style={{width:'500px', paddingLeft:'180px'}}>{row.quantity}</TableCell>
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsType.length}
                                rowsPerPage={rowsPerPageType}
                                page={pageType}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageType}
                                onRowsPerPageChange={handleChangeRowsPerPageType}
                                ActionsComponent={TablePaginationActions}
                            />
                          </TableRow>
                        </TableFooter>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>

          <TableRow style={{width:'100%'}}>
            <TableCell style={{width:'30px'}}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenTech(!openTech)}>
                {openTech ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Tech Stack</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{tech.length}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openTech} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo Tech Stack chi tiết
                  </Typography>
                  {/* <TextField
                      label="Tìm kiếm"
                      id="outlined-margin-dense"
                      margin="dense"
                      variant="outlined"
                      onChange={handleFind} 
                    /> */}
                  <Table size="small" aria-label="purchases" style={{width:'auto'}}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'268px'}}>STT</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px'}}>Tên</TableCell>
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'115px'}}>Số lượng từng tech</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageTech > 0
                            ? rowsTech.slice(pageTech * rowsPerPageTech, pageTech * rowsPerPageTech + rowsPerPageTech)
                            : rowsTech
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageTech*rowsPerPageTech}</TableCell>
                                <TableCell align="left" style={{width:'620px'}}>{row.name}</TableCell>
                                <TableCell align="left" style={{width:'500px', paddingLeft:'180px'}}>{row.quantity}</TableCell>
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsTech.length}
                                rowsPerPage={rowsPerPageTech}
                                page={pageTech}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageTech}
                                onRowsPerPageChange={handleChangeRowsPerPageTech}
                                ActionsComponent={TablePaginationActions}
                            />
                          </TableRow>
                        </TableFooter>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
  
      </Table>
    </TableContainer>
    </>
  );
}
