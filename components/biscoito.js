import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



export default function BotaoComFrase() {
  const frasesAleatorias = [
    'A sorte está ao seu lado hoje!',
    'Grandes oportunidades aguardam por você.',
    'Acredite em si mesmo e tudo será possível.',
    'Seja gentil e o mundo será gentil com você.',
    'A felicidade está no caminho que você escolhe seguir.',
  ];

  const [frase, setFrase] = useState('');
  const [botaoAtivo, setBotaoAtivo] = useState(true);

  const exibirFraseAleatoria = () => {
    if (botaoAtivo) {
      const indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length);
      setFrase(frasesAleatorias[indiceAleatorio]);
      setBotaoAtivo(false);
    }
  };

  const reativarBotao = () => {
    setBotaoAtivo(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.frase}>{frase}</Text>
      <Button title="Quebrar Biscoito" onPress={exibirFraseAleatoria} disabled={!botaoAtivo} />
      <Button title="Reiniciar Biscoito" onPress={reativarBotao} disabled={botaoAtivo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frase: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
