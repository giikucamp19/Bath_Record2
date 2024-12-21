import React from 'react';

// 連続入浴記録を計算
function calcConsecutiveBathingDays(isBathed) {
  let consecutiveBathingDays = 1;
  let latestState = true;
  for (let i = isBathed.length - 2; i >= 0; i--) {
    if (isBathed[i] !== latestState) {
      break;
    }
    consecutiveBathingDays++;
  }
  return consecutiveBathingDays;
}

// 連続キャンセル記録を計算
function calcConsecutiveCancelDays(isBathed) {
  let consecutiveCancelDays = 1;
  let latestState = false;
  for (let i = isBathed.length - 2; i >= 0; i--) {
    if (isBathed[i] !== latestState) {
      break;
    }
    consecutiveCancelDays++;
  }
  return consecutiveCancelDays;
}

// キャンセル率を計算
function calcCancelationRate(isBathed) {
  const filtered = isBathed.filter(d => d !== null);
  if (filtered.length === 0) return 0; 
  let totalDays = filtered.length;
  let totalCancelDays = filtered.filter(d => d === false).length;
  let cancelationRate = Math.floor(100 * (totalCancelDays / totalDays));
  return cancelationRate;
}

export const Data = ({ isBathed }) => {
  const filtered = isBathed.filter(d => d !== null);
  if (filtered.length === 0) {
    return (
      <>
        <div className="text-center font-semibold">
          <br></br>
          <span>
            まだデータがありません
          </span>
        </div>
      </>
    );
  }

  const latestState = filtered[filtered.length - 1];

  if (latestState === true) {
    return (
      <>
        <br></br>
        <div className="text-center">
          <span className='font-semibold'>
            今月のキャンセル率{"　"}
          </span>
          <span className='text-3xl text-center text-red-600 font-semibold'>
            {calcCancelationRate(filtered)}%
          </span>
          <br></br>
          <span className='font-semibold'>
            連続入浴記録{"　"}
          </span>
          <span className='text-3xl text-center text-green-600 font-semibold'>
            {calcConsecutiveBathingDays(filtered)}日
          </span>
          <br></br>
          <span className='text-2xl font-semibold'>
            この調子で頑張りましょう！
          </span>
        </div>
        <br></br>
      </>
    );
  } else {
    return (
      <>
        <br></br>
        <div className="text-center">
          <span className='font-semibold'>
            今月のキャンセル率{"　"}
          </span>
          <span className='text-3xl text-center text-red-600 font-semibold'>
            {calcCancelationRate(filtered)}%
          </span>
          <br></br>
          <span className='font-semibold'>
            連続キャンセル記録{"　"}
          </span>
          <span className='text-3xl text-center text-red-600 font-semibold'>
            {calcConsecutiveCancelDays(filtered)}日
          </span>
          <br></br>
          <span className='text-2xl font-semibold'>
            毎日お風呂に入りましょう...
          </span>
        </div>
        <br></br>
      </>
    );
  }
};
