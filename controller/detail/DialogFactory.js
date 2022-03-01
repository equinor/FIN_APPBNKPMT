/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["fin/ap/approvebankpayments/controller/detail/batch/ConfirmBatchActionDialog","fin/ap/approvebankpayments/controller/ConfirmUndoDialog","fin/ap/approvebankpayments/controller/DeferDateDialog","fin/ap/approvebankpayments/controller/detail/EditDueDateDialog","fin/ap/approvebankpayments/controller/detail/EditInstructionKeyDialog","fin/ap/approvebankpayments/controller/detail/batch/TakeOverDialog","fin/ap/approvebankpayments/model/deferAction"],function(C,a,D,E,b,T,c){"use strict";var _=c;var d;return{askConfirmBatchAction:function(v,m,o,i){var e=new C(v,m,o,i);return e.getPromise();},askConfirmUndo:function(v,e){return new a(v,e);},askDeferDate:function(v){return new D(v);},askEditDueDate:function(v,m){return new E(v,m);},askEditInstructionKey:function(v,p){if(d===undefined){d=new b(v);}return d.selectInstructionKey(p);},askTakeOver:function(v,m){return new T(v,m);},getDeferSettings:function(){return _.getDeferSettings();},checkDeferDaysPeriod:function(e){_.checkDeferDaysPeriod(e);}};});
