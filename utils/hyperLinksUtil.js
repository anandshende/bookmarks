var HyperLinksUtil = {
    appendInputFormToModal: function (value) {

        value.configurable.map((conf) => {
            var tableRowElement = document.createElement('div');
            tableRowElement.className = 'table-row';

            var tableCellElement = document.createElement('input');
            tableCellElement.className = 'table-cell dynamic-table-cell';
            tableCellElement.value = conf.name || "";
            tableCellElement.placeholder = conf.placeholder || "";
            tableCellElement.setAttribute('readOnly', 'true');
            tableRowElement.appendChild(tableCellElement);

            tableCellElement = document.createElement('input');
            tableCellElement.className = 'table-cell dynamic-table-cell';
            tableCellElement.value = conf.defaultValue || "";
            tableCellElement.placeholder = conf.placeholder || "";
            tableCellElement.id = conf.id;
            tableRowElement.appendChild(tableCellElement);

            document.getElementById('dynamicTable').appendChild(tableRowElement);
        });

        var tableCellElement2 = document.createElement('button');
        tableCellElement2.className = 'table-cell dynamic-table-cell';
        tableCellElement2.innerText = value.common.buttonText;

        tableCellElement2.onclick = function () {
            var str = "";
            value.configurable.map((conf) => {
                str += document.getElementById(conf.id).value;
                str += (conf.after) ? conf.after : "";
            });
            window.open(value.url + str + value.common.appendedString, '_blank');
        };
        var tableRowElement = document.createElement('div');
        tableRowElement.className = 'table-row';
        tableRowElement.appendChild(tableCellElement2);

        document.getElementById('dynamicTable').appendChild(tableRowElement);

    },

    createLiElementToOpenModal: function (event, name, url) {
        configurable = JSON.parse(event.currentTarget.dataset.configurable);
        common = JSON.parse(event.currentTarget.dataset.common);
        document.getElementById('dynamicDialog').showModal();
        let value = { url, name, configurable, common };
        this.appendInputFormToModal(value);
    }
}