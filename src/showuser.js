import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Axios from 'axios';
import deleteuser from './updateuser';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Showuser() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
    }, [])

    const UserGet = () => {
        fetch("http://localhost:3001/user")
            .then(res => res.json())
            .then(
                (result) => {
                    //setIsLoaded(true);
                    setItems(result);
                },
            )
    }
    

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Box display="flex">
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' gutterBottom component='div'>
                                User
                            </Typography>
                        </Box>
                        <Box>
                            <Link href="adduser">
                                <Button variant='contained'>Add User</Button>
                            </Link>
                        </Box>
                    </Box>

                    <TableContainer component={Paper} maxWidth="lg" sx={{ p: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell align="center">E-mail</StyledTableCell>
                                    <StyledTableCell align="leftr">Password</StyledTableCell>
                                    <StyledTableCell align="left">First Name</StyledTableCell>
                                    <StyledTableCell align="left">Last Name</StyledTableCell>
                                    <StyledTableCell align="center">Update User</StyledTableCell>
                                    <StyledTableCell align="center">Delete USer</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                                        <StyledTableCell align="left">{row.password}</StyledTableCell>
                                        <StyledTableCell align="left">{row.first_name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.last_name}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Link href="updeatuser">
                                                <Button color="success" variant='contained'>UPDATE</Button>
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <button className="btn btn-danger" onClick={() => { deleteuser(val.id) }}>DELETE</button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </React.Fragment>
    );
}