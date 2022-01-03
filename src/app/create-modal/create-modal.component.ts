import { Component, ChangeDetectorRef, ElementRef, ViewChild,  OnInit, Input} from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from "@angular/forms";
import { ModalController, NavParams } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { NativeKeyboard } from '@awesome-cordova-plugins/native-keyboard/ngx';
@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit{
  @Input() title: string;

  private todo : FormGroup;
  private registrationForm : FormGroup;
  submitted: boolean;
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  DisplayLocation: string = "Kolkata";
  imageUrlArray: any[]=[];
    constructor( 
      private camera: Camera,
      private modalCtrl: ModalController,
      private formBuilder: FormBuilder, 
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private cd: ChangeDetectorRef,
      private nativeKeyboard: NativeKeyboard,
      private navParams: NavParams, 
      ) {
      /*##################### Registration Form #####################*/
  this.registrationForm = this.formBuilder.group({
    file: [null]
  })  

  this.title = this.navParams.get('title');
  // this.list = this.navParams.get('item_id');
  console.log(this.title);
  }
//##############################geoLocation########################////
Locationoptions = {
  timeout: 10000, 
  enableHighAccuracy: true, 
  maximumAge: 3600
};
OnInit(){}
// use geolocation to get user's device coordinates
getCurrentCoordinates() {
  this.geolocation.getCurrentPosition().then((resp) => {
    console.log(resp);
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.loacteAddress(this.latitude,this.longitude)
   }).catch((error) => {
     console.log('Error getting location', error);
   });
}
Addressoptions: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};
loacteAddress(latitude,longitude){
this.nativeGeocoder.reverseGeocode(latitude, longitude, this.Addressoptions)
  .then((result: NativeGeocoderResult[]) => {
  console.log(JSON.stringify(result[0]));
  this.DisplayLocation = JSON.stringify(result[0])
  }
  )
  .catch((error: any) => console.log(error));

this.nativeGeocoder.forwardGeocode('Berlin', this.Addressoptions)
  .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
  .catch((error: any) => console.log(error));
}
////////*#######################camera#############################///////
   openCamera(){   
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log("Picture taken");
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      this.imageUrlArray.push(base64Image);
      }, (err) => {
      // Handle error
      console.log(err);
      });
    
    }

   //###########################GALAEY#################################///
   openGalary(){   
    const galaryOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      // encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      allowEdit: true,
    }
      this.camera.getPicture(galaryOptions).then((imageData) => {
        console.log("Picture taken");
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(base64Image);
        }, (err) => {
        // Handle error
        console.log(err);
        });
    
    }
   /*########################## File Upload ########################*/
   @ViewChild('fileInput') el: ElementRef;
   imageUrl: any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl47aWCdghL4H-tjWFyqFCxY0pviZ5eiR-xv1oMdbWYKJPfmNmuZQjsJ--wE3llOoe4Mo&usqp=CAU";
   editFile: boolean = true;
   removeUpload: boolean = false;
 
   uploadFile(event) {
     console.log(event);
    for (var i = 0; i < event.target.files.length; i++) { 
     let reader = new FileReader(); // HTML5 FileReader API
     let file = event.target.files[i];
     if (event.target.files && event.target.files[i]) {
       console.log(file);
       reader.readAsDataURL(file);
      //  console.log(reader.readAsDataURL(file));
 
       // When file uploads set it to file formcontrol
       reader.onload = () => {
         this.imageUrl = reader.result;
      this.imageUrlArray.push(this.imageUrl);

         console.log(this.imageUrlArray);
         this.registrationForm.patchValue({
           file: reader.result
         });
         this.editFile = false;
         this.removeUpload = true;
       }
       // ChangeDetectorRef since file is loading outside the zone
       this.cd.markForCheck();        
     }
    }///loop for multiple selection
   }
 
   // Function to remove uploaded file
   removeUploadedFile(removeImage) {
    //  let newFileList = Array.from(this.el.nativeElement.files);
    //  this.editFile = true;
    //  this.removeUpload = false;
    //  this.registrationForm.patchValue({
    //    file: [null]
    //  });
     this.imageUrlArray.splice(this.imageUrlArray.indexOf(removeImage), 1);
   }
   
   // Submit Registration Form
   onSubmit() {
    //  this.submitted = true;
    //  console.log(this.registrationForm.value)

    //  this.uploadFile(this.registrationForm.value.file)

    //  if(!this.registrationForm.valid) {
    //    alert('Please fill all the required fields to create a super hero!')
    //    return false;
    //  } else {
    //    console.log(this.registrationForm.value)
    //  }
   }
    
   uploadFileMultiple(e) {
    //////3_1_2022////
    let a : any[]= [];
    for (var i = 0; i < e.target.files.length; i++) { 
     a.push(e.target.files[i]);
   }
   console.log(a)


    //////3_1_2022////
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
