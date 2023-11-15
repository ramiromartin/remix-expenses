import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

function Error({ title, children }) {
  return (
    <div className="error">
      <div className="icon">
        <ExclamationCircleIcon />
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Error;
