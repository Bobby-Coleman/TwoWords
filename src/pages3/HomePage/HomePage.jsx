import React, { Component } from 'react';
import Typical from 'react-typical'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class Home extends Component {

  render() {
    return <div className="home-container">
        <h1 className="home-welcome">
        Block 
        Writer's
        Block</h1>
        <p className="home-intro">Two Words dives headfirst into the absurd by presenting two entirely unrelated words,
            so that new connections may be formed, and new inventions born.
            Take a minute to look at each pairing of random words.
            Let your thoughts wander and write down whatever comes to mind, 
            and remember, don’t think too hard.
          </p>
          <p className="home-animation">
          Start writing ideas for the next best {' '}
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              "invention",
              1300,
              "art installation",
              1300,
              "song",
              1300,
              "fashion design",
              1300,
              "book idea",
              1300,
              "app", 
              1300,
              "game",
              1300,
            ]}
            />
          </p>
          <Link className="btn" to='/two-words'>GO</Link>
      </div>
  }
}