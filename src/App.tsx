import MainLayout from "./layouts/MainLayout";
import { Button } from "@mui/material";

function App() {
  return (
    <MainLayout>
      <div className="App">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </MainLayout>
  );
}

export default App;
