webpackJsonp([2],{"+OLR":function(n,t,a){"use strict";function l(n){return m._40(0,[(n()(),m._17(0,null,null,8,"section",[["class","columns"]],null,null,null,null,null)),(n()(),m._38(null,["\n  "])),(n()(),m._17(0,null,null,5,"div",[["class","column col-12"]],null,null,null,null,null)),(n()(),m._38(null,["\n    "])),(n()(),m._17(0,null,null,2,"ab-panel",[],null,null,null,f.b,f.a)),m._15(114688,null,0,p.a,[d.a],{data:[0,"data"],schema:[1,"schema"]},null),(n()(),m._38(null,["\n    "])),(n()(),m._38(null,["\n  "])),(n()(),m._38(null,["\n"]))],function(n,t){var a=t.component;n(t,5,0,a.organizationData,a.viewSchema)},null)}function i(n){return m._40(0,[(n()(),m._11(16777216,null,null,1,null,l)),m._15(16384,null,0,z.l,[m.Z,m.W],{ngIf:[0,"ngIf"]},null),(n()(),m._38(null,["\n"]))],function(n,t){var a=t.component;n(t,1,0,a.viewSchema&&a.organizationData)},null)}function o(n){return m._40(0,[(n()(),m._17(0,null,null,1,"ab-organization-home",[],null,null,null,i,y)),m._15(114688,null,0,_,[b.a,c,d.a,z.h],null,null)],function(n,t){n(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(){}return n}(),u=a("FFUw"),r=a("XKz0"),c=function(){function n(n,t){this.http=n,this.schemaService=t,this.organizationsUrl="home/organizations"}return n.prototype.getOrganizationBySlug=function(n){return this.http.get(this.organizationsUrl+"/"+n)},n.prototype.getSchemaValues=function(n,t){return this.schemaService.populateDefaultValues(n,t)},n.ctorParameters=function(){return[{type:r.c},{type:u.a}]},n}(),s=a("BkNc"),h=a("qbdv"),g=a("FFUw"),_=function(){function n(n,t,a,l){this.route=n,this.organization=t,this.schema=a,this.location=l,this.organizationsUrl="organizations",this.showEdition=!1,this.loadedMetadata=!1,this.loadingPanelSchema={loading:!0,empty:!1}}return n.prototype.setSchemas=function(){var n=this;this.schema.getSchema$("organization").subscribe(function(t){n.viewSchema=t,n.viewSchema.header.title=n.organizationData.name,n.viewSchema.header.subtitle=n.organizationData.slogan||n.organizationData.city})},n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe(function(t){var a=t.slug;n.organization.getOrganizationBySlug(a).subscribe(function(t){n.organizationData=t,n.organizationData?n.setSchemas():(n.loadingPanelSchema.loading=!1,n.loadedMetadata=!0,n.loadingPanelSchema.empty=!0)})})},n.ctorParameters=function(){return[{type:s.a},{type:c},{type:g.a},{type:h.h}]},n}(),m=a("/oeL"),f=a("zIHg"),p=a("xFO+"),d=a("FFUw"),z=a("qbdv"),b=a("BkNc"),v=[],y=m._14({encapsulation:2,styles:v,data:{}}),S=m._12("ab-organization-home",_,o,{},{},[]),w=function(){function n(){}return n}();a.d(t,"OrganizationModuleNgFactory",function(){return q});var F=a("/oeL"),D=a("qbdv"),O=a("bm2B"),U=a("A5Io"),k=a("FFUw"),B=a("XKz0"),I=a("BkNc"),P=a("IFTN"),q=F._13(e,[],function(n){return F._28([F._29(512,F.k,F._9,[[8,[S]],[3,F.k],F.E]),F._29(4608,D.n,D.m,[F.A]),F._29(4608,O.e,O.e,[]),F._29(4608,O.s,O.s,[]),F._29(4608,U.a,U.a,[]),F._29(4608,k.a,k.a,[B.c]),F._29(4608,c,c,[B.c,k.a]),F._29(512,D.b,D.b,[]),F._29(512,I.o,I.o,[[2,I.t],[2,I.l]]),F._29(512,w,w,[]),F._29(512,O.q,O.q,[]),F._29(512,O.n,O.n,[]),F._29(512,P.a,P.a,[]),F._29(512,e,e,[]),F._29(1024,I.j,function(){return[[{path:"",component:_,data:{title:"Organization"}}]]},[])])})}});