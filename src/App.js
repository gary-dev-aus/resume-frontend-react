import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Homepage from "./routes/Root";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./routes/Portfolio";
import Project from "./routes/Project";
import Knowledge from "./routes/Knowledge";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<Project />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}
