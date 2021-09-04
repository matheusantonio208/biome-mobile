import React, { Component } from 'react';
import { Keyboard, Text } from 'react-native';
import BiomeAPI from '~/services/biomeApi';
import { Container, Form, Input, Submit, SubmitText } from './wallet-styles';

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '',
      coin: '',
    };
  }

  handleSingIn = async () => {
    try {
      const { name, value, coin } = this.state;

      const walletCreated = await BiomeAPI.post(`/finance/wallet`, {
        name,
        value,
        coin,
      });

      console.tron.log(walletCreated);
      Keyboard.dismiss();
    } catch (error) {
      console.tron.log('Dont Create');
      Keyboard.dismiss();
    }
  };

  render() {
    const { name, value, coin } = this.state;

    return (
      <Container>
        <Text>Wallet Create</Text>
        <Form>
          <Input
            placeholder="name"
            onChangeText={(text) => this.setState({ name: text })}
          />

          <Input
            placeholder="value"
            onChangeText={(number) => this.setState({ value: number })}
            returnKeyType="send"
            onSubmitEditing={this.handleSingIn}
          />
          <Input
            placeholder="coin"
            onChangeText={(text) => this.setState({ coin: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleSingIn}
          />

          <Submit onPress={this.handleSingIn}>
            <SubmitText>Create</SubmitText>
          </Submit>
        </Form>
      </Container>
    );
  }
}
