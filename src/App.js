import { useState } from "react";
import FunnelPage from "./pages/funnelPage";
import PropsPage from "./pages/propsPage";
import QueryPage, { OtherSession } from "./pages/queryPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [state, setState] = useState("funnel");

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <button onClick={() => setState("props")}>Props</button>
        <button onClick={() => setState("query")}>Query</button>
        <button onClick={() => setState("funnel")}>Funnel</button>
      </div>
      <div>
        {state === "props" && <PropsPage />}
        {state === "query" && (
          <QueryClientProvider client={queryClient}>
            <QueryPage />
            <OtherSession />
          </QueryClientProvider>
        )}
        {state === "funnel" && <FunnelPage />}
        {/*  */}
      </div>
    </div>
  );
}

export default App;
