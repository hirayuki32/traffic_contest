$(function(){
  $.ajax({
    "url":"../json/tptc_api_format.json",

    "success":function(data){
      //console.log(data);
      for(var datatype in data){
        //console.log(datatype);
        $('<option value=\'' + datatype  + '\'>' + datatype + '</option>').appendTo('select.tptc-datatype');
      }
    }
  })
});

$.ajax({
  "url":"../json/filtering_example.json",
  "success":function(data){
    examples = data;
    console.log(examples);
  }
});

