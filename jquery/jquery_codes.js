$(function() {
    $("#property").selectmenu();
    $("#date").selectmenu();
    $("#spinnermin").spinner({
        min: 1,
        max: 5,
        spin: function(event, ui) {
            $(this).change();
        }
    });
    $("#spinnermax").spinner({
        min: 1,
        max: 7,
        spin: function(event, ui) {
            $(this).change();
        }
    });
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 700000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
      " - £" + $( "#slider-range" ).slider( "values", 1 ) );
    $("#Search").on("click",function(){
          var propertyType = $("#property").val();
          var propertyMinBed = $("#spinnermin").val();
          var propertyMaxBed = $("#spinnermax").val();
          var propertyDate = $("#date").val();
          var propertyMinPrice = $("#slider-range").slider("option","values")[0];
          var propertyMaxPrice = $("#slider-range").slider("option","values")[1];

          var result="<ul>";
            for (var i in prop.properties){
                if((propertyType == prop.properties[i].type) || (propertyType=="Any"))
                     if (( propertyMaxBed >= prop.properties[i].bedrooms && propertyMinBed <= prop.properties[i].bedrooms ))
                         if (( propertyDate == prop.properties[i].added.month) || (propertyDate=="Anytime"))
                             if (( prop.properties[i].price >= propertyMinPrice && prop.properties[i].price <= propertyMaxPrice ))
                                 {
                                    {
                                        {
                                            {
                                            result+="<h2 id ='name1'><li>" + prop.properties[i].name +"</li></h2>"+"<img src=" + prop.properties[i].picture + ">"+"<h2><li>" + "£" + prop.properties[i].price +"</li></h2>"  + "<p>" + prop.properties[i].description + "</p>" + "<button><a href='" + prop.properties[i].url + "'> Read more </a></button>";
                                            alert("done");
                                     } } } } }
            result+="</ul>";
            document.getElementById( "Placeholder" ).innerHTML = result;
      });
    $( ".viewFavourites" ).on("click", function(){
        alert("elama1");

        console.log("Restoring array data from local storage");

        myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));

        var output = "<ul>";

        if (myFavouriteProp != null) {

            for (var i = 0; i < prop.properties.length; i++) {
                for (j = 0; j < myFavouriteProp.length; j++) {

                    if (data.properties[i].id == myFavouriteProp[j]) {

                        output+="<h5><li>" + prop.properties[i].bedrooms + " Bedroom" + " " + prop.properties[i].type + "</li></h5>" +
                            "<img src=" + prop.properties[i].picture + ">" +"<li><button><a href=' " +prop.properties[i].url + "'>Visit page</a></button></li>";
                            alert("elama2");
                    }
                }
            }
        }
        output+="</ul>";

        document.getElementById( "placeholder2" ).innerHTML = output;

    });
});