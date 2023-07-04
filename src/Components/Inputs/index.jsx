import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

const Inputs = ({
    borderBottomColor,
    onHandlerFocus,
    onHandlerBlur,
    onHandlerChageTitle,
    title,
    onHandlerChageDesc,
    desc,
    saveTasks,
}) => {
    return (
        <View style={[styles.container]}>
          <TextInput
            placeholder='Title'
            style={[styles.input, { borderBottomColor }]}
            autoCapitalize='none'
            autoCorrect={false}
            onFocus={onHandlerFocus}
            onBlur={onHandlerBlur}
            onChangeText={onHandlerChageTitle}
            value={title}
          />
          <TextInput
            placeholder='Descrption'
            style={[styles.input, { borderBottomColor}]}
            autoCapitalize='none'
            autoCorrect={false}
            onFocus={onHandlerFocus}
            onBlur={onHandlerBlur}
            onChangeText={onHandlerChageDesc}
            value={desc}
          />
          <Button
            title="ADD"
            color='#76B041'
            onPress={saveTasks}
            disabled={title.length === 0 || desc.length === 0}
          />
        </View>
    );
}

export default Inputs;