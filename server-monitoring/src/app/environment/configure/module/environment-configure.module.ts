import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentConfigureRoutingModule } from './environment-configure-routing.module';
import { EnvironmentConfigureComponent } from '../environment-configure.component';
import { NavModule } from 'src/app/modules/nav.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ConfigurationSettingsComponent } from '../configuration-settings/configuration-settings.component';
import { ConfigurationSettingsDatasourceComponent } from '../configuration-settings/configuration-settings-datasource/configuration-settings-datasource.component';
import { ConfigurationSettingsErpAnalyticsComponent } from '../configuration-settings/configuration-settings-erp-analytics/configuration-settings-erp-analytics.component';
import { ConfigurationSettingsViewSummaryComponent } from '../configuration-settings/configuration-settings-view-summary/configuration-settings-view-summary.component';
import { ConfigurationSettingsSystemDiagnosticsComponent } from '../configuration-settings/configuration-settings-system-diagnostics/configuration-settings-system-diagnostics.component';
import { ConfigurationSettingsSummaryAfterViewCreationComponent } from '../configuration-settings/configuration-settings-summary-after-view-creation/configuration-settings-summary-after-view-creation.component';

@NgModule({
  declarations: [
    EnvironmentConfigureComponent,
    ConfigurationSettingsComponent,
    ConfigurationSettingsDatasourceComponent, 
    ConfigurationSettingsErpAnalyticsComponent,
    ConfigurationSettingsViewSummaryComponent,
    ConfigurationSettingsSystemDiagnosticsComponent,
    ConfigurationSettingsSummaryAfterViewCreationComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    EnvironmentConfigureRoutingModule,
    GridModule
    
    
  ],
  exports: [
    EnvironmentConfigureComponent,
    ConfigurationSettingsComponent,
    ConfigurationSettingsDatasourceComponent, 
    ConfigurationSettingsErpAnalyticsComponent,
    ConfigurationSettingsViewSummaryComponent,
    ConfigurationSettingsSummaryAfterViewCreationComponent,
    ConfigurationSettingsSystemDiagnosticsComponent

  ]
  
})
export class EnvironmentConfigureModule { }
