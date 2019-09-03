import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../actions'

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    selectedItem, isItemSelected
  },
}) => ({
  groceryList, selectedItem, isItemSelected
});


const mapDispatchToProps = dispatch => {

  return {
    addItem: item => dispatch(Actions.addItem(item)),
    selectItem: item => dispatch(Actions.selectItem(item)),
    deselectItem: item => dispatch(Actions.deselectItem(item)),
    removeItem: item => dispatch(Actions.removeItem(item)),
  }
}



class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }


  render() {

    const { selectItem, deselectItem, removeItem,
      isItemSelected, selectedItem, groceryList, addItem } = this.props

    return (
      <section className="groceryApp">
        <div>
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection
            selectedItem={selectedItem}
            isItemSelected={isItemSelected} />

          <ListTable
            onItemSelect={selectItem}
            onItemDeselect={deselectItem}
            onItemRemove={removeItem}
            selectedItem={selectedItem}
            groceryList={groceryList} />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
