/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/model/Filter","sap/ui/model/json/JSONModel","fin/ap/approvebankpayments/model/statusGroups","fin/ap/approvebankpayments/model/formatter"],function(F,J,S,a){"use strict";var _={viewModelName:"batchListView",urgentFilterKeys:"urgentFilterKeys",statusFilterKeys:"statusFilterKeys"};var b=new J({firstStageActionsAvailable:false,nextStageActionsAvailable:false,showSubmitStrip:false,isForReviewTab:true,undoAvailable:false,statusFilterKeys:[],urgentFilterKeys:[],reviewedCount:"0",submitReviewedAllowed:false,submitReviewedText:"",isDeferEnabled:false});var c=["ApprovalIsFirst","ApprovalIsFinal","AuthenticationType","IsReturnedApproval","IsUrgentPayment","PaymentBatchIsEdited","PaymentBatchIsProcessed","PaymentBatchOrigin","Status","ResubmissionDays"].join(",");var d=["ApprovalIsFinal","ApprovalIsFinalText","IsUrgentPayment","PaymentIsUrgentText","Status"].join(",");var e=null;function g(f,K){var l;var m;if(f&&K&&K.length>0){m=K.map(function(n){return new F(f,"EQ",n);});l=m.length===1?m[0]:new F(m,false);}return l;}function h(){var f;var l=[];var u=b.getProperty("/"+_.urgentFilterKeys);var s=b.getProperty("/"+_.statusFilterKeys);if(u&&u.length>0){l.push(g("IsUrgentPayment",u));}if(s&&s.length>0){f=[].concat.apply([],s.map(function(m){return S.getGroupByKey(m).values;}));l.push(g("Status",f));}return l;}function i(l){var r=l.filter(function(f){return!!f.aFilters;})[0];return r?l.indexOf(r):-1;}function j(){var f=b.getProperty("/reviewedCount");var t=e.getText("masterSubmitAllReviewedCount",f);var l=b.getProperty("/isForReviewTab");var m=b.getProperty("/submitReviewedAllowed");b.setProperty("/submitReviewedText",t);b.setProperty("/showSubmitStrip",l&&m);}function k(s){var f=s.map(function(r){var l=r.getBindingContext();return{context:l,isNew:l.getProperty("ApprovalIsFirst")||l.getProperty("IsReturnedApproval")};});return{isSomeFirstStage:f.some(function(l){return l.isNew;}),isSomeNextStage:f.some(function(l){return!l.isNew;}),isSomePaymentEdit:f.some(function(l){return l.context.getProperty("PaymentBatchIsEdited");}),isSomeUntouched:f.some(function(l){return l.context.getProperty("IsActiveEntity");}),isSomeExternal:f.some(function(l){return l.context.getProperty("PaymentBatchOrigin");})};}return{getModel:function(){return b;},getModelName:function(){return _.viewModelName;},getAllwaysRequestFields:function(){return c;},getIgnoredFields:function(){return d;},init:function(f){e=f;b.setProperty("/firstStageActionsAvailable",false);b.setProperty("/nextStageActionsAvailable",false);b.setProperty("/showSubmitStrip",false);b.setProperty("/isForReviewTab",true);b.setProperty("/undoAvailable",false);b.setProperty("/statusFilterKeys",[]);b.setProperty("/urgentFilterKeys",[]);b.setProperty("/reviewedCount","0");b.setProperty("/submitReviewedAllowed",false);b.setProperty("/submitReviewedText",e.getText("masterSubmitAllReviewed"));},onSelectionChanged:function(s){var f=k(s);var l=f.isSomeFirstStage&&!f.isSomeNextStage&&!f.isSomePaymentEdit;b.setProperty("/firstStageActionsAvailable",l);b.setProperty("/isDeferEnabled",l&&!f.isSomeExternal);b.setProperty("/nextStageActionsAvailable",f.isSomeNextStage&&!f.isSomeFirstStage&&!f.isSomePaymentEdit);b.setProperty("/undoAvailable",s.length>0&&!f.isSomeUntouched);},ensureColumnDependencies:function(B){a.ensureColumnDependency(B,"HouseBank","PaytBatchHasMoreHouseBanks");a.ensureColumnDependency(B,"HouseBankAccount","PaytBatchHasMoreBankAccounts");a.ensureColumnDependency(B,"HouseBankAccount","HouseBank");a.ensureColumnDependency(B,"HouseBankAccount","HouseBankIBAN");a.ensureColumnDependency(B,"CompanyCode","CompanyCodeName");},applyCustomFilters:function(B){var f=h();var r;var l;var m;for(m=0;m<f.length;m++){r=i(B.filters);l=f[m];if(!l.aFilters||r===-1){B.filters.push(l);}else if(B.filters[r].bAnd){B.filters[r].aFilters.push(l);}else{B.filters[r]=new F([B.filters[r],l],true);}}},saveCustomState:function(C){var f=function(n){C[n]=b.getProperty("/"+n);};f(_.urgentFilterKeys);f(_.statusFilterKeys);},restoreCustomState:function(C){var f=function(n){if(C[n]!==undefined){b.setProperty("/"+n,C[n]);}};f(_.urgentFilterKeys);f(_.statusFilterKeys);},getReviewedTabFilters:function(){return[new F("IsActiveEntity","EQ",false),new F("PaymentBatchIsProcessed","EQ",true)];},setIsForReviewTab:function(f){b.setProperty("/isForReviewTab",f);j();},setReviewedCount:function(f){b.setProperty("/reviewedCount",f);b.setProperty("/submitReviewedAllowed",f&&f!=="0");j();}};});