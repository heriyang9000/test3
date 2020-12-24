function get() {
// $.get("https://query2.finance.yahoo.com/v8/finance/chart/A?formatted=true&crumb=&lang=en-US&region=US&period1=1118568991&period2=1608868503&interval=1d&events=div%7Csplit&corsDomain=finance.yahoo.com").done(function (data) {
//     console.log(data);
// });
$.ajax({            
    url: "https://query2.finance.yahoo.com/v8/finance/chart/A?formatted=true&crumb=&lang=en-US&region=US&period1=1118568991&period2=1608868503&interval=1d&events=div%7Csplit&corsDomain=finance.yahoo.com",
    contentType: "application/jsonp",
    dataType: 'json',
    success: function(result){                     
      var yahoo_data = result;
      console.log(yahoo_data);         
    
    }
  }) 
}

get();
