import React from 'react';
import { View } from 'react-native';
import styled from "styled-components";

const Card = (props) => {

  return (
    <StyledView>
      {props.children}
    </StyledView>
  );
};

const StyledView = styled.View`
    border-width: 1px;
    border-radius: 2px;
    border-color: #ddd;
    border-bottom-width: 0px;
    box-shadow: 0 2px;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    elevation: 1;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
`;

export { Card };