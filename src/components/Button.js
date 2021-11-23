import React from 'react'
import Styledbutton from './styles/Button.styled'

const Button = (props) => {
    return (
        <Styledbutton 
            backgroundColor={props.backgroundColor}
            borderRadius={props.borderRadius}
            color={props.color}
            >
            {props.name}
        </Styledbutton>
    )
}

export default Button
