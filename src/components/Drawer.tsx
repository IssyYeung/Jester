import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';

type DrawerProps = {
  title: string;
};

export const Drawer = ({title, children}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleOpen = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(val => !val);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleToggleOpen}
        activeOpacity={0.9}
        style={styles.item}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#495057',
    padding: 15,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
