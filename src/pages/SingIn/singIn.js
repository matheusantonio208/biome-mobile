import React, { Component } from 'react';
import { Keyboard, Text } from 'react-native';
import BiomeAPI from '~/services/biomeApi';
import { Container, Form } from './singIn-styles';

import Input from '~/components/Input';
import Submit from '~/components/Button';

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  handleSingIn = async () => {
    try {
      const { userEmail, userPassword } = this.state;

      const userToken = await BiomeAPI.post(`/session/login`, {
        email: userEmail,
        password_hash: userPassword,
      });

      console.tron.log(userToken);
      Keyboard.dismiss();
    } catch (error) {
      console.tron.log('Dont Login');
      Keyboard.dismiss();
    }
  };

  render() {
    const { userEmail, userPassword } = this.state;

    return (
      <Container>
        <Text>SingIn</Text>
        <Form>
          <Input
            style={{ marginTop: 30 }}
            icon="call"
            placeholder="your@email.com"
            onChangeText={(text) => this.setState({ userEmail: text })}
          />
          <Input
            placeholder="******"
            onChangeText={(text) => this.setState({ userPassword: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleSingIn}
          />
          <Submit onPress={this.handleSingIn}>Login</Submit>
        </Form>
      </Container>
    );
  }
}
