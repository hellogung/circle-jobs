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
  return (
    <div className="flex items-end gap-4">
      {/* Job Description */}
      <div className="flex-1">
        <label htmlFor="job-description" className="block font-bold mb-1">
          Job Description
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="job-description"
            placeholder="Filter by title, benefits, companies, expertise"
            className="w-full p-2 pl-12 border border-gray-300 rounded outline-0"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Location */}
      <div className="flex-1">
        <label htmlFor="location" className="block font-bold mb-1">
          Location
        </label>
        <div className="relative">
          <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="location"
            placeholder="Filter by city, state, zip code or country"
            className="w-full p-2 pl-12 border border-gray-300 rounded outline-0"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Checkbox and Button Filter */}
      <div className="flex items-center gap-x-5">
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
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterJob;
