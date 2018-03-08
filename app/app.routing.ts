import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./pages/home/dashboard/dashboard.component";
import { ProductDetailComponent } from "./pages/home/product-detail/product-detail.component";

export const routes = [
    { path: "", redirectTo: "/home/(homepageoutlet:dashboard)", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent, children: [
        { path: "dashboard", component: DashboardComponent, outlet: "homepageoutlet" },
        { path: "product-detail", component: ProductDetailComponent, outlet: "homepageoutlet" }
    ]}
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  DashboardComponent,
  ProductDetailComponent
];