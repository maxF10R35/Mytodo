import React from 'react';
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
Dimensions,
FlatList,
} from 'react-native';



const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    color: '#4313e1',
    padding: 5,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#040814',
  },
  textDone: {
    fontSize: 20,
    color: '#8a8484',
    textDecorationLine: 'line-through',
  },
  whiteText: {
    fontSize: 20,
    color: '#fff',
  },
  textInput: {
    width: Dimensions.get('screen').width * 0.5,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 40,
    width: '80%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#331e54',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 10,
    height: 40,
  },
  scrollContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.5,
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#413f3f',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 10,
    height: 40,
  },
});


export default styles;