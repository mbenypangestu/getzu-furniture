import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from './shared/service/category/category.service';
import { FurnitureService } from './shared/service/furniture/furniture.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavHeaderComponent } from './component/nav-header/nav-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TestComponent } from './pages/test/test.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ItemListComponent } from './pages/collection/item-list/item-list.component';
import { ItemDetailComponent } from './pages/collection/item-detail/item-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ShortenPipe } from './shared/pipe/shorten.pipe';

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
    PageNotFoundComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    CategoryService,
    FurnitureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
