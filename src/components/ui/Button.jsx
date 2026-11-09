const variants = {
  primary:
    "bg-brand text-white shadow-lg shadow-blue-900/30 hover:bg-brand-dark",
  outline:
    "border border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  outlineBlue:
    "border-2 border-brand bg-white text-brand hover:bg-brand hover:text-white",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-1.5 text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}