import { useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native'; 
import { DeleteItem, Inputs, Tasks } from './Components';
import { styles } from './styles';

export default function App() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks, setTasks] = useState([])
  const [borderBottomColor, setborderBottomColor] = useState('#DAE7DA')
  const [selectedTask, setSelectedTask] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const onHandlerChageTitle = (text) => {
    setTitle(text)
  }
  const onHandlerChageDesc = (text) => {
    setDesc(text)
  }
  const saveTasks = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        nombre: title,
        descripcion: desc
      }
    ])
    setTitle('')
    setDesc('')
  }
  const renderItem = ({ item }) => <Tasks item={item} onPressItem={onHandlerModal} />;
  const onHandlerFocus = () => {
    setborderBottomColor('#9DBF9E')
  }
  const onHandlerBlur = () => {
    setborderBottomColor('#DAE7DA')
  }
  
  const onHandlerModal = (item) => {
    setIsVisible(true)
    setSelectedTask(item)
  }
  const onHandleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    setIsVisible(false)
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Inputs
        borderBottomColor={borderBottomColor}
        onHandlerFocus={onHandlerFocus}
        onHandlerBlur={onHandlerBlur}
        onHandlerChageTitle={onHandlerChageTitle}
        title={title}
        onHandlerChageDesc={onHandlerChageDesc}
        desc={desc}
        saveTasks={saveTasks}
        />
        <FlatList
          data={tasks}
          renderItem={renderItem}
          style={styles.listContainer}
          alwaysBounceVertically={false}
          keyExtractor={item => item.id}
        />
        <DeleteItem 
        isVisible= {isVisible}
        selectedTask= {selectedTask}
        setIsVisible={setIsVisible}
        onHandleDeleteTask={onHandleDeleteTask}
        />
      </View >
    </SafeAreaView>
  );
}

