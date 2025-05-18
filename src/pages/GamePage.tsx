
import { useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";
import GameButton from "../components/GameButton";
import { useGameStore } from "../store/gameStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GamePage = () => {
  const { 
    questions, 
    currentQuestion, 
    gameStarted,
    gameFinished,
    score,
    answers,
    startGame,
    answerQuestion,
    nextQuestion,
    resetGame
  } = useGameStore();

  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers.find(a => a.questionId === currentQuestionData?.id);
  const showResult = !!currentAnswer;

  // Reset game when component unmounts
  useEffect(() => {
    return () => resetGame();
  }, [resetGame]);

  if (!gameStarted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl text-[#6b7c93]">
              GUESS THE VEGETABLES
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-8 text-center">
            <p className="text-xl text-[#8395a7] mb-8">
              Test your knowledge of vegetables with this fun quiz! 
              Can you identify all 10 vegetables correctly?
            </p>
            
            <GameButton onClick={startGame}>START GAME</GameButton>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <ResultCard 
          score={score} 
          totalQuestions={questions.length}
          onRestart={resetGame}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full">
        <div className="mb-6 flex justify-between items-center">
          <div className="text-lg font-medium text-[#6b7c93]">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="text-lg font-medium text-[#6b7c93]">
            Score: {score}
          </div>
        </div>
        
        <QuestionCard
          question={currentQuestionData}
          onAnswer={(answerId) => answerQuestion(currentQuestionData.id, answerId)}
          showResult={showResult}
          onNext={nextQuestion}
          userAnswer={currentAnswer?.answerId}
        />
      </div>
    </div>
  );
};

export default GamePage;
