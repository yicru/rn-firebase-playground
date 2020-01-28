import { StyleSheet } from 'react-native';

const colors = {
  primary: '#F72959',
  secondary: '#222B34'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 15
  },
  input: {
    minHeight: 48,
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    flex: 1,
    fontSize: 16,
    color: 'white'
  },
  textPrimary: {
    color: colors.primary
  }
});

export { styles, colors };
