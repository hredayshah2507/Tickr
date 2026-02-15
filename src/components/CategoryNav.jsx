import { categories } from "../constants";

const CategoryNav = ({ activeCategory, setActiveCategory }) => {
  return (
    <div id="browse" className="w-full mb-12">
      <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-violet-500 to-violet-800 text-white shadow-lg shadow-violet-500/50"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700"
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
