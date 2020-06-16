import React, { Component } from 'react';
const API_KEY = process.env.API_KEY

export default class TwoWords extends Component {

  state = {
    loadingFirstWord: true,
    loadingSecWord: true,
    wordOne: null,
    wordTwo: null,
  };


  async componentDidMount() {
    const firstWordUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=verb%2Cnoun&minCorpusCount=70000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=es8h82u4zompkf5qscrsarq0nfwr7qkscofpl8t20ohibukz7`
    const secondWordUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=70000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=7&api_key=es8h82u4zompkf5qscrsarq0nfwr7qkscofpl8t20ohibukz7`

    const firstWordRes = await fetch(firstWordUrl);
    const secWordRes = await fetch(secondWordUrl);
    const firstData = await firstWordRes.json();
    const secondData = await secWordRes.json();
    this.setState({wordOne: firstData.word, loadingFirstWord: false})
    this.setState({wordTwo: secondData.word, loadingSecWord: false})
  }

  render() {
    return (
    <div className="two-words-container">
       {this.state.loadingFirstWord || this.state.loadingSecWord || !this.state.wordOne || !this.state.wordTwo ? (
         <div>Loading Two Words</div>
       ) : (
        <div>
          <div>{this.state.wordOne}</div>
          <div>{this.state.wordTwo}</div>
        </div>
       )}
    </div>
    );
  }
}