import styled from "styled-components";

export const ButtonClick = styled.button` 
  margin: 10px 10px;
  height: 1.4rem;
  border: none;
  background-color: ${props => props.draggable ? '#FFC914' : 'white'};
  color: black;
  border-radius: 0.5rem;
  border: 2px solid #FFC914;
  font-weight: bold;
  cursor: pointer;
  width: 70px;
  /* padding-left: 20%; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`