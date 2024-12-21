import React, { useState } from "react";

const Setting = () => {
  const [showUsage, setShowUsage] = useState(false);

  // トグル関数
  const toggleUsage = () => {
    setShowUsage((prev) => !prev);
  };

  return (
    <div className="p-4 bg-gray-100 h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">設定</h2>

      {/* 使い方ボタン */}
      <button
        onClick={toggleUsage}
        className="bg-white text-blue-500 py-2 px-[100px] rounded border border-blue-500 hover:bg-blue-100 transition"
      >
        使い方
      </button>

      {/* 使い方セクション */}
      {showUsage && (
        <div className="bg-white rounded shadow-lg p-4 mt-4 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">使い方</h3>
          <ol className="text-left text-gray-700 list-decimal ml-6 space-y-2">
            <li>
              <span className="font-medium text-gray-900">ホーム画面:</span>{" "}
              ホームアイコンをタップしてメインメニューに移動します。
            </li>
            <li>
              <span className="font-medium text-gray-900">カレンダー:</span>{" "}
              カレンダーアイコンをタップしてスケジュールを確認します。
            </li>
            <li>
              <span className="font-medium text-gray-900">データ記録:</span>{" "}
              必要な項目を入力し、「保存」ボタンを押してデータを記録します。
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Setting;
