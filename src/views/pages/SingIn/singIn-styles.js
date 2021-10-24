import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behaviour: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  padding: 30px;
`;

export const Headline = styled.Text`
  padding-top: 100px;
  font-family: 'Roboto-Black';
  line-height: 40px;
  font-size: 30px;
  text-transform: uppercase;
  color: #5f236b;
`;

export const TitlePage = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 22px;
  text-transform: uppercase;
  color: #f4bb50;
`;
export const HeadlineContainer = styled.View`
  height: 350px;
`;
export const Form = styled.View`
  flex: 1;
  padding-bottom: 15px;
  border-bottom-width: 2px;
  border-color: #eee;
`;

export const Submit = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #5f236b;
  border-radius: 4px;
  margin-left: 10px;
  padding: 20px 10px;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const SignLinkText = styled.Text`
  color: #f4bb50;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;
