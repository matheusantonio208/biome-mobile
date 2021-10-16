import React, { useRef, useState } from 'react';
import { Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { signInRequest } from '../../behaviors/auth-agregador/auth-actions';

import { Container, Form, SignLink, SignLinkText } from './singIn-styles';

import Input from '~/components/Input';
import Submit from '~/components/Button';

export default function SingIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Text>SingIn</Text>
      <Form>
        <Input
          style={{ marginTop: 30 }}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <Submit onPress={handleSubmit}>Acessar</Submit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar sua Conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
