import { createElement } from 'react';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var styles = {
  text: {
    marginTop: 52,
    color: "#888",
    marginLeft: 6
  },
  spinner: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

var Loader = function Loader(_ref) {
  var loading = _ref.loading,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? "Loading.." : _ref$text,
      fullPage = _ref.fullPage,
      containerStyle = _ref.containerStyle,
      textStyle = _ref.textStyle;

  if (!loading) {
    return null;
  }
  var mergedContainerStyle = _extends({}, styles.spinner, containerStyle, {
    position: fullPage ? "fixed" : "absolute"
  });
  return createElement(
    "div",
    { style: mergedContainerStyle },
    createElement("div", { className: "react-overlay-loader-spinner" }),
    createElement(
      "span",
      { style: _extends({}, styles.text, textStyle) },
      text
    )
  );
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoadingOverlay = function LoadingOverlay(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return createElement(
    "div",
    _extends$1({}, rest, { style: _extends$1({}, rest.style, { position: "relative" }) }),
    children
  );
};

export { Loader, LoadingOverlay };
