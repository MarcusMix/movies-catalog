import styled from "styled-components";
import { motion } from 'framer-motion'

export const Movies = styled(motion.div)`
  margin: 0 20%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  font-size: 8px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    max-width: 250px; 
    margin: 0 auto;
    padding: 0;
    text-align: center;
    font-size: 10px;
  }
`