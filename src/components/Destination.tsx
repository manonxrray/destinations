import React from 'react';
import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Switch,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider
} from '@mui/material';

import DestinationType from '../types/Destination';

type DestinationProps = {
  destination: DestinationType
};

const CardContainer = styled.div`
  margin: 2rem;
`;

const Destination = ({ destination }: DestinationProps): JSX.Element => {
  return (
    <CardContainer>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="150"
          image={destination.image}
          alt={destination.city}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {destination.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {destination.address}
            </Typography>
          </div>
          <Switch />
        </CardContent>
        <Divider />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableRow>
              <TableCell align="center">{destination.citizens}</TableCell>
              <TableCell align="center">{destination.hotels}</TableCell>
              <TableCell align="center">{destination.income}€</TableCell>
              <TableCell align="center">{destination.area}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Habitants</TableCell>
              <TableCell align="center">Hôtels</TableCell>
              <TableCell align="center">Revenu Moy.</TableCell>
              <TableCell align="center">km²</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Card>
    </CardContainer>
  );
}

export default Destination;
