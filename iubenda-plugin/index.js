module.exports = function (context, options) {
  return {
    name: "iubenda-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          `<script type="text/javascript">
          var _iub = _iub || [];
          _iub.csConfiguration = {"consentOnContinuedBrowsing":false,"whitelabel":false,"lang":"en","siteId":2057126,"cookiePolicyId":23081204, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#bb342f","acceptButtonCaptionColor":"white","customizeButtonColor":"#212121","customizeButtonCaptionColor":"white","rejectButtonColor":"#bb342f","rejectButtonCaptionColor":"white","position":"float-bottom-right","textColor":"white","backgroundColor":"#000001" }};
          </script>
          <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`,
        ],
      };
    },
  };
};
