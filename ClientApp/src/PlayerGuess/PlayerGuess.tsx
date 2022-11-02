import React from 'react';
import axios from 'axios';
import { PlayerGuessSearchBox } from './PlayerGuessSearchBox';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export type Player = {
    id: number,
    name: string
};

interface PlayerGuessState {
    players: Player[],
    guesses: Player[]
}

export class PlayerGuess extends React.Component<any, PlayerGuessState> {
    constructor(props: Readonly<PlayerGuessState>) {
        super(props);

        this.state = {
            players: [],
            guesses: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:7026/Players')
            .then(res => {
                const players = res.data;
                this.setState({ players })
            })
    }

    registerGuess(player: Player) {
        console.log('registered player guess', player);
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{ margin: 'auto', width: '10%', }}>Who am I?</h1>
                <div style={{ height: '40px' }}></div>
                <QuestionMarkIcon sx={{ display: 'block', width: '50%', margin: 'auto', fontSize: 100 }} />
                <div style={{ height: '10px' }}></div>
                <PlayerGuessSearchBox
                    players={this.state.players}
                    onGuess={(player: Player) => this.registerGuess(player)}
                />
            </React.Fragment>
        );
    }
}