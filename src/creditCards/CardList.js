import React from 'react';
import CardInfo from './CardInfo';

export default function cardList({cardList = []}) {
    const headingValues = {
        name: 'Name',
        ccNumber: 'Card Number',
        balance: 'Balance',
        limit: 'Limit'
    };
   
    return(
        <div>
            <span className="card-list-heading">Existing Cards</span>
            <div className="card-list">
                <CardInfo 
                    card={headingValues}
                    rowClass="heading" />
                {cardList.map(item => 
                    <CardInfo 
                        card={item}
                        rowClass="data" />)}
            </div>
        </div>
    );
}
