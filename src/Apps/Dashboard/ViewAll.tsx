import Orders from "./Table";
import { useParams } from "react-router-dom";
import data from "../../datosJson/data.json";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import logo from "../../assets/golden.jpg";


const ViewAll = () => {
    const { idnodo } = useParams();
    const peso = data.datospeso.find(p => p.idnodo === parseInt(idnodo || ""));
    // ...rest of the code
    return (
        <Container className="bg-blue-200 flex flex-col justify-center rounded-lg items-center max-w-3x1">
            <Box className="bg-white flex flex-row justify-around items-center w-full rounded-lg mt-10 mb-10 ">
                <Box className="flex flex-col items-center">
                    <Typography variant='h3' >Información</Typography>
                    <Typography variant='h5' >Nodo {idnodo}</Typography>
                    <Typography variant='h5' >Datos almacenados</Typography>
                </Box>
                <Box>
                    <CardMedia className="rounded-xl"
                        component="img"
                        style={{ height: 100 }}
                        image={logo}
                    />
                </Box>
            </Box>
            <Box className="bg-white w-full mb-5">
                <Typography variant='h5' align="center">Datos almacenados Ultrasonido</Typography>
            </Box>
            <Container className="bg-white max-h-96 overflow-y-auto mb-5">
                {peso && (
                    <Orders />
                )}
            </Container>
            <Box className="bg-white w-full mb-5">
                <Typography variant='h5' align="center">Datos almacenados Infrarrojo</Typography>
            </Box>
            <Container className="bg-white max-h-96 overflow-y-auto">
                {peso && (
                    <Orders />
                )}
            </Container>
        </Container>
    );
}
export default ViewAll;