import styled from '@emotion/styled';

export const Element = styled.li`
  padding: 0 20px;
  display: flex;
  gap: 20px;

  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Online = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
