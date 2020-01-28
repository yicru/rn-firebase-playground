import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { t } from 'react-native-tailwindcss';

import { styles } from '../styles';

const Map = () => (
  <View style={styles.container}>
    <MapView style={[t.wFull, t.hFull]} showsUserLocation />
  </View>
);

export default Map;
