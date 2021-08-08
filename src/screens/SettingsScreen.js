import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';

const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Tela de Configurações</Text>
      <Button
        title="Clique aqui"
        onPress={() => alert('Tela em construção!')}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
