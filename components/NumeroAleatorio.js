import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MeuBotao from './biscoito';

const RandomNumberGenerator = ({ min, max }) => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomValue);
  }, []);

  return (
    <View>
      <MeuBotao></MeuBotao>
      <Text style={{ fontSize: 20 }}>Número Aleatório: {randomNumber}</Text>
    </View>
  );
};

export default RandomNumberGenerator;
