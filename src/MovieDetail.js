import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Movies from './Movies';
        
        function  MovieDetail() {
          const {idMovie}= useParams()
          console.log(idMovie)
          
          return (
            <>
            {
              
              Movies.filter(movie => {
                if(idMovie.includes(movie.id.toString() )  ) return movie
            }).map(movie =>(
                <Card style={{ width: '18rem' } } >
                <Card.Img variant="top" src={movie.posterURL} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.description}
                  </Card.Text>
                <Card.Small>{movie.rating}</Card.Small>
                </Card.Body>
              </Card>
              ))
            
            }
            </>
          );
          
        }
        
        export default  MovieDetail;
