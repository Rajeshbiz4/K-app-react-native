import React from "react";
import { StyleSheet,Text,View ,FlatList,Image} from "react-native";  
import { RecipeCard } from '../../AppStyles';

const renderMemberList = ({ item }) => (
    <View style={RecipeCard.container}>
    <Image style={RecipeCard.photo} source={item.photo_url} />
    <Text style={RecipeCard.title}><Text style={{color:'red'}}>{item.designation}</Text></Text>
    <Text style={RecipeCard.title}>{item.firstName} {item.lastName}</Text>
  </View>
  );

export default function MemberListComponent(props){
    const { navigation, route } = props;
    const item = route.params?.item;

    return (
        <View>
            <Text style={{fontSize:20}}>{item.title}</Text>
            <View>
                <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={item.data} renderItem={renderMemberList} keyExtractor={(data) => `${data.firstName}`} />
            </View>
        </View>
    )
}