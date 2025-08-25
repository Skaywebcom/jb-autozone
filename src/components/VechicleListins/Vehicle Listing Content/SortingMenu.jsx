import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const sortingList = [
  {
    listName: "Last Added",
    value: "lastAdded"
  },
  {
    listName: "Price: Low to High",
    value: "priceAsc"
  },
  {
    listName: "Price: High to Low",
    value: "priceDesc"
  },
  {
    listName: "Name: A to Z",
    value: "nameAsc"
  },
  {
    listName: "Name: Z to A",
    value: "nameDesc"
  },
  {
    listName: "Year: Newest First",
    value: "yearNew"
  },
  {
    listName: "Year: Oldest First",
    value: "yearOld"
  },
];

function SortingMenu({ onSortChange, currentSort = "lastAdded", totalResults = 0 }) {
  const [sortName, setSortName] = useState(
    sortingList.find(item => item.value === currentSort)?.listName || "Last Added"
  );
  const [isSortMenuVisible, setSortMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSortMenuVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Update sort name when currentSort prop changes
  useEffect(() => {
    const currentItem = sortingList.find(item => item.value === currentSort);
    if (currentItem) {
      setSortName(currentItem.listName);
    }
  }, [currentSort]);

  const toggleSortMenu = () => {
    setSortMenuVisible(!isSortMenuVisible);
  };

  const handleSortItemClick = (item) => {
    setSortName(item.listName);
    setSortMenuVisible(false);
    onSortChange(item.value);
  };

  return (
    <div className="sorting-container flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
      {/* Results count */}
      <div className="text-sm text-gray-600 font-medium">
        {totalResults > 0 ? `Showing ${totalResults} vehicles` : 'No vehicles found'}
      </div>

      {/* Sorting dropdown */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</span>
        <div
          className="sorting-menu-container relative min-w-[200px]"
          ref={menuRef}
        >
          <button
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm"
            onClick={toggleSortMenu}
            aria-expanded={isSortMenuVisible}
            aria-haspopup="listbox"
          >
            <span className="truncate">{sortName}</span>
            <ChevronDown 
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ml-2 flex-shrink-0 ${
                isSortMenuVisible ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {isSortMenuVisible && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              <ul className="py-1" role="listbox">
                {sortingList.map((list, index) => (
                  <li key={index} role="option">
                    <button
                      onClick={() => handleSortItemClick(list)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 ${
                        list.value === currentSort 
                          ? 'bg-red-100 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                      tabIndex={0}
                    >
                      {list.listName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SortingMenu;