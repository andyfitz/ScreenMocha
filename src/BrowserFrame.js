/** @jsxImportSource @emotion/react */
import {useEffect, useRef, useState} from 'react';
import { jsx, css } from '@emotion/react'

function BrowserFrame({url}) {

  const previewRef = useRef(null)

  const [previewSize, setPreviewSize] = useState({
    pixelW: 1440,
    pixelH: 900,
    fitZoom: 1
  })

  useEffect(() => {
    console.log(previewRef)

    const containerW = previewRef.current.clientWidth;
    const containerH = previewRef.current.clientHeight;

    const widthRatio = containerW / previewSize.pixelW;
    const heightRatio = containerH / previewSize.pixelH;

    setPreviewSize({
      ...previewSize,
      fitZoom: Math.min(heightRatio, widthRatio),
    })
  }, [previewRef])

  const frame = css`
    & {
      position: relative;
      height: 100%;
      width: 100%;
    }

    .toolbar {
      width: 100%;
      background-color: #202124;
      height: 3rem;
      z-index: 10;
      position: relative;
      color: #c4c4c4;
      background-image: url('data:image/svg+xml;utf8,<svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="rgb(92,92,92)"/><circle cx="18" cy="4" r="4" fill="rgb(92,92,92)"/><circle cx="32" cy="4" r="4" fill="rgb(92,92,92)"/></svg>');
      background-size: 5%;
      background-repeat: no-repeat;
      background-position: 1.25rem 50%;
    }

    .frame-container {
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${previewSize.pixelW}px;
      height: ${previewSize.pixelH}px;
      transform: scale(${previewSize.fitZoom}) translate(-50%, -50%);
      transform-origin: 0 0;
      overflow: hidden;
      border-radius: 1rem;
      background-color: white;
      position: relative;
      box-shadow: 0 0 20px rgba(0,0,0,0.25);

      iframe {
        padding-top: 3rem;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }
    }
  `
  return (
    <div ref={previewRef} css={frame}>

      <div className="frame-container" >
        <div className="toolbar" />
        <iframe title="iframe" src={url} />
      </div>
    </div>
  );
}

export default BrowserFrame;
