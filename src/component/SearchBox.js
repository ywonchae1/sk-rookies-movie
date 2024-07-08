import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RowView from './RowView';
import List from './List';

const fetchData = async (query) => {
  const url = encodeURI(`https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=${query}`);
  const movies = await fetch(url);
  const result = await movies.json();
  return result;
}

export default function SearchBox() {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');

  const fetchMovie = async () => {
    const result = await fetchData(query);
    setMovies(result);
  }
  
  return (
    <Form>
      <label>Find Movie</label>
      <Form.Group className="mb-3">
      <RowView>
        <Form.Control
          type="text"
          placeholder="Enter Movie Title"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <Button
          variant="primary"
          type="button"
          style={{marginLeft: 10}}
          onClick={() => fetchMovie(query)}>
          Search
        </Button>
      </RowView>
      </Form.Group>
      <List items={movies} />
    </Form>
  )
}