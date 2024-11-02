import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentRoutingModule } from './environment-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfigurationSettingsUserBehaviourComponent } from './configure/configuration-settings/configuration-settings-user-behaviour/configuration-settings-user-behaviour.component';
import { ConfigurationSettingsTestAutomationComponent } from './configure/configuration-settings/configuration-settings-test-automation/configuration-settings-test-automation.component';

@NgModule({
  declarations: [    
  
    
  
  ],
  imports: [
    CommonModule,
    EnvironmentRoutingModule,
    NgApexchartsModule
  ]
})
export class EnvironmentModule { }
