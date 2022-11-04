import React from 'react';

interface PlayerGuessHistoryItemPropertyProps {
    key: string,
    itemProperty: any
}

export function PlayerGuessHistoryItemProperty(props: PlayerGuessHistoryItemPropertyProps) {
    return (
        <React.Fragment>
            <div style={{ flex: '1 1 25%', justifyContent: 'center' }}>
                <div style={{ margin: 'auto', height: '80px', width: '80px', border: '1px solid', borderRadius: '10px'}}>
                    {props.itemProperty}
                </div>
            </div>
        </React.Fragment>
    );
}