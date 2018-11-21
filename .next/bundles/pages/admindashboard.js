
          window.__NEXT_REGISTER_PAGE('/admindashboard', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\lect24\\ecommerce\\components\\head.js";

exports.default = function () {
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("link", { rel: "stylesheet", href: "//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement("link", { rel: "stylesheet", href: "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement("link", { rel: "stylesheet", href: "static/style.css", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Fresca", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\lect24\\ecommerce\\components\\head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\lect24\\ecommerce\\components\\head.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(580);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(583);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(559);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\lect24\\ecommerce\\pages\\admindashboard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\lect24\\ecommerce\\pages\\admindashboard.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/admindashboard")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(588);


/***/ })

},[589]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFkbWluZGFzaGJvYXJkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzPzkwMDQxMzYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW5kYXNoYm9hcmQuanM/OTAwNDEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjAuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPiBcblx0ICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz4gXG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nc3RhdGljL3N0eWxlLmNzcycgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RnJlc2NhJyAvPlxuICAgIDwvSGVhZD5cbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxIZWFkIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgIFwiIHN0eWxlPXt7bWFyZ2luOiczMHB4OycgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgPGZvcm0gID48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEzMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveHNpemluZzogJyBib3JkZXItYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjY2NjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJyYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udHNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdHRyYW5zaXRpb246JyB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcG9zaXRpb246ICcxMHB4IDEwcHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kcmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAyMHB4IDEycHggNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOid3aWR0aCAwLjRzIGVhc2UtaW4tb3V0JyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz48L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zaWRlQmFyfSBjbGFzc05hbWU9J2NvbC1tZC0yIHNpZGUtYmFyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXItY29udGFpbmVyJz4gIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnNpZGViYXJBbmNob3J9ID4gPHA+ICA8TGluayBocmVmPScvZGVzYm9hcmQnPjxhID48aSBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9pPiBEZXNoYm9hcmQ8L2E+PC9MaW5rPjwvcD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxwID4gPExpbmsgaHJlZj0nL2FkZGFkbWluJz48YT4gQWRkIEFkbWluPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwID4gPExpbmsgaHJlZj0nL2FkZHByb2R1Y3QnPjxhPiBBZGQgcHJvZHVjdCA8L2E+PC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICB2YXIgc3R5bGVzID0ge1xyXG4gICAgc2lkZUJhcjp7XHJcbiAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6XCIjZTc0YzNjXCIsXHJcbiAgICAgICBib3JkZXI6XCIxcHggc29saWQgYmxhY2tcIiwgXHJcbiAgICAgICBtaW5IZWlnaHQ6XCI2NTBweFwiLFxyXG4gICAgICAgIGNvbG9yOlwiI2ZmZlwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMilcIlxyXG4gICAgfSxcclxuICAgIGl0ZW06e1xyXG4gICAgICAgIHBhZGRpbmdCb3R0b206XCIxMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6XCI1cHhcIixcclxuICAgICAgICBib3JkZXJCb3R0b206XCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpXCJcclxuICAgIH0sXHJcbiAgICBzaWRlYmFyQW5jaG9yOntcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgLy8gY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluZGFzaGJvYXJkLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFEQTtBQWtCQTtBQWxCQTtBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQS9CQTtBQUNBOzs7O0FBMkNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFRQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBYkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        