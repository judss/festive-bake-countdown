jQuery(document).ready(function() {
   
    function set_container_height() {
        jQuery(".dt").css("height", jQuery(window).height() + "px");
        jQuery(".dc").css("height", jQuery(window).height() + "px");
    }
   
    set_container_height();
   
    jQuery(window).resize(function() {
        set_container_height();
    });

    function setupTest(){
        console.log("setting up test...");
        jQuery(".t").on("click", function(){
            playTurnip();
        });
    }

    setupTest();
    
    
    function display_date() {
        var date_now     = new Date();
        var year = date_now.getFullYear();
        var date_festive = new Date(year, 10, 6, 0, 0, 0);
        if (date_festive <= date_now) {
            date_festive = new Date(year + 1, 10, 6, 0, 0, 0);
        }
        
        var seconds = ((date_festive - date_now) / 1000);
        var days    = Math.floor(seconds / 86400).toString();
        var hours   = Math.floor((seconds - (days * 86400)) / 3600).toString();
        var minutes = Math.floor((seconds - (days * 86400) - (hours * 3600)) / 60).toString();
        var seconds = Math.floor((seconds - (days * 86400) - (hours * 3600) - (minutes * 60))).toString();
        
        if(days.length < 3) {
            days = "0" + days;
        }
        if(days.length < 3) {
            days = "0" + days;
        }
        
        if(hours.length < 2) {
            hours = "0" + hours;
        }
        
        if(minutes.length < 2) {
            minutes = "0" + minutes;
        }
        
        if(seconds.length < 2) {
            seconds = "0" + seconds;
        }
        
        var days_split    = days.split('');
        var hours_split   = hours.split('');
        var minutes_split = minutes.split('');
        var seconds_split = seconds.split('');
        
        jQuery(".sd1").html('<img src="index_files/img/FB_' + days_split[0] + '.png" />');
        jQuery(".sd2").html('<img src="index_files/img/FB_' + days_split[1] + '.png" />');
        jQuery(".sd3").html('<img src="index_files/img/FB_' + days_split[2] + '.png" />');
        
        jQuery(".sh1").html('<img src="index_files/img/FB_' + hours_split[0] + '.png" />');
        jQuery(".sh2").html('<img src="index_files/img/FB_' + hours_split[1] + '.png" />');
        
        jQuery(".sm1").html('<img src="index_files/img/FB_' + minutes_split[0] + '.png" />');
        jQuery(".sm2").html('<img src="index_files/img/FB_' + minutes_split[1] + '.png" />');
        
        jQuery(".ss1").html('<img src="index_files/img/FB_' + seconds_split[0] + '.png" />');
        jQuery(".ss2").html('<img src="index_files/img/FB_' + seconds_split[1] + '.png" />');

        if(minutes == "00" && seconds == "00"){
            playTurnip();
        }
    }

    function playTurnip(){
        console.log("playing turnip");
        var turnip = new Audio('index_files/turnip.m4a');
        turnip.loop = false;
        turnip.play();
    }
    
    display_date();
    
    setInterval(function(){
        display_date();
    },1000);
});
