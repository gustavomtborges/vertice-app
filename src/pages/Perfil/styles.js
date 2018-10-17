import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.basePadding * 2,
    backgroundColor: colors.white,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginTop: metrics.baseMargin * 5,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    fontFamily: 'SourceSansPro',
  },
  textLabel: {
    marginTop: metrics.baseMargin * 2,
    fontSize: 16,
    fontFamily: 'SourceSansPro',
  },
  textValue: {
    fontSize: 20,
    fontFamily: 'SourceSansPro',
  },
  divider: {
    marginHorizontal: metrics.baseMargin,
    borderBottomColor: colors.dark,
    borderBottomWidth: 0.5,
  },
  signOutButton: {
    marginTop: metrics.basePadding,
    paddingLeft: metrics.basePadding,
  },
  signOutButtonText: {
    fontSize: 20,

    fontFamily: 'SourceSansPro',
    color: colors.tomato,
  },
});

export default styles;
