import React, { useContext } from 'react';
import ConfigContext from '../context/Config';

function Card({ title, description, img }) {

  const { components: { card }} = useContext(ConfigContext);
  const { showHeader, showImage, showFooter } = card;
  
  return (
    <div className="card-container">
      {
        showHeader && (
          <div className="card-header">
            <h4 className="card-title">
              {title}
            </h4>
          </div>
        )
      }
      {
        showImage && (
          <img className={!showHeader ? "card-image-rd" : "card-image"} src={img} alt="Card Img" height="240" width="320"/>
        )
      }
      {
        showFooter && (
          <div className="card-footer">
            <p className="card-description">
              {description}
            </p>
          </div>
        )
      }
    </div>
  );
}

export default Card;