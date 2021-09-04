import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import BiomeAPI from '~/services/biomeApi';
import { Container, Form, Input, Submit, SubmitText } from './singUp-styles';

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
    };
  }

  handleSingUp = async () => {
    const { userName, userEmail, userPassword } = this.state;

    await BiomeAPI.post(`/user/registration`, {
      name: userName,
      email: userEmail,
      password_hash: userPassword,
    });
    Keyboard.dismiss();
  };

  render() {
    const { userName, userEmail, userPassword } = this.state;

    return (
      <Container>
        <Form>
          <Input
            placeholder="Your Name"
            onChangeText={(text) => this.setState({ userName: text })}
          />
          <Input
            placeholder="your@email.com"
            onChangeText={(text) => this.setState({ userEmail: text })}
          />
          <Input
            placeholder="******"
            onChangeText={(text) => this.setState({ userPassword: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleSingUp}
          />
          <Submit onPress={this.handleSingUp}>
            <SubmitText>SingUp</SubmitText>
          </Submit>
        </Form>
      </Container>
    );
  }
}
