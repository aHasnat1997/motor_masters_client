export default {
    App: () => import('../App'),
    ClientLayout: () => import('../layouts/ClientLayout'),
    AuthLayout: () => import('../layouts/AuthLayout'),
    DashboardLayout: () => import('../layouts/DashboardLayout'),
    Home: () => import('../pages/Home/Home'),
    AllServices: () => import('../pages/ServicesPage/AllServices'),
    SingleServices: () => import('../pages/ServicesPage/SingleServices')
}