import React from 'react';

export default function pilate(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" {...props}>
      <g transform="translate(0, 0)">
        <rect x={3} y={3} width={14} height={58} rx={1} ry={1} fill="#444444" />
        <rect x={45} y={23} width={16} height={38} rx={1} ry={1} fill="#444444" />
        <rect x={23} y={3} width={38} height={14} rx={1} ry={1} fill="#444444" />
        <rect x={23} y={45} width={16} height={16} rx={1} ry={1} fill="#444444" data-color="color-2" />
        <rect x={23} y={23} width={16} height={16} rx={1} ry={1} fill="#444444" data-color="color-2" />
      </g>
    </svg>
  );
}
