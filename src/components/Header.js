import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
    padding: 1rem;
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
`

const Header = (props) => {
    return (
        <HeaderStyle>
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
        </HeaderStyle>
    )
}

export default Header