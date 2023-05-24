import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: #f5f0f0;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
export const Photo = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #383e5f;
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: #8b8b8b;
`;
export const List = styled.ul`
  display: flex;
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  margin-right: auto;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;
export const Label = styled.span`
  color: #8b8b8b;
  margin-bottom: 10px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  color: #383e5f;
`;
