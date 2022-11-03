import useFetch from "./useFetch";

export default function useSinglePageFetch(slug) {
  const { loading, error, data } = useFetch({ slug: slug });

  const page = data && data.data.attributes;
  return { page, loading, error };
}
