/*$(document).ready (function(){
    $('label').change (function(){
        alert('yo');
    });

    $.ajax (function(){
        beforeSend: function() {
            var file = this.files[0];
                name = file.name
                size = file.size
                type = file.type

            if(file.name.length < 1) {
                    alert("No name on file.")
                }
                else if (file.size > 100000) {
                    alert("File is to big");
                }
                else if (file.type != 'image/png' && file.type != 'image/jpg' && !file.type != 'image/gif' && file.type != 'image/jpeg' ) {
                    alert("File doesnt match png, jpg or gif");
                }
                else {

                }
        },
        url: 'write.go',
        type: 'POST',
        data: 'theData',
        contentType: false,
        processData: false,
        cache: false
        // Ajax events

    });

});


$(document).ready(function()(
    $('label').click(function(){
        var formData = new FormData($('form')[0]);
        $.ajax({
            url: '',  //Server script to process data
            type: 'POST',
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload){ // Check if upload property exists
                    myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
                }
                return myXhr;
            },
            //Ajax events
            beforeSend: beforeSendHandler,
            success: completeHandler,
            error: errorHandler,
            // Form data
            data: formData,
            //Options to tell jQuery not to process data or worry about content-type.
            cache: false,
            contentType: false,
            processData: false
        });
    });

});*/

$(document).ready(function() {
    $('input[type="file"]').change(function(){
            var file = this.files[0];
            $(".file-name").empty();
            $(".file-name").append('Filename: ' + file.name);

    });
});