import "./Header.css";
import App from "../../App";
function Header({ categories, categoriesArr, sortBy, SortbySomething }) {
  return (
    <nav className="Header">
      <h1>Jackets</h1>

      <div className="Sort">
        <div className="Sollection-sort">
          <label>Filter by category:</label>
          <select onChange={(e) => categoriesArr(e.target.value)}>
            {categories.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="Collection-sort">
          <label>Sort by:</label>
          <select onChange={(e) => SortbySomething(e.target.value)}>
            {sortBy.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
