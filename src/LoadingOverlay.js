import * as React from "react";

const LoadingOverlay = ({ children, ...rest }) => (
  <div {...rest} style={{ ...rest.style, position: "relative" }}>
    {children}
  </div>
);

export default LoadingOverlay;
