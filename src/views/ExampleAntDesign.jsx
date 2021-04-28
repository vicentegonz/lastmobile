import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';

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
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
        <Button onPress={() => dispatch(increment())}>Increment store Value</Button>
        <WhiteSpace />

        <Text>
          My store value:
          {count}
        </Text>

        <WhiteSpace />
        <Button onPress={() => dispatch(decrement())}>Decrement store Value</Button>
        <WhiteSpace />
      </WingBlank>
    </ScreenContainer>
  );
}
