import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Player } from './PlayerGuess';
import { PlayerGuessHistoryItem } from './PlayerGuessHistoryItem';

interface PlayerGuessHistoryProps {
    players: Player[]
}

export function PlayerGuessHistory(props: PlayerGuessHistoryProps) {

    function createHistoryItem(player: Player) {
        return 
    }

    return (
        <React.Fragment>
            <div style={{ margin: 'auto', width: '30%' }}>
                {props.players.map((player) => <PlayerGuessHistoryItem key={player.id} player={player} />) }
            </div>
        </React.Fragment>
    );
}