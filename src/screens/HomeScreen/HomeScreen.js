import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AppButton, HomeHeader, Screen} from '../../components';
import TopView from './components/TopView';
import styles from './styles';
import {filterData} from '../../global/mockData/filterData';
import Categories from './components/Categories';
import {restaurantsData} from '../../global/mockData/restaurantsData';
import FoodCard from '../../components/FoodCard';
import {Icon} from 'react-native-elements';
import {colors} from '../../global/styles';

const ScreenWidth = Dimensions.get('window').width;
const HomeScreen = (props) => {
  const [delivery, setDelivery] = useState(true);
  const RenderTopButtons = () => {
    return (
      <>
        <View style={styles.topView}>
          <AppButton
            color="black"
            title="Delivery"
            buttonStyle={{
              ...styles.button,
              backgroundColor: delivery ?colors.primary: colors.grey5 ,
            }}
            onPress={()=>setDelivery(true)}
          />
          <AppButton
            color="black"
            buttonStyle={{
              ...styles.button,
              backgroundColor: delivery ? colors.grey5 : colors.primary,
            }}
            title="Pick-Up"
            onPress={()=>{setDelivery(false);props.navigation.navigate("MapScreen")}}
          />
        </View>
      </>
    );
  };
  return (
    <Screen>
      <HomeHeader headingText="XpressFood" navigation={props.navigation} />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        {RenderTopButtons()}
        <TopView />
        <Text style={styles.heading}>Categories</Text>
        <Categories filterData={filterData} />
        <Text style={styles.heading}>Free Delivery Now</Text>
        <View style={{}}>
          <FlatList
            data={restaurantsData}
            horizontal
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            renderItem={({item}) => (
              <FoodCard item={item} screenWidth={ScreenWidth * 0.8} />
            )}
          />
        </View>
        <View>
          <Text style={styles.heading}>Promotions Available</Text>
          <FlatList
            data={restaurantsData}
            horizontal
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            renderItem={({item}) => (
              <FoodCard item={item} screenWidth={ScreenWidth * 0.8} />
            )}
          />
        </View>
        <View>
          <Text style={styles.heading}>Restaurants in your area</Text>
          <FlatList
            data={restaurantsData}
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
            renderItem={({item}) => (
              <FoodCard item={item} screenWidth={ScreenWidth * 0.95} />
            )}
          />
          {/* {restaurantsData.map(item => (
            <View
              key={item.id}
              style={{alignItems: 'center', marginBottom: 20}}>
              <FoodCard item={item} screenWidth={ScreenWidth * 0.95} />
            </View>
          ))} */}
        </View>
      </ScrollView>
      {delivery?
      <View style={styles.mapButton}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("MapScreen")}>
          <Icon
            name="map-marker"
            type="material-community"
            color={colors.primary}
            size={30}
          />
          <Text style={{color: colors.grey2}}>Map</Text>
        </TouchableOpacity>
      </View>
      :null}
    </Screen>
  );
};

export default HomeScreen;
