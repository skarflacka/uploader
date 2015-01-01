$(document).ready(function() {
    $("input[type='file']").change(function() {
            var file = this.files[0];
            $(".file-name").empty();
            $(".file-name").append("Filename: " + file.name);

            fileName = file.name;
    });

    $("#upload").click(function() {
        $(".file-name").empty();
        $(".file-name").append("Filename: " + fileName);
        $(".file-name").append("</br><a href='http://localhost/images/" + fileName + "'>http://localhost/images/" + fileName + "</a>");
    });
});