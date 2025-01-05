import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashoardHomeComponent} from "./home/inner/dashoard-home/dashoard-home.component";
import {AboutComponent} from "./home/inner/about/about.component";
import {ProjectsComponent} from "./home/inner/projects/projects.component";


const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: DashoardHomeComponent},
      {path: "about", component: AboutComponent},
      {path: "projects", component: ProjectsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoiloHomeRoutingModule {
}
