
import GameButton from "../components/GameButton";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RulesPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl text-[#6b7c93]">THE RULES</CardTitle>
        </CardHeader>
        <CardContent className="pb-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                <img src="/vegetables/turnip.png" alt="Example vegetable" className="max-h-full" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#6b7c93]">GUESS THE VEGETABLES</h3>
                <p className="text-[#8395a7]">
                  You will be shown different vegetables and given three options. Select the correct name
                  of the vegetable shown in the image.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#f9edd1] flex items-center justify-center text-xl font-semibold text-[#6b7c93]">
                  A
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#6b7c93]">SELECT ONE</h3>
                <p className="text-[#8395a7]">
                  Click on your chosen option (A, B, or C). After selecting, you'll see if your answer is correct
                  and learn interesting facts about the vegetable.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                <div className="text-3xl text-[#93b5cc] font-bold">10/10</div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#6b7c93]">SCORE POINTS</h3>
                <p className="text-[#8395a7]">
                  Each correct answer earns you 1 point. There are 10 vegetables to identify.
                  Try to get a perfect score!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/game">
              <GameButton>CONTINUE</GameButton>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RulesPage;
