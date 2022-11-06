import{I as n}from"../../chunk-5560980d.js";import{a as t,j as e,F as i}from"../../chunk-76216a9c.js";function d(){return t("div",{style:{maxWidth:880},id:"vision-page",children:[e(o,{}),e(r,{})]})}function o(){return e(i,{children:t("div",{style:{textAlign:"center",marginBottom:40,marginTop:10},children:[e("h1",{style:{fontSize:"2.6em",margin:0},children:"No-code Integrations. Ejectable."}),t("div",{style:{fontSize:"1.4em",margin:"15px auto",maxWidth:700},children:["Integrate tools to your existing stack without writing code. As the",e("br",{}),"need arises, eject integration code for full customizability."]}),e("div",{style:{textAlign:"center",fontSize:"1.1em",margin:30},children:t("span",{style:{backgroundColor:"#eee",borderRadius:10,padding:"10px 20px"},children:[e("span",{className:"construction",style:{marginRight:6}})," Work-in-progress"]})})]})})}function r(){return t("div",{style:{fontSize:"1.1em",color:"#0c1b33dd"},children:[e("h2",{children:"Example: Frontend"}),t("p",{children:["By using and ",e("code",{children:"stem-react"})," you get a ",e("b",{children:"React DX like Next.js"})," powered by Vite and vite-plugin-ssr. For a ",e("b",{children:"Vue DX like Nuxt.js"})," you can use ",e("code",{children:"stem-vue"})," instead."]}),e(n,{integrations:["stem-react","stem-vue"]}),t("blockquote",{children:[e("p",{children:e("b",{children:"Ejection"})}),t("p",{children:["Usually, with vite-plugin-ssr, the user defines a ",e("code",{children:"renderer/"})," directory that determintes how pages are rendered. However, when using ",e("code",{children:"stem-react"}),", it's ",e("code",{children:"node_modules/stem-react/renderer/"})," ","instead that determines how pages are rendered."]}),t("p",{children:["You can eject ",e("code",{children:"stem-react"}),": the directory ",e("code",{children:"renderer/"})," is moved from"," ",e("code",{children:"node_modules/stem-react/renderer/"})," to your repository's root directory. In other words, it's now you that fully controls how pages are rendererd, and you can then even replace React with any UI framework you want (Svelte, Preact, Solid, ...)."]}),t("p",{children:["This means you can use ",e("code",{children:"stem-react"})," to quickly get started while, if the need arises at scale, you can eject to gain control and flexibility."]})]}),e("h2",{children:"Example: authentication"}),t("p",{children:["You can add authentication to your app simply by installing the ",e("code",{children:"stem-nextauth"})," package."]}),e(n,{integrations:["stem-nextauth"]}),t("p",{children:["You have ",e("b",{children:"zero boilerplate code"})," to write: ",e("code",{children:"stem-nextauth"})," includes everything, including a UI at ",e("code",{children:"/login"})," and ",e("code",{children:"/signup"}),"."]}),t("p",{children:["For ",e("code",{children:"stem-next"})," to work, you also have to install ",e("code",{children:"stem-prisma"})," (enabling"," ",e("code",{children:"stem-nextauth"})," to talk to your database), ",e("code",{children:"stem-telefunc"})," (enabling"," ",e("code",{children:"stem-nextauth"}),"'s frontend to talk to the backend), and ",e("code",{children:"stem-gmail"})," (enabling"," ",e("code",{children:"stem-nextauth"})," to send emails)."]}),e(n,{integrations:["stem-prisma","stem-telefunc","stem-gmail"]}),t("p",{children:["All these ",e("code",{children:"stem-*"})," pacakges integrate with each other automatically by using open standards."]}),t("p",{children:["The ",e("code",{children:"stem-nextauth"})," package automatically adds authentication to your app in a way that works for the majority of users. If it doesn't work for you, then you can ",e("b",{children:"eject"})," to take control over the integration code so that you can ",e("b",{children:"fully customize your app's authentication implementation"}),"."]}),t("blockquote",{children:[e("p",{children:e("b",{children:"Ejection"})}),e("p",{children:`In this example, with a normal app without Stem, you'd need to write glue code to tell the authentication code how to send emails. We call this kind of code "integration code".`}),t("p",{children:["Stem Integrations (i.e. ",e("code",{children:"stem-*"}),' packages) contain such integration code, which are designed to work for the majority of users. But users with special needs can "eject": the integration code is moved from the'," ",e("code",{children:"stem-*"})," package to the user's repository and, consequently, the user gains full control over the integration code."]}),t("p",{children:["If a user were to eject all its ",e("code",{children:"stem-*"})," packages, then the user completely removes Stem. While only very few users need to go that extreme, users can gain as much control as needed."]})]}),t("p",{children:["Stem enables you to ",e("b",{children:"quickly get started with a fully functional app"}),". As you scale, if you need special needs, ",e("b",{children:"you can eject and take control over integration code"}),"."]})]})}export{d as Page};
