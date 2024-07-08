import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import Body from './component/Body';
import { Button } from 'react-bootstrap';

export default function Youtube() {
  const location = useLocation();
  const element = location.state.data;

  console.log(element);

  const [url, setUrl] = useState('');

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <Body>
      <YouTube
        videoId={element.key}
        opts={opts}
      />
      <h1>{element.name}</h1>

      <a href='/'>
        <Button variant="primary">
          Home
        </Button>
      </a>
    </Body>
  )
}
