import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 10
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})