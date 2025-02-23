import { Building2, MapPinned } from "lucide-react";

type FilterJobProps = {
  description: string;
  setDescription: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  fullTime: boolean;
  setFullTime: (value: boolean) => void;
  onSearch: () => void;
};

const FilterJob = ({
  description,
  setDescription,
  location,
  setLocation,
  fullTime,
  setFullTime,
  onSearch,
}: FilterJobProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah reload halaman (default form behavior)
      onSearch();
    }
  };

  return (
    <div className="flex items-center md:items-end flex-col md:flex-row gap-4">
      {/* Job Description */}
      <div className="flex-1 w-full">
        <label htmlFor="job-description" className="block font-bold mb-1">
          Job Description
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="job-description"
            placeholder="Filter by title, benefits, companies, expertise"
            className="w-full p-2 pl-12 border-2 bg-white border-gray-300 text-gray-600 rounded outline-0 hover:border-gray-500 focus:border-gray-500 transition-all duration-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Location */}
      <div className="flex-1 w-full">
        <label htmlFor="location" className="block font-bold mb-1">
          Location
        </label>
        <div className="relative">
          <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="location"
            placeholder="Filter by city, state, zip code or country"
            className="w-full p-2 pl-12 border-2 bg-white border-gray-300 text-gray-600 rounded outline-0 hover:border-gray-500 focus:border-gray-500 transition-all duration-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Checkbox and Button Filter */}
      <div className="flex justify-between items-center gap-x-5 md:w-fit w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="full-time"
            checked={fullTime}
            onChange={(e) => setFullTime(e.target.checked)}
          />
          <label htmlFor="full-time" className="font-semibold text-gray-700">
            Full Time Only
          </label>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterJob;
