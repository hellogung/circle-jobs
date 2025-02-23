import { Link, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { JobDetailProps } from "../types/jobDetailProps";
import api from "../utils/api";
import "../assets/detail.css";
import { ExternalLinkIcon, ArrowLeft } from "lucide-react";
import { timeAgo } from "../utils/timeAgo";
import withAuth from "../components/WithAuth";

const DetailPage = () => {
  const { id } = useParams();

  // State
  const [detailJob, setDetailJobs] = useState<JobDetailProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) fetchDetailJobs(id);
  }, [id]);

  const fetchDetailJobs = async (id: string) => {
    if (!id) throw new Error("ID wajib diisi");

    try {
      setLoading(true);
      const url = `/api/recruitment/positions/${id}`;
      const response = await api.get(url);
      const data = response.data;
      setDetailJobs(data);
    } catch (error) {
      setError("Failed to load detail job");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  const {
    type,
    location,
    title,
    description,
    company,
    company_logo,
    company_url,
    created_at,
    how_to_apply,
  } = detailJob || {};

  const HTMLDescription = ({
    description,
    className = "",
  }: {
    description: string;
    className?: string;
  }) => {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
  };

  return (
    <>
      <Helmet>
        <title>Circle Jobs</title>
      </Helmet>
      {/* Link Navigate */}
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
        className="text-lg font-bold text-gray-500 flex items-center gap-x-2 hover:underline"
      >
        <ArrowLeft />
        Back
      </Link>

      {/* Card Detail */}
      <Card>
        <div className="border-b border-gray-400 pb-5">
          <p className="text-gray-500">
            {type} / {location}
          </p>
          <h1 className="text-gray-700 text-3xl md:text-4xl font-bold">
            {title}
          </h1>
          <small className="text-gray-500 text-sm">
            {timeAgo(created_at as string)}
          </small>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 py-5">
          <div id="content" className="w-full md:flex-4">
            <HTMLDescription description={description as string} />
          </div>
          <div className="w-full md:flex-2 top-5">
            <Card>
              <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
                <p className="font-bold text-lg flex-3">{company}</p>
                <p className="flex-1 rounded bg-gray-100 text-blue-500 text-sm px-3 py-1">
                  1 other job
                </p>
              </div>
              <img
                src={company_logo}
                className="aspect-video bg-gray-300 text-center rounded-xl my-3"
                alt={company}
                onError={(e) =>
                  (e.currentTarget.src = "/placeholder-image.webp")
                }
                title={company}
                loading="lazy"
              />
              <div className="flex items-center gap-x-2">
                <ExternalLinkIcon className="w-3.5" />
                <Link
                  to={company_url as string}
                  className="text-blue-500 underline"
                  target="blank"
                >
                  {company_url}
                </Link>
              </div>
            </Card>
            <Card>
              <p className="border-b-2 border-gray-300 pb-2 font-bold text-sm">
                How to Apply
              </p>
              <div id="how-to-apply">
                <HTMLDescription
                  className="pt-3 text-sm max-w-sm break-words"
                  description={how_to_apply as string}
                />
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
};

export default withAuth(DetailPage);
