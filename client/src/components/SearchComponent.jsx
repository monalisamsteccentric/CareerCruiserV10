
import { useDispatch } from "react-redux";
import { fetchData } from "../store/store";


function SearchComponent() {
  const dispatch = useDispatch();

  const handleSearch = () => {   
      dispatch(fetchData());
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchComponent;