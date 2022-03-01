/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["fin/ap/approvebankpayments/model/formatter"],function(F){"use strict";var _=F;var a;return{checkDeferDaysPeriod:function(c){a=c.getObject().ResubmissionDays;},getDeferSettings:function(){var d=new Date();if(a){d.setDate(d.getDate()+a);}return{date:_.dateTimeToDate(d),minDate:_.dateTimeToDate(new Date())};}};});
