import React from 'react';
import styled from '@emotion/styled';
import data from './data.json';

import DestinationType from './types/Destination';
import Destination from './Destination';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <Main>
      {data.map((destination: DestinationType) => (
        <Destination destination={destination} />
      ))}
    </Main>
  );
}

export default App;
