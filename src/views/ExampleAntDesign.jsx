import React from 'react';
import { Text } from 'react-native';
import {
  Button,
  WhiteSpace,
  WingBlank,
  Checkbox,
  SearchBar,
} from '@ant-design/react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function ExampleAntDesign() {
  return (
    <ScreenContainer>
      <WingBlank>
        <WhiteSpace />
        <Text>This an AntDesign Mini Demo</Text>
        <WhiteSpace />

        <WhiteSpace />
        <Button>Button</Button>

        <WhiteSpace />
        <Checkbox>Checkbox</Checkbox>
        <WhiteSpace />

        <SearchBar placeholder="Input Search" />

        <WhiteSpace />
      </WingBlank>
    </ScreenContainer>
  );
}
