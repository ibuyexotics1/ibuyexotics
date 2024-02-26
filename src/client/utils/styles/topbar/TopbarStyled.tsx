import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const TopbarLine = styled.div`
  height: 2px;
  width: 100px;
  background: rgb(250, 250, 250, 0.2);
  margin: 15px 0px;
`;

export const TopbarTitle = styled.p`
  font-size: 30px;
  color: rgb(255, 255, 255, 0.9);
  font-family: "DM Serif Display", serif;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;
