import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, selectItem ,deselectItem,removeItem} from '../ducks/groceries';

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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem, selectItem,deselectItem,removeItem
  }, dispatch)
);

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div>
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection
            selectedItem={this.props.selectedItem}
            isItemSelected={this.props.isItemSelected} />

          <ListTable
            onItemSelect={this.props.selectItem}
            onItemDeselect={this.props.deselectItem}
            onItemRemove={this.props.removeItem}
            selectedItem={this.props.selectedItem}
            groceryList={this.props.groceryList} />
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
