import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';

import { useTheme } from '@react-navigation/native';
import GoBack from '../../components/GoBack';

import {
  FlatList,
  Modal,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

//components
import TaskList from '../../components/TaskList';
import Header from '../../components/Header';

//styles
import {
  AddButton,
  AddTaskButtom,
  KeyboardView,
  ModalBody,
  ModalHeader,
  ModalInput,
  ModalTitle,
  Text,
  TitleLine,
} from './styles';

function TasksScreen() {
  const { colors } = useTheme();

  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // buscando todas as tarefas ao iniciar o app
  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');

      if (taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
  }, []);

  // salvando caso tenha alguma tarefa alterada
  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }
    saveTasks();
  }, [task]);

  function handleAdd() {
    if (input === '') return;

    const data = {
      key: input,
      task: input,
    };
    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  const { navigate } = useNavigation();
  function handleRedirectHome() {
    navigate('Home');
  }

  return (
    <KeyboardView>
      <StatusBar barStyle="dark-content" />

      <View>
        <View style={{ backgroundColor: '#fa6c30', paddingLeft: 70 }}>
          <GoBack />
        </View>
      </View>

      <TitleLine style={{ color: colors.text, fontSize: 24 }}>
        Minhas Tarefas
      </TitleLine>
      {/* <ModalHeader style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={handleRedirectHome}>
          <Ionicons
            style={{ marginLeft: 15, marginRight: 15 }}
            name="arrow-back"
            size={35}
            color="#FA6C30"
          />
        </TouchableOpacity>
        <TitleLine style={{ color: colors.text, fontSize: 24 }}>
          Minhas Tarefas
        </TitleLine>
      </ModalHeader> */}

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <ModalHeader>
          <TouchableOpacity onPress={() => setOpen(false)}>
            <Ionicons
              style={{ marginLeft: 15, marginRight: 15 }}
              name="arrow-back"
              size={35}
              color="#FA6C30"
            />
          </TouchableOpacity>
          <ModalTitle>Nova tarefa</ModalTitle>
        </ModalHeader>

        <Animatable.View useNativeDriver animation="fadeInUp">
          <ModalBody>
            <ModalInput
              multiline={true}
              autoCorrect={false}
              placeholder="O que preciso fazer hoje?"
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />
          </ModalBody>
          <AddTaskButtom onPress={handleAdd}>
            <Text>Adicionar</Text>
          </AddTaskButtom>
        </Animatable.View>
      </Modal>

      <AddButton
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="#fff" />
      </AddButton>
    </KeyboardView>
  );
}

export default TasksScreen;
