import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlexBoxComponent} from './flex-box/flex-box.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserComponent,
    // children: [
    //   { path: 'user-home-page', component: UserHomePageComponent },
    //   { path: 'user-password', component: UserPasswordComponent },
    //   { path: 'user-project-page', component: UserProjectPageComponent },
    //   { path: 'user-project-detail/:projectId', component: UserProjectDetailComponent },
    //   { path: 'user-project-attachment-view/:attachmentId/:projectId', component: UserProjectAttachmentViewComponent },
    //   { path: 'user-project-building-detail/:buildingId/:projectId', component: UserProjectBuildingDetailComponent },
    //   { path: 'user-project-building-floor-detail/:floorId/:buildingId/:projectId', component: UserProjectBuildingFloorDetailComponent },
    //   { path: 'user-building-fixture-detail/:fixtureId/:buildingId/:projectId', component: UserBuildingFixtureDetailComponent },
    //   { path: 'user-project-building-all-floors/:buildingId/:projectId', component: UserProjectBuildingAllFloorsComponent },
    // ]
  // },
  { path: 'flex-box', component: FlexBoxComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
