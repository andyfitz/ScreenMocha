/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { jsx, css } from '@emotion/react';

import BrowserFrame from './BrowserFrame';
import Shapes from './Shapes';

function App() {
  const [previewSize, setPreviewSize] = useState({
    pixelW: 1440,
    pixelH: 900,
    fitZoom: 1
  })

  const styles = css`
    & {
      background-color: #ffc564;
      position: relative;
      width: 100vw;
      height: 100vh;

      .container {
        width: 100%;
        height: 100%;
        padding: 4rem;
      }
    }
  `

  return (
    <div css={styles}>
      {/* <Shapes /> */}
      <div className="container">
        <BrowserFrame
          url="http://make.cm"
          boxShadow
          previewSize={previewSize}
          setPreviewSize={setPreviewSize}
        />
      </div>
    </div>
  );
}

export default App;
