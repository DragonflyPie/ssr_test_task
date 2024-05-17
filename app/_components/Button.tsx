interface ButtonProps {
  value: string;
  type?: "primary" | "secondary";
}

const Button = ({ value, type = "primary" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={` min-w-20 rounded p-2 text-white transition-all hover:brightness-110 active:scale-95 active:brightness-90
     ${type === "primary" ? "bg-blue-400" : "bg-gray-400"} 
      `}
    >
      {value}
    </button>
  );
};

export default Button;
