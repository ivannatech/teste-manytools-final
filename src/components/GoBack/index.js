import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//styles
import { ModalHeader, TitleLine } from './styles';

export default function GoBack() {
  const { navigate } = useNavigation();
  function handleRedirectHome() {
    navigate('Home');
  }

  return (
    <View>
      <ModalHeader>
        <TouchableOpacity onPress={handleRedirectHome}>
          <Ionicons
            style={{ marginRight: 15 }}
            name="arrow-back"
            size={25}
            color="white"
          />
        </TouchableOpacity>
        {/* <TitleLine>Voltar</TitleLine> */}
      </ModalHeader>
    </View>
  );
}
