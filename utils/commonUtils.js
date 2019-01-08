var CommonUtils = {
    setOnClickCopy: function (element) {
        element.onclick = function () {
            element.select();
            document.execCommand("copy");
            element.blur();
        };
    },

    alert: function () {
        alert('hi');
    }
};