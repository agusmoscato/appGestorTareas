import {Modal, View, Text , Button} from 'react-native'
import { styles } from './styles'

const DeleteItem = ({isVisible, selectedTask, setIsVisible, onHandleDeleteTask }) => (
    <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you sure you want to delete:</Text>
            <View style={styles.modalCard}>
                <Text style={styles.title}>{selectedTask?.nombre}</Text>
                <Text style={styles.desc}>{selectedTask?.descripcion}</Text>
            </View>
            <View style={styles.modalBtnContainer}>
              <View style={styles.modalBtn}>
                <Button
                    title='Cancel'
                    color='#456990'
                    onPress={() => setIsVisible(false)}
                    />
              </View>
              <View style={styles.modalBtn}>
                <Button
                    title='Delete'
                    color='#EF767A'
                    onPress={() => onHandleDeleteTask(selectedTask?.id)}
                    />
              </View>
            </View>
        </View>
    </Modal>
)
export default DeleteItem;