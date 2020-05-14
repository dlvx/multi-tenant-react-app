import React from 'react';
import Card from './Card';

const items = [
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

function HomePage({ items }) {
  
  return (
    <div>
      Welcome to the Home Page!
      <div className="cards-container">
        {
          items.map((item) => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
}

HomePage.defaultProps = {
  items
}

export default HomePage;
