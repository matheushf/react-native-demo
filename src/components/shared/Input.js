import React from 'react';
// import { View, TextInput, Text } from 'react-native';
import styled from "styled-components";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  return (

    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
    height: 40px;
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const StyledTextInput = styled.TextInput`
    color: #000;
    padding-right: 5;
    padding-left: 5;
    font-size: 18;
    line-height: 23;
    flex: 2;
`;

const StyledLabel = styled.Text`
    font-size: 18;
    padding-left: 20;
    flex: 1;
`;

/* const styles = {
  inputStyle: {
    
  },
  labelStyle: {
    
  },
  containerStyle: {

  }
}; */

export { Input };