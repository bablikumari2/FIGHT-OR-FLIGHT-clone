import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import axios from 'axios';

//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Home() {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [data, setData] = useState([])
    const [disp, setDisp] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/Flights").then((res) => setData(res.data))
    }, [])

    const handleSearch = () => {
        const disp1 = data.filter((e) => {
            // console.log("eee",e)
            if ((from == e.from) && (to == e.to)) {
                return e
            }
        })
        setDisp(disp1)
        console.log("disp", disp1)
        console.log("apend", disp)
    }


    return (
        <div>
            <div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '85ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="FROM"
                        // value={name}
                        onChange={(e) => { setFrom(e.target.value) }}
                    /><br />

                    <TextField
                        id="outlined-name"
                        label="TO"
                        // value={name}
                        onChange={(e) => { setTo(e.target.value) }}
                    /><br />

                    <Button variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
            </div>

            <div>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>From</b></TableCell>
            <TableCell align="right"><b>To&nbsp;</b> </TableCell>
            <TableCell align="right"><b>Cost&nbsp;</b> </TableCell>
            <TableCell align="right"><b>From Time&nbsp;</b> </TableCell>
            <TableCell align="right"><b>To Time&nbsp;</b></TableCell>
            <TableCell align="right"><b>PNR&nbsp;</b> </TableCell>
            <TableCell align="right"><b>Capacity&nbsp;</b> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {disp.map((e) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.airlines}
              </TableCell>
              <TableCell align="right">{e.from}</TableCell>
              <TableCell align="right">{e.to}</TableCell>
              <TableCell align="right">{e.cost}</TableCell>
              <TableCell align="right">{e.FromTime}</TableCell>
              <TableCell align="right">{e.ToTime}</TableCell>
              <TableCell align="right">{e.pnr}</TableCell>
              <TableCell align="right">{e.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                {/* <table>
                    <tr>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Cost</th>
                        <th>From Time</th>
                        <th>To Time</th>
                        <th>PNR</th>
                        <th>Capacity</th>
                    </tr>

                    {
                        disp.map((e) => (
                            <tr key={e.id}>
                                <td>{e.airlines}</td>
                                <td>{e.from}</td>
                                <td>{e.to}</td>
                                <td>{e.cost}</td>
                                <td>{e.FromTime}</td>
                                <td>{e.ToTime}</td>
                                <td>{e.pnr}</td>
                                <td>{e.capacity}</td>
                            </tr>
                        ))
                    }



                </table> */}
            </div>

        </div>
    )
}