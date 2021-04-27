import React, { useState, useEffect } from 'react';
import I18n from 'i18n-js';

import api from '@/api/index';
import ExampleComponent from '@/components/Example.jsx';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function Example() {
  const [example, setExample] = useState({});

  function fetchExample() {
    api.example
      .retrieve()
      .then(({ data }) => {
        setExample(data);
      })
      .catch(() => {
        setExample({ message: I18n.t('example.error') });
      });
  }

  useEffect(fetchExample, [example]);

  const { message } = example;

  return (
    <ScreenContainer>
      <ExampleComponent message={message} />
    </ScreenContainer>
  );
}
