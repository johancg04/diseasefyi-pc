import { Component } from '@angular/core';
import {MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {MatToolbar} from '@angular/material/toolbar';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    LanguageSwitcher,
    MatToolbar,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
