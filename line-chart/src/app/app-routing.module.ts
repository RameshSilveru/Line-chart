import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartcomponentComponent} from './linechartcomponent/linechart.component'
 
const routes: Routes = [  { path: '',
component : LineChartcomponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
