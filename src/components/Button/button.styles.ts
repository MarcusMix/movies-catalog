import styled from "styled-components";

export const ButtonClick = styled.button` 
  margin: 10px 10px;
  height: 1.8rem;
  border: none;
  background-color: ${props => props.draggable ? '#FFC914' : 'white'};
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

  :active {
    background-color: #FFC914;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`