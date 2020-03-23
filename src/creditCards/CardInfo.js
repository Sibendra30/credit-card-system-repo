import React from 'react';

export default function cardList({card, rowClass}) {
    return(
        <div className={`row mx-0 ${rowClass}`} key="card.cardNumber">
            <div className="col-3 border-right-class" >{card.name}</div>
            <div className="col-3 border-right-class">{card.ccNumber}</div>
            <div className="col-3 border-right-class">{card.balance}</div>
            <div className="col-3">{card.limit}</div>
        </div>
    );
}
