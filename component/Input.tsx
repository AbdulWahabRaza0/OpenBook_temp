import styled, { css } from 'styled-components';

interface inputProps {
  borderRadius?: string;
  margin?: string;
  fright?: string;
  fleft?: string;
}
const Input = styled.input<inputProps>`
  height: ${(props) => (props.height ? props.height : '50px')};
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid grey;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '3px'};
  padding: 15px;
  margin: ${(props) => (props.margin ? props.margin : '10px')};
  color: white;
  margin-left: ${(props) => (props.fright ? 'auto' : 'initial')};
  margin-right: ${(props) => (props.fleft ? 'auto' : 'initial')};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Input;
