import { useState, useEffect } from "react";

export const Germs = () => {
  //お風呂キャンセル日数を保持する変数
  const bathCancelDays = 1;
  // const [bathCancelDays, setBathCancelDays] = useState(7);
  //キャンセルした日数によって表示する菌のstate
  const [germ, setGerm] = useState(0);

  useEffect(() => {
    setGerm(bathCancelDays * 10);
  }, [bathCancelDays]);

  return (
    <div>
      <div className="flex flex-col items-center space-y-6 p-6">
        <h1 className="text-2xl font-bold">
          お風呂キャンセル記録: {bathCancelDays}日
        </h1>
        {/* アイコンと菌の繁殖エリア */}
        <div className="relative w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Icon</span>
          {Array.from({ length: germ }).map((index) => (
            <div
              key={index}
              className="absolute bg-yellow-900 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
