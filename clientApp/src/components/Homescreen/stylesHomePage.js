import {
  StyleSheet,
} from 'react-native';
import { fontsText, colors } from '../../../constants';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.mainColor, flex: 1, justifyContent: 'center', alignItems: 'center',
    // '#363636'
  },
  description: {
    fontFamily: fontsText.fontFamily,
    fontSize: 40,
    paddingVertical: 20,
    color: colors.buttonColor,
    fontWeight: '700',
    fontStyle: 'italic',

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
    fontFamily: fontsText.fontFamily,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fontsText.fontFamily,
  },
});

export default styles;
