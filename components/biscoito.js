import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function BiscoitoDaSorte() {
  const frasesAleatorias = [
    'A sorte está ao seu lado hoje!',
    'Grandes oportunidades aguardam por você.',
    'Acredite em si mesmo e tudo será possível.',
    'Seja gentil e o mundo será gentil com você.',
    'A felicidade está no caminho que você escolhe seguir.',
  ];

  const [frase, setFrase] = useState('');
  const [imagemBiscoito, setImagemBiscoito] = useState(require('../assets/biscoito_fechado.png'));

  const exibirFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length);
    setFrase(frasesAleatorias[indiceAleatorio]);
    setImagemBiscoito(require('../assets/biscoito_aberto.png'));
  };

  const reativarImagem = () => {
    setFrase('');
    setImagemBiscoito(require('../assets/biscoito_fechado.png'));
  };

  return (
    <View style={styles.container}>
      <Image source={imagemBiscoito} style={styles.imagemBiscoito} />
      <Text style={styles.frase}>{frase}</Text>
      <Button title="Quebrar Biscoito" onPress={exibirFraseAleatoria} disabled={frase !== ''} />
      <Button title="Reiniciar Biscoito" onPress={reativarImagem} disabled={frase === ''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemBiscoito: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  frase: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});