import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Image
        source={require('../assets/logo-copy.png')}
        style={{ marginTop: -100, marginBottom: 50 }}
      ></Image>
      <Text style={{ color: colors.text }}>App em construção 🚧👩‍🔧</Text>
      <View style={styles.icons}>
        <View style={{ alignItems: 'center' }}>
          <Icon
            name="md-list-circle"
            color={'#FA6C30'}
            size={50}
            onPress={() => navigation.navigate('TasksScreen')}
          />
          <Text style={{ color: colors.text }}>Tarefas</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            name="newspaper"
            color={'#FA6C30'}
            size={50}
            onPress={() => navigation.navigate('NewsScreen')}
          />
          <Text style={{ color: colors.text }}>Notícias</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            name="md-lock-closed"
            color={'#FA6C30'}
            size={50}
            onPress={() => navigation.navigate('PasswordGeneratorScreen')}
          />
          <Text style={{ color: colors.text }}>Gerar Senha</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PomodoroTimerScreen')}
          >
            <Image
              style={{ height: 45, width: 45 }}
              source={require('../assets/tomato.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: colors.text }}>Pomodoro</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Icon
            name="md-scan"
            color={'#FA6C30'}
            size={50}
            onPress={() => navigation.navigate('CamScreen')}
          />
          <Text style={{ color: colors.text }}>Digitalizar Arquivos</Text>
        </View>
      </View>

      {/* <View>
        <Button
          title="Go to details screen"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View>
        <Button
          title="Go to task screen"
          onPress={() => navigation.navigate('TasksScreen')}
        />
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: '100%',
    height: '30%',
    padding: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: -20,
  },
});
