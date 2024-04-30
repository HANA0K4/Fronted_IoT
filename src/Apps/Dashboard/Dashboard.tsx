import Deposits from './Cards'; // Importa el componente Deposits aquí
import data from '../../datosJson/sensor.json'; // Importa el archivo JSON aquí
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Dashboard = () => {
    const { idnodo } = useParams();
    const infrarrojo = data.datosinfrarrojo.find(inf => inf.idnodo === parseInt(idnodo || ""));
    const peso = data.datospeso.find(p => p.idnodo === parseInt(idnodo || ""));
    const ultrasonido = data.datosultrasonido.find(u => u.idnodo === parseInt(idnodo || ""));
    return (
        <Container disableGutters className="bg-blue-200 flex flex-col mt-10 justify-center rounded-lg items-center max-w-3x1 pl-5 pr-5">
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                className='bg-white w-full rounded-lg mt-10 '>
                <Grid item className='rounded-lg'>
                    <Typography variant="h3">Dashboard </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h3">Nodo {idnodo}</Typography>
                </Grid>
            </Box>
            
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="baseline"
                margin={5}>
                {infrarrojo && (
                    <Grid item className='mb-1'>
                        <Deposits
                            id={infrarrojo.id}
                            idnodo={infrarrojo.idnodo}
                            value={infrarrojo.actividad}
                            sensor={'Infrarrojo'}
                            fechahora={infrarrojo.fechahora}
                        />
                    </Grid>
                )}
                {peso && (
                    <Grid item className='mb-1'>
                        <Deposits
                            id={peso.id}
                            idnodo={peso.idnodo}
                            value={peso.peso}
                            sensor={'Peso'}
                            fechahora={peso.fechahora.substr(0, 10)}
                        />
                    </Grid>
                )}
                {ultrasonido && (
                    <Grid item className='mb-1'>
                        <Deposits
                            id={ultrasonido.id}
                            idnodo={ultrasonido.idnodo}
                            value={ultrasonido.distancia}
                            sensor={'Ultrasonido'}
                            fechahora={ultrasonido.fechahora.substr(0, 10)}
                        />
                    </Grid>
                )}
            </Grid>

        </Container>
    );
}
export default Dashboard;