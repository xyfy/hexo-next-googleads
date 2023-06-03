# Hexo Next Google Adsense

![Theme Version](https://img.shields.io/badge/NexT-v8.4.0+-blue?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/xyfy/hexo-next-googleads?style=flat-square)
![License](https://img.shields.io/github/license/xyfy/hexo-next-googleads?style=flat-square)

## Install

```bash npm
$ npm install hexo-next-googleads --save
```

```bash yarn
$ yarn add hexo-next-googleads
```

## Configure

You can config those in both **hexo** or **theme** `_config.yml`

``` yaml
googleads:
  enable: false
  client_id: # google ads client id
  ads_txt: google.com, pub-xxx, DIRECT, xxxx    # get it from google ads console
```

It now only support `google-auto-ad` website
