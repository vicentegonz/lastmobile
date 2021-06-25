import React from 'react';
import { Text, Image, StatusBar } from 'react-native';
import useGoogleAuthentication from '@/utils/useGoogleAuthentication';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import navStyles from '@/assets/styles/navigation';
import { Button } from '@ant-design/react-native';
import Logo from '@/assets/ArcoprimeLogo.png';

export default function Login() {
  const { asyncPromptLogin, request } = useGoogleAuthentication();

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Image source={Logo} style={navStyles.loginLogo} />
      <Button
        type="primary"
        disabled={!request}
        onPress={() => {
          asyncPromptLogin();
        }}
      >
        <Text>Iniciar sesión</Text>
      </Button>
    </ScreenContainer>
  );
}
