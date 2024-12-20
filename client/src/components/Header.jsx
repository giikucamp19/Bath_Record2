import React from "react";
import { Outlet, Link } from "react-router-dom";
import settingIcon from '../img/setting.png'; // 画像をインポートする

const Header = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-400 flex items-center justify-between px-4 py-2 fixed top-0 w-full z-10">
        <h1 className="text-white text-lg font-bold">お風呂キャンセル記録</h1>
        {/* Settings Button */}
        <Link to="/settings">
          <button>
            <img
              src={settingIcon} // インポートした画像を使用
              alt="Settings"
              className="w-6 h-6"
            />
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white text-center mt-12 mb-12 overflow-y-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-400 flex items-center justify-between px-4 py-2 fixed bottom-0 w-full z-10">
        <button className="flex flex-col items-center">
          <img src="/path-to-home-icon.png" alt="Home" className="w-6 h-6" />
          <span className="text-white text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <img src="/path-to-calendar-icon.png" alt="Calendar" className="w-6 h-6" />
          <span className="text-white text-sm">1</span>
        </button>
      </footer>
    </div>
  );
};

export default Header;
