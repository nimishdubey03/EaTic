import React from 'react';
import { Card } from 'react-bootstrap';

import classes from './Recipe.module.css';

function Recipe({ hits }) {
  return (
    <Card className={classes.recipe} style={{ width: '18rem' }}>
      <a href={hits.url} target="_blank">
        <Card.Img src={hits.image} />
      </a>
      <Card.Body className={classes.card_body}>
        <p>{hits.label}</p>
        <i>
          <b>-By {hits.source}</b>
        </i>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
