import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ant-design/react-native';
import CardContainer from '@/components/CardContainer.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

const shopIcon = <Icon name="shop" size="md" color="black" />;

export default function Shops() {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <CardContainer
        icon={shopIcon}
        title="Shop 1"
        tag="shop"
        navigation={navigation}
      />
      <CardContainer
        icon={shopIcon}
        title="Shop 2"
        tag="shop"
        navigation={navigation}
      />
    </ScreenContainer>
  );
}
