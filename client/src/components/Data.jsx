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
    return <div>まだデータがありません</div>;
  }

  const latestState = filtered[filtered.length - 1];

  if (latestState === true) {
    return (
      <>
        <div>
          今月のキャンセル率は {calcCancelationRate(filtered)}% です
        </div>
        <div>
          入浴記録 {calcConsecutiveBathingDays(filtered)}日
          <br />
          この調子で頑張りましょう！
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          今月のキャンセル率は {calcCancelationRate(filtered)}% です
        </div>
        <div>
          お風呂キャンセル記録 {calcConsecutiveCancelDays(filtered)}日
          <br />
          今日こそお風呂に入りましょう！
        </div>
      </>
    );
  }
};
