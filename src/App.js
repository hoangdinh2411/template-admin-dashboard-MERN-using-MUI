import React from 'react';
import {Box} from '@mui/material';
// customs Mui components by Styled
import {styled} from '@mui/material/styles';
import {ThemeContext} from './globalStyle';
import Routing from 'route/';

function App() {
  // get func toggle theme from Context
  const mode = React.useContext(ThemeContext);
  return (
    <Box maxWidth='xxl' sx={{px: 0, minHeight: '100vh'}}>
      <Routing />
    </Box>
  );
}

export default App;
