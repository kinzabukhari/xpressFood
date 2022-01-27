import React, { useState } from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../global/styles';

const Categories = props => {
  const [indexCheck, setIndexCheck] = useState(0)
  return (
    <View style={styles.container}>
      
      <FlatList
        data={props.filterData}
        horizontal
        keyExtractor={(item)=>item.id}
        extraData={indexCheck}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
        contentContainerStyle={{paddingHorizontal:10}}
        renderItem={({item}) => {
          return (
            <Pressable onPress={()=>setIndexCheck(item.id)}>
              <View style={ indexCheck === item.id ? {...styles.cardContainer}:{...styles.cardContainer,backgroundColor:colors.grey5} }>
                <Image
                  source={item.image}
                  resizeMode={'contain'}
                  style={{borderRadius: 10,}}
                />
                <Text style={indexCheck === item.id ? {...styles.text,color:colors.white}:{...styles.text} }>{item.name}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  
  cardContainer: {
    backgroundColor: colors.primary,
    // padding:5,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden'
  },
  text:{
    fontWeight:'bold'
  }
});
export default Categories;
