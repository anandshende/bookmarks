var data = {
    "links": [
        {
            "header": "Documentations",
            "values": [
                { "name": "Nodejs Doc", "url": "https://nodejs.org/dist/latest-v10.x/docs/api/" },
                { "name": "Express Doc", "url": "http://expressjs.com/en/api.html" },
                { "name": "RxJS Docs", "url": "http://reactivex.io/rxjs/manual/overview.html" },
                { "name": "Mongoose Doc", "url": "https://mongoosejs.com/docs/api.html" },
                { "name": "HTTP Status Codes", "url": "https://www.restapitutorial.com/httpstatuscodes.html" },
                { "name": "Sass Doc", "url": "https://sass-lang.com/guide" },
            ]
        },
        {
            "header": "My Accounts",
            "values": [
                { "name": "Github", "url": "https://github.com/anandshende" },
                {
                    "name": "Github Repo Info", "url": "https://api.github.com/repos/",
                    "configurable": [
                        {
                            "name": 'User Name',
                            "placeholder": "User Name",
                            "after": '/',
                            "id": 'userName'
                        },
                        {
                            "name": 'Repo Url',
                            "placeholder": "Repo Url",
                            // "defaultValue": "getBot",
                            "id": 'repoUrl'
                        }
                    ],
                    "commonConf": {
                        "buttonText": 'Check Git Size',
                        "appendedString": ''
                    }
                },
                { "name": "Office 365", "url": "https://www.office.com/?auth=2" },
                { "name": "Google Scripts", "url": "https://script.google.com/home" },
                { "name": "Gmail", "url": "https://www.gmail.com/" },
                { "name": "Medium", "url": "https://medium.com/me/stories/drafts" }
            ]
        },
        {
            "header": "Free Images",
            "values": [
                { "name": "Free Pik", "url": "https://www.freepik.com/" },
                { "name": "Pexels", "url": "https://www.pexels.com" },
                { "name": "Pixabay", "url": "https://pixabay.com" },
                { "name": "Unsplash", "url": "https://unsplash.com" },
                { "name": "Draw.io", "url": "https://www.draw.io" },
                /* {
                    "name": "Dev Deployed Bots", "url": "https://cp-dev.smartbothub.com/4477/v1/api/",
                    "configurable": [
                        {
                            "name": 'BotId',
                            "placeholder": "BotId",
                            "after": '/',
                            "id": 'botId'
                        },
                        {
                            "name": 'Bot Image',
                            "defaultValue": "getBot",
                            "id": 'botImage'
                        }
                    ],
                    "commonConf": {
                        "buttonText": 'Open Bot',
                        "appendedString": ''
                    }
                } */
            ]
        },
        {
            "header": "Website Testing",
            "values": [
                { "name": "Browser - Browserling", "url": "https://www.browserling.com/" },
                { "name": "Browser & App - BrowserStack", "url": "https://www.browserstack.com" }
            ]
        },
        {
            "header": "Entertainment",
            "values": [
                { "name": "Amazon Prime", "url": "https://www.primevideo.com" },
                { "name": "Netflix", "url": "https://www.netflix.com/browse" }
            ]
        }
    ],
    "credentails": [
        {
            "header": "Personal Credentials",
            "values": [
                { "name": "Gmail", "username": "username", "password": "password" },
                { "name": "GitHub", "username": "username", "password": "password" },
                { "name": "Amazon Prime", "username": "username", "password": "password" },
                { "name": "Netflix", "username": "username", "password": "password" }
            ]
        },
        {
            "header": "Credentials",
            "values": [
                { "name": "One Drive - Personal", "username": "username", "password": "password" },
                { "name": "One Drive - Smartek", "username": "username", "password": "password" },
            ]
        },
        {
            "header": "Website Testing",
            "values": [
                { "name": "BrowserStack", "username": "userName", "password": "password" },
            ]
        }
    ],
    "info": [
        {
            "header": "Finance",
            "values": [
                {
                    "name": "Bank 1",
                    "values": [
                        { "key": "Account Number", "value": "11111111111111" },
                        { "key": "Branch", "value": "Branch" },
                        { "key": "IFSC", "value": "IFSCIFSCIFSC" },
                        { "key": "Customer ID", "value": "444444" }
                    ]
                },
                {
                    "name": "Bank 2",
                    "values": [
                        { "key": "Account Number", "value": "555555555" },
                        { "key": "Branch", "value": "Branch" },
                        { "key": "IFSC", "value": "SBINIFSCIFSC" },
                        { "key": "CIF Number", "value": "879879798" }
                    ]
                },
                {
                    "name": "PF",
                    "values": [
                        { "key": "UAN", "value": "777777" },
                        { "key": "Password", "value": "ssssssssss" }
                    ]
                }
            ]
        },
        {
            "header": "ID Proofs",
            "values": [
                {
                    "name": "Aadhaar Card",
                    "values": [
                        { "key": "Aadhaar Number", "value": "123123123" }
                    ]
                },
                {
                    "name": "Passport",
                    "values": [
                        { "key": "Passport Number", "value": "asd123123" },
                        { "key": "Date of Issue", "value": "27/05/2016" },
                        { "key": "Date of Expiry", "value": "26/05/2026" }
                    ]
                }
            ]
        },
        {
            "header": "R&D",
            "values": [
                {
                    "name": "HTML CSS",
                    "values": [
                        { "key": "Location", "value": "E:\\Programs\\HTML CSS" }
                    ]
                },
                {
                    "name": "Angular",
                    "values": [
                        { "key": "Location", "value": "E:\\Programs\\Angular" },
                    ]
                }
            ]
        }
    ]
}