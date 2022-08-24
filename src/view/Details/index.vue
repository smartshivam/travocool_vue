<template>
  <div class="wrapper_Content">
        
        <!--BreadCrumb Start-->
        <div class="breadcrumb__ALL">
            <div class="breadcrumbInner">
                <span class="breadcrumb__Bookingtext">Details</span>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Details</li>
                </ol>
            </div>
        </div>
        <!--BreadCrumb End-->
        
        
        
        
        <!--Details Page Start-->
        <section class="details_Page py-4">
            <div class="container-fluid">
            
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                        
                        
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="hotel__text">
                                <h2 class="hotel_Castle">Hotel castle salam</h2>
                                <span><i class="fa-solid fa-location-dot"></i> <span>Los angeles</span></span>
                            </div>
                            <div class="hotel_Rating">
                                <h5>Excellent</h5>
                                <span class="d-block rating_no">4.8/5</span>
                                <span class="d-block reviews">(1214 reviewes)</span>
                            </div>
                        </div>
                        
                        <hr>
                        
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="toru_details_top_bottom_item">
                                <div class="tour_details_top_bottom_icon">
                                    <img src="assets/images/ac.png" alt="icon" class="img-fluid">
                                </div>
                                <div class="tour_details_top_bottom_text">
                                    <p>Air condition</p>
                                </div>
                            </div>
                            
                            <div class="toru_details_top_bottom_item">
                                <div class="tour_details_top_bottom_icon">
                                    <img src="assets/images/tv.png" alt="icon" class="img-fluid">
                                </div>
                                <div class="tour_details_top_bottom_text">
                                    <p>Flat television</p>
                                </div>
                            </div>
                            
                            <div class="toru_details_top_bottom_item">
                                <div class="tour_details_top_bottom_icon">
                                    <img src="assets/images/gym.png" alt="icon" class="img-fluid">
                                </div>
                                <div class="tour_details_top_bottom_text">
                                    <p>Fitness center</p>
                                </div>
                            </div>
                            
                            <div class="toru_details_top_bottom_item">
                                <div class="tour_details_top_bottom_icon">
                                    <img src="assets/images/wifi.png" alt="icon" class="img-fluid">
                                </div>
                                <div class="tour_details_top_bottom_text">
                                    <p>Free Wi-fi</p>
                                </div>
                            </div>
                        </div>
                        
                        <hr>
                        
                        <div class="main__Image my-3 pt-3">
                            <div class="main_slick" id="detailsimage_Slick">
                                <img src="assets/images/hotel1.jpg" class="img-fluid"/>
                                <img src="assets/images/hotel2.jpg" class="img-fluid"/>
                                <img src="assets/images/hotel1.jpg" class="img-fluid"/>
                            </div>
                            
                        </div>  
                        
                        
                        <div class="right_Details mb-3">
                            <h4>Overview</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                            <div class="hotel__facilities">
                                <ul>
                                    <li>Buffet breakfast as per the Itinerary</li>
                                    <li>Visit eight villages showcasing Polynesian culture</li>
                                    <li>Complimentary Camel safari, Bonfire, and Cultural Dance at Camp</li>
                                    <li>All toll tax, parking, fuel, and driver allowances</li>
                                    <li>Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="right_Details mb-3">
                            <h4 class="mb-1">Select your room</h4>
                            <div class="nav nav-pills my-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Book</a>
                              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Enquiry</a>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent">
                              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                  
                                <div class="row">
                                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                                        <div class="flight_Search_boxed d-block d-sm-flex align-items-center justify-content-between">
                                            <div class="Journey_date">
                                                <p>Check In date</p>
                                                <input type="date" value="2022-05-05">
                                                <span>Thursday</span>
                                            </div>
                                            <div class="Journey_date">
                                                <p>Check Out date</p>
                                                <input type="date" value="2022-05-05">
                                                <span>Thursday</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div class="flight_Search_boxed dropdown_passenger_area">
                                            <p>Passenger, Class </p>
                                            <div class="dropdown">
                                                <button class="final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    0 Passenger
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                                    <div class="traveller-calulate-persons">
                                                        <div class="passengers">
                                                            <h6>Passengers</h6>
                                                            <div class="passengers-types">
                                                                <div class="passengers-type">
                                                                    <div class="text"><span class="count pcount">2</span>
                                                                        <div class="type-label">
                                                                            <p>Adult</p>
                                                                            <span>12+
                                                                                yrs</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="button-set">
                                                                        <button type="button" class="btn-add  text-center">
                                                                            <i class="fas fa-plus"></i>
                                                                        </button>
                                                                        <button type="button" class="btn-subtract  text-center">
                                                                            <i class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="passengers-type">
                                                                    <div class="text"><span class="count ccount">0</span>
                                                                        <div class="type-label">
                                                                            <p class="fz14 mb-xs-0">
                                                                                Children
                                                                            </p><span>2
                                                                                - Less than 12
                                                                                yrs</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="button-set">
                                                                        <button type="button" class="btn-add-c text-center">
                                                                            <i class="fas fa-plus"></i>
                                                                        </button>
                                                                        <button type="button" class="btn-subtract-c text-center">
                                                                            <i class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="passengers-type">
                                                                    <div class="text"><span class="count incount">0</span>
                                                                        <div class="type-label">
                                                                            <p class="fz14 mb-xs-0">
                                                                                Infant
                                                                            </p><span>Less
                                                                                than 2
                                                                                yrs</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="button-set">
                                                                        <button type="button" class="btn-add-in text-center">
                                                                            <i class="fas fa-plus"></i>
                                                                        </button>
                                                                        <button type="button" class="btn-subtract-in text-center">
                                                                            <i class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Business</span>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="text-center my-3 mb-4">
                                            <button class="btn allbtn check__Availability">Check availability</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card mb-3">
                                    <div class="card-body pr-lg-3 py-lg-0 p-0">
                                        
                                        <div class="row">
                                            <div class="col-lg-3 col-md-12 col-12">
                                                <div class="card__Image">
                                                    <img src="assets/images/hotel2.jpg" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-12 col-12">
                                                <div class="card__Caption">
                                                    <h3>Culpa cupidatat laborum eiusmod am</h3>
                                                   
                                                    <div class="d-flex flex-wrap align-items-center justify-content-start">
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/ac.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Air condition</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/gym.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Fitness center</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/tv.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Flat television</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/wifi.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Free Wi-fi</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-12 col-12">
                                                <div class="per_Night">
                                                    <h5>₹5000.00/ </h5>
                                                    <span>Per night</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                    <a href="" class="btn allbtn bookbtn_Details">Book</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                
                                <div class="card mb-3">
                                    <div class="card-body pr-lg-3 py-lg-0 p-0">
                                        
                                        <div class="row">
                                            <div class="col-lg-3 col-md-12 col-12">
                                                <div class="card__Image">
                                                    <img src="assets/images/hotel3.jpg" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-12 col-12">
                                                <div class="card__Caption">
                                                    <h3>Culpa cupidatat laborum eiusmod am</h3>
                                                   
                                                    <div class="d-flex flex-wrap align-items-center justify-content-start">
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/ac.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Air condition</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/gym.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Fitness center</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/tv.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Flat television</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/wifi.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Free Wi-fi</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-12 col-12">
                                                <div class="per_Night">
                                                    <h5>₹5000.00/ </h5>
                                                    <span>Per night</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                    <a href="" class="btn allbtn bookbtn_Details">Book</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                
                                <div class="card mb-3">
                                    <div class="card-body pr-lg-3 py-lg-0 p-0">
                                        
                                        <div class="row">
                                            <div class="col-lg-3 col-md-12 col-12">
                                                <div class="card__Image">
                                                    <img src="assets/images/hotel2.jpg" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-12 col-12">
                                                <div class="card__Caption">
                                                    <h3>Culpa cupidatat laborum eiusmod am</h3>
                                                   
                                                    <div class="d-flex flex-wrap align-items-center justify-content-start">
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/ac.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Air condition</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/gym.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Fitness center</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/tv.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Flat television</span>
                                                        </div>
                                                        <div class="pr-3 pb-3">
                                                            <img src="assets/images/wifi.png" class="img-fluid"/>
                                                            <span class="card__Caption__Text">Free Wi-fi</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-12 col-12">
                                                <div class="per_Night">
                                                    <h5>₹5000.00/ </h5>
                                                    <span>Per night</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                    <a href="" class="btn allbtn bookbtn_Details">Book</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                  
                                  
                              </div>
                              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                  
                                  
                                  <div class="row">
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                              <input type="text" class="form-control input_Element" placeholder="Enter full name">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control input_Element" placeholder="Enter email address">
                                                </div>
                                          </div>
                                          <div class="col-12">
                                                <div class="form-group">
                                                    <textarea class="form-control input_Elementtextarea" placeholder="Write your comments" rows="6"></textarea>
                                                </div>
                                          </div>
                                           <div class="col-12">
                                                <div class="form-group text-center">
                                                    <button class="btn enquiry__Btn allbtn">Enquiry</button>
                                                </div>
                                          </div>
                                  </div>
                                  
                                  
                                  
                              </div>
                            </div>
                        </div>
                        
                        
                        <div class="right_Details mb-3">
                            <h4>Included/Excluded</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                            <div class="hotel__facilities">
                                <ul>
                                    <li>Buffet breakfast as per the Itinerary</li>
                                    <li>Visit eight villages showcasing Polynesian culture</li>
                                    <li>Complimentary Camel safari, Bonfire, and Cultural Dance at Camp</li>
                                    <li>All toll tax, parking, fuel, and driver allowances</li>
                                    <li>Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div class="right_Details mb-3">
                            <h4>Hotel location</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293639699978!2d88.433983!3d22.57635755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1660897330885!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                        <div class="right_Details mb-3">
                            <h4>Write your review</h4>
                            
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                      <input type="text" class="form-control input_Element" placeholder="Enter full name">
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control input_Element" placeholder="Enter email address">
                                        </div>
                                  </div>
                                  <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control input_Elementtextarea" placeholder="Write your comments" rows="6"></textarea>
                                        </div>
                                  </div>
                                   <div class="col-12">
                                        <div class="form-group text-center">
                                            <button class="btn enquiry__Btn allbtn text-white">Post comment</button>
                                        </div>
                                  </div>
                          </div>
                          
                        </div>
                        
                        
                        
                    </div>
                    <div class="col-md-12 col-12 col-lg-4">
                        
                        
                        <div class="right_Details mb-3">
                            <h4>Price</h4>
                            <div class="d-flex align-items-center justify-content-start">
                                <p class="cross_Price">₹ 35,500</p> <p class="rupees_Price"> ₹ 30,500<span class="text_Price"> /Per serson</span></p>
                            </div>
                            <h4>Hotel facilities</h4>
                            <div class="hotel__facilities">
                                <ul>
                                    <li>Buffet breakfast as per the Itinerary</li>
                                    <li>Visit eight villages showcasing Polynesian culture</li>
                                    <li>Complimentary Camel safari, Bonfire,</li>
                                    <li>All toll tax, parking, fuel, and driver allowances</li>
                                    <li>Comfortable and hygienic vehicle</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="right_Details mb-3">
                            <h4>Why choose us</h4>
                            <div class="hotel__facilities">
                                <ul>
                                    <li>Buffet breakfast as per the Itinerary</li>
                                    <li>Visit eight villages showcasing Polynesian culture</li>
                                    <li>Complimentary Camel safari, Bonfire,</li>
                                    <li>All toll tax, parking, fuel, and driver allowances</li>
                                    <li>Comfortable and hygienic vehicle</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <div class="col-12">
                        <section class="review__Section">
                            <div class=" pt-4">
                                <h4 class="all_Review_Heading">All review</h4>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 col-lg-4 mt-5">
                                    
                                    <div class="right_Details mb-3">
                                        <div class="review__CustomerImage">
                                            <img src="assets/images/review/review1.png" class="img-fluid">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                 <h5 class="m-0 date__Review">08 Dec, 2021</h5>
                                            </div>
                                            <div class="text-center">
                                                 <span class="date__Review">Excellent</span>
                                                 <div class="d-flex align-items-center justify-content-start icons__StartReviews">
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                 </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="title__reviewS">Manresh Chandra</h3>
                                            <p class="description__ReviewS py-2">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-start flex-wrap pt-3">
                                            <img src="assets/images/review/review-small1.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small2.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small3.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small4.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small5.png" class="img-fluid review_SmallImage"/>
                                            <div class="addMoreImage">+5</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-lg-4 mt-5">
                                    
                                    <div class="right_Details mb-3">
                                        <div class="review__CustomerImage">
                                            <img src="assets/images/review/review1.png" class="img-fluid">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                 <h5 class="m-0 date__Review">08 Dec, 2021</h5>
                                            </div>
                                            <div class="text-center">
                                                 <span class="date__Review">Excellent</span>
                                                 <div class="d-flex align-items-center justify-content-start icons__StartReviews">
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                 </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="title__reviewS">Manresh Chandra</h3>
                                            <p class="description__ReviewS py-2">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-lg-4 mt-5">
                                    
                                    <div class="right_Details mb-3">
                                        <div class="review__CustomerImage">
                                            <img src="assets/images/review/review1.png" class="img-fluid">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                 <h5 class="m-0 date__Review">08 Dec, 2021</h5>
                                            </div>
                                            <div class="text-center">
                                                 <span class="date__Review">Excellent</span>
                                                 <div class="d-flex align-items-center justify-content-start icons__StartReviews">
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                 </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="title__reviewS">Manresh Chandra</h3>
                                            <p class="description__ReviewS py-2">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-lg-4 mt-5">
                                    
                                    <div class="right_Details mb-3">
                                        <div class="review__CustomerImage">
                                            <img src="assets/images/review/review1.png" class="img-fluid">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                 <h5 class="m-0 date__Review">08 Dec, 2021</h5>
                                            </div>
                                            <div class="text-center">
                                                 <span class="date__Review">Excellent</span>
                                                 <div class="d-flex align-items-center justify-content-start icons__StartReviews">
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                 </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="title__reviewS">Manresh Chandra</h3>
                                            <p class="description__ReviewS py-2">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-start flex-wrap pt-3">
                                            <img src="assets/images/review/review-small1.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small2.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small3.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small4.png" class="img-fluid review_SmallImage"/>
                                            <img src="assets/images/review/review-small5.png" class="img-fluid review_SmallImage"/>
                                            <div class="addMoreImage">+28</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-lg-4 mt-5">
                                    
                                    <div class="right_Details mb-3">
                                        <div class="review__CustomerImage">
                                            <img src="assets/images/review/review1.png" class="img-fluid">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                 <h5 class="m-0 date__Review">08 Dec, 2021</h5>
                                            </div>
                                            <div class="text-center">
                                                 <span class="date__Review">Excellent</span>
                                                 <div class="d-flex align-items-center justify-content-start icons__StartReviews">
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                     <i class="fa-solid fa-star"></i>
                                                 </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="title__reviewS">Manresh Chandra</h3>
                                            <p class="description__ReviewS py-2">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            
                            
                        </section>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>
        <!--Details Page End-->
        
    </div>
</template>

<script>

export default {
    name:"DetailVue",
    methods:{
        Slider(){
            window.$('#detailsimage_Slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<i class="fa-solid fa-chevron-left icons_left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right icons_right"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
        }

    },
    mounted (){
        this.Slider()
         this.$store.commit('viewLoader')
setTimeout(()=>{
        this.$store.commit('hideLoader')

},2000)
    }

}
</script>

<style>

</style>