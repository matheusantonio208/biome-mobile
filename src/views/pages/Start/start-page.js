import React from 'react';
import {
  StatusBar,
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';

import image1 from '../../../assets/img/taxi-598.png';
import image2 from '../../../assets/img/taxi-884.png';
import image3 from '../../../assets/img/taxi-a-wish.png';
import image5 from '../../../assets/img/taxi-money-tree-1.png';
import {
  Container,
  ImageContainer,
  ImageItem,
  TextContainer,
  Title,
  TextBody,
  SingInButton,
  SingUpButton,
  TextButton,
  ButtonContainer,
} from './start-style.js';

const { width, height } = Dimensions.get('screen');

const data = [
  {
    image: image1,
    title: 'Você sabe, Tempo é Dinheiro',
    text: 'Organize sua grana em poucos minutos e não perca tempo. Tenha tudo sob controle no seu celular!',
  },
  {
    image: image2,
    title: 'Transforme suas finanças',
    text: 'O caminho está a sua frente. Você já deu seu primeiro passo rumo a transformação financeira e nós te guiaremos nessa jornada',
  },
  {
    image: image3,
    title: 'Poupe para seus sonhos',
    text: 'Diga-nos sua meta e nós lhe ajudaremos a manter seu progresso até alcança-la',
  },
  {
    image: image5,
    title: 'Planeja sua prosperidade ',
    text: 'O sol nasce para todos, mas a sombra é para quem planta. Nós lhe ajudaremos a plantar prosperidade e colher riquezas',
  },
];

const imageW = width;
const imageH = imageW * 1.54;

export default function StartPage({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject, { opacity: 0.6 }]}>
        {data.map((image, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={image.image}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageContainer width={width} height={height}>
            <ImageItem
              source={item.image}
              width={imageW}
              height={imageH}
              style={{ resizeMode: 'center' }}
            />
            <TextContainer width={width}>
              <Title>{item.title}</Title>
              <TextBody>{item.text}</TextBody>
            </TextContainer>
          </ImageContainer>
        )}
      />
      <ButtonContainer>
        <SingUpButton onPress={() => navigation.navigate('SignUp')}>
          <TextButton>Começar Agora</TextButton>
        </SingUpButton>

        <SingInButton
          onPress={() => navigation.navigate('SingIn')}
          width={width}
        >
          <TextButton>Login</TextButton>
        </SingInButton>
      </ButtonContainer>
    </Container>
  );
}
