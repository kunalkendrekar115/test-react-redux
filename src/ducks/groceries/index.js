import update from 'immutability-helper';
import { ADD_ITEM, SELECT_ITEM, DESELECT_ITEM, REMOVE_ITEM } from '../../actions'


export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array

      let index = state.list.findIndex((item) => payload.id == item.id)

      // If item to be removed is selected then deselect and remove item
      if (state.list[index].id == state.selectedItem.id) {
        
        return update(state, {
          list: { $splice: [[index, 1]] },
          isItemSelected: { $set: false },
          selectedItem: { $set: initialState.selectedItem }
        });

      } else {
        return update(state, {
          list: { $splice: [[index, 1]] },
        });
      }
    case SELECT_ITEM:
      // Write a custom reducer that will select an item

      return update(state, {
        isItemSelected: { $set: true },
        selectedItem: { $set: payload }
      });


    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return update(state, {
        isItemSelected: { $set: false },
        selectedItem: { $set: initialState.selectedItem }
      });

    default:
      return state;
  }
};


