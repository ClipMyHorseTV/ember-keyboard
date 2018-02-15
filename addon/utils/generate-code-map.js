import { assign } from '@ember/polyfills';
import DEFAULT_CODE_MAP from 'ember-keyboard/fixtures/code-maps/default';
import MAC_CHROME_AND_SAFARI_CODE_MAP from 'ember-keyboard/fixtures/code-maps/mac-safari-and-chrome';
import GECKO_CODE_MAP from 'ember-keyboard/fixtures/code-maps/gecko';
import GECKO_LINUX_CODE_MAP from 'ember-keyboard/fixtures/code-maps/gecko/linux';
import FIRETV_CODE_MAP from 'ember-keyboard/fixtures/code-maps/firetv';
import GECKO_MAC_CODE_MAP from 'ember-keyboard/fixtures/code-maps/gecko/mac';
import CHROMIUM_LINUX_CODE_MAP from 'ember-keyboard/fixtures/code-maps/chromium/linux';

export default function generateCodeMap(platform = '', product = '') {
  const isGecko = product.indexOf('Gecko') > -1;
  const isChromium = product.indexOf('Chromium') > -1;
  const isChrome = product.indexOf('Chrome') > -1;
  const isSafari = product.indexOf('Safari') > -1;
  const isLinux = platform.indexOf('Linux') > -1;
  const isMac = platform.indexOf('Mac') > -1;
  const isFireTv = platform.indexOf('FireTv') > -1;

  if (isFireTv) {
    return FIRETV_CODE_MAP;
  }

  const codeMap = assign({}, DEFAULT_CODE_MAP);

  if (isGecko) {
    assign(codeMap, GECKO_CODE_MAP);

    if (isLinux) {
      assign(codeMap, GECKO_LINUX_CODE_MAP);
    } else if (isMac) {
      assign(codeMap, GECKO_MAC_CODE_MAP);
    }
  } else if (isChromium && isLinux) {
    assign(codeMap, CHROMIUM_LINUX_CODE_MAP);
  } else if (isMac && (isSafari || isChrome)) {
    assign(codeMap, MAC_CHROME_AND_SAFARI_CODE_MAP);
  }

  return codeMap;
}
