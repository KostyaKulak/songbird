import React from 'react';
import './end.scss';
import PropTypes from 'prop-types';
import winImage from '../../assets/images/win.jpg';

export default function End(props) {
  const { score, showGame } = props;
  const congratulations = (
    <>
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className="my-4" />
    </>
  );
  if (score === 30) {
    return (
      <div className="jumbotron game-over">
        {congratulations}
        <img className="img-win" src={winImage} alt="win" />
      </div>
    );
  }
  return (
    <div className="jumbotron game-over">
      {congratulations}
      <button type="button" className="btn btn-next btn-game-over" onClick={showGame}>
        Попробовать еще раз!
      </button>
    </div>
  );
}

End.propTypes = {
  score: PropTypes.number.isRequired,
  showGame: PropTypes.func.isRequired,
};
