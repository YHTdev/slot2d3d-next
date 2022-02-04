export const CardHeader = ({ className, children }) => {
  return (
    <header
      className={`${
        className || ""
      } flex items-center px-5 py-4 border-b border-slate-100`}>
      {children}
    </header>
  );
};

export const CardBody = ({ className, children }) => {
  return <div className={`${className || ""} px-5 py-4`}>{children}</div>;
};

const Card = ({ children, className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex flex-col bg-white border rounded-sm shadow-lg border-slate-200`}>
      {children}
    </div>
  );
};

export default Card;
