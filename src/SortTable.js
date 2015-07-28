var React = require('react');
var SortHeader = require('./SortHeader.js');
var DIRECTION = require('./TableConstants.js').DIRECTION;

export default class SortTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: undefined,
      sortDescending: true
    };
  }
  _getKeys() {
    if (this.props.keys) {
      return this.props.keys;
    }
    if (this.props.elements.length === 0) {
      return [];
    }
    return Object.keys(this.props.elements[0]);
  }
  _onSort(column) {
    if (column === this.state.sortedBy) {
      this.setState({
        sortDescending: !this.state.sortDescending
      });
    } else {
      this.setState({
        sortedBy: column,
        sortDescending: true
      });
    }
  }
  _isActive(key) {
    if (key === this.state.sortedBy) {
      return this.state.sortDescending ? DIRECTION.DOWN : DIRECTION.UP;
    }
    return '';
  }
  _renderHeader() {
    return (<thead>
      <tr>
        {this._getKeys().map((key, idx) => {
          return <SortHeader key={`sortheader-${idx}`} active={this._isActive(key)} onSort={this._onSort.bind(this)} value={key}/>})
        }
      </tr>
    </thead>);
  }
  _renderBody() {
    return (<tbody>
      {this._sortedElements().map((element, idx) => {
        return (<tr key={`datarow-${idx}`}>
          {this._getKeys().map((key, ndx) => {
            return (<td key={`dataelement-${ndx}`}>{element[key]}</td>)
          })}
        </tr>)
      })}
    </tbody>);
  }
  _isLess(first, second) {
    if (typeof first === 'string') {
      return first.toLowerCase() > second.toLowerCase();
    } else if (typeof first === 'function') {
      return first() > second();
    }
    return first > second;
  }
  _sortedElements() {
    if (this.state.sortedBy) {
      var col = this.state.sortedBy;
      return this.props.elements.sort((a,b) => {
        if (this.state.sortDescending) {
          return this._isLess(a[col],b[col]);
        } else {
          return this._isLess(b[col],a[col]);
        }
      });
    }
    return this.props.elements;
  }
  render() {
    return (
      <table className='table table-striped'>
        {this._renderHeader()}
        {this._renderBody()}
      </table>
    );
  }
}

