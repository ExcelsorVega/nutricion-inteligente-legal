// Only public widget configuration enters this page. Auth credentials stay
// in the native client; the single-use result returns through the WebView.
(() => {
  const params = new URLSearchParams(location.search);
  const sitekey = params.get('sitekey') || '';
  const nonce = params.get('nonce') || '';
  const status = document.getElementById('status');
  const fail = () => {
    status.textContent = 'No se pudo completar la verificación. Cancela y vuelve a intentarlo.';
    window.ReactNativeWebView?.postMessage('challenge_failed');
  };
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(sitekey) || !/^[0-9a-f-]{36}$/i.test(nonce)) return fail();
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  script.onerror = fail;
  script.onload = () => {
    status.textContent = 'Completa la comprobación para continuar.';
    window.turnstile.render('#challenge', {
      sitekey, action: 'app_auth', theme: 'auto',
      callback: (token) => {
        if (typeof token !== 'string' || token.length > 4096) return fail();
        window.ReactNativeWebView?.postMessage(JSON.stringify({ type: 'verified', nonce, token }));
      },
      'error-callback': fail, 'expired-callback': fail, 'timeout-callback': fail,
    });
  };
  document.head.appendChild(script);
})();
