(()=>{var lt=Object.create;var te=Object.defineProperty;var pt=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,Et=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var Ne=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Ne(e,n,t[n]);if(fe)for(var n of fe(t))ct.call(t,n)&&Ne(e,n,t[n]);return e};var a=(e,t)=>()=>(e&&(t=e(e=0)),t);var Pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var mt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of dt(t))!Ie.call(e,p)&&p!==n&&te(e,p,{get:()=>t[p],enumerable:!(r=pt(t,p))||r.enumerable});return e};var he=(e,t,n)=>(n=e!=null?lt(Et(e)):{},mt(t||!e||!e.__esModule?te(n,"default",{value:e,enumerable:!0}):n,e));var i=(e,t,n)=>new Promise((r,p)=>{var T=_=>{try{A(n.next(_))}catch(y){p(y)}},I=_=>{try{A(n.throw(_))}catch(y){p(y)}},A=_=>_.done?r(_.value):Promise.resolve(_.value).then(T,I);A((n=n.apply(e,t)).next())});var P,Oe,x=a(()=>{"use strict";P=e=>new Promise(t=>setTimeout(t,e)),Oe=()=>{let e="";for(let t=0;t<32;t+=1)switch(t){case 8:case 20:e+="-",e+=(Math.random()*16|0).toString(16);break;case 12:e+="-",e+="4";break;case 16:e+="-",e+=(Math.random()*4|8).toString(16);break;default:e+=(Math.random()*16|0).toString(16)}return e}});var M,l,ut,o,C,E=a(()=>{x();v();M=class{constructor(t){this._defaultSettings={promiseTimeout:15e3};this.setSettings(t)}setSettings(t){this._settings=ne(ne({},this._defaultSettings),t)}emitNetPromise(t,...n){return new Promise((r,p)=>{let T=!1;setTimeout(()=>{T=!0,p(`${t} has timed out after ${this._settings.promiseTimeout} ms`)},this._settings.promiseTimeout);let I=Oe(),A=`${t}:${I}`;emitNet(t,A,...n);let _=y=>{removeEventListener(A,_),!T&&r(y)};onNet(A,_)})}},l=(e,t)=>{RegisterNuiCallbackType(e),on(`__cfx_nui:${e}`,t)},ut=()=>new Promise(e=>{let t=setInterval(()=>{global.isPlayerLoaded&&e(t)},50)}).then(e=>clearInterval(e)),o=e=>{RegisterNuiCallbackType(e),on(`__cfx_nui:${e}`,(t,n)=>i(void 0,null,function*(){global.isPlayerLoaded||(yield ut());try{let r=yield h.emitNetPromise(e,t);n(r)}catch(r){console.error("Error encountered while listening to resp. Error:",r),n({status:"error"})}}))},C=(e,t,n)=>{let r=typeof t;if(!n.includes(r))throw new Error(`Export ${e} was called with incorrect argument type (${n.join(", ")}. Passed: ${t}, Type: ${r})`)}});function re(e){return e&&typeof e=="object"&&!Array.isArray(e)}function W(e,...t){if(!t.length)return e;let n=t.shift();if(re(e)&&re(n))for(let r in n)re(n[r])?(e[r]||Object.assign(e,{[r]:{}}),W(e[r],n[r])):Object.assign(e,{[r]:n[r]});return W(e,...t)}var De=a(()=>{"use strict"});var Re,be=a(()=>{Re={PhoneAsItem:{enabled:!1,exportResource:"my-core-resource",exportFunction:"myCheckerFunction"},customPhoneNumber:{enabled:!1,exportResource:"number-generator-resource",exportFunction:"generateNumber"},general:{useResourceIntegration:!1,toggleKey:"f1",toggleCommand:"phone",defaultLanguage:"pl",showId:!1},contacts:{frameworkPay:!1,payResource:"my-core-resource",payFunction:"myCheckerFunction"},database:{useIdentifierPrefix:!1,playerTable:"users",identifierColumn:"identifier",identifierType:"license",profileQueries:!0,phoneNumberColumn:"phone_number"},images:{url:"https://api.fivemanage.com/api/image",type:"image",imageEncoding:"webp",contentType:"multipart/form-data",useContentType:!1,authorizationHeader:"Authorization",authorizationPrefix:"",useAuthorization:!0,returnedDataIndexes:["url"]},imageSafety:{filterUnsafeImageUrls:!0,embedUnsafeImages:!1,embedUrl:"https://i.example.com/embed",safeImageUrls:["i.imgur.com","i.file.glass","dropbox.com","c.tenor.com","discord.com","cdn.discordapp.com","media.discordapp.com","media.discordapp.net","upload.wikipedia.org","i.projecterror.dev","upcdn.io","i.fivemanage.com","api.fivemanage.com","r2.fivemanage.com"]},profanityFilter:{enabled:!1,badWords:["esx"]},twitter:{showNotifications:!0,generateProfileNameFromUsers:!0,allowEditableProfileName:!0,allowDeleteTweets:!0,allowReportTweets:!0,allowRetweet:!0,characterLimit:160,newLineLimit:10,enableAvatars:!0,enableEmojis:!0,enableImages:!0,maxImages:1,resultsLimit:25},match:{generateProfileNameFromUsers:!0,allowEditableProfileName:!0},marketplace:{persistListings:!1},browser:{homepageUrl:"https://docs.projecterror.dev"},debug:{level:"error",enabled:!0,sentryEnabled:!0},defaultContacts:[],disabledApps:[],apps:[],voiceMessage:{enabled:!1,authorizationHeader:"Authorization",url:"https://api.fivemange/api/audio",returnedDataIndexes:["url"]}}});var S,oe=a(()=>{De();be();S=(()=>{let e=GetCurrentResourceName(),t=JSON.parse(LoadResourceFile(e,"config.json")),n=GetConvar("npwd:phoneAsItem","");return n!==""&&(n=JSON.parse(n),Object.entries(t.PhoneAsItem).forEach(([r,p])=>{n[r]&&typeof p==typeof n[r]&&(t.PhoneAsItem[r]=n[r])})),W({},Re,t)})()});var O,Le=a(()=>{"use strict";O={TWITTER:"TWITTER",MATCH:"MATCH",MESSAGES:"MESSAGES",NOTES:"NOTES",MARKETPLACE:"MARKETPLACE",CONTACTS:"CONTACTS",CAMERA:"CAMERA",PHONE:"PHONE"}});function s(e,t,n){return SendNUIMessage({app:e,method:t,data:n})}function k(e,t={}){return s(O.TWITTER,e,t)}function V(e,t={}){return s(O.MESSAGES,e,t)}function we(e,t={}){return s(O.NOTES,e,t)}function ie(e,t={}){s(O.MARKETPLACE,e,t)}function K(e,t={}){s(O.CONTACTS,e,t)}function ye(e,t={}){s(O.CAMERA,e,t)}function ae(e,t={}){return s(O.MATCH,e,t)}function xe(e,t={}){return s(O.PHONE,e,t)}var f=a(()=>{"use strict";Le()});var Y=a(()=>{"use strict"});var F=a(()=>{"use strict"});var se,At,g,H=a(()=>{se=class{setKvp(t,n){SetResourceKvp(t,n)}setKvpFloat(t,n){SetResourceKvpFloat(t,n)}setKvpInt(t,n){SetResourceKvpInt(t,n)}getKvpString(t){return GetResourceKvpString(t)}getKvpInt(t){return GetResourceKvpInt(t)}getKvpFloat(t){return GetResourceKvpFloat(t)}},At=new se,g=At});function G(){global.phoneProp!=0&&(DeleteEntity(global.phoneProp),global.phoneProp=0,$=!1)}var $,Me,pe=a(()=>{F();H();x();global.phoneProp=0;$=!1,Me=()=>i(void 0,null,function*(){let e=GetConvarInt("NPWD_PROPS",0),t;if(e?t="dolu_npwd_phone":t="prop_amb_phone",G(),$)$&&console.log("prop already created");else{for(RequestModel(t);!HasModelLoaded(t);)yield P(1);let n=PlayerPedId(),[r,p,T]=GetEntityCoords(n,!0);global.phoneProp=CreateObject(GetHashKey(t),r,p,T+.2,!0,!0,!0);let I=GetPedBoneIndex(n,28422);AttachEntityToEntity(global.phoneProp,n,I,0,0,0,0,0,0,!0,!0,!1,!1,2,!0),$=!0;let A;e&&(A=g.getKvpInt("npwd-frame")),SetObjectTextureVariation(global.phoneProp,A||7)}})});var j,ve=a(()=>{pe();x();j=class{constructor(){this.onCall=!1;this.phoneOpen=!1;this.onCamera=!1}createAnimationInterval(){this.animationInterval=setInterval(()=>i(this,null,function*(){let t=PlayerPedId();this.onCall?this.handleCallAnimation(t):this.phoneOpen&&!this.onCamera&&this.handleOpenAnimation(t)}),250)}setPhoneState(t,n){switch(t){case 0:this.onCall=n;break;case 1:this.phoneOpen=n;break;case 2:this.onCamera=n;break}!this.onCall&&!this.phoneOpen?this.animationInterval&&(clearInterval(this.animationInterval),this.animationInterval=null):this.animationInterval||this.createAnimationInterval()}handleCallAnimation(t){IsPedInAnyVehicle(t,!0)?this.handleOnCallInVehicle(t):this.handleOnCallNormal(t)}handleOpenAnimation(t){IsPedInAnyVehicle(t,!0)?this.handleOpenVehicleAnim(t):this.handleOpenNormalAnim(t)}handleCallEndAnimation(t){IsPedInAnyVehicle(t,!0)?this.handleCallEndVehicleAnim(t):this.handleCallEndNormalAnim(t)}handleCloseAnimation(t){IsPedInAnyVehicle(t,!0)?this.handleCloseVehicleAnim(t):this.handleCloseNormalAnim(t)}openPhone(){return i(this,null,function*(){Me(),this.onCall||this.handleOpenAnimation(PlayerPedId()),this.setPhoneState(1,!0)})}closePhone(){return i(this,null,function*(){G(),this.setPhoneState(1,!1),this.onCall||this.handleCloseAnimation(PlayerPedId())})}startPhoneCall(){return i(this,null,function*(){this.handleCallAnimation(PlayerPedId()),this.setPhoneState(0,!0)})}endPhoneCall(){return i(this,null,function*(){this.handleCallEndAnimation(PlayerPedId()),this.setPhoneState(0,!1)})}openCamera(){return i(this,null,function*(){this.setPhoneState(2,!0)})}closeCamera(){return i(this,null,function*(){this.setPhoneState(2,!1)})}loadAnimDict(t){return i(this,null,function*(){for(RequestAnimDict(t);!HasAnimDictLoaded(t);)yield P(100)})}handleOpenVehicleAnim(t){return i(this,null,function*(){let n="anim@cellphone@in_car@ps",r="cellphone_text_in";yield this.loadAnimDict(n),IsEntityPlayingAnim(t,n,r,3)||(SetCurrentPedWeapon(t,2725352035,!0),TaskPlayAnim(t,n,r,7,-1,-1,50,0,!1,!1,!1))})}handleOpenNormalAnim(t){return i(this,null,function*(){let n="cellphone@",r="cellphone_text_in";yield this.loadAnimDict(n),IsEntityPlayingAnim(t,n,r,3)||(SetCurrentPedWeapon(t,2725352035,!0),TaskPlayAnim(t,n,r,8,-1,-1,50,0,!1,!1,!1))})}handleCloseVehicleAnim(t){return i(this,null,function*(){let n="anim@cellphone@in_car@ps";StopAnimTask(t,n,"cellphone_text_in",1),StopAnimTask(t,n,"cellphone_call_to_text",1),G()})}handleCloseNormalAnim(t){return i(this,null,function*(){let n="cellphone@",r="cellphone_text_out";StopAnimTask(t,n,"cellphone_text_in",1),yield P(100),yield this.loadAnimDict(n),TaskPlayAnim(t,n,r,7,-1,-1,50,0,!1,!1,!1),yield P(200),StopAnimTask(t,n,r,1),G()})}handleOnCallInVehicle(t){return i(this,null,function*(){let n="anim@cellphone@in_car@ps",r="cellphone_call_listen_base";IsEntityPlayingAnim(t,n,r,3)||(yield this.loadAnimDict(n),TaskPlayAnim(t,n,r,3,3,-1,49,0,!1,!1,!1))})}handleOnCallNormal(t){return i(this,null,function*(){let n="cellphone@",r="cellphone_call_listen_base";IsEntityPlayingAnim(t,n,r,3)||(yield this.loadAnimDict(n),TaskPlayAnim(t,n,r,3,3,-1,49,0,!1,!1,!1))})}handleCallEndVehicleAnim(t){return i(this,null,function*(){let n="anim@cellphone@in_car@ps",r="cellphone_call_to_text";StopAnimTask(t,n,"cellphone_call_listen_base",1),yield this.loadAnimDict(n),TaskPlayAnim(t,n,r,1.3,5,-1,50,0,!1,!1,!1)})}handleCallEndNormalAnim(t){return i(this,null,function*(){let n="cellphone@",r="cellphone_call_to_text";IsEntityPlayingAnim(t,"cellphone@","cellphone_call_listen_base",49)&&(yield this.loadAnimDict(n),TaskPlayAnim(t,n,r,2.5,8,-1,50,0,!1,!1,!1))})}}});var d,U=a(()=>{ve();d=new j});function gt(){return i(this,null,function*(){if(!!(yield Ee())){if(global.isPhoneOpen)return yield B();yield de()}})}var Ct,He,de,B,Ee,z=a(()=>{f();Y();oe();U();E();global.isPhoneOpen=!1;global.isPhoneDisabled=!1;global.isPlayerLoaded=!1;global.clientPhoneNumber=null;global.phoneProp=null;Ct=global.exports;onNet("npwd:setPlayerLoaded",e=>{global.isPlayerLoaded=e,e||s("PHONE","npwd:unloadCharacter",{})});RegisterKeyMapping(S.general.toggleCommand,"Toggle Phone","keyboard",S.general.toggleKey);setTimeout(()=>{emit("chat:addSuggestion",`/${S.general.toggleCommand}`,"Toggle displaying your cellphone")},1e3);He=()=>{let e=GetClockHours(),t=GetClockMinutes();return e<10&&(e=`0${e}`),t<10&&(t=`0${t}`),`${e}:${t}`},de=()=>i(void 0,null,function*(){global.isPhoneOpen=!0;let e=He();yield d.openPhone(),emitNet("npwd:getCredentials"),SetCursorLocation(.9,.922),s("PHONE","npwd:setVisibility",!0),s("PHONE","npwd:setGameTime",e),SetNuiFocus(!0,!0),SetNuiFocusKeepInput(!0),emit("npwd:disableControlActions",!0)}),B=()=>i(void 0,null,function*(){global.isPhoneOpen=!1,s("PHONE","npwd:setVisibility",!1),yield d.closePhone(),SetNuiFocus(!1,!1),SetNuiFocusKeepInput(!1),emit("npwd:disableControlActions",!1)});RegisterCommand(S.general.toggleCommand,()=>i(void 0,null,function*(){!global.isPhoneDisabled&&!IsPauseMenuActive()&&(yield gt())}),!1);RegisterCommand("phone:restart",()=>i(void 0,null,function*(){yield B(),s("PHONE","phoneRestart",{})}),!1);Ee=()=>i(void 0,null,function*(){if(!S.PhoneAsItem.enabled)return!0;let e=yield Promise.resolve(Ct[S.PhoneAsItem.exportResource][S.PhoneAsItem.exportFunction]());if(typeof e!="number"&&typeof e!="boolean")throw new Error("You must return either a boolean or number from your export function");return!!e});onNet("npwd:sendCredentials",(e,t,n)=>{global.clientPhoneNumber=e,s("SIMCARD","npwd:setNumber",e),s("PHONE","npwd:sendPlayerSource",t),s("PHONE","npwd:sendPlayerIdentifier",n)});on("onResourceStop",e=>{e===GetCurrentResourceName()&&(s("PHONE","npwd:setVisibility",!1),SetNuiFocus(!1,!1),d.endPhoneCall(),d.closePhone(),ClearPedTasks(PlayerPedId()))});l("npwd:close",(e,t)=>i(void 0,null,function*(){yield B(),t()}));l("npwd:toggleAllControls",(n,r)=>i(void 0,[n,r],function*({keepGameFocus:e},t){global.isPhoneOpen&&SetNuiFocusKeepInput(e),t({})}));S.PhoneAsItem.enabled&&setTimeout(()=>{let e=!1,{exportResource:t,exportFunction:n}=S.PhoneAsItem;emit(`__cfx_export_${t}_${n}`,()=>{e=!0}),e||console.log(`
^1Incorrect PhoneAsItem configuration detected. Export does not exist.^0
`)},100);setInterval(()=>{let e=He();s("PHONE","npwd:setGameTime",e)},2e3)});var Ge=a(()=>{"use strict"});var Ue=a(()=>{Ge();f();E();o("npwd:getOrCreateTwitterProfile");o("npwd:deleteTweet");o("npwd:updateTwitterProfile");o("npwd:createTwitterProfile");o("npwd:fetchTweets");o("npwd:createTweet");o("npwd:fetchTweetsFiltered");o("npwd:toggleLike");o("npwd:reportTweet");o("npwd:retweet");onNet("createTweetBroadcast",e=>{k("createTweetBroadcast",e)});onNet("npwd:tweetLikedBroadcast",(e,t,n)=>{k("npwd:tweetLikedBroadcast",{tweetId:e,isAddLike:t,likedByProfileName:n})});onNet("npwd:deleteTweetBroadcast",e=>{k("npwd:deleteTweetBroadcast",e)})});var ce=a(()=>{"use strict"});var gn,Be=a(()=>{ce();E();f();o("npwd-contact-pay");o("npwd-contact-getAll");o("npwd-contact-add");o("npwd:deleteContact");o("npwd:updateContact");o("npwd:localShareContact");gn=global.exports;onNet("npwd:contacts:receiveContact",e=>{K("npwd:addContactExport",e)})});var We=a(()=>{"use strict"});var ke=a(()=>{We();E();f();o("npwd:fetchAllListings");o("npwd:addListing");o("npwd:marketplaceDeleteListing");o("npwd:reportListing");onNet("npwd:sendMarketplaceBroadcastAdd",e=>{ie("npwd:sendMarketplaceBroadcastAdd",e)});onNet("npwd:sendMarketplaceBroadcastDelete",e=>{ie("npwd:sendMarketplaceBroadcastDelete",e)})});var me=a(()=>{"use strict"});var Ve=a(()=>{me();E();o("npwd:addNote");o("npwd:fetchAllNotes");o("npwd:updateNote");o("npwd:deleteNote")});var Ke=a(()=>{"use strict"});var $e=Pe(q=>{Ke();x();f();Y();v();U();E();var J=!1,R=!1,L=!1;function ft(){SetNuiFocus(!1,!1),s("PHONE","npwd:setVisibility",!1)}function Ye(){SetNuiFocus(!0,!0),s("PHONE","npwd:setVisibility",!0)}function Nt(e){return Citizen.invokeNative("0x2491A93618B7D838",e)}var It=()=>{BeginTextCommandDisplayHelp("THREESTRINGS"),AddTextComponentString("Exit Camera Mode: ~INPUT_CELLPHONE_CANCEL~"),AddTextComponentString("Toggle Front/Back: ~INPUT_PHONE~"),AddTextComponentString("Take Picture: ~INPUT_CELLPHONE_SELECT~"),EndTextCommandDisplayHelp(0,!0,!1,-1)};l("npwd:TakePhoto",(e,t)=>i(q,null,function*(){yield d.openCamera(),emit("npwd:disableControlActions",!1);let n=!1;for(CreateMobilePhone(1),CellCamActivate(!0,!0),ft(),SetNuiFocus(!1,!1),J=!0,IsHudHidden()?R=!1:(R=!0,DisplayHud(!1)),IsRadarHidden()?L=!1:(L=!0,DisplayRadar(!1)),emit("npwd:PhotoModeStarted");J;){if(yield P(0),IsControlJustPressed(1,27))n=!n,Nt(n);else if(IsControlJustPressed(1,176)){let r=yield Pt();t(r);break}else if(IsControlJustPressed(1,194)){yield ht();break}It()}ClearHelp(!0),emit("npwd:PhotoModeEnded"),emit("npwd:disableControlActions",!0),yield d.closeCamera()}));var Pt=()=>i(q,null,function*(){ClearHelp(!0),yield P(0);let e=yield h.emitNetPromise("npwd:UploadPhoto");return DestroyMobilePhone(),CellCamActivate(!1,!1),Ye(),d.openPhone(),emit("npwd:disableControlActions",!0),J=!1,R&&(DisplayHud(!0),R=!1),L&&(DisplayRadar(!0),L=!1),e}),ht=()=>i(q,null,function*(){ye("npwd:cameraExited"),ClearHelp(!0),yield d.closeCamera(),emit("npwd:disableControlActions",!0),DestroyMobilePhone(),CellCamActivate(!1,!1),Ye(),J=!1,R&&(DisplayHud(!0),R=!1),L&&(DisplayRadar(!0),L=!1)});o("npwd:FetchPhotos");o("npwd:deletePhoto");o("npwd:saveImage");o("npwd:deleteMultiplePhotos")});var je=a(()=>{"use strict"});var ze=a(()=>{je();f();E();o("npwd:fetchMessageGroups");o("npwd:deleteMessage");o("npwd:fetchMessages");o("npwd:createMessageGroup");o("nwpd:deleteConversation");o("npwd:sendMessage");o("npwd:setReadMessages");o("npwd:getMessageLocation");l("npwd:setWaypoint",({coords:e})=>{SetNewWaypoint(e[0],e[1])});onNet("npwd:sendMessageSuccess",e=>{V("npwd:sendMessageSuccess",e)});onNet("npwd:createMessagesBroadcast",e=>{V("npwd:createMessagesBroadcast",e)});onNet("npwd:createMessageConversationSuccess",e=>{V("npwd:createMessageConversationSuccess",e)})});var X=a(()=>{"use strict"});var w,N,Z=a(()=>{w={},N=class{constructor(t,n){this._soundName=t,this._soundSetName=n,w[this._soundName]&&(ReleaseSoundId(w[this._soundName]),delete w[this._soundName]),this._soundId=GetSoundId(),w[this._soundName]=this._soundId}play(){PlaySoundFrontend(this._soundId,this._soundName,this._soundSetName,!1)}stop(){StopSound(this._soundId),ReleaseSoundId(this._soundId),w[this._soundName]&&delete w[this._soundName]}}});var D,ue=a(()=>{D=class{constructor(t){this.ringtoneName=t}play(){PlayPedRingtone(this.ringtoneName,PlayerPedId(),!0)}stop(){StopPedRingtone(PlayerPedId())}static isPlaying(){return IsPedRingtonePlaying(PlayerPedId())}}});var Q,m,u,Te=a(()=>{z();X();Z();ue();F();H();Q=global.exports,m=class{constructor(){this.callSoundName="Remote_Ring";this.hangUpSoundName="Hang_Up";this.soundSet="Phone_SoundSet_Default";this.hangUpSoundSet="Phone_SoundSet_Michael";this.currentCall=0}static sendCallAction(t,n){SendNUIMessage({app:"CALL",method:t,data:n})}static sendDialerAction(t,n){SendNUIMessage({app:"DIALER",method:t,data:n})}isInCall(){return this.currentCall!==0}isCurrentCall(t){return this.currentCall===t}getCurrentCall(){return this.currentPendingCall}isInPendingCall(){return!!this.currentPendingCall}isCurrentPendingCall(t){return t===this.currentPendingCall}openCallModal(t){m.sendCallAction("npwd:callModal",t)}handleRejectCall(t){if(this.isInCall()||!this.isCurrentPendingCall(t))return;this.callSound&&this.callSound.stop(),D.isPlaying()&&this.ringtone.stop(),this.currentPendingCall=null,this.openCallModal(!1),m.sendCallAction("npwd:setCaller",null),new N(this.hangUpSoundName,this.hangUpSoundSet).play()}handleStartCall(t,n,r,p,T){return i(this,null,function*(){if(this.isInCall()||!(yield Ee())||this.currentPendingCall)return emitNet("npwd:rejectCall",{transmitterNumber:t},1);if(this.currentPendingCall=n,this.openCallModal(!0),r&&(this.callSound=new N(this.callSoundName,this.soundSet),this.callSound.play()),!r){let I=g.getKvpString("npwd-ringtone");this.ringtone=new D(I),this.ringtone.play()}m.sendCallAction("npwd:setCaller",{active:!0,transmitter:t,receiver:n,isTransmitter:r,accepted:!1,isUnavailable:p,isAnonymous:T})})}handleCallAccepted(t){this.currentCall=t.channelId,this.callSound&&this.callSound.stop(),D.isPlaying()&&this.ringtone.stop(),Q["pma-voice"].setCallChannel(t.channelId),m.sendCallAction("npwd:setCaller",t)}handleEndCall(){this.callSound&&this.callSound.stop(),this.currentCall=0,Q["pma-voice"].setCallChannel(0),this.currentPendingCall=null,this.openCallModal(!1),m.sendCallAction("npwd:setCaller",null),new N(this.hangUpSoundName,this.hangUpSoundSet).play()}handleMute(t,n){t?Q["pma-voice"].setCallChannel(0):Q["pma-voice"].setCallChannel(n.channelId)}handleSendAlert(t){SendNUIMessage({app:"DIALER",method:"npwd:callSetAlert",data:t})}},u=new m});var Ae,Ce,qe=a(()=>{Ae=(e,t)=>onNet(e,t),Ce=(e,t,n)=>{if(n)return emitNet(e,n,t);emitNet(e,t)}});var ge,_e=a(()=>{X();Te();U();qe();E();v();ge=(e,t)=>i(void 0,null,function*(){if(!u.isInCall())try{let n=yield h.emitNetPromise("npwd:beginCall",e);if(d.startPhoneCall(),n.status!=="ok")return t==null?void 0:t(n);let{transmitter:r,isTransmitter:p,receiver:T,isUnavailable:I,isAnonymous:A}=n.data;u.handleStartCall(r,T,p,I,A),t==null||t(n)}catch(n){console.error(n),t==null||t({status:"error",errorMsg:"CLIENT_TIMED_OUT"})}});l("npwd:beginCall",ge);Ae("npwd:startCall",e=>i(void 0,null,function*(){let{transmitter:t,isTransmitter:n,receiver:r,isUnavailable:p,isAnonymous:T}=e;u.handleStartCall(t,r,n,p,T)}));l("npwd:acceptCall",(e,t)=>{d.startPhoneCall(),Ce("npwd:acceptCall",e),t({})});Ae("npwd:callAccepted",e=>{u.handleCallAccepted(e)});l("npwd:rejectCall",(e,t)=>{Ce("npwd:rejectCall",e),t({})});onNet("npwd:callRejected",e=>i(void 0,null,function*(){u.handleRejectCall(e.receiver),d.endPhoneCall(),m.sendDialerAction("npwd:callRejected",e)}));l("npwd:endCall",(e,t)=>i(void 0,null,function*(){try{let n=yield h.emitNetPromise("npwd:endCall",e);if(n.status==="error")return console.error(n.errorMsg);t({})}catch(n){console.error(n),t({status:"error",errorMsg:"CLIENT_TIMED_OUT"})}d.endPhoneCall()}));onNet("npwd:callEnded",(e,t)=>{u.isInCall()&&!u.isCurrentCall(e)||(u.handleEndCall(),d.endPhoneCall(),t&&m.sendDialerAction("npwd:callRejected",t))});o("npwd:fetchCalls");onNet("npwd:callSetAlert",e=>{u.handleSendAlert(e)});l("npwd:toggleMuteCall",(e,t)=>{let{state:n,call:r}=e;u.handleMute(n,r),t({})})});var Xe=a(()=>{"use strict"});var Ze=a(()=>{Xe();f();E();o("phone:getMatchProfiles");o("phone:getMyProfile");o("phone:getMatches");o("phone:saveLikes");o("phone:createMyProfile");o("phone:updateMyProfile");onNet("phone:saveLikesBroadcast",e=>{ae("phone:saveLikesBroadcast",e)});onNet("phone:matchAccountBroadcast",e=>{ae("phone:matchAccountBroadcast",e)})});var Qe=a(()=>{"use strict"});var et=a(()=>{E();Qe();f();o("npwd:darkchatFetchChannels");o("npwd:darkchatFetchMessages");o("npwd:darkchatAddChannel");o("npwd:darkchatSendMessage");o("npwd:darkchatLeaveChannel");o("npwd:darkchatUpdateChannelLabel");o("npwd:darkchatFetchMembers");o("npwd:darkchatTransferOwnership");o("npwd:darkchatDeleteChannel");onNet("npwd:darkchatBroadcastMessage",e=>{s("DARKCHAT","npwd:darkchatBroadcastMessage",e)});onNet("npwd:darkchatBroadcastLabelUpdate",e=>{s("DARKCHAT","npwd:darkchatBroadcastLabelUpdate",e)});onNet("npwd:darkchatTransferOwnershipSuccess",e=>{s("DARKCHAT","npwd:darkchatTransferOwnershipSuccess",e)});onNet("npwd:darkchatDeleteChannelSuccess",e=>{s("DARKCHAT","npwd:darkchatDeleteChannelSuccess",e)})});var tt=a(()=>{"use strict"});var nt=a(()=>{E();tt();o("npwd:audio:uploadAudio")});var rt=a(()=>{"use strict"});var ot=a(()=>{"use strict"});var b,Se=a(()=>{E();ot();H();F();Z();b=new Map;l("npwd:playAlert",()=>{let e=g.getKvpString("npwd-notification");new N("Text_Arrive_Tone",e).play()});l("npwd:onNotificationConfirm",(e,t)=>{let n=b.get(`${e}:confirm`);if(!n)return console.log(`NPWD could not find any function ref for notification: ${e}`);n(),b.delete(`${e}:confirm`),t({})});l("npwd:onNotificationCancel",(e,t)=>{let n=b.get(`${e}:cancel`);if(!n)return console.log(`NPWD could not find any function ref for notification: ${e}`);n(),b.delete(`${e}:cancel`),t({})})});var it=Pe(ee=>{f();Y();E();_e();ce();me();z();v();Te();U();X();rt();Se();var c=global.exports;c("openApp",e=>{C("openApp",e,["string"]),s("PHONE","npwd:openApp",e)});c("setPhoneVisible",e=>i(ee,null,function*(){C("setPhoneVisible",e,["boolean","number"]);let t=global.isPhoneDisabled,n=global.isPhoneOpen;if(t&&!e&&n)return;!!e?yield de():yield B()}));c("isPhoneVisible",()=>global.isPhoneOpen);c("setPhoneDisabled",e=>{C("setPhoneVisible",e,["boolean","number"]);let t=!!e;global.isPhoneDisabled=t,xe("npwd:isPhoneDisabled",e)});c("isPhoneDisabled",()=>global.isPhoneDisabled);c("startPhoneCall",(e,t=!1)=>{C("startPhoneCall",e,["string"]),ge({receiverNumber:e,isAnonymous:t})});c("fillNewContact",e=>{C("fillNewContact",e,["object"]),K("npwd:addContactExport",e)});c("fillNewNote",e=>{C("fillNewNote",e,["object"]),we("npwd:addNoteExport",e)});c("getPhoneNumber",()=>i(ee,null,function*(){if(!global.clientPhoneNumber){let e=yield h.emitNetPromise("npwd:getPhoneNumber");global.clientPhoneNumber=e.data}return global.clientPhoneNumber}));c("isInCall",()=>u.isInCall());c("endCall",()=>i(ee,null,function*(){u.isInCall()&&(m.sendCallAction("npwd:endCall",null),d.endPhoneCall())}));c("sendUIMessage",e=>{console.log("sendUIMessage is deprecated, use sendNPWDMessage instead"),SendNUIMessage(e)});c("sendNPWDMessage",(e,t,n)=>{s(e,t,n)});c("createNotification",e=>{C("createSystemNotification",e,["object"]),C("createSystemNotification",e.notisId,["string"]),s("PHONE","npwd:createNotification",e)});c("createSystemNotification",e=>{C("createSystemNotification",e,["object"]),C("createSystemNotification",e.uniqId,["string"]);let t=(e==null?void 0:e.onConfirm)||(e==null?void 0:e.onCancel);if(e.controls&&!e.keepOpen)return console.log("Notification must be set to keeOpen in order to use notifcation actions");if(!e.controls&&t)return console.log("Controls must be set to true in order to use notifcation actions");e.controls&&(b.set(`${e.uniqId}:confirm`,e.onConfirm),b.set(`${e.uniqId}:cancel`,e.onCancel)),s("SYSTEM","npwd:createSystemNotification",e)});c("removeSystemNotification",e=>{C("createSystemNotification",e,["string"]),s("SYSTEM","npwd:removeSystemNotification",{uniqId:e})})});var at,st=a(()=>{E();F();H();Z();ue();at=Object.freeze({gold:3,default:7,minimal:7,blue:0,pink:6,white:4});l("npwd:nuiSettingsUpdated",(e,t)=>{global.exports["pma-voice"].setCallVolume(e.callVolume),g.setKvp("npwd-ringtone",e.ringtone.value),g.setKvp("npwd-notification",e.notiSound.value);let n=e.frame.value,r=n.substr(0,n.lastIndexOf("."));g.setKvpInt("npwd-frame",at[r]),SetObjectTextureVariation(global.phoneProp,at[r]),t({})});l("npwd:previewAlert",()=>{let e=g.getKvpString("npwd-notification");new N("Text_Arrive_Tone",e).play()});l("npwd:previewRingtone",()=>{if(D.isPlaying())return;let e=g.getKvpString("npwd-ringtone"),t=new D(e);t.play(),setTimeout(t.stop,3e3)})});var wo,Go,h,v=a(()=>{E();oe();z();Ue();Be();ke();Ve();wo=he($e());ze();_e();Ze();et();nt();pe();Go=he(it());st();Se();h=new M});v();})();
