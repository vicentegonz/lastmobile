import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import api from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { setValidSession } from '@/store/session';

import { fetchUser } from '@/store/profileSlice';
import { fetchEvents } from '@/store/eventSlice';
import { fetchStores } from '@/store/storeSlice';

export default function useGoogleAuthentication() {
  WebBrowser.maybeCompleteAuthSession();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.profile.stores);

  const [request, response, asyncPromptLogin] = Google.useIdTokenAuthRequest({
    expoClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID_EXPO,
    iosClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID_IOS,
    androidClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID_ANDROID,
  });

  const responseType = response ? response.type : null;

  if (responseType === 'success') {
    const idToken = response.params.id_token;
    api.account
      .authenticate(idToken)
      .then(() => {
        dispatch(setValidSession(true));
        dispatch(fetchUser());
        stores.map((id) => dispatch(fetchStores(id)));
        stores.map((id) => dispatch(fetchEvents(id)));
      })
      .catch(() => {
        dispatch(setValidSession(false));
      });
  }

  return {
    asyncPromptLogin,
    request,
  };
}
