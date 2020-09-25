import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScreenShootTypesComponent} from "./pages/screen-shoot-types/screen-shoot-types.component";

const routes: Routes = [
  {path: '', component: ScreenShootTypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
