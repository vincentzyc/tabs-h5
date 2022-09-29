import { getUrlParam } from ".";

// matomo上报
export function reportMatomo(title: string, value = '') {
  if (!title) return;
  const templateId = getUrlParam('id') || '202209271020';
  const pid = getUrlParam('pid') || '';
  pid ? window._paq.push(["trackEvent", `${document.title}-${templateId}-${pid}`, title, value])
    : window._paq.push(["trackEvent", `${document.title}-${templateId}`, title, value]);
}

export function initfingerprint2() {
  if (typeof murmur !== 'undefined' && murmur) return
  let script = document.createElement("script");
  script.src = 'https://cdn.lipush.com/other/js/fingerprint2@1.0.1.js';
  document.head.appendChild(script);
}