System.register(['@angular/core', '@angular/router', './statistiques.component', './leads.component', './alertsmails.component', './users.component', './avisusers.component', './contenus.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, statistiques_component_1, leads_component_1, alertsmails_component_1, users_component_1, avisusers_component_1, contenus_component_1;
    var AppComponent, HEADERS, NAVIGATION;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (statistiques_component_1_1) {
                statistiques_component_1 = statistiques_component_1_1;
            },
            function (leads_component_1_1) {
                leads_component_1 = leads_component_1_1;
            },
            function (alertsmails_component_1_1) {
                alertsmails_component_1 = alertsmails_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (avisusers_component_1_1) {
                avisusers_component_1 = avisusers_component_1_1;
            },
            function (contenus_component_1_1) {
                contenus_component_1 = contenus_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.navigation = NAVIGATION;
                    this.headers = HEADERS;
                    this.cNav = 0;
                    this.userInfoVisible = false;
                    this.searchVisible = false;
                    this.navItems = [true, false, false, false];
                }
                AppComponent.prototype.toggleNav = function (no, navItems) {
                    for (var i = 0; i < navItems.length; i++) {
                        (i == no) ? navItems[i] = true : navItems[i] = false;
                    }
                    this.cNav = no;
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/statistiques']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <div class=\"row main-row\">\n\n            <ul class=\"side-nav fixed velocity-transition\" id=\"nav-mobile\"><!-- [class.velocity-transition]=\"navVisible\" -->\n\n                <li class=\"no-padding\">\n\n                    <ul class=\"collapsible collapsible-accordion\">\n\n                        <li class=\"list-header\"><span>TOUTES LES RUBRIQUES</span></li>\n\n                        <li [class.active]=\"navItems[i]\" *ngFor=\"let header of headers[0]; let i = index\" class=\"bold\">\n\n                            <a (click)=\"toggleNav(i, navItems);\" [class.active]=\"navItems[i]\" class=\"collapsible-header\">\n\n                                <i class=\"material-icons\">{{ header.icon }}</i>{{ header.link }}\n\n                            </a>\n\n                            <div [class.block]=\"navItems[i]\" class=\"collapsible-body\">\n\n                                <ul>\n\n                                    <li [class.active]=\"nav.active\" *ngFor=\"let nav of navigation[i]\">\n\n                                        <a [routerLink]=\"nav.url\" (click)=\"nav.active = true;\">{{ nav.link }}</a>\n\n                                    </li>\n\n                                </ul>\n                            </div>\n\n                        </li>\n\n                    </ul>\n\n                </li>\n\n            </ul>\n\n            <router-outlet></router-outlet>\n\n        </div><!-- row -->\n\n    ",
                        //templateUrl: 'app/partials/navigation.html',
                        styleUrls: ['app/css/style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                    }),
                    router_1.Routes([
                        { path: '/statistiques', component: statistiques_component_1.StatistiquesComponent },
                        { path: '/leads', component: leads_component_1.LeadsComponent },
                        { path: '/alertes_emails', component: alertsmails_component_1.AlertMailsComponent },
                        { path: '/users', component: users_component_1.UsersComponent },
                        { path: '/avis_users', component: avisusers_component_1.AvisUsersComponent },
                        { path: '/contenus', component: contenus_component_1.ContenusComponent },
                        { path: '*', component: statistiques_component_1.StatistiquesComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEADERS = [
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
            NAVIGATION = [
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
        }
    }
});

//# sourceMappingURL=app.component.js.map
