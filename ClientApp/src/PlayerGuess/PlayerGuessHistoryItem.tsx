import React from 'react';
import moment from 'moment';
import { Player } from './PlayerGuess';

interface PlayerGuessHistoryItemProps {
    key: number,
    player: Player
}

function calculateAge(birthday: string) {
    var birthdayDate = moment(birthday, 'YYYY-MM-DD').toDate();
    var ageDifMs = Date.now() - birthdayDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


export function PlayerGuessHistoryItem(props: PlayerGuessHistoryItemProps) {
    return (
        <React.Fragment>
            <div style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{props.player.name}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ flexGrow: 1 }}>{props.player.nationality}</div>
                    <div style={{ flexGrow: 1 }}>{props.player.teamName}</div>
                    <div style={{ flexGrow: 1 }}>{props.player.position}</div>
                    <div style={{ flexGrow: 1 }}>{calculateAge(props.player.dateOfBirth)}</div>
                </div>
            </div>
        </React.Fragment>
    );
}