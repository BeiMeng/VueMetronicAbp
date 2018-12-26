const appConfig=process.env.NODE_ENV === 'production' ?
{
    "remoteServiceBaseUrl": "http://www.ruianer.com:8008",
    "appBaseUrl": "http://localhost:4200",
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
    "remoteServiceBaseUrl": "http://www.ruianer.com:8008",
    "appBaseUrl": "http://localhost:4200",
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