import React from 'react';
import { Text, Image, StatusBar } from 'react-native';
import useGoogleAuthentication from '@/utils/useGoogleAuthentication';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import { Button } from '@ant-design/react-native';

const Logo = require('@/assets/ArcoprimeLogo.png');

export default function Login() {
  const { asyncPromptLogin, request } = useGoogleAuthentication();
  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Image source={Logo} style={{ width: 300, height: 100 }} />
      <Button
        type="primary"
        disabled={!request}
        onPress={() => {
          asyncPromptLogin();
        }}
      >
        <Text>Log In With Google</Text>
      </Button>
    </ScreenContainer>
  );
}
