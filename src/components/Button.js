import React from 'react'
import Styledbutton from './styles/Button.styled'

const Button = (props) => {
    return (
        <Styledbutton 
            backgroundColor={props.backgroundColor}
            borderRadius={props.borderRadius}
            color={props.color}
            type={props.type}
            >
            {props.name}
        </Styledbutton>
    )
}

export default Button
