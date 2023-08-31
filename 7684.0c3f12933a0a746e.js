"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7684],{7684:function(e,a,n){n.r(a),n(7378);var t=n(2682);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function o(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",p({components:a},n),(0,t.kt)("p",null,"This plugin enables more fine grained control of source map generation. It is also enabled automatically by certain settings of the ",(0,t.kt)("a",{href:"/configuration/devtool/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"devtool"))," configuration option."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"SourceMapDevToolPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"options",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"options",parentName:"h2"}),"Options",(0,t.kt)("a",{href:"#options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The following options are supported:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"test")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string")," ",(0,t.kt)("inlineCode",{parentName:"p"},"RegExp")," ",(0,t.kt)("inlineCode",{parentName:"p"},"[string, RegExp]"),"): Include source maps for modules based on their extension (defaults to ",(0,t.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".mjs"),", and ",(0,t.kt)("inlineCode",{parentName:"p"},".css"),").")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"include")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string")," ",(0,t.kt)("inlineCode",{parentName:"p"},"RegExp")," ",(0,t.kt)("inlineCode",{parentName:"p"},"[string, RegExp]"),"): Include source maps for module paths that match the given value.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"exclude")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string")," ",(0,t.kt)("inlineCode",{parentName:"p"},"RegExp")," ",(0,t.kt)("inlineCode",{parentName:"p"},"[string, RegExp]"),"): Exclude modules that match the given value from source map generation.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"filename")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): Defines the output filename of the SourceMap (will be inlined if no value is provided).")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"append")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string")," ",(0,t.kt)("inlineCode",{parentName:"p"},"function"),"): Appends the given value to the original asset. Usually the ",(0,t.kt)("inlineCode",{parentName:"p"},"#sourceMappingURL")," comment. ",(0,t.kt)("inlineCode",{parentName:"p"},"[url]")," is replaced with a URL to the source map file. Since webpack v4.36.0, path parameters are supported: ",(0,t.kt)("inlineCode",{parentName:"p"},"[chunk]"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"[filename]")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"[contenthash]"),". Setting ",(0,t.kt)("inlineCode",{parentName:"p"},"append")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," disables the appending."),(0,t.kt)("p",{parentName:"li"},"Starting from version 5.84.0, webpack allows the ",(0,t.kt)("inlineCode",{parentName:"p"},"append")," option to be a function that accepts path data and an asset info object as arguments, and returns a string."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"pathData",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," PathData",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," assetInfo",(0,t.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," AssetInfo",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"moduleFilenameTemplate")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): See ",(0,t.kt)("a",{href:"/configuration/output/#outputdevtoolmodulefilenametemplate",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"output.devtoolModuleFilenameTemplate")),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"fallbackModuleFilenameTemplate")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): See link above.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"namespace")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): See ",(0,t.kt)("a",{href:"/configuration/output/#outputdevtoolnamespace",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"output.devtoolNamespace")),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"module = true")," (",(0,t.kt)("inlineCode",{parentName:"p"},"boolean"),"): Indicates whether loaders should generate source maps.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"columns = true")," (",(0,t.kt)("inlineCode",{parentName:"p"},"boolean"),"): Indicates whether column mappings should be used.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"noSources = false")," (",(0,t.kt)("inlineCode",{parentName:"p"},"boolean"),"): Prevents the source file content from being included in the source map.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"publicPath")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): Emits absolute URLs with public path prefix, e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},"https://example.com/project/"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"fileContext")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): Makes the ",(0,t.kt)("inlineCode",{parentName:"p"},"[file]")," argument relative to this directory.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"sourceRoot")," (",(0,t.kt)("inlineCode",{parentName:"p"},"string"),"): Provide a custom value for the ",(0,t.kt)("inlineCode",{parentName:"p"},"sourceRoot")," property in the SourceMap."))),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"fileContext")," option is useful when you want to store source maps in an upper level directory to avoid ",(0,t.kt)("inlineCode",{parentName:"p"},"../../")," appearing in the absolute ",(0,t.kt)("inlineCode",{parentName:"p"},"[url]"),"."),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"Setting ",(0,t.kt)("inlineCode",{parentName:"p"},"module")," and/or ",(0,t.kt)("inlineCode",{parentName:"p"},"columns")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," will yield less accurate source maps but will also improve compilation performance significantly.")),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"If you want to use a custom configuration for this plugin in ",(0,t.kt)("a",{href:"/configuration/mode/#mode-development",parentName:"p"},"development mode"),", make sure to disable the default one. I.e. set ",(0,t.kt)("inlineCode",{parentName:"p"},"devtool: false"),".")),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.kt)("p",{parentName:"aside"},"If the default webpack ",(0,t.kt)("inlineCode",{parentName:"p"},"minimizer")," has been overridden (such as to customise the ",(0,t.kt)("inlineCode",{parentName:"p"},"TerserPlugin")," options), make sure to configure its replacement with ",(0,t.kt)("inlineCode",{parentName:"p"},"sourceMap: true")," to enable SourceMap support.")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"examples",parentName:"h2"}),"Examples",(0,t.kt)("a",{href:"#examples","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The following examples demonstrate some common use cases for this plugin."),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"basic-use-case",parentName:"h3"}),"Basic Use Case",(0,t.kt)("a",{href:"#basic-use-case","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"You can use the following code to replace the configuration option ",(0,t.kt)("inlineCode",{parentName:"p"},"devtool: inline-source-map")," with an equivalent custom plugin configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n  devtool",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  plugins",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"SourceMapDevToolPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"exclude-vendor-maps",parentName:"h3"}),"Exclude Vendor Maps",(0,t.kt)("a",{href:"#exclude-vendor-maps","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The following code would exclude source maps for any modules in the ",(0,t.kt)("inlineCode",{parentName:"p"},"vendor.js")," bundle:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"SourceMapDevToolPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'[file].map[query]'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  exclude",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,t.kt)("span",{className:"token string",parentName:"code"},"'vendor.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"host-source-maps-externally",parentName:"h3"}),"Host Source Maps Externally",(0,t.kt)("a",{href:"#host-source-maps-externally","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Set a URL for source maps. Useful for hosting them on a host that requires authorization."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"SourceMapDevToolPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  append",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'\\n//# sourceMappingURL=https://example.com/sourcemap/[url]'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'[file].map[query]'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"And for cases when source maps are stored in the upper level directory:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-code",parentName:"pre"},"project\n|- dist\n  |- public\n    |- bundle-[hash].js\n  |- sourcemaps\n    |- bundle-[hash].js.map\n")),(0,t.kt)("p",null,"With the following config:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"SourceMapDevToolPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'sourcemaps/[file].map'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  publicPath",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'https://example.com/project/'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  fileContext",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'public'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Will produce the following URL:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-code",parentName:"pre"},"https://example.com/project/sourcemaps/bundle-[hash].js.map\n")))}o.isMDXComponent=!0,a.default=o}}]);