import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import api from '@/api';

export default function useGoogleAuthentication(setLoggedIn) {
  WebBrowser.maybeCompleteAuthSession();

  const [request, response, asyncPromptLogin] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID,
    responseType: ResponseType.IdToken,
  });

  useEffect(() => {
    const responseType = response ? response.type : null;
    if (responseType === 'success') {
      const idToken = response.params.id_token;
      api.account
        .authenticate(idToken)
        .then(() => {
          setLoggedIn(true);
        })
        .catch();
    }
  }, [response, setLoggedIn]);

  return {
    asyncPromptLogin,
    request,
  };
}
