import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { robots } = props;
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        key={i}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
