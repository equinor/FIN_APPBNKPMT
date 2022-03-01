/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/Global","sap/ui/base/Object"],function(G,B){"use strict";var _;var a;var b;var c;function d(E,f,m){var p=E.getParameters();p.show(m,p.mainNavigation,p.actions,G.xmlfragment("fin.ap.approvebankpayments.view."+f));}function e(p){var f=p?p.getProperty("to_Batch"):undefined;return f?f.CompanyCode:undefined;}function i(f){return f.getKey()==="Payment-manage";}var C=B.extend("fin.ap.approvebankpayments.model.PopoverHandler",{constructor:function(v){this.view=v;}});C.prototype.onExit=function(){[a,_,b,c].forEach(function(f){if(f){f.destroy();}});a=null;_=null;b=null;c=null;};C.prototype.onMoreHouseBanksPress=function(E){var o=E.getSource();if(!_){_=this._loadFragment("moreBanksPopover","MoreBanksPopover");}_.setBindingContext(o.getBindingContext());_.openBy(o);};C.prototype.onMoreAccountsPress=function(E){var o=E.getSource();if(!a){a=this._loadFragment("moreAccountsPopover","MoreAccountsPopover");}a.setBindingContext(o.getBindingContext());a.openBy(o);};C.prototype.onMoreApymentAmountsPress=function(E){var o=E.getSource();if(!b){b=this._loadFragment("morePaymentAmountsPopover","MorePaymentAmounts");}b.setBindingContext(o.getBindingContext());b.openBy(o);};C.prototype.onBeforeHouseBankPopoverOpens=function(E){var p=E.getParameters();p.setSemanticAttributes({Bank:p.semanticAttributes.BankInternalID,BankCountry:p.semanticAttributes.BankCountry,HouseBank:p.semanticAttributes.HouseBank});p.open();};C.prototype.onCreatedByPress=function(E){var o=E.getSource();if(!c){c=this._loadFragment("createdByPopover","ContactQuickViewPopover");}c.bindElement(o.getBindingContext()+"/to_CreatedByContactCard");c.openBy(o);};C.prototype.onHouseBankNavigationTargetsObtained=function(E){d(E,"HouseBankPopover");};C.prototype.onHouseBankNavigationTargetsObtainedList=function(E){d(E,"HouseBankPopoverFromList");};C.prototype.onBeforeAccountPopoverOpens=function(E){var p=E.getParameters();var f=p.semanticAttributes;var g=f.CompanyCode?f.CompanyCode:f.PayingCompanyCode;p.setSemanticAttributes({CompanyCode:g,HouseBank:f.HouseBank,HouseBankAccount:f.HouseBankAccount});p.open();};C.prototype.onAccountNavigationTargetsObtained=function(E){d(E,"batch.AccountPopover");};C.prototype.onBeforeDocumentPopoverOpens=function(E){var p=E.getParameters();p.setSemanticAttributes({AccountingDocument:p.semanticAttributes.AccountingDocument,CompanyCode:p.semanticAttributes.CompanyCode,DocumentType:"3",FiscalYear:p.semanticAttributes.FiscalYear},"AccountingDocument");p.setSemanticAttributes({AccountingDocument:p.semanticAttributes.AccountingDocument,CompanyCode:p.semanticAttributes.CompanyCode,CustomClearingStatus:"A"},"Supplier");p.open();};C.prototype.onBeforePayeeBankPopoverOpens=function(E){var p=E.getParameters();p.setSemanticAttributes({Bank:p.semanticAttributes.PayeeBankInternalID,BankCountry:p.semanticAttributes.PayeeBankCountry});p.open();};C.prototype.onPayeeBankNavigationTargetsObtained=function(E){d(E,"payment.PayeeBankPopover");};C.prototype.onBeforePayeePopoverOpens=function(E){var p=E.getParameters();p.setSemanticAttributes({Supplier:p.semanticAttributes.Supplier});p.open();};C.prototype.onPayeeNavigationTargetsObtained=function(E){d(E,"payment.PayeePopover","");};C.prototype.onBeforePaymentPopoverOpens=function(E){var p=E.getParameters();var f=e(E.getSource().getBindingContext());var g=p.semanticAttributes.BankPaymentGroupingOrigin;var h=g&&g.startsWith("FI")?"4":"3";p.setSemanticAttributes({RunId:p.semanticAttributes.PaymentRunID,CompanyCode:f},"AutomaticPayment");p.setSemanticAttributes({AccountingDocument:p.semanticAttributes.AccountingDocument,CompanyCode:f,DocumentType:h,FiscalYear:p.semanticAttributes.FiscalYear},"AccountingDocument");p.open();};C.prototype.onBeforeOriginAppPopoverOpens=function(f){var p=f.getParameters();p.setSemanticAttributes({BcmBatchNumber:p.semanticAttributes.PaymentBatch});p.open();};C.prototype.onOriginAppNavigationTargetsObtained=function(f){var p=f.getParameters();p.show(undefined,p.actions.filter(i));};C.prototype._loadFragment=function(I,p){var f="fin.ap.approvebankpayments.view."+p;var g=G.xmlfragment(this.view.createId(I),f,this.view.getController());this.view.addDependent(g);return g;};return C;},true);