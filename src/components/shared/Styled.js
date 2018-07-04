import styled from "styled-components";
import { Header, Card, Button, Text, List, ListItem, Divider } from 'react-native-elements';
import Modal from 'react-native-modalbox';

export const ModalCenter = styled(Modal) `
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const TitleModal = styled(Text) `
  text-align: center;
  margin: 10px 0;
`;

export const DividerModal = styled(Divider) `
    height: 1;
    background-color: #dedede;
    margin: 5px 0;
    margin-left: -20px;
    left: 0;
    width: 200%;
`;