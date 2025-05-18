
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GameButton from "./GameButton";

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultCard = ({ score, totalQuestions, onRestart }: ResultCardProps) => {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl text-[#6b7c93]">
          YOUR RESULTS
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-8 text-center">
        <div className="mb-8">
          <div className="text-5xl font-bold text-[#93b5cc] mb-2">
            {score} / {totalQuestions}
          </div>
          <p className="text-xl text-[#8395a7]">
            {score === totalQuestions
              ? "Perfect! You're a vegetable expert!"
              : score > totalQuestions * 0.7
              ? "Great job! You know your vegetables well!"
              : "Good try! Keep learning about vegetables!"}
          </p>
        </div>
        
        <div className="flex justify-center">
          <GameButton onClick={onRestart}>PLAY AGAIN</GameButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
