import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: StatusBar.currentHeight
  },
  input: {
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    width: '80%',
  },
})