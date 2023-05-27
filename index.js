/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  let config = utils.defaultConfigFile('googleads', 'default.yaml');
  if (!config.enable) return;

  if (!config.client_id) {
      hexo.log.warn(`googleads.client_id can't be null.`);
      return;
  }

  injects.bodyEnd.raw('googleads', utils.getFileContent('googleads.njk'));
  if(config.post_ads_enable){
    njects.bodyEnd.raw('googleads','<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
  }
  //injects.style.push(utils.getFilePath('googleads.styl'));
}, (hexo.config.googleads || {}).priority);
