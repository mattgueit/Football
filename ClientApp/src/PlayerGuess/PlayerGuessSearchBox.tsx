import React from 'react';
import { Player } from './PlayerGuess';
import { Autocomplete, Button, TextField } from '@mui/material';

interface PlayerGuessSearchBoxProps {
    players: Player[],
    onGuess(player: Player): any
}

interface PlayerGuessSearchBoxState {
    players: Player[],
    input: string,
    guessed: boolean,
    guessedPlayer?: Player
}

export class PlayerGuessSearchBox extends React.Component<any, PlayerGuessSearchBoxState> {
    constructor(props: Readonly<PlayerGuessSearchBoxProps>) {
        super(props);

        this.state = {
            players: props.players,
            input: '',
            guessed: false,
            guessedPlayer: undefined
        }
    }

    // this is when a key is hit
    handleInputChange(value: string) {
        this.setState({ input: value });
    }

    // this is when a player is selected or cleared from the Autocomplete box
    handleChange(value: string | Player | null) {
        if (value == null || ((value as string).length == 0)) {
            this.setState({ guessed: false });
            return;
        }

        if (this.isPlayer(value)) {
            this.setState({ guessed: true, guessedPlayer: value }, () => {
                console.log('callback player', this.state.guessedPlayer);
                console.log('callback guessed', this.state.guessed);
            });
        }
    }

    isPlayer(value: string | Player | null): value is Player {
        return (value as Player).name !== undefined;
    }

    handleGuess() {
        if (this.state.guessed) {
            this.props.onGuess(this.state.guessedPlayer);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', width: '800px', margin: 'auto' }}>
                    {/*<img src="https://media.api-sports.io/football/players/882.png" />*/}
                    <Autocomplete
                        freeSolo
                        id="players-auto"
                        inputValue={this.state.input}
                        onChange={(_, value) => this.handleChange(value)}
                        onInputChange={(_, value) => this.handleInputChange(value)}
                        options={this.state.players}
                        getOptionLabel={(option) => (option as Player).name}
                        renderInput={(params) => <TextField {...params} label="Player Name" />}
                        open={this.state.input.length > 2 && !this.state.guessed}
                        sx={{ flex: 10, margin: '0 15px'}}
                    />
                    <Button variant="outlined" style={{ flex: 1 }} onClick={() => this.handleGuess()}>Guess</Button>
                </div>
            </React.Fragment>);
    }
}