import React from 'react';
import {
  Text, Image, StatusBar, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useGoogleAuthentication from '@/utils/useGoogleAuthentication';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import navStyles from '@/assets/styles/navigation';
import { Button } from '@ant-design/react-native';
import { setLoginValue } from '@/store/session';
import Logo from '@/assets/ArcoprimeLogo.png';
import alertMessages from '@/utils/alerts';

export default function Login() {
  const { asyncPromptLogin, request } = useGoogleAuthentication();
  const dispatch = useDispatch();
  const loginValue = useSelector((state) => state.session.loginValue);

  const showAlert = async () => {
    await dispatch(setLoginValue(''));
    const alert = alertMessages.notFound;

    Alert.alert(
      alert.title,
      alert.message,
      [
        {
          text: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

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
      {loginValue === 'notFound' ? showAlert() : null}
    </ScreenContainer>
  );
}
