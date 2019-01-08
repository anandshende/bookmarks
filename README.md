
# bookmarks

  
Feature-wise object properties:-

 

## HyperLinks

#### Simple Link

    "links": [
	    {
		    "header": "Heading",
		    "values": [
			    {
				    "name": "Display Name",
				    "url": "https://nodejs.org/dist/latest-v10.x/docs/api/"
				}
			]
		}
	]

#### Customizable Link

To customize a link at runtime, we need to add a ***configurable*** property. Another optional property is ***commonConf***.


    "links": [
    {
        "header": "Heading",
        "values": [
            { 
                "name": "Display Name", 
                "url": "https://nodejs.org/dist/latest-v10.x/docs/api/",
                "commonConf": {
                    "buttonText": 'Check Git Size',
                    "appendedString": ''
                },
                "configurable": [
                    {
                        "name": 'User Name',
                        "placeholder": "User Name",
                        "after": '/',
                        "defaultValue": "getBot",
                        "id": 'userName'
                    }
                ]
            }
        ]
    }]

## Credentials

    "credentails": [
        {
            "header": "Personal Credentials",
            "values": [
                { "name": "Gmail", "username": "username", "password": "password" },
                { "name": "GitHub", "username": "username", "password": "password" },
                { "name": "Amazon Prime", "username": "username", "password": "password" },
                { "name": "Netflix", "username": "username", "password": "password" }
            ]
        }
    ]

## Info Board

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
        }
    ]

