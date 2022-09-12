import {
  StyleSheet,
} from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: colors.mainColor,
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.mainColor, flex: 1, justifyContent: 'center', alignItems: 'center',
    // '#363636'
  },
  description: {
    // fontFamily: fontsText.fontFamily,
    fontSize: 40,
    paddingVertical: 20,
    color: colors.buttonColor,
    fontWeight: '700',
    fontStyle: 'italic',

  },
  aboutImg: {
    marginVertical: 70,
    borderRadius: 10,
    resizeMode: 'cover',
    width: 310,
    height: 300,
  },
  aboutTextLink: {
    fontSize: 18,
    color: '#24A0ED',
    textDecorationLine: 'underline',
  },
  aboutText: {
    alignItems: 'center',
    fontSize: 18,
    width: 310,
    color: 'white',
  },
  cardButton: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 10,
    marginVertical: 10,
    width: 300,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    color: 'white',
    marginVertical: 20,
    fontSize: 16,
    width: 350,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    // fontFamily: fontsText.fontFamily,
  },
});

export default styles;
