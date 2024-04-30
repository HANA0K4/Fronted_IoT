import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../assets/golden.jpg';

export interface DepositsProps {
    id: number;
    idnodo: number;
    value: number;
    sensor: string;
    fechahora: string;
}

export default function AreaDeposits({ id, idnodo, value, sensor, fechahora }: DepositsProps) {
    return (
        <Link to={`${idnodo}`} style={{ textDecoration: 'none' }}>
            <Card className="mt-4 mr-4 max-h-min max-w-xl sm:max-w-80 p-4 rounded-xl">
                <CardActionArea>
                    <CardMedia className="rounded-xl"
                        component="img"
                        style={{ height: 180 }}
                        image={logo}
                    />
                    <Typography color={'primary'} align= 'center' variant='h5'>Datos {sensor}</Typography>
                    <Typography variant="body1" align='center'>
                        Id: {id}
                    </Typography>
                    <Typography variant="body2" align='center'>
                        Nodo: {idnodo}
                    </Typography>
                    <Typography variant="body2" align='center'>
                        value: {value}
                    </Typography>
                    <Typography variant="body2" align='center'>
                        Fecha: {fechahora.substr(0, 10)}
                    </Typography>
                </CardActionArea>
            </Card>
        </Link>
    );
}
