import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { t } from 'react-native-tailwindcss';

import { styles } from '../styles';
import Button from '../components/Button';
import KeyboardDismiss from '../components/KeyboardDismiss';

type State = {
  name: string;
  email: string;
  password: string;
};

export default class SignUp extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <ImageBackground
        source={require('../../assets/imgs/welcome.png')}
        style={[t.flex1, t.bgBlack]}
        imageStyle={[t.flex1, t.opacity50]}
        blurRadius={5}
      >
        <KeyboardDismiss>
          <SafeAreaView style={[t.flex1, t.justifyCenter]}>
            <View style={[t.p4]}>
              <Text style={[t.textWhite, t.text4xl]}>Create Account</Text>
              <Text style={[t.textWhite, t.textLg]}>Start chatting!</Text>
            </View>
            <View style={[t.p4]}>
              <Text style={[t.textWhite, t.mB2]}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder={'Full name'}
                placeholderTextColor={'gray'}
                onChangeText={name => this.setState({ name })}
                value={name}
              />
            </View>
            <View style={[t.p4]}>
              <Text style={[t.textWhite, t.mB2]}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder={'Email address'}
                placeholderTextColor={'gray'}
                onChangeText={email => this.setState({ email })}
                value={email}
              />
            </View>
            <View style={[t.p4]}>
              <Text style={[t.textWhite, t.mB2]}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                placeholderTextColor={'gray'}
                onChangeText={password => this.setState({ password })}
                value={password}
              />
            </View>
            <View style={[t.p4]}>
              <Button
                variant={'primary'}
                label={'Create Account'}
                onPress={() => {}}
              />
            </View>
          </SafeAreaView>
        </KeyboardDismiss>
        <KeyboardAvoidingView behavior="padding" />
      </ImageBackground>
    );
  }
}
