import { useQuery, useQueryClient } from "@tanstack/react-query";

const Children = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["dummy"]);

  console.log("###### CHILDREN ######");
  console.log(data);

  return (
    <>
      {/* ... */}
      {/* ... */}
    </>
  );
};

const dummyQuery = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
};

const DUMMY_QUERY_KEY = "dummy";

const QueryPage = () => {
  const { data } = useQuery({
    queryKey: [DUMMY_QUERY_KEY],
    queryFn: dummyQuery,
  });

  console.log("###### PARENT ######");
  console.log(data);

  return <Children />;
};

export default QueryPage;
