import React from 'react';
import './desc.css';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio/audio';
import birdsData from '../../data/birds';

export default function Desc(props) {
  const { page, id, select } = props;
  const styleItem = {
    display: select ? 'flex' : 'none',
  };
  const styleInstruction = {
    display: select ? 'none' : 'block',
  };

  return (
    <div className="col-md-6">
      <div className="bird-details card">
        <p className="instruction" style={styleInstruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div className="card-body" style={styleItem}>
          <img
            className="bird-image"
            src={birdsData[page][id].image}
            alt={birdsData[page][id].name}
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[page][id].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[page][id].species}</span>
            </li>
            <li className="list-group-item audio">
              <AudioPlayer autoPlay={false} src={birdsData[page][id].audio} />
            </li>
          </ul>
        </div>
        <span className="bird-description" style={styleItem}>
          {birdsData[page][id].description}
        </span>
      </div>
    </div>
  );
}

Desc.propTypes = {
  page: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  select: PropTypes.bool.isRequired,
};
