import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Data } from "./components/Data";
import { Auth } from "./components/Auth";
import { Home } from "./components/Home";
import { Germs } from "./components/Germs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth コンポーネントを最初に表示 */}
        <Route path="/" element={<Auth />} />

        {/* 認証が成功したら Header を表示し、その下に他のコンポーネントを表示 */}
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/germs" element={<Germs />} />
          <Route path="/data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
