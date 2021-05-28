import React from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';
import format from 'date-fns/format';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppContext} from '../App.provider';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State as GestureState,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Cross} from '../components/CrossMini.icon';

const maxPan = 100;

export function JokeItem({joke}) {
  const {handleDeleteJoke} = useAppContext();
  const offset = useSharedValue(0);
  const [shouldRemove, setShouldRemove] = React.useState(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const onGestureEvent = React.useCallback(
    (event: PanGestureHandlerGestureEvent) => {
      const xVal = Math.floor(event.nativeEvent.translationX);
      offset.value = xVal;
      // use Absolute value so the user could swipe either left or right
      if (Math.abs(xVal) <= maxPan) {
        setShouldRemove(false);
      } else {
        setShouldRemove(true);
      }
    },
    [offset],
  );

  const onHandlerStateChange = React.useCallback(
    (event: PanGestureHandlerStateChangeEvent) => {
      if (event.nativeEvent.state === GestureState.END) {
        if (shouldRemove) {
          // if the item should be remove, animate it off the screen first
          offset.value = withTiming(Math.sign(offset.value) * 2000);

          // use LayoutAnimation to ensure the rest of the page animates up nicely
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

          // then trigger the remove mood item with a small delay
          setTimeout(() => {
            handleDeleteJoke(joke);
          }, 250);
        } else {
          // otherwise, animate the item back to the start
          offset.value = withTiming(0);
        }
      }
    },
    [handleDeleteJoke, joke, offset, shouldRemove],
  );

  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}>
      <Animated.View style={[styles.jokeContainer, animatedStyles]}>
        <View style={styles.dateAndBtn}>
          <Text style={[styles.text, styles.date]}>
            {format(new Date(joke.timestamp), 'h:mmaaa')}
          </Text>
          <TouchableOpacity onPress={() => handleDeleteJoke(joke)}>
            <Cross />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{joke.joke}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  jokeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  dateAndBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Kalam-Light',
  },
  date: {
    fontFamily: 'Kalam-Regular',
  },
});
