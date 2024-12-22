// import { useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { MdBathtub } from "react-icons/md";

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
      <header className="bg-blue-400 flex items-center px-4 py-2 mb-8">
        <h1 className="text-white font-kosugi">アンチお風呂キャンセル界隈</h1>
        <div className="flex items-center ml-auto space-x-4">
          <Link to="/home">
            <CalendarIcon className="h-6 w-6 my-2 text-black-500" />
          </Link>
          <Link to="/Germs">
            <MdBathtub />
          </Link>
          <Link to="/Setting">
            <Cog8ToothIcon className="h-6 w-6 my-2 text-black-500" />
          </Link>
        </div>
      </header>
    </div>
  );
};
