var React = require('react');
var DIRECTION = require('./TableConstants.js').DIRECTION;

export default class SortHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  _onClickSort(e) {
    e.preventDefault();
    this.props.onSort(this.props.value);
  }
  _isActive() {
    return !!this.props.active;
  }
  _activeClass() {
    return this._isActive() ? 'active' : '';
  }
  _renderSortArrow() {
    if (!this._isActive()) return <span className="pull-right glyphicon glyphicon-sort"></span>;
    if (this.props.active === DIRECTION.UP) {
      return this.props.sortArrowUp || <span className='sort-up glyphicon pull-right glyphicon-menu-up'></span>;
    } else {
      return this.props.sortArrowDown || <span className='sort-down glyphicon pull-right glyphicon-menu-down'></span>;
    }
  }
  render() {
    return (
      <th className={this._activeClass()} key={this.props.key}>
        <a href='#' onClick={this._onClickSort.bind(this)} className='sort-arrow'>
          {this.props.value}
          {this._renderSortArrow()}
        </a>
      </th>
    );
  }
}

