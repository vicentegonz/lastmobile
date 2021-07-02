import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '@/assets/styles/index';
import { useSelector, useDispatch } from 'react-redux';
import { setStore, fetchNextEvents } from '@/store/eventSlice';

export default function DropPicker() {
  const stores = useSelector((state) => state.profile.stores);
  const pickerStore = useSelector((state) => state.event.store);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(pickerStore);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (stores) {
      const data = stores.map((val) => ({
        value: val,
        label: `Tienda ${val}`,
      }));
      setItems(data);
      setValue(pickerStore);
    }
  }, [stores, pickerStore]);

  useEffect(() => {
    if (loading) {
      dispatch(fetchNextEvents([pickerStore, 1]));
      setLoading(false);
    }
  }, [pickerStore, dispatch, loading]);

  useEffect(() => {
    if (value) {
      dispatch(setStore(value));
      setLoading(true);
    }
  }, [value, dispatch]);

  return (
    <DropDownPicker
      open={open}
      value={pickerStore}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.pickerStyle}
      dropDownContainerStyle={styles.pickerContainerStyle}
      textStyle={styles.pickerText}
    />
  );
}
