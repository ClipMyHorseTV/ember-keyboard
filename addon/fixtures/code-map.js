import generateCodeMap from 'ember-keyboard/utils/generate-code-map';

let platform, product = '';

if (typeof FastBoot === 'undefined') {
  if (navigator.userAgent.indexOf('AmazonWebAppPlatform') > -1) {
    platform = 'FireTv';
  } else  {
    platform = navigator.platform;
    product = navigator.product;
  }
}

export default generateCodeMap(platform, product);
