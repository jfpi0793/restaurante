import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AuthContextProvider from "./context/AuthContext";
import { DataProvider } from "./vista-mesa/data.context/data.state.context";
import { PrincipalConnect } from "./vista-principal-domicilio/principal";
import Crearcuenta from "../components/Crear-cuenta/Principal"
import Logini from "../components/login/Principal"
import { Domicilio } from "./vista-domicilio/principal";
import Pedidos from "./pedidos/principal";
import PedidosBe from "./PedidoBebida/pedido1"
import Carrito from "./orden/principal";
import { Dashboard } from "./dashboard/dashboardj";
import Informacion from "./informacion/informacion";
import PublicRoute from "./rout/PublicRoute";
import PrivateRoute from "./rout/PrivateRoute";
import Logout from "./login/logout";
import VistaMesa from "./vista-mesa/principal"
import Factura from "./vista-factura/principal";
import { Fisica } from "./Vista-fisica/principal";
import { LOGOUT, PRIVATE, PUBLIC } from "./router/path";
import PrincipalDashboard from "./vista-dashboard/Principal-Dashboard";
import CrearProducto from "./agregar-inventario/agregarInventario";
import { Inventario } from "./vista-inventario/principal";
import PedidoFisica from "./pedido-fisico/principal";
import BebidaFisica from "./bebida-fisica/principal";
import TodoFisica from "./Todo-fisica/todo";
import CarritoFisica from "./orden-fisica/principal";
import SelectFactura from "./select-factura/factura";
import RecibirOrden from "./vista-recibir-orden/principal";
import RegistroFactura from "./vista-registros-fact/principal";
import { DashboardBebida } from "./dashboardBebida/dashboard.bebida";
import { ListarClientes } from "./traer.cliente/traerCliente";
import { TraerPlatos } from "./traerPlatos/traer.platos";
import { TraerBebidas } from "./traer.Bebidas/traerBebida";
import FacturaDomicilio from "./factura-domicilio/principal";
import Imprimir from "./imprimir-pedido/principal";
import ImprimirDomicilio from "./imprimir-pedido-domicilio/principal";
import ActualizarUser from "./actualizarCliente/actualizar.cliente";
import ActualizarContraseña from "./VentanasModal/ActualizarContraseña";
import { ActualizarPlato } from "./actualizarPlato/actualizar.plato";
import { ActualizarBebida } from "./actualizar-bebida/actualizar.bebida";
import ActualizarImg from "./imgActualizar/img.actualizar";
import ActualizarImgBebida from "./img-actualizar-bebida/img.actualizar.bebida";
import Todo from "./Todo/todo";

export const Principal = () => {
    return(
    <>  
        <AuthContextProvider>
            <DataProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={PUBLIC} element = {<PublicRoute />}>
                            <Route element = {<Todo/>}> 
                                <Route index />
                                <Route path="/menu" element = {<PrincipalConnect/>}/>
                                <Route path="/pedido/:id" element = {<Pedidos />}></Route> 
                                <Route path="/pedidoBebida/:id" element = {<PedidosBe/>}></Route>
                                <Route path="/informacion" element = {<Informacion/>}></Route>
                            </Route>
                                <Route path="/ordenes" element = {<Carrito />}></Route> 
                                <Route path="/domicilio" element = {<Domicilio/>}></Route>
                                <Route path= "/mesa" element = {<VistaMesa/>}></Route>
                                <Route path="/login" element = {<Logini/>}></Route>     
                        </Route>
                        <Route path={PRIVATE} element = {<PrivateRoute/>}>
                            <Route element = {<PrincipalDashboard />}>
                                <Route index /> 
                                <Route path="register" element = {<Crearcuenta />} />
                                <Route path="dashboard" element = {<Dashboard />} />
                                <Route path="crearProducto" element = {<CrearProducto />} />
                                <Route path="crearBebida" element= {<DashboardBebida />} />
                                <Route path="inventario" element = {<Inventario/>}/>
                                <Route path="traerCliente" element= {<ListarClientes />}></Route>
                                <Route path="traerBebida" element= {<TraerBebidas />}></Route>
                                <Route path="traerPlato" element = {<TraerPlatos/>}></Route>
                                <Route path="actualizarCliente/:id" element={<ActualizarUser />}></Route>
                                <Route path="actualizarContraseña/:id" element={<ActualizarContraseña />}></Route>
                                <Route path="actualizarPlato/:id" element={<ActualizarPlato />}></Route>
                                <Route path="actualizarbebida/:id" element = {<ActualizarBebida/>}></Route>
                                <Route path="actualizarImgPlato/:id" element={<ActualizarImg />}></Route>
                                <Route path="actualizarImgbebida/:id" element = {<ActualizarImgBebida/>}></Route>
                            </Route>
                            <Route path={LOGOUT} element = {<Logout/>}/>
                            <Route path="todofisica" element = {<TodoFisica/>}>
                                <Route path="fisica" element = {<Fisica/>} />
                                <Route path="pedidofisica/:id" element = {<PedidoFisica/>} />
                                <Route path="bebidafisica/:id" element = {<BebidaFisica/>} />
                                <Route path="carritofisica" element = {<CarritoFisica/>} />
                                <Route path= "mesa" element = {<VistaMesa/>}></Route>
                                <Route path="factura/:di" element = {<Factura />}/>
                                <Route path="imprimir" element = {<Imprimir/>}></Route>
                                <Route path="imprimirdomicilio/:di" element = {<ImprimirDomicilio/>}></Route>
                                <Route path="facturadomicilio/:di" element = {<FacturaDomicilio />} />
                                <Route path="recibir-orden" element = {<RecibirOrden />}></Route>
                                <Route path="registro-fact" element = {<RegistroFactura/>}></Route>
                                <Route path="selectfactura" element = {<SelectFactura/>}></Route>
                            </Route>
                        </Route>   
                    </Routes>
                </BrowserRouter>
            </DataProvider>
        </AuthContextProvider>
    </>
    )
}