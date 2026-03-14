import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen
        name="AllCategories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          )
        }} />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          )
        }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
          <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{
              title: 'Categories',
              headerShown: false,
            }} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: 'Meal Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
