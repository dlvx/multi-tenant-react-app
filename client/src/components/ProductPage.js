import React from 'react';
import Card from './Card';

const items = [
  {
    id: 'card0',
    title: 'Featured Product',
    description: 'Interesting description',
    img: "https://loremflickr.com/320/240/food?random=0",
    featured: true
  },
  {
    id: 'card1',
    title: 'First Card',
    description: 'Some boring description',
    img: "https://loremflickr.com/320/240/food?random=1"
  },
  {
    id: 'card2',
    title: 'Second Card',
    description: 'Some boring description',
    img: "https://loremflickr.com/320/240/food?random=2"
  },
  {
    id: 'card3',
    title: 'Third Card',
    description: 'Some boring description',
    img: "https://loremflickr.com/320/240/food?random=3"
  }
]

function ProductPage({ items }) {

  const featuredProduct = items.find((item) => item.featured === true);
  const relatedItems = items.filter((item) => !item.featured)
  
  return (
    <div>
      Welcome to the Product Page!
      <div className="featured-product">
        <div>
          <img className="featured-img" src={featuredProduct.img} alt="Featured Img" height="240" width="320"/>
        </div>
        <div className="featured-content">
          <h2>{featuredProduct.title}</h2>
          <p>{featuredProduct.description}</p>
        </div>
      </div>
      <div className="cards-container">
        {
          relatedItems.map((item) => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
}

ProductPage.defaultProps = {
  items
}

export default ProductPage;