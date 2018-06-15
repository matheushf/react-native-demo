import React from 'react';
import styled from "styled-components";

const CardSection = (props) => {
  return (
    <StyledView>
      {props.children}
    </StyledView>
  );
};

const StyledView = styled.View`
    /* border-bottom-width: 1px; */
    padding: 5px;
    background-color: #fff;
    justify-content: center;    
    flex-direction: row;
    border-color: #dddd;
    position: relative;    
`;

export { CardSection };