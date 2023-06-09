import styled from 'styled-components';

const H1 = styled.h1<Props>`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  margin-bottom: 0px;
`;
const H2 = styled.h2``;
const H3 = styled.h3``;
interface Props {
  color?: string;
  fontSize?: string;
  lHeight?: string;
  weight?: string;
  tt?: string;
}

const P = styled.p<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : '500')};
  line-height: ${(props) => (props.lHeight ? props.lHeight : '24px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  margin-bottom: 0px;
`;
export { H1, H2, H3, P };
