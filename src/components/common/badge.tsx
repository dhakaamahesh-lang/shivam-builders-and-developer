import { Typography } from "../ui/typography";

const Badge = ({ className, text }: { className?: string; text: string }) => {
  return (
    <div
      className={`bg-black-2 w-fit h-fit py-1.5 sm:py-3 px-4 sm:px-6 rounded-full backdrop-blur-lg ${className}`}
    >
      <Typography variant={"p16"} className="text-white-70">
        {text}
      </Typography>
    </div>
  );
};

export default Badge;
