import React from 'react';

export const ListTable = (props) => {

  const { groceryList, onItemSelect,
    onItemDeselect, onItemRemove, selectedItem } = props

  const toggleSelectedItem = (item) => {

    if (item.id == selectedItem.id)
      onItemDeselect(item)
    else
      onItemSelect(item)
  }

  return (<div className="listTable">
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
              <tr key={groceryItem.id}>
                <td>{groceryItem.name}</td>
                <td>{groceryItem.category}</td>
                <td>{groceryItem.deliveryMethod}</td>
                <td>
                  <div>
                    <button className={'optionButton'}
                      onClick={() => toggleSelectedItem(groceryItem)}>
                      {selectedItem.id != groceryItem.id ? 'Select' : 'Deselect'}
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
  </div >)
}

export default ListTable
