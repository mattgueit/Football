import React from 'react';
import moment from 'moment';
import { Player } from '../PlayerGuess';
import { PlayerGuessHistoryItemProperty } from './PlayerGuessHistoryItemProperty';
import { ClubIcon } from '../../Icons/ClubIcon';

interface PlayerGuessHistoryRowProps {
    key: number,
    guessedPlayer: Player,
    targetPlayer: Player
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

    return <ClubIcon clubName={ clubName } style={ iconStyle } />
}

function createLargeText(text: string) {
    return <p style={{ fontSize: '22px', textAlign: 'center', verticalAlign: 'bottom'}}>{text}</p>
}


export function PlayerGuessHistoryRow(props: PlayerGuessHistoryRowProps) {
    const clubIcon = createClubIcon(props.guessedPlayer.clubName);
    const positionLargeText = createLargeText(props.guessedPlayer.position);
    const guessedAge = calculateAge(props.guessedPlayer.dateOfBirth);
    const ageLargeText = createLargeText(guessedAge.toString());

    const targetAge = calculateAge(props.targetPlayer.dateOfBirth);

    const nationalityIsCorrect = props.guessedPlayer.nationality === props.targetPlayer.nationality;
    const clubIsCorrect = props.guessedPlayer.clubId === props.targetPlayer.clubId;
    const positionIsCorrect = props.guessedPlayer.position === props.targetPlayer.position;
    const ageIsCorrect = guessedAge === targetAge;

    return (
        <React.Fragment>
            <div style={{ marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{props.guessedPlayer.name}</h3>
                </div>
                <div style={{ display: 'flex', maxHeight: '100px' }}>
                    <PlayerGuessHistoryItemProperty key='nationality' itemProperty={props.guessedPlayer.nationality} isCorrect={nationalityIsCorrect} />
                    <PlayerGuessHistoryItemProperty key='club' itemProperty={clubIcon} isCorrect={clubIsCorrect} />
                    <PlayerGuessHistoryItemProperty key='position' itemProperty={positionLargeText} isCorrect={positionIsCorrect} />
                    <PlayerGuessHistoryItemProperty key='age' itemProperty={ageLargeText} isCorrect={ageIsCorrect} />
                </div>
            </div>
        </React.Fragment>
    );
}