import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  width: 136px;
  height: 40px;
  color: black;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;  
  &:hover,
  &:focus {
    border-color: blue;
    color: blue;
  }
  &:active {
    background-color: gainsboro;
  }
  cursor: pointer;
`;

