import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  AboutUsPage,
  AdminAuditPage,
  AdminOrdersPage,
  AdminProductsGridPage,
  CategoriesPage,
  CheckoutPage,
  ContactUsPage,
  CreateStaffPage,
  Dashboard,
  EditStaffPage,
  EditUserPage,
  ErrorPage,
  Home,
  LoginPage,
  ProductsPage,
  ProfilePage,
  RegisterPage,
  StaffDashboard,
  StaffGridPage,
  TrackOrderPage,
  UserOrderPage,
  ViewCart,
  SingleProductPage,
  ForgotPassword,
  ResetPassword,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { AdminProtectedRoute, ProtectedRoute, SharedLayout, StaffProtectedRoute, UsersProtectedRoute } from "./components";
import { useAuthCheck } from "./hooks/useAuthCheck";
const App = () => {
    useAuthCheck();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/authenticate/login" element={<LoginPage />} />
          <Route path="/authenticate/register" element={<RegisterPage />} />
          <Route path="/authenticate/forgotPassword" element={<ForgotPassword />} />
          <Route path="/authenticate/resetPassword" element={<ResetPassword />} />
          
          {/* Admin */}
          <Route element={<SharedLayout />}>
            {/* shared Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/shop/products" element={<ProductsPage />} />
          <Route path="/single/product/:id" element={<SingleProductPage />} />
          <Route path="/track-orders" element={<TrackOrderPage />} />
          
            {/* Admin */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <Dashboard />
                </AdminProtectedRoute>
              }
            />
              <Route
              path="/edit-user/:id"
              element={
                <AdminProtectedRoute>
                  <EditUserPage />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/create-staff"
              element={
                <AdminProtectedRoute>
                  <CreateStaffPage />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/edit-staff/:id"
              element={
                <AdminProtectedRoute>
                  <EditStaffPage />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/admin/staff"
              element={
                <AdminProtectedRoute>
                  <StaffGridPage />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/manage/products"
              element={
                <ProtectedRoute>
                  <AdminProductsGridPage />
                </ProtectedRoute>
              }
            />
             <Route
              path="/manage/categories"
              element={
                <ProtectedRoute>
                  <CategoriesPage />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/admin/orders"
              element={
                <AdminProtectedRoute>
                  <AdminOrdersPage />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/audit-trails"
              element={
                <AdminProtectedRoute>
                  <AdminAuditPage />
                </AdminProtectedRoute>
              }
            />
            {/* staff routes */}
            <Route
              path="/staff/orders"
              element={
                <StaffProtectedRoute>
                  <StaffDashboard />
                </StaffProtectedRoute>
              }
            />
             {/* user routes */}
             <Route
              path="/user/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            {/* user routes */}
            <Route
              path="/user/my-orders"
              element={
                <UsersProtectedRoute>
                  <UserOrderPage />
                </UsersProtectedRoute>
              }
            />
            
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </div>
  );
};

export default App;
