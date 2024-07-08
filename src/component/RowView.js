import React from 'react'
import styled from 'styled-components'

export default function RowView({children}) {
  return (
    <RowStyle>
      {children}
    </RowStyle>
  )
}

const RowStyle = styled.div`
display: flex;
flex-direction: row;
`