import React from 'react';

interface PlayerGuessHistoryItemPropertyProps {
    key: string,
    itemProperty: any
}

export function PlayerGuessHistoryItemProperty(props: PlayerGuessHistoryItemPropertyProps) {
    return (
        <React.Fragment>
            <div style={{ flexGrow: 1, maxHeight: '50%', justifyContent: 'center' }}>
                {props.itemProperty}
            </div>
        </React.Fragment>
    );
}