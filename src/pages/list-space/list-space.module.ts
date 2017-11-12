import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSpacePage } from './list-space';

@NgModule({
  declarations: [
    ListSpacePage,
  ],
  imports: [
    IonicPageModule.forChild(ListSpacePage),
  ],
})
export class ListSpacePageModule {}
