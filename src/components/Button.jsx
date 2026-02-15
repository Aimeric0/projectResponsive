export default function Button({
  variant = "solid", // "solid" | "outline" | "ghost"
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2";

  const variants = {
    solid: "text-white bg-teal-600 hover:bg-teal-700",
    outline: "border border-teal-700 text-teal-900 hover:bg-teal-50",
    ghost: "text-teal-700 hover:bg-teal-50",
  };

  return (
    <button className={[base, variants[variant], className].join(" ")} {...props}>
      {children}
    </button>
  );
}