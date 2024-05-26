import styled from 'styled-components';

export const StyledButton = styled.button`
background-color: ${props => props.disabled ? '#283434' : 'white'};
border: none;
border-radius: 30px;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 25px;
margin: 4px 2px;
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

/* Стиль для состояния нажатия */
&:active {
  background-color: ${props => props.disabled ? '#26393c' : '#283434'};
}
`;