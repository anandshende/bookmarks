var NoticeBoard = {

    loadNoticeBoard: function () {
        if (jsonData.info && jsonData.info.length > 0) {
            jsonData.info.map((item) => {
                var boxHeader = item.header;

                var htmlTemplate = document.createElement('div');
                htmlTemplate.className = 'class-float';

                var divBoxContainer = document.createElement('div');
                divBoxContainer.className = 'box-container';

                var divBoxHeader = document.createElement('div');
                divBoxHeader.className = 'box-header';
                divBoxHeader.innerText = boxHeader;

                var ulElement = document.createElement('ul');
                ulElement.className = 'box-list-value';

                if (item.values && item.values.length > 0) {


                    item.values.map((value) => {
                        var liElement = document.createElement('li');
                        var aElement = document.createElement('a');
                        aElement.innerText = value.name;
                        liElement.appendChild(aElement);
                        ulElement.appendChild(liElement);

                        liElement.onclick = function () {
                            document.getElementById('dynamicDialog').showModal();
                            value.values.map((detail) => {
                                NoticeBoardUtil.appendTableContentToModel(detail.key, detail.value);
                            });
                        };
                    });
                }

                divBoxContainer.appendChild(divBoxHeader);
                divBoxContainer.appendChild(ulElement);
                htmlTemplate.appendChild(divBoxContainer);

                document.getElementById('info-container').appendChild(htmlTemplate);
            });
        }
    }

}