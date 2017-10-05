import React from 'react';
import InfoModal from './info-modal'

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'game',
            guesses: [],
            guess:'',
            //doesn't include 0
            answer:Math.floor((Math.random()*100)+1)
        }
    }

    setView(view){
        this.setState({
            view:view
        })
    }

    resetGame(game){
        this.setState({
            guesses:[]
        })
    }

    storeGuess(guess){
        // event.preventDefault();
        this.setState({
            guesses:[...this.state.guesses,guess],
            guess:guess
        })
    }



    render() {
        if(this.state.view==='info'){
            return (
                <div>
                    <InfoModal onClick={(view)=>this.setView(view)}/>
                </div>
            )
        }


        return (
            <div>
                <Header onClick={(view)=>this.setView(view)} onClick2={(game)=>this.resetGame(game)}/>
                <GuessSection onSubmit={(guess)=>this.storeGuess(guess)} value={this.state.guess} feedback="Make your guess!" />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

