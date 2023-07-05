import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import axios from "axios";
import s from "./Profile.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Compras from "./Compras/Compras";
import MisDatos from "./MisDatos/MisDatos";

// ############## Aqui sera la Dashboard del Usuario ################

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          // Estilos para las tabs en general
        },
        indicator: {
          // Estilos para el indicador de la opción seleccionada
          display: "none", // Ocultar el indicador
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // Estilos para las opciones sin seleccionar
          color: "#FFFFFF", // Color blanco
          "&.Mui-selected": {
            // Estilos para la opción seleccionada
            color: "#FF0000", // Color rojo
            borderRight: "none",
          },
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { user, isAuthenticated } = useAuth0();

  console.log(user);

  return (
    isAuthenticated && (
      <div className={s.fondo}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              height: 680,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                width: "211px",
                borderRight: 1,
                borderColor: "divider",
                background: "black",
                paddingTop: "340px",
              }}
            >
              <Tab label="Compras" {...a11yProps(0)} />
              <Tab label="Mis datos" {...a11yProps(1)} />
            </Tabs>
            <div className={s.nombreUsuario}>
              <img
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                alt=""
                className={s.avatar}
              />
              <h4>Nombre Apellido</h4>
              <h5>Rol: Usuario</h5>
            </div>
            <TabPanel value={value} index={0} className={s.caja1}>
              <div className={s.cajaInterna1}>
                <Compras></Compras>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} className={s.datos}>
              <MisDatos></MisDatos>
            </TabPanel>
          </Box>
        </ThemeProvider>
      </div>
    )
  );
}
