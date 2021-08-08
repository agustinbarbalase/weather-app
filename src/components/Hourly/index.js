import React from 'react';
import './index.css';

import useHourly from 'hooks/useHourly';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Hourly() {
  const { hourly } = useHourly();

  if (!hourly) {
    return (
      <SkeletonTheme color="#bdbdbd50" highlightColor="#bdbdbd50">
        <p>
          <Skeleton className="hourly" height={110} />
        </p>
      </SkeletonTheme>
    );
  }

  return (
    <div className="hourly">
      <div className="hourly-title">Hourly</div>
      <div className="hourly-date">
        {hourly.map((item, index) => (
          <div className="hourly-item" key={index}>
            <span className="hourly-item-date">
              {new Date(item.dt * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
            <span>{`${item.temp.toFixed(1)} °C`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourly;
