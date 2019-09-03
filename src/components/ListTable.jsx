import React from 'react';
import PropTypes from 'prop-types';

const MSG_NO_GROCERY_ITEMS = 'No Grocery items available'

export const ListTable = (props) => {

  const { groceryList, onItemSelect,
    onItemDeselect, onItemRemove, selectedItem } = props

  
  const toggleSelectedItem = (item) => {

    if (item.id === selectedItem.id)
      onItemDeselect(item)
    else
      onItemSelect(item)
  }

  const GroceryTable = (
    <div className="listTable">
      <table className={'groceryListTable'}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
            <th>Options</th>

          </tr>
          {
            groceryList.map((groceryItem) => {
              return (
                <tr key={+new Date() + Math.random()} >
                  <td>{groceryItem.name}</td>
                  <td>{groceryItem.category}</td>
                  <td>{groceryItem.deliveryMethod}</td>
                  <td>
                    <div>
                      <button className={'optionButton'}
                        onClick={() => toggleSelectedItem(groceryItem)}>
                        {selectedItem.id !== groceryItem.id ? 'Select' : 'Deselect'}
                      </button>
                      <button className={'optionButton'}
                        onClick={() => onItemRemove(groceryItem)}>Remove</button>
                    </div>
                  </td>

                </tr>
              )
            })}
        </tbody>

      </table>
    </div >
  )
  return (<div>
    {groceryList.length > 0 ? GroceryTable : MSG_NO_GROCERY_ITEMS}
  </div>)
}

ListTable.propTypes = {
  groceryList: PropTypes.array.isRequired,
  onItemSelect:PropTypes.func.isRequired,
  onItemDeselect:PropTypes.func.isRequired, 
  onItemRemove:PropTypes.func.isRequired, 
  selectedItem:PropTypes.object.isRequired
};
export default ListTable
