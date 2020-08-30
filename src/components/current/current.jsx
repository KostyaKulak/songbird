import React from 'react';
import './current.scss';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio/audio';
import birdsData from '../../data/birds';
import winAudio from '../../assets/audio/win.mp3';

export default function Current(props) {
  const { page, random, win } = props;

  return (
    <div className="random-bird jumbotron rounded">
      <img
        className="bird-image"
        src={
          win
            ? birdsData[page][random].image
            : 'https://icons.iconarchive.com/icons/martin-berube/flat-animal/256/bird-icon.png'
        }
        alt={win ? birdsData[page][random].name : 'bird'}
      />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{win ? birdsData[page][random].name : '******'}</h3>
          </li>
          <li className="list-group-item audio">
            <AudioPlayer src={win ? winAudio : birdsData[page][random].audio} />
          </li>
        </ul>
      </div>
    </div>
  );
}

Current.propTypes = {
  page: PropTypes.number.isRequired,
  random: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
};
