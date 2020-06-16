import React, { Component } from 'react';
const API_KEY = process.env.API_KEY

export default class TwoWords extends Component {

  state = {
    loading: true,
    wordOne: null,
  };


  async componentDidMount() {
    const firstWordUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=70000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=7&api_key=es8h82u4zompkf5qscrsarq0nfwr7qkscofpl8t20ohibukz7`
    const response = await fetch(firstWordUrl);
    const data = await response.json();
    this.setState({wordOne: data.word, loading: false})
  }

  render() {
    return (
    <div className="two-words-container">
       {this.state.loading || !this.state.wordOne ? (
         <div>loading...</div>
       ) : (
        <div>
          <div>{this.state.wordOne}</div>
        </div>
       )}
    </div>
    );
  }
}