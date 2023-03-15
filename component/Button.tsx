import styled from 'styled-components';

interface Props {
  mt?: string;
  lh?: string;
  width?: string;
  color?: string;
  bg?: string;
  border?: string;
  height?: string;
  onClick?: any;
  borderRadius?: string;
  size?: string;
  padding?: string;
}
export const Button = styled.button<Props>`
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : '16px')};
  height: ${(props) => (props.height ? props.height : '58px')};
  color: ${(props) => (props.color ? props.color : '#0d0d0d')};
  width: ${(props) => (props.width ? props.width : '200px')};
  line-height: ${(props) => (props.lh ? props.lh : 'auto')};
  margin-top: ${(props) => (props.mt ? props.mt : '0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  // border-radius: 20px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '6px'};
  border: ${(props) => (props.border ? props.border : 'none')};
  background: ${(props) => (props.bg ? props.bg : '#DB5C4D')};
`;
