import React, { useRef } from 'react';
import { Text } from 'react-native';
import { Container, Form, SignLink, SignLinkText } from './singUp-styles';

import Input from '~/components/Input';
import Submit from '~/components/Button';

export default function SingIn({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

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
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          style={{ marginTop: 30 }}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Submit onPress={handleSubmit}>Acessar</Submit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SingIn')}>
        <SignLinkText>Login</SignLinkText>
      </SignLink>
    </Container>
  );
}
