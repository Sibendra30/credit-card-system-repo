import React, {useState} from 'react';
export default function addNewCardForm(props) {
    const [customerName, setCustomerName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [limit, setLimit] = useState(0);
    const [addEnabled, enableAddButton] = useState(false);

    const onChangeHandler = (e) => {
        console.log();
        switch(e.target.id) {
        case 'name':
            setCustomerName(e.target.value);
            break;
        case 'cardNumber':
            setCardNumber(e.target.value);
            break;
        case 'limit':
            setLimit(e.target.value);
            break;
        default:
            break;
        }

        if (customerName && cardNumber && limit > 0) {
            enableAddButton(true);
        }

    };

    const clickHandler = () => {
        const cardObj = {
            customerName,
            cardNumber,
            limit
        };
        props.addNewCreditCardHanlder(cardObj);
    };

    return (
        <div>
            <div>
                <div>Name</div>
                <input type="text" id="name" value={customerName} onChange={onChangeHandler} />
            </div>
            <div>
                <div>Card Number</div>
                <input type="text" id="cardNumber" value={cardNumber} onChange={onChangeHandler} />
            </div>
            <div>
                <div>Limit</div>
                <input type="number" id="limit" value={limit} onChange={onChangeHandler} />
            </div>
            <div className="my-2">
                <button onClick={clickHandler} disabled={!addEnabled}>Add</button>
            </div>
        </div>)
}