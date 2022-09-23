// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '42e2667ab2msh561b358ea73f4a1p1a0edbjsn48b24e0d7425',
//         'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
//     }
// };

// fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "42e2667ab2msh561b358ea73f4a1p1a0edbjsn48b24e0d7425",
        "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.countries_stat);
    // console.log(response.world_total.new_deaths);
    //console.log(response.world_total);

    // $.each(response.world_total, function (key, value) {
    //     // console.log(key + " : " + value);
    //     $("#data-wise").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>")

    // });
    var sno = 1;
    $.each(response.countries_stat, function (key, value) {
        // console.log(key + " : " + value);
        $("#country-wise").append("<tr>" +
            "<td>" + sno + "</td>" +
            "<td>" + value.country_name + "</td>" +
            "<td>" + value.cases + "</td>" +
            "<td>" + value.deaths + "</td>" +
            // "<td>" + value.region + "</td>" +
            "<td>" + value.total_recovered + "</td>" +
            "</tr>");
        sno++;
    });
});


