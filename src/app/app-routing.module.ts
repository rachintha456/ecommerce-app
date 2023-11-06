import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'loading', pathMatch:'full'},
  {path:'loading',
    loadChildren:()=>import('./screen/loading/loading.module').then(m=>m.LoadingPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./screen/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screen/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./screen/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./screen/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./screen/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./screen/place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./screen/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./screen/new-product/new-product.module').then( m => m.NewProductPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
