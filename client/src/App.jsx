import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Data } from "./components/Data";
import { Auth } from "./components/Auth";
import { Home } from "./components/Home";
import { Germs } from "./components/Germs";
import Setting from "./components/setting"; // 追加

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/germs" element={<Germs />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Setting />} /> {/* 追加 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
