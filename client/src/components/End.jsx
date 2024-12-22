import { Header } from "./Header";
import { ThreeModel } from "./ThreeModel";

export const End = () => (
  <div className="flex flex-col h-screen bg-black text-white">
    {/* Header部分 */}
    <Header />
    {/* コンテンツ部分 */}
    <div className="flex flex-col flex-grow items-center justify-center px-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">The End</h1>
      <p className="text-sm sm:text-lg mb-8 text-center">
        ...あなたはもう助かりません
      </p>
      <div className="w-full max-w-[600px] h-[200px] sm:h-[400px]">
        <ThreeModel />
      </div>
    </div>
  </div>
);
