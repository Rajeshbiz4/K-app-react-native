import React, { useLayoutEffect ,useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image,AsyncStorage } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import axios from 'axios';

const _retrieveData = async () => {
  try {
    const userToken = await AsyncStorage.getItem("token");
    //alert(userToken);
    if (userToken !== null) {
      console.warn(userToken);
    }
  } catch (error) {
    console.error("error: "+error);
  }
};

export default function HomeScreen(props) {
const { navigation } = props;
_retrieveData();
const username ='9503907131';
const password = 'FXite';
const apiBaseURL = "http://34.217.126.91:8000";
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);



  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
