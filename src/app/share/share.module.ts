import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule
  ]
})
export class ShareModule { }
