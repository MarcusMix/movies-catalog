import styled from 'styled-components';

export const SectionMovie = styled.div`
  display: flex;
  font-size: 50px;
  background: red;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const SectionMovieItem = styled.div`
  display: flex;
  font-size: 50px;
  background: blue;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 600px;
    height: 500px;
    font-size: 20px;
    background: green;
    flex-wrap: wrap;
  }
`;
