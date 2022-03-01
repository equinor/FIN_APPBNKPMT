/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/model/json/JSONModel","sap/m/Button","fin/ap/approvebankpayments/model/formatter","fin/ap/approvebankpayments/model/Messaging","fin/ap/approvebankpayments/model/PaymentListModel","fin/ap/approvebankpayments/controller/list/ConfirmSubmitDialog","fin/ap/approvebankpayments/controller/detail/DraftController","fin/ap/approvebankpayments/controller/detail/DialogFactory"],function(B,J,b,f,M,P,C,D,c){"use strict";var p=P;var _=new J({timeline:[],approveActionAvailable:false,firstStageActionsAvailable:false,nextStageActionsAvailable:false,draftStageActionsAvailable:false,canManagePayments:false,isEditInstructionKeyEnabled:false,isDeferEnabled:false,isEditable:false,attachmentSelected:false,paymentsActionAvailable:false,paymentTableSelectable:false});var d={future:{icon:"employee-lookup",action:"batchTimelineNextStep",message:"batchTimelineNextApprovers"},current:{icon:"approvals",action:"batchTimelineWaitingForApproval",message:"batchTimelineCurrentApprovers"}};function e(o,a,i){var k=o[i];var s=a&&k?a.getProperty(i):undefined;if(s){k=s.map(function(l){return a.getModel().getObject("/"+l);});}return k;}function g(I){var i;var s=",";for(i=0;i+1<I.length;i++){I[i].Suffix=s;}return I;}function h(a){var i={busy:{set:true,check:true},mConsiderObjectsAsDeleted:{}};i.mConsiderObjectsAsDeleted[a.getPath()]=Promise.resolve();return i;}var j=B.extend("fin.ap.approvebankpayments.controller.detail.batch.BatchDetailPageExt",{constructor:function(a,v,i){this.component=a;this.view=v;this.extensionAPI=i;this.formatter=f;this.draftController=D;this.dialogFactory=c;this.messaging=M;}});j.prototype.onInit=function(){this.table=this.view.byId("Payments::responsiveTable");this.paymentsTable=this.view.byId("Payments::Table");this._setupBatchPage();this.component.setModel(_,"batchView");this._oResourceBundle=this.component.getModel("@i18n").getResourceBundle();this.draftController.setResourceBundle(this._oResourceBundle);this.draftController.setView(this.view);this.extensionAPI.attachPageDataLoaded(this.onBatchDataLoaded.bind(this));this._addActionButton();this._bindActionButtons();this.table.attachSelectionChange(this.onPaymentsTableSelectionChange.bind(this));this.table.attachUpdateFinished(this.onPaymentsTableSelectionChange.bind(this));this.messaging.subscribeEvent(this.messaging.eventName.PAYMENT_CHANGE,this.busSubscriber,this);this._setupExtraBinding();};j.prototype._setupExtraBinding=function(){var a=this.view.byId("ExcludedPayments::Section");var v="visible";this.table.bindProperty("mode",{path:"batchView>/paymentTableSelectable",formatter:this.formatter.tableMode});this.view.bindElement({path:"",parameters:{expand:D.batchExpand},events:{dataReceived:function(i){var k=i.getParameter("data");this._onBatchDataReady(k);}.bind(this)}});if(a){a.bindProperty(v,{path:"IsReturnedApproval",formatter:function(i){return!!i;}});}};j.prototype._addActionButton=function(){var t=this.paymentsTable.getToolbar();var a=function(k){t.addContent(this._createButton(this._oResourceBundle.getText(k.text),k.action.bind(this),k.visibilityProp));};var i=[{text:"batchPaymentsHeaderButtonTitleEditInstructionKey",action:this.onEditInstructionKey,visibilityProp:"isEditInstructionKeyEnabled"},{text:"batchPaymentsHeaderButtonTitleSetToReject",action:this.onRejectPress},{text:"batchPaymentsHeaderButtonTitleSetToDefer",action:this.onDeferPress,visibilityProp:"isDeferEnabled"},{text:"batchPaymentsHeaderButtonTitleResetStatus",action:this.onResetStatusPress}];i.forEach(a.bind(this));};j.prototype._createButton=function(t,a,v){var i="{batchView>/"+(v?v:"firstStageActionsAvailable")+"}";return new b({text:t,press:a.bind(this),enabled:"{= ${batchView>/isEditable} && ${batchView>/paymentsActionAvailable}}",visible:i});};j.prototype._bindActionButtons=function(){["action::rejectBatch","action::deferBatch"].forEach(function(a){var i=this.view.byId(a);if(i){i.bindProperty("enabled",{path:"batchView>/canManagePayments"});}}.bind(this));};j.prototype.onExit=function(){this.extensionAPI.detachPageDataLoaded(this.onBatchDataLoaded.bind(this));this.messaging.unsubscribeEvent(this.messaging.eventName.PAYMENT_CHANGE,this.busSubscriber,this);};j.prototype.onBatchDataLoaded=function(E){var a=E.context;this._onBatchDataReady(a.getObject(),a);};j.prototype.onProcessBatch=function(a){var i={batchContext:this._getCurrentContext(),action:a,items:this.table.getItems()};this.draftController.processBatch(i,this.view,this.extensionAPI);};j.prototype.onUndoBatch=function(){this.draftController.undoBatchWithMessages(this._getCurrentContext(),this.view,this.extensionAPI);};j.prototype.onSubmitBatch=function(){var a=this.view.getBindingContext();new C(this.view,a.getProperty("AuthenticationType"),"O").then(function(i){this.messaging.actionStarted(this._oResourceBundle.getText("submitReviewedBatch"));this.extensionAPI.securedExecution(this.draftController.submitReviewed(a,i),h(a));}.bind(this));};j.prototype.onPaymentsTableSelectionChange=function(){_.setProperty("/paymentsActionAvailable",this.table.getSelectedItems().length>0);};j.prototype.onEditBatch=function(){var a={batchContext:this._getCurrentContext()};this.draftController.editableBatch(a,this.view,this.extensionAPI,undefined,true);};j.prototype.busSubscriber=function(a,i,k){this._computeViewModel(k.batch,this._getCurrentContext());};j.prototype.onEditInstructionKey=function(){var a=this._getSelectedItemsContext();this.dialogFactory.askEditInstructionKey(this.view,a).then(function(k){this._updateSelectedPayments({DataExchangeInstructionKey:k});}.bind(this));};j.prototype._getSelectedItemsContext=function(){var i=function(I){return I.getBindingContext();};return this.table.getSelectedItems().map(i);};j.prototype._getSelectedItemsKeys=function(){var i=function(I){return I.getBindingContext().getProperty("PaymentBatchItem");};return this.table.getSelectedItems().map(i);};j.prototype.onRejectPress=function(){this._updateSelectedPayments({PaymentAction:"rej"});};j.prototype.onResetStatusPress=function(){this._updateSelectedPayments({PaymentAction:"",Status:"IBC01",PaymentDeferDate:null});};j.prototype._updateSelectedPayments=function(v){var a=this._getSelectedItemsContext();this.draftController.update(a,this._getCurrentContext(),v,this.extensionAPI).then(function(i){var s=this._getStageinfo(i,this._getCurrentContext());_.setProperty("/canManagePayments",s.isFirstStage&&s.isUnlocked&&!s.oBatch.PaymentBatchIsEdited);this.messaging.publishEvent(this.messaging.eventName.PAYMENT_TABLE_CHANGE,{batch:i});}.bind(this));};j.prototype.onDeferPress=function(){this.dialogFactory.askDeferDate(this.view).then(function(a){this._updateSelectedPayments({PaymentAction:"def",PaymentDeferDate:a});}.bind(this));};j.prototype._getCurrentContext=function(){return this.view.getBindingContext();};j.prototype._onBatchDataReady=function(a,i){this._computeViewModel(a,i);if(i){this.dialogFactory.checkDeferDaysPeriod(i);}};j.prototype._computeViewModel=function(a,i){var k=this._getAttachments(a,i);var s=this._getStageinfo(a,i);_.setProperty("/attachments",k);_.setProperty("/isEditable",!a.IsActiveEntity&&!a.PaymentBatchIsProcessed);_.setProperty("/paymentTableSelectable",!a.IsActiveEntity&&!a.PaymentBatchIsProcessed&&s.isNew);_.setProperty("/batchEditable",a.IsActiveEntity&&s.isUnlocked);_.setProperty("/paymentsActionAvailable",this.table.getSelectedItems().length>0);_.setProperty("/approveActionAvailable",s.isFirstStage||s.isNextStage);_.setProperty("/isEditInstructionKeyEnabled",s.isFirstStage&&!s.isExternal);_.setProperty("/isDeferEnabled",s.isFirstStage&&!s.isExternal&&this.formatter.deferButtonVisibility(this.component.getModel()));_.setProperty("/firstStageActionsAvailable",s.isFirstStage);_.setProperty("/nextStageActionsAvailable",s.isNextStage);_.setProperty("/draftStageActionsAvailable",s.canDiscard);_.setProperty("/submitAvailable",s.canDiscard&&a.PaymentBatchIsProcessed);_.setProperty("/canManagePayments",s.isFirstStage&&s.isUnlocked&&!s.oBatch.PaymentBatchIsEdited);_.setProperty("/timeline",this._getEvents(a,i));};j.prototype._getStageinfo=function(a,i){var k=a&&a.ApprovalIsFirst||a.IsReturnedApproval;var l=a&&!a.PaymentBatchIsProcessed;return{isNew:k,isNotProcessed:l,isExternal:a&&a.PaymentBatchOrigin,isFirstStage:l&&k,isNextStage:l&&!k,canDiscard:a&&!a.IsActiveEntity,isReviewedStage:a&&!a.IsActiveEntity,isUnlocked:a&&(!a.IsActiveEntity||!a.HasDraftEntity||!this._getLockUser(a,i)),oBatch:a};};j.prototype._getLockUser=function(a,i){var l;if(i){l=i.getProperty("DraftAdministrativeData/InProcessByUser");}else{l=a.DraftAdministrativeData?a.DraftAdministrativeData.InProcessByUser:undefined;}return l;};j.prototype._setupBatchPage=function(){var o=this.view.byId("objectPage");if(o){var a=o.getHeaderTitle();a.bindProperty("objectTitle",{parts:[{path:"PaymentBatch"}],formatter:this.formatter.paymentBatchTitle});a.unbindProperty("objectSubtitle");}this._setupPaymentsTable(this.paymentsTable,p.standardSettings);this._setupPaymentsTable(this.view.byId("ExcludedPayments::Table"),p.excludeSettings);};j.prototype._setupPaymentsTable=function(t,s){if(t){t.setRequestAtLeastFields(s.requestAtLeast);t.setIgnoredFields(s.ignored);t.setUseExportToExcel(true);t.setUseVariantManagement(true);}};j.prototype._getAttachments=function(i,k){var l=e(i,k,"GetAttachment");var m=[];if(l&&l.length){m=l.map(function(a){a.DownloadUrl="/sap/opu/odata/sap/FAP_APPROVEBANKPAYMENTS_SRV/AttachmentDownloadSet(ID='"+a.AttachmId+"')/$value";return a;});}return m;};j.prototype._getEvents=function(a,i){var k=e(a,i,"GetHistory");var l=e(a,i,"GetApproverList");var m=e(a,i,"GetFutureApproverList");var n=[];if(k){n=this._getFutureEvents(m,l).concat(k);}return n;};j.prototype._getFutureEvents=function(a,i){var n=new Date();var k=new Date(n.getTime()+1000);var l=[this._createApproversEvent(a,d.future,k),this._createApproversEvent(i,d.current,n)];return l.filter(function(m){return m;});};j.prototype._getApproversEventItems=function(a,s,t){var i=a.slice(0,t);if(a.length>t){i.push({FullName:this._oResourceBundle.getText("batchTimelineRemainigApprovers",[a.length-t]),Approvers:a.slice(t)});}i=g(i);if(s){i.unshift({Prefix:s});}return i;};j.prototype._createApproversEvent=function(A,k,i){var l;var m;if(A&&A.length>0){m=A.map(function(a){return{FullName:a.FullName,Details:a};});l={ActionTxt:this._oResourceBundle.getText(k.action),Approvers:this._getApproversEventItems(m,this._oResourceBundle.getText(k.message),8),Changed:i,Icon:k.icon};}return l;};return j;});