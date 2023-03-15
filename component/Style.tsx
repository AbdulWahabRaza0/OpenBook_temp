import styled from "styled-components";

interface flexProp {
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
}
export const WrapperFlex = styled.div<flexProp>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
`;
export const WrapeMargin = styled.div<flexProp>`
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;
interface StyleWrapperProps {
  width?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
}
export const StyleWrapper = styled.div<StyleWrapperProps>`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border: ${(props) => (props.border ? props.border : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
export const Wrapper = styled.div`
  height: 100vh;
  background: #0f0f10;
`;
