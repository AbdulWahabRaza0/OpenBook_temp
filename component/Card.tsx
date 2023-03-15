import styled from 'styled-components';

interface cardInterface {
  bg?: string;
  padding?: string;
  radius?: string;
}
export const Card = styled.div<cardInterface>`
  background: ${(props) => (props.bg ? props.bg : '#252627')};
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: ${(props) => (props.radius ? props.radius : '10px')};
  position: relative;
  // overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;
