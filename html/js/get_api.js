$(function() {
  // ボタンクリックでパラメータを手に入れて表示する
  $('.get_api_btn').click(function(e) {
    console.log("clicked");
    //HTMLを初期化
    //$("ul.parameters").html("");
    //var inputed_datatype = $('.params').;
    //console.log(inputed_datatype);
    var parameters_for_python = {};
    $("input:text").each(function (i, obj) {
      var key = obj.getAttribute("rel");
      var value = obj.value;
      if(value==""){
        console.log("pass");
      } else {
        parameters_for_python[key] = value;
      }
    });
    var selected_datatype = $('.tptc-datatype').val();
    console.log(selected_datatype);
    var sending_json = {};
    sending_json["datatype"] = selected_datatype;
    sending_json["params"] = parameters_for_python;
    //console.log(parameters_for_python);
    $.ajax({
      type: 'POST',
      url: 'cgi-bin/get_api_data.py',
      contentType: 'application/json',
      data: JSON.stringify(sending_json),
      dataType: "json",
      success: function(data) {
        console.log(data);
        //console.log(data.text);
        //$('#result').empty();
        //$('#result').val(data.text);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus);
      }
    });
  });
});
