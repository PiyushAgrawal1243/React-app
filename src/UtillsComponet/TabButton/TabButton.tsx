import { ReactNode, MouseEventHandler } from "react";

interface TabButtonProps {
  label: string;
  children: ReactNode;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function TabButton({ label, children, active, onClick }: TabButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button
      className={`  w-fit border-b-2  h-11  text-black p-2 px-4 hover:border-b-2  hover:border-blue-400 ${
        active ? "border-green-600 border-b-2" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default TabButton;
