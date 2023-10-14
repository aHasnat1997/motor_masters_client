export default {
    App: () => import('../App'),
    ClientLayout: () => import('../layouts/ClientLayout'),
    AuthLayout: () => import("../layouts/AuthLayout"),
    DashboardLayout: () => import("../layouts/DashboardLayout"),
    Home: () => import("../pages/Home/Home")
}
