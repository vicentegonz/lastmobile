import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import useGoogleAuthentication from '@/hooks/useGoogleAuthentication';

import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

import { FontAwesome5 } from '@expo/vector-icons';

export default function Login({ setLoggedIn }) {
  const { asyncPromptLogin, request } = useGoogleAuthentication(setLoggedIn);

  return (
    <ScreenContainer>
      <Text>Log In</Text>

      <FontAwesome5.Button
        disabled={!request}
        name="google"
        onPress={() => {
          asyncPromptLogin();
        }}
      >
        <Text>Log In With Google</Text>
      </FontAwesome5.Button>
    </ScreenContainer>
  );
}
Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};
