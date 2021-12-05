import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';


// project imports
import AuthWrapper1 from '../login/AuthWrapper1';
import AuthCardWrapper from '../login/AuthCardWrapper';
import logo from '../../assets/Logo2.png'

import AuthRegister from './AuthRegister'


// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
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
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthRegister />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                ¿ya tienes una cuenta?
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

export default Register;
