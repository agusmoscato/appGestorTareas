import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

const Tasks = ({ onPressItem, item }) => (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.container2} key={item.id}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text style={styles.desc}>{item.descripcion}</Text>
        </View>
        <View>
          <Text style={styles.delete}>X</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

export default Tasks;