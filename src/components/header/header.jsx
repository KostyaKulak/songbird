import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    return (
      <>
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo" />
            <h5>
              Score: <span className="score">0</span>
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
