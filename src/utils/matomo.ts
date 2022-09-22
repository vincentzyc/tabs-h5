import { getUrlParam } from ".";

/**
 * 添加matomo统计
 * @param {Number} id matomo统计id
 */
export function addMatomo(id: number) {
  if (id !== 0 && !id) return;
  if (document.getElementById("matomoCode")) return;
  const script = document.createElement("script"),
    jscode = `
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u = "//cdn.lipush.com/junbo/js/";
    var ou = "//tj.liulianglf.com/";
    _paq.push(['setTrackerUrl', ou+'matomo.php']);
    _paq.push(['setSiteId', '${id}']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js';
    s.parentNode.insertBefore(g,s);
  })();
  `;
  script.type = "text/javascript";
  script.id = "matomoCode";
  script.innerHTML = jscode;
  document.head.appendChild(script);
}

// matomo上报
// export function reportMatomo(title: string, value = '', onlyMatomo = false) {
export function reportMatomo(title: string, value = '') {
  if (!title) return;
  const templateId = getUrlParam('id') || '';
  const pid = getUrlParam('pid') || '';
  pid ? window._paq.push(["trackEvent", `${document.title}-${templateId}-${pid}`, title, value])
    : window._paq.push(["trackEvent", `${document.title}-${templateId}`, title, value]);
  // if (onlyMatomo) return
  // 顺便上报友盟
  // if (window._czc) {
  //   pid ? window._czc.push(["_trackEvent", `${document.title}-${templateId}-${pid}`, title, value])
  //     : window._czc.push(["_trackEvent", `${document.title}-${templateId}`, title, value]);
  // }
}