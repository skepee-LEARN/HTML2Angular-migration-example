import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list.component';
import { CardInfoComponent } from './card-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CardStatisticsComponent } from './card-statistics.component';
import { CardServicesComponent } from './card-services.component';
import { CardDetailComponent } from './card-detail.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserFriends, faCheck,faPlane,faCalendarPlus, faCalendarCheck, faShip, faUtensils, faCameraRetro, faBullhorn, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import { CardBookingComponent } from './card-booking.component';
import { CardRoundtripComponent } from './card-roundtrip.component';
import { CardBreaksfastComponent } from './card-breaksfast.component';
import { CardVisitingComponent } from './card-visiting.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardInfoComponent,
    CardStatisticsComponent,
    CardServicesComponent,
    CardDetailComponent,
    CardBookingComponent,
    CardRoundtripComponent,
    CardBreaksfastComponent,
    CardVisitingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private library: FaIconLibrary)
  {
    library.addIcons(faUserFriends, faCheck, faPlane, faCalendarPlus, faCalendarCheck, faShip, faUtensils, faCameraRetro,faBullhorn, faCheckSquare);
  }



}
