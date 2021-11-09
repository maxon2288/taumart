$(window).ready(function () {
    $(document).on("click", ".mprf__address-edit-btn", function() {
        $(".mprf__edit-container").removeClass("active");
        $(".mprf__add").removeClass("active")
        $(this).closest(".mprf__address-item").find(".mprf__edit-container").addClass("active");
    })
    $(document).on("click", ".js-add-address", function() {
        $(".mprf__edit-container").removeClass("active");
        $(".mprf__add").addClass("active")
    });
    $(document).on("click", ".mprf__address-remove-btn", function() {
        $(this).closest(".mprf__address-item").remove();
        
    });
    
});