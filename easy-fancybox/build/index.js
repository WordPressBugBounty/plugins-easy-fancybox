(()=>{"use strict";const e=window.React,t=window.wp.blockEditor,a=window.wp.components,n=window.wp.compose,i=window.wp.hooks,r=window.wp.i18n,o=(0,n.createHigherOrderComponent)((n=>i=>{const{name:o}=i,l="core/image"===o||"core/gallery"===o,c=firelight.activeLightbox,s="Firelight Pro Lightbox"===c,m=firelight.isPayingUser,g=firelight.isProUser,h=firelight.settingsUrl,b="1"===firelight.lightboxPanelOpen;return l?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n,{key:"edit",...i}),(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(a.PanelBody,{className:"fancybox-settings",title:(0,r.__)("Lightbox"),initialOpen:b},(0,e.createElement)("p",null,(0,r.__)("You are using: "),(0,e.createElement)("span",{className:"fancybox-active-lightbox"},c),"."),!g&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.ToggleControl,{label:"Use Pro Lightbox?",checked:!1,disabled:!0}),(0,e.createElement)("p",{className:"fancybox-upgrade-notice"},(0,r.__)("Upgrade to enable Pro Lightbox.")),(0,e.createElement)("div",{className:"fancybox-button-container"},(0,e.createElement)(a.Button,{variant:"primary",className:"fancybox-button",href:"https://firelightwp.com/pro-lightbox/?utm_source=block-editor&utm_medium=referral&utm_campaign=easy-fancybox",target:"_blank"},(0,r.__)("Demos"))," ",(0,e.createElement)(a.Button,{variant:"primary",className:"fancybox-button",href:"https://firelightwp.com/pro-lightbox/pricing/?utm_source=block-editor&utm_medium=referral&utm_campaign=easy-fancybox",target:"_blank"},m?(0,r.__)("Upgrade"):(0,r.__)("Try It Free")))),g&&!s&&(0,e.createElement)("p",null,(0,r.__)("Notice: You have an active Firelight Pro license and can use the Firelight Pro Lightbox!")),(0,e.createElement)("div",{className:"fancybox-settings-link"},(0,e.createElement)(a.Button,{variant:"link",href:h,target:"_blank"},(0,r.__)("View Lightbox Settings")))))):(0,e.createElement)(n,{...i})}),"withLightboxPanelControls");(0,i.addFilter)("editor.BlockEdit","lightpress/lightbox-panel",o)})();