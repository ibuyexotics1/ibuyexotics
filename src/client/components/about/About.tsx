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
                    <AboutText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas doloremque deserunt id ad dolore, at exercitationem, aperiam ab ipsam assumenda sit. Nisi expedita adipisci sint illo rerum, quae nesciunt?</AboutText>
                </AboutContent>
            </AboutWrapper>
        </AboutContainer>
    )
}