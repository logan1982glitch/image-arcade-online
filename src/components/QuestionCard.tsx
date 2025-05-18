
import { Question } from "../types/game";
import AnswerOption from "./AnswerOption";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import GameButton from "./GameButton";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  showResult: boolean;
  onNext: () => void;
  userAnswer?: string;
}

const QuestionCard = ({ question, onAnswer, showResult, onNext, userAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleOptionClick = (optionId: string) => {
    if (showResult) return;
    setSelectedOption(optionId);
    onAnswer(optionId);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${question.image}`);
    setImageError(true);
  };

  // Get vegetable name for the placeholder
  const getVegetableName = () => {
    const correctOption = question.options.find(opt => opt.id === question.correctAnswer);
    return correctOption?.text || "Vegetable";
  };

  // Get emoji based on vegetable type
  const getVegetableEmoji = () => {
    const vegetableName = getVegetableName().toLowerCase();
    
    // Map vegetables to emojis
    const emojiMap: Record<string, string> = {
      turnip: "🥕",
      broccoli: "🥦",
      cabbage: "🥬",
      lettuce: "🥬",
      cucumber: "🥒",
      beans: "🫛",
      mushroom: "🍄",
      onion: "🧅",
      carrot: "🥕",
      eggplant: "🍆"
    };
    
    return emojiMap[vegetableName] || "🥗";
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl text-[#6b7c93]">
          GUESS THE VEGETABLES
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0 flex justify-center items-center">
            {imageError ? (
              <div className="h-56 md:h-64 w-full flex flex-col items-center justify-center bg-gray-100 rounded-md">
                <span className="text-6xl mb-2">{getVegetableEmoji()}</span>
                <div className="text-center">
                  <p className="text-gray-500 mb-1">Image not available</p>
                  {!showResult && (
                    <p className="text-sm text-gray-400">Try to guess the vegetable!</p>
                  )}
                </div>
              </div>
            ) : (
              <img 
                src={question.image} 
                alt="Vegetable" 
                className="max-h-56 md:max-h-64 object-contain"
                onError={handleImageError}
              />
            )}
          </div>
          <div className="w-full md:w-1/2">
            {question.options.map(option => (
              <AnswerOption
                key={option.id}
                option={option}
                selected={selectedOption === option.id}
                correct={showResult && option.id === question.correctAnswer}
                incorrect={showResult && selectedOption === option.id && option.id !== question.correctAnswer}
                onClick={() => handleOptionClick(option.id)}
                disabled={showResult}
              />
            ))}
          </div>
        </div>

        {showResult && (
          <div className="mt-6 bg-[#f4f7f9] p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-[#6b7c93] mb-2">THE ANSWER IS</h3>
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-[#f9edd1] flex items-center justify-center text-lg font-semibold text-[#6b7c93] mr-3">
                {question.correctAnswer}
              </div>
              <span className="text-xl text-[#93b5cc] font-semibold">
                {question.options.find(o => o.id === question.correctAnswer)?.text}
              </span>
            </div>
            <p className="text-[#8395a7]">{question.description}</p>
          </div>
        )}

        {showResult && (
          <div className="mt-6 flex justify-center">
            <GameButton onClick={onNext}>NEXT MATCH</GameButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
