import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '@/assets/styles/index';
import { useSelector, useDispatch } from 'react-redux';
import { setPickerStore } from '@/store/profileSlice';
import { fetchEvents, setStore, fetchNextEvents } from '@/store/eventSlice';
import { fetchServices } from '@/store/servicesSlice';
import { fetchKPIs } from '@/store/kpiSlice';

export default function DropPicker() {
  const stores = useSelector((state) => state.profile.stores);
  const pickerStore = useSelector((state) => state.profile.pickerStore);
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
    setLoading(true);
    if (loading) {
      dispatch(fetchKPIs(pickerStore));
      dispatch(fetchServices(pickerStore));
      dispatch(fetchEvents(pickerStore));
      dispatch(setStore(pickerStore));
      dispatch(fetchNextEvents([pickerStore, 1]));
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickerStore, dispatch]);

  useEffect(() => {
    if (value) {
      dispatch(setPickerStore(value));
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
