import nodosData from '../datosJson/nodos.json'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react';
import { Link } from 'react-router-dom';

const renderNodos = () => {
    return (
        <React.Fragment>
            {nodosData.nodos.map((nodo) => (
                <ListItemButton  key={nodo.idnodo} component={Link} to={`/dashboard/${nodo.idnodo}`}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Nodo ${nodo.idnodo}`} />
                </ListItemButton>
            ))}
        </React.Fragment>
    );
};

export default renderNodos;
