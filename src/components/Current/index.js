import React from 'react';

import './index.css';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Details from 'components/Details';
import Sun from 'components/Sun';
import Temp from 'components/Temp';

import useCurrent from 'hooks/useCurrent';

function Current() {
  const { current, timezone } = useCurrent();

  if (!(current && timezone)) {
    return (
      <SkeletonTheme color="#bdbdbd50" highlightColor="#bdbdbd50">
        <p>
          <Skeleton className="hourly" height={110} />
        </p>
      </SkeletonTheme>
    );
  }

  return (
    <div className="current">
      <div className="current-location">{timezone}</div>
      <div className="current-info">
        <Temp data={current}/>
        <Sun data={current}/>
        <Details data={current}/>
      </div>
    </div>
  );
}

export default Current;
