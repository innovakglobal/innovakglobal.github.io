(self.webpackChunkMyInnovak=self.webpackChunkMyInnovak||[]).push([[3475],{3475:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ExpensePageModule:()=>O,HttpLoaderFactory:()=>I});var i=n(1116),o=n(1041),s=n(4812),r=n(4258),a=n(4762),l=n(3169),c=n(5366),p=n(6171),u=n(4033),h=n(7047),g=n(649),d=n(6532),m=n(6116);function A(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-row"),c.TgZ(1,"ion-item"),c.TgZ(2,"ion-label",16),c._uU(3),c.ALo(4,"translate"),c.qZA(),c.TgZ(5,"ion-input",58),c.NdJ("click",function(){return c.CHM(e),c.oxw().expenseCourtesyTypeModal()})("ngModelChange",function(t){return c.CHM(e),c.oxw().expenseCourtesyType=t}),c.qZA(),c.qZA(),c.TgZ(6,"ion-item"),c.TgZ(7,"ion-label",16),c._uU(8),c.ALo(9,"translate"),c.qZA(),c.TgZ(10,"ion-input",59),c.NdJ("ngModelChange",function(t){return c.CHM(e),c.oxw().expenseNumberPerson=t}),c.qZA(),c.qZA(),c.TgZ(11,"ion-item"),c.TgZ(12,"ion-label",60),c._uU(13),c.ALo(14,"translate"),c.qZA(),c.TgZ(15,"ion-textarea",61),c.NdJ("ngModelChange",function(t){return c.CHM(e),c.oxw().expenseCourtesyRazons=t}),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(3),c.hij("",c.lcZ(4,7,"PAGES.NUEVOGASTO.TIPOCORTESIA"),"*"),c.xp6(2),c.Q6J("ngModel",e.expenseCourtesyType),c.xp6(3),c.Oqu(c.lcZ(9,9,"PAGES.NUEVOGASTO.NUMPERSONAS")),c.xp6(2),c.Q6J("ngModel",e.expenseNumberPerson),c.xp6(3),c.AsE("",c.lcZ(14,11,"PAGES.NUEVOGASTO.RAZONESCORTESIA")," (",e.razonesParaCortesia,")"),c.xp6(2),c.Q6J("ngModel",e.expenseCourtesyRazons)}}function y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-row"),c.TgZ(1,"ion-col",11),c.TgZ(2,"ion-item"),c.TgZ(3,"ion-label",16),c._uU(4),c.ALo(5,"translate"),c.qZA(),c.TgZ(6,"ion-input",62),c.NdJ("ngModelChange",function(t){return c.CHM(e),c.oxw().nochesHospedaje=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(4),c.Oqu(c.lcZ(5,2,"PAGES.NUEVOGASTO.NOCHESHOSPEDAJE")),c.xp6(2),c.Q6J("ngModel",e.nochesHospedaje)}}function T(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-row"),c.TgZ(1,"p",10),c._uU(2,"Nuevo archivo:"),c.qZA(),c.TgZ(3,"ion-item",45),c.NdJ("click",function(){c.CHM(e);const t=c.oxw();return t.openFile(t.expenseFile)}),c._UZ(4,"ion-icon",46),c._uU(5),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(5),c.hij(" ",e.newFileName," ")}}function Z(e,t){if(1&e&&c._UZ(0,"img",63),2&e){const e=c.oxw();c.Q6J("src",e.photo64PreviewData,c.LSH)}}function x(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-fab-button",64),c.NdJ("click",function(){return c.CHM(e),c.oxw().takePhoto()}),c._UZ(1,"ion-icon",65),c.qZA()}}const D=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,s,r,a,c,p,u,h){this.datePipe=e,this.expensesService=t,this.navParams=n,this.cameraService=i,this.toastService=o,this.alertCtrl=s,this.loadingCtrl=r,this.translate=a,this.datePicker=c,this.iab=p,this.router=u,this.plt=h,this.idioma="es",this.userData="",this.newFile="",this.newFileName="",this.photo64Preview="",this.photo64PreviewData="",this.fileSource="no file",this.expenseDate="05-12-2018",this.expenseTip="0.00",this.userZones=[],this.typeOfCourtesyArray=l.j,this.sistemaOperativo="",this.validateDate=/^(0?[1-9]|[12][0-9]|3[01])[\-](0[1-9]|1[012])[\-]\d{4}$/,a.setDefaultLang(this.idioma),this.translate.use(this.idioma);const g=this.router.getCurrentNavigation();this.idGasto=g.extras.state.expenseID,this.newFile=""}ionViewDidEnter(){return(0,a.mG)(this,void 0,void 0,function*(){if(localStorage.getItem("userData")){this.userData=JSON.parse(localStorage.getItem("userData"));var e=yield this.loadingCtrl.create({message:"Cargando..."});e.present(),this.sistemaOperativo=this.plt.is("android")?"android":"ios";let n=new Date;n.getFullYear();var t=n.getMonth();n.getDate(),t=parseFloat(t)+1,this.expenseDate=(new Date).toISOString(),this.expensesService.GET_userCompanies(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.companiesBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.companiesBDArray=t,this.companyID=t[0].companyID,this.companyName=t[0].companyName+"/"+t[0].companyDescription}),this.expensesService.GET_userZones(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.zonesBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.zonesBDArray=t,this.zoneID=t[0].zoneID,this.zoneName=t[0].zoneName}),this.expensesService.GET_userRegions(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.regionsBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.regionsBDArray=t,this.regionID=t[0].regionID,this.regionName=t[0].regionName}),this.expensesService.GET_userCategories(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.categoriesBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.categoriesBDArray=t,this.categoryID=0,this.categoryName=this.translate.instant("PAGES.NUEVOGASTO.TIPOGASTO")}),this.expensesService.GET_userPaymentTypes(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.paymenTypesBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.paymenTypesBDArray=t,this.paymentTypeID="0",this.paymentTypeName=this.translate.instant("PAGES.NUEVOGASTO.METODOGASTO")}),this.expensesService.GET_userCurrencies(this.userData.userID).subscribe(t=>{if("200"!=t[0].statusID)return this.currenciesBDArray=[],this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.currenciesBDArray=t,this.currencyID=t[0].currencyID,this.currencyName=t[0].currencyName}),this.expensesService.GET_userExpense(this.idGasto).subscribe(t=>{if("200"!=t[0].statusID)return this.toastService.showToastBottom(t[0].statusDescription),void e.dismiss();this.expenseID=t[0].expenseID,this.userID=t[0].userID,this.currencyID=t[0].currencyID;for(let e of this.currenciesBDArray)e.currencyID==this.currencyID&&(this.currencyName=e.currencyName);this.categoryID=t[0].categoryID;for(let e of this.categoriesBDArray)e.categoryID==this.categoryID&&(this.categoryName=e.categoryName);this.expenseLevel=t[0].expenseLevel,this.categoryEpicorID=t[0].categoryEpicorID.substr(5,8),this.paymentTypeID=t[0].paymentTypeID;for(let e of this.paymenTypesBDArray)e.paymentTypeID==this.paymentTypeID&&(this.paymentTypeName=e.paymentTypeName);this.expenseCreate=t[0].expenseCreate,this.expenseDate=this.transformDate(t[0].expenseDate),this.companyID=t[0].companyID,this.companyName=t[0].companyName+" / "+t[0].companyDescription,this.zoneID=t[0].zoneID,this.zoneName=t[0].zoneName,this.regionID=t[0].regionID,this.regionName=t[0].regionName,this.expenseCompany=t[0].expenseCompany,this.expenseCourtesyType=t[0].expenseCourtesyType,this.expenseClientName=t[0].expenseClientName,this.expenseNumberPerson=t[0].expenseNumberPerson,this.expenseProductsPromote=t[0].expenseProductsPromote,this.expenseCourtesyRazons=t[0].expenseCourtesyRazons,this.nochesHospedaje=t[0].nochesHospedaje,this.expenseInvoiceNumber=t[0].expenseInvoiceNumber,this.expenseSupplier=t[0].expenseSupplier,this.expenseSupplierRFC=t[0].expenseSupplierRFC,this.expenseSubTotal=t[0].expenseSubTotal,this.expenseTax=t[0].expenseTax,this.expenseTip=t[0].expenseTip,this.expenseTotal=t[0].expenseTotal,this.expenseDescription=t[0].expenseDescription,this.expenseFile=t[0].expenseFile,this.expenseStatus=t[0].expenseStatus,this.expenseStatusName=t[0].expenseStatusName,this.expenseAdminCommentsPublics=t[0].expenseAdminCommentsPublics,this.expenseAdminCommentsPrivates=t[0].expenseAdminCommentsPrivates}),this.razonesParaCortesia=this.translate.instant("PAGES.NUEVOGASTO.EMPRESAPERTENECE")+", "+this.translate.instant("PAGES.NUEVOGASTO.NOMBRESPERSONAS")+", "+this.translate.instant("PAGES.NUEVOGASTO.PRODUCTOSPRO"),this.expensesService.GET_userPreferences(this.userData.userID).subscribe(e=>{if(""!=e[0].paymentTypeID){this.regionIDPreference=e[0].regionID,this.zoneIDPreference=e[0].zoneID,this.paymentTypeIDPreference=e[0].paymentTypeID,this.currencyIDPreference=e[0].currencyID;for(let e of this.regionsBDArray)e.regionID==this.regionIDPreference&&(this.regionName=e.regionName);for(let e of this.zonesBDArray)e.zoneID==this.zoneIDPreference&&(this.zoneName=e.zoneName);for(let e of this.currenciesBDArray)e.currencyID==this.currencyIDPreference&&(this.currencyName=e.currencyName)}}),e.dismiss()}else this.router.navigate(["/login"])})}cancelarGastoUsuario(e){return(0,a.mG)(this,void 0,void 0,function*(){var t=yield this.loadingCtrl.create({message:"Cargando..."});yield t.present(),this.expensesService.cancelarGastoUsuario(e).subscribe(e=>{this.toastService.showToastBottom("Gasto cancelado con \xe9xito."),t.dismiss(),this.router.navigate(["/tabs/gastos"])},e=>{this.toastService.showToastBottom("Gasto cancelado con \xe9xito."),t.dismiss()},()=>{this.toastService.showToastBottom("Gasto cancelado con \xe9xito."),t.dismiss()})})}sumTotal(){this.expenseTotal=parseFloat(this.expenseSubTotal)+parseFloat(this.expenseTip)+parseFloat(this.expenseTax)}vaciarPropina(e){this.expenseTip=""}backButton(){this.router.navigate(["/tabs/gastos"])}compruebaPropina(){""===this.expenseTip&&(this.expenseTip="0.00")}openFile(e){this.iab.create("http://201.174.71.70/MyInnovak/endpoints/evidencesFiles/"+e,"_system")}openDatePicker(){this.datePicker.show({date:new Date,mode:"date",androidTheme:this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK}).then(e=>this.expenseDate=this.transformDate(e),e=>this.toastService.showToastBottom("Error occurred while getting date: "+e))}transformDate(e){e.length>10&&(e=e.substr(0,10));var t=new Array;return(t=e.split("/"))[0]+"-"+t[1]+"-"+t[2]}validateDateFunction(e){return!(!this.validateDate.test(e)||""==e)}takePhoto(){this.newFile="",this.newFileName="",this.photo64Preview="",this.photo64PreviewData="",this.fileSource="no file",this.cameraService.takePhotoService().then(e=>{this.photo64Preview=e,this.photo64PreviewData="data:image/jpeg;base64,"+e,this.fileSource="Camera"})}getFileName(){this.newFileName="",this.newFileName=document.getElementById("file-2").files[0].name;try{this.fileSource=this.newFileName.length<4?"no file":"internalStorage"}catch(e){this.fileSource="no file"}}pickFileFromDevice(){this.newFile="",this.newFileName="",this.photo64Preview="",this.photo64PreviewData="",this.fileSource="no file",document.getElementById("file-2").click(),this.newFile=document.getElementById("file-2").files[0]}sendForm(e){return(0,a.mG)(this,void 0,void 0,function*(){if("true"==localStorage.getItem("appNetworkStatus"))if(this.validateDateFunction(e.value.expenseDate))if(isNaN(this.expenseTotal))this.toastService.showToastBottom("Error: Total");else if("no file"!=this.fileSource)if(0!=e.value.categoryID)if("0"!=e.value.paymentTypeID){if(10==this.categoryID||33==this.categoryID||51==this.categoryID||68==this.categoryID){if(null==this.nochesHospedaje)return void this.toastService.showToastBottom("Ingrese noches de hospedaje");if(this.nochesHospedaje<1)return void this.toastService.showToastBottom("Noches de hospedaje debe ser superior a 1")}else this.nochesHospedaje=0;var t=yield this.loadingCtrl.create({message:"Creando gasto..."});t.present(),this.expensesService.POST_updateExpense(e.value,document.getElementById("file-2").files[0],this.photo64Preview).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){if("200"==e[0].statusID){t.dismiss();let e=yield this.alertCtrl.create({header:"Gasto actualizado",subHeader:"Gasto actualizado con \xe9xito",buttons:[{text:"Ok",handler:()=>{this.router.navigate(["/tabs/gastos"])}}]});yield e.present()}else t.dismiss(),this.toastService.showToastBottom(e[0].statusDescription)}))}else this.toastService.showToastBottom(this.translate.instant("PAGES.NUEVOGASTO.SELECCIONEMETODO"));else this.toastService.showToastBottom(this.translate.instant("PAGES.NUEVOGASTO.SELECCIONETIPO"));else this.toastService.showToastBottom("No file or photo selected");else this.toastService.showToastBottom("Formato de fecha invalido (dd-MM-yyyy)");else this.toastService.showToastBottom("Es necesario conectarse a internet")})}userZonesModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];for(let t of this.zonesBDArray)e.push(null!=this.zoneIDPreference?t.zoneID==this.zoneIDPreference?{type:"radio",label:t.zoneName,value:t.zoneID,checked:!0}:{type:"radio",label:t.zoneName,value:t.zoneID,checked:!1}:t.zoneID==this.zoneID?{type:"radio",label:t.zoneName,value:t.zoneID,checked:!0}:{type:"radio",label:t.zoneName,value:t.zoneID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.ZONA"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.zoneID=e;for(let t of this.zonesBDArray)t.zoneID==this.zoneID&&(this.zoneName=t.zoneName)}}]})).present()})}userRegionsModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];for(let t of this.regionsBDArray)e.push(null!=this.regionIDPreference?t.regionID==this.regionIDPreference?{type:"radio",label:t.regionName,value:t.regionID,checked:!0}:{type:"radio",label:t.regionName,value:t.regionID,checked:!1}:t.regionID==this.regionID?{type:"radio",label:t.regionName,value:t.regionID,checked:!0}:{type:"radio",label:t.regionName,value:t.regionID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.REGION"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.regionID=e;for(let t of this.regionsBDArray)t.regionID==this.regionID&&(this.regionName=t.regionName)}}]})).present()})}userCompaniesModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];for(let t of this.companiesBDArray)e.push(t.companyID==this.companyID?{type:"radio",label:t.companyName+" / "+t.companyDescription,value:t.companyID,checked:!0}:{type:"radio",label:t.companyName+" / "+t.companyDescription,value:t.companyID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.COMPANIA"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.companyID=e;for(let t of this.companiesBDArray)t.companyID==this.companyID&&(this.companyName=t.companyName+"/"+t.companyDescription)}}]})).present()})}userCategoriesModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];e.push({type:"radio",label:this.translate.instant("PAGES.NUEVOGASTO.TIPOGASTO"),value:"0",checked:!0});for(let t of this.categoriesBDArray)e.push({type:"radio",label:t.categoryName,value:t.categoryID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.TIPOGASTO"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.categoryID=e;for(let t of this.categoriesBDArray)console.log(t.categoryEpicorID),t.categoryID==this.categoryID&&(this.categoryName=t.categoryName,this.categoryEpicorID=t.categoryEpicorID.substr(5,8),this.expenseCompany="",this.expenseCourtesyType="Otro",this.expenseClientName="",this.expenseNumberPerson="",this.expenseProductsPromote="",this.expenseCourtesyRazons="",this.expenseTip="0.00",this.sumTotal(),console.log("category selected:",this.categoryID+"/"+this.categoryName))}}]})).present()})}userPaymentTypes(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];e.push({type:"radio",label:this.translate.instant("PAGES.NUEVOGASTO.METODOGASTO"),value:"0",checked:!0});for(let t of this.paymenTypesBDArray)e.push({type:"radio",label:t.paymentTypeName,value:t.paymentTypeID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.TIPOGASTO"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.paymentTypeID=e;for(let t of this.paymenTypesBDArray)t.paymentTypeID==this.paymentTypeID&&(this.paymentTypeName=t.paymentTypeName)}}]})).present()})}userCurrencies(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];for(let t of this.currenciesBDArray)e.push(null!=this.currencyIDPreference?t.currencyID==this.currencyIDPreference?{type:"radio",label:t.currencyName,value:t.currencyID,checked:!0}:{type:"radio",label:t.currencyName,value:t.currencyID,checked:!1}:t.currencyID==this.currencyID?{type:"radio",label:t.currencyName,value:t.currencyID,checked:!0}:{type:"radio",label:t.currencyName,value:t.currencyID,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.MONEDAGASTO"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.currencyID=e;for(let t of this.currenciesBDArray)t.currencyID==this.currencyID&&(this.currencyName=t.currencyName)}}]})).present()})}expenseCourtesyTypeModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=[];for(let t of this.typeOfCourtesyArray)e.push(t.value==this.expenseCourtesyType?{type:"radio",label:t.label,value:t.value,checked:!0}:{type:"radio",label:t.label,value:t.value,checked:!1});(yield this.alertCtrl.create({header:this.translate.instant("PAGES.NUEVOGASTO.TIPOGASTO"),inputs:e,buttons:[{text:this.translate.instant("PAGES.NUEVOGASTO.CANCELAR"),role:"cancel"},{text:"Ok",handler:e=>{this.expenseCourtesyType=e}}]})).present()})}showConfirm(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({header:this.translate.instant("PAGES.GASTO.CANCELAR"),message:this.translate.instant("PAGES.GASTO.CANCELARDESC"),buttons:[{text:this.translate.instant("PAGES.GASTO.NO"),handler:()=>{}},{text:this.translate.instant("PAGES.GASTO.SI"),handler:()=>{this.cancelarGastoUsuario(this.expenseID)}}]});yield e.present()})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(i.uU),c.Y36(p.r),c.Y36(s.X1),c.Y36(u.y),c.Y36(h.k),c.Y36(s.Br),c.Y36(s.HT),c.Y36(g.sK),c.Y36(d.M),c.Y36(m.i),c.Y36(r.F0),c.Y36(s.t4))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-expense"]],features:[c._Bn([s.X1])],decls:179,vars:100,consts:[["color","primary","mode","ios"],["icon","arrow-back","text","","defaultHref","../gastos",3,"click"],["padding",""],[3,"ngSubmit"],["forma","ngForm"],[1,"display-none"],["floating",""],["type","text","name","expenseID","readonly","true","required","",3,"ngModel","ngModelChange"],["color","light"],["slot","end","name","person-circle","color","primary","size","large"],[1,"p-title"],["size","12"],["type","text","name","expenseAdminCommentsPublics","rows","3","disabled","",3,"ngModel","ngModelChange"],["color","light",1,"report-divider"],["name","trash","slot","end","color","danger","size","large",3,"click"],["name","newspaper","slot","end","color","primary","size","large"],["position","stacked"],["type","text","name","companyName","readonly","true","required","",3,"ngModel","click","ngModelChange"],[2,"display","none"],["type","text","name","companyID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["size","6"],["type","text","name","zoneName","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","zoneID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","regionName","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","regionID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","categoryName","required","",3,"ngModel","click","ngModelChange"],["type","text","name","categoryID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["displayFormat","DD/MM/YYYY","name","expenseDate","required","",3,"ngModel","ngModelChange"],[4,"ngIf"],["type","text","name","expenseSupplier","required","","autocomplete","on",3,"ngModel","ngModelChange"],["type","text","name","expenseInvoiceNumber","required","",3,"ngModel","ngModelChange"],["type","text","name","expenseSupplierRFC","required","","autocomplete","on",3,"ngModel"],["type","text","name","paymentTypeName","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","paymentTypeID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["size","6","g",""],["type","text","name","currencyName","readonly","true","required","",3,"ngModel","click","ngModelChange"],["type","text","name","currencyID","readonly","true","required","",3,"ngModel","click","ngModelChange"],["size","4"],["type","number","name","expenseSubTotal",3,"ngModel","ngModelChange","change"],["type","number","name","expenseTax",3,"ngModel","ngModelChange","change"],["type","number","name","expenseTip",3,"ngModel","readonly","ngModelChange","change","click","blur"],["type","number","name","expenseTotal","readonly","true","text-center","",3,"ngModel","ngModelChange"],["rows","3","maxLength","100","name","expenseDescription","required","",3,"ngModel","ngModelChange"],[1,"no-bb"],["type","text","name","expenseFile","text-center","",3,"ngModel","ngModelChange"],[1,"file-list",3,"click"],["name","attach","color","primary","item-start",""],["type","text","name","fileSource","readonly","true","text-center","",3,"ngModel","ngModelChange"],[3,"src",4,"ngIf"],["type","file","name","file-2[]","id","file-2",3,"change"],["type","submit","expand","block","color","primary",3,"disabled"],["vertical","bottom","horizontal","end","no-padding","","slot","fixed"],["color","primary","size","small","color","primary"],["name","folder","size","small"],["side","top"],["color","primary","size","small",3,"click"],["name","newspaper"],["color","primary",3,"click",4,"ngIf"],["type","text","name","expenseCourtesyType","readonly","true",3,"ngModel","click","ngModelChange"],["type","number","name","expenseNumberPerson","onkeydown","javascript: return event.keyCode == 69 ? false : true",3,"ngModel","ngModelChange"],["position","stacked","text-wrap",""],["rows","3","maxLength","100","name","expenseCourtesyRazons",3,"ngModel","ngModelChange"],["type","number","name","nochesHospedaje","value","0","onkeydown","javascript: return event.keyCode == 69 ? false : true",3,"ngModel","ngModelChange"],[3,"src"],["color","primary",3,"click"],["name","camera"]],template:function(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons"),c.TgZ(3,"ion-back-button",1),c.NdJ("click",function(){return t.backButton()}),c.qZA(),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.ALo(6,"translate"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content",2),c.TgZ(8,"form",3,4),c.NdJ("ngSubmit",function(){c.CHM(e);const n=c.MAs(9);return t.sendForm(n)}),c.TgZ(10,"ion-row"),c.TgZ(11,"ion-item",5),c.TgZ(12,"ion-label",6),c._uU(13,"ID*"),c.qZA(),c.TgZ(14,"ion-input",7),c.NdJ("ngModelChange",function(e){return t.expenseID=e}),c.qZA(),c.qZA(),c.TgZ(15,"ion-item-divider",8),c._uU(16),c.ALo(17,"translate"),c._UZ(18,"ion-icon",9),c.qZA(),c.TgZ(19,"p",10),c._uU(20),c.ALo(21,"translate"),c.qZA(),c.TgZ(22,"ion-col",11),c.TgZ(23,"ion-item"),c.TgZ(24,"ion-textarea",12),c.NdJ("ngModelChange",function(e){return t.expenseAdminCommentsPublics=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"ion-item-divider",13),c._uU(26),c.ALo(27,"translate"),c.TgZ(28,"ion-icon",14),c.NdJ("click",function(){return t.showConfirm()}),c.qZA(),c._UZ(29,"ion-icon",15),c.qZA(),c.TgZ(30,"ion-col",11),c.TgZ(31,"ion-item"),c.TgZ(32,"ion-label",16),c._uU(33),c.ALo(34,"translate"),c.qZA(),c.TgZ(35,"ion-input",17),c.NdJ("click",function(){return t.userCompaniesModal()})("ngModelChange",function(e){return t.companyName=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(36,"ion-item",18),c.TgZ(37,"ion-label"),c._uU(38),c.ALo(39,"translate"),c.qZA(),c.TgZ(40,"ion-input",19),c.NdJ("click",function(){return t.userCompaniesModal()})("ngModelChange",function(e){return t.companyID=e}),c.qZA(),c.qZA(),c.TgZ(41,"ion-col",20),c.TgZ(42,"ion-item"),c.TgZ(43,"ion-label",16),c._uU(44),c.ALo(45,"translate"),c.qZA(),c.TgZ(46,"ion-input",21),c.NdJ("click",function(){return t.userZonesModal()})("ngModelChange",function(e){return t.zoneName=e}),c.qZA(),c.qZA(),c.TgZ(47,"ion-item",18),c.TgZ(48,"ion-label",6),c._uU(49,"ID"),c.qZA(),c.TgZ(50,"ion-input",22),c.NdJ("click",function(){return t.userZonesModal()})("ngModelChange",function(e){return t.zoneID=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(51,"ion-col",20),c.TgZ(52,"ion-item"),c.TgZ(53,"ion-label",16),c._uU(54),c.ALo(55,"translate"),c.qZA(),c.TgZ(56,"ion-input",23),c.NdJ("click",function(){return t.userRegionsModal()})("ngModelChange",function(e){return t.regionName=e}),c.qZA(),c.qZA(),c.TgZ(57,"ion-item",18),c.TgZ(58,"ion-label",6),c._uU(59,"ID"),c.qZA(),c.TgZ(60,"ion-input",24),c.NdJ("click",function(){return t.userRegionsModal()})("ngModelChange",function(e){return t.regionID=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(61,"ion-col",20),c.TgZ(62,"ion-item"),c.TgZ(63,"ion-label",16),c._uU(64),c.ALo(65,"translate"),c.qZA(),c.TgZ(66,"ion-input",25),c.NdJ("click",function(){return t.userCategoriesModal()})("ngModelChange",function(e){return t.categoryName=e}),c.qZA(),c.qZA(),c.TgZ(67,"ion-item",18),c.TgZ(68,"ion-label",6),c._uU(69,"ID"),c.qZA(),c.TgZ(70,"ion-input",26),c.NdJ("click",function(){return t.userCategoriesModal()})("ngModelChange",function(e){return t.categoryID=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(71,"ion-col",20),c.TgZ(72,"ion-item"),c.TgZ(73,"ion-label",16),c._uU(74),c.ALo(75,"translate"),c.qZA(),c.TgZ(76,"ion-datetime",27),c.NdJ("ngModelChange",function(e){return t.expenseDate=e}),c.qZA(),c.qZA(),c.qZA(),c.YNc(77,A,16,13,"ion-row",28),c.YNc(78,y,7,4,"ion-row",28),c.TgZ(79,"ion-col",11),c.TgZ(80,"ion-item"),c.TgZ(81,"ion-label",16),c._uU(82),c.ALo(83,"translate"),c.qZA(),c.TgZ(84,"ion-input",29),c.NdJ("ngModelChange",function(e){return t.expenseSupplier=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(85,"ion-col",20),c.TgZ(86,"ion-item"),c.TgZ(87,"ion-label",16),c._uU(88),c.ALo(89,"translate"),c.qZA(),c.TgZ(90,"ion-input",30),c.NdJ("ngModelChange",function(e){return t.expenseInvoiceNumber=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(91,"ion-col",20),c.TgZ(92,"ion-item"),c.TgZ(93,"ion-label",16),c._uU(94),c.ALo(95,"translate"),c.qZA(),c._UZ(96,"ion-input",31),c.qZA(),c.qZA(),c.TgZ(97,"ion-col",20),c.TgZ(98,"ion-item"),c.TgZ(99,"ion-label",16),c._uU(100),c.ALo(101,"translate"),c.qZA(),c.TgZ(102,"ion-input",32),c.NdJ("click",function(){return t.userPaymentTypes()})("ngModelChange",function(e){return t.paymentTypeName=e}),c.qZA(),c.qZA(),c.TgZ(103,"ion-item",18),c.TgZ(104,"ion-label",6),c._uU(105,"ID"),c.qZA(),c.TgZ(106,"ion-input",33),c.NdJ("click",function(){return t.userPaymentTypes()})("ngModelChange",function(e){return t.paymentTypeID=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(107,"ion-col",34),c.TgZ(108,"ion-item"),c.TgZ(109,"ion-label",16),c._uU(110),c.ALo(111,"translate"),c.qZA(),c.TgZ(112,"ion-input",35),c.NdJ("click",function(){return t.userCurrencies()})("ngModelChange",function(e){return t.currencyName=e}),c.qZA(),c.qZA(),c.TgZ(113,"ion-item",18),c.TgZ(114,"ion-label",6),c._uU(115,"ID"),c.qZA(),c.TgZ(116,"ion-input",36),c.NdJ("click",function(){return t.userCurrencies()})("ngModelChange",function(e){return t.currencyID=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(117,"ion-col",37),c.TgZ(118,"ion-item"),c.TgZ(119,"ion-label",16),c._uU(120),c.ALo(121,"translate"),c.qZA(),c.TgZ(122,"ion-input",38),c.NdJ("ngModelChange",function(e){return t.expenseSubTotal=e})("change",function(){return t.sumTotal()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(123,"ion-col",37),c.TgZ(124,"ion-item"),c.TgZ(125,"ion-label",16),c._uU(126),c.ALo(127,"translate"),c.qZA(),c.TgZ(128,"ion-input",39),c.NdJ("ngModelChange",function(e){return t.expenseTax=e})("change",function(){return t.sumTotal()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(129,"ion-col",37),c.TgZ(130,"ion-item"),c.TgZ(131,"ion-label",16),c._uU(132),c.ALo(133,"translate"),c.qZA(),c.TgZ(134,"ion-input",40),c.NdJ("ngModelChange",function(e){return t.expenseTip=e})("change",function(){return t.sumTotal()})("click",function(e){return t.vaciarPropina(e)})("blur",function(){return t.compruebaPropina()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(135,"ion-row"),c.TgZ(136,"ion-col",11),c.TgZ(137,"ion-item"),c.TgZ(138,"ion-label",16),c._uU(139),c.ALo(140,"translate"),c.qZA(),c.TgZ(141,"ion-input",41),c.NdJ("ngModelChange",function(e){return t.expenseTotal=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(142,"ion-col",11),c.TgZ(143,"ion-item"),c.TgZ(144,"ion-label",16),c._uU(145),c.ALo(146,"translate"),c.qZA(),c.TgZ(147,"ion-textarea",42),c.NdJ("ngModelChange",function(e){return t.expenseDescription=e}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(148,"ion-row"),c.TgZ(149,"ion-item",43),c.TgZ(150,"p",10),c._uU(151),c.ALo(152,"translate"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(153,"ion-item",5),c.TgZ(154,"ion-label",6),c._uU(155,"expenseFile"),c.qZA(),c.TgZ(156,"ion-input",44),c.NdJ("ngModelChange",function(e){return t.expenseFile=e}),c.qZA(),c.qZA(),c.TgZ(157,"ion-item",45),c.NdJ("click",function(){return t.openFile(t.expenseFile)}),c._UZ(158,"ion-icon",46),c._uU(159),c.qZA(),c.YNc(160,T,6,1,"ion-row",28),c.TgZ(161,"ion-item",5),c.TgZ(162,"ion-label",6),c._uU(163,"fileSource"),c.qZA(),c.TgZ(164,"ion-input",47),c.NdJ("ngModelChange",function(e){return t.fileSource=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(165,"ion-item"),c.YNc(166,Z,1,1,"img",48),c.qZA(),c.TgZ(167,"ion-item",5),c.TgZ(168,"input",49),c.NdJ("change",function(){return t.getFileName()}),c.qZA(),c.qZA(),c.TgZ(169,"ion-button",50),c._uU(170),c.ALo(171,"translate"),c.qZA(),c.qZA(),c.TgZ(172,"ion-fab",51),c.TgZ(173,"ion-fab-button",52),c._UZ(174,"ion-icon",53),c.qZA(),c.TgZ(175,"ion-fab-list",54),c.TgZ(176,"ion-fab-button",55),c.NdJ("click",function(){return t.pickFileFromDevice()}),c._UZ(177,"ion-icon",56),c.qZA(),c.YNc(178,x,2,0,"ion-fab-button",57),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.MAs(9);c.xp6(5),c.AsE("",c.lcZ(6,56,"PAGES.GASTO.GASTO")," #",t.expenseID,""),c.xp6(9),c.Q6J("ngModel",t.expenseID),c.xp6(2),c.hij(" ",c.lcZ(17,58,"PAGES.GASTO.ADMIN")," "),c.xp6(4),c.hij("",c.lcZ(21,60,"PAGES.GASTO.COMENTARIOS"),":"),c.xp6(4),c.Q6J("ngModel",t.expenseAdminCommentsPublics),c.xp6(2),c.hij(" ",c.lcZ(27,62,"PAGES.GASTO.GASTO")," "),c.xp6(7),c.hij("",c.lcZ(34,64,"PAGES.NUEVOGASTO.COMPANIA"),"*"),c.xp6(2),c.Q6J("ngModel",t.companyName),c.xp6(3),c.hij("",c.lcZ(39,66,"PAGES.NUEVOGASTO.COMPANIA"),"*"),c.xp6(2),c.Q6J("ngModel",t.companyID),c.xp6(4),c.hij("",c.lcZ(45,68,"PAGES.NUEVOGASTO.ZONA"),"*"),c.xp6(2),c.Q6J("ngModel",t.zoneName),c.xp6(4),c.Q6J("ngModel",t.zoneID),c.xp6(4),c.hij("",c.lcZ(55,70,"PAGES.NUEVOGASTO.REGION"),"*"),c.xp6(2),c.Q6J("ngModel",t.regionName),c.xp6(4),c.Q6J("ngModel",t.regionID),c.xp6(4),c.hij("",c.lcZ(65,72,"PAGES.NUEVOGASTO.TIPOGASTO"),"*"),c.xp6(2),c.Q6J("ngModel",t.categoryName),c.xp6(4),c.Q6J("ngModel",t.categoryID),c.xp6(4),c.hij("",c.lcZ(75,74,"PAGES.NUEVOGASTO.FECHAGASTO"),"*"),c.xp6(2),c.Q6J("ngModel",t.expenseDate),c.xp6(1),c.Q6J("ngIf","0028"==t.categoryEpicorID),c.xp6(1),c.Q6J("ngIf",10==t.categoryID||33==t.categoryID||51==t.categoryID||68==t.categoryID),c.xp6(4),c.hij("",c.lcZ(83,76,"PAGES.NUEVOGASTO.PROVEEDOR"),"*"),c.xp6(2),c.Q6J("ngModel",t.expenseSupplier),c.xp6(4),c.hij("",c.lcZ(89,78,"PAGES.NUEVOGASTO.NUMFACTURA"),"*"),c.xp6(2),c.Q6J("ngModel",t.expenseInvoiceNumber),c.xp6(4),c.hij("",c.lcZ(95,80,"PAGES.NUEVOGASTO.RFC"),"*"),c.xp6(2),c.Q6J("ngModel",t.expenseSupplierRFC),c.xp6(4),c.hij("",c.lcZ(101,82,"PAGES.NUEVOGASTO.METODOGASTO"),"*"),c.xp6(2),c.Q6J("ngModel",t.paymentTypeName),c.xp6(4),c.Q6J("ngModel",t.paymentTypeID),c.xp6(4),c.hij("",c.lcZ(111,84,"PAGES.NUEVOGASTO.MONEDAGASTO"),"*"),c.xp6(2),c.Q6J("ngModel",t.currencyName),c.xp6(4),c.Q6J("ngModel",t.currencyID),c.xp6(4),c.Oqu(c.lcZ(121,86,"PAGES.NUEVOGASTO.SUBTOTAL")),c.xp6(2),c.Q6J("ngModel",t.expenseSubTotal),c.xp6(4),c.Oqu(c.lcZ(127,88,"PAGES.NUEVOGASTO.IVA")),c.xp6(2),c.Q6J("ngModel",t.expenseTax),c.xp6(4),c.Oqu(c.lcZ(133,90,"PAGES.NUEVOGASTO.PROPINA")),c.xp6(2),c.Q6J("ngModel",t.expenseTip)("readonly","0028"!=t.categoryEpicorID&&27!=t.categoryEpicorID),c.xp6(5),c.Oqu(c.lcZ(140,92,"PAGES.NUEVOGASTO.TOTAL")),c.xp6(2),c.Q6J("ngModel",t.expenseTotal),c.xp6(4),c.hij("",c.lcZ(146,94,"PAGES.NUEVOGASTO.INFOAD"),"*"),c.xp6(2),c.Q6J("ngModel",t.expenseDescription),c.xp6(4),c.hij("",c.lcZ(152,96,"PAGES.GASTO.COMPROBANTE"),":"),c.xp6(5),c.Q6J("ngModel",t.expenseFile),c.xp6(3),c.hij(" ",t.expenseFile," "),c.xp6(1),c.Q6J("ngIf",t.newFileName.length>4),c.xp6(4),c.Q6J("ngModel",t.fileSource),c.xp6(2),c.Q6J("ngIf",t.photo64PreviewData.length>115),c.xp6(3),c.Q6J("disabled",!e.valid),c.xp6(1),c.hij("",c.lcZ(171,98,"PAGES.NUEVOGASTO.ENVIAR")," "),c.xp6(8),c.Q6J("ngIf","android"===t.sistemaOperativo)}},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,o._Y,o.JL,o.F,s.Nd,s.Ie,s.Q$,s.pK,s.j9,o.Q7,o.JJ,o.On,s.rH,s.gu,s.wI,s.g2,s.x4,s.QI,i.O5,s.as,s.YG,s.IJ,s.W4,s.zq],pipes:[g.X$],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:10px;--padding-end:10px;--padding-top:10px}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(D)],r.Bz]}),e})();var f=n(9037),S=n(2693);function I(e){return new f.w(e,"assets/i18n/",".json")}let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,o.u5,s.Pc,N,g.aw.forRoot({loader:{provide:g.Zw,useFactory:I,deps:[S.eN]}})]]}),e})()}}]);