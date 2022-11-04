import React from 'react';
import moment from 'moment';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Player } from './PlayerGuess';

interface PlayerGuessHistoryProps {
    players: Player[]
}

function calculateAge(birthday: string) {
    var birthdayDate = moment(birthday, 'YYYY-MM-DD').toDate();
    var ageDifMs = Date.now() - birthdayDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function PlayerGuessHistory(props: PlayerGuessHistoryProps) {
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="player guesses">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Team Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Nationality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.players.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.teamName}</TableCell>
                                <TableCell align="right">{calculateAge(row.dateOfBirth).toString()}</TableCell>
                                <TableCell align="right">{row.position}</TableCell>
                                <TableCell align="right">{row.nationality}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}