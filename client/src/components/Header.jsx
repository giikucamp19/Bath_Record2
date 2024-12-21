// import { useEffect } from "react";
// import axios from "axios";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";

export const Header = () => {
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

  // useEffect(() => {
  //   fetchData();
  // }, []);s
  return (
    <div>
      <header className="bg-blue-400 flex items-center justify-between px-4 py-2 mb-20">
        <h1 className="text-white text-lg font-bold">お風呂記録アプリ</h1>
        <Cog8ToothIcon className="h-6 w-6 my-2 text-black-500" />
      </header>
    </div>
  );
};
