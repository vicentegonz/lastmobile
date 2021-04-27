import React from 'react';
import styled from 'styled-components/native';
import I18n from 'i18n-js';

import { COLORS } from '@/utils/colors';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function Landing() {
  return (
    <ScreenContainer>
      <TitleText style={[{ textTransform: 'uppercase' }]}>
        {I18n.t('landing.message')}
      </TitleText>
    </ScreenContainer>
  );
}

const TitleText = styled.Text`
  color: ${COLORS['main-text-color']};
`;
