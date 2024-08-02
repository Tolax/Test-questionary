import styled from 'styled-components';

export const StyledButton = styled.button`
background-color: ${props => props.disabled ? 'grey' : 'green'};
border: 3px solid black;
border-radius: 30px;
color: black;
padding: 0px 30px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 30px;
margin: 4px 2px;
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
&:active {
  background-color: ${props => props.disabled ? '#26393c' : '#283434'};
}
`;