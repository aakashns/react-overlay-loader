# react-overlay-loader
A simple overlay loader for React web applications

![loader demo](./preview.gif)

## Installation
Install using `npm`

```
npm install react-overlay-loader --save
```

## Usage

### Overlay on parts of the page

1. Import `Loader` and `LoadingOverlay` from `react-overlay-loader`

2. Include the styles from `react-overlay-loader/styles.css`

3. Use `LoadingOverlay` like a normal `div` and place a `Loader` anywhere inside it. When the `loading` prop passed to `Loader` is `true`, a translucent overlay is shown over the content inside `LoadingOverlay`, with a spinner in the center.

```javascript
import React, { Component } from 'react';
import { render } from 'react-dom';
import { LoadingOverlay, Loader } from 'react-overlay-loader';

import 'react-overlay-loader/styles.css';

class App extends Component {
  state = { loading: false }
  render() {
    const { loading } = this.state;
    return (
      <div style={{ height: '100vh', backgroundColor: 'lavender', padding: 16 }}>
        <LoadingOverlay style={{ width: 200, height: 200, backgroundColor: 'papayawhip' }}> 
            <h2 style={{ margin: 16}}> Some content</h2>
            <Loader loading={loading}/>
        </LoadingOverlay>
        
        <button onClick={() => this.setState({ loading: !loading })}>
          Toggle loader
        </button>
          

        <div style={{ width: 200, height: 200, backgroundColor: 'goldenrod' }}> 
            <h2 style={{ margin: 16}}>Other Content</h2>
        </div>

      </div>
    )
  }
}


render(<App />, document.getElementById('root'));

```

### Overlay on the entire page

If you want to show the overlay over the entire page, just use `Loader` with the prop `fullPage` set to `true` (no need to use `LoadingOverlay`).

```javascript
import React from 'react';
import { Loader } from 'react-overlay-loader';

import 'react-overlay-loader/styles.css';


const App = () => (
  <div>
    <h2>Some content</h2>
    <div>
      <h3> Some nested content</h3>
      <div>
        <span>This loader will show over the entire page</span>
        <Loader fullPage loading />
      </div>
    </div>
  </div>
);

```

### Spinner customization

The spinner can be customized by applying styles to `react-overlay-loader-spinner:before`. Here are the default styles:

```css
.react-overlay-loader-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -30px;
  margin-left: -20px;
  border-radius: 50%;
  border: 3px solid #eee;
  border-top-color: #07d;
  animation: react-overlay-loader-spinner 0.8s linear infinite;
}
```

