import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ItemListComponent } from './pages/collection/item-list/item-list.component';
import { ItemDetailComponent } from './pages/collection/item-detail/item-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full',
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'collection',
    component : CollectionComponent,
    children : [
      {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full',
      },
      {
        path : ':cat_id/furniture',
        component : ItemListComponent,
      },
      {
        path : ':cat_id/furniture/:it_id',
        component : ItemDetailComponent,
      },
    ]
  },
  {
    path : 'contactus',
    component : ContactUsComponent
  },
  {
    path : 'not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
