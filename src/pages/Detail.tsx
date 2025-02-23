import { useParams } from "react-router";

const DetailPage = () => {
  const { slug } = useParams();
  return (
    <>
      <h1>Detail Page</h1>
      <p>{slug}</p>
    </>
  );
};

export default DetailPage;
