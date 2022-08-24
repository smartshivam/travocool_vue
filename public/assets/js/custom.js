$(document).ready(function () {
    $("#openList").on("click",function(){
        $(this).toggleClass("openclose");
        $(".sidebar__Dashboard").toggleClass("sidebar__Collapse");
        $(".main__Content").toggleClass("main__COntentCollapse");
        $(this).find(".fa-solid").toggleClass("angles__Right");
    });
});