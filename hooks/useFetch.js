import { useQuery } from '@tanstack/react-query';

const useFetch = (queryKey, endpoint) => {
  const { data, isFetching, isError } = useQuery({
    queryKey,
    queryFn: async () => {
      const requestData = await fetch(`/api/${endpoint}`);
      const responseData = await requestData.json();
      if (responseData.code === 401) {
        return Promise.reject(new Error(responseData.message));
      }
      return responseData;
    },
  });

  return [data, isFetching, isError];
};

export default useFetch;
