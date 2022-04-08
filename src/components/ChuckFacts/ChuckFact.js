import React, {useEffect,useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import axios from 'axios';
export default function MediaControlCard() {
  const theme = useTheme();
  const [fact,setFact] = useState(undefined);
  const newFact = () => {
      console.log("I was pressed");
      requestNewFact();
  }

  const requestNewFact = () => {
    axios.get("http://localhost:8080/chuckfacts")
    .then(response => {
        setFact(response.data)
    });
  }

  useEffect(()=> {
    requestNewFact();
  },[]);

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Chuck Facts
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {fact?.value}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

          <IconButton aria-label="play/pause" onClick={newFact}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>

        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://m.media-amazon.com/images/I/71BK270MBVL._SY445_.gif"
        alt="Live from space album cover"
      />
    </Card>
  );
}
