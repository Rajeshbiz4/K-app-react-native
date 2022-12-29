import React, { useLayoutEffect ,useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image,AsyncStorage } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import axios from 'axios';

const _retrieveData = async () => {
  try {
    const userToken = await AsyncStorage.getItem("token");
    if (userToken !== null) {
      //console.warn(userToken);
    }
  } catch (error) {
    //console.error("error: "+error);
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



  const onPressMenusList = (item) => {
    navigation.navigate("MemberList", { item });
  };

  const renderMenusList = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressMenusList(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={item.photo_url} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={MenusList} renderItem={renderMenusList} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}

const MenusList = [
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Member List',
    photo_url: require('../../../assets/member.jpg'),
    time: '15',
    description:'',
    data:[
      {
        id:1,
        firstName:'Rajesh',
        lastName:'Pandhare',
        designation:'Sarpanch',
        period:'2022-2027',
        isActive:1,
        photo_url:require('../../../assets/member.jpg'),
      },
      {
        id:2,
        firstName:'Appasaheb',
        lastName:'Tawale',
        designation:'Up Sarpanch',
        period:'2022-2027',
        isActive:1,
        photo_url:require('../../../assets/member.jpg'),
      },
      {
        id:3,
        firstName:'Shankar',
        lastName:'Shendge',
        designation:'Sadasya',
        period:'2022-2027',
        isActive:1,
        photo_url:require('../../../assets/member.jpg'),
      },
      {
        id:4,
        firstName:'Abhay',
        lastName:'Jadhav',
        designation:'Sadasya',
        period:'2022-2027',
        isActive:1,
        photo_url:require('../../../assets/member.jpg'),
      },
      {
        id:4,
        firstName:'Datta',
        lastName:'Kolekar',
        designation:'Sadasya',
        period:'2022-2027',
        isActive:0,
        photo_url:require('../../../assets/member.jpg'),
      }
    ]
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Schemes',
    photo_url: require('../../../assets/scheme.png'),
    time: '15',
    description:'',
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Officer List',
    photo_url: require('../../../assets/officer.jpg'),
    time: '15',
    description:'',
  },
  {
    recipeId: 4,
    categoryId: 3,
    title: 'About Village',
    photo_url: require('../../../assets/logo.png'),
    time: '15',
    description:'',
  },
  {
    recipeId: 5,
    categoryId: 3,
    title: 'Announcement',
    photo_url: require('../../../assets/announcement.png'),
    time: '15',
    description:'',
  },
];
