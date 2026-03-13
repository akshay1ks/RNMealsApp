import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4,
    },
    listOuterContainer: {
        alignItems: 'center',  
    },
});