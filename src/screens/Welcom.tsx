import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

import Button from '../components/Button';

type Props = {
  navigation: any;
};

export default class Welcome extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../assets/imgs/welcome.jpg')}
        style={[t.flex1, t.bgBlack]}
        imageStyle={[t.flex1]}
      >
        <SafeAreaView style={[t.flex1, t.justifyEnd]}>
          <View style={[t.pY10, t.pX4, t.wFull]}>
            <Text style={[t.textWhite, t.text4xl, t.textCenter, t.mB2]}>
              Welcome!
            </Text>
            <Text style={[t.textWhite, t.textLg, t.textCenter, t.mB10]}>
              Chat with your friends
            </Text>
            <Text style={[t.textGray500, t.textBase, t.textCenter]}>
              Get started no social media required
            </Text>
            <View style={[t.mT12]}>
              <Button
                variant="primary"
                label="Create Account"
                onPress={() => navigate('SignUp')}
                style={[t.mB2]}
              />
              <Button
                variant="secondary"
                label="Login"
                onPress={() => navigate('Login')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
