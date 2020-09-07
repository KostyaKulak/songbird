import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  componentDidUpdate() {
    const { page } = this.props;
    const li = document.querySelectorAll('li');
    li.forEach((el, index) => {
      el.classList.remove('active');
      if (index === page) {
        el.classList.add('active');
      }
    });
  }

  render() {
    const categories = [
      'Разминка',
      'Воробьиные',
      'Лесные птицы',
      'Певчие птицы',
      'Хищные птицы',
      'Морские птицы',
    ];

    const { score } = this.props;

    return (
      <>
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo">
              <h1>Songbird</h1>
            </div>
            <h5>
              Score: <span className="score">{score}</span>
            </h5>
          </div>
          <ul className="pagination">
            {categories.map((category, index) => (
              <li key={category} className={`page-item ${index === 0 ? 'active' : ''}`}>
                <a className="page-link" href="/#">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  page: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
