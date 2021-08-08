import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

const SupportScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: colors.text, fontSize: 18 }}>
          Para suporte, dúvidas ou sugestões,
        </Text>
        <Text style={{ color: colors.text, fontSize: 18, marginBottom: 20 }}>
          entre em contato com a desenvolvedora:
        </Text>
      </View>

      {/* <View>
        <Button
          title="Clique aqui"
          onPress={() => alert('Tela em construção!')}
        />
      </View> */}

      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => {
            Linking.openURL('https://github.com/ivannatech');
          }}
        >
          <FontAwesome name="github-square" size={45} color="#1B1F23" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => {
            Linking.openURL('https://www.linkedin.com/in/ivanna-almeida/');
          }}
        >
          <FontAwesome name="linkedin-square" size={45} color="#0A66C2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => {
            Linking.openURL(
              'https://www.youtube.com/channel/UCdtr2zc7InkGnAmPF8MhZNw'
            );
          }}
        >
          <FontAwesome name="youtube-square" size={45} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});
