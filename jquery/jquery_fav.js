//add favorite button function
$(function() {
    $( ".favoritebtn" ).on("click", function(){

        try {
            $(this).attr('disabled', true);

            var addingprop = $(this).closest("p").attr("id"); 

            var Myfav=JSON.parse(localStorage.getItem("favlist")); 

            if(Myfav == null) {
                Myfav = [];
            }

            if(Myfav != null) {
                for ( var j = 0; j < Myfav.length; j++) {  

                    if ( addingprop == Myfav[j]) {

                        alert("This property already in your favorite list");
                        Myfav = [];
                    }
                }
            }

            Myfav.push(addingprop);

            localStorage.setItem("favlist", JSON.stringify(Myfav));

        }

        catch (e) {
            if (e==QUOTA_EXCEEDED_ERR) {
                alert("Error");
            }

            else {
                alert("ERROR");
            }
        }
    });
});
//favorite item removing action function
$(function() {
    $( ".removebtn" ).on("click", function(){

        $(this).attr('disabled', true);

        var propRemove = $(this).closest("p").attr("id");  

        Myfav=JSON.parse(localStorage.getItem("favlist"));


        if(Myfav != null) {
            for ( var j = 0; j < Myfav.length; j++) {

                if ( propRemove == Myfav[j]) {

                    delete Myfav[j];
                    alert("This property removed Sucessfully");

                    localStorage.setItem("favlist", JSON.stringify(Myfav));

                    Myfav[j] = [];
                }
            }
        }

        if(Myfav == null) {
            alert("Empty Favorite List");
        }
    });
});
//viewing favourites function
$(function() {
    $( ".viewFavourites" ).on("click", function(){

        Myfav=JSON.parse(localStorage.getItem("favlist"));

        var favoriteoutput = "<section>";

        if (Myfav != null) {

            for (var i = 0; i < prop.properties.length; i++) {
                for (j = 0; j < Myfav.length; j++) {

                    if (prop.properties[i].id == Myfav[j]) {
 
                        favoriteoutput+="<section><img id ='img2' src=" + prop.properties[i].picture + ">"+"<h2 id ='name2'>" + prop.properties[i].name +"</h2>"+"<h2 id='price2'>" + "Rs." + prop.properties[i].price +"</h2>" + "<button><a href='" + prop.properties[i].url + "'> Read more </a></button>"+ "<button class='remove1'>&#10005;</button></section>";
                    }
                }
            }
        }else{
            alert("Empty Favorite List");
        }
        favoriteoutput+="</section>";

        document.getElementById( "search_result2" ).innerHTML = favoriteoutput; 

    });
});
//one property item removing button
$(".remove1").on("click", function () {
    $(this).closest("section").remove();
});
//clear all favorites
$(function() {
    $( ".clear-all" ).on("click", function(){

        $("#search_result2").remove(); 

        Myfav=JSON.parse(localStorage.getItem("favlist"));

        localStorage.clear();

    });

});





        var prop ={
        "properties": [
            {
                "name":"prop1",
                "id":"prop1",
                "type":"House",
                "bedrooms":3,
                "price":650000,
                "tenure":"Freehold",
                "description":"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "location":"Petts Wood Road, Petts Wood, Orpington",
                "picture":"../images/prop1pic1small.jpg",
                "url":"../properties/property1.html",
                "added": {
                    "month":"January",
                    "day":12,
                    "year":2018
                }
            },
            {
                "name":"prop2",
                "id":"prop2",
                "type":"Flat",
                "bedrooms":2,
                "price":299995,
                "tenure":"Freehold",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property2.html",
                "added": {
                    "month":"September",
                    "day":14,
                    "year":2018
                }
            },
            {
                "name":"prop3",
                "id":"prop3",
                "type":"House",
                "bedrooms":3,
                "price":650000,
                "tenure":"Freehold",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property3.html",
                "added": {
                    "month":"October",
                    "day":14,
                    "year":2018
                }
            },
            {
                "name":"prop4",
                "id":"prop4",
                "type":"Flat",
                "bedrooms":4,
                "price":435000,
                "tenure":"Freehold",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property4.html",
                "added": {
                    "month":"April",
                    "day":14,
                    "year":2018
                }
            },
            {
                "name":"prop5",
                "id":"prop5",
                "type":"House",
                "bedrooms":3,
                "price":565000,
                "tenure":"Freehold",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property5.html",
                "added": {
                    "month":"May",
                    "day":14,
                    "year":2018
                }
            },
            {
                "name":"prop6",
                "id":"prop6",
                "type":"Flat",
                "bedrooms":6,
                "price":900000,
                "tenure":"Freehold",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property6.html",
                "added": {
                    "month":"August",
                    "day":14,
                    "year":2018
                }
            },
            {
                "name":"prop7",
                "id":"prop7",
                "type":"House",
                "bedrooms":4,
                "price":430000,
                "tenure":"Freehold",
                "short_description":"3 Bed Rooms and 2 Bathroom",
                "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
                "location":"Crofton Road Orpington BR6",
                "picture":"../images/prop2pic1small.jpg",
                "url":"../properties/property7.html",
                "added": {
                    "month":"December",
                    "day":14,
                    "year":2018
                }
            }
    ]}
    