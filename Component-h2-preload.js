/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('fin/ap/approvebankpayments/Component',["sap/ui/generic/app/AppComponent"],function(C){"use strict";return C.extend("fin.ap.approvebankpayments.Component",{metadata:{manifest:"json"}});});sap.ui.require.preload({"fin/ap/approvebankpayments/manifest.json":'{"_version":"1.7.0","sap.app":{"id":"fin.ap.approvebankpayments","type":"application","resources":"resources.json","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"8.0.1"},"ach":"FI-FIO-AP","dataSources":{"mainService":{"uri":"/sap/opu/odata/sap/FAP_APPROVEBANKPAYMENTS_SRV/","type":"OData","settings":{"odataVersion":"2.0","annotations":["FAP_APPROVEBANKPAYMENTS_ANNO_MDL","localAnnotations"],"localUri":"/webapp/test/mock/metadata.xml"}},"FAP_APPROVEBANKPAYMENTS_ANNO_MDL":{"uri":"/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName=\'FAP_APPROVEBANKPAYMENTS_ANNO_MDL\',Version=\'0001\')/$value/","type":"ODataAnnotation"},"localAnnotations":{"uri":"annotations/annotations.xml","type":"ODataAnnotation","settings":{"localUri":"annotations/annotations.xml"}}}},"sap.fiori":{"registrationIds":["F0673A"],"archeType":"transactional"},"sap.copilot":{"digitalAssistant":{"intentDefinition":{"copilotIntent":{"uri":"copilot/intent.xml","dataSources":["FAP_APPROVEBANKPAYMENTS_SRV"],"i18n":"i18n/copilot/i18n.properties"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://payment-approval","favIcon":"sap-icon://payment-approval","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_bluecrystal","sap_belize"],"fullWidth":true},"sap.ui5":{"dependencies":{"minUI5Version":"1.78.4","libs":{"sap.ui.generic.app":{},"sap.suite.ui.generic.template":{},"sap.collaboration":{"minVersion":"1.38","lazy":true},"sap.m":{"minVersion":"1.38.0","lazy":false},"sap.suite.ui.commons":{"lazy":false},"sap.ui.comp":{"minVersion":"1.38.0","lazy":false},"sap.ui.core":{"minVersion":"1.38.0","lazy":false},"sap.ui.layout":{"minVersion":"1.12","lazy":false},"sap.ui.unified":{"lazy":false},"sap.ui.fl":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"preload":false,"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"@i18n":{"preload":false,"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"defaultCountMode":"Inline","metadataUrlParams":{"sap-value-list":"none"}}}},"extends":{"component":"sap.suite.ui.generic.template.ListReport","minVersion":"1.1.0","extensions":{"sap.ui.controllerExtensions":{"sap.suite.ui.generic.template.ListReport.view.ListReport":{"controllerName":"fin.ap.approvebankpayments.controller.list.ListReportExt","sap.ui.generic.app":{"C_AbpPaymentBatch":{"EntitySet":"C_AbpPaymentBatch","Actions":{"approveBatches":{"id":"approveBatches","text":"{{masterSelectedBatchesApprove}}","press":"onApproveBatches","requiresSelection":true},"rejectBatches":{"id":"rejectBatches","text":"{{masterSelectedBatchesReject}}","press":"onRejectBatches"},"deferBatches":{"id":"deferBatches","text":"{{masterSelectedBatchesDefer}}","press":"onDeferBatches"},"returnBatches":{"id":"returnBatches","text":"{{masterSelectedBatchesReturn}}","press":"onReturnBatches"},"submitBatches":{"id":"submitBatches","text":"{{dialogSubmitButtonText}}","press":"onSubmitBatches","requiresSelection":true},"undoBatches":{"id":"undoBatches","text":"{{masterSelectedBatchesUndo}}","press":"onUndoBatches"}}}}},"sap.suite.ui.generic.template.ObjectPage.view.Details":{"controllerName":"fin.ap.approvebankpayments.controller.DetailPageExt","sap.ui.generic.app":{"C_AbpPaymentBatch":{"EntitySet":"C_AbpPaymentBatch","Header":{"Actions":{"approveBatch":{"applicablePath":"batchView>/approveActionAvailable","id":"approveBatch","text":"{{masterSelectedBatchesApprove}}","press":"onApproveBatch"},"rejectBatch":{"applicablePath":"batchView>/firstStageActionsAvailable","id":"rejectBatch","text":"{{masterSelectedBatchesReject}}","press":"onRejectBatch"},"deferBatch":{"applicablePath":"batchView>/isDeferEnabled","id":"deferBatch","text":"{{masterSelectedBatchesDefer}}","press":"onDeferBatch"},"returnBatch":{"applicablePath":"batchView>/nextStageActionsAvailable","id":"returnBatch","text":"{{masterSelectedBatchesReturn}}","press":"onReturnBatch"},"submitBatch":{"applicablePath":"batchView>/submitAvailable","id":"submitBatch","text":"{{dialogSubmitButtonText}}","press":"onSubmitBatch"},"undoBatch":{"applicablePath":"batchView>/draftStageActionsAvailable","id":"undoBatch","text":"{{masterSelectedBatchesUndo}}","press":"onUndoBatch"},"editBatch":{"applicablePath":"batchView>/batchEditable","id":"editBatch","text":"{{masterSelectedBatchesEdit}}","press":"onEditBatch"}}}},"C_AbpPayment":{"EntitySet":"C_AbpPayment","Header":{"Actions":{"edit":{"applicablePath":"paymentView>/batchEditable","id":"editBatchAndPayment","text":"{{masterSelectedBatchesEdit}}","press":"onEditPayment"},"editPaymentInstructionKey":{"applicablePath":"paymentView>/isInternal","id":"editPaymentInstructionKey","text":"{{batchPaymentsHeaderButtonTitleEditInstructionKey}}","press":"onEditPaymentInstructionKey"},"rejectPayment":{"applicablePath":"paymentView>/isNewBatchEdit","id":"rejectPayment","text":"{{batchPaymentsHeaderButtonTitleSetToReject}}","press":"onRejectPayment"},"deferPayment":{"applicablePath":"paymentView>/isDeferAvailable","id":"deferPayment","text":"{{batchPaymentsHeaderButtonTitleSetToDefer}}","press":"onDeferPayment"},"resetPayment":{"applicablePath":"paymentView>/isNewBatchEdit","id":"resetPayment","text":"{{batchPaymentsHeaderButtonTitleResetStatus}}","press":"onResetPaymentStatus"}}}}}}},"sap.ui.viewExtensions":{"sap.suite.ui.generic.template.ListReport.view.ListReport":{"SmartFilterBarControlConfigurationExtension|C_AbpPaymentBatch":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.list.CustomFilters","type":"XML"},"ResponsiveTableColumnsExtension|C_AbpPaymentBatch":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.list.BatchListTableColumns","type":"XML"},"ResponsiveTableCellsExtension|C_AbpPaymentBatch":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.list.BatchListTableCells","type":"XML"}},"sap.suite.ui.generic.template.ObjectPage.view.Details":{"ReplaceHeaderFacet|C_AbpPaymentBatch|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::batch":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.BatchHeaderFacetBatch","type":"XML","bVisibleOnEdit":true},"ReplaceHeaderFacet|C_AbpPaymentBatch|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::sum":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.BatchHeaderFacetSum","type":"XML","bVisibleOnEdit":true},"ReplaceHeaderFacet|C_AbpPaymentBatch|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::status":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.BatchHeaderFacetStatus","type":"XML","bVisibleOnEdit":true},"ReplaceFacet|C_AbpPaymentBatch|BatchInfo":{"id":"batchInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.batch.BatchInfo","type":"XML"},"ResponsiveTableColumnsExtension|C_AbpPayment|Payments":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.PaymentListTableColumns","type":"XML"},"ResponsiveTableCellsExtension|C_AbpPayment|Payments":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.PaymentListTableCells","type":"XML"},"ResponsiveTableColumnsExtension|C_AprvBkPaytExcludedPayment|ExcludedPayments":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.PaymentListTableColumns","type":"XML"},"ResponsiveTableCellsExtension|C_AprvBkPaytExcludedPayment|ExcludedPayments":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.batch.PaymentListTableCells","type":"XML"},"ReplaceFacet|C_AbpPaymentBatch|Timeline":{"id":"timeline","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.batch.Timeline","type":"XML"},"ReplaceFacet|C_AbpPaymentBatch|Attachments":{"id":"attachments","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.batch.Attachments","type":"XML"},"ReplaceHeaderFacet|C_AbpPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::payee":{"id":"payeeInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetPayee","type":"XML","bVisibleOnEdit":true},"ReplaceHeaderFacet|C_AbpPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::status":{"id":"statusInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetStatus","type":"XML"},"ReplaceHeaderFacet|C_AbpPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::sum":{"id":"sumInfo","className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetSum","type":"XML"},"ReplaceFacet|C_AbpPayment|PaymentInfo":{"id":"paymentInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentInfo","type":"XML"},"ResponsiveTableColumnsExtension|C_AbpInvoice|to_Invoice::com.sap.vocabularies.UI.v1.LineItem":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.payment.InvoiceListTableColumns","type":"XML"},"ResponsiveTableCellsExtension|C_AbpInvoice|to_Invoice::com.sap.vocabularies.UI.v1.LineItem":{"className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.payment.InvoiceListTableCells","type":"XML"},"ReplaceHeaderFacet|C_AprvBkPaytExcludedPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::payee":{"id":"payeeInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetPayee","type":"XML","bVisibleOnEdit":true},"ReplaceHeaderFacet|C_AprvBkPaytExcludedPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::status":{"id":"statusInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetStatus","type":"XML"},"ReplaceHeaderFacet|C_AprvBkPaytExcludedPayment|headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::sum":{"id":"sumInfo","className":"sap.ui.core.Fragment","fragmentName":"fin.ap.approvebankpayments.view.payment.PaymentHeaderFacetSum","type":"XML"},"ReplaceFacet|C_AprvBkPaytExcludedPayment|PaymentInfo":{"id":"paymentInfo","className":"sap.ui.core.mvc.View","viewName":"fin.ap.approvebankpayments.view.payment.PaymentInfo","type":"XML"}}}}}},"sap.ui.generic.app":{"settings":{"flexibleColumnLayout":{"defaultTwoColumnLayoutType":"TwoColumnsMidExpanded","defaultThreeColumnLayoutType":"ThreeColumnsMidExpanded"},"objectPageDynamicHeaderTitleWithVM":false},"pages":[{"entitySet":"C_AbpPaymentBatch","component":{"name":"sap.suite.ui.generic.template.ListReport","list":true,"settings":{"condensedTableLayout":true,"multiSelect":true,"quickVariantSelectionX":{"variants":{"0":{"key":"_tab1_ForReview","annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#ForReview"},"1":{"key":"_tab2_Reviewed","annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#Reviewed"}}}}},"pages":[{"entitySet":"C_AbpPaymentBatch","component":{"name":"sap.suite.ui.generic.template.ObjectPage"},"pages":[{"navigationProperty":"to_Payment","entitySet":"C_AbpPayment","component":{"name":"sap.suite.ui.generic.template.ObjectPage"}},{"navigationProperty":"to_ExcludedPayment","entitySet":"C_AprvBkPaytExcludedPayment","component":{"name":"sap.suite.ui.generic.template.ObjectPage"}}]}]}]}}'},"fin/ap/approvebankpayments/Component-h2-preload");sap.ui.loader.config({depCacheUI5:{"fin/ap/approvebankpayments/Component.js":["sap/ui/generic/app/AppComponent.js"],"fin/ap/approvebankpayments/controller/ConfirmUndoDialog.js":["sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/DeferDateDialog.js":["fin/ap/approvebankpayments/model/deferAction.js","fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/core/library.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/DetailPageExt.controller.js":["fin/ap/approvebankpayments/controller/detail/batch/BatchDetailPageExt.js","fin/ap/approvebankpayments/controller/detail/payment/PaymentDetailPageExt.js","fin/ap/approvebankpayments/model/PopoverHandler.js","fin/ap/approvebankpayments/model/formatter.js"],"fin/ap/approvebankpayments/controller/detail/DialogFactory.js":["fin/ap/approvebankpayments/controller/ConfirmUndoDialog.js","fin/ap/approvebankpayments/controller/DeferDateDialog.js","fin/ap/approvebankpayments/controller/detail/EditDueDateDialog.js","fin/ap/approvebankpayments/controller/detail/EditInstructionKeyDialog.js","fin/ap/approvebankpayments/controller/detail/batch/ConfirmBatchActionDialog.js","fin/ap/approvebankpayments/controller/detail/batch/TakeOverDialog.js","fin/ap/approvebankpayments/model/deferAction.js"],"fin/ap/approvebankpayments/controller/detail/DraftController.js":["fin/ap/approvebankpayments/controller/detail/DialogFactory.js","fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/batchDraft.js","sap/ui/model/Filter.js","sap/ui/model/FilterOperator.js"],"fin/ap/approvebankpayments/controller/detail/EditDueDateDialog.js":["fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/core/library.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/EditInstructionKeyDialog.js":["fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/model/Filter.js","sap/ui/model/FilterOperator.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/batch/Attachments.controller.js":["fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/formatter.js","sap/m/UploadCollectionParameter.js","sap/ui/core/mvc/Controller.js","sap/ui/model/Filter.js","sap/ui/model/FilterOperator.js","sap/ui/unified/FileUploaderParameter.js"],"fin/ap/approvebankpayments/controller/detail/batch/BatchDetailPageExt.js":["fin/ap/approvebankpayments/controller/detail/DialogFactory.js","fin/ap/approvebankpayments/controller/detail/DraftController.js","fin/ap/approvebankpayments/controller/list/ConfirmSubmitDialog.js","fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/PaymentListModel.js","fin/ap/approvebankpayments/model/formatter.js","sap/m/Button.js","sap/ui/base/Object.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/batch/BatchInfo.controller.js":["fin/ap/approvebankpayments/controller/detail/DialogFactory.js","fin/ap/approvebankpayments/controller/detail/DraftController.js","fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/PopoverHandler.js","fin/ap/approvebankpayments/model/formatter.js","sap/ui/core/mvc/Controller.js"],"fin/ap/approvebankpayments/controller/detail/batch/ConfirmBatchActionDialog.js":["fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/model/json/JSONModel.js","sap/ui/thirdparty/jquery.js"],"fin/ap/approvebankpayments/controller/detail/batch/TakeOverDialog.js":["sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/batch/Timeline.controller.js":["fin/ap/approvebankpayments/model/formatter.js","sap/m/library.js","sap/ui/Global.js","sap/ui/core/mvc/Controller.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/payment/PaymentDetailPageExt.js":["fin/ap/approvebankpayments/controller/detail/DialogFactory.js","fin/ap/approvebankpayments/controller/detail/DraftController.js","fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/formatter.js","sap/ui/base/Object.js","sap/ui/model/Context.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/detail/payment/PaymentInfo.controller.js":["fin/ap/approvebankpayments/controller/detail/DialogFactory.js","fin/ap/approvebankpayments/controller/detail/DraftController.js","fin/ap/approvebankpayments/model/PopoverHandler.js","fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/core/mvc/Controller.js","sap/ui/model/Context.js"],"fin/ap/approvebankpayments/controller/list/ConfirmMasterActionDialog.js":["fin/ap/approvebankpayments/model/formatter.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/list/ConfirmSubmitDialog.js":["fin/ap/approvebankpayments/model/Messaging.js","sap/m/Link.js","sap/m/MessageStrip.js","sap/ui/Global.js","sap/ui/base/Object.js","sap/ui/core/Fragment.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/controller/list/ListReportExt.controller.js":["fin/ap/approvebankpayments/controller/ConfirmUndoDialog.js","fin/ap/approvebankpayments/controller/list/ConfirmMasterActionDialog.js","fin/ap/approvebankpayments/controller/list/ConfirmSubmitDialog.js","fin/ap/approvebankpayments/model/ListViewModel.js","fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/PopoverHandler.js","fin/ap/approvebankpayments/model/batchDraft.js","fin/ap/approvebankpayments/model/formatter.js","sap/ui/core/InvisibleText.js"],"fin/ap/approvebankpayments/model/Constants.js":["sap/ui/core/library.js"],"fin/ap/approvebankpayments/model/ListViewModel.js":["fin/ap/approvebankpayments/model/formatter.js","fin/ap/approvebankpayments/model/statusGroups.js","sap/ui/model/Filter.js","sap/ui/model/json/JSONModel.js"],"fin/ap/approvebankpayments/model/Messaging.js":["sap/base/Log.js","sap/m/Button.js","sap/m/Dialog.js","sap/m/MessageBox.js","sap/m/MessageItem.js","sap/m/MessageToast.js","sap/m/MessageView.js","sap/ui/core/library.js","sap/ui/core/message/Message.js"],"fin/ap/approvebankpayments/model/PopoverHandler.js":["sap/ui/Global.js","sap/ui/base/Object.js"],"fin/ap/approvebankpayments/model/batchDraft.js":["fin/ap/approvebankpayments/model/Messaging.js","fin/ap/approvebankpayments/model/batchDraftManual.js"],"fin/ap/approvebankpayments/model/batchDraftManual.js":["fin/ap/approvebankpayments/model/Messaging.js"],"fin/ap/approvebankpayments/model/deferAction.js":["fin/ap/approvebankpayments/model/formatter.js"],"fin/ap/approvebankpayments/model/formatter.js":["fin/ap/approvebankpayments/model/Constants.js","fin/ap/approvebankpayments/model/statusGroups.js","sap/m/library.js","sap/ui/core/Locale.js","sap/ui/core/format/DateFormat.js","sap/ui/core/format/FileSizeFormat.js","sap/ui/core/format/NumberFormat.js","sap/ui/core/library.js"],"fin/ap/approvebankpayments/model/statusGroups.js":["sap/ui/core/library.js"],"fin/ap/approvebankpayments/view/ConfirmUndoDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/Text.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/ContactQuickViewPopover.fragment.xml":["sap/m/QuickView.js","sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/DeferDateDialog.fragment.xml":["sap/m/Button.js","sap/m/DatePicker.js","sap/m/Dialog.js","sap/m/Label.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/HouseBankPopover.fragment.xml":["sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/HouseBankPopoverFromList.fragment.xml":["sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/MoreAccountsPopover.fragment.xml":["sap/m/CustomListItem.js","sap/m/List.js","sap/m/ResponsivePopover.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"],"fin/ap/approvebankpayments/view/MoreBanksPopover.fragment.xml":["sap/m/CustomListItem.js","sap/m/List.js","sap/m/ResponsivePopover.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/MorePaymentAmounts.fragment.xml":["sap/m/CustomListItem.js","sap/m/HBox.js","sap/m/List.js","sap/m/ResponsivePopover.js","sap/m/Text.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/AccountPopover.fragment.xml":["sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/ApproverQuickView.fragment.xml":["sap/m/QuickView.js","sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/ApproversPopover.fragment.xml":["sap/m/List.js","sap/m/ResponsivePopover.js","sap/m/StandardListItem.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/Attachments.view.xml":["fin/ap/approvebankpayments/controller/detail/batch/Attachments.controller.js","sap/m/ObjectAttribute.js","sap/m/OverflowToolbar.js","sap/m/SearchField.js","sap/m/Title.js","sap/m/ToolbarSpacer.js","sap/m/UploadCollection.js","sap/m/UploadCollectionItem.js","sap/m/UploadCollectionToolbarPlaceholder.js","sap/ui/core/mvc/XMLView.js"],"fin/ap/approvebankpayments/view/batch/BatchHeaderFacetBatch.fragment.xml":["sap/m/HBox.js","sap/m/Label.js","sap/m/ObjectStatus.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js","sap/ui/core/HTML.js"],"fin/ap/approvebankpayments/view/batch/BatchHeaderFacetStatus.fragment.xml":["sap/m/HBox.js","sap/m/ObjectStatus.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/BatchHeaderFacetSum.fragment.xml":["sap/m/Label.js","sap/m/ObjectNumber.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/BatchInfo.view.xml":["fin/ap/approvebankpayments/controller/detail/batch/BatchInfo.controller.js","sap/m/Label.js","sap/m/Link.js","sap/m/ObjectNumber.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/mvc/XMLView.js","sap/ui/layout/form/SimpleForm.js"],"fin/ap/approvebankpayments/view/batch/ConfirmActionDialog.fragment.xml":["sap/m/BusyIndicator.js","sap/m/Button.js","sap/m/DatePicker.js","sap/m/Dialog.js","sap/m/HBox.js","sap/m/Label.js","sap/m/MessageStrip.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/m/TextArea.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/EditDueDateDialog.fragment.xml":["sap/m/Button.js","sap/m/DatePicker.js","sap/m/Dialog.js","sap/m/Label.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/EditInstructionKeyDialog.fragment.xml":["sap/m/Button.js","sap/m/Column.js","sap/m/ColumnListItem.js","sap/m/Dialog.js","sap/m/ObjectStatus.js","sap/m/OverflowToolbar.js","sap/m/SearchField.js","sap/m/Table.js","sap/m/Text.js","sap/m/Title.js","sap/m/ToolbarSpacer.js","sap/ui/comp/smarttable/SmartTable.js","sap/ui/core/CustomData.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/PaymentListTableCells.fragment.xml":["sap/m/HBox.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/PaymentListTableColumns.fragment.xml":["sap/m/Column.js","sap/m/Text.js","sap/ui/core/CustomData.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/TakeOverDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/Text.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/batch/Timeline.view.xml":["fin/ap/approvebankpayments/controller/detail/batch/Timeline.controller.js","sap/m/FlexBox.js","sap/m/HBox.js","sap/m/Link.js","sap/m/Text.js","sap/m/VBox.js","sap/suite/ui/commons/Timeline.js","sap/suite/ui/commons/TimelineItem.js","sap/ui/core/mvc/XMLView.js"],"fin/ap/approvebankpayments/view/list/BatchListTableCells.fragment.xml":["sap/m/HBox.js","sap/m/Link.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/list/BatchListTableColumns.fragment.xml":["sap/m/Column.js","sap/m/Text.js","sap/ui/core/CustomData.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/list/ConfirmActionDialog.fragment.xml":["sap/m/Button.js","sap/m/CheckBox.js","sap/m/DatePicker.js","sap/m/Dialog.js","sap/m/HBox.js","sap/m/Label.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/m/TextArea.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/list/ConfirmSubmitAppDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/Input.js","sap/m/Label.js","sap/m/Text.js","sap/ui/core/Fragment.js","sap/ui/layout/form/SimpleForm.js"],"fin/ap/approvebankpayments/view/list/ConfirmSubmitNoAuthDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/Text.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/list/ConfirmSubmitSmsDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/m/HBox.js","sap/m/Input.js","sap/m/Text.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/list/CustomFilters.fragment.xml":["sap/m/MultiComboBox.js","sap/ui/comp/smartfilterbar/ControlConfiguration.js","sap/ui/core/Fragment.js","sap/ui/core/Item.js"],"fin/ap/approvebankpayments/view/payment/InvoiceListTableCells.fragment.xml":["sap/m/HBox.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/payment/InvoiceListTableColumns.fragment.xml":["sap/m/Column.js","sap/m/Text.js","sap/ui/core/CustomData.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/payment/PayeeBankPopover.fragment.xml":["sap/m/Text.js","sap/m/VBox.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"],"fin/ap/approvebankpayments/view/payment/PayeePopover.fragment.xml":["sap/m/QuickViewGroup.js","sap/m/QuickViewGroupElement.js","sap/m/QuickViewPage.js","sap/m/VBox.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/payment/PaymentHeaderFacetPayee.view.xml":["fin/ap/approvebankpayments/controller/detail/payment/PaymentInfo.controller.js","sap/m/HBox.js","sap/m/Label.js","sap/m/ObjectAttribute.js","sap/m/ObjectStatus.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/HTML.js","sap/ui/core/mvc/XMLView.js"],"fin/ap/approvebankpayments/view/payment/PaymentHeaderFacetStatus.view.xml":["fin/ap/approvebankpayments/controller/detail/payment/PaymentInfo.controller.js","sap/m/HBox.js","sap/m/ObjectStatus.js","sap/ui/core/mvc/XMLView.js"],"fin/ap/approvebankpayments/view/payment/PaymentHeaderFacetSum.fragment.xml":["sap/m/Label.js","sap/m/ObjectNumber.js","sap/ui/core/Fragment.js"],"fin/ap/approvebankpayments/view/payment/PaymentInfo.view.xml":["fin/ap/approvebankpayments/controller/detail/payment/PaymentInfo.controller.js","sap/m/Label.js","sap/m/ObjectNumber.js","sap/m/ObjectStatus.js","sap/m/Text.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/core/mvc/XMLView.js","sap/ui/layout/form/SimpleForm.js"]}});