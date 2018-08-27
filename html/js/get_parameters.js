$(function() {
  // ボタンクリックでパラメータを手に入れて表示する
  $('.get_params_btn').click(function(e) {
    ////console.log("clicked");
    //HTMLを初期化
    $("ul.parameters").html("");
    var selected_datatype = $('.tptc-datatype').val();
    //console.log(selected_datatype);
//    $.ajax({
//      "url":"../json/filtering_example.json",
//      "success":function(data){
//        examples = data;
//        //console.log(examples);
//      }
//   })
    $.ajax({
      "url":"../json/tptc_api_format.json",
      "success":function(data){
        //console.log(data[selected_datatype]["parameters"]);
        var geted_parameters = data[selected_datatype]["parameters"];
        //console.log(examples);
        for(var pars_index in geted_parameters){
          var parameter = geted_parameters[pars_index];
          //console.log(parameter);
          //console.log(examples[parameter]);
          var ex = examples[parameter]["example"];
          var explanation = examples[parameter]["explanation"];
          $('<li><p><span>' + parameter + ' </span><input type="text" calss="params" rel="' + parameter + '"'
          + 'placeholder=\'' + ex + '\'><span> ' + explanation
          + '</span></p></li>').appendTo('ul.parameters');
//<input type="text" name="name" size="50" maxlength="30">
        }
      }
    })
  });
});
