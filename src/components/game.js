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
            guess: '',
            //doesn't include 0
            answer: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess'
        }
    }

    setView(view) {
        this.setState({
            view: view
        })
    }

    resetGame(game) {
        this.setState({
            guesses: [],
            guess: '',
            feedback: 'Make your guess'
        })
    }

    storeGuess(guess) {
        // event.preventDefault();
        if (this.state.guesses.includes(guess) && guess !== this.state.answer) {
            this.setState({ 
                feedback: "You already guessed that, dummy!",
                guess: ''
            })
        }
        else {
            this.setState({
                guesses: [...this.state.guesses, guess],
                guess: ''
            })
            if (this.state.answer - guess === 0 && this.state.answer - guess === 0) {
                this.setState({ feedback: "YOU'RE RIGHT! YOU'RE SO SMART! OH MY GOD" })
            }
            else if (this.state.answer - guess <= 5 && this.state.answer - guess >= -5) {
                this.setState({ feedback: "YOU'RE ON FIRE!" })
            }
            else if (this.state.answer - guess <= 10 && this.state.answer - guess >= -10) {
                this.setState({ feedback: "HOT!" })
            }
            else if (this.state.answer - guess <= 15 && this.state.answer - guess >= -15) {
                this.setState({ feedback: "Warm" })
            }
            else if (this.state.answer - guess <= 20 && this.state.answer - guess >= -20) {
                this.setState({ feedback: "Cool" })
            }
            else if (this.state.answer - guess <= 25 && this.state.answer - guess >= -25) {
                this.setState({ feedback: "COLD!" })
            }
            else if (this.state.answer - guess <= 30 && this.state.answer - guess >= -30) {
                this.setState({ feedback: "FREEZING!" })
            }
            else if (this.state.answer - guess <= 35 && this.state.answer - guess >= -35) {
                this.setState({ feedback: "YOU'RE FROZEN!" })
            }
            else { this.setState({ feedback: "Just give up. You're terrible." }) }
        }
    }

    recordGuess(guess) {
        this.setState({
            guess: guess
        })
    }


    render() {
        if (this.state.view === 'info') {
            return (
                <div>
                    <InfoModal onClick={(view) => this.setView(view)} />
                </div>
            )
        }


        return (
            <div>
                <Header onClick={(view) => this.setView(view)} onClick2={(game) => this.resetGame(game)} />
                <GuessSection onSubmit={() => this.storeGuess(this.state.guess)}
                    recordGuess={(guess) => this.recordGuess(guess)}
                    guess={this.state.guess}
                    feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

