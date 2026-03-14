import { View, Text, StyleSheet } from 'react-native';

function FavoritesScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Favorites Screen</Text>
        </View>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});