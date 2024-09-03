import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>Oops!!!</p>
      <p>Something went wrong</p>
      <p>
        {error.status}:{error.statusText}
      </p>
      <p>{error.error.message}</p>
    </div>
  );
};
export default Error;
