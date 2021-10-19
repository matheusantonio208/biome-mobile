import React, { useRef, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '#components/Input/index.js';

import { signUpRequest } from '#behaviors/auth-agregador/auth-actions.js';

import imageBackground from '../../../assets/img/taxi-signing-contract-1.png';
import {
  Container,
  Headline,
  TitlePage,
  Form,
  SignLink,
  HeadlineContainer,
  SignLinkText,
  Submit,
  TextButton,
} from './singUp-styles.js';

export default function SingUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <HeadlineContainer>
        <Image
          source={imageBackground}
          style={{
            height: 500,
            position: 'absolute',
            left: -250,
            top: -100,
            opacity: 0.8,
            resizeMode: 'center',
          }}
          blurRadius={30}
        />
        <Headline>
          Você está há um passo para a prosperidade financeira
        </Headline>
      </HeadlineContainer>

      <Form>
        <TitlePage>Crie sua conta agora</TitlePage>
        <Input
          style={{ marginTop: 30 }}
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <Input
          style={{ marginTop: 10 }}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={{ marginTop: 10, marginBottom: 30 }}
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <Submit onPress={handleSubmit}>
          <TextButton>CRIAR NOVA CONTA</TextButton>
        </Submit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SingIn')}>
        <SignLinkText>Ou fazer Login</SignLinkText>
      </SignLink>
    </Container>
  );
}
