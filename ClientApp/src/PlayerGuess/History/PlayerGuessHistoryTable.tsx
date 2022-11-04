import React from 'react';
import { Player } from '../PlayerGuess';
import { PlayerGuessHistoryRow } from './PlayerGuessHistoryRow';

interface PlayerGuessHistoryProps {
    players: Player[]
}

export function PlayerGuessHistoryTable(props: PlayerGuessHistoryProps) {
    return (
        <React.Fragment>
            <div style={{ margin: 'auto', width: '30%' }}>
                { props.players.map((player) => <PlayerGuessHistoryRow key={player.id} player={player} />) }
            </div>
        </React.Fragment>
    );
}