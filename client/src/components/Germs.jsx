import { useState, useEffect, useRef, useMemo } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
// import axios from "axios";

export const Germs = () => {
  //お風呂キャンセル日数を保持する変数
  const bathCancelDays = 1;
  // const [bathCancelDays, setBathCancelDays] = useState(7);
  //キャンセルした日数によって表示する菌の数
  const germ = useMemo(() => bathCancelDays * 10, [bathCancelDays]);
  // アカウント名
  // const name = useRef();
  // アカウントアイコン
  // const icon = useRef();

  // バックエンドからアカウント名とアイコンを取得する処理
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/api/endpoint");
  //     name.current = response.data.name;
  //     icon.current = response.data.icon;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchData();
  }, [germ]);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-6">
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
      <Footer />
    </div>
  );
};
