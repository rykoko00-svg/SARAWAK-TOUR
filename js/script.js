/*
 * ================================
 * PACKAGE POPUP
 * ================================
 */

$(document).on("pagecreate", "#packages", function () {

    $(".package-item").on("click", function (e) {

        e.preventDefault();

        var packageItem = $(this);

        var name = packageItem.find(".package-name").text();
        var description = packageItem.find(".package-description").text();

        var popupHTML =
            '<div data-role="popup" id="package-popup" ' +
            'class="package-popup" data-overlay-theme="b">' +

                '<div class="popup-header">' +
                    '<h2>' + name + '</h2>' +
                '</div>' +

                '<div class="popup-content">' +
                    '<p>' + description + '</p>' +

                    '<a href="#" data-rel="back" ' +
                    'class="ui-btn ui-corner-all ui-btn-b">' +
                    'Close</a>' +

                '</div>' +

            '</div>';

        $("#package-popup").remove();

        $(popupHTML).appendTo($.mobile.activePage);

        $("#package-popup").popup();

        $("#package-popup").popup("open");

    });

});


/*
 * ================================
 * CONTACT FORM
 * ================================
 */

$(document).on("submit", "#contactForm", function (e) {

    e.preventDefault();

    var name = $("#contactForm input[name='name']").val();

    if (name.trim() === "") {

        alert("Please enter your name.");

        return;

    }

    alert("Thank you, " + name + "! Your message has been received.");

    $("#contactForm")[0].reset();

});


/*
 * ================================
 * BOOKING FORM
 * ================================
 */

$(document).on("submit", "#bookingForm", function (e) {

    e.preventDefault();

    var name = $("#bookingName").val();

    if (name.trim() === "") {

        alert("Please enter your name.");

        return;

    }

    alert("Thank you, " + name + "! Your booking has been submitted.");

    $("#bookingForm")[0].reset();

});