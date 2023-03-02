import { Button } from "@mui/material";
import React from "react";

import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <p>
        CoinMarketCap
        <Button variant="contained" color="primary">
          Click
        </Button>
      </p>
    </Layout>
  );
}

export default App;
