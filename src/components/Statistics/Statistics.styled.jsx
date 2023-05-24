import styled from '@emotion/styled';
import { getRandomHexColor } from 'components/randomColor.js';

export const Section = styled.section`
  width: 300px;
  margin: 0 auto;
  padding-top: 50px;
  color: gray;
  font-size: 15px;
  text-align: center;
`;
export const List = styled.ul`
  padding: 0;
  display: flex;
`;
export const Element = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  justify-content: center;
  background-color: ${props => getRandomHexColor(props.index)};
`;
export const Title = styled.h2`
  margin-bottom: 20px;
`;
export const Text = styled.span`
  color: #f1e9e9;
`;
