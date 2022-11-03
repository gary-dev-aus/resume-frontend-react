import Page from "../components/Page";
import { useQuery, gql } from "@apollo/client";

const KNOWLEDGE = gql`
  query GetKnowledge {
    knowledges {
      data {
        id
        attributes {
          title
          score
          logo {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                url
              }
            }
          }
          type
          details
        }
      }
    }
  }
`;

export default function Knowledge() {
  const { data, loading, error } = useQuery(KNOWLEDGE);

  const knowledges = data && data.knowledges.data;
  const knowledgeTypes = knowledges && [
    ...new Set(knowledges.map((knowledge) => knowledge.attributes.type)),
  ];

  return (
    <div>
      <Page title="knowledge" loading={loading} error={error}>
        <p>knowledge page contents</p>
        {knowledgeTypes &&
          knowledgeTypes.map((knowledgeType) => (
            <div key={knowledgeType}>
              <h2>{knowledgeType}</h2>
              <ul>
                {knowledges.map(
                  (knowledge) =>
                    knowledge.attributes.type === knowledgeType && (
                      <li key={knowledge.id}>
                        <div>
                          <p> {knowledge.attributes.score}</p>
                          <h3>{knowledge.attributes.title}</h3>
                          <img
                            src={`localhost:1337${knowledge.attributes.logo.data.attributes.url}`}
                            width="90"
                            height="90"
                            alt={
                              knowledge.attributes.logo.data.attributes
                                .alternativeText
                            }
                          />
                        </div>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
      </Page>
    </div>
  );
}
