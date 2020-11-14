import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContiner: {
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40,
    }
}) 