var NoticeBoardUtil = {
    appendTableContentToModel: function (key, value) {

        var tableRowElement = document.createElement('div');
        tableRowElement.className = 'table-row';

        var tableCellElement = document.createElement('input');
        tableCellElement.className = 'table-cell dynamic-table-cell';
        tableCellElement.value = key;
        tableCellElement.setAttribute('readonly', true);
        tableRowElement.appendChild(tableCellElement);

        tableCellElement = document.createElement('input');
        tableCellElement.className = 'table-cell dynamic-table-cell';
        tableCellElement.value = value;
        tableCellElement.setAttribute('readonly', true);
        CommonUtils.setOnClickCopy(tableCellElement);

        tableRowElement.appendChild(tableCellElement);

        document.getElementById('dynamicTable').appendChild(tableRowElement);
    }
}