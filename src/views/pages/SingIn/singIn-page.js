import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Submit from '#components/Button/index.js';
import Input from '#components/Input/index.js';

import { signInRequest } from '#behaviors/auth-agregador/auth-actions.js';

import { Container, Form, SignLink, SignLinkText } from './singIn-styles.js';

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
      <Text>Olá! Que bom te-lo conosco novamente</Text>
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
