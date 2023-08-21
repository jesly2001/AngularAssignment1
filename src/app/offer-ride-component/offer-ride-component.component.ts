import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent implements OnInit{
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor(public frmBuilder:FormBuilder)
  {
    
  }
  ngOnInit(): void {
    this.contactForm=this.frmBuilder.group({
      name:['',Validators.required],
      startlocation:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seatsAvailable: ['', [Validators.required, seatRangeValidator()]]
      
    });
    
  }
  onSubmit()

  {
  
    if(this.contactForm?.valid)
  
    {
  
      const formData=this.contactForm.value;
  
      this.submittedData.push(formData);
  
      this.contactForm.reset();
  
      alert('Ride Offered: \n Name:'+ formData.name+ ' \n StartLocation :'+ formData.startlocation+' \n Destination :'+ formData.destination+'\n Number of Seats Available'+formData.seatsAvailable);
  
    }
  
    else{
  
      alert('Form is invalid');
  
    }
  
  }
}
function seatRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value < 0 || value > 8) {
      return { seatRange: true };
    }
    return null;
  };
}




