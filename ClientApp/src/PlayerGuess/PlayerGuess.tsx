import React from 'react';
import axios from 'axios';
import { PlayerGuessHistoryTable } from './History/PlayerGuessHistoryTable';
import { PlayerGuessSearchBox } from './PlayerGuessSearchBox';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { CircularProgress } from '@mui/material';

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
    loading: boolean,
    players: Player[],
    guessedPlayers: Player[]
}

export class PlayerGuess extends React.Component<any, PlayerGuessState> {
    constructor(props = { }) {
        super(props);

        this.state = {
            loading: true,
            players: [],
            guessedPlayers: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:7026/Players')
            .then(res => {
                const players = res.data;
                this.setState(
                    {
                        players,
                        loading: false
                    }
                );
            })
    }

    registerGuess(player: Player) {
        if (this.state.guessedPlayers.includes(player)) {
            return;
        }

        const guessedPlayers = this.state.guessedPlayers.slice();

        guessedPlayers.unshift(player); 

        this.setState({ guessedPlayers });
    }

    render() {
        if (this.state.loading) {
            return(
                <div style = {{ position: 'absolute', left: '50%', top: '30%', marginTop: '-50px', marginLeft: '-50px', width: '100%', height: '100%' }} >
                    <CircularProgress />
                </div>
            )
        }
        
        return (
            <React.Fragment>
                <div style={{ marginTop: '30px', marginBottom: '50px'}}>
                    <h1 style={{ margin: 'auto', width: '10%', marginBottom: '20px'}}>Who am I?</h1>
                    <QuestionMarkIcon sx={{ display: 'block', width: '50%', margin: 'auto', fontSize: 100 }} />
                    <div style={{ height: '10px' }}></div>
                    <div>
                        <PlayerGuessSearchBox
                            players={this.state.players}
                            onGuess={(player: Player) => this.registerGuess(player)}
                        />
                    </div>

                    {this.state.guessedPlayers.length > 0 &&
                        <div>
                            <PlayerGuessHistoryTable
                                players={this.state.guessedPlayers}
                            />
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}