import {Component, OnInit, Directive, Injectable} from '@angular/core';
import {NgClass, NgFor, FORM_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';

import {bootstrap} from '@angular/platform-browser-dynamic';

//import {NgMaterial} from '@angular2-material/core';
//import {NgButton} from '@angular2-material/button';

import {StatistiquesComponent} from './statistiques.component';
import {LeadsComponent} from './leads.component';
import {AlertMailsComponent} from './alertsmails.component';
import {UsersComponent} from './users.component';
import {AvisUsersComponent} from './avisusers.component';
import {ContenusComponent} from './contenus.component';

@Component({

    selector: 'my-app',
    template: `

        <div class="row main-row">

            <ul class="side-nav fixed velocity-transition" id="nav-mobile"><!-- [class.velocity-transition]="navVisible" -->

                <li class="no-padding">

                    <ul class="collapsible collapsible-accordion">

                        <li class="list-header"><span>TOUTES LES RUBRIQUES</span></li>

                        <li [class.active]="navItems[i]" *ngFor="let header of headers[0]; let i = index" class="bold">

                            <a (click)="toggleNav(i, navItems);" [class.active]="navItems[i]" class="collapsible-header">

                                <i class="material-icons">{{ header.icon }}</i>{{ header.link }}

                            </a>

                            <div [class.block]="navItems[i]" class="collapsible-body">

                                <ul>

                                    <li [class.active]="nav.active" *ngFor="let nav of navigation[i]">

                                        <a [routerLink]="nav.url" (click)="nav.active = true;">{{ nav.link }}</a>

                                    </li>

                                </ul>
                            </div>

                        </li>

                    </ul>

                </li>

            </ul>

            <router-outlet></router-outlet>

        </div><!-- row -->

    `,
    //templateUrl: 'app/partials/navigation.html',
    styleUrls: ['app/css/style.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
})

@Routes([
    {path: '/statistiques', component: StatistiquesComponent},
    {path: '/leads', component: LeadsComponent},
    {path: '/alertes_emails', component: AlertMailsComponent},
    {path: '/users', component: UsersComponent},
    {path: '/avis_users', component: AvisUsersComponent},
    {path: '/contenus', component: ContenusComponent},
    {path: '*', component: StatistiquesComponent}
])

export class AppComponent implements OnInit {

    navigation = NAVIGATION;
    headers = HEADERS;
    cNav = 0;
    userInfoVisible: boolean = false;
    searchVisible: boolean = false;
    navItems = [true, false, false, false];

    toggleNav(no, navItems) {

        for(var i = 0; i < navItems.length; i++) {
            (i == no) ? navItems[i] = true : navItems[i] = false;
        }

        this.cNav = no;

    }

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigate(['/statistiques']);
    }

}

var HEADERS = [

    [{
        "link": "Tableau de bord",
        "icon": "apps",
        "active": true
    }, {
        "link": "Analyse de la performance",
        "icon": "show_chart",
        "active": false
    }, {
        "link": "Analyse détailée",
        "icon": "multiline_chart",
        "active": false
    }, {
        "link": "Contenus",
        "icon": "collections",
        "active": false
    }]


];

var NAVIGATION = [

    [{
        "link": "Statistiques",
        "url": "/statistiques",
        "active": true
    }, {
        "link": "Leads",
        "url": "/leads",
        "active": false
    }, {
        "link": "Alertes Emails",
        "url": "/alertes_emails",
        "active": false
    }, {
        "link": "Utilisateurs",
        "url": "/users",
        "active": false
    }, {
        "link": "Avis Utilisateurs",
        "url": "/avis_users",
        "active": false
    }],

    [{
        "link": "Top 20 des ventes",
        "url": "#",
        "active": false
    }, {
        "link": "Top 20 des locations",
        "url": "#",
        "active": false
    }, {
        "link": "Top des conseillers",
        "url": "#",
        "active": false
    }, {
        "link": "Annonces",
        "url": "#",
        "active": false
    }, {
        "link": "Actions",
        "url": "#",
        "active": false
    }],

    [{
        "link": "Annonces",
        "url": "#",
        "active": false
    }, {
        "link": "Conseillers",
        "url": "#",
        "active": false
    }],

    [{
        "link": "Menu",
        "url": "#",
        "active": false
    }, {
        "link": "Contenus",
        "url": "/contenus",
        "active": false
    }, {
        "link": "Blocks",
        "url": "#",
        "active": false
    }, {
        "link": "Médias",
        "url": "#",
        "active": false
    }]

];