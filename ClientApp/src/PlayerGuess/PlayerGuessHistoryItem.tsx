import React from 'react';
import moment from 'moment';
import { Player } from './PlayerGuess';
import { PlayerGuessHistoryItemProperty } from './PlayerGuessHistoryItemProperty';
import { ClubLogo } from '../Club/ClubLogo';

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

function getClubIcon(clubName: string) {
    return <ClubLogo clubName={ clubName } style={{ maxHeight: '60%' }} />
}

export function PlayerGuessHistoryItem(props: PlayerGuessHistoryItemProps) {
    return (
        <React.Fragment>
            <div style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{props.player.name}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', maxHeight: '100px' }}>
                    <PlayerGuessHistoryItemProperty key='nationality' itemProperty={props.player.nationality} />
                    <PlayerGuessHistoryItemProperty key='teamName' itemProperty={getClubIcon(props.player.teamName)} />
                    <PlayerGuessHistoryItemProperty key='position' itemProperty={props.player.position} />
                    <PlayerGuessHistoryItemProperty key='age' itemProperty={calculateAge(props.player.dateOfBirth).toString()} />
                </div>
            </div>
        </React.Fragment>
    );
}