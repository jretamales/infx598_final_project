var arrCheckboxes;
var checkboxSelector = "input[type='checkbox']";
$("body").delegate(checkboxSelector , "click", function(){
    arrCheckboxes = $(checkboxSelector).map(function() {
        return this.value;
    }).get();
});


console.log(arrCheckboxes);
