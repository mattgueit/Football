import React from 'react';

interface PlayerGuessHistoryItemPropertyProps {
    key: string,
    itemProperty: any,
    isCorrect: boolean
}

export function PlayerGuessHistoryItemProperty(props: PlayerGuessHistoryItemPropertyProps) {
    const backgroundColour = props.isCorrect ? '#87cc85' : '#dde079';

    return (
        <React.Fragment>
            <div style={{ flex: '1 1 25%' }}>
                <div style={{ margin: 'auto', height: '80px', width: '80px', border: '1px solid', borderRadius: '10px', backgroundColor: backgroundColour }}>
                    {props.itemProperty}
                </div>
            </div>
        </React.Fragment>
    );
}