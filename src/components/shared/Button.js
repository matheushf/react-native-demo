import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Button = ({ onPress, children, teste }) => {
  const { buttonStyle, textStyle } = styles;

  console.log('button ', teste)

  return (
    <TouchableOpacity onPress={onPress}>
      <StyledButton>
        <TextButton>
          {children}
        </TextButton>
      </StyledButton>
    </TouchableOpacity>
  );
};

const StyledButton = styled(View) `
    flex: 1;
    align-self: 'stretch';
    background-color: '#fff';
    border-radius: 5;
    border-width: 1;
    border-color: '#007aff';
    margin-left: 5;
    margin-right: 5;
    height: 40;
`;

const TextButton = styled(Text) `
    align-self: 'center';
    color: '#007aff';
    font-size: 16;
    font-weight: '600';
    padding-top: 10;
    padding-bottom: 10;
`;

const styles = {
  textStyle: {

  },
  buttonStyle: {

  }
};

export { Button };