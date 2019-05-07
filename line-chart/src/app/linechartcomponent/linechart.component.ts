import { Component } from '@angular/core';
import {Papa} from 'ngx-papaparse'
const letters = '0123456789ABCDEF';
@Component({
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})

export class LineChartcomponentComponent {
  

  constructor(private papa : Papa) { }

view: any[] = [700, 700];
public showErrors : boolean = false;
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Year';
showYAxisLabel = true;
yAxisLabel = 'Score';
timeline = true;

autoScale = true;
public dataToChart : any[] = [];

colorScheme = {
  domain: []
};
  

public onFileChange(event){
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    this.parseData(file);
 
  }
}

private getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

public parseData(file){
 var self = this;
  this.papa.parse(file, {
    complete: function(results) {
      self.showErrors = false;
      
      if(results.errors && results.errors.length > 0){
        self.showErrors = true;
        self.dataToChart = [];
        return;
      }

      results.data.map(function(item:Array<any>){
        var model = {name:"",series : []};
        item.map(function(value,index){
        console.log(value,index)
              if(index == 0){
                model.name = value;
              }else{
                let data: Array<String> = value.split("|");
                if(data.length <2){
                  self.showErrors = true;
                  self.dataToChart = [];
                  return;
                }
                model.series.push({name : data[0],value : data[1]});
              }
          });

          self.colorScheme.domain.push(self.getRandomColor());
          self.dataToChart.push(model);
      })

      if(self.dataToChart.length == 0){
        self.showErrors = true;
      }
    }
  });
}
}
