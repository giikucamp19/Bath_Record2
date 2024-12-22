import { useState, useEffect, useMemo } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import axios from "axios";
import '../App.css';

export const Germs = ({ consecutiveCancelDays }) => {
  // キャンセルした日数によって表示する菌の数
  const germCount = useMemo(() => consecutiveCancelDays * 10, [consecutiveCancelDays]);

  // アカウント名・アイコン
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');

  // 「菌」オブジェクトを配列で管理
  const [germData, setGermData] = useState([]);

  // バックエンドからユーザー情報を取得
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user");
      setName(response.data.accountname);
      setIcon(response.data.iconimage);
    } catch (error) {
      console.log(error);
    }
  };

  // germCount が変わるたびに、菌を再生成
  useEffect(() => {
    fetchData();

    const newGerms = Array.from({ length: germCount }).map(() => {
      // ランダム位置
      const top = Math.random() * 80;  // 0～80%
      const left = Math.random() * 80;
      // 大きさ(5～30px)
      const size = Math.random() * 25 + 5;
      // 暗めの色 (lightness=20%)
      const color = `hsl(${Math.random() * 360}, 50%, 20%)`;
      // dx, dy: -0.5～+0.5 (ゆっくり移動)
      const dx = Math.random() * 1 - 0.5;
      const dy = Math.random() * 1 - 0.5;

      return { top, left, size, color, dx, dy };
    });

    setGermData(newGerms);
  }, [germCount]);

  // 位置のアニメーション
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setGermData(prev =>
        prev.map(g => {
          let newTop = g.top + g.dy;
          let newLeft = g.left + g.dx;

          // 画面端でバウンドさせる (0～90%)
          if (newTop < 0 || newTop > 90) {
            newTop = Math.min(Math.max(newTop, 0), 90);
            // 進行方向を反転
            const newDy = g.dy * -1;
            return { ...g, top: newTop, left: newLeft, dy: newDy };
          }
          if (newLeft < 0 || newLeft > 90) {
            newLeft = Math.min(Math.max(newLeft, 0), 90);
            const newDx = g.dx * -1;
            return { ...g, top: newTop, left: newLeft, dx: newDx };
          }

          return { ...g, top: newTop, left: newLeft };
        })
      );
    }, 80); // 更新頻度(80msごと)

    return () => clearInterval(updateInterval);
  }, []);

  // Base64画像 -> dataURL
  const iconSrc = icon ? `data:image/png;base64,${icon}` : null;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-6 relative w-full h-screen">
        {/* 連続キャンセル日数 */}
        <h1 className="text-2xl font-bold mt-4">
          余命: <span style={{ color: "red" }}>{30-consecutiveCancelDays}日</span>
        </h1>

        {/* アカウント情報 */}
        <h1 className="rainbow-text text-lg font-semibold">{name}</h1>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt="icon"
            className="h-64 w-64 rounded-full object-cover border"
          />
        ) : (
          <p>No Icon Image</p>
        )}

        {/* 絶対配置した菌を描画 */}
        {germData.map((g, index) => {
          // カプセル状の形 => 幅を大きく、border-radiusを工夫
          const width = g.size * 2; // 横長
          const height = g.size;    // 縦
          return (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${g.top}%`,
                left: `${g.left}%`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: g.color,
                // カプセルっぽい角丸
                borderRadius: "50% / 50%",
                // 位置をpx指定にしたい場合は containerの大きさに応じて計算が必要
                transition: "top 0s, left 0s", // アニメ感を抑えたいなら 0s
              }}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
