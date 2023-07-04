import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalCard: {
        alignItems: 'center',
        padding: 5,
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
    modalBtnContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    modalBtn: { 
        margin: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 15,
    },
});