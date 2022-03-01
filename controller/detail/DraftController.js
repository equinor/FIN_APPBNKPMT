/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["fin/ap/approvebankpayments/model/batchDraft","fin/ap/approvebankpayments/model/Messaging","sap/ui/model/Filter","sap/ui/model/FilterOperator","fin/ap/approvebankpayments/controller/detail/DialogFactory"],function(B,M,F,a,D){"use strict";var _=B;var b=D;var c=M;var d;var e;var f="GetHistory,GetApproverList,GetFutureApproverList,GetAttachment,DraftAdministrativeData";var p="to_Payee,to_Batch";function g(C){c.publishEvent(c.eventName.BATCH_ACTION,{id:C});}function h(C){return C.getProperty("HasDraftEntity")===true&&!C.getProperty("DraftAdministrativeData/InProcessByUser");}function i(V){var C={userName:V.getBindingContext().getProperty("DraftAdministrativeData/LastChangedByUserDescription")};return b.askTakeOver(V,C);}function j(C,E,V,G){var H=b.getDeferSettings();return b.askConfirmBatchAction(V,{action:C,isDefer:C==="def",isReject:C==="rej",deferDate:H.date,deferMinDate:H.minDate,note:""},E,G);}function k(C){if(C){c.addActionError(C);c.actionFinished();}}function l(C,E,G,H){var I=Object.assign({replaceInHistory:true},H);var J=C.getNavigationController();var K=E.createBindingContext(G,function(L){J.navigateInternal(L,I);});if(K){J.navigateInternal(K,I);}}function m(C,E,G){var H={navigationProperty:"to_Payment"};l(C,E,G,H);}function n(C,E,G){return new Promise(function(R){var H=e.createId("Payments::responsiveTable");if(H.indexOf("C_AbpPaymentBatch")===-1){H=H.replace("C_AbpPayment","C_AbpPaymentBatch");}var I=sap.ui.getCore().byId(H);I.attachEventOnce("updateFinished",function(J){J.getSource().attachEventOnce("updateFinished",function(){R();});});l(C,E,G);});}function o(C,E,G){return"/"+C.createKey(E,G);}function q(C,P,E){var G={PaymentBatch:P,DraftUUID:E,IsActiveEntity:false};return o(C.getModel(),"C_AbpPaymentBatch",G);}function r(C,P,E,G){var H={PaymentBatch:P,PaymentBatchItem:E,DraftUUID:G,IsActiveEntity:false};return o(C.getModel(),"C_AbpPayment",H);}var s=function(C,E,P,G){return new Promise(function(R,H){var I=new F({path:"PaymentBatchItem",operator:a.EQ,value1:P.getObject().PaymentBatchItem});P.getModel().read(G+"/to_Payment",{filters:[I],success:R});});};var t=function(C,E,P,G){var H=G.results[0];var I=r(C,H.PaymentBatch,H.PaymentBatchItem,H.DraftUUID,false);return n(E,C.getModel(),P).then(m.bind(null,E,C.getModel(),I));};var u=function(C,E,P,G){var H=q(C,G.PaymentBatch,G.DraftUUID,false);if(P){return s(C,E,P,H).then(t.bind(null,C,E,H));}else{return n(E,C.getModel(),H);}};var v=function(C,E,T,P,G){return new Promise(function(R,H){var I=C.batchContext;_.editBatch(I,T).then(u.bind(null,I,E,P)).then(function(){g(I.getProperty("PaymentBatch"));if(!G){c.actionFinished(d.getText("editBatchSuccess",I.getProperty("PaymentBatch")));}R();}).catch(H);});};var w=function(C,E,T,P,G){c.actionStarted(d.getText("editBatchAction"));return E.securedExecution(v.bind(null,C,E,T,P,G));};var x=function(C,E,V,G,T){var H=C.getProperty("PaymentBatch");var I=!C.getProperty("IsActiveEntity");return new Promise(function(R,J){c.actionStarted(d.getText("editBatchAction"));G.securedExecution(_.processBatch.bind(null,C,E,T)).then(function(K){c.actionFinished(d.getText("editBatchSuccess",H));if(I){C.getModel().refresh();}else{n(G,C.getModel(),K.path);}g(H);R();}).catch(J);});};var y=function(C,E,V,G){return x(C,E,V,G,true).catch(k);};var z=function(C,E,V,G){return x(C,E,V,G,false).catch(function(H){if(_.isUnsavedChangesError(H)){i(V).then(function(){return y(C,E,V,G);}).catch(k);}else{k(H);}});};var A=function(C,E){return new Promise(function(R,G){var H={};if(/^\/C_AbpPaymentBatch\(.+\)$/.test(E)){H.$expand=f;}else if(/^\/C_AbpPayment\(.+\)$/.test(E)){H.$expand=p;}C.invalidateEntry(E);C.read(E,{urlParameters:H,success:R,error:G});});};return{batchExpand:f,paymentExpand:p,setResourceBundle:function(R){d=R;_.setResourceBundle(R);},setView:function(V){e=V;},editableBatch:function(C,V,E,P,G){e=V;if(h(C.batchContext)){return i(V).then(function(){return w(C,E,true,P,G);}).catch(k);}else{return w(C,E,false,P,G).catch(function(H){if(_.isUnsavedChangesError(H)){i(V).then(function(){return w(C,E,true,P,G);}).catch(k);}else{k(H);}});}},processBatch:function(C,V,E){if(h(C.batchContext)){i(V).then(function(){return j(C.action,C.batchContext,V,C.items);}).then(function(G){return y(C.batchContext,G,V,E);}).catch(k);}else{j(C.action,C.batchContext,V,C.items).then(function(G){return z(C.batchContext,G,V,E);});}},submitReviewed:function(C,E){var G=C.getProperty("PaymentBatch");return _.submitReviewed([C],E).then(function(){g(G);}).catch(k);},undoBatchWithMessages:function(C,V,E){var G=C.getProperty("PaymentBatch");b.askConfirmUndo(V,C).then(function(H){c.actionStarted(d.getText("masterSelectedBatchesUndo"));E.securedExecution(_.undoBatch.bind(null,C,H)).then(function(){var I;if(!H.unprocessOnly){c.actionFinished(d.getText("undoBatchChagesSuccess",G));I="/"+C.getModel().createKey("C_AbpPaymentBatch",{PaymentBatch:G,DraftUUID:"00000000-0000-0000-0000-000000000000",IsActiveEntity:true});n(E,C.getModel(),I).then(function(){g(G);});}else{c.actionFinished(d.getText("undoBatchMoveSuccess",G));var J=V.getElementBinding();C.getModel().invalidateEntry(C);J.refresh();g(G);}}).catch(k);}).catch(k);},update:function(P,C,E,G){c.actionStarted(d.getText("editPaymentAction"));return G.securedExecution(function(){var H=P.map(function(I){return _.update(I,E);});if(!C.getProperty("PaymentBatchIsEdited")){H.push(_.update(C,{PaymentBatchIsEdited:true}));}return Promise.all(H);}).then(function(){var H=C.getPath();var I=P[0].getModel();return new Promise(function(R,J){var K=[];K.push(A(I,H));K.concat(P.map(function(L){return A(I,L.getPath());}));Promise.all(K).then(function(L){var N={text:P.length>1?"editPaymentsSuccess":"editPaymentSuccess",param:P.length>1?P.length:P[0].getProperty("PaymentDocument")};c.actionFinished(d.getText(N.text,N.param));R(L[0]);});});}).catch(k);},updateWithBatchMessages:function(C,E){var G=C.getProperty("PaymentBatch");c.actionStarted(d.getText("editBatchAction"));return _.update(C,E).then(function(){c.actionFinished(d.getText("editBatchSuccess",G));return E;}).catch(k);}};});
