import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
  },
  series_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginHorizontal: 15,
  },
  series_image: {
    width: 70,
    height: 95,
    marginRight: 10,
    borderRadius: 5,
  },
  series_title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
  },
});
