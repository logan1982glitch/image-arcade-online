
import { cn } from "@/lib/utils";
import { Option } from "../types/game";

interface AnswerOptionProps {
  option: Option;
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const AnswerOption = ({ 
  option, 
  selected = false, 
  correct = false, 
  incorrect = false, 
  onClick,
  disabled = false
}: AnswerOptionProps) => {
  return (
    <button
      className={cn(
        "flex items-center space-x-4 p-3 rounded-lg border border-[#ccd3df] mb-4 hover:bg-[#e8f0f5] transition-colors",
        selected && "bg-[#e8f0f5]",
        correct && "bg-[#e6f7e9] border-[#c3e6c8] hover:bg-[#e6f7e9]",
        incorrect && "bg-[#ffebee] border-[#f5c2c7] hover:bg-[#ffebee]",
        disabled && "opacity-70 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f9edd1] flex items-center justify-center text-lg font-semibold text-[#6b7c93]">
        {option.id}
      </div>
      <span className="text-lg text-[#6b7c93]">{option.text}</span>
    </button>
  );
};

export default AnswerOption;
