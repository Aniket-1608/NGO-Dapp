import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(SrNo, Name, Year, ) {
  return { SrNo, Name,Year, };
}

const rows = [
  createData('1', 'Annual Report','2022-23',  ),
  createData('2','Annual Report','2018-19',),
  createData('3', 'Annual Report','2018-19',),
  createData('4', 'Annual Report','2017-18',),
  createData('5','Annual Report','2017-18',),
  createData('6','Annual Report','2015-16',),
];

export default function Reports(props) {
  return (
    <TableContainer >
      <Table sx={{ width: '1000px', border:'1px solid black', marginTop:'90px', marginLeft:5 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ ' td,  th': { border: 1, borderTop:1  } }}  >
            <TableCell align='center'>Sr No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.SrNo}
              sx={{ ' td,  th': { border: 1, borderTop:1 } }}
            >
              <TableCell align='center' component="th" scope="row">
                {row.SrNo}
              </TableCell>
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Year}</TableCell>
              <TableCell align="center">'<i style={{color:'blueviolet'}}  className="fa-solid fa-download"></i>'</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      

    </TableContainer>
  );
}