/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  let config = utils.defaultConfigFile('googleads', 'default.yaml');
  if (!config.enable) return;

  if (!config.cliend_id) {
      hexo.log.warn(`googleads.cliend_id can't be null.`);
      return;
  }

  injects.bodyEnd.raw('googleads', utils.getFileContent('googleads.njk'));
  if(config.post_ads_enable){
  injects.bodyEnd.raw('googleads','<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
  }
  //injects.style.push(utils.getFilePath('googleads.styl'));
}, (hexo.config.googleads || {}).priority);