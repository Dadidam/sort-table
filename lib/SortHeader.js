'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var DIRECTION = require('./TableConstants.js').DIRECTION;

var SortHeader = (function (_React$Component) {
  _inherits(SortHeader, _React$Component);

  function SortHeader(props) {
    _classCallCheck(this, SortHeader);

    _get(Object.getPrototypeOf(SortHeader.prototype), 'constructor', this).call(this, props);
  }

  _createClass(SortHeader, [{
    key: '_onClickSort',
    value: function _onClickSort(e) {
      e.preventDefault();
      this.props.onSort(this.props.value);
    }
  }, {
    key: '_isActive',
    value: function _isActive() {
      return !!this.props.active;
    }
  }, {
    key: '_activeClass',
    value: function _activeClass() {
      return this._isActive() ? 'active' : '';
    }
  }, {
    key: '_renderSortArrow',
    value: function _renderSortArrow() {
      if (!this._isActive()) return React.createElement('span', { className: "pull-right glyphicon glyphicon-sort" });
      if (this.props.active === DIRECTION.UP) {
        return this.props.sortArrowUp || React.createElement('span', { className: 'sort-up glyphicon pull-right glyphicon-menu-up' });
      } else {
        return this.props.sortArrowDown || React.createElement('span', { className: 'sort-down glyphicon pull-right glyphicon-menu-down' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'th',
        { className: this._activeClass(), key: this.props.key },
        React.createElement(
          'a',
          { href: '#', onClick: this._onClickSort.bind(this), className: 'sort-arrow' },
          this.props.value,
          this._renderSortArrow()
        )
      );
    }
  }]);

  return SortHeader;
})(React.Component);

exports['default'] = SortHeader;
module.exports = exports['default'];
