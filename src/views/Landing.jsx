import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ant-design/react-native';
import CardContainer from '@/components/CardContainer.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

const eventIcon = <Icon name="alert" size="md" color="black" />;

export default function Landing() {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <CardContainer
        icon={eventIcon}
        title="Last Events"
        tag="event"
        navigation={navigation}
      />
    </ScreenContainer>
  );
}
