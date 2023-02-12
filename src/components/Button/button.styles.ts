import styled from "styled-components";

export const ButtonClick = styled.button` 
  margin: 20px 10px;
  height: 1.8rem;
  border: none;
  background: ${props => props.draggable ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,199,18,1) 0%, rgba(255,255,6,1) 100%) ': 'white'};
  color: black;
  border-radius: 0.5rem;
  border: 2px solid #FFC914;
  font-weight: bold;
  cursor: pointer;
  width: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ButtonPages = styled(ButtonClick) `
  height: 50px;
  text-align: center;
  width: 30px;
  height: 30px;

  :active {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,199,18,1) 0%, rgba(255,255,6,1) 100%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`