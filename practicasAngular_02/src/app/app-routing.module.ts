import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CinepolisComponent } from "./cinepolis/cinepolis/cinepolis.component";
import { MultiplicacionComponent } from "./multiplicacion/multiplicacion/multiplicacion.component";
import { TemperaturaComponent } from "./temperaturas/temperatura/temperatura.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cinepolis', component: CinepolisComponent },
    { path: 'multiplicaciones', component: MultiplicacionComponent },
    { path: 'temperatura', component: TemperaturaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
