const appConfig=process.env.NODE_ENV === 'production' ?
{
    "remoteServiceBaseUrl": "http://localhost:54642", //http://www.tbkmama.com:81
    "appBaseUrl": "http://localhost:3000",
    "localeMappings": [
      {
        "from": "pt-BR",
        "to": "pt"
      },
      {
        "from": "zh-CN",
        "to": "zh"
      },
      {
          "from": "he-IL",
          "to": "he"
      }
    ]
}
:
{
    "remoteServiceBaseUrl": "http://localhost:54642", //http://www.tbkmama.com:81
    "appBaseUrl": "http://localhost:3000",
    "localeMappings": [
      {
        "from": "pt-BR",
        "to": "pt"
      },
      {
        "from": "zh-CN",
        "to": "zh"
      },
      {
          "from": "he-IL",
          "to": "he"
      }
    ]
}
export default appConfig;