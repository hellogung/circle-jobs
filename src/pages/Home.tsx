import { useEffect, useState } from "react";
import ListJobs from "../components/ListJobs";
import { JobProps } from "../types/jobProps";
import { sliceArray } from "../utils/sliceArray";
import FilterJob from "../components/FilterJobs";
import Card from "../components/Card";
import api from "../utils/api";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [allJobs, setAllJobs] = useState<JobProps[]>([]); // Simpan semua data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks batch

  // State untuk filter
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [onSearch, setOnSearch] = useState(true);
  const [isSeacrhClicked, setIsSeacrhClicked] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (desc = "", loc = "", isFullTime = false) => {
    setOnSearch(true);
    try {
      const url = `/api/recruitment/positions.json?description=${desc}&location=${loc}&full_time=${isFullTime}`;
      const response = await api.get(url);
      const data = response.data;
      setAllJobs(data);
      setJobs(sliceArray(data, 0, 5));
      setCurrentIndex(5);
    } catch (error) {
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
      setOnSearch(false);
    }
  };

  const handleSearch = () => {
    setIsSeacrhClicked(true);
    fetchJobs(description, location, fullTime);
  };

  const loadMoreJobs = () => {
    const nextBatch = sliceArray(allJobs, currentIndex, currentIndex + 5); // Ambil batch berikutnya
    setJobs((prevJobs) => [...prevJobs, ...nextBatch]); // Tambahkan ke state jobs
    setCurrentIndex((prevIndex) => prevIndex + 5); // Update indeks batch berikutnya
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <h1>{error}</h1>;

  return (
    <>

    <Helmet>
      <title>Cari Kerja Mudah Dengan Circle Jobs</title>
    </Helmet>
      {/* Filter */}
      <FilterJob
        description={description}
        setDescription={setDescription}
        location={location}
        setLocation={setLocation}
        fullTime={fullTime}
        setFullTime={setFullTime}
        onSearch={handleSearch}
      />

      {/* List of Jobs */}
      {onSearch ? (
        <p>Loading ...</p>
      ) : (
        <Card>
          <h1 className="text-gray-700 font-bold text-3xl mb-5">
            {isSeacrhClicked && jobs.length > 0
              ? `Showing ${allJobs.length} jobs`
              : "Job List"}
          </h1>
          <ListJobs jobs={jobs} />
          {currentIndex < allJobs.length && ( // Cek apakah masih ada data yang bisa dimuat
            <div className="flex justify-center">
              <button
                onClick={loadMoreJobs}
                className="border-2 border-blue-500 hover:bg-gray-100 text-blue-500 px-4 py-2 rounded text-center transition duration-300 cursor-pointer"
              >
                More Jobs
              </button>
            </div>
          )}
        </Card>
      )}
    </>
  );
};

export default HomePage;
