import React, { useRef, useState } from 'react';
import { Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../behaviors/auth-agregador/auth-actions';

import { Container, Form, SignLink, SignLinkText } from './singUp-styles';

import Input from '~/components/Input';
import Submit from '~/components/Button';

export default function SingIn({ navigation }) {
  const dispatch = useDispatch();

  // const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <Text>SingUp</Text>
      <Form>
        <Input
          style={{ marginTop: 30 }}
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          // onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <Input
          style={{ marginTop: 30 }}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          // ref={emailRef}
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

      <SignLink onPress={() => navigation.navigate('SingIn')}>
        <SignLinkText>Login</SignLinkText>
      </SignLink>
    </Container>
  );
}
