import React from 'react';
import moment from 'moment';
import { Player } from '../PlayerGuess';
import { PlayerGuessHistoryItemProperty } from './PlayerGuessHistoryItemProperty';
import { ClubLogo } from '../../Club/ClubLogo';

interface PlayerGuessHistoryRowProps {
    key: number,
    player: Player
}

function calculateAge(birthday: string) {
    var birthdayDate = moment(birthday, 'YYYY-MM-DD').toDate();
    var ageDifMs = Date.now() - birthdayDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function createClubIcon(clubName: string) {
    const iconStyle = {
        position: 'relative',
        top: '10%',
        left: '10%',
        height: '80%',
        width: '80%'
    }

    return <ClubLogo clubName={ clubName } style={ iconStyle } />
}


export function PlayerGuessHistoryRow(props: PlayerGuessHistoryRowProps) {
    return (
        <React.Fragment>
            <div style={{ marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{props.player.name}</h3>
                </div>
                <div style={{ display: 'flex', maxHeight: '100px' }}>
                    <PlayerGuessHistoryItemProperty key='nationality' itemProperty={props.player.nationality} />
                    <PlayerGuessHistoryItemProperty key='teamName' itemProperty={createClubIcon(props.player.teamName)} />
                    <PlayerGuessHistoryItemProperty key='position' itemProperty={props.player.position} />
                    <PlayerGuessHistoryItemProperty key='age' itemProperty={calculateAge(props.player.dateOfBirth).toString()} />
                </div>
            </div>
        </React.Fragment>
    );
}