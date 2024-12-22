import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Setting = () => {
  const [showUsage, setShowUsage] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [showDisadvantages, setShowDisadvantages] = useState(false);
  const [showAttention, setAttention] = useState(false);

  // トグル関数
  const toggleUsage = () => {
    setShowUsage((prev) => !prev);
  };

  const toggleBath = () => {
    setShowBath((prev) => !prev);
  };

  const toggleEffect = () => {
    setShowEffect((prev) => !prev);
  };

  const toggleDisadvantages = () => {
    setShowDisadvantages((prev) => !prev);
  };

  const toggleAttention = () => {
    setAttention((prev) => !prev);
  };

  return (
    <div className="p-4 bg-gray-100 h-screen text-center">
      <div className="relative flex justify-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">設定</h2>
        <Link to="/home" className="absolute right-0">
          <XCircleIcon className="h-6 w-6 my-2 text-black-500" />
        </Link>
      </div>

      {/* ボタンを縦に配置 */}
      <div className="flex flex-col space-y-6">
        {/* 使い方ボタン */}
        <button
          onClick={toggleUsage}
          className="bg-white text-blue-500 py-3 px-6 rounded-lg border border-blue-500 hover:bg-blue-100 transition"
        >
          使い方
        </button>

        {/* 正しいお風呂の過ごし方ボタン*/}
        <button
          onClick={toggleBath}
          className="bg-white text-blue-500 py-3 px-6 rounded-lg border border-blue-500 hover:bg-blue-100 transition"
        >
          正しいお風呂の
          <br />
          過ごし方
        </button>

        {/* お風呂の効果ボタン*/}
        <button
          onClick={toggleEffect}
          className="bg-white text-blue-500 py-3 px-6 rounded-lg border border-blue-500 hover:bg-blue-100 transition"
        >
          お風呂の効果
        </button>

        {/* お風呂のデメリットボタン*/}
        <button
          onClick={toggleDisadvantages}
          className="bg-white text-blue-500 py-3 px-6 rounded-lg border border-blue-500 hover:bg-blue-100 transition"
        >
          もし、お風呂に入らないと...
        </button>

        {/* 入浴時の注意*/}
        <button
          onClick={toggleDisadvantages}
          className="bg-white text-blue-500 py-3 px-6 rounded-lg border border-blue-500 hover:bg-blue-100 transition"
        >
          入浴時の注意
        </button>
      </div>

      {/* 使い方セクション */}
      {showUsage && (
        <div className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">使い方</h3>
          <ol className="text-left text-gray-700 list-decimal ml-6 space-y-4">
            <li>
              <p className="font-medium text-gray-900">ホーム画面:</p>
              <p className="text-sm mt-2">
                ホームアイコンをタップしてメインメニューに移動します。
                入浴記録に応じて菌の状態が変化します。
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-900">記録:</p>
              <p className="text-sm mt-2">
                カレンダーアイコンをタップします。カレンダーが表示されるので、日付を選択し◯または×をタップしてください。その後、保存ボタンをタップします。
              </p>
            </li>
          </ol>
        </div>
      )}

      {/* 正しいお風呂の過ごし方セクション */}
      {showBath && (
        <div className="bg-white rounded shadow-lg p-4 mt-4 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">正しいお風呂の過ごし方</h3>
          <ul className="text-left text-gray-700 space-y-6">
            {/* 項目1 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">寝る90分～2時間前</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴後約90分で深部体温が下がり、皮膚温度との差が縮まることで心地よい睡眠へとつながります。
                </p>
              </details>
            </li>

            {/* 項目2 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">40℃程度で10〜15分</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  高すぎる温度は交感神経を活性化させてリラックスを妨げます。40℃程度の温度が副交感神経を優位にするのに最適です。
                </p>
              </details>
            </li>

            {/* 項目3 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">肩まで浸かる全身浴</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  全身浴により血液が全身に行き渡り、一時的に体温を約1.1℃上昇させ、その後深部体温を効率よく下げられます。
                </p>
              </details>
            </li>
          </ul>
        </div>
      )}

      {/* お風呂の効果セクション */}
      {showEffect && (
        <div className="bg-white rounded shadow-lg p-4 mt-4 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">お風呂の効果</h3>
          <ul className="text-left text-gray-700 space-y-6">
            {/* 項目1 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">リラックス効果</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  温かいお湯に浸かることで副交感神経が活性化し、体と心の緊張がほぐれます。
                </p>
              </details>
            </li>

            {/* 項目2 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">血行促進</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  お湯の温熱効果により血管が広がり血流が促進され、肩こりや腰痛の軽減につながります。
                </p>
              </details>
            </li>

            {/* 項目3 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">疲労回復</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴による血行促進とリラクゼーション効果で筋肉の疲れやストレスが緩和されます。
                </p>
              </details>
            </li>

            {/* 項目4 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">デトックス効果</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  発汗を促すことで体内の老廃物を排出し、新陳代謝を高めます。
                </p>
              </details>
            </li>
          </ul>
        </div>
      )}

      {/* お風呂の効果セクション */}
      {showDisadvantages && (
        <div className="bg-white rounded shadow-lg p-4 mt-4 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            もし、お風呂に入らないと...
          </h3>
          <ul className="text-left text-gray-700 space-y-6">
            {/* 項目1 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">皮膚の健康への影響</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  汗や皮脂が洗い流されないと、細菌の繁殖により体臭が強くなることがあります。
                </p>
              </details>
            </li>

            {/* 項目2 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">血行不良</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴は血行を促進し、筋肉の緊張を和らげます。入浴しないとこれらの効果が得られず、血行不良や筋肉のこりを引き起こす可能性があります。
                </p>
              </details>
            </li>

            {/* 項目3 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">体臭の発生</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  汗や皮脂が洗い流されないと、細菌の繁殖により体臭が強くなることがあります。
                </p>
              </details>
            </li>

            {/* 項目4 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">リラックス効果の喪失</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴は心身のリラックスに寄与します。入浴しないとストレスが溜まりやすくなることがあります。
                </p>
              </details>
            </li>
          </ul>
        </div>
      )}

      {/* 入浴時の注意セクション */}
      {showAttention && (
        <div className="bg-white rounded shadow-lg p-4 mt-4 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">入浴時の注意</h3>
          <ul className="text-left text-gray-700 space-y-6">
            {/* 項目1 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">お湯の温度の確認</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  熱すぎるお湯は心臓に負担がかかるため、温度は40度程度に保ちましょう。お湯が熱すぎると、倒れる危険があります。
                </p>
              </details>
            </li>

            {/* 項目2 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">長時間の入浴を避ける</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  30分以上の長時間の入浴は体温を上昇させすぎ、体調を崩す原因になります。特に高齢者や心臓に問題のある方は注意が必要です。
                </p>
              </details>
            </li>

            {/* 項目3 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">急にお湯から出ない</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴後は立ち上がったときに血圧が急激に下がることがあります。立ちくらみを防ぐため、ゆっくりと体を動かすようにしましょう。
                </p>
              </details>
            </li>

            {/* 項目4 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">水分補給</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  入浴中や後の水分補給を心がけ、脱水症状を防ぐようにしましょう。
                </p>
              </details>
            </li>

            {/* 項目5 */}
            <li className="flex flex-col">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔️</span>
                <p className="font-medium">飲酒後の入浴の避ける</p>
              </div>
              <details className="ml-6 text-sm text-gray-600">
                <summary className="cursor-pointer text-blue-500 underline">
                  解説を表示
                </summary>
                <p>
                  飲酒後にお風呂に入ると、血管が拡張しやすくなり、急にお湯から出た際に低血圧を起こすことがあります。飲酒後は少なくとも1時間以上空けてから入浴するのがベターです。
                </p>
              </details>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
