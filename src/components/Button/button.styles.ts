import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonClick = styled(motion.button)` 
  margin: 20px 10px;
  height: 1.8rem;
  border: none;
  background: ${props => props.draggable ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,199,18,1) 0%, rgba(255,255,6,1) 100%)' :  '#fff'};
  color: ${props => props.theme.fontColor};
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.border};
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
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};

  :active {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,199,18,1) 0%, rgba(255,255,6,1) 100%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`

export const ButtonToggler = styled(ButtonClick) `
  margin: 0;
  margin-left: 70%;
  position: absolute;
  border: none;
  top: 1%;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.0001);

  @media (max-width: 768px) {
    top: 0.43%;
    margin-left: 85%;
  }
`