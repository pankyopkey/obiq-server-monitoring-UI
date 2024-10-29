import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selected-journey-inner',
  templateUrl: './selected-journey-inner.component.html',
  styleUrl: './selected-journey-inner.component.scss'
})
export class SelectedJourneyInnerComponent {

  
  constructor(
    public app_service: AppService
  ) { }

  ngOnInit() {
  }

  pageErrorDetails: any;
  datasource_functionalErrors = [];
  datasource_consoleErrors = [];
  datasource_apiRequestErrors = [];
  imgUrl_link = "";

  //imageUrl = environment.BASE_OPKEY_URL + "OpkeyObiqServerApi/OpkeyTraceIAAnalyticsApi/ImageController/downloadStepImage";
  imageUrl = "https://myqlm.preprod.opkeyone.com/OpkeyObiqServerApi/OpkeyTraceIAAnalyticsApi/ImageController/downloadStepImage";
  pageDetails: any;

  @Input('child_data') set child_data({ pageDetails }) {
    this.pageDetails = pageDetails


    this.setErrorDatasource(pageDetails);
    this.view_first_itemImg(pageDetails);
  }

  setErrorDatasource(event) {
    if (event.headers.length != 0) {

      let functional_errors = [];
      let console_errors = [];
      let apiRequest_errors = [];

      event.headers.forEach(item => {
        functional_errors = functional_errors.concat(item.appFunctionalErrors)
        console_errors = console_errors.concat(item.appConsoleErrors);
        apiRequest_errors = apiRequest_errors.concat(item.appApiRequestErrors);
      })

      this.datasource_functionalErrors = functional_errors;
      this.datasource_consoleErrors = console_errors;
      this.datasource_apiRequestErrors = apiRequest_errors;

    }

  }
  view_first_itemImg(event) {
    if (event.headers[0].steps.length != 0) {
      if(event['headers'][0]['steps'][0].stepImageUrl){
        this.imgUrl_link  = event['headers'][0]['steps'][0].stepImageUrl;
        return;
      }
      this.imgUrl_link = this.imageUrl + "/" + event['headers'][0]['steps'][0].id;
    }
  }



  select_step(item) {

    let id = item.id
    if(item.stepImageUrl){
      this.imgUrl_link = item.stepImageUrl;
    }else{
      this.imgUrl_link = this.imageUrl + "/" + item.id;
    }

   

    //let form_url = environment.BASE_OPKEY_URL + `OpkeyObiqServerApi/OpkeyTraceIAAnalyticsApi/ImageController/downloadStepImage/${id}`;
    let form_url =  `https://myqlm.preprod.opkeyone.com/OpkeyObiqServerApi/OpkeyTraceIAAnalyticsApi/ImageController/downloadStepImage/${id}`;

    window.loadingStart("form_url", "Please wait");
    this.app_service.make_get_server_call(form_url, {}).subscribe((res: any) => {
      window.loadingStop("form_url");
    }, (err) => {
      window.loadingStop("form_url");
    })

  }


  // toggleActiveLink(target: HTMLElement) {

  //   const allAcNavItems = document.querySelectorAll('.ac-nav-item');
  //   allAcNavItems.forEach(acNavItem => {
  //     if (acNavItem !== target.closest('.ac-nav-item')) {
  //       acNavItem.classList.remove('active-link');
  //     }
  //   });

  //   const acNavItem = target.closest('.ac-nav-item');
  //   if (acNavItem) {
  //     acNavItem.classList.add('active-link');
  //   }
  // }


  view_errors(event, errorType) {
    debugger;

    // if (event.length == 0) {
    //   this.service_notification.notifier(NotificationType.warning, 'No errors available.');
    //   return false;
    // }

    // this.service_data.modal_instance = this.service_modal.open(
    //   JourneySelectedInnerErrorComponent,
    //   {
    //     windowClass: "modal-74",
    //     beforeDismiss: () => {

    //       if (event.currentTarget["classList"].contains("modal-74")) {
    //         return false;
    //       }
    //     },
    //   }
    // );
    // this.service_data.modal_instance.componentInstance.datasource_errors = event;
    // this.service_data.modal_instance.componentInstance.errorType = errorType;
  }


  view_screenshot() {
    debugger;
    // this.service_data.modal_instance = this.service_modal.open(
    //   JourneyScreenshotComponent,
    //   {
    //     windowClass: "modal-95",
    //     beforeDismiss: () => {

    //       if (event.currentTarget["classList"].contains("modal-95")) {
    //         return false;
    //       }
    //     },
    //   }
    // );
    // this.service_data.modal_instance.componentInstance.selectedScreenshot_url = this.imgUrl_link;
  }


}