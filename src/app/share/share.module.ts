import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    AngularEditorModule,
    FormsModule
  ]
})
export class ShareModule { }
