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
  const filtered = isBathed.filter((d) => d !== null);
  if (filtered.length === 0) return 0;
  let totalDays = filtered.length;
  let totalCancelDays = filtered.filter((d) => d === false).length;
  let cancelationRate = Math.floor(100 * (totalCancelDays / totalDays));
  return cancelationRate;
}

export const Data = ({ isBathed }) => {
  const filtered = isBathed.filter((d) => d !== null);
  if (filtered.length === 0) {
    return (
      <>
        <div className="text-center font-semibold">
          <br></br>
          <span>まだデータがありません</span>
        </div>
      </>
    );
  }

  const latestState = filtered[filtered.length - 1];
  const consecutiveBathingDays = calcConsecutiveBathingDays(filtered);
  const consecutiveCancelDays = calcConsecutiveCancelDays(filtered);
  const cancelationRate = calcCancelationRate(filtered);

  if (latestState === true) {
    return (
      <>
        <div className="flex justify-center items-center flex-col">
          <span className="font-semibold">今月のキャンセル率は...{"　"}</span>
          <div className="relative w-36 h-36">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient( #f08080 ${
                  cancelationRate * 3.6
                }deg, #e0e0e0 ${cancelationRate * 3.6}deg ${
                  360 - cancelationRate * 3.6
                }deg )`,
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center text-xl font-semibold text-gray-800">
              {cancelationRate}%
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-semibold">連続入浴記録{"　"}</span>
          <span className="text-3xl text-center text-green-600 font-semibold">
            {consecutiveBathingDays}日
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-2xl font-semibold">
            この調子で頑張りましょう！
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center items-center flex-col">
          <span className="font-semibold">今月のキャンセル率は...{"　"}</span>
          <div className="relative w-36 h-36">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient( #f08080 ${
                  cancelationRate * 3.6
                }deg, #e0e0e0 ${cancelationRate * 3.6}deg ${
                  360 - cancelationRate * 3.6
                }deg )`,
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center text-xl font-semibold text-gray-800">
              {cancelationRate}%
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-semibold">連続キャンセル日数{"　"}</span>
          <span className="text-3xl text-center text-red-600 font-semibold">
            {consecutiveCancelDays}日
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-2xl font-semibold">
            毎日お風呂に入りましょう...
          </span>
        </div>
      </>
    );
  }
};
