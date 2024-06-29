import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./feature/categories/pages/categories/categories.module').then(
        (m) => m.CategoriesPageModule,
      ),
  },
  {
    path: 'category/:slug',
    loadChildren: () =>
      import('./feature/categories/pages/category/category.module').then(
        (m) => m.CategoryPageModule,
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./feature/products/pages/products/products.module').then(
        (m) => m.ProductsPageModule,
      ),
  },
  {
    path: 'product/:slug',
    loadChildren: () =>
      import('./feature/products/pages/product/product.module').then(
        (m) => m.ProductPageModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./feature/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./feature/not-found/not-found.module').then(
        (m) => m.NotFoundPageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
