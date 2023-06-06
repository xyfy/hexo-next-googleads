/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);
const fs = require('hexo-fs');
const path = require('path');

hexo.extend.filter.register('theme_inject', injects => {

  let config = utils.defaultConfigFile('googleads', 'default.yaml');
  if (!config.enable) return;

  if (!config.client_id) {
    hexo.log.warn(`googleads.client_id can't be null.`);
    return;
  }
  //console.debug(config.ads_txt);
  if (config.ads_txt) {
    // add content to ads.txt, if not exist ,create it, otherwise, append it
    let rootDir = process.cwd();
    let adstxtPath = path.join(rootDir, 'source/ads.txt')
    //console.debug(adstxtPath);
    if (fs.existsSync(adstxtPath)) {
      let content = fs.readFileSync(adstxtPath, { encoding: 'utf-8' });
      //console.debug(content);
      if (content.indexOf(config.ads_txt) == -1) {
        fs.appendFileSync(adstxtPath, '\n' + config.ads_txt);
      }
    }
    else {
      fs.writeFileSync(adstxtPath, config.ads_txt);
    }
  }
  injects.head.raw('googleads', '<script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + config.client_id + '" crossorigin="anonymous"></script>');
  if (config.post_ads_enable) {
    injects.bodyEnd.raw('googleads', utils.getFileContent('googleads.njk'));
    injects.bodyEnd.raw('googleads', '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
  }
  //injects.style.push(utils.getFilePath('googleads.styl'));
}, (hexo.config.googleads || {}).priority);
