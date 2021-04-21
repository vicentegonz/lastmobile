import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

export default function useGoogleAuthentication() {
  WebBrowser.maybeCompleteAuthSession();

  const [authentication, setAuthentication] = useState(null);

  const [request, response, asyncPromptLogin] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    const responseType = response ? response.type : null;
    if (responseType === 'success') {
      setAuthentication(response.authentication);
    }
  }, [response]);

  return {
    asyncPromptLogin, authentication, request,
  };
}
