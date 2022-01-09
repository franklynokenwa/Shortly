import React from 'react'
import StyledDetailsSection from './styles/ShortlyDetails.styled'
import ShortlyDetailsItems from './ShortlyDetailsItems'
import brandRecognitionIcon from '../images/icon-brand-recognition.svg'
import detailsRecordsLogo from '../images/icon-detailed-records.svg'
import fullyCustomizableLogo from '../images/icon-fully-customizable.svg'
import StyledContainer from './styles/Container.styled'
import DetailsContainer2 from './styles/DetailsContainer2.styled'
import DetailsContainer3 from './styles/DetailsContainer3.styled'
import ShortenedLink from './ShortenedLink'

const ShortlyDetails = () => {
    return (
        <StyledDetailsSection>
            <section>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </section>
            <hr/>

            <StyledContainer>
                <ShortlyDetailsItems 
                header="Brand Recognition"
                details="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." 
                alt="Brand recognition logo"
                icon={brandRecognitionIcon}
                />
                
                <DetailsContainer2>
                    <ShortlyDetailsItems 
                    header="Detailed Records"
                    details="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." 
                    alt="Details records logo"
                    icon={detailsRecordsLogo}
                    />
                </DetailsContainer2>
                
                <DetailsContainer3>
                    <ShortlyDetailsItems 
                    header="Fully Customizable"
                    details="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." 
                    alt="Fully customizable logo"
                    icon={fullyCustomizableLogo}
                    />
                </DetailsContainer3>
            </StyledContainer>
            
        </StyledDetailsSection>
    )
}

export default ShortlyDetails
