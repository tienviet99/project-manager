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

export default function ContentReportStaff() {

  const [rows, setRows] = useState([])
  const url = 'http://localhost:8000/staffs'
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

    const experience = rows.map((staff)=>{
      return staff.experience
    })
    const rowsExper = handleData(experience)

    const techArr = rows.map((staff)=>{
        return staff.tech
      })
      const techArr1=techArr.flat(Infinity)
      const techArr2 = techArr1.map((tech)=>{
        return tech.nameTech
      })
    const rowsTech = handleData(techArr2)
  
    const frameworkArr = rows.map((staff)=>{
        return staff.tech
      })
      const frameworkArr1=frameworkArr.flat(Infinity)
      const frameworkArr2 = frameworkArr1.map((frame)=>{
        return frame.framework
      })
    const rowsFramework = handleData(frameworkArr2)

    const project = rows.map((staff)=>{
        return staff.project
      })  
        let countArr = []
      for (let i = 0; i < project.length; i++){
        countArr=[...countArr,project[i].length]
        }
    const rowsCount = handleData(countArr)

    
    const classes = useStyles();
    const [pageExper, setPageExper] = React.useState(0);
    const [rowsPerPageExper, setRowsPerPageExper] = React.useState(5);
    const [pageTech, setPageTech] = React.useState(0);
    const [rowsPerPageTech, setRowsPerPageTech] = React.useState(5);
    const [pageFramework, setPageFramework] = React.useState(0);
    const [rowsPerPageFramework, setRowsPerPageFramework] = React.useState(5);
    const [pageCount, setPageCount] = React.useState(0);
    const [rowsPerPageCount, setRowsPerPageCount] = React.useState(5);

    const emptyRowsExper = rowsPerPageExper - Math.min(rowsPerPageExper, rowsExper.length - pageExper * rowsPerPageExper);
    const emptyRowsTech = rowsPerPageTech - Math.min(rowsPerPageTech, rowsTech.length - pageTech * rowsPerPageTech);
    const emptyRowsFramework = rowsPerPageFramework - Math.min(rowsPerPageFramework, rowsFramework.length - pageFramework * rowsPerPageFramework);
    const emptyRowsCount = rowsPerPageCount - Math.min(rowsPerPageCount, rowsCount.length - pageCount * rowsPerPageCount);

    const handleChangePageExper = (event, newPage) => {
        setPageExper(newPage);
    };

    const handleChangeRowsPerPageExper = (event) => {
        setRowsPerPageExper(parseInt(event.target.value, 10));
        setPageExper(0);
    };

    const handleChangePageTech = (event, newPage) => {
      setPageTech(newPage);
    };

    const handleChangeRowsPerPageTech = (event) => {
        setRowsPerPageTech(parseInt(event.target.value, 10));
        setPageTech(0);
    };

    const handleChangePageFramework = (event, newPage) => {
      setPageFramework(newPage);
    };

    const handleChangeRowsPerPageFramework = (event) => {
        setRowsPerPageFramework(parseInt(event.target.value, 10));
        setPageFramework(0);
    };

    const handleChangePageCount = (event, newPage) => {
        setPageCount(newPage);
      };
  
      const handleChangeRowsPerPageCount = (event) => {
          setRowsPerPageCount(parseInt(event.target.value, 10));
          setPageCount(0);
      };

    const [openExper, setOpenExper] = React.useState(false);
    const [openTech, setOpenTech] = React.useState(false);
    const [openFramework, setOpenFramework] = React.useState(false);
    const [openCount, setOpenCount] = React.useState(false);

    const handleFind = (event) => {
        // const value = event.target.value.toLowerCase();
        // const rowsStatusFind = rowsStatus.find(function(row) {
        //    return row.name.toLowerCase() === value
        // });
    }

  return (
    <>
    <Typography variant="h5" gutterBottom component="div" style={{marginLeft:'2em', fontWeight:'600'}}>
         Báo cáo Số lượng Nhân sự
      </Typography>
    <TableContainer component={Paper} style={{margin: "1em 0em 0em 4em"}}>
      <Table className={classes.table} aria-label="simple table" style={{width:'1500px', margin: '1em -3em 0em 1em'}}>

        <TableHead>
          <TableRow style={{width:'100%'}}>
            <TableCell />
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger', padding:'7px'}} >Tên</TableCell>
            <TableCell align="center" style={{fontWeight:'700',fontSize:'larger', padding:'7px'}} >Tổng</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow style={{width:'auto'}}>
            <TableCell style={{width:'30px'}}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenExper(!openExper)}>
                {openExper ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Kinh nghiệm</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{experience.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openExper} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo kinh nghiệm chi tiết
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
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px', paddingLeft:'257px'}}>Tên</TableCell>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'26px'}}>Số lượng</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageExper > 0
                            ? rowsExper.slice(pageExper * rowsPerPageExper, pageExper * rowsPerPageExper + rowsPerPageExper)
                            : rowsExper
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageExper*rowsPerPageExper}</TableCell>
                                <TableCell align="left" style={{width:'620px',paddingLeft:'250px'}}>{row.name}</TableCell>
                                <TableCell align="center" style={{width:'500px', paddingLeft:'26px'}}>{row.quantity}</TableCell>
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsExper.length}
                                rowsPerPage={rowsPerPageExper}
                                page={pageExper}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageExper}
                                onRowsPerPageChange={handleChangeRowsPerPageExper}
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
            <TableCell align="center" style={{padding:'8px'}} >{techArr2.length}</TableCell>
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
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px', paddingLeft:'257px'}}>Tên</TableCell>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'26px'}}>Số lượng</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageTech > 0
                            ? rowsTech.slice(pageTech * rowsPerPageTech, pageTech * rowsPerPageTech + rowsPerPageTech)
                            : rowsTech
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageTech*rowsPerPageTech}</TableCell>
                                <TableCell align="left" style={{width:'620px',paddingLeft:'250px'}}>{row.name}</TableCell>
                                <TableCell align="center" style={{width:'500px', paddingLeft:'26px'}}>{row.quantity}</TableCell>
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

          <TableRow style={{width:'100%'}}>
            <TableCell style={{width:'30px'}}>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenFramework(!openFramework)}>
                {openFramework ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Frame Work</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{frameworkArr2.length}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openFramework} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo Framework chi tiết
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
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px', paddingLeft:'257px'}}>Tên</TableCell>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'26px'}}>Số lượng từng Framework</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageFramework > 0
                            ? rowsFramework.slice(pageFramework * rowsPerPageFramework, pageFramework * rowsPerPageFramework + rowsPerPageFramework)
                            : rowsFramework
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageFramework*rowsPerPageFramework}</TableCell>
                                <TableCell align="left" style={{width:'620px',paddingLeft:'250px'}}>{row.name}</TableCell>
                                <TableCell align="center" style={{width:'500px', paddingLeft:'26px'}}>{row.quantity}</TableCell>
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsFramework.length}
                                rowsPerPage={rowsPerPageFramework}
                                page={pageFramework}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageFramework}
                                onRowsPerPageChange={handleChangeRowsPerPageFramework}
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
              <IconButton aria-label="expand row" size="small" onClick={() => setOpenCount(!openCount)}>
                {openCount ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="center" style={{padding:'8px'}} >Đang join dự án</TableCell>
            <TableCell align="center" style={{padding:'8px'}} >{countArr.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openCount} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Báo cáo Nhân sự chi tiết
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
                        <TableCell align="left" style={{fontWeight:'600',fontSize:'medium',width:'640px', paddingLeft:'257px'}}>Hiện trạng</TableCell>
                        <TableCell align="center" style={{fontWeight:'600',fontSize:'medium',width:'150px', paddingLeft:'26px'}}>Số lượng</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                        {(rowsPerPageCount > 0
                            ? rowsCount.slice(pageCount * rowsPerPageCount, pageCount * rowsPerPageCount + rowsPerPageCount)
                            : rowsCount
                          ).map((row,index) => (
                              <TableRow >
                                <TableCell align="center" component="th" scope="row" style={{width:'268px'}}>{index+1+pageCount*rowsPerPageCount}</TableCell>
                                <TableCell align="left" style={{width:'620px',paddingLeft:'250px'}}>Đang join {row.name} dự án</TableCell>
                                <TableCell align="center" style={{width:'500px', paddingLeft:'26px'}}>{row.quantity}</TableCell> 
                              </TableRow>
                          ))}

                        </TableBody>
                        <TableFooter>
                          <TableRow >
                            <TablePagination
                                style={{paddingRight:'38em'}}
                                rowsPerPageOptions={[5,10]}
                                colSpan={3}
                                count={rowsCount.length}
                                rowsPerPage={rowsPerPageCount}
                                page={pageCount}
                                labelRowsPerPage={'Số hàng hiển thị :'}
                                SelectProps={{
                                  inputProps: { 'aria-label': 'rows per page' },
                                  native: true,
                                }}
                                onPageChange={handleChangePageCount}
                                onRowsPerPageChange={handleChangeRowsPerPageCount}
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
