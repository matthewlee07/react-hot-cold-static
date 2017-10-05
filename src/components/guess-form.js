import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    console.log(props.onSubmit);
    // onSubmit={props.onSubmit} OR onSubmit={() => props.onSubmit()}
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (props.guess < 0 || props.guess > 100) {
                alert("Your guess must be between 0 and 100!")
            }
            else {
            props.onSubmit();
            }
        }}
            > 
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onChange={(event)=> {
                    props.recordGuess(event.target.value);
                    }
            }
                value={props.guess}
            />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
};

