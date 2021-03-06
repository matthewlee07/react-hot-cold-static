import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    console.log(props.guess)
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onSubmit={props.onSubmit} guess={props.guess} recordGuess={props.recordGuess} />
        </section>
    );
}

