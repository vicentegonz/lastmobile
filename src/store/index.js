import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import profileReducer from '@/store/profileSlice';
import storeReducer from '@/store/storeSlice';
import eventReducer from '@/store/eventSlice';
import kpiReducer from '@/store/kpiSlice';
import servicesReducer from '@/store/servicesSlice';
import sessionReducer from '@/store/session';

export default configureStore({
  reducer: {
    profile: profileReducer,
    store: storeReducer,
    event: eventReducer,
    session: sessionReducer,
    kpi: kpiReducer,
    services: servicesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
