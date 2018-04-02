import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { BrowseComponent } from './browse/browse.component';
import { GenreComponent } from './genre/genre.component';
import { DiscoverComponent } from './discover/discover.component';
import { CardComponent } from './card/card.component';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtistService } from './artist.service';
import { AlbumComponent } from './album/album.component';
import { LoadMusic } from './loadMusic.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [NavComponent,
                 DashboardRootComponent,
                 BrowseComponent,
                 GenreComponent,
                 DiscoverComponent,
                 CardComponent,
                 ChartsComponent,
                 ProfileComponent,
                 AlbumComponent],
  providers: [ArtistService,
              LoadMusic]
})
export class DashboardModule { }
