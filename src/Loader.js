import * as React from "react";

const styles = {
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

const Loader = ({
  loading,
  text = "Loading..",
  fullPage,
  containerStyle,
  textStyle
}) => {
  if (!loading) {
    return null;
  }
  const mergedContainerStyle = {
    ...styles.spinner,
    ...containerStyle,
    position: fullPage ? "fixed" : "absolute"
  };
  return (
    <div style={mergedContainerStyle}>
      <div className="react-overlay-loader-spinner" />
      <span style={{ ...styles.text, ...textStyle }}>{text}</span>
    </div>
  );
};

export default Loader;
