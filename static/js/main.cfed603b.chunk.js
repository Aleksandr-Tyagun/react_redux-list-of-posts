(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},33:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),o=n(3),u=n(22),p=(n(33),n(5)),i=n.n(p),l=n(16),m=n(23),f=n(8),_=n(6),d=n(20),E=n(21),h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return t.posts;case"DELETE_POST":return e.filter((function(e){return e.id!==t.postId}));default:return e}},b=function(e){return{type:"SET_ERROR",errorMessage:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.errorMessage;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query.toLowerCase();default:return e}},O="https://mate-academy.github.io/react_dynamic-list-of-posts/api",j=function(){var e=Object(f.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/posts.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/users.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/comments.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Object(_.combineReducers)({loading:h,posts:v,errorMessage:y,query:N}),x=function(e){return e.loading},S=function(e){return e.posts},I=function(e){return e.errorMessage},R=function(e){return e.query},L=Object(_.createStore)(w,Object(d.composeWithDevTools)(Object(_.applyMiddleware)(E.a))),k=function(){var e=Object(o.b)(),t=Object(o.c)(x),n=Object(o.c)(I)?"Try again":"Load";return r.a.createElement("button",{type:"button",className:"app__load-button",onClick:function(){return e(function(){var e=Object(f.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"START_LOADING"}),t(b("")),Promise.all([j(),g(),T()]).then((function(e){var n=Object(m.a)(e,3),a=n[0],r=n[1],c=n[2],s=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:r.find((function(t){return t.id===e.userId}))||[],comments:c.filter((function(t){return e.id===t.postId}))||[]})}));t({type:"GET_POSTS",posts:s})})).catch((function(e){t(b(e.message))})).finally((function(){t({type:"FINISH_LOADING"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},disabled:t},t?"Loading...":n)},A=function(e){var t=e.comment,n=t.name,a=t.email,c=t.body;return r.a.createElement("li",{className:"app__comment"},r.a.createElement("p",{className:"app__comment-text"},c),r.a.createElement("span",{className:"app__comment-name"},n),r.a.createElement("a",{className:"app__comment-email",href:"mailto:".concat(a)},a))},D=function(e){var t=e.comments;return r.a.createElement("div",{className:"app__comments"},r.a.createElement("span",{className:"app__comments-title"},"Comments:"),r.a.createElement("ul",{className:"app__comments-list"},t.map((function(e){return r.a.createElement(A,{key:e.id,comment:e})}))))},C=function(e){var t=e.user,n=t.name,a=t.phone;return r.a.createElement("div",{className:"app__user"},r.a.createElement("span",{className:"app__user-title"},"Author info:"),r.a.createElement("span",{className:"app__user-name"},n),r.a.createElement("a",{className:"app__user-phone",href:"tel:".concat(a)},a))},G=function(e){var t=e.post,n=t.id,a=t.title,c=t.body,s=t.comments,u=t.user,p=Object(o.b)();return r.a.createElement("li",{className:"app__post"},r.a.createElement("button",{type:"button",className:"app__delete-button",onClick:function(){return p({type:"DELETE_POST",postId:n})}},"Delete post"),r.a.createElement("h2",{className:"app__post-title"},a),r.a.createElement("p",{className:"app__post-text"},c),r.a.createElement(C,{user:u}),s&&r.a.createElement(D,{comments:s}))};var M=function(e){var t=e.posts,n=Object(o.b)(),c=Object(o.c)(R),s=Object(a.useMemo)((function(){return t.filter((function(e){return e.title.toLowerCase().includes(c)||e.body.toLowerCase().includes(c)}))}),[t,c]),u=function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,r)}),t)}}((function(e){n({type:"SET_QUERY",query:e})}),500);return r.a.createElement("div",{className:"app__posts"},r.a.createElement("input",{className:"app__posts-input",type:"text",onChange:function(e){return u(e.target.value)}}),"posts: ".concat(s.length),r.a.createElement("ul",{className:"app__posts-list"},s.map((function(e){return r.a.createElement(G,{key:e.id,post:e})}))))},P=function(){var e=Object(o.c)(S),t=Object(o.c)(I);return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"app__title"},"Redux list of posts"),0===e.length?r.a.createElement(k,null):r.a.createElement(M,{posts:e}),""!==t&&r.a.createElement("div",{className:"app__error"},r.a.createElement("span",{className:"app__error-title"},"An error has occured:"),r.a.createElement("span",{className:"app__error-text"},t)))},q=function(){return r.a.createElement(o.a,{store:L},r.a.createElement(u.a,null,r.a.createElement(P,null)))};s.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.cfed603b.chunk.js.map