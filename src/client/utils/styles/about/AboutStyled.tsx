import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 50px 20px;
  width: 100%;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center; 
  grid-gap: 10px;
  max-width: 1200px;
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
`

export const AboutTitle = styled.h2`
  font-family: Six Caps;
  font-size: 100px;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 5px;
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
`