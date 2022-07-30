export default function Card({ people }) {
  return (
    <div className="p-6 m-6 bg-white shadow-lg shadow-blue-400/50 w-64">
      <div className="flex flex-col items-center">
        <h5 className="mb-0.5 text-lg font-medium text-gray-900 dark:text-white">{people.name}</h5>

        <div className="grid grid-cols-2 gap-1.5 place-content-center h-40">
          <div className="text-sm font-medium text-right">Birth year:</div>
          <div className="text-sm">{people.birthYear}</div>
          <div className="text-sm font-medium text-right">Gender:</div>
          <div className="text-sm">{people.gender}</div>
          <div className="text-sm font-medium text-right">Eye color:</div>
          <div className="text-sm">{people.eyeColor}</div>
          <div className="text-sm font-medium text-right">Hair color:</div>
          <div className="text-sm">{people.hairColor}</div>
        </div>
        
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button</button>
        <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <div className="grid grid-cols-2 gap-1.5 place-content-center h-8">
                <div className="text-sm font-medium text-right">Name:</div>
                <div className="text-sm">{people.homeworld.name}</div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-2 gap-1.5 place-content-center h-8">
                <div className="text-sm font-medium text-right">Population:</div>
                <div className="text-sm">{people.homeworld.population}</div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-2 gap-1.5 place-content-center h-8">
                <div className="text-sm font-medium text-right">Diameter:</div>
                <div className="text-sm">{people.homeworld.diameter}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
