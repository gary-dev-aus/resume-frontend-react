import Page from "../components/Page";
import { useQuery, gql } from "@apollo/client";

const HOMEPAGE = gql`
  query GetHomepage {
    homepage {
      data {
        attributes {
          heroMain
          heroSupport
        }
      }
    }
  }
`;

export default function Root() {
  const { data, loading, error } = useQuery(HOMEPAGE);
  const page = data && data.homepage.data.attributes;

  return (
    <Page title="homepage" loading={loading} error={error}>
      {page && (
        <>
          <p>{page.heroMain}</p>
          <p>{page.heroSupport}</p>
        </>
      )}
    </Page>
  );
}
