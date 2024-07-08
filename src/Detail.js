import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Body from './component/Body';
import { Alert, Image, Table } from 'react-bootstrap';

const fetchData = async (id) => {
  const url = encodeURI(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9d2bff12ed955c7f1f74b83187f188ae`);
  const videos = await fetch(url);
  const result = await videos.json();
  return result;
}

export default function Detail() {
  const location = useLocation();
  const element = location.state.data;

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`https://image.tmdb.org/t/p/w300/${element.poster_path}`);
  }, [element]);

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const result = await fetchData(element.id);
    setVideos(result.results);
  }

  useEffect(() => {
    fetchVideos();
  }, []);
  
  return (
    <Body>
      <Image
        src={url}
        rounded />
      <h1>
        {element.original_title}
      </h1>

      <Table striped bordered hover>
        <tbody>
        <tr>
          <td>Original title</td>
          <td>{element.original_title}</td>
        </tr>
        <tr>
          <td>Overview </td>
          <td>{element.overview}</td>
        </tr>
        {
          videos.map(video => {
            if(video.site == 'YouTube') {
              return (
                <tr>
                  <td>{video.name}</td>
                  <td>
                    <Link
                      to={`/youtube/${video.key}`}
                      state={{data: video}}
                    >
                      {video.site}
                    </Link>
                  </td>
                </tr>
              )
            }
          })
        }
        
        </tbody>
      </Table>
    </Body>
  )
}
