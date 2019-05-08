import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavHeaderComponent } from './component/nav-header/nav-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TestComponent } from './pages/test/test.component';

import { NgBootstrapModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionComponent } from './pages/collection/collection.component';
import { ItemListComponent } from './pages/collection/item-list/item-list.component';
import { ItemDetailComponent } from './pages/collection/item-detail/item-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    FooterComponent,
    TestComponent,
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ContactUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
