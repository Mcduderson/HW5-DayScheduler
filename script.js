$(document).ready(function(){
    
    //Runs the check time function to generate color coding.
    checkTime();

    //Function to save user input to local storage.
    function saveToLocal(){

        var textInput = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, textInput);
    }

    //Function to check the time by hour against id value and change css styling accordingly.
    function checkTime(){

        var timeMom = moment().hours();

        $(".time-block").each(function(){

            var id = $(this).attr("id");

            if(id == timeMom){

                $(this).addClass("present")

            }else if(id < timeMom){

                $(this).addClass("past")
                
            }else {

                $(this).addClass("future")
                
            }
            }
        )
    }

    //Grab Time information from moment and display it.
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //Pull information from local storage and display it.
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))

    //Onclick event, also the hover events.
    $(".saveBtn").on("click", saveToLocal);

    $(".saveBtn").on("mouseenter", function () {
        $(this).addClass('hover');
    });

    $(".saveBtn").on("mouseleave", function () {
        $(this).removeClass('hover');
    });
})