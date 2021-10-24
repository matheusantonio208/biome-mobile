import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '#components/Input/index.js';

import { signInRequest } from '#behaviors/auth-agregador/auth-actions.js';

import imageBackground from '../../../assets/img/taxi-signing-contract-1.png';
import {
  Container,
  HeadlineContainer,
  Headline,
  TitlePage,
  Form,
  SignLink,
  SignLinkText,
  Submit,
  TextButton,
} from './singIn-styles.js';

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
        <Headline>Olá! Que bom te-lo conosco novamente</Headline>
      </HeadlineContainer>
      <Form>
        <TitlePage>Acesse sua conta agora</TitlePage>
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
          <TextButton>ACESSAR AGORA</TextButton>
        </Submit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar sua Conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
