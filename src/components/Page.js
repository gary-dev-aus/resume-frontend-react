import ErrorLoadingMessage from "./ErrorLoadingMessage";

export default function Page({ loading, error, title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <ErrorLoadingMessage loading={loading} error={error} />
      {children}
    </div>
  );
}
