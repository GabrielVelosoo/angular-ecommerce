import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { HomeComponent } from './features/home/components/home/home.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'my-account',
        loadChildren: () => import('./features/account/account.module')
          .then(m => m.AccountModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./features/produtos/produtos.module')
          .then(m => m.ProdutosModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module')
          .then(m => m.AdminModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];
