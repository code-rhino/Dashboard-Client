import logo from './logo.svg';
import './App.css';
import Weather from "./components/weather/Weather";
import { Grid } from '@mui/material';
import ChuckFact from './components/ChuckFacts/ChuckFact';
function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Weather></Weather>
      </Grid>
      <Grid item xs={4}>
        <ChuckFact></ChuckFact>
      </Grid>
    </Grid>
    
  );
}

export default App;
