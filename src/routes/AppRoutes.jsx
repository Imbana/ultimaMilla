import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Analisis from "../pages/analisis/Analisis";
import BusinessPage from "../pages/businessPage/BusinessPage";
import CreateBusinessPage from "../pages/businessPage/CreateBusinessPage";
import EditBusinessPage from "../pages/businessPage/EditBusinessPage";
import ClassifierPage from "../pages/classifier/ClassifierPage";
import CreateClassifierPage from "../pages/classifier/CreateClassifierPage";
import EditClassifierPage from "../pages/classifier/EditClassifierPage";
import CreateCustomerPage from "../pages/customerPage/CreateCustomerPage";
import CustomerPage from "../pages/customerPage/CustomerPage";
import EditCustomerPage from "../pages/customerPage/EditCustomerPage";
import DataImportPage from "../pages/dataImportPage/DataImportPage";
import CreateDeliveryPage from "../pages/deliveryPage/CreateDelivaryPage";
import DeliveryPage from "../pages/deliveryPage/DelivaryPage";
import EditDeliveryPage from "../pages/deliveryPage/EditDelivaryPage";
import CreateDevicePage from "../pages/device/CreateDevicePage";
import DevicePage from "../pages/device/DevicePage";
import EditDevicePage from "../pages/device/EditDevicePage";
import Home from "../pages/homePage/Home";
import CreateTypeClassifierPage from "../pages/typeClassifierPage/CreateTypeClassifierPage";
import EditTypeClassifierPage from "../pages/typeClassifierPage/EditTypeClassifierPage";
import TypeClassifierPage from "../pages/typeClassifierPage/TypeClassifierPage";
import CreateUserPage from "../pages/userPage/CreateUserPage";
import EditUserPage from "../pages/userPage/EditUserPage";
import UserPage from "../pages/userPage/UserPage";
import CreateVehiclePage from "../pages/vehiclePage/CreateVehiclePage";
import EditVehiclePage from "../pages/vehiclePage/EditVehiclePage";
import VehiclePage from "../pages/vehiclePage/VehiclePage";
import "../style/createPageStyle.css"
import "../style/editPageStyle.css"
import "../style/pageStyle.css"
import "./appRouter.css"

const AppRoutes = () => {
   return (
      <BrowserRouter>
            <Topbar />
         <div className="containerLayout">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/analisis" element={<Analisis />} />
               <Route path="/dataImport" element={<DataImportPage />} />
               
               <Route path="/users" element={<UserPage />} />
               <Route path="/editUser/:id" element={<EditUserPage />} />
               <Route path="/createUser/" element={<CreateUserPage />} />
               
               <Route path="/business" element={<BusinessPage />} />
               <Route path="/editBusiness/:id" element={<EditBusinessPage />} />
               <Route path="/createBusiness" element={<CreateBusinessPage />} />
               
               <Route path="/classifiers" element={<ClassifierPage />} />
               <Route path="/editClassifier/:id" element={<EditClassifierPage />} />
               <Route path="/createClassifier" element={<CreateClassifierPage />} />
               
               <Route path="/typeClassifiers" element={< TypeClassifierPage/>} />
               <Route path="/editTypeClassifier/:id" element={<EditTypeClassifierPage />} />
               <Route path="/createTypeClassifier" element={<CreateTypeClassifierPage />} />
 
               <Route path="/vehicle" element={<VehiclePage />} />
               <Route path="/editVehicle/:id" element={<EditVehiclePage />} />
               <Route path="/createVehicle" element={<CreateVehiclePage />} />
 
               <Route path="/delivery" element={<DeliveryPage />} />
               <Route path="/editDelivery/:id" element={<EditDeliveryPage />} />
               <Route path="/createDelivery" element={<CreateDeliveryPage />} />
               
               <Route path="/customer" element={<CustomerPage/>} />
               <Route path="/editCustomer/:id" element={<EditCustomerPage/>} />
               <Route path="/createCustomer" element={<CreateCustomerPage/>} />
               
               <Route path="/delivery" element={<DeliveryPage />} />
               <Route path="/editDelivery/:id" element={<EditDeliveryPage />} />
               <Route path="/createDelivery" element={<CreateDeliveryPage />} />

               <Route path="/device" element={<DevicePage />} />
               <Route path="/editDevice/:id" element={<EditDevicePage />} />
               <Route path="/createDevice" element={<CreateDevicePage />} />

            </Routes>
         </div>
      </BrowserRouter>
   );
};

export default AppRoutes;
