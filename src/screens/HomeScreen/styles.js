import {StyleSheet} from 'react-native';
import {colors} from '../../global/styles';

export default StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor:colors.white
  },
  button: {
    height: 40,
    borderRadius: 20,
    // width: '75%',
  },
  heading: {
    fontSize: 22,
    backgroundColor: colors.grey5,
    padding: 10,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  mapButton:{
    alignItems:'center',
    backgroundColor:colors.white,
    position:'absolute',
    bottom:10,
    right:15,
    borderRadius:40,
    padding:12,
    paddingHorizontal:20
  }
});
