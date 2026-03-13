export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="search-btn">
        Search
      </button>

    </div>
  );
}