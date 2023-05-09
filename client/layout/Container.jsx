import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ComponentWrapper = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ComponentWrapper;