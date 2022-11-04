import React from 'react';
import axios from 'axios';
import { PlayerGuessHistory } from './PlayerGuessHistory';
import { PlayerGuessSearchBox } from './PlayerGuessSearchBox';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export type Player = {
    id: number,
    name: string,
    teamId: string,
    teamName: string,
    dateOfBirth: string,
    position: string, // type for 'FW', 'MD', 'DF', 'GK'
    nationality: string
};

interface PlayerGuessState {
    players: Player[],
    guessedPlayers: Player[]
}

export class PlayerGuess extends React.Component<any, PlayerGuessState> {
    constructor(props = { }) {
        super(props);

        this.state = {
            players: [],
            guessedPlayers: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:7026/Players')
            .then(res => {
                const players = res.data;
                this.setState({ players });
            })
    }

    registerGuess(player: Player) {
        const guessedPlayers = this.state.guessedPlayers.slice();

        // unshift == push at the first index.
        guessedPlayers.unshift(player); 

        this.setState({ guessedPlayers });
    }

    render() {
        console.log('render playerGuess', this.state.players);
        return (
            <React.Fragment>
                <h1 style={{ margin: 'auto', width: '10%', }}>Who am I?</h1>
                <div style={{ height: '40px' }}></div>
                <QuestionMarkIcon sx={{ display: 'block', width: '50%', margin: 'auto', fontSize: 100 }} />
                <div style={{ height: '10px' }}></div>
                <div>
                    <PlayerGuessSearchBox
                        players={this.state.players}
                        onGuess={(player: Player) => this.registerGuess(player)}
                    />
                </div>

                {this.state.guessedPlayers.length > 0 &&
                    <div style={{ paddingTop: '50px' }}>
                        <PlayerGuessHistory
                            players={this.state.guessedPlayers}
                        />
                    </div>
                }
            </React.Fragment>
        );
    }
}