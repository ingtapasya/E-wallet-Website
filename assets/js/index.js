$(document).ready(function(){
    //For Modal
    $('.modal').modal({ //same class name has to be given as given under login 'modal' class name
        startingTop:'80%',
        inDuration: 1000,
        outDuration: 1000

    }); 
    // For tooltipp
    $('.tooltipped').tooltip();
    //For search box
    $('input.autocomplete').autocomplete({
        data:{
            "Mobile Recharge": null,
            "Broadband Recharge": null,
            "DTH Recharge": 'https://www.google.com'
        }
    });
// for sidenav
$('.sidenav').sidenav();



});