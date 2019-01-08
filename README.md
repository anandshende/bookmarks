# bookmarks

Feature-wise object properties:-

# Features-

### Hyper Links

###### Simple Link
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

###### Customizable Link
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
    }
]