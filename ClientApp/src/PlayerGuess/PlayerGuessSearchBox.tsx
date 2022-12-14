import React from 'react';
import { Player } from './PlayerGuess';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { ClubIcon } from '../Icons/ClubIcon';

interface PlayerGuessSearchBoxProps {
    players: Player[],
    onGuess(player: Player): any
}

interface PlayerGuessSearchBoxState {
    input: string,
    guessed: boolean,
    guessedPlayer?: Player
}

export class PlayerGuessSearchBox extends React.Component<PlayerGuessSearchBoxProps, PlayerGuessSearchBoxState> {
    constructor(props: Readonly<PlayerGuessSearchBoxProps>) {
        super(props);

        this.state = {
            input: '',
            guessed: false,
            guessedPlayer: undefined
        }
    }

    // on every key press in search box
    handleInputChange(value: string) {
        this.setState({ input: value });
    }

    // on every player selection / removal in search box
    handleChange(value: string | Player | null) {
        if (value === null || ((value as string).length == 0)) {
            this.setState({ guessed: false });
            return;
        }

        if (this.isPlayer(value)) {
            this.setState({
                guessed: true,
                guessedPlayer: value
            });
        }
        else {
            this.setState({ guessed: false });
        }
    }

    isPlayer(value: string | Player | null): value is Player {
        return (value as Player).name !== undefined;
    }

    // lift state up
    handleGuess() {
        if (this.state.guessed) {
            this.props.onGuess((this.state.guessedPlayer as Player));
        }

        this.setState(
            {
                input: '',
                guessed: false
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', width: '800px', margin: 'auto' }}>
                    <Autocomplete
                        freeSolo
                        id="players-auto"
                        inputValue={this.state.input}
                        onChange={(_, value) => this.handleChange(value)}
                        onInputChange={(_, newInputValue) => this.handleInputChange(newInputValue)}
                        options={this.props.players}
                        getOptionLabel={(option) => (option as Player).name}
                        renderOption={(props, option) => ( 
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <ClubIcon clubName={option.clubName} style={{ width: 20 }} />
                                {option.name}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Player Name"
                                onKeyDown={(e) => {
                                    if (e.code == "Enter" && this.state.guessed) {
                                        this.handleGuess();
                                    }
                                }}
                            />
                        )}
                        open={this.state.input.length > 2 && !this.state.guessed}
                        sx={{ flex: 10, margin: '0 15px'}}
                    />
                    <Button variant="outlined" style={{ flex: 1 }} onClick={() => this.handleGuess()}>Guess</Button>
                </div>
            </React.Fragment>);
    }
}