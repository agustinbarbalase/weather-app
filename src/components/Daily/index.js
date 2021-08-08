import React from 'react';
import useDaily from 'hooks/useDaily';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import getNameDay from 'services/getNameDay';

import './index.css';

function Daily() {
  const { daily } = useDaily();

  if (!daily) {
    return (
      <SkeletonTheme color="#bdbdbd50" highlightColor="#bdbdbd50">
        <p>
          <Skeleton className="hourly" height={110} />
        </p>
      </SkeletonTheme>
    );
  }

  return (
    <div className="daily">
      <div className="daily-title">
        Dialy
      </div>
      <div className="daily-data">
        <span className="daily-header" key={1}>Day</span>
        <span className="daily-header" key={2}>Max</span>
        <span className="daily-header" key={3}>Min</span>
        <span className="daily-header" key={4}>Hum</span>
        {daily.map((item, index) => (
          <>
            <span key={`${index}-${item.dt}`} >{getNameDay(new Date(item.dt * 1000).getDay())}</span>
            <span key={`${index}-${item.temp.max}`} >{`${item.temp.max.toFixed(1)} °C`}</span>
            <span key={`${index}-${item.temp.min}`} >{`${item.temp.min.toFixed(1)} °C`}</span>
            <span key={`${index}-${item.humidity}`} >{`${item.humidity.toFixed(1)} %`}</span>
          </>
        ))}
      </div>
    </div>
  );
}

export default Daily;
