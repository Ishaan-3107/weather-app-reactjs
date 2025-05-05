// import './App.css'
import WeatherApp from "./WeatherApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WeatherApp />
      </ThemeProvider>
      
    </>
  );
}

export default App;
