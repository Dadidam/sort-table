'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var SortHeader = require('./SortHeader.js');
var DIRECTION = require('./TableConstants.js').DIRECTION;

var SortTable = (function (_React$Component) {
  _inherits(SortTable, _React$Component);

  function SortTable(props) {
    _classCallCheck(this, SortTable);

    _get(Object.getPrototypeOf(SortTable.prototype), 'constructor', this).call(this, props);
    this.state = {
      sortedBy: undefined,
      sortDescending: true
    };
  }

  _createClass(SortTable, [{
    key: '_getKeys',
    value: function _getKeys() {
      if (this.props.keys) {
        return this.props.keys;
      }
      if (this.props.elements.length === 0) {
        return [];
      }
      return Object.keys(this.props.elements[0]);
    }
  }, {
    key: '_onSort',
    value: function _onSort(column) {
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
  }, {
    key: '_isActive',
    value: function _isActive(key) {
      if (key === this.state.sortedBy) {
        return this.state.sortDescending ? DIRECTION.DOWN : DIRECTION.UP;
      }
      return '';
    }
  }, {
    key: '_renderHeader',
    value: function _renderHeader() {
      var _this = this;

      return React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          this._getKeys().map(function (key, idx) {
            return React.createElement(SortHeader, { key: 'sortheader-' + idx, active: _this._isActive(key), onSort: _this._onSort.bind(_this), value: key });
          })
        )
      );
    }
  }, {
    key: '_renderBody',
    value: function _renderBody() {
      var _this2 = this;

      return React.createElement(
        'tbody',
        null,
        this._sortedElements().map(function (element, idx) {
          return React.createElement(
            'tr',
            { key: 'datarow-' + idx },
            _this2._getKeys().map(function (key, ndx) {
              return React.createElement(
                'td',
                { key: 'dataelement-' + ndx },
                element[key]
              );
            })
          );
        })
      );
    }
  }, {
    key: '_isLess',
    value: function _isLess(first, second) {
      if (typeof first === 'string') {
        return first.toLowerCase() > second.toLowerCase();
      } else if (typeof first === 'function') {
        return first() > second();
      }
      return first > second;
    }
  }, {
    key: '_sortedElements',
    value: function _sortedElements() {
      var _this3 = this;

      if (this.state.sortedBy) {
        var col = this.state.sortedBy;
        return this.props.elements.sort(function (a, b) {
          if (_this3.state.sortDescending) {
            return _this3._isLess(a[col], b[col]);
          } else {
            return _this3._isLess(b[col], a[col]);
          }
        });
      }
      return this.props.elements;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        { className: 'table table-striped' },
        this._renderHeader(),
        this._renderBody()
      );
    }
  }]);

  return SortTable;
})(React.Component);

exports['default'] = SortTable;
module.exports = exports['default'];
