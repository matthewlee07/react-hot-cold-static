import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={(event)=>{props.onClick('info')}}className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={(event)=>{props.onClick2([])}} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

