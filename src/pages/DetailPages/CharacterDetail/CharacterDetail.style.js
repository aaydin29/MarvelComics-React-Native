import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  character_container: {
    backgroundColor: colors.darkgray,
    marginBottom: 10,
  },
  character_image: {
    width: deviceSize.width / 1,
    height: 300,
  },
  character_name: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  character_description: {
    margin: 10,
    marginTop: 5,
    textAlign: 'center',
    flex: 1,
    color: 'white',
  },
  icon: {
    textAlign: 'center',
    color: colors.red,
    marginBottom: 10,
  },
  comics_container: {},
  series_container: {},
  titles: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.darkgray,
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginHorizontal: 100,
  },
});
