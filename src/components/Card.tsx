type CardProps = {
  children: React.ReactNode;
  padding?: string;
  className?: string;
};

const Card = ({ children, padding = "p-5", className = "" }: CardProps) => {
  return (
    <>
      <div
        className={`border-4 border-gray-200 rounded-lg my-5 ${padding} ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
