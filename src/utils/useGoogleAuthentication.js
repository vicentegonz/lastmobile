import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
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
  const [request, response, asyncPromptLogin] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.GOOGLE_CLIENT_ID,
    responseType: ResponseType.IdToken,
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
