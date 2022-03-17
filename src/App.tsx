import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import data from './data.json';

import DestinationType from './types/Destination';

import Destination from './components/Destination';
import NewDestination from './components/NewDestination';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center
`;

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem
`;

const App = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Header>
        <Typography sx={{ fontSize: '30px' }}>
          Destinations
        </Typography>
        <Button
          onClick={handleOpen}
          sx={{ color: '#fff', background: '#39e185'}}
        >
          + Ajouter
        </Button>
        {open && (
          <NewDestination close={handleClose} open={open} />
        )}
      </Header>
     
      <Cards>
        {data.map((destination: DestinationType) => (
          <Destination destination={destination} />
        ))}
      </Cards>
    </div>
  );
}

export default App;
