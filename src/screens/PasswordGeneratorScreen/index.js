import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import GoBack from '../../components/GoBack';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const { colors } = useTheme();

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }

  const { navigate } = useNavigation();
  function handleRedirectHome() {
    navigate('Home');
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#fa6c30', paddingLeft: 70 }}>
        <GoBack />
      </View>

      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View>
          {/* <TouchableOpacity onPress={handleRedirectHome}>
            <Ionicons
              style={{ marginLeft: 15, marginRight: 15 }}
              name="arrow-back"
              size={35}
              color="#FA6C30"
            />
          </TouchableOpacity> */}
          <Text style={{ color: colors.text, fontSize: 24 }}>
            Gerar nova senha
          </Text>
        </View>
        <Image
          source={require('../../assets/logo-padlock.png')}
          style={styles.logo}
        />

        <Text style={{ color: colors.text, fontSize: 30, fontWeight: 'bold' }}>
          {size} Caracteres
        </Text>

        <View style={styles.area}>
          <Slider
            style={{ height: 50 }}
            minimumValue={5}
            maximumValue={15}
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#000"
            value={size}
            onValueChange={(valor) => setSize(valor.toFixed(0))}
          />
        </View>

        <TouchableOpacity style={styles.buttom} onPress={generatePass}>
          <Text style={styles.buttomText}>Gerar senha</Text>
        </TouchableOpacity>

        {password !== '' && (
          <View style={styles.area}>
            <Text style={styles.password} onLongPress={copyPass}>
              {' '}
              {password}{' '}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginRight: 60,
    // marginBottom: 20,
    // marginTop: -10,
    flexDirection: 'row',
  },
  tilteline: {
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: '#69a1ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#d0d0d0',
    width: '90%',
    borderRadius: 7,
  },
  buttom: {
    backgroundColor: '#FA6C30',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
