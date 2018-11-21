'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('../components/head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\lect24\\ecommerce\\pages\\admindashboard.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var _ref;

            return _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }), _react2.default.createElement('div', { className: 'col-md-10  ', style: { margin: '30px;' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('form', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search..', style: (_ref = {
                    border: '1px solid',
                    width: '130px',
                    boxsizing: ' border-box'
                }, (0, _defineProperty3.default)(_ref, 'border', '2px solid #ccc'), (0, _defineProperty3.default)(_ref, 'width', '100%'), (0, _defineProperty3.default)(_ref, 'borderradius', '4px'), (0, _defineProperty3.default)(_ref, 'fontsize', '16px'), (0, _defineProperty3.default)(_ref, 'backgroundcolor', 'white'), (0, _defineProperty3.default)(_ref, 'webkittransition', ' width 0.4s ease-in-out'), (0, _defineProperty3.default)(_ref, 'backgroundposition', '10px 10px'), (0, _defineProperty3.default)(_ref, 'backgroundrepeat', 'no-repeat'), (0, _defineProperty3.default)(_ref, 'padding', '12px 20px 12px 40px'), (0, _defineProperty3.default)(_ref, 'transition', 'width 0.4s ease-in-out'), _ref), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }))), _react2.default.createElement('div', { style: styles.sideBar, className: 'col-md-2 side-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { className: 'sidebar-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, ' ', _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, '  ', _react2.default.createElement(_link2.default, { href: '/desboard', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), ' Deshboard'))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, ' ', _react2.default.createElement(_link2.default, { href: '/addadmin', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, ' Add Admin'))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, ' ', _react2.default.createElement(_link2.default, { href: '/addproduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, ' Add product ')))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
    sideBar: {
        // backgroundColor:"#e74c3c",
        border: "1px solid black",
        minHeight: "650px",
        color: "#fff",
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    item: {
        paddingBottom: "10px",
        paddingLeft: "5px",
        borderBottom: "1px solid rgba(0,0,0,0.1)"
    },
    sidebarAnchor: {
        cursor: "pointer",
        // color: "#fff",
        textDecoration: "none"

    }
};