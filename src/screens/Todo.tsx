import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { t } from 'react-native-tailwindcss';
import { Linking, Notifications } from 'expo';
import { styles } from '../styles';
import Button from '../components/Button';

const ToDo = () => {
  const [notificationsPermission, setNotificationsPermission] = useState('');
  const [locationPermission, setLocationPermission] = useState('');

  useEffect(() => {
    getPermission();
    Notifications.addListener(({ data }) => {
      alert(data.message);
    });
  }, [notificationsPermission, locationPermission]);

  const getPermission = async (): Promise<void> => {
    const { permissions } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
      Permissions.LOCATION
    );
    setNotificationsPermission(permissions.notifications.status);
    setLocationPermission(
      permissions.location.status && permissions.location.ios.scope
    );
  };

  const askNotificationsPermission = async (): Promise<void> => {
    const { permissions } = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    setNotificationsPermission(permissions.notifications.status);
  };

  const askLocationPermission = async (): Promise<void> => {
    const { permissions } = await Permissions.askAsync(Permissions.LOCATION);
    setLocationPermission(permissions.location.status);
  };

  const sendLocalNotification = async (): Promise<void> => {
    await Notifications.presentLocalNotificationAsync({
      title: 'テストローカル通知',
      body: 'これはテスト用のローカル通知です',
      data: {
        message: 'テストローカル通知を受け取りました'
      },
      ios: {
        _displayInForeground: true
      }
    });
  };

  return (
    <View style={[t.flex1, t.justifyAround]}>
      <View style={[styles.container, t.p10]}>
        <Button
          label="SEND NOTIFICATION"
          onPress={sendLocalNotification}
          style={[t.mB5]}
        />
      </View>
      <View style={[styles.container, t.p10]}>
        <Button
          label={`NOTIFICATION_PERMISSION: ${notificationsPermission}`}
          onPress={askNotificationsPermission}
          style={[t.mB5]}
        />
        <Button
          label={`LOCATION_PERMISSION: ${locationPermission}`}
          onPress={askLocationPermission}
          style={[t.mB5]}
        />
        <Button
          label="OPEN_APP_SETTINGS"
          onPress={() => Linking.openURL('app-settings:')}
        />
      </View>
    </View>
  );
};

export default ToDo;
