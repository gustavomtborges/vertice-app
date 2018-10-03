import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: metrics.basePadding * 5,
    backgroundColor: colors.light,
  },
  logo: {
    height: 250,
    width: 250,
  },
});

export default styles;
