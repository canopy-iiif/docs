(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{8143:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configuration/locale",function(){return n(4779)}])},4779:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return r}});var l=n(5893),i=n(2673),o=n(2643);let r=[{depth:2,value:"Properties",id:"properties"},{depth:2,value:"Customizing a Locale",id:"customizing-a-locale"},{depth:2,value:"Multiple Locales",id:"multiple-locales"},{depth:2,value:"Example Locale Configuration",id:"example-locale-configuration"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",span:"span",em:"em"},(0,o.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Locale Preferences"}),"\n",(0,l.jsx)(s.p,{children:"Canopy IIIF supports locale preferences for user interface language. More than one locale can be set as options to allow users to toggle between languages. If only one locale is defined, the language toggle will not render."}),"\n",(0,l.jsx)(s.p,{children:"The default locale is English."}),"\n",(0,l.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"locales"})," property is optional and provides an array of preset Locales for the user interface."]}),"\n",(0,l.jsx)(s.p,{children:"For each Locale, the following properties are required:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"left",children:"Property"}),(0,l.jsx)(s.th,{align:"left",children:"Type"}),(0,l.jsx)(s.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"config"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"string"})}),(0,l.jsx)(s.td,{align:"left",children:"Path to the locale configuration file."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"label"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"string"})}),(0,l.jsx)(s.td,{align:"left",children:"Label for the locale."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"lang"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"string"})}),(0,l.jsx)(s.td,{align:"left",children:"BCP 47 language code for the locale."})]})]})]}),"\n",(0,l.jsx)(s.pre,{"data-language":"json","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"config"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales/en.json"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"label"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"English"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lang"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"customizing-a-locale",children:"Customizing a Locale"}),"\n",(0,l.jsxs)(s.p,{children:["User interface language strings are set through a locale configuration file located in the ",(0,l.jsx)(s.code,{children:"config/locales"})," directory. Persons customizing a Canopy instance can add new language configurations to support their preferred locales. We welcome all pull requests to add new locales to the Canopy IIIF project."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"English"})," configuration is predefined and found at ",(0,l.jsx)(s.code,{children:"config/locales/en.json"})]}),"\n",(0,l.jsx)(s.pre,{"data-language":"json","data-theme":"default",filename:"config/locales/en.json",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"footerSourceCollection"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Source Collection"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"footerToggleTheme"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Toggle Theme"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"homepageHighlightedWorks"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Highlighted Works"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchButton"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Search"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchResults"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Results"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchFilter"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Filter"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchFilterAny"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Any"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchFilterClear"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Clear All"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchFilterClose"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Close"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"searchFilterSubmit"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"View Results"'})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"multiple-locales",children:"Multiple Locales"}),"\n",(0,l.jsxs)(s.p,{children:["If ",(0,l.jsx)(s.em,{children:"more than one"})," locale is defined in the ",(0,l.jsx)(s.code,{children:"config/canopy.json"}),", a select element will render in the header allowing users to toggle the defined languages. In addition, Canopy will attempt to align the language set by the user's browser with the available options. As a fallback, the first locale defined in the array will be set."]}),"\n",(0,l.jsxs)(s.p,{children:["As an example, if a visitor with ",(0,l.jsx)(s.code,{children:"en-US"})," visited a Canopy instance that included both ",(0,l.jsx)(s.code,{children:"no"})," and ",(0,l.jsx)(s.code,{children:"en"})," as language options, the ",(0,l.jsx)(s.code,{children:"en"})," locale configuration would be the default locale. Whereas, if a user visited this same instance with ",(0,l.jsx)(s.code,{children:"fr"})," as their browser language, the default locale would be the ",(0,l.jsx)(s.code,{children:"no"})," configuration."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"json","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"config"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales/no.json"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"label"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Norsk"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lang"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"no"'})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"config"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales/en.json"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"label"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"English"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lang"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"example-locale-configuration",children:"Example Locale Configuration"}),"\n",(0,l.jsxs)(s.p,{children:["In this example configuration, the ",(0,l.jsx)(s.code,{children:"locales"})," property is set to include both ",(0,l.jsx)(s.code,{children:"pt"})," and ",(0,l.jsx)(s.code,{children:"en"})," options. The ",(0,l.jsx)(s.code,{children:"pt"})," locale is set as preferred locale and will be the default language for the user interface unless the user's browser language is set to ",(0,l.jsx)(s.code,{children:"en"}),"."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"json","data-theme":"default",filename:"config/canopy.json",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"collection"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://sebastiao-lacerda.vercel.app"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"locales"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsx)(s.span,{className:"line highlighted",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"config"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales/pt.json"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"label"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Portugu\xeas"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lang"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"pt"'})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line highlighted",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"config"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"locales/en.json"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"label"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"English"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line highlighted",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lang"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'})]}),"\n",(0,l.jsx)(s.span,{className:"line highlighted",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line highlighted",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/configuration/locale.mdx",route:"/configuration/locale",title:"Locale Preferences",headings:r},pageNextRoute:"/configuration/locale"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=8143)}),_N_E=e.O()}]);