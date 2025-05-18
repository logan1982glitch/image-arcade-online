
import Layout from "../components/Layout";
import GameButton from "../components/GameButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#6b7c93]">HEY GUYS!</h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#6b7c93]">LET'S PLAY A GAME</h2>
        </div>
        
        <div className="flex flex-col space-y-6">
          <Link to="/game">
            <GameButton className="w-64">PLAY A GAME</GameButton>
          </Link>
          <Link to="/rules">
            <GameButton className="w-64 bg-[#f9edd1] hover:bg-[#f5e3bc] text-[#6b7c93]">
              THE RULES
            </GameButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
