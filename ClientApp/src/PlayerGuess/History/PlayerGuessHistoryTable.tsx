import React from 'react';
import { Player } from '../PlayerGuess';
import { PlayerGuessHistoryRow } from './PlayerGuessHistoryRow';

interface PlayerGuessHistoryProps {
    guessedPlayers: Player[],
    targetPlayer: Player
}

export function PlayerGuessHistoryTable(props: PlayerGuessHistoryProps) {
    return (
        <React.Fragment>
            <div style={{ margin: 'auto', width: '30%' }}>
                {props.guessedPlayers.map((player) => <PlayerGuessHistoryRow key={player.id} guessedPlayer={player} targetPlayer={props.targetPlayer} />) }
            </div>
        </React.Fragment>
    );
}