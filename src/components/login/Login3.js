import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';

import AuthLogin from './AuthLogin';
import logo from '../../assets/Logo2.png'
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const useStyles =makeStyles((theme) => ({
        root:{
          flexGrow: 1,
          marginBottom:"7rem",
        },
        appBar:{
          backgroundColor:"grey !important",
          marginBottom:""
        },
        Grow:{
          flexGrow:1,
        },
        Button:{
          marginLeft: theme.spacing(2),
        },
        Image:{
          marginRight:"10px",
          height:"4rem ",
          width:"4rem"
        },
        IconButton:{
          backgroundColor:"#ffff ",
          color:"#ffff !important"
        }
      }));
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const estilos=useStyles();

    return (
        <AuthWrapper1 marginTop="5rem">
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 1 }}>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="open drawer"
                                                
                                            >
                                                <img src={logo} className={estilos.Image} />
                                            </IconButton>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>

                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        Inicia sesion para continuar
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/pages/register/register3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
