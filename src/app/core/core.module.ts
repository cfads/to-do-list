import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [
  ToolbarComponent
]

const MODULES = [
  MaterialModule,
  CommonModule,
  RouterModule,
  FlexLayoutModule
]


@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports:[MODULES,COMPONENTS]
})
export class CoreModule { }
