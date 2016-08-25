function init_script(){
  
}

if (typeof Turbolinks != 'undefined') {
  $(document).on("page:change", function () {
    init_script();
  });
  $(document).on("page:load", function () {
    init_script();
  });
} else {
  $(document).ready(function () {
    init_script();
  });
  $(document).on("page:load", function () {
    init_script();
  });
}
