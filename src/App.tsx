import React from 'react';
import { Box, Button, Text } from '@mantine/core';

const AddToFirstButton = () => {
  return <Button size='xl'>Add to first</Button>
}

const FirstValue = () => {
  return <Text size='xl' p={5}>
    First value
  </Text>
}

function App() {
  return (
    <Box p={10}>
      <Box sx={{
        display: 'flex',
      }}>
        <AddToFirstButton />
        <FirstValue />
      </Box>
    </Box>
  );
}

export default App;
