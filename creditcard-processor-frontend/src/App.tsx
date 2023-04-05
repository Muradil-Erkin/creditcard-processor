import { Box } from '@mui/material';
import BackgroundImage from './assets/background.jpeg';
import { CreditCardValidationCard } from './components';

const App = () => {
  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        background: `linear-gradient(rgb(211,211,211,0.4), rgb(211,211,211,0.4)), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CreditCardValidationCard />
    </Box>
  );
};

export default App;
