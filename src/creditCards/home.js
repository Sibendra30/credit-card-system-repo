import React, {Component} from 'react';
import AddCardForm from './addCardForm';
import CardList from './CardList';
import {addNewCard, getAllCards} from '../apis/apiConnector';
export default class Register extends Component {

    componentDidMount() {
        const cardListPromise = getAllCards();
        cardListPromise.then(data => {
            this.setState({cardList: data});
        })
    }

    addNewCreditCardHanlder = async (cardObj) => {
        console.log(cardObj);
        const addCardPromise = await addNewCard(cardObj);
        addCardPromise.then((data) => {
            if (data) {
                const cardListPromise = getAllCards();
                cardListPromise.then(data => {
                    this.setState({cardList: data});
                })
            }
        })
    }

    render () {
        const {cardList = []} = this.state || {};
        return (
            <div className="mx-2">
                <span className="card-home-header">Credit Card System</span>
                <AddCardForm addNewCreditCardHanlder={this.addNewCreditCardHanlder} />
                <CardList cardList={cardList} />
            </div>)
    }

}