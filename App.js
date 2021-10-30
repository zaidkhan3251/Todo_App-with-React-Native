import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import Onboarding from "./components/Onboarding";
import Task from "./components/Task";
export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };
  const handleAddtask = () => {
    Keyboard.dismiss()
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemCopy= [...taskItem]
    itemCopy.splice(index,1)
    setTaskItem(itemCopy)
  };
  return (
    <>
    {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
    {!showOnboard && <View style={styles.container}> 
      <StatusBar style="auto" />
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
          {/* todo list */}
          {taskItem.map((item, index) => {
            return (<TouchableOpacity key={index} onPress={()=>completeTask(index)}>
<Task  text={item} />
            </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writetaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddtask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>}
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CEA9E0",
    // backgroundColor: "#E8EAED",
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
  writetaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c8c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c8c0c0",
    borderTopWidth: 1,
  },
  addText: {
    fontSize: 24,
  },
});
