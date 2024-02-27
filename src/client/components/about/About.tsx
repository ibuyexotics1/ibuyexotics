import { AboutContainer, AboutContent, AboutSubTitle, AboutText, AboutTitle, AboutTitleWrapper, AboutWrapper } from "../../utils/styles/about/AboutStyled"

export const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <AboutTitleWrapper>
                    <AboutTitle>About Us</AboutTitle>
                    <AboutSubTitle>Learn about our service</AboutSubTitle>
                </AboutTitleWrapper>
                <AboutContent>
                    <AboutText>I Buy Exotics utilizes VIN decoding technology that we've developed to streamline the process of selling your car to a team of industry experts that you can trust. Just submit your exotic car information, receive an offer, and get paid! Visit the FAQ section if you have any questions.</AboutText>
                </AboutContent>
            </AboutWrapper>
        </AboutContainer>
    )
}