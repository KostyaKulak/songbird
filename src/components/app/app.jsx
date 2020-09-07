import React from 'react';
import Header from '../header/header';
import Current from '../current/current';
import End from '../end/end';
import winAudio from '../../assets/audio/win.mp3';
import errorAudio from '../../assets/audio/error.mp3';
import Answers from '../answers/answers';
import Desc from '../desc/desc';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
      page: 0,
      id: 0,
      select: false,
      win: false,
      score: 0,
      step: 0,
      gameEnd: false,
    };
  }

  componentDidMount() {
    this.setState({
      random: this.randomBird(),
    });
  }

  randomBird = () => {
    return Math.floor(Math.random() * 6);
  };

  onBirdSelected = (id, event) => {
    event.persist();
    this.setState({
      id: id - 1,
      select: true,
    });
    if (!event.target.classList.contains('success') && !event.target.classList.contains('error')) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    }
    this.getWin(id);
    this.styleListItem(event);
  };

  styleListItem = (event) => {
    const { random, win } = this.state;
    if (event._targetInst.key - 1 === random && !win) {
      event.target.classList.add('success');
    } else if (event._targetInst.key - 1 !== random && !win) {
      event.target.classList.add('error');
    }
  };

  getWin = (id) => {
    const { random, win, step } = this.state;
    if (win) return;
    if (id - 1 !== random) {
      this.audioEffects(false);
    } else {
      this.setState((prevState) => ({
        score: prevState.score + 5 - step,
        win: true,
      }));
      this.audioEffects(true);
    }
  };

  audioEffects = (win) => {
    const winAudioEl = document.getElementById('winSound');
    const errorAudioEl = document.getElementById('errorSound');
    if (win) {
      winAudioEl.currentTime = 0;
      winAudioEl.play();
    } else {
      errorAudioEl.currentTime = 0;
      errorAudioEl.play();
    }
  };

  getNextPage = () => {
    const { page, win } = this.state;
    if (!win) return;
    if (page === 5) {
      this.setState({
        page: -1,
        gameEnd: true,
      });
    }
    this.setState((prevState) => ({
      random: this.randomBird(),
      page: prevState.page + 1,
      select: false,
      win: false,
      step: 0,
    }));
  };

  showGame = () => {
    this.setState({
      score: 0,
      gameEnd: false,
    });
  };

  render() {
    const { random, page, id, select, win, score, gameEnd } = this.state;
    if (gameEnd) {
      return (
        <>
          <Header page={page} score={score} />
          <End score={score} showGame={this.showGame} />
        </>
      );
    }
    return (
      <>
        <Header page={page} score={score} />
        <Current random={random} page={page} win={win} />
        <div className="row mb2">
          <Answers onItemSelected={this.onBirdSelected} page={page} />
          <Desc id={id} page={page} select={select} />
          <button type="button" className={win ? 'btn btn-next' : 'btn'} onClick={this.getNextPage}>
            Next Level
          </button>
        </div>
        <audio src={winAudio} id="winSound">
          <track default kind="captions" />
        </audio>
        <audio src={errorAudio} id="errorSound">
          <track default kind="captions" />
        </audio>
      </>
    );
  }
}
