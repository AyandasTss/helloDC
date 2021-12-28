import { Component, ChangeDetectorRef, ElementRef, ViewChild,  OnInit} from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from "@angular/forms";
@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.page.html',
  styleUrls: ['./photo-upload.page.scss'],
})
export class PhotoUploadPage  {
  private todo : FormGroup;
  private registrationForm : FormGroup;
  submitted: boolean;

    constructor( private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
      /*##################### Registration Form #####################*/
  this.registrationForm = this.formBuilder.group({
    file: [null]
  })  
  }

////////*#######################camera#############################///////



   /*########################## File Upload ########################*/
   @ViewChild('fileInput') el: ElementRef;
   imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";
   editFile: boolean = true;
   removeUpload: boolean = false;
 
   uploadFile(event) {
     console.log(event);
     let reader = new FileReader(); // HTML5 FileReader API
     let file = event.target.files[0];
     if (event.target.files && event.target.files[0]) {
       reader.readAsDataURL(file);
      //  console.log(reader.readAsDataURL(file));
 
       // When file uploads set it to file formcontrol
       reader.onload = () => {
         this.imageUrl = reader.result;
         console.log(this.imageUrl);
         this.registrationForm.patchValue({
           file: reader.result
         });
         this.editFile = false;
         this.removeUpload = true;
       }
       // ChangeDetectorRef since file is loading outside the zone
       this.cd.markForCheck();        
     }
   }
 
   // Function to remove uploaded file
   removeUploadedFile() {
     let newFileList = Array.from(this.el.nativeElement.files);
     this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jp';
     this.editFile = true;
     this.removeUpload = false;
     this.registrationForm.patchValue({
       file: [null]
     });
   }
   
   // Submit Registration Form
  //  onSubmit() {
  //    this.submitted = true;
  //    console.log(this.registrationForm.value)

  //    this.uploadFile(this.registrationForm.value.file)

  //    if(!this.registrationForm.valid) {
  //      alert('Please fill all the required fields to create a super hero!')
  //      return false;
  //    } else {
  //      console.log(this.registrationForm.value)
  //    }
  //  }

}
