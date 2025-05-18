
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GameButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const GameButton = ({ onClick, children, className }: GameButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative px-8 py-4 rounded-full text-xl bg-[#93b5cc] hover:bg-[#7ba3be] text-white font-medium transition-all",
        "before:content-['★'] before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm",
        "after:content-['★'] after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 after:text-sm",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default GameButton;
