# Monaco on Cloud
Using [Microsoft/monaco\-editor](https://github.com/Microsoft/monaco-editor) (powers [VS Code](https://code.visualstudio.com/)) on [Microsoft Azure Web App Service](https://azure.microsoft.com/ja-jp/services/app-service/web/)

## Developing
Use [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en).

## Deploying
[Create Microsoft Azure WebApp](https://docs.microsoft.com/ja-jp/azure/app-service/app-service-web-get-started-html#create-a-web-app) and push to the Azure remote.

```
$ git remote add azure 'https://<username>@<app_name>.scm.azurewebsites.net/<app_name>.git'
$ git push azure master:master
```

## License
[MIT](LICENSE.md)
