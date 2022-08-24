<template>
  
    <div class="wrapper_Content">
        
      
          
            <!--BreadCrumb Start-->
            <div class="breadcrumb__ALL">
                <div class="breadcrumbInner">
                    <span class="breadcrumb__Bookingtext">Booking</span>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Booking</li>
                    </ol>
                </div>
            </div>
            <!--BreadCrumb End-->
          
          
            <section class="checkout__Count py-4">
                <div class="container-fluid">
                    <div class="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Flights</a>
                      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Hotel</a>
                      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Combo</a>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          
                        <div class="personal__Information">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-8">
                                   
                                    
                                    
                                    
                                    <div class="container-fluid px-3">
                                         <h4 class="your__Info">Your Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" class="form-control input" placeholder="First Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" class="form-control input" placeholder="Last Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Verify Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Verify Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Country Code</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone No.</label>
                                                    <input type="text" class="form-control input" placeholder="Phone No">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Meal Preference (Optional)</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="reeive">
                                                    <label for="reeive">I want to receive <a href="#">Company name</a> promotional offers in the future </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <hr />
                                        
                                        <h4 class="your__Info">Your Card Information</h4>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Type</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Visa</a>
                                                            <a class="dropdown-item" href="#">Master Card</a>
                                                            <a class="dropdown-item" href="#">Credit Card</a>
                                                            <a class="dropdown-item" href="#">Americal Express</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Holder Name</label>
                                                    <input type="text" class="form-control input" placeholder="Card Holder Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Number">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Identification Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Identification Number">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Month</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Jan</a>
                                                            <a class="dropdown-item" href="#">Feb</a>
                                                            <a class="dropdown-item" href="#">Mar</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Year</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">2021</a>
                                                            <a class="dropdown-item" href="#">2022</a>
                                                            <a class="dropdown-item" href="#">2023</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Billing Zip Code</label>
                                                    <input type="text" class="form-control input" placeholder="Billing Zip Coder">
                                                </div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <hr>
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="agree">
                                                    <label for="agree"> By continuing, you agree to the <a href="#">Terms and Conditions.</a></label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <button class="allbtn confirm__Booking">Confirm Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    
                                    
                                </div>
                                <div class="col-12 col-md-12 col-lg-4">
                                    
                                    
                                    <div class="right__Panel">
                                        <div class="right_Cardpanel">
                                            <img src="assets/images/plane.jpg"  class="img-fluid"/>
                                            <div class="caption_RIghtPanel p-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <div class="media">
                                                            <i class="fa-solid fa-plane"></i>
                                                            <div class="media-body">
                                                                <h5 class="country">Delhi to Banglore</h5>
                                                                <span class="oneway__FLight">ONEWAY FLIGHT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <h5 class="form__Text">FROM</h5>
                                                        <p class="price__INR">₹5620</p>
                                                    </div>
                                                </div>
                                                
                                                <div class="d-flex align-items-center justify-content-between mt-2">
                                                    <button class="btn view_Btn">View</button>
                                                    <button class="btn allbtn book_BTn">Book</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div class="right_Cardpanel_Two">
                                            
                                            <h2 class="need_Help">Need Help?.</h2>
                                            <p class="more__Than">We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                            <a href="" class="d-block phone__No">(+347) 123 456 7890</a>
                                            <a href="" class="d-block email"><i class="fa-solid fa-envelope"></i> example@example.com</a>
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                          
                          
                          
                          
                          
                      </div>
                      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          
                           <div class="personal__Information">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-8">
                                   
                                    
                                    
                                    
                                    <div class="container-fluid px-3">
                                         <h4 class="your__Info">Your Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" class="form-control input" placeholder="First Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" class="form-control input" placeholder="Last Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Verify Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Verify Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Country Code</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone No.</label>
                                                    <input type="text" class="form-control input" placeholder="Phone No">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Meal Preference (Optional)</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="reeive">
                                                    <label for="reeive">I want to receive <a href="#">Company name</a> promotional offers in the future </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <hr />
                                        
                                        <h4 class="your__Info">Your Card Information</h4>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Type</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Visa</a>
                                                            <a class="dropdown-item" href="#">Master Card</a>
                                                            <a class="dropdown-item" href="#">Credit Card</a>
                                                            <a class="dropdown-item" href="#">Americal Express</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Holder Name</label>
                                                    <input type="text" class="form-control input" placeholder="Card Holder Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Number">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Identification Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Identification Number">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Month</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Jan</a>
                                                            <a class="dropdown-item" href="#">Feb</a>
                                                            <a class="dropdown-item" href="#">Mar</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Year</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">2021</a>
                                                            <a class="dropdown-item" href="#">2022</a>
                                                            <a class="dropdown-item" href="#">2023</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Billing Zip Code</label>
                                                    <input type="text" class="form-control input" placeholder="Billing Zip Coder">
                                                </div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <hr>
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="agree">
                                                    <label for="agree"> By continuing, you agree to the <a href="#">Terms and Conditions.</a></label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <button class="allbtn confirm__Booking">Confirm Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    
                                    
                                </div>
                                <div class="col-12 col-md-12 col-lg-4">
                                    
                                    
                                    <div class="right__Panel">
                                        <div class="right_Cardpanel">
                                            <img src="assets/images/plane.jpg"  class="img-fluid"/>
                                            <div class="caption_RIghtPanel p-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <div class="media">
                                                            <i class="fa-solid fa-plane"></i>
                                                            <div class="media-body">
                                                                <h5 class="country">Delhi to Banglore</h5>
                                                                <span class="oneway__FLight">ONEWAY FLIGHT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <h5 class="form__Text">FROM</h5>
                                                        <p class="price__INR">₹5620</p>
                                                    </div>
                                                </div>
                                                
                                                <div class="d-flex align-items-center justify-content-between mt-2">
                                                    <button class="btn view_Btn">View</button>
                                                    <button class="btn allbtn book_BTn">Book</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div class="right_Cardpanel_Two">
                                            
                                            <h2 class="need_Help">Need Help?.</h2>
                                            <p class="more__Than">We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                            <a href="" class="d-block phone__No">(+347) 123 456 7890</a>
                                            <a href="" class="d-block email"><i class="fa-solid fa-envelope"></i> example@example.com</a>
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                          
                          
                      </div>
                      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          
                           <div class="personal__Information">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-8">
                                   
                                    
                                    
                                    
                                    <div class="container-fluid px-3">
                                         <h4 class="your__Info">Your Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" class="form-control input" placeholder="First Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" class="form-control input" placeholder="Last Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Verify Email I'd</label>
                                                    <input type="text" class="form-control input" placeholder="Verify Email I'd">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Country Code</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone No.</label>
                                                    <input type="text" class="form-control input" placeholder="Phone No">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Meal Preference (Optional)</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">India</a>
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="reeive">
                                                    <label for="reeive">I want to receive <a href="#">Company name</a> promotional offers in the future </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <hr />
                                        
                                        <h4 class="your__Info">Your Card Information</h4>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Type</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Visa</a>
                                                            <a class="dropdown-item" href="#">Master Card</a>
                                                            <a class="dropdown-item" href="#">Credit Card</a>
                                                            <a class="dropdown-item" href="#">Americal Express</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Holder Name</label>
                                                    <input type="text" class="form-control input" placeholder="Card Holder Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Number">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Card Identification Number</label>
                                                    <input type="text" class="form-control input" placeholder="Card Identification Number">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Month</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Jan</a>
                                                            <a class="dropdown-item" href="#">Feb</a>
                                                            <a class="dropdown-item" href="#">Mar</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Expiration Year</label>
                                                    <div class="dropdown personal__Dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                           
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">2021</a>
                                                            <a class="dropdown-item" href="#">2022</a>
                                                            <a class="dropdown-item" href="#">2023</a>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-angle-down personal__Dropdown_Icons"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Billing Zip Code</label>
                                                    <input type="text" class="form-control input" placeholder="Billing Zip Coder">
                                                </div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <hr>
                                                <div class="form-group">
                                                    <input type="checkbox" class="i_WantReceive" id="agree">
                                                    <label for="agree"> By continuing, you agree to the <a href="#">Terms and Conditions.</a></label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <button class="allbtn confirm__Booking">Confirm Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    
                                    
                                </div>
                                <div class="col-12 col-md-12 col-lg-4">
                                    
                                    
                                    <div class="right__Panel">
                                        <div class="right_Cardpanel">
                                            <img src="assets/images/plane.jpg"  class="img-fluid"/>
                                            <div class="caption_RIghtPanel p-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <div class="media">
                                                            <i class="fa-solid fa-plane"></i>
                                                            <div class="media-body">
                                                                <h5 class="country">Delhi to Banglore</h5>
                                                                <span class="oneway__FLight">ONEWAY FLIGHT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <h5 class="form__Text">FROM</h5>
                                                        <p class="price__INR">₹5620</p>
                                                    </div>
                                                </div>
                                                
                                                <div class="d-flex align-items-center justify-content-between mt-2">
                                                    <button class="btn view_Btn">View</button>
                                                    <button class="btn allbtn book_BTn">Book</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div class="right_Cardpanel_Two">
                                            
                                            <h2 class="need_Help">Need Help?.</h2>
                                            <p class="more__Than">We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                            <a href="" class="d-block phone__No">(+347) 123 456 7890</a>
                                            <a href="" class="d-block email"><i class="fa-solid fa-envelope"></i> example@example.com</a>
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                      </div>
                    </div>
                </div>
           </section>
           
           
      
        
        
    </div>
</template>

<script>
export default {
    name:"CheckOut"

}
</script>

<style>

</style>