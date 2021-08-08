import React from 'react';

import './index.css';

function Sun({ data }) {
  return (
    <div className="sun">
      <div>
        <span>Sunrise</span>
        <span>
          {new Date(data.sunrise * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
      <div>
        <span>Sunset</span>
        <span>
          {new Date(data.sunset * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}

export default Sun;
