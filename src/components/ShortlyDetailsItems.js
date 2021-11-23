import React from 'react'
import StyledDetailsItemSection from './styles/ShortlyDetailsItems.styled'

const ShortlyDetailsItems = (props) => {
    return (
        <StyledDetailsItemSection>
            <aside>
                <img src={props.icon} alt={props.alt}/>
            </aside>
            
            <div>
                <h1>{props.header}</h1>
                <p>{props.details}</p>
            </div>
        </StyledDetailsItemSection>
    )
}

export default ShortlyDetailsItems
