import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  height: max-content;
  padding: 50px 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: 200px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center; 
  grid-gap: 10px;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const AboutTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: gold;
  padding: 40px 20px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`

export const AboutTitle = styled.h2`
  font-family: Six Caps;
  font-size: 100px;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media (max-width: 1024px) {
    font-size: 50px;
    letter-spacing: 3px;
  }
`

export const AboutSubTitle = styled.p`
  font-size: 15px;
  color: rgb(0, 0, 0, 0.5);
  font-weight: 400;
  text-transform: uppercase;
`

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgb(0, 0, 0, 0.1);
  padding: 40px 20px;
`

export const AboutText = styled.p`
  font-size: 20px;
  color: rgb(255, 255, 255,0.5);
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`