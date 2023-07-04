import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F2EFE9',
    borderRadius: 8,
    paddingTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 22.22,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 15,
  },
  delete:{
    marginRight: 10,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#EF767A',
    color:'white',
    borderRadius: 100,
  },
});