;
(function ($) {
    window.addEventListener('DOMContentLoaded', function () {

        $('#preset-config').textContent = JSON.stringify(KEY_URL_MAPPINGS, null, 4);
        $('#user-defined-config').textContent = JSON.stringify(getUserDefinedConfig(), null, 4);

        $('form').addEventListener('submit', function (e) {
            e.preventDefault();
            addUserDefinedConfig(this.key.value, this.url.value);
            $('#user-defined-config').textContent = JSON.stringify(getUserDefinedConfig(), null, 4);
        });

    });

})(document.querySelector.bind(document));