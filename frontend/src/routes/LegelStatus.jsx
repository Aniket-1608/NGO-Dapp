import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(Name, RegNo,) {
  return { Name, RegNo };
}

const rows = [
  createData('1) Name', 'Kumar Abab',  ),
  createData('2) Public Trust Act, 1950','E-7269 (24/09/2015)' ),
  createData('3) PAN Card', 'CSR00000374', ),
  createData('4) Income Tax Exemption','12AA 664/242/2015-16 80G 6974/228/2016-17', ),
  createData('5) Foreign contribution','FCRA No.- 083930725'),
  createData('6) Goods and Service Tax (GST)','FCRA No.- 083930725'),
  createData('7) TAN',88302012554372),
  createData('8) CSR Registration Number','CSR00000374'),
];

export default function LegelStatus() {
  return (
    <TableContainer >
      <Table sx={{ maxWidth:800,width: '50%', border:'1px solid black', marginTop:'90px', marginLeft:5 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ ' td,  th': { border: 1, borderTop:1 } }}  >
            <TableCell>Name</TableCell>
            <TableCell align="left">RegNo</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ ' td,  th': { border: 1, borderTop:1 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="left">{row.RegNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </TableContainer>
  );
}