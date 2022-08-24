<template>
  <div class="wrapper_Content">
        

        <!-- Banner Start -->
        <div class="banner__Section">
            
            <div class="animation">
                <img src="assets/images/bag-con.png" alt="Bag ICon" class="img-fluid leaf pos1"/>
                <img src="assets/images/plane-icon.png" alt="Bag ICon" class="img-fluid leaf pos2"/>
                <img src="assets/images/hotel-icon.png" alt="Bag ICon" class="img-fluid leaf pos3"/>
                <img src="assets/images/car-icon.png" alt="Bag ICon" class="img-fluid leaf pos4"/>
                <img src="assets/images/cruise-icon.png" alt="Bag ICon" class="img-fluid leaf pos5"/>
            </div>
            <img src="assets/images/hero-bg.jpg" class="img-fluid hero__Back">

            <div class="caption__Banner">
                <h2>Explore, discover and save</h2>
                <p>Instant everything. No brainer prices</p>
            </div>
        </div>
        <!-- Banner End -->

        <!-- Booking Start -->
        <div class="booking__Section">
        
            <div class="container-fluid">

            
                <div class="booking__SectionInner">

                    <div class="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-plane-departure"></i> Flights</a>
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-hotel"></i> Hotels</a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-globe"></i> Combo</a>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                            <div class="flights__Content">

                                <div class="flight_categories_search">
                                    
                                    <div class="nav pills_Nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                      <a class="nav-link active" id="one_Way_Content" data-toggle="pill" href="#one_Way" role="tab" aria-controls="v-pills-home" aria-selected="true">One Way</a>
                                      <a class="nav-link" id="roundtrip_Content" data-toggle="pill" href="#roundtrip" role="tab" aria-controls="v-pills-profile" aria-selected="false">Roundtrip</a>
                                      <a class="nav-link" id="multi__City_Content" data-toggle="pill" href="#multi__City" role="tab" aria-controls="v-pills-messages" aria-selected="false">Multi
                                                        city</a>
                                    </div>
                                    
                                </div>
                                
                                <div class="tab-content" id="v-pills-tabContent">
                                  <div class="tab-pane fade show active" id="one_Way" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                      
                                      
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>From</p>
                                                <input type="text" value="New York">
                                                <span>JFK - John F. Kennedy International...</span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-departure"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>To</p>
                                                <input type="text" value="London ">
                                                <span>LCY, London city airport </span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-arrival"></i>
                                                </div>
                                                <div class="range_plan">
                                                    <i class="fas fa-exchange-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3  col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3  col-md-6 col-sm-12 col-12">
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
                                                                            <button type="button" class="btn-add text-center">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract text-center">
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
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                        <div class="top_form_search_button">
                                                <router-link :to="{name:'Filter'}" type="button"  class="btn btn_theme btn_md">Search</router-link>
                                            </div>
                                    </div>
                                      
                                  
                                  </div>
                                  <div class="tab-pane fade" id="roundtrip" role="tabpanel" aria-labelledby="roundtrip_Content">
                                      
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>From</p>
                                                <input type="text" value="New York">
                                                <span>JFK - John F. Kennedy International...</span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-departure"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>To</p>
                                                <input type="text" value="London ">
                                                <span>LCY, London city airport </span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-arrival"></i>
                                                </div>
                                                <div class="range_plan">
                                                    <i class="fas fa-exchange-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                    <div class="Journey_date">
                                                        <p>Return date</p>
                                                        <input type="date" value="2022-05-08">
                                                        <span>Saturday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2  col-md-6 col-sm-12 col-12">
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
                                                                            <button type="button" class="btn-add text-center">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract text-center">
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
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                        <div class="top_form_search_button">
                                                <a type="button" href="filter.php" class="btn btn_theme btn_md">Search</a>
                                            </div>
                                    </div>
                                      
                                      
                                      
                                      
                                  </div>
                                  <div class="tab-pane fade" id="multi__City" role="tabpanel" aria-labelledby="multi__City_Content">
                                     
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>From</p>
                                                <input type="text" value="New York">
                                                <span>JFK - John F. Kennedy International...</span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-departure"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>To</p>
                                                <input type="text" value="London ">
                                                <span>LCY, London city airport </span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-arrival"></i>
                                                </div>
                                                <div class="range_plan">
                                                    <i class="fas fa-exchange-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                    <div class="Journey_date">
                                                        <p>Return date</p>
                                                        <input type="date" value="2022-05-08">
                                                        <span>Saturday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2  col-md-6 col-sm-12 col-12">
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
                                                                            <button type="button" class="btn-add text-center">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract text-center">
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
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>From</p>
                                                <input type="text" value="New York">
                                                <span>JFK - John F. Kennedy International...</span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-departure"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>To</p>
                                                <input type="text" value="London ">
                                                <span>LCY, London city airport </span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-arrival"></i>
                                                </div>
                                                <div class="range_plan">
                                                    <i class="fas fa-exchange-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                    <div class="Journey_date">
                                                        <p>Return date</p>
                                                        <input type="date" value="2022-05-08">
                                                        <span>Saturday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2  col-md-6 col-sm-12 col-12">
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
                                                                            <button type="button" class="btn-add text-center">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract text-center">
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
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-12">
                                            <a href="#" class="remove__FLights"><span>Remove</span></a>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>From</p>
                                                <input type="text" value="New York">
                                                <span>JFK - John F. Kennedy International...</span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-departure"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>To</p>
                                                <input type="text" value="London ">
                                                <span>LCY, London city airport </span>
                                                <div class="plan_icon_posation">
                                                    <i class="fas fa-plane-arrival"></i>
                                                </div>
                                                <div class="range_plan">
                                                    <i class="fas fa-exchange-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                    <div class="Journey_date">
                                                        <p>Return date</p>
                                                        <input type="date" value="2022-05-08">
                                                        <span>Saturday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2  col-md-6 col-sm-12 col-12">
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
                                                                            <button type="button" class="btn-add text-center">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract text-center">
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
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <a href="#" class="add_Anotherflights"><i class="fa-solid fa-plus"></i> <span>Add another flight</span></a>
                                        </div>
                                    </div>
                                    <div class="top_form_search_button">
                                        <a type="button" href="filter.php" class="btn btn_theme btn_md">Search</a>
                                    </div>
                                      
                                  </div>
                                </div>
                                
                                
                                

                                <!--<div class="row">-->
                                <!--    <div class="col-lg-3 col-md-6 col-sm-12 col-12">-->
                                <!--        <div class="flight_Search_boxed">-->
                                <!--            <p>From</p>-->
                                <!--            <input type="text" value="New York">-->
                                <!--            <span>JFK - John F. Kennedy International...</span>-->
                                <!--            <div class="plan_icon_posation">-->
                                <!--                <i class="fas fa-plane-departure"></i>-->
                                <!--            </div>-->
                                <!--        </div>-->
                                <!--    </div>-->
                                <!--    <div class="col-lg-3 col-md-6 col-sm-12 col-12">-->
                                <!--        <div class="flight_Search_boxed">-->
                                <!--            <p>To</p>-->
                                <!--            <input type="text" value="London ">-->
                                <!--            <span>LCY, London city airport </span>-->
                                <!--            <div class="plan_icon_posation">-->
                                <!--                <i class="fas fa-plane-arrival"></i>-->
                                <!--            </div>-->
                                <!--            <div class="range_plan">-->
                                <!--                <i class="fas fa-exchange-alt"></i>-->
                                <!--            </div>-->
                                <!--        </div>-->
                                <!--    </div>-->
                                <!--    <div class="col-lg-3  col-md-6 col-sm-12 col-12">-->
                                <!--        <div class="form_search_date">-->
                                <!--            <div class="flight_Search_boxed date_flex_area">-->
                                <!--                <div class="Journey_date">-->
                                <!--                    <p>Journey date</p>-->
                                <!--                    <input type="date" value="2022-05-05">-->
                                <!--                    <span>Thursday</span>-->
                                <!--                </div>-->
                                <!--            </div>-->
                                <!--        </div>-->
                                <!--    </div>-->
                                <!--    <div class="col-lg-3  col-md-6 col-sm-12 col-12">-->
                                <!--        <div class="flight_Search_boxed dropdown_passenger_area">-->
                                <!--            <p>Passenger, Class </p>-->
                                <!--            <div class="dropdown">-->
                                <!--                <button class="final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">-->
                                <!--                    0 Passenger-->
                                <!--                </button>-->
                                <!--                <div class="dropdown-menu dropdown-menu-right dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">-->
                                <!--                    <div class="traveller-calulate-persons">-->
                                <!--                        <div class="passengers">-->
                                <!--                            <h6>Passengers</h6>-->
                                <!--                            <div class="passengers-types">-->
                                <!--                                <div class="passengers-type">-->
                                <!--                                    <div class="text"><span class="count pcount">2</span>-->
                                <!--                                        <div class="type-label">-->
                                <!--                                            <p>Adult</p>-->
                                <!--                                            <span>12+-->
                                <!--                                                yrs</span>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                    <div class="button-set">-->
                                <!--                                        <button type="button" class="btn-add text-center">-->
                                <!--                                            <i class="fas fa-plus"></i>-->
                                <!--                                        </button>-->
                                <!--                                        <button type="button" class="btn-subtract text-center">-->
                                <!--                                            <i class="fas fa-minus"></i>-->
                                <!--                                        </button>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <!--                                <div class="passengers-type">-->
                                <!--                                    <div class="text"><span class="count ccount">0</span>-->
                                <!--                                        <div class="type-label">-->
                                <!--                                            <p class="fz14 mb-xs-0">-->
                                <!--                                                Children-->
                                <!--                                            </p><span>2-->
                                <!--                                                - Less than 12-->
                                <!--                                                yrs</span>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                    <div class="button-set">-->
                                <!--                                        <button type="button" class="btn-add-c text-center">-->
                                <!--                                            <i class="fas fa-plus"></i>-->
                                <!--                                        </button>-->
                                <!--                                        <button type="button" class="btn-subtract-c text-center">-->
                                <!--                                            <i class="fas fa-minus"></i>-->
                                <!--                                        </button>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <!--                                <div class="passengers-type">-->
                                <!--                                    <div class="text"><span class="count incount">0</span>-->
                                <!--                                        <div class="type-label">-->
                                <!--                                            <p class="fz14 mb-xs-0">-->
                                <!--                                                Infant-->
                                <!--                                            </p><span>Less-->
                                <!--                                                than 2-->
                                <!--                                                yrs</span>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                    <div class="button-set">-->
                                <!--                                        <button type="button" class="btn-add-in text-center">-->
                                <!--                                            <i class="fas fa-plus"></i>-->
                                <!--                                        </button>-->
                                <!--                                        <button type="button" class="btn-subtract-in text-center">-->
                                <!--                                            <i class="fas fa-minus"></i>-->
                                <!--                                        </button>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <!--                            </div>-->
                                <!--                        </div>-->
                                <!--                        <div class="cabin-selection">-->
                                <!--                            <h6>Cabin Class</h6>-->
                                <!--                            <div class="cabin-list">-->
                                <!--                                <button type="button" class="label-select-btn active">-->
                                <!--                                    <span class="muiButton-label">Economy-->
                                <!--                                    </span>-->
                                <!--                                </button>-->
                                <!--                                <button type="button" class="label-select-btn">-->
                                <!--                                    <span class="muiButton-label">-->
                                <!--                                        Business-->
                                <!--                                    </span>-->
                                <!--                                </button>-->
                                <!--                                <button type="button" class="label-select-btn">-->
                                <!--                                    <span class="MuiButton-label">First-->
                                <!--                                        Class </span>-->
                                <!--                                </button>-->
                                <!--                            </div>-->
                                <!--                        </div>-->
                                <!--                    </div>-->
                                <!--                </div>-->
                                <!--            </div>-->
                                <!--            <span>Business</span>-->
                                <!--        </div>-->
                                <!--    </div>-->
                                <!--    <div class="top_form_search_button">-->
                                <!--        <a type="button" href="filter.php" class="btn btn_theme btn_md">Search</a>-->
                                <!--    </div>-->
                                <!--</div>-->


                            </div>


                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">


                            <div class="tour_search_form">
                                <form action="#!">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div class="flight_Search_boxed">
                                                <p>Destination</p>
                                                <input type="text" placeholder="Where are you going?">
                                                <span>Where are you going?</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="form_search_date">
                                                <div class="flight_Search_boxed date_flex_area">
                                                    <div class="Journey_date">
                                                        <p>Journey date</p>
                                                        <input type="date" value="2022-05-03">
                                                        <span>Thursday</span>
                                                    </div>
                                                    <div class="Journey_date">
                                                        <p>Return date</p>
                                                        <input type="date" value="2022-05-05">
                                                        <span>Thursday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2  col-md-6 col-sm-12 col-12">
                                            <div class="flight_Search_boxed dropdown_passenger_area">
                                                <p>Passenger, Class </p>
                                                <div class="dropdown">
                                                    <button class=" final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                                            <button type="button" class="btn-add">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract">
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
                                                                            <button type="button" class="btn-add-c">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract-c">
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
                                                                            <button type="button" class="btn-add-in">
                                                                                <i class="fas fa-plus"></i>
                                                                            </button>
                                                                            <button type="button" class="btn-subtract-in">
                                                                                <i class="fas fa-minus"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="cabin-selection">
                                                                <h6>Cabin Class</h6>
                                                                <div class="cabin-list">
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="muiButton-label">Economy
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn active">
                                                                        <span class="muiButton-label">
                                                                            Business
                                                                        </span>
                                                                    </button>
                                                                    <button type="button" class="label-select-btn">
                                                                        <span class="MuiButton-label">First
                                                                            Class </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>Business</span>
                                            </div>
                                        </div>
                                        <div class="top_form_search_button">
                                            <button class="btn btn_theme btn_md">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>



                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                            <div class="banner__Formcaption p-0">
                                <div class=" form__FieldBannerTwo">
                                    <div class="row align-items-center">
                                    <div class="col-md-8">

                                        <div class="form-group">
                                            <label for="" class="mb-3">Explore things to do near you</label>
                                            <input type="text" class="form-control" placeholder="Search by Destination, Activities or Attractions">
                                        </div>

                                    
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group mb-0 mt-4">
                                            
                                            <button class="search__BTn_New"><span>Search</span></button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                    </div>

                </div>


            </div>
        </div>
        <!-- Booking End -->


       <PopularPackage/>
       
<TopDestinations/>

      <OurOffers/>

    </div>

</template>

<script>
import PopularPackage from "./PopularPackage.vue"
import TopDestinations from "./TopDestinations.vue"
import OurOffers from "./OurOffers.vue"
export default {
    
    name:"HomeVue",
    components:{
    PopularPackage,
    TopDestinations,
    OurOffers
}

}

</script>

<style>

</style>