import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home-module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    imports:[CommonModule,PagesRoutingModule,HomeModule]
    ,declarations:[PagesComponent]
})
export class PagesModule{}