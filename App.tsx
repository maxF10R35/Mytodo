import React, {useState} from 'react';
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
Dimensions,
FlatList,
} from 'react-native';
import styles from './Styles';
import RenderItem from './RenderItem';


export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
  
  const [text, setText] = useState('');

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const tmp = [...tasks];
    const newTask: Task = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText('');
  }

  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    tmp[index] = todo;
    setTasks(tmp);
  };
  
  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AdultCare</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Enter your text here..." 
        value={text}
        onChangeText={(t: string) => setText(t)}  
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={tasks}
          renderItem={
            ({ item }) => <RenderItem 
            item={item} 
            markDone={markDone} 
            deleteFunction={deleteFunction} />}
        />
      </View>
    </View>
  );
}