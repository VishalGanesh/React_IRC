// import { Item } from '@mui/material/ListItem'
// import '../Assests/css/Home.css'
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import Item from "@mui/material/MenuItem";


const Home = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid xs={2}>
          <Item>xs=2</Item>
        </Grid>
      </Grid>
    </Box>
        </>
    )
}

export default Home