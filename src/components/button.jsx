import '../directive.css';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-500 text-white text-3xl px-6 py-4 rounded-xl border-none cursor-pointer hover:bg-cyan-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
