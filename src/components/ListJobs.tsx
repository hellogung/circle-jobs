import { Link } from "react-router";
import { timeAgo } from "../utils/timeAgo";
import { JobProps } from "../types/jobProps";

const ListJobs = ({ jobs }: { jobs: JobProps[] }) => {
  return (
    <>
      {jobs.map(
        ({ id, title, company, company_url, type, location, created_at }) => (
          <div className="flex justify-between border-t border-gray-300 py-4">
            <div className="flex-2">
              <Link to={`/detail/${id}`}>
                <h3 className="text-blue-500 font-bold text-xl">{title}</h3>
              </Link>
              <Link to={company_url} target="blank" className="text-lg text-gray-500">
                {company}
              </Link>{" "}
              - <strong className="text-lg text-green-600 font-bold">{type}</strong>
            </div>
            <div className="flex-1 text-right">
              <p className="text-lg text-gray-700 font-semibold">{location}</p>
              <p className="text-md text-gray-500">{timeAgo(created_at)}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ListJobs;
