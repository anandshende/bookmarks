var HyperLinks = {

    loadHyperLinks: function () {
        // console.log(jsonData);
        if (jsonData.links && jsonData.links.length > 0) {
            jsonData.links.map((item) => {
                var boxHeader = item.header;
                var str = `<div class="box-container"><div class="box-header">${boxHeader}</div>`
                if (item.values && item.values.length > 0) {
                    str += `<ul class="box-list-value">`;
                    item.values.map((value) => {
                        var liStr = `<li><a target = "_blank" 
                    href = "${value.url}">
                    ${value.name}</a ></li>`;

                        if (value.configurable != null && typeof value.configurable != undefined) {
                            var configurableString = JSON.stringify(value.configurable);
                            var commonConfString = JSON.stringify(value.commonConf);
                            liStr = `<li onclick="HyperLinksUtil.createLiElementToOpenModal(event,'${value.name}', '${value.url}')" 
                            data-configurable='${configurableString}' data-common='${commonConfString}'><a>${value.name}</a></li>`;
                        }

                        str += liStr;

                    });
                    str += `</ul>`;
                }
                str += '</div >'; // box-container closing
                // console.log(str);
                var htmlTemplate = document.createElement('div');
                htmlTemplate.innerHTML = str;
                htmlTemplate.className = 'class-float';
                document.getElementById('links-container').appendChild(htmlTemplate);
            });
        }
    }
};
