import{$ as C,$a as Q,E as j,H as z,I as y,Ka as K,Pa as N,Qa as o,Ra as S,S as R,T as W,Ua as c,Wa as L,_ as I,aa as w,ba as q,bb as X,ga as F,ia as h,pa as J,qb as Y,sb as Z,ub as $}from"./chunk-3ZWTIYMJ.js";import{Aa as P,Fc as p,Gc as d,Ha as g,Ia as _,Mb as E,Mc as b,Nc as D,Oc as G,Sb as V,Wa as M,ac as a,d as de,ja as A,kc as r,lc as m,mc as O,nc as k,oc as B,qc as U,sc as u,tc as f,wa as v,zb as i}from"./chunk-5NRRMIXO.js";var x=z({source:"Home Page",events:{opened:y(),closed:y()}});var H={};de(H,{handleClosedHomePage:()=>fe,loadHomePage:()=>ve});var ve=I((l=v(C),T=v(h))=>l.pipe(w(x.opened),A(e=>{let t=T.get("userLocalId");return[o.genresFilmsAction.action({payload:{mediaType:F.Movie}}),o.genresTvAction.action({payload:{mediaType:F.Tv}}),o.trendAllFilmsAction.action(),o.trendFilmsAction.action(),o.trendTvAction.action(),o.popularFilmsHomeListAction.action(),o.popularTvHomeListAction.action(),o.upcomingFilmsAction.action(),S.getFavouriteFilmsAction.action({payload:{userLocalId:t}})]})),{functional:!0}),fe=I((l=v(C))=>l.pipe(w(x.closed),A(()=>[o.genresFilmsAction.clearAction(),o.genresTvAction.clearAction(),o.trendAllFilmsAction.clearAction(),o.trendFilmsAction.clearAction(),o.trendTvAction.clearAction(),o.popularFilmsHomeListAction.clearAction(),o.popularTvHomeListAction.clearAction(),o.upcomingFilmsAction.clearAction(),S.getFavouriteFilmsAction.clearAction()])),{functional:!0});var ge=W(Q.selectIsLoggedIn,c.selectUpdatedTrendAllFilms,c.selectTrendAllFilmsAction,c.selectUpdatedTrendFilms,c.selectTrendFilmsAction,c.selectUpdatedTrendTv,c.selectTrendTvAction,c.selectUpdatedPopularFilmsHomeList,c.selectPopularFilmsHomeListAction,c.selectUpdatedPopularTvHomeList,c.selectPopularTvHomeListAction,c.selectUpdatedUpcomingFilms,c.selectUpcomingFilmsAction,L.selectFavouriteIds,L.selectGetFavouriteAllAction,(l,T,e,t,s,n,oe,ne,re,me,le,se,ae,ce,pe)=>({isLoggedIn:l,trendAllFilms:T,trendFilms:t,trendTv:n,popularFilms:ne,popularTv:me,upcomingFilms:se,favouriteFilmsIds:ce,isLoading:!N(e||s||oe||re||le||ae||pe)})),ee={selectHomeViewModel:ge};var te=()=>P([q([H])]);function _e(l,T){if(l&1){let e=U();k(0),r(1,"div",1),O(2,"mm-hero-films",2),r(3,"div",3)(4,"div",4)(5,"h2",5),p(6),m(),r(7,"mm-films-widget",6),u("clickedFavouriteButton",function(s){g(e);let n=f();return _(n.toggleFavouriteFilm(s))}),m(),r(8,"h2",5),p(9),m(),r(10,"mm-films-widget",6),u("clickedFavouriteButton",function(s){g(e);let n=f();return _(n.toggleFavouriteFilm(s))}),m(),r(11,"h2",5),p(12),m(),r(13,"mm-films-widget",6),u("clickedFavouriteButton",function(s){g(e);let n=f();return _(n.toggleFavouriteFilm(s,n.filmsType.Movie))}),m(),r(14,"h2",5),p(15),m(),r(16,"mm-films-widget",6),u("clickedFavouriteButton",function(s){g(e);let n=f();return _(n.toggleFavouriteFilm(s,n.filmsType.Tv))}),m(),r(17,"h2",5),p(18),m(),r(19,"mm-films-widget",6),u("clickedFavouriteButton",function(s){g(e);let n=f();return _(n.toggleFavouriteFilm(s,n.filmsType.Movie))}),m()(),r(20,"div",7)(21,"h3",8),p(22),m(),r(23,"p",9),p(24),m(),r(25,"h3",8),p(26),m(),r(27,"p",9),p(28),m()()()(),B()}if(l&2){let e=f(),t=G(0);i(2),a("films",t.trendAllFilms),i(3),a("level",3),i(),d(e.homeText.trendFilmsTitle),i(),a("films",t.trendFilms)("mediaType",e.filmsType.Movie)("isLoggedIn",t.isLoggedIn)("favouriteFilmsIds",t.favouriteFilmsIds),i(),a("level",3),i(),d(e.homeText.trendTvTitle),i(),a("films",t.trendTv)("mediaType",e.filmsType.Tv)("isLoggedIn",t.isLoggedIn)("favouriteFilmsIds",t.favouriteFilmsIds),i(),a("level",3),i(),d(e.homeText.popularFilmsTitle),i(),a("films",t.popularFilms)("mediaType",e.filmsType.Movie)("isLoggedIn",t.isLoggedIn)("favouriteFilmsIds",t.favouriteFilmsIds),i(),a("level",3),i(),d(e.homeText.popularTvTitle),i(),a("films",t.popularTv)("mediaType",e.filmsType.Tv)("isLoggedIn",t.isLoggedIn)("favouriteFilmsIds",t.favouriteFilmsIds),i(),a("level",3),i(),d(e.homeText.upcomingFilmsTitle),i(),a("films",t.upcomingFilms)("mediaType",e.filmsType.Movie)("isLoggedIn",t.isLoggedIn)("favouriteFilmsIds",t.favouriteFilmsIds),i(3),d(e.homeText.descriptionFilmsTitle),i(2),d(e.homeText.descriptionFilmsText),i(2),d(e.homeText.descriptionTvTitle),i(2),d(e.homeText.descriptionTvText)}}var ie=(()=>{class l{constructor(){this._store=v(R),this.vm=j(this._store.select(ee.selectHomeViewModel)),this.mediaType=M(),this.filmsType=F,this.homeText=X.home,this.userLocalId=v(h).get("userLocalId"),this._favouriteFilmsService=v(J)}ngOnInit(){this._store.dispatch(x.opened())}toggleFavouriteFilm(e,t){this._favouriteFilmsService.onToggleFavouriteFilm(e.filmId,e.posterPath,e.title,e.voteAverage,e.releaseDate,e.genres,e.mediaType||t,this.vm().favouriteFilmsIds,this.userLocalId)}ngOnDestroy(){this._store.dispatch(x.closed())}static{this.\u0275fac=function(t){return new(t||l)}}static{this.\u0275cmp=E({type:l,selectors:[["mm-home"]],inputs:{mediaType:[1,"mediaType"]},decls:2,vars:2,consts:[[4,"uiSpinner"],[1,"home"],[3,"films"],[1,"container"],[1,"home__widgets","gradient-border"],["mmTitle","",1,"home__slider-title",3,"level"],[3,"clickedFavouriteButton","films","mediaType","isLoggedIn","favouriteFilmsIds"],[1,"home__wrapper"],[1,"home__description-title"],[1,"home__description-text"]],template:function(t,s){if(t&1&&(b(0),V(1,_e,29,35,"ng-container",0)),t&2){let n=D(s.vm());i(),a("uiSpinner",n.isLoading)}},dependencies:[K,Z,$,Y],styles:['.home[_ngcontent-%COMP%]{color:var(--color-text)}.home__widgets[_ngcontent-%COMP%]{position:relative;padding:60px 0}.home__widgets[_ngcontent-%COMP%]:before, .home__widgets[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;height:1px;width:100%;background:linear-gradient(90deg,#0000,#f80032,#0000)}.home__widgets[_ngcontent-%COMP%]:after{bottom:1px}.home__widgets[_ngcontent-%COMP%]:before{top:1px}.home__slider-title[_ngcontent-%COMP%]{margin-bottom:24px;margin-top:84px;text-transform:uppercase}.home__slider-title[_ngcontent-%COMP%]:first-of-type{margin-top:0}.home__wrapper[_ngcontent-%COMP%]{padding:40px 0}.home__description-title[_ngcontent-%COMP%]{font-family:Gotham-Pro-Bold,sans-serif;font-size:24px;line-height:1.3;font-weight:700;margin:40px 0 24px}.home__description-title[_ngcontent-%COMP%]:first-of-type{margin-top:0}.home__description-text[_ngcontent-%COMP%]{font-family:Gotham-Pro-Regular,sans-serif;font-size:16px;line-height:1.3;font-weight:400;text-indent:30px}']})}}return l})();var it=[{path:"",component:ie,providers:[te()]}];export{x as HomeActions,ie as HomeComponent,ee as HomeVmSelectors,fe as handleClosedHomePage,ve as loadHomePage,te as provideHomeStore,it as routes};
