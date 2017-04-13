var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
//onChange, The onchange event occurs when the value of an element has been changed.
export class TodoSearch extends React.Component {
  // handleSearch: function () {
  //   var showCompleted = this.refs.showCompleted.checked;
  //   var searchText = this.refs.searchText.value; // grab value
  //
  //   this.props.onSearch(showCompleted, searchText);
  // },
  render () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
};

// module.exports = TodoSearch;
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
