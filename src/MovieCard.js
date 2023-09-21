import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard({ id , title, description, posterURL, rating }) {
  return (
   < Link to={`/detail/${id}`}>
      <Card style={{width:'300px'}}>
      
        <Card.Body>
        <Card.Img  style={{width:'100%', height:'300px'}} src={posterURL}  />
          <Card.Title>  titre {title}</Card.Title>
          <Card.Text>
          Description {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating: {rating}</small>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default MovieCard;
