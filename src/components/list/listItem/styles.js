import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 20,
    backgroundColor: '#f76b8a',
    borderRadius: 5,
    shadowColor: "#212121",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 14,
    color: '#eaf6f6',
    paddingHorizontal: 20,
  },
  listItemStatus:{
    paddingHorizontal:20
  }
});