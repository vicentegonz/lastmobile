import React from 'react';
import secureStore from '@/utils/secureStore';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/userSlice';
import { Button } from '@ant-design/react-native';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handler = async () => {
    await secureStore.delete('accessToken');
    await secureStore.delete('refreshToken');
    dispatch(logout());
  };
  return (
    <Button type="primary" onPress={handler}>
      Log out
    </Button>
  );
}
