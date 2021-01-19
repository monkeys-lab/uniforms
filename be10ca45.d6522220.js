(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{93:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return b}));var a=o(3),r=o(7),n=(o(0),o(160)),i={id:"why-are-uniforms",title:"Why are uniforms?"},c={unversionedId:"why-are-uniforms",id:"why-are-uniforms",isDocsHomePage:!1,title:"Why are uniforms?",description:"Forms concept",source:"@site/../docs/why-are-uniforms.md",slug:"/why-are-uniforms",permalink:"/docs/why-are-uniforms",version:"current"},s=[{value:"Forms concept",id:"forms-concept",children:[]}],m={toc:s};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"forms-concept"},"Forms concept"),Object(n.b)("p",null,"There\u2019s a very interesting class-based inheritance concept for forms.\nBasically, there are a few types of forms with different capabilities.\nMost of the time you\u2019ll be using either AutoForm or ValidatedForm, but there are quite a few more to choose from:"),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:"/img/uniforms-graph.png"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"If you are not familiar with concept of HOC, read one of many posts about them first."),"\nI\u2019m sure you\u2019ve read at least one of ",Object(n.b)("em",{parentName:"p"},"Why ES6 classes are bad")," or ",Object(n.b)("em",{parentName:"p"},"class considered harmful")," posts. I\u2019ve read them too, so why is uniforms using classes? Well, it\u2019s all about the complexity."),Object(n.b)("p",{parentName:"blockquote"},"-- ",Object(n.b)("cite",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:"/img/hoc-hell.png"}),Object(n.b)("small",{style:{display:"block"}},"Screenshot of React DevTools when lots of HOC\u2019s are applied to a component.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"I wanted to achieve the same functionality as with multiple HOCs, but within one component. To be honest, readability is more important than performance. In short, I\u2019ve reached (more or less) traits with ES6 classes. The result?"),Object(n.b)("p",{parentName:"blockquote"},"-- ",Object(n.b)("cite",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import BaseForm from './BaseForm';\nimport QuickForm from './QuickForm';\nimport ValidatedForm from './ValidatedForm';\n\nconst ValidatedQuickForm = ValidatedForm.Validated(QuickForm.Quick(BaseForm));\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:"/img/uniforms-traits.png"}),Object(n.b)("small",{style:{display:"block"}},"AutoValidatedQuickSemanticForm (using 5 \u201ctraits\u201d) viewed in React DevTools.")),Object(n.b)("p",null,"While it\u2019s not a universal approach that will work in every situation, using it in uniforms allows us to deliver clean-looking components while keeping extensibility and separation of concerns."),Object(n.b)("hr",null),Object(n.b)("p",null,"Based on ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.meteor.com/managing-forms-in-a-meteor-react-project-with-uniforms-33d60602b43a"}),"Managing forms in a Meteor/React project with the uniforms package")," written by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MacRusher"}),"Maciej Stasie\u0142uk"),"."))}b.isMDXComponent=!0}}]);