import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

// import { useTheme } from '@react-navigation/native';

export default function CamScreen() {
  // const { colors } = useTheme();
  // const theme = useTheme();

  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      console.log(status);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text> Acesso negado! </Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert('Salvo com sucesso!');
      })
      .catch((error) => {
        console.log('err', error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, left: 20 }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 13, color: '#fff' }}>
              <FontAwesome name="retweet" size={24} color="#fff" /> Trocar
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <FontAwesome name="camera" size={23} color="#fff" />
      </TouchableOpacity>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
            }}
          >
            <Image
              style={{ width: '100%', height: 700, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => setOpen(false)}
              >
                <FontAwesome name="window-close" size={30} color="#ff0000" />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 10 }} onPress={savePicture}>
                <FontAwesome name="save" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA6C30',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
});
