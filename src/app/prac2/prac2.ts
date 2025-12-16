import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
// import { Second } from '../second/second';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { A11yModule } from "@angular/cdk/a11y";
// import { Authority, AUTHORITIES } from './mock-authorities';

@Component({
  selector: 'app-prac2',
  imports: [
    MatSlideToggleModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDialogModule,


    A11yModule
],
  templateUrl: './prac2.html',

  styleUrls: [
    './prac2.scss',
    './prac3.scss',
    './prac4.scss',
    './prac5.scss',
    "./prac6.scss",
  ]


})

export class Prac2 {


  selectedValue = '';
  isOpen = false;

  authorities = [
    "Austria (AT)",
    "Belgium (BE)",
    "Bulgaria (BG)",
    "Chile (CL)",
    "China (CN)",
    "Costa Rica (CR)"
  ];




  // Search state for authorities
  searchTerm: string = '';
  // start with no visible results; show only after user types
  filteredAuthorities: string[] = [];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.filteredAuthorities = [];
  }

  selectOption(option: string) {
    this.selectedValue = option;
    this.searchTerm = option;
    this.isOpen = false;
    // hide the search results after selection
    this.filteredAuthorities = [];
  }

  onSearch(term: string) {
    this.searchTerm = term;
    const lower = term.toLowerCase();

    if (!lower) {
      // when input is cleared, also hide the list
      this.filteredAuthorities = [];
      return;
    }

    this.filteredAuthorities = this.authorities.filter(a =>
      a.toLowerCase().includes(lower)
    );
  }




  //-------------------------------
  //  HIGHER BOTANICAL RANK TOGGLE
  //-------------------------------

  showHigherRank = false;

  // EXACT values used inside your *ngIf="isCardVisible(name, code)"
  higherRankCountries = [
    { name: 'Bulgaria', code: 'Bg' },
    {name:'Austria',code:'AT'},
    { name: 'Chile', code: 'CL' },
    // { name: 'Costa', code: 'Cr' },
    {name:'Belgium',code:'BE'},
    // { name: 'CostaRica', code: 'CR' },
    // { name: 'France', code: 'fr' }
  ];

  onHigherRankToggle(event: any) {
    this.showHigherRank = event.checked;
  }

  //----------------------------------
  //          CARD VISIBILITY LOGIC
  //----------------------------------
  isCardVisible(name: string, code: string): boolean {

    // 1️⃣ If toggle ON → show ONLY screenshot cards
    if (this.showHigherRank) {
      return this.higherRankCountries.some(
        c => c.name === name && c.code === code
      );
    }

    // 2️⃣ If toggle OFF → normal dropdown behavior
    if (!this.selectedValue) return true;

    return this.selectedValue === `${name} (${code})`;
  }

  //----------------------------------
  //   MORE DETAILS SECTION (YOURS)
  //----------------------------------
// For Protection section

showDetailedView = false;

toggleMoreDetails() {
  this.showDetailedView = !this.showDetailedView;
  console.log("Protection toggled:", this.showDetailedView);
}


// For DUS section
showDUSView = false;

toggleDUS() {
  this.showDUSView = !this.showDUSView;
  console.log("DUS toggled:", this.showDUSView);
}

showBUTiew = false;

togglebut() {
  this.showBUTiew = !this.showBUTiew;
  console.log("DUS toggled:", this.showBUTiew);
}

clearSearch() {
  this.searchTerm = '';
  this.selectedValue = '';
  this.filteredAuthorities = [];
  this.isOpen = false;
}



  //


activeTab: string = 'protection';

setTab(tab: string) {
  this.activeTab = tab;
}



}
