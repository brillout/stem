import{I as n}from"../../chunk-5560980d.js";import{a as t,j as e,F as i}from"../../chunk-76216a9c.js";function c(){return t("div",{style:{maxWidth:880},id:"vision-page",children:[e(r,{}),e(o,{})]})}function r(){return e(i,{children:t("div",{style:{marginBottom:20,marginTop:30},children:[t("div",{style:{textAlign:"center"},children:[e("h1",{style:{fontSize:"2.6em",margin:0},children:"No-code Integrations. Ejectable."}),t("div",{style:{fontSize:"1.4em",margin:"15px auto",maxWidth:700},children:["Integrate tools to your existing app without writing code. As the",e("br",{}),"need arises, eject integration code for full customizability."]})]}),e("div",{style:{display:"flex",justifyContent:"center",fontSize:"1.1em"},children:e("blockquote",{className:"no-emoji",style:{marginRight:6,maxWidth:600},children:t("div",{style:{display:"flex",alignItems:"center"},children:[e("span",{className:"warning",style:{fontSize:"1.3em",marginRight:15}}),t("p",{children:["This page is meant for ",e("a",{href:"https://vite-plugin-ssr.com",children:"vite-plugin-ssr"})," users. If you aren't a vite-plugin-ssr user, then you won't understand this."]})]})})})]})})}function o(){return t("div",{style:{fontSize:"1.1em",color:"#0c1b33dd"},children:[e("h2",{children:"Example: Frontend"}),t("p",{children:["By using ",e("code",{children:"stem-react"})," you get a ",e("b",{children:"React DX like Next.js"})," powered by Vite and vite-plugin-ssr. For a ",e("b",{children:"Vue DX like Nuxt.js"})," you can use ",e("code",{children:"stem-vue"})," instead."]}),e(n,{integrations:["stem-react","stem-vue"]}),t("blockquote",{children:[e("p",{children:e("b",{children:"Ejectable"})}),t("p",{children:["Usually, with vite-plugin-ssr, the user defines a ",e("code",{children:"renderer/"})," directory that determintes how pages are rendered. However, when using ",e("code",{children:"stem-react"}),", it's ",e("code",{children:"node_modules/stem-react/renderer/"})," ","instead that determines how pages are rendered."]}),t("p",{children:["You can eject ",e("code",{children:"stem-react"}),": the directory ",e("code",{children:"renderer/"})," is moved from"," ",e("code",{children:"node_modules/stem-react/renderer/"})," to your repository's root directory. In other words, after ejecting, you fully control how pages are rendererd. You can then even replace React with any UI framework you want (Preact, Solid, ...)."]}),t("p",{children:["This means you can use ",e("code",{children:"stem-react"})," to quickly get started and, if the need arises, you can eject in order to gain control and flexibility."]})]}),e("h2",{children:"Example: authentication"}),t("p",{children:["You can add authentication to your app simply by installing the ",e("code",{children:"stem-nextauth"})," package."]}),e(n,{integrations:["stem-nextauth"]}),t("p",{children:["You have ",e("b",{children:"zero boilerplate code"})," to write: ",e("code",{children:"stem-nextauth"})," includes everything, including a UI at ",e("code",{children:"/login"})," and ",e("code",{children:"/signup"}),"."]}),t("p",{children:["For ",e("code",{children:"stem-nextauth"})," to work, you also have to install ",e("code",{children:"stem-prisma"})," (enabling"," ",e("code",{children:"stem-nextauth"})," to talk to your database), ",e("code",{children:"stem-telefunc"})," (enabling"," ",e("code",{children:"stem-nextauth"}),"'s frontend to talk to the backend), and ",e("code",{children:"stem-gmail"})," (enabling"," ",e("code",{children:"stem-nextauth"})," to send emails)."]}),e(n,{integrations:["stem-prisma","stem-telefunc","stem-gmail"]}),t("p",{children:["All these ",e("code",{children:"stem-*"})," pacakges integrate with each other automatically by using open standards."]}),t("blockquote",{children:[e("p",{children:e("b",{children:"Ejectable"})}),t("p",{children:["The ",e("code",{children:"stem-nextauth"})," package automatically adds authentication to your app in a way that works for the majority of users, while you can eject parts that don't work for you."]}),t("p",{children:["For example, if you don't like the UI of ",e("code",{children:"/login"})," and ",e("code",{children:"/signup"})," that is built into"," ",e("code",{children:"stem-nextauth"}),", then you can eject and customize the UI."]}),t("p",{children:["If you eject all your ",e("code",{children:"stem-*"})," packages, then you completely remove Stem. While only very few users need to go that extreme, it shows that you can gain as much control as needed."]})]}),e("h2",{children:"Conclusion"}),t("p",{children:["Stem enables you to quickly get started with a full-fledged app. As you scale, and if you need special needs,"," ","you can eject and take control over integration."]})]})}export{c as Page};
