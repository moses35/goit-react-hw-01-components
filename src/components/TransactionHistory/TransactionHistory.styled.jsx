import styled from '@emotion/styled';

export const Table = styled.table`
  width: 750px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Table_th = styled.th`
  border: 1px solid black;
  background-color: aqua;
  color: white;
  height: 30px;
`;
export const Table_td = styled.td`
  border: 1px solid black;
  color: #5f5858;
  height: 30px;
`;
export const Table_tr = styled.tr`
  background-color: ${props => (props.index % 2 == 0 ? 'white' : '#f1eaea')};
`;
