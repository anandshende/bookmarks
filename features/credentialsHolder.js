var CredentialsHolder = {

    loadCredentialsHolder: function () {
        if (jsonData.credentails && jsonData.credentails.length > 0) {
            jsonData.credentails.map((item) => {
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
                            var username = document.getElementById('username');
                            var password = document.getElementById('password');
                            document.getElementById('myDialog').showModal();
                            document.getElementById('heading').innerText = value.name;
                            username.value = value.username;
                            password.value = value.password;
                            username.setAttribute('readonly', true);
                            password.setAttribute('readonly', true);

                            CommonUtils.setOnClickCopy(username);
                            CommonUtils.setOnClickCopy(password);

                            if (value.otherDetails) {
                                document.getElementById('showOtherDetails').style.display = 'table-row';
                                document.getElementById('otherDetails').value = value.otherDetails;
                                document.getElementById('otherDetails').setAttribute('readonly', true);
                            } else {
                                document.getElementById('showOtherDetails').style.display = 'none';
                            }
                        };
                    });
                }

                divBoxContainer.appendChild(divBoxHeader);
                divBoxContainer.appendChild(ulElement);
                htmlTemplate.appendChild(divBoxContainer);

                document.getElementById('cred-container').appendChild(htmlTemplate);
            });
        }
    }

};

