import React from 'react';
import moment from 'moment';
import { Player } from '../PlayerGuess';
import { PlayerGuessHistoryItemProperty } from './PlayerGuessHistoryItemProperty';
import { ClubIcon } from '../../Icons/ClubIcon';
import { NationFlagIcon } from '../../Icons/NationFlagIcon';

interface PlayerGuessHistoryRowProps {
    key: number,
    guessedPlayer: Player,
    targetPlayer: Player
}

enum AgeGuessStatus {
    Equal,
    Lower,
    Higher
}

export function PlayerGuessHistoryRow(props: PlayerGuessHistoryRowProps) {
    const nationFlag = createNationFlag(props.guessedPlayer.nationality);

    const clubIcon = createClubIcon(props.guessedPlayer.clubName);

    const positionLargeText = createLargeText(props.guessedPlayer.position);

    const guessedAge = calculateAge(props.guessedPlayer.dateOfBirth);
    const targetAge = calculateAge(props.targetPlayer.dateOfBirth);
    const ageGuessStatus = createAgeGuessStatus(guessedAge, targetAge);
    const ageHistoryItemString = createAgeHistoryItemString(guessedAge, ageGuessStatus);
    const ageGuessText = createLargeText(ageHistoryItemString);

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
                    <PlayerGuessHistoryItemProperty
                        key='nationality'
                        itemProperty={nationFlag}
                        isCorrect={nationalityIsCorrect}
                    />
                    <PlayerGuessHistoryItemProperty
                        key='club'
                        itemProperty={clubIcon}
                        isCorrect={clubIsCorrect}
                    />
                    <PlayerGuessHistoryItemProperty
                        key='position'
                        itemProperty={positionLargeText}
                        isCorrect={positionIsCorrect}
                    />
                    <PlayerGuessHistoryItemProperty
                        key='age'
                        itemProperty={ageGuessText}
                        isCorrect={ageIsCorrect}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function createNationFlag(nationality: string) {
    const divStyle = {
        position: 'relative',
        top: '15%',
        left: '15%',
        height: '70%',
        width: '70%'
    }; 

    const svgStyle = {
        borderRadius: '40px'
    };

    return <NationFlagIcon nationality={nationality} svgStyle={svgStyle} divStyle={divStyle} />
}


function createClubIcon(clubName: string) {
    const iconStyle = {
        position: 'relative',
        top: '15%',
        left: '15%',
        height: '70%',
        width: '70%'
    }

    return <ClubIcon clubName={clubName} style={iconStyle} />
}

function calculateAge(birthday: string) {
    var birthdayDate = moment(birthday, 'YYYY-MM-DD').toDate();
    var ageDifMs = Date.now() - birthdayDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function createLargeText(text: string) {
    return <p style={{ fontSize: '22px', textAlign: 'center', verticalAlign: 'bottom' }}>{text}</p>
}

function createAgeGuessStatus(guessedAge: number, targetAge: number): AgeGuessStatus {
    if (guessedAge < targetAge) {
        return AgeGuessStatus.Lower;
    }

    if (guessedAge > targetAge) {
        return AgeGuessStatus.Higher;
    }

    return AgeGuessStatus.Equal;
}

function createAgeHistoryItemString(guessedAge: number, ageGuessStatus: AgeGuessStatus): string {
    const guessedAgeString = guessedAge.toString();
    
    if (ageGuessStatus === AgeGuessStatus.Lower) {
        return `${guessedAgeString}${' '.repeat(5)}${'\u2191'}`;
    }

    if (ageGuessStatus === AgeGuessStatus.Higher) {
        return `${guessedAgeString}${' '.repeat(5)}${'\u2193'}`;
    }

    return guessedAgeString;
}
