export default function SearchBar({
  id = "search",
  label = "Rechercher votre stage",
  placeholder = "Rechercher votre stage…",
  value,
  onChange,
}) {
  return (
    <form role="search" aria-label={label} className="mt-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-xl rounded-full border px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
          color: "var(--text)",
        }}
      />
    </form>
  );
}