import Router, { useRouter } from "next/router";

const DynamicRoute = () => {
  const route = useRouter();
  return <>{route.query.id}</>;
};

export default DynamicRoute;
