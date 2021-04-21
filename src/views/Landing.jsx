import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import I18n from 'i18n-js';

import useGoogleAuthentication from '@/hooks/useGoogleAuthentication';

import { COLORS } from '@/utils/colors';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function Landing() {
  const {
    asyncPromptLogin, authentication, request,
  } = useGoogleAuthentication();

  useEffect(() => { // this runs after the DOM re-renders (initialization/updates)
    if (authentication && request) {
      /* eslint-disable no-console */

      // Show authentication object
      console.log('\nAUTHENTICATION');
      console.log(authentication);

      // Show request object
      console.log('\nREQUEST');
      console.log(request);

      /* eslint-enable no-console */
    }
  }, [authentication, request]);

  return (
    <ScreenContainer>
      <TitleText style={[{ textTransform: 'uppercase' }]}>
        {I18n.t('landing.message')}
      </TitleText>
      <Button
        disabled={!request}
        title="Google Login"
        onPress={() => {
          asyncPromptLogin();
        }}
      />
    </ScreenContainer>
  );
}

const TitleText = styled.Text`
  color: ${COLORS['main-text-color']};
`;
