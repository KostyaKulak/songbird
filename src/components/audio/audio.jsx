import H5AudioPlayer from 'react-h5-audio-player';
import React from 'react';
import PropTypes from 'prop-types';
import 'react-h5-audio-player/lib/styles.css';
import './audio.scss';

export default function AudioPlayer(props) {
  const { src } = props;
  return <H5AudioPlayer src={src} autoPlay={false} />;
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};
