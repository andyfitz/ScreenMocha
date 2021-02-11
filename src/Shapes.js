/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const Shapes = ({ ...rest }) => {
  function getRandomLength() {
    return Math.floor(Math.random() * 500 + 100);
  }
  function getRandomGap() {
    return Math.floor(Math.random() * 500 + 900);
  }

  const velocity = '200s';

  return (
    <div
      css={{
        overflow: 'hidden',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="100 100 600 600"
        preserveAspectRatio="xMidYMid slice"
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100vw;
          margin: 0;

          circle {
            fill: transparent;
            stroke: url(#bggrad);
            stroke-linecap: round;
            animation: bgmove ${velocity} linear infinite;
          }

          @keyframes bgmove {
            0% {
              stroke-dashoffset: 1000;
            }

            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      >
        {[0, 1, 2, 3, 4].map((item) => (
          <circle
            key={item}
            r={Math.floor(Math.random() * 900) + 100}
            cx={Math.floor(Math.random() * 900)}
            cy={Math.floor(Math.random() * 900)}
            strokeWidth={Math.floor(Math.random() * 200 + 75)}
            strokeDasharray={`${getRandomLength()} ${getRandomGap()}`}
          />
        ))}
      </svg>
      <svg style={{ pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="bggrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" css={{ stopColor: '#e40046' }} />
            <stop
              offset="100%"
              css={{ stopColor: '#f08c7a' }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Shapes;
