import { CommonModule } from '@angular/common';
import { Component, OnInit,EventEmitter, Input  } from '@angular/core';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-configuration-data-source-selection',
  templateUrl: './configuration-data-source-selection.component.html',
  styleUrl: './configuration-data-source-selection.component.scss'
})
export class ConfigurationDataSourceSelectionComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    public app_service:AppService
  ) { }


  obj_configuration_setting:any;

  @Input('child_data') set child_data({ obj_configuration_setting }) {
    this.obj_configuration_setting = obj_configuration_setting;
  }

  ngOnInit() {
   this.getAllWidjets();
  }
 
  ngOnDestroy() {
  //  this.disposeAllSubscriptions();
  
  }

  subscriptions: Subscription[] = [];
 
  data_Source_widjets:any = null;
  selectedServices: { [key: string]: string[] } = {};
  Application_dataSource:any = null;
  User_Behaviour_Analytics_dataSource:any = null;
  System_Diagnostics_dataSource:any = null;
  Test_Automation_Analysis:any = null;

  


  getAllApplications(){
 debugger;
//var ajax_url =  environment.BASE_OPKEY_URL+ "ExternalApplicationSettings/GetApplicationAndSettings";
var ajax_url = environment.BASE_OPKEY_URL+"ExternalApplicationSettings/GetApplications"
 
this.app_service.make_get_server_call(ajax_url, {})
  .subscribe({
   
    next: (result: any) => {
      this.Application_dataSource = result;

    },
    error: (error: any) => {
     
      console.warn(error);
    },
    complete: () => {
      console.log("Completed");
    }
  });
}

  getAllWidjets(){
  window.loadingStart("#div-datasource-slection", "Please wait");
  var ajax_url =   "https://myqlm.preprod.opkeyone.com/OpkeyObiqServerApi/OpkeyTraceIAAnalyticsApi/ObiqAgentServerTraceController/getDataSourceGroupList";
  this.app_service.make_get_server_call(ajax_url, {})
  .subscribe({
   
    next: (result: any) => {
      window.loadingStop("#div-datasource-slection");
        result.forEach((widjet: any) => {
          if (widjet.name === "ERP Analytics") {
           
            this.getAllApplications();
          }
          if (widjet.name === "User Behaviour Analytics") {    
            this.getUserBehaviourAnalytics();
          }
          if (widjet.name ==="Test Automation Analysis"){

          }
          if( widjet.name ==="System Diagnostics"){

          }
        });
      this.data_Source_widjets = result;
    },
    error: (error: any) => {
      window.loadingStop("#div-datasource-slection");
      console.warn(error);
    },
    complete: () => {
      console.log("Completed");
    }
  });
 
  console.log(this.data_Source_widjets,"these are widjets");

}
 
  select_datasource:any = []

isSelected(widgetName: string, serviceName: string): boolean {
  return this.selectedServices[widgetName] && this.selectedServices[widgetName].includes(serviceName);
}
getUserBehaviourAnalytics(){
 
}

onServiceSelection(widgetName: string, serviceName: string, event: any) {
  debugger;
  const isChecked = event.target.checked;

  if (isChecked) {
    
    if (!this.selectedServices[widgetName]) {
      this.selectedServices[widgetName] = [];
    }

   
    this.selectedServices[widgetName].push(serviceName);
  } else {
   
    this.selectedServices[widgetName] = this.selectedServices[widgetName].filter(item => item !== serviceName);

    
    if (this.selectedServices[widgetName].length === 0) {
      delete this.selectedServices[widgetName];
    }
  }
console.log(this.selectedServices);
this.obj_configuration_setting.selected_datasource = this.selectedServices;
  //this.data_service.widjets_selected_dataSource = this.selectedServices
}


ShowWSelectedWidjetData(selectedItem: any) {
  this.data_Source_widjets.forEach((item: any) => {
    item.showServices = false;
    item.display_services = false;
  });

  const selectedIndex = this.data_Source_widjets.findIndex((item: any) => item.id === selectedItem.id);
  if (selectedIndex !== -1) {
    this.data_Source_widjets[selectedIndex].showServices = true;
    this.data_Source_widjets[selectedIndex].display_services = true;
  }
  
}

  create_environment() {
    // (click)="create_environment()"
    this.activeModal.dismiss('create_environment');
  }
  close_model() {
    this.activeModal.dismiss('close modal');
  }
}