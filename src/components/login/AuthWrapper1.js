// material-ui
import { styled } from '@mui/material/styles';
import fondo from '../../assets/64240-barberia.jpg';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundImage: `url(${fondo})`,
   
    backgroundSize:'cover',
    minHeight: '100vh'
}));

export default AuthWrapper1;
