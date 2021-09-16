import "./style.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieCharTech({data}) {
    const total = data.reduce((result,param) => {
        return  result + param.value
    },0)
  return (
    <div>
    <Typography variant="h6" gutterBottom component="div" style={{margin:'20px'}}>
      Báo cáo số lượng Tech Stack dùng trong dự án
    </Typography>
    <div className='content-tech'>
    <PieChart width={350} height={350} style={{margin:"-2em"}}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div>
        <Typography variant="h6" gutterBottom component="div" style={{margin:'20px'}}>
            Chú thích
        </Typography>
        <Table size="small" aria-label="purchases" style={{width:'auto'}}>
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{fontWeight:'600',fontSize:'medium'}}>Tên</TableCell>
              <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Số lượng</TableCell>
              <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Tỉ lệ</TableCell>
              <TableCell align="center" style={{fontWeight:'600',fontSize:'medium'}}>Màu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {data.map((row,index) => (
                    <TableRow >
                      <TableCell align="left" >{row.name}</TableCell>
                      <TableCell align="center" >{row.value}</TableCell>
                      <TableCell align="center" >{(row.value/total*100).toFixed(0)}%</TableCell>
                      <TableCell align="center" ><Box style={{ width:'20px', height:'20px', background:`${COLORS[index % COLORS.length]}`}} /></TableCell>
                    </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  );
}
