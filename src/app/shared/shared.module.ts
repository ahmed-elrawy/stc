import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*----------------------   Imports  ----------------------*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import * as Shared from './index';
import {RouterModule} from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ...Shared.pipes,
    ...Shared.components,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ...Shared.pipes,
    ...Shared.components
  ]
})
export class SharedModule {
}
