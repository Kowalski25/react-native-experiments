import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

const App = () => {
  const isDark = useColorScheme() === 'dark';
  
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar  barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity 
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task  text={item} />
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder='Write a task'
          onChangeText={text => setTask(text)}
          value={task}
          clearButtonMode='while-editing'/>
        <TouchableOpacity 
          onPress={() => {
            if (task === '') {
              Alert.alert('Please enter a task')
            } else {
              handleAddTask()
            }
          }}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    padding: 15,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#FFFFFF',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {

  }
});

export default App;
