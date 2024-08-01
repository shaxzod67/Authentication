import { useEffect, useState } from "react";
import { profil } from "./Server/authServer";
import { Link } from "react-router-dom";
function Profil() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baza = await profil();
        setData(baza);
        console.log(baza);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 m-auto">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            Name: {data?.name}
          </h2>
          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            Surname: {data?.surname}
          </h2>
          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            Username: {data?.username}
          </h2>
          <button  className="text-white bg-red-500 border-0 py-.4 px-5 mt-2 focus:outline-none hover:bg-red-600 rounded text-lg">
          <Link to="/edit">Edit</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
