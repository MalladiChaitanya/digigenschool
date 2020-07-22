import { NgModule } from '@angular/core';
import {
  MatChipsModule
} from '@angular/material/chips';

import {
  MatAutocompleteModule
} from '@angular/material/autocomplete';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatCardModule
} from '@angular/material/card';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';

import {
  MatDatepickerModule
} from '@angular/material/datepicker';

import {
  MatDialogModule
} from '@angular/material/dialog';

import {
  MatExpansionModule
} from '@angular/material/expansion';

import {
  MatIconModule
} from '@angular/material/icon';

import {
  MatInputModule
} from '@angular/material/input';

import {
  MatMenuModule
} from '@angular/material/menu';

import {
  MatNativeDateModule
} from '@angular/material/core';

import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';

import {
  MatRadioModule
} from '@angular/material/radio';

import {
  MatSelectModule
} from '@angular/material/select';

import {
  MatSidenavModule
} from '@angular/material/sidenav';

import {
  MatSnackBarModule
} from '@angular/material/snack-bar';

import {
  MatTableModule
} from '@angular/material/table';

import {
  MatTabsModule
} from '@angular/material/tabs';

import {
  MatTooltipModule
} from '@angular/material/tooltip';

import {
  MatToolbarModule,
} from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatChipsModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatChipsModule
  ]
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule
    };
  }

}
