export default function ErrorLoadingMessage({ loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;
}
