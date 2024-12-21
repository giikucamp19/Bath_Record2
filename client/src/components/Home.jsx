import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import { Data } from "./Data";
import { Header } from "./Header";
import { Footer } from "./Footer";

// 曜日の配列
const weekdays = ["月", "火", "水", "木", "金", "土", "日"];

export const Home = ({ setConsecutiveCancelDays }) => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 現在の年月を管理
  const [selectedDate, setSelectedDate] = useState(null); // 選択した日付
  const [marks, setMarks] = useState(() => {
    // 保存された状態をlocalStorageから取得（なければ空オブジェクト）
    const savedMarks = localStorage.getItem("calendarMarks");
    return savedMarks ? JSON.parse(savedMarks) : {};
  });

  // 月の表示範囲の日付配列を生成
  const getDaysInMonth = (date) => {
    const startDate = startOfMonth(date); // 月の初めの日
    const endDate = endOfMonth(date); // 月の終わりの日
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // 月曜始まりに合わせるための余白を追加
    const startPadding = getDay(startDate) === 0 ? 6 : getDay(startDate) - 1;
    const paddedDays = Array(startPadding).fill(null);

    return [...paddedDays, ...days];
  };

  const days = getDaysInMonth(currentDate);

  const isBathed = days.map((day) => {
    if (!day) return null;
    const mark = marks[format(day, "yyyy-MM-dd")];
    if (mark === "○") return true;
    if (mark === "×") return false;
    return null;
  });

  // ○または×のマークを設定
  const handleMark = (mark) => {
    setMarks((prev) => {
      const newMarks = { ...prev, [format(selectedDate, "yyyy-MM-dd")]: mark };
      localStorage.setItem("calendarMarks", JSON.stringify(newMarks));
      return newMarks;
    });
    setSelectedDate(null);
  };

  return (
    <div>
      <Header />
      <Data
        isBathed={isBathed}
        setConsecutiveCancelDays={setConsecutiveCancelDays}
      />
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* 年月表示と月の切り替えボタン */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            &lt;
          </button>
          <h2 className="text-2xl font-semibold">
            {format(currentDate, "yyyy年 MM月")}
          </h2>
          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            &gt;
          </button>
        </div>

        <div>
          {/* 曜日ヘッダー */}
          <div className="grid grid-cols-7 text-center font-bold my-2">
            {weekdays.map((day, index) => (
              <div
                key={day}
                className={`
                border p-4
                ${index === 5 ? "bg-blue-400 text-black" : ""} 
                ${index === 6 ? "bg-red-400 text-black" : ""}`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* 日付の表示 */}
          <div className="grid grid-cols-7 gap-1 border p-4">
            {days.map((day, index) => (
              <div
                key={index}
                style={{
                  border: day ? "1px solid #ccc" : "none",
                  borderRadius: "5px",
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor:
                    day && marks[format(day, "yyyy-MM-dd")] === "○"
                      ? "#d1e7dd"
                      : day && marks[format(day, "yyyy-MM-dd")] === "×"
                      ? "#f8d7da"
                      : "#fff",
                  cursor: day ? "pointer" : "default",
                }}
                onClick={() => day && setSelectedDate(day)}
              >
                {day ? day.getDate() : ""}
                {day && (
                  <div style={{ marginTop: "5px", fontSize: "18px" }}>
                    {marks[format(day, "yyyy-MM-dd")] || ""}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* マーク入力用のモーダル */}
        {selectedDate && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setSelectedDate(null)}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{format(selectedDate, "yyyy年 MM月 dd日")}を選択</h2>
              <button
                style={{
                  margin: "10px",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#d1e7dd",
                  cursor: "pointer",
                }}
                onClick={() => handleMark("○")}
              >
                ○
              </button>
              <button
                style={{
                  margin: "10px",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#f8d7da",
                  cursor: "pointer",
                }}
                onClick={() => handleMark("×")}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
