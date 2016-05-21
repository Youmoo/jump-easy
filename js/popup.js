;
(function($) {
    window.addEventListener('DOMContentLoaded', function() {
        $('#preset-config').textContent = JSON.stringify(KEY_URL_MAPPINGS, null , 2);
        $('#user-defined-config').textContent = JSON.stringify(getUserDefinedConfig(), null , 2);
        
        $('form').addEventListener('submit', function(e) {
            e.preventDefault();
            addUserDefinedConfig(this.key.value, this.url.value);
            $('#user-defined-config').textContent = JSON.stringify(getUserDefinedConfig(), null , 2);
        });
    });


})(document.querySelector.bind(document));
