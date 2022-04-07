import logo from './logo.svg';
import './App.css';
import OutlinedCard from './components/weather/weather';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <OutlinedCard></OutlinedCard>
      </Grid>
      <Grid item xs={8}>
        <OutlinedCard></OutlinedCard>
      </Grid>
    </Grid>
  );
}

export default App;
