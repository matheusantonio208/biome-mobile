import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View.attrs((props) => ({
  width: props.width,
  height: props.height,
}))`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const ImageItem = styled.Image.attrs((props) => ({
  width: props.width,
  height: props.height,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 2}px;
`;

export const TextContainer = styled.View.attrs((props) => ({
  width: props.width,
}))`
  width: ${(props) => props.width}px;
  padding: 25px 30px 90px 30px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Title = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 30px;
  text-transform: uppercase;
  color: #5f236b;
`;

export const TextBody = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  padding-top: 20px;
  color: #4d4c5c;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SingUpButton = styled.TouchableOpacity`
  background-color: #5f236b;
  width: 180px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 40px;
  margin-right: 10px;
`;

export const SingInButton = styled.TouchableOpacity`
  background-color: #f4bb50;
  width: 180px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 40px;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;
