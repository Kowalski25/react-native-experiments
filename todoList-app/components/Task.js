import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    opacity: 0.5,
    marginRight: 15,
    height: 24,
    width: 24,
  },
  itemText: {
    maxWidth: '80%',
    color: '#1A1A1A',
    fontSize: 14,
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default Task;