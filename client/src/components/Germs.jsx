import { useState, useEffect, useMemo } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import axios from "axios";

export const Germs = ({ consecutiveCancelDays }) => {
  //お風呂キャンセル日数を保持する変数
  const bathCancelDays = 1;
  // const [bathCancelDays, setBathCancelDays] = useState(7);
  //キャンセルした日数によって表示する菌の数
  const germ = useMemo(() => consecutiveCancelDays * 10, [consecutiveCancelDays]);
  // アカウント名
  const [name, setName] = useState('');
  // アカウントアイコン
  const [icon, setIcon] = useState('');

  // バックエンドからアカウント名とアイコンを取得する処理
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user");
      // console.log(response.data)
      // console.log(response.data.accountname)
      // console.log(response.data.iconimage)
      setName(response.data.accountname)
      setIcon(response.data.iconimage)
      return response
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [germ]);

  const iconSrc = icon ? `data:image/png;base64,${icon}` : null;
  // console.log(name)
  // console.log(icon)
  
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold">
          お風呂キャンセル記録: {consecutiveCancelDays}日
        </h1>
        {/* アイコンと菌の繁殖エリア */}
          <h1 className="text-black text-lg font-semibold">{name}</h1>
          {iconSrc ? (
            <img src={iconSrc} alt="icon" className="h-64 w-64 rounded-full object-cover border"/>
          ) : (
            <p>No Icon Image</p>
          )
          }
          {Array.from({ length: germ }).map((_, index) => (
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
      <Footer />
    </div>
  );
};
