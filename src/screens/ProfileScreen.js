import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();
  return (
    // <View style={styles.container}>
    //   <Text style={{ color: colors.text, marginBottom: 20 }}>
    //     Tela de Perfil
    //   </Text>

    //   <Button
    //     title="Clique aqui"
    //     onPress={() => alert('Tela em construção!')}
    //   />

    <View style={styles.container}>
      <View style={styles.userName}>
        <Avatar.Text
          size={50}
          label="Iv"
          color="#fff"
          style={{ backgroundColor: '#FA6C30' }}
        />
        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
          <Title style={styles.title}>Ivanna</Title>
          <Caption style={styles.caption}>@ivannatech</Caption>
        </View>
      </View>

      <View style={styles.perfilOptions}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('SettingsScreen');
            }}
          >
            <MaterialCommunityIcons name="cog" size={23} color="#fff" />
            <Text> Configurações</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('SupportScreen');
            }}
          >
            <MaterialCommunityIcons
              name="account-check"
              size={23}
              color="#fff"
            />
            <Text> Suporte</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="account-lock"
              size={23}
              color="#fff"
            />
            <Text> Alterar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  userName: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#FA6C30',
    marginLeft: 20,
    borderRadius: 10,
    height: 50,
  },
  perfilOptions: {
    width: '100%',
    marginTop: 30,
    // alignContent: 'flex-start',

    // backgroundColor: '#154',
  },
});
