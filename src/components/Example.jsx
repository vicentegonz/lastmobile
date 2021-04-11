import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import I18n from 'i18n-js';

import { COLORS } from '@/utils/colors';

export default function Example({ message }) {
  function getMessage(unknownMessage) {
    if (unknownMessage === undefined) {
      return I18n.t('example.loading');
    }
    return unknownMessage;
  }

  return (
    <Container>
      <TitleText style={[{ textTransform: 'uppercase' }]}>
        {I18n.t('example.title')}
      </TitleText>
      <ExampleText>
        { getMessage(message) }
      </ExampleText>
    </Container>
  );
}

Example.propTypes = {
  message: PropTypes.string,
};

Example.defaultProps = {
  message: undefined,
};

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const TitleText = styled.Text`
  color: ${COLORS['main-text-color']};
`;

const ExampleText = styled.Text`
  color: ${COLORS['main-text-color']};
`;
