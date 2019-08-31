import React from 'react';

const ListSelection = (props) => {

  const { isItemSelected, selectedItem } = props

  const Item = () => {

    const ItemRow = ({ itemKey, value }) => (
      <div className={'selectedItemRow'}>
        <span>{itemKey+' :'}</span>
        <span>{value}</span>
      </div>
    )
    return (<div className={'selectedItem'}>
      <h3>Selected Item</h3>
      <ItemRow
        itemKey={'Name'}
        value={selectedItem.name}></ItemRow>

      <ItemRow
        itemKey={'Category'}
        value={selectedItem.category}></ItemRow>

      <ItemRow
        itemKey={'Delivery Method'}
        value={selectedItem.deliveryMethod}></ItemRow>
    </div>
    )
  }

  return (
    <div className="listSelection">
      {isItemSelected && <Item />}
    </div>
  );


}

export default ListSelection;
