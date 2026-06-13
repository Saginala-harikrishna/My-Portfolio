const categories = [
  "All",
  "AI & ML",
  "Web Development",
  "Automation",
  "Mobile Apps",
];

export default function ProjectFilters({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          className={`px-5 py-2 rounded-full border transition ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}