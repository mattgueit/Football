import React from 'react';
import { Player } from './PlayerGuess';
import { PlayerGuessHistoryItem } from './PlayerGuessHistoryItem';

interface PlayerGuessHistoryProps {
    players: Player[]
}

export function PlayerGuessHistoryTable(props: PlayerGuessHistoryProps) {
    return (
        <React.Fragment>
            <div style={{ margin: 'auto', width: '30%' }}>
                {props.players.map((player) => <PlayerGuessHistoryItem key={player.id} player={player} />) }
            </div>
        </React.Fragment>
    );
}