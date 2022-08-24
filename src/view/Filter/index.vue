<template>
  <div class="wrapper_Content">


    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-3">


                <div class="sidebar__Flights">

                    <div>
                        <div class="">
                            <div class="accordion" id="faq">
                                <div class="card">
                                    <div class="card-header" id="faqhead1">
                                        <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                            <span class="section_TitleAccor">Price</span>
                                            <span class="reset">Reset</span>
                                        </a>
                                    </div>

                                    <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                        <div class="card-body py-0">


                                            <div class="form-group">
                                                <input type="range" class="form-control-range" id="formControlRange">
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between price__Section">
                                                <p class="m-0">0</p>
                                                <div>60,683</div>
                                            </div>

                                            <hr>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="d-flex align-items-center ">
                                                    <span class="mr-2 price__Checkbox_Show">Show Incv</span>
                                                    <input type="checkbox" class="show__Checkbox">
                                                </div>

                                                <div class="px-3 d-flex align-items-center ">
                                                    <span class="mr-2 price__Checkbox_Show">Show Incv</span>
                                                    <input type="checkbox" class="show__Checkbox">
                                                </div>
                                            </div>

                                            <hr>

                                            <div class="mb-3">
                                                <h4 class="section_TitleAccor">Stops</h4>

                                                <div class="d-flex align-items-center justify-content-start">
                                                    <button class="btn numberStopsbtn">0</button>
                                                    <button class="btn numberStopsbtn">1</button>
                                                    <button class="btn numberStopsbtn">2</button>
                                                    <button class="btn numberStopsbtn">3+</button>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="mb-3">
                                                <h4 class="section_TitleAccor">Departure From Delhi</h4>
                                                <div class="d-flex align-items-center justify-content-start">
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="mb-3">
                                                <h4 class="section_TitleAccor">Arrival From Bengaluru</h4>
                                                <div class="d-flex align-items-center justify-content-start">
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                    <button class="btn numberStopsbtn">
                                                        <i class="fa fa-sun-o d-block" aria-hidden="true"></i>
                                                        <span class="d-block">00-06</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="mb-3">
                                                <h4 class="section_TitleAccor">Fare Identifier</h4>
                                                <div class="d-flex align-items-center justify-content-start">
                                                    <div class="icons__Number">
                                                        <button class="btn "></button>
                                                        <span>178</span>
                                                    </div>
                                                    <div class="icons__Number">
                                                        <button class="btn "></button>
                                                        <span>178</span>
                                                    </div>
                                                    <div class="icons__Number">
                                                        <button class="btn"></button>
                                                        <span>178</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>



                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="faqhead2">
                                        <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                            <span class="section_TitleAccor">Airlines</span>
                                            <span class="reset">Reset</span>
                                        </a>
                                    </div>

                                    <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                        <div class="card-body">
                                            
                                            <div class="d-flex align-items-center justify-content-between checkbox__Airlines mb-3">
                                                <div>
                                                    <span class="go__First">Go First <span class="go__First__Count">6</span></span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="mr-2 go__FirstPrice">₹18,280</span>
                                                    <input type="checkbox" class="price__CHeckbox">
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-between checkbox__Airlines mb-3">
                                                <div>
                                                    <span class="go__First">Go First <span class="go__First__Count">6</span></span>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="mr-2 go__FirstPrice">₹18,280</span>
                                                    <input type="checkbox" class="price__CHeckbox">
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>










            </div>
            <div class="col-lg-9">

                <div class="right__Section">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <div class="media">
                                        <div class="media___Image">
                                            <img src="assets/images/air.png" class="img-fluid" />
                                        </div>
                                        <div class="media-body ml-1">
                                            <h5 class="spicejet__Text">SpiceJet</h5>
                                            <span class="d-block no_flight">SG-8171</span>
                                        </div>
                                    </div>
                                    <div class="caption mt-3">
                                        <button class="btn details__View">View Details <i class="fa-solid fa-plus"></i></button>
                                        <span class="text-left d-block seats__Count">Seats left: 2</span>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    
                                    <div class="flight__Timetrack">
                                        <div class="row">
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">DEL</span>
                                                <h5 class="time__Track m-0">12:05</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">Non-Stop</span>
                                                <span class="arrow__Nonstop"></span>
                                                <span class="non__Stoptime d-block">2h 20m</span>
                                            </div>
                                             <div class="col-4 p-md-0">
                                                <span class="text_Track">GOI</span>
                                                <h5 class="time__Track m-0">12:05</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-sm-12 col-lg-6 col-xl-4 mb-3">
                                    
                                    <div class="position-relative">
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block" name="select" />
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="sme_Btn">SME</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Coupon</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="publish_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price filter_Price_collapse">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <i class="fa-solid fa-chevron-down price__IconsCollapse"></i>
                                    </div>
                                    
                                    
                                </div>
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-2 mb-3">
                                    <router-link :to="{name:'Checkout'}" class="btn allbtn text-white py-2">Book</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <div class="media">
                                        <div class="media___Image">
                                            <img src="assets/images/go.png" class="img-fluid" />
                                        </div>
                                        <div class="media-body ml-1">
                                            <h5 class="spicejet__Text">Go First</h5>
                                            <span class="d-block no_flight">G8-286</span>
                                        </div>
                                    </div>
                                    <div class="caption mt-3">
                                        <button class="btn details__View">View Details <i class="fa-solid fa-plus"></i></button>
                                        <span class="text-left d-block seats__Count_green">Seats left: 23</span>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    
                                    <div class="flight__Timetrack">
                                        <div class="row">
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">DEL</span>
                                                <h5 class="time__Track m-0">10:40</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">Non-Stop</span>
                                                <span class="arrow__Nonstop"></span>
                                                <span class="non__Stoptime d-block">2h 20m</span>
                                            </div>
                                             <div class="col-4 p-md-0">
                                                <span class="text_Track">GOI</span>
                                                <h5 class="time__Track m-0">13:20</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-sm-12 col-lg-6 col-xl-4 mb-3">
                                    
                                    <div class="position-relative">
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block" name="select" />
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="sme_Btn">SME</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Coupon</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="publish_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price filter_Price_collapse">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <i class="fa-solid fa-chevron-down price__IconsCollapse"></i>
                                    </div>
                                    
                                    
                                </div>
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-2 mb-3">
                                    <button class="btn allbtn text-white py-2">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <div class="media">
                                        <div class="media___Image">
                                            <img src="assets/images/go.png" class="img-fluid" />
                                        </div>
                                        <div class="media-body ml-1">
                                            <h5 class="spicejet__Text">Go First</h5>
                                            <span class="d-block no_flight">G8-286</span>
                                        </div>
                                    </div>
                                    <div class="caption mt-3">
                                        <button class="btn details__View">View Details <i class="fa-solid fa-plus"></i></button>
                                        <span class="text-left d-block seats__Count_green text-warning">Seats left: 9</span>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    
                                    <div class="flight__Timetrack">
                                        <div class="row">
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">DEL</span>
                                                <h5 class="time__Track m-0">10:40</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                            <div class="col-4 p-md-0">
                                                <span class="text_Track">Non-Stop</span>
                                                <span class="arrow__Nonstop"></span>
                                                <span class="non__Stoptime d-block">2h 20m</span>
                                            </div>
                                             <div class="col-4 p-md-0">
                                                <span class="text_Track">GOI</span>
                                                <h5 class="time__Track m-0">13:20</h5>
                                                <span class="date_Track">Aug 31</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6 col-sm-12 col-lg-6 col-xl-4 mb-3">
                                    
                                    <div class="position-relative">
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block" name="select" />
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="sme_Btn">SME</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Coupon</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="publish_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="filter__Price filter_Price_collapse">
                                            <div class="d-flex align-items-center justify-content-start ">
                                                <div class="filter__PriceCaption mr-2">
                                                    <input type="radio" class="d-block"  name="select"/>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_no">51058822</span>
                                                    <span class="price__Amount">₹4,389.70</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start m-0">
                                                <div class="filter__PriceCaption mr-2">
                                                    <button class="coupon_Btn">Published</button>
                                                </div>
                                                <div class="filter__PriceCaption">
                                                    <span class="price_Eat">Economy,Free Meal, Refundable</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <i class="fa-solid fa-chevron-down price__IconsCollapse"></i>
                                    </div>
                                    
                                    
                                </div>
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-2 mb-3">
                                    <button class="btn allbtn text-white py-2">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>

    </div>



</div>
</template>

<script>
export default {
    name:"FilterVue",
    methods:{
        toggleHandler(){
              window.$(".price__IconsCollapse").on("click",function(){
       window.$(".filter_Price_collapse").slideToggle('show');
        window.$(this).toggleClass('price_Rotate');
    });
        }
    },
    mounted(){
        this.toggleHandler
         this.$store.commit('viewLoader')
setTimeout(()=>{
        this.$store.commit('hideLoader')

},2000)
    }

}
</script>

<style>

</style>