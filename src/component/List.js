import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function List({items}) {
  return (
    <ListGroup>
    {
      items != null &&
      items.results.map(element => {
        return (
          <ListGroup.Item key={element.id}>
            <Link
              to={`/detail/${element.id}`}
              state={{data: element}}
            >
            {element.original_title}
            </Link>
          </ListGroup.Item>
        )
      })
    }
    </ListGroup>
  )
}
