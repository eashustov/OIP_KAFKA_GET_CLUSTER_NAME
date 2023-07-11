import{t as templatize,m as modelForElement,u as useShadow,d as dom,P as Polymer,h as html,O as OptionalMutableDataBehavior,a as animationFrame,b as microTask,i as idlePeriod,f as flush,D as Debouncer,e as enqueueDebouncer,c as matches,g as translate,r as registerStyles,j as DelegateFocusMixin,K as KeyboardMixin,E as ElementMixin,T as ThemableMixin,k as PolymerElement,F as FlattenedNodesObserver,l as isIOS,C as ControllerMixin,n as FocusTrapController,o as beforeNextRender,p as afterNextRender,q as button,B as Button,s as FocusMixin,v as overlay,w as menuOverlayCore,L as ListBox,x as OverlayElement,y as Debouncer$1,z as animationFrame$1,R as ResizeMixin,A as calculateSplices,G as requiredField,H as helper,I as FieldMixin,J as DisabledMixin,M as Checkbox,N as item,Q as inputFieldShared,S as DirMixin,U as PositionMixin,V as Virtualizer,W as InputMixin,X as processTemplates,Y as VirtualKeyboardController,Z as isTouch,_ as PatternMixin,$ as InputControlMixin,a0 as InputController,a1 as LabelledInputController,a2 as inputFieldShared$1,a3 as isChrome,a4 as DatePicker,a5 as dedupingMixin,a6 as dateEquals,a7 as ThemePropertyMixin,a8 as TextField,a9 as timeOut,aa as addValueToAttribute,ab as removeValueFromAttribute,ac as isFocusable,ad as fieldButton,ae as InputFieldMixin,af as SlotController,ag as color,ah as typography,ai as DomModule,aj as microTask$1,ak as n$1,al as LabelMixin,am as CheckedMixin,an as ActiveMixin,ao as SlotTargetController,ap as menuOverlay,aq as Item,ar as MediaQueryController,as as fieldShared,at as inputFieldContainer,au as addListener,av as ItemMixin,aw as ListMixin}from"./generated-flow-imports.b9c90b87.js";import{i as i$1,B as B$1,r as r$1}from"./vendor.6c6a6dd3.js";import"./indexhtml.6f1228e2.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Templatizer={templatize(de,ee){this._templatizerTemplate=de,this.ctor=templatize(de,this,{mutableData:Boolean(ee),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(de){return new this.ctor(de)},modelForElement(de){return modelForElement(this._templatizerTemplate,de)}};var $cssFromFile_0=`:host {\r
    --apex-charts-primary-color: var(--lumo-primary-color, var(--material-primary-color));\r
    --apex-charts-background-color: var(--lumo-base-color, var(--material-background-color));\r
}`;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ORPHANS.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(de){this.resizerShouldNotify(de)&&this._notifyDescendant(de)},this),this._fireResize())},assignParentResizable:function(de){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=de,de&&de._interestedResizables.indexOf(this)===-1&&(de._interestedResizables.push(this),de._subscribeIronResize(this))},stopResizeNotificationsFor:function(de){var ee=this._interestedResizables.indexOf(de);ee>-1&&(this._interestedResizables.splice(ee,1),this._unsubscribeIronResize(de))},_subscribeIronResize:function(de){de.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(de){de.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(de){return!0},_onDescendantIronResize:function(de){if(this._notifyingDescendant){de.stopPropagation();return}useShadow||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(de){var ee=dom(de).rootTarget;ee!==this&&(ee.assignParentResizable(this),this._notifyDescendant(ee),de.stopPropagation())},_parentResizableChanged:function(de){de&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(de){!this.isAttached||(this._notifyingDescendant=!0,de.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var de=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function ee(){document.removeEventListener("readystatechange",ee),de()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(ee){ee!==this&&ee._findParent()},this):(ORPHANS.forEach(function(ee){ee!==this&&ee._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ORPHANS.delete(this):ORPHANS.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(de,ee){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!ee)if(de==="document")this.scrollTarget=this._doc;else if(typeof de=="string"){var te=this.domHost;this.scrollTarget=te&&te.$?te.$[de]:dom(this.ownerDocument).querySelector("#"+de)}else this._isValidScrollTarget()&&(this._oldScrollTarget=de,this._toggleScrollListener(this._shouldHaveListener,de))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(de){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,de):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=de)},set _scrollLeft(de){this.scrollTarget===this._doc?window.scrollTo(de,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=de)},scroll:function(de,ee){var te;typeof de=="object"?(te=de.left,ee=de.top):te=de,te=te||0,ee=ee||0,this.scrollTarget===this._doc?window.scrollTo(te,ee):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=te,this.scrollTarget.scrollTop=ee)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(de,ee){var te=ee===this._doc?window:ee;de?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),te.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(te.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(de){this._shouldHaveListener=de,this._toggleScrollListener(de,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8,DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100;Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var de=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return de-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var de=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,de-this._physicalCount)},set _virtualStart(de){de=this._clamp(de,0,this._maxVirtualStart),this.grid&&(de=de-de%this._itemsPerRow),this._virtualStartVal=de},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(de){de=de%this._physicalCount,de<0&&(de=this._physicalCount+de),this.grid&&(de=de-de%this._itemsPerRow),this._physicalStartVal=de},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(de){this._physicalCountVal=de},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var de=this._firstVisibleIndexVal;if(de==null){var ee=this._physicalTop+this._scrollOffset;de=this._iterateItems(function(te,ie){if(ee+=this._getPhysicalSizeIncrement(te),ee>this._scrollPosition)return this.grid?ie-ie%this._itemsPerRow:ie;if(this.grid&&this._virtualCount-1===ie)return ie-ie%this._itemsPerRow})||0,this._firstVisibleIndexVal=de}return de},get lastVisibleIndex(){var de=this._lastVisibleIndexVal;if(de==null){if(this.grid)de=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var ee=this._physicalTop+this._scrollOffset;this._iterateItems(function(te,ie){ee<this._scrollBottom&&(de=ie),ee+=this._getPhysicalSizeIncrement(te)})}this._lastVisibleIndexVal=de}return de},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,animationFrame),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(de){this.style.webkitOverflowScrolling=de===this?"touch":"",this.style.overflowY=de===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var de=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(de["padding-top"],10),this._isRTL=Boolean(de.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var de=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),ee=de-this._scrollPosition,te=ee>=0;if(this._scrollPosition=de,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(ee)>this._physicalSize&&this._physicalSize>0){ee=ee-this._scrollOffset;var ie=Math.round(ee/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+ie,this._physicalStart=this._physicalStart+ie,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var ae=this._getReusables(te);te?(this._physicalTop=ae.physicalTop,this._virtualStart=this._virtualStart+ae.indexes.length,this._physicalStart=this._physicalStart+ae.indexes.length):(this._virtualStart=this._virtualStart-ae.indexes.length,this._physicalStart=this._physicalStart-ae.indexes.length),this._update(ae.indexes,te?null:ae.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(de){var ee,te,ie,ae=[],se=this._hiddenContentSize*this._ratio,oe=this._virtualStart,re=this._virtualEnd,ne=this._physicalCount,le=this._physicalTop+this._scrollOffset,ce=this._physicalBottom+this._scrollOffset,ue=this._scrollPosition,pe=this._scrollBottom;for(de?(ee=this._physicalStart,this._physicalEnd,te=ue-le):(ee=this._physicalEnd,this._physicalStart,te=ce-pe);ie=this._getPhysicalSizeIncrement(ee),te=te-ie,!(ae.length>=ne||te<=se);)if(de){if(re+ae.length+1>=this._virtualCount||le+ie>=ue-this._scrollOffset)break;ae.push(ee),le=le+ie,ee=(ee+1)%ne}else{if(oe-ae.length<=0||le+this._physicalSize-ie<=pe)break;ae.push(ee),le=le-ie,ee=ee===0?ne-1:ee-1}return{indexes:ae,physicalTop:le-this._scrollOffset}},_update:function(de,ee){if(!(de&&de.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(de),this._updateMetrics(de),ee)for(;ee.length;){var te=ee.pop();this._physicalTop-=this._getPhysicalSizeIncrement(te)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(de){this._ensureTemplatized();var ee,te,ie=new Array(de);for(ee=0;ee<de;ee++)te=this.stamp(null),ie[ee]=te.root.querySelector("*"),this._itemsParent.appendChild(te.root);return ie},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(de){var ee=this._clamp(this._physicalCount+de,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);if(ee=this._convertIndexToCompleteRow(ee),this.grid){var te=ee%this._itemsPerRow;te&&ee-te<=this._physicalCount&&(ee+=this._itemsPerRow),ee-=te}var ie=ee-this._physicalCount,ae=Math.round(this._physicalCount*.5);if(!(ie<0)){if(ie>0){var se=window.performance.now();[].push.apply(this._physicalItems,this._createPool(ie));for(var oe=0;oe<ie;oe++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+ie,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+ie),this._update(),this._templateCost=(window.performance.now()-se)/ie,ae=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||ae===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,ae)),idlePeriod):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,ae),microTask))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var de=this._getReusables(!0);this._physicalTop=de.physicalTop,this._virtualStart=this._virtualStart+de.indexes.length,this._physicalStart=this._physicalStart+de.indexes.length,this._update(de.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var de={};de.__key__=!0,de[this.as]=!0,de[this.indexAs]=!0,de[this.selectedAs]=!0,de.tabIndex=!0,this._instanceProps=de,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(de,ee){typeof ee!="undefined"&&(this.notifyResize(),flush(),de&&this._updateGridMetrics())},_itemsChanged:function(de){if(de.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,animationFrame);else if(de.path==="items.splices"){this._adjustVirtualIndex(de.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var ee=de.value.indexSplices.some(function(ae){return ae.addedCount>0||ae.removed.length>0});if(ee){var te=this._getActiveElement();this.contains(te)&&te.blur()}var ie=de.value.indexSplices.some(function(ae){return ae.index+ae.addedCount>=this._virtualStart&&ae.index<=this._virtualEnd},this);(!this._isClientFull()||ie)&&this._debounce("_render",this._render,animationFrame)}else de.path!=="items.length"&&this._forwardItemPath(de.path,de.value)},_forwardItemPath:function(de,ee){de=de.slice(6);var te=de.indexOf(".");te===-1&&(te=de.length);var ie,ae,se,oe=this.modelForElement(this._offscreenFocusedItem),re=parseInt(de.substring(0,te),10);ie=this._isIndexRendered(re),ie?(ae=this._getPhysicalIndex(re),se=this.modelForElement(this._physicalItems[ae])):oe&&(se=oe),!(!se||se[this.indexAs]!==re)&&(de=de.substring(te+1),de=this.as+(de?"."+de:""),se._setPendingPropertyOrPath(de,ee,!1,!0),se._flushProperties&&se._flushProperties(),ie&&(this._updateMetrics([ae]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(de){de.forEach(function(ee){if(ee.removed.forEach(this._removeItem,this),ee.index<this._virtualStart){var te=Math.max(ee.addedCount-ee.removed.length,ee.index-this._virtualStart);this._virtualStart=this._virtualStart+te,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+te)}},this)},_removeItem:function(de){this.$.selector.deselect(de),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===de&&this._removeFocusedItem()},_iterateItems:function(de,ee){var te,ie,ae,se;if(arguments.length===2&&ee){for(se=0;se<ee.length;se++)if(te=ee[se],ie=this._computeVidx(te),(ae=de.call(this,te,ie))!=null)return ae}else{for(te=this._physicalStart,ie=this._virtualStart;te<this._physicalCount;te++,ie++)if((ae=de.call(this,te,ie))!=null)return ae;for(te=0;te<this._physicalStart;te++,ie++)if((ae=de.call(this,te,ie))!=null)return ae}},_computeVidx:function(de){return de>=this._physicalStart?this._virtualStart+(de-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+de},_assignModels:function(de){this._iterateItems(function(ee,te){var ie=this._physicalItems[ee],ae=this.items&&this.items[te];if(ae!=null){var se=this.modelForElement(ie);se.__key__=null,this._forwardProperty(se,this.as,ae),this._forwardProperty(se,this.selectedAs,this.$.selector.isSelected(ae)),this._forwardProperty(se,this.indexAs,te),this._forwardProperty(se,"tabIndex",this._focusedVirtualIndex===te?0:-1),this._physicalIndexForKey[se.__key__]=ee,se._flushProperties&&se._flushProperties(!0),ie.removeAttribute("hidden")}else ie.setAttribute("hidden","")},de)},_updateMetrics:function(de){flush();var ee=0,te=0,ie=this._physicalAverageCount,ae=this._physicalAverage;this._iterateItems(function(se,oe){te+=this._physicalSizes[se],this._physicalSizes[se]=this._physicalItems[se].offsetHeight,ee+=this._physicalSizes[se],this._physicalAverageCount+=this._physicalSizes[se]?1:0},de),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(te=this._itemsPerRow===1?te:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+ee-te,this._itemsPerRow=1),this._physicalAverageCount!==ie&&(this._physicalAverage=Math.round((ae*ie+ee)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var de=this._physicalTop;if(this.grid){var ee=this._itemsPerRow*this._itemWidth,te=(this._viewportWidth-ee)/2;this._iterateItems(function(ie,ae){var se=ae%this._itemsPerRow,oe=Math.floor(se*this._itemWidth+te);this._isRTL&&(oe=oe*-1),this.translate3d(oe+"px",de+"px",0,this._physicalItems[ie]),this._shouldRenderNextRow(ae)&&(de+=this._rowHeight)})}else{const ie=[];this._iterateItems(function(ae,se){const oe=this._physicalItems[ae];this.translate3d(0,de+"px",0,oe),de+=this._physicalSizes[ae];const re=oe.id;re&&ie.push(re)}),ie.length&&this.setAttribute("aria-owns",ie.join(" "))}},_getPhysicalSizeIncrement:function(de){return this.grid?this._computeVidx(de)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[de]},_shouldRenderNextRow:function(de){return de%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var de=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(de!==0){this._physicalTop=this._physicalTop-de;var ee=this._scrollPosition;!IOS_TOUCH_SCROLLING&&ee>0&&this._resetScrollPosition(ee-de)}},_resetScrollPosition:function(de){this.scrollTarget&&de>=0&&(this._scrollTop=de,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(de){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,de=de||this._scrollHeight===0,de=de||this._scrollPosition>=this._estScrollHeight-this._physicalSize,de=de||this.grid&&this.$.items.style.height<this._estScrollHeight,(de||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(de){return this.scrollToIndex(this.items.indexOf(de))},scrollToIndex:function(de){if(!(typeof de!="number"||de<0||de>this.items.length-1)&&(flush(),this._physicalCount!==0)){de=this._clamp(de,0,this._virtualCount-1),(!this._isIndexRendered(de)||de>=this._maxVirtualStart)&&(this._virtualStart=this.grid?de-this._itemsPerRow*2:de-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var ee=this._physicalStart,te=this._virtualStart,ie=0,ae=this._hiddenContentSize;te<de&&ie<=ae;)ie=ie+this._getPhysicalSizeIncrement(ee),ee=(ee+1)%this._physicalCount,te++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+ie),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},animationFrame)},selectItem:function(de){return this.selectIndex(this.items.indexOf(de))},selectIndex:function(de){if(!(de<0||de>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(de)){var ee=this.modelForElement(this._physicalItems[this._getPhysicalIndex(de)]);ee&&(ee[this.selectedAs]=!0),this.updateSizeForIndex(de)}this.$.selector.selectIndex(de)}},deselectItem:function(de){return this.deselectIndex(this.items.indexOf(de))},deselectIndex:function(de){if(!(de<0||de>=this._virtualCount)){if(this._isIndexRendered(de)){var ee=this.modelForElement(this._physicalItems[this._getPhysicalIndex(de)]);ee[this.selectedAs]=!1,this.updateSizeForIndex(de)}this.$.selector.deselectIndex(de)}},toggleSelectionForItem:function(de){return this.toggleSelectionForIndex(this.items.indexOf(de))},toggleSelectionForIndex:function(de){var ee=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(de):this.$.selector.isSelected(this.items[de]);ee?this.deselectIndex(de):this.selectIndex(de)},clearSelection:function(){this._iterateItems(function(de,ee){this.modelForElement(this._physicalItems[de])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(de){var ee=de?this.listen:this.unlisten;ee.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(de){var ee=this.modelForElement(de.target);if(!!ee){var te,ie,ae=dom(de).path[0],se=this._getActiveElement(),oe=this._physicalItems[this._getPhysicalIndex(ee[this.indexAs])];ae.localName==="input"||ae.localName==="button"||ae.localName==="select"||(te=ee.tabIndex,ee.tabIndex=SECRET_TABINDEX,ie=se?se.tabIndex:-1,ee.tabIndex=te,!(se&&oe!==se&&oe.contains(se)&&ie!==SECRET_TABINDEX)&&this.toggleSelectionForItem(ee[this.as]))}},_multiSelectionChanged:function(de){this.clearSelection(),this.$.selector.multi=de},updateSizeForItem:function(de){return this.updateSizeForIndex(this.items.indexOf(de))},updateSizeForIndex:function(de){return this._isIndexRendered(de)&&(this._updateMetrics([this._getPhysicalIndex(de)]),this._positionItems()),null},_manageFocus:function(){var de=this._focusedVirtualIndex;de>=0&&de<this._virtualCount?this._isIndexRendered(de)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(de){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(de/this._itemsPerRow)*this._itemsPerRow:de},_isIndexRendered:function(de){return de>=this._virtualStart&&de<=this._virtualEnd},_isIndexVisible:function(de){return de>=this.firstVisibleIndex&&de<=this.lastVisibleIndex},_getPhysicalIndex:function(de){return(this._physicalStart+(de-this._virtualStart))%this._physicalCount},focusItem:function(de){this._focusPhysicalItem(de)},_focusPhysicalItem:function(de){if(!(de<0||de>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(de)||this.scrollToIndex(de);var ee=this._physicalItems[this._getPhysicalIndex(de)],te=this.modelForElement(ee),ie;te.tabIndex=SECRET_TABINDEX,ee.tabIndex===SECRET_TABINDEX&&(ie=ee),ie||(ie=dom(ee).querySelector('[tabindex="'+SECRET_TABINDEX+'"]')),te.tabIndex=0,this._focusedVirtualIndex=de,ie&&ie.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var de=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var ee=this.stamp(null);this._focusBackfillItem=ee.root.querySelector("*"),this._itemsParent.appendChild(ee.root)}this._offscreenFocusedItem=this._physicalItems[de],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[de]=this._focusBackfillItem,this._focusedPhysicalIndex=de,this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var de=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),ee=this._physicalItems[de];if(!!ee){var te=this.modelForElement(ee),ie=this.modelForElement(this._offscreenFocusedItem);te[this.as]===ie[this.as]?(this._focusBackfillItem=ee,te.tabIndex=-1,this._physicalItems[de]=this._offscreenFocusedItem,this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(de){var ee=this.modelForElement(de.target),te=this.modelForElement(this._focusedItem),ie=this._offscreenFocusedItem!==null,ae=this._focusedVirtualIndex;!ee||(te===ee?this._isIndexVisible(ae)||this.scrollToIndex(ae):(this._restoreFocusedItem(),te&&(te.tabIndex=-1),ee.tabIndex=0,ae=ee[this.indexAs],this._focusedVirtualIndex=ae,this._focusedPhysicalIndex=this._getPhysicalIndex(ae),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],ie&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(de){switch(de.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&de.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&de.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(de);break}},_clamp:function(de,ee,te){return Math.min(te,Math.max(ee,de))},_debounce:function(de,ee,te){this._debouncers=this._debouncers||{},this._debouncers[de]=Debouncer.debounce(this._debouncers[de],te,ee.bind(this)),enqueueDebouncer(this._debouncers[de])},_forwardProperty:function(de,ee,te){de._setPendingProperty(ee,te)},_forwardHostPropV2:function(de,ee){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(te){te&&this.modelForElement(te).forwardHostProp(de,ee)},this)},_notifyInstancePropV2:function(de,ee,te){if(matches(this.as,ee)){var ie=de[this.indexAs];ee==this.as&&(this.items[ie]=te),this.notifyPath(translate(this.as,"items."+ie,ee),te)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(de,ee,te){ee.indexOf(this.as+".")===0&&this.notifyPath("items."+de.__key__+"."+ee.slice(this.as.length+1),te)},_forwardParentPath:function(de,ee){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(te){te&&this.modelForElement(te).notifyPath(de,ee)},this)},_forwardParentProp:function(de,ee){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(te){te&&(this.modelForElement(te)[de]=ee)},this)},_getActiveElement:function(){var de=this._itemsParent.node.domHost;return dom(de?de.root:document).activeElement}});const details=i$1`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;registerStyles("vaadin-details",details,{moduleId:"lumo-details"});const accordionPanel=i$1`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;registerStyles("vaadin-accordion-panel",[details,accordionPanel],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ShadowFocusMixin=de=>class extends DelegateFocusMixin(KeyboardMixin(de)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(te){super._onKeyDown(te),!te.defaultPrevented&&te.keyCode===9&&te.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(te){if(!this.disabled&&this.focusElement){const ie=te.composedPath();if(ie[0]===this&&this._keyboardActive&&this.focusElement.focus(),ie[0]===this||ie.includes(this.focusElement))return!0}return!1}_tabindexChanged(te){te!==void 0&&(this.focusElement.tabIndex=te),this.disabled&&te&&(te!==-1&&(this.__lastTabIndex=te),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Details extends ShadowFocusMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready();const ee=Details._uniqueId=1+Details._uniqueId||0;this._contentId=`${this.constructor.is}-content-${ee}`,this._collapsible.addEventListener("keydown",te=>{te.shiftKey&&te.keyCode===9&&te.stopPropagation()})}_getAriaExpanded(ee){return ee?"true":"false"}_getAriaHidden(ee){return ee?"false":"true"}_openedChanged(ee){this._collapsible.style.maxHeight=ee?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(ee){[13,32].indexOf(ee.keyCode)>-1&&(ee.preventDefault(),this.opened=!this.opened)}}customElements.define(Details.is,Details);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class AccordionPanel extends Details{static get is(){return"vaadin-accordion-panel"}}customElements.define(AccordionPanel.is,AccordionPanel);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Accordion extends ThemableMixin(ElementMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){if(this._observer&&this._observer.flush(),Array.isArray(this.items)){const ee=this._getAvailableIndex(0);ee>=0&&this.items[ee].focus()}}ready(){super.ready(),this.addEventListener("keydown",ee=>this._onKeydown(ee)),this._observer=new FlattenedNodesObserver(this,ee=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(ee.addedNodes).forEach(te=>{te.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(ee){return ee.filter(te=>te instanceof AccordionPanel)}_updateItems(ee,te){if(ee){const ie=ee[te];ee.forEach(ae=>{ae.opened=ae===ie})}}_onKeydown(ee){const te=ee.composedPath()[0];if(!this.items.some(oe=>oe.focusElement===te))return;const ie=this.items.indexOf(this.focused);let ae,se;switch(ee.key){case"ArrowUp":se=-1,ae=ie-1;break;case"ArrowDown":se=1,ae=ie+1;break;case"Home":se=1,ae=0;break;case"End":se=-1,ae=this.items.length-1;break}ae=this._getAvailableIndex(ae,se),ae>=0&&(this.items[ae].focus(),this.items[ae].setAttribute("focus-ring",""),ee.preventDefault())}_getAvailableIndex(ee,te){const ie=this.items.length;let ae=ee;for(let se=0;typeof ae=="number"&&se<ie;se++,ae+=te||1)if(ae<0?ae=ie-1:ae>=ie&&(ae=0),!this.items[ae].disabled)return ae;return-1}_updateOpened(ee){const te=this._filterItems(ee.composedPath())[0],ie=this.items.indexOf(te);if(ee.detail.value){if(te.disabled||ie===-1)return;this.opened=ie}else this.items.some(ae=>ae.opened)||(this.opened=null)}}customElements.define(Accordion.is,Accordion);registerStyles("vaadin-app-layout",i$1`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const $_documentContainer$6=document.createElement("template");$_documentContainer$6.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild($_documentContainer$6.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _detectIosNavbar(){if(isIOS){const de=window.innerHeight,te=window.innerWidth>de,ie=document.documentElement.clientHeight;te&&ie>de?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",ie-de+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}_detectIosNavbar();window.addEventListener("resize",_detectIosNavbar);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class AppLayout extends ElementMixin(ThemableMixin(ControllerMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new FocusTrapController(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),beforeNextRender(this,this._afterFirstRender),this._updateTouchOptimizedMode();const ee=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new FlattenedNodesObserver(ee,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new FlattenedNodesObserver(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new FlattenedNodesObserver(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}__primarySectionChanged(ee){["navbar","drawer"].includes(ee)||this.set("primarySection","navbar")}__drawerOpenedChanged(ee,te){this.overlay&&(ee?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):te&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(ee){ee.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const ee=this.querySelector("vaadin-drawer-toggle");ee&&ee.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const ee=this.querySelectorAll("[slot=drawer]").length,te=this.$.drawer;ee===0?te.setAttribute("hidden",""):te.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const te=this.$.navbarTop.getBoundingClientRect(),ae=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",te.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",ae.height+"px");const oe=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",oe.width+"px")}_updateDrawerHeight(){const{scrollHeight:ee,offsetHeight:te}=this.$.drawer,ie=ee>te?`${ee}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",ie)}_updateOverlayMode(){const ee=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&ee&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(ee),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const ee=this.$.drawer;this.overlay?(ee.setAttribute("role","dialog"),ee.setAttribute("aria-modal","true"),ee.setAttribute("aria-label",this.i18n.drawer)):(ee.removeAttribute("role"),ee.removeAttribute("aria-modal"),ee.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(ee=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){ee();return}this.$.drawer.addEventListener("transitionend",ee,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const ee=this.querySelector("vaadin-drawer-toggle");ee&&(ee.focus(),ee.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(ee){ee.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(ee,te){te&&window.removeEventListener(te,this.__closeOverlayDrawerListener),ee&&window.addEventListener(ee,this.__closeOverlayDrawerListener)}_close(){this.drawerOpened=!1}_getCustomPropertyValue(ee){return(getComputedStyle(this).getPropertyValue(ee)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const ee=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")=="true",te=this.querySelectorAll('[slot*="navbar"]');te.length>0&&Array.from(te).forEach(ie=>{ie.getAttribute("slot").indexOf("touch-optimized")>-1&&(ie.__touchOptimized=!0),ee&&ie.__touchOptimized?ie.setAttribute("slot","navbar-bottom"):ie.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),ee?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),afterNextRender(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(AppLayout.is,AppLayout);const drawerToggle=i$1`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;registerStyles("vaadin-drawer-toggle",[button,drawerToggle],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DrawerToggle extends Button{static get template(){return html`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot>
        <div part="icon"></div>
      </slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(DrawerToggle.is,DrawerToggle);registerStyles("vaadin-avatar",i$1`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_documentContainer$5=document.createElement("template");$_documentContainer$5.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild($_documentContainer$5.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Avatar extends FocusMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size);
          width: var(--vaadin-avatar-size);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
          --vaadin-avatar-size: 64px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),!this.name&&!this.abbr&&this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}__colorIndexChanged(ee){if(ee!=null){const te=`--vaadin-user-color-${ee}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(te))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${te})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${ee} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(ee,te,ie){if(this.__updateVisibility(),te&&te!==this.__generatedAbbr){this.__setTitle(ie?`${ie} (${te})`:te);return}ie?this.abbr=this.__generatedAbbr=ie.split(" ").map(ae=>ae.charAt(0)).join(""):this.abbr=void 0,this.__setTitle(ie)}__i18nChanged(ee){ee.base&&ee.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=ee.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTitle(ee){ee?this.setAttribute("title",ee):this.setAttribute("title",this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(Avatar.is,Avatar);registerStyles("vaadin-avatar-group",i$1`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const avatarGroupOverlay=i$1`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;registerStyles("vaadin-avatar-group-overlay",[overlay,menuOverlayCore,avatarGroupOverlay],{moduleId:"lumo-avatar-group-overlay"});registerStyles("vaadin-avatar-group-list-box",i$1`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});registerStyles("vaadin-item",i$1`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class AvatarGroupListBox extends ListBox{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(AvatarGroupListBox.is,AvatarGroupListBox);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-avatar-group-overlay",i$1`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }
  `,{moduleId:"vaadin-avatar-group-overlay-styles"});class AvatarGroupOverlay extends OverlayElement{static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(AvatarGroupOverlay.is,AvatarGroupOverlay);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const region=document.createElement("div");region.style.position="fixed";region.style.clip="rect(0px, 0px, 0px, 0px)";region.setAttribute("aria-live","polite");document.body.appendChild(region);let alertDebouncer;function announce(de,ee={}){const te=ee.mode||"polite",ie=ee.timeout===void 0?150:ee.timeout;te==="alert"?(region.removeAttribute("aria-live"),region.removeAttribute("role"),alertDebouncer=Debouncer$1.debounce(alertDebouncer,animationFrame$1,()=>{region.setAttribute("role","alert")})):(alertDebouncer&&alertDebouncer.cancel(),region.removeAttribute("role"),region.setAttribute("aria-live",te)),region.textContent="",setTimeout(()=>{region.textContent=de},ie)}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const MINIMUM_DISPLAYED_AVATARS=2;class AvatarGroup extends ResizeMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
          --vaadin-avatar-size: 64px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        ></vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay id="overlay" opened="{{_opened}}" on-vaadin-overlay-close="_onVaadinOverlayClose">
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this.__boundSetPosition=this.__setPosition.bind(this),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),afterNextRender(this,()=>{this.__setItemsInView()})}attributeChangedCallback(ee,te,ie){super.attributeChangedCallback(ee,te,ie),ee==="dir"&&this.__setPosition()}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(ee,te){return te.replace("{user}",ee.name||ee.abbr||this.i18n.anonymous)}_onOverflowClick(ee){ee.stopPropagation(),this._opened?this.$.overlay.close():ee.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(ee){this._opened||/^(Enter|SpaceBar|\s)$/.test(ee.key)&&(ee.preventDefault(),this._opened=!0)}_onListKeyDown(ee){(ee.key==="Escape"||ee.key==="Esc"||/^(Tab)$/.test(ee.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView(),this.__setPosition()}_onVaadinOverlayClose(ee){ee.detail.sourceEvent&&ee.detail.sourceEvent.composedPath().indexOf(this)!==-1&&ee.preventDefault()}__computeItems(ee,te,ie){const ae=ee.base||[],se=this.__getLimit(ae.length,te,ie);return se?ae.slice(0,se):ae}__computeExtraItems(ee,te,ie){const ae=ee.base||[],se=this.__getLimit(ae.length,te,ie);return se?ae.slice(se):ae}__computeMaxReached(ee,te){return te!=null&&ee>this.__getMax(te)}__computeMore(ee,te,ie){return`+${ee-this.__getLimit(ee,te,ie)}`}__computeMoreHidden(ee,te,ie){return!ie&&!(te&&te<ee)}__computeMoreTitle(ee,te,ie){const ae=this.__getLimit(ee,te,ie);if(ae==null)return;const se=[];for(let oe=ae;oe<ee;oe++){const re=this.items[oe];re&&se.push(re.name||re.abbr||"anonymous")}this.$.overflow.setAttribute("title",se.join(`
`))}__getLimit(ee,te,ie){let ae=null;const se=this.__getMax(ie);return ie!=null&&se<ee?ae=se-1:te&&te<ee&&(ae=te),Math.min(ae,this.__calculateAvatarsFitWidth())}__getMax(ee){return Math.max(ee,MINIMUM_DISPLAYED_AVATARS)}__itemsChanged(ee,te){const ie=te.base;this.$.items.render(),this.__setItemsInView(),ee&&Array.isArray(ee.indexSplices)?ee.indexSplices.forEach(ae=>{this.__announceItemsChange(ie,ae)}):Array.isArray(ie)&&Array.isArray(this.__oldItems)&&calculateSplices(ie,this.__oldItems).forEach(se=>{this.__announceItemsChange(ie,se)}),this.__oldItems=ie}__announceItemsChange(ee,te){const{addedCount:ie,index:ae,removed:se}=te;let oe=[],re=[];ie&&(oe=ee.slice(ae,ae+ie).map(le=>this.__getMessage(le,this.i18n.joined||"{user} joined"))),se&&(re=se.map(le=>this.__getMessage(le,this.i18n.left||"{user} left")));const ne=re.concat(oe);ne.length>0&&announce(ne.join(", "))}__i18nItemsChanged(ee,te){const{base:ie}=ee;if(ie&&ie.activeUsers){const ae=te===1?"one":"many";ie.activeUsers[ae]&&this.setAttribute("aria-label",ie.activeUsers[ae].replace("{count}",te||0))}}__openedChanged(ee,te){ee?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.querySelectorAll("vaadin-avatar").forEach(ae=>ae.removeAttribute("title")),this._menuElement.focus(),this.__setPosition(),window.addEventListener("scroll",this.__boundSetPosition,!0)):te&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring",""),window.removeEventListener("scroll",this.__boundSetPosition,!0)),this.$.overflow.setAttribute("aria-expanded",ee===!0)}__setItemsInView(){const ee=this._avatars,te=this.items;if(!te||!ee||ee.length<3)return;let ie=this.__calculateAvatarsFitWidth();ie===te.length-1&&(ie=te.length),ie>=te.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=ie}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<MINIMUM_DISPLAYED_AVATARS)return MINIMUM_DISPLAYED_AVATARS;const ee=this._avatars,te=ee[0].clientWidth,{marginLeft:ie,marginRight:ae}=getComputedStyle(ee[1]),se=this.getAttribute("dir")=="rtl"?parseInt(ae,0)-parseInt(ie,0):parseInt(ie,0)-parseInt(ae,0);return Math.floor((this.$.container.offsetWidth-te)/(te+se))}__setPosition(){if(!this._opened)return;const ee=this.$.overflow.getBoundingClientRect(),te=Math.min(window.innerHeight,document.documentElement.clientHeight),ie=ee.top>(te-ee.height)/2;this.getAttribute("dir")==="rtl"?this._overlayElement.style.right=document.documentElement.clientWidth-ee.right+"px":this._overlayElement.style.left=ee.left+"px",ie?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=te-ee.top+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=ee.bottom+"px")}}customElements.define(AvatarGroup.is,AvatarGroup);const checkboxGroup=i$1`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;registerStyles("vaadin-checkbox-group",[requiredField,helper,checkboxGroup],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class CheckboxGroup extends FieldMixin(FocusMixin(DisabledMixin(ElementMixin(ThemableMixin(PolymerElement))))){static get is(){return"vaadin-checkbox-group"}static get template(){return html`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0}}}static get observers(){return["__valueChanged(value, value.splices)"]}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new FlattenedNodesObserver(this,({addedNodes:ee,removedNodes:te})=>{const ie=this.__filterCheckboxes(ee),ae=this.__filterCheckboxes(te);ie.forEach(this.__registerCheckbox),ae.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(ie)})}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(ee){return ee.filter(te=>te instanceof Checkbox)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(ee){ee.some(ie=>{const{value:ae}=ie;return!ie.hasAttribute("value")&&(!ae||ae==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(ee){ee.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(ee.disabled=!0),ee.checked?this.__addCheckboxToValue(ee.value):this.value.includes(ee.value)&&(ee.checked=!0)}__unregisterCheckbox(ee){ee.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),ee.checked&&this.__removeCheckboxFromValue(ee.value)}_disabledChanged(ee,te){super._disabledChanged(ee,te),!(!ee&&te===void 0)&&te!==ee&&this.__checkboxes.forEach(ie=>{ie.disabled=ee})}__addCheckboxToValue(ee){this.value.includes(ee)||(this.value=[...this.value,ee])}__removeCheckboxFromValue(ee){this.value.includes(ee)&&(this.value=this.value.filter(te=>te!==ee))}__onCheckboxCheckedChanged(ee){const te=ee.target;te.checked?this.__addCheckboxToValue(te.value):this.__removeCheckboxFromValue(te.value)}__valueChanged(ee){ee.length===0&&this.__oldValue===void 0||(this.__oldValue=ee,this.toggleAttribute("has-value",ee.length>0),this.__checkboxes.forEach(te=>{te.checked=ee.includes(te.value)}),this.validate())}_shouldRemoveFocus(ee){return!this.contains(ee.relatedTarget)}_setFocused(ee){super._setFocused(ee),ee||this.validate()}}customElements.define(CheckboxGroup.is,CheckboxGroup);registerStyles("vaadin-overlay",overlay,{moduleId:"lumo-vaadin-overlay"});const comboBoxOverlay=i$1`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  :host([loading]) [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-50pct) var(--lumo-primary-color-50pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    animation: 1s linear infinite lumo-combo-box-loader-rotate, 0.3s 0.1s lumo-combo-box-loader-fade-in both;
    pointer-events: none;
  }

  @keyframes lumo-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-combo-box-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* RTL specific styles */

  :host([loading][dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;registerStyles("vaadin-combo-box-overlay",[overlay,menuOverlayCore,comboBoxOverlay],{moduleId:"lumo-combo-box-overlay"});const comboBoxItem=i$1`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;registerStyles("vaadin-combo-box-item",[item,comboBoxItem],{moduleId:"lumo-combo-box-item"});const comboBox=i$1`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;registerStyles("vaadin-combo-box",[inputFieldShared,comboBox],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ComboBoxItem extends ThemableMixin(DirMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const ee=this._comboBox.getAttribute("dir");ee&&this.setAttribute("dir",ee)}requestContentUpdate(){if(!this.renderer)return;const ee={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,ee)}__rendererOrItemChanged(ee,te,ie){ie===void 0||te===void 0||(this._oldRenderer!==ee&&(this.innerHTML="",delete this._$litPart$),ee&&(this._oldRenderer=ee,this.requestContentUpdate()))}__updateLabel(ee,te){te||(this.textContent=ee)}}customElements.define(ComboBoxItem.is,ComboBoxItem);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-combo-box-overlay",i$1`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let memoizedTemplate$3;class ComboBoxOverlay extends PositionMixin(OverlayElement){static get is(){return"vaadin-combo-box-overlay"}static get template(){return memoizedTemplate$3||(memoizedTemplate$3=super.template.cloneNode(!0),memoizedTemplate$3.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),memoizedTemplate$3}connectedCallback(){super.connectedCallback();const ee=this.__dataHost,te=ee&&ee.getRootNode().host,ie=te&&te.getAttribute("dir");ie&&this.setAttribute("dir",ie)}ready(){super.ready();const ee=document.createElement("div");ee.setAttribute("part","loader");const te=this.shadowRoot.querySelector('[part~="content"]');te.parentNode.insertBefore(ee,te)}_outsideClickListener(ee){const te=ee.composedPath();!te.includes(this.positionTarget)&&!te.includes(this)&&this.close()}}customElements.define(ComboBoxOverlay.is,ComboBoxOverlay);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ComboBoxPlaceholder=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ComboBoxScroller extends PolymerElement{static get is(){return"vaadin-combo-box-scroller"}static get template(){return html`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(ee){ee&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",ee=>ee.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Virtualizer({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(ee){if(!(this.opened&&ee>=0))return;const te=this._visibleItemsCount();let ie=ee;ee>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(ee),ie=ee-te+1):ee>this.__virtualizer.firstVisibleIndex&&(ie=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,ie));const ae=[...this.children].find(ne=>!ne.hidden&&ne.index===this.__virtualizer.lastVisibleIndex);if(!ae||ee!==ae.index)return;const se=ae.getBoundingClientRect(),oe=this.getBoundingClientRect(),re=se.bottom-oe.bottom+this._viewportTotalPaddingBottom;re>0&&(this.scrollTop+=re)}__getAriaRole(ee){return ee!==void 0?"option":!1}__getAriaSelected(ee,te){return this.__isItemFocused(ee,te).toString()}__isItemFocused(ee,te){return ee==te}__isItemSelected(ee,te,ie){return ee instanceof ComboBoxPlaceholder?!1:ie&&ee!==void 0&&te!==void 0?this.get(ie,ee)===this.get(ie,te):ee===te}__itemsChanged(ee){this.__virtualizer&&ee&&(this.__virtualizer.size=ee.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",ee.length),this.requestContentUpdate())}__loadingChanged(ee){this.__virtualizer&&!ee&&setTimeout(()=>this.requestContentUpdate())}__focusedIndexChanged(ee,te){!this.__virtualizer||(ee!==te&&this.requestContentUpdate(),ee>=0&&this.scrollIntoView(ee))}__rendererChanged(ee,te){(ee||te)&&this.requestContentUpdate()}__createElements(ee){return[...Array(ee)].map(()=>{const te=document.createElement(`${this.__hostTagName}-item`);return te.addEventListener("click",this.__boundOnItemClick),te.tabIndex="-1",te.style.width="100%",te})}__updateElement(ee,te){const ie=this.items[te],ae=this.focusedIndex;ee.setProperties({item:ie,index:this.__requestItemByIndex(ie,te),label:this.getItemLabel(ie),selected:this.__isItemSelected(ie,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(ae,te)}),ee.id=`${this.__hostTagName}-item-${te}`,ee.setAttribute("role",this.__getAriaRole(te)),ee.setAttribute("aria-selected",this.__getAriaSelected(ae,te)),ee.setAttribute("aria-posinset",te+1),this.theme?ee.setAttribute("theme",this.theme):ee.removeAttribute("theme")}__onItemClick(ee){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:ee.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",ee=>{const te=this.scrollTop===0,ie=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(te&&ee.deltaY<0||ie&&ee.deltaY>0)&&ee.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const ee=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[ee.paddingBottom,ee.borderBottomWidth].map(te=>parseInt(te,10)).reduce((te,ie)=>te+ie)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(ee,te){return ee instanceof ComboBoxPlaceholder&&te!==void 0&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:te,currentScrollerPos:this._oldScrollerPosition}})),te}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(ComboBoxScroller.is,ComboBoxScroller);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ComboBoxDropdown extends PolymerElement{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return html`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-on-close="[[restoreFocusOnClose]]"
        restore-focus-node="[[restoreFocusNode]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object,observer:"_positionTargetChanged"},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const ee=ComboBoxDropdown._uniqueId=1+ComboBoxDropdown._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${ee}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const ee=this.$.overlay,te=`${this.__hostTagName}-scroller`;ee.renderer=ie=>{if(!ie.firstChild){const ae=document.createElement(te);ie.appendChild(ae)}},ee.requestContentUpdate(),this._scroller=ee.content.querySelector(te),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",ie=>this._forwardScrollerEvent(ie)),this._scroller.addEventListener("index-requested",ie=>this._forwardScrollerEvent(ie)),ee.addEventListener("touchend",ie=>this._fireTouchAction(ie)),ee.addEventListener("touchmove",ie=>this._fireTouchAction(ie)),ee.addEventListener("mousedown",ie=>ie.preventDefault()),ee.addEventListener("vaadin-overlay-outside-click",ie=>{ie.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(ee){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:ee}}))}_forwardScrollerEvent(ee){this.dispatchEvent(new CustomEvent(ee.type,{detail:ee.detail}))}_openedChanged(ee,te){ee?(this._setOverlayWidth(),this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):te&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(ee,te,ie){const ae=te&&te.length;ae||(this.__emptyItems=!0),this._overlayOpened=!!(ee&&(ie||ae)),this.__emptyItems=!1}_getFocusedItem(ee){if(ee>=0)return this._items[ee]}indexOfLabel(ee){if(this._items&&ee){for(let te=0;te<this._items.length;te++)if(this.getItemLabel(this._items[te]).toString().toLowerCase()===ee.toString().toLowerCase())return te}return-1}getItemLabel(ee,te){te=te||this._itemLabelPath;let ie=ee&&te?this.get(te,ee):void 0;return ie==null&&(ie=ee?ee.toString():""),ie}_scrollIntoView(ee){!this._scroller||this._scroller.scrollIntoView(ee)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(ee,te,ie,ae,se,oe,re,ne,le){ee&&ee.setProperties({items:ie?te:[],opened:ie,loading:ae,selectedItem:se,itemIdPath:oe,focusedIndex:re,renderer:ne,theme:le})}_isOverlayHidden(){return!this.loading&&!(this._items&&this._items.length)}_positionTargetChanged(ee){ee&&this._setOverlayWidth()}_setOverlayWidth(){if(!this.positionTarget)return;const ee=this.positionTarget.clientWidth+"px",te=`${this.__hostTagName}-overlay`,ie=getComputedStyle(this).getPropertyValue(`--${te}-width`);this.$.overlay.style.setProperty(`--_${te}-default-width`,ee),ie===""?this.$.overlay.style.removeProperty(`--${te}-width`):this.$.overlay.style.setProperty(`--${te}-width`,ie),this.$.overlay._updatePosition()}}customElements.define(ComboBoxDropdown.is,ComboBoxDropdown);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ComboBoxDataProviderMixin=de=>class extends de{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new ComboBoxPlaceholder}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(te,ie,ae){te&&!this.loading&&this.filter&&!(ie&&this.autoOpenDisabled&&ae===this.filter)&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.dropdown.addEventListener("index-requested",te=>{const ie=te.detail.index,ae=te.detail.currentScrollerPos,se=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(ie,se,ae)&&ie!==void 0){const oe=this._getPageForIndex(ie);this._shouldLoadPage(oe)&&this._loadPage(oe)}})}_dataProviderFilterChanged(){!this._shouldFetchData()||(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(te){te&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(te,ie,ae){return ae!==0&&te>=ae-ie&&te<=ae+ie}_shouldLoadPage(te){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const ie=this.filteredItems[te*this.pageSize];return ie!==void 0?ie instanceof ComboBoxPlaceholder:this.size===void 0}_loadPage(te){if(!this._pendingRequests[te]&&this.dataProvider){this.loading=!0;const ie={page:te,pageSize:this.pageSize,filter:this.filter},ae=(se,oe)=>{if(this._pendingRequests[te]===ae){if(this.filteredItems)this.splice("filteredItems",ie.page*ie.pageSize,se.length,...se);else{const re=[];re.splice(ie.page*ie.pageSize,se.length,...se),this.filteredItems=re}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),!this.opened&&!this.hasAttribute("focused")&&this._commitValue(),this.size=oe,delete this._pendingRequests[te],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)}};this._pendingRequests[te]||(this._pendingRequests[te]=ae,this.dataProvider(ie,ae))}}_getPageForIndex(te){return Math.floor(te/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const te=[];for(let ie=0;ie<(this.size||0);ie++)te.push(this.__placeHolder);this.filteredItems=te,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(te=0){const ie=(this.filteredItems||[]).slice(0,te);for(let ae=0;ae<te;ae++)ie[ae]=ie[ae]!==void 0?ie[ae]:this.__placeHolder;this.filteredItems=ie,this._flushPendingRequests(te)}_pageSizeChanged(te,ie){if(Math.floor(te)!==te||te<1)throw this.pageSize=ie,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(te,ie){this._ensureItemsOrDataProvider(()=>{this.dataProvider=ie})}_ensureItemsOrDataProvider(te){if(this.items!==void 0&&this.dataProvider!==void 0)throw te(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(te,ie){if(te&&ie!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const ae=this._indexOfValue(ie,this.filteredItems);(ae<0||!this._getItemLabel(this.filteredItems[ae]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(te){if(this._pendingRequests){const ie=Math.ceil(te/this.pageSize),ae=Object.keys(this._pendingRequests);for(let se=0;se<ae.length;se++){const oe=parseInt(ae[se]);oe>=ie&&this._pendingRequests[oe]([],te)}}}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ComboBoxMixin=de=>class extends ControllerMixin(KeyboardMixin(InputMixin(DisabledMixin(de)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,__restoreFocusOnClose:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(te){this.inputElement&&(this.inputElement[this._propertyForValue]=te)}_inputElementChanged(te){super._inputElementChanged(te),te&&(te.autocomplete="off",te.autocapitalize="off",te.setAttribute("role","combobox"),te.setAttribute("aria-autocomplete","list"),te.setAttribute("aria-expanded",!!this.opened),te.setAttribute("spellcheck","false"),te.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const te=()=>{requestAnimationFrame(()=>{this.$.dropdown.$.overlay.bringToFront()})};this.addEventListener("mousedown",te),this.addEventListener("touchstart",te),processTemplates(this),this.addController(new VirtualKeyboardController(this))}requestContentUpdate(){!this.$.dropdown._scroller||(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach(te=>{te.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(te,ie){ie!==void 0&&this._updateActiveDescendant(te)}_updateActiveDescendant(te){const ie=this.inputElement;if(!ie)return;const ae=this._getItemElements().find(se=>se.index===te);ae?ie.setAttribute("aria-activedescendant",ae.id):ie.removeAttribute("aria-activedescendant")}_openedChanged(te,ie){if(ie===void 0)return;te?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this.hasAttribute("focused")&&!isTouch&&this.focus(),this.__restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const ae=this.inputElement;ae&&(ae.setAttribute("aria-expanded",!!te),te?ae.setAttribute("aria-controls",this.$.dropdown.scrollerId):ae.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(te){return te.composedPath()[0]===this.clearElement}_handleClearButtonClick(te){te.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onHostClick(te){this.autoOpenDisabled||this.open()}_onClick(te){this._closeOnBlurIsPrevented=!0;const ie=te.composedPath();this._isClearButton(te)?this._handleClearButtonClick(te):ie.indexOf(this._toggleElement)>-1?this.opened?this.close():this.open():this._onHostClick(te),this._closeOnBlurIsPrevented=!1}_onKeyDown(te){te.key==="Tab"?this.__restoreFocusOnClose=!1:te.key==="ArrowDown"?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,te.preventDefault()):te.key==="ArrowUp"?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,te.preventDefault()):te.key==="Enter"?this._onEnter(te):te.key==="Escape"&&this._onEscape(te)}_getItemLabel(te){return this.$.dropdown.getItemLabel(te)}_getItemValue(te){let ie=te&&this.itemValuePath?this.get(this.itemValuePath,te):void 0;return ie===void 0&&(ie=te?te.toString():""),ie}_onArrowDown(){if(this.opened){const te=this._getOverlayItems();te&&(this._focusedIndex=Math.min(te.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const te=this._getOverlayItems();te&&(this._focusedIndex=te.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(te,ie){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(te,ie)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const te=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(te,te)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(te){if(!this.allowCustomValue&&this._inputElementValue!==""&&this._focusedIndex<0){te.preventDefault(),te.stopPropagation();return}this.opened&&(te.preventDefault(),te.stopPropagation()),this._closeOrCommit()}_onEscape(te){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(te.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(te.stopPropagation(),this._clear()):this.opened?(te.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(te.stopPropagation(),this._clear())}_toggleElementChanged(te){te&&(te.addEventListener("mousedown",ie=>ie.preventDefault()),te.addEventListener("click",()=>{isTouch&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){const te=this._getOverlayItems();if(te&&this._focusedIndex>-1){const ie=te[this._focusedIndex];this.selectedItem!==ie&&(this.selectedItem=ie),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const ie=se=>se&&se.toLowerCase&&se.toLowerCase(),ae=[...this.filteredItems||[],this.selectedItem].find(se=>ie(this._getItemLabel(se))===ie(this._inputElementValue));if(this.allowCustomValue&&!ae){const se=this._inputElementValue;this._lastCustomValue=se;const oe=new CustomEvent("custom-value-set",{detail:se,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(oe),oe.defaultPrevented||(this._selectItemForValue(se),this.value=se)}else!this.allowCustomValue&&!this.opened&&ae?this.value=this._getItemValue(ae):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_onInput(te){!this.opened&&!this._isClearButton(te)&&!this.autoOpenDisabled&&this.open();const ie=this._inputElementValue;this.filter===ie?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=ie}_onChange(te){te.stopPropagation()}_itemLabelPathChanged(te){typeof te!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(te,ie,ae){te!==void 0&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,te):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},ie,ae))}_loadingChanged(te){te&&(this._focusedIndex=-1)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(te){if(te==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this.value!==""),this._inputElementValue=this.value);else{const ae=this._getItemValue(te);if(this.value!==ae&&(this.value=ae,this.value!==ae))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(te)}this.$.dropdown._selectedItem=te;const ie=this._getOverlayItems();this.filteredItems&&ie&&(this._focusedIndex=this.filteredItems.indexOf(te))}_valueChanged(te,ie){if(!(te===""&&ie===void 0)){if(this._isValidValue(te)){let ae;this._getItemValue(this.selectedItem)!==te?this._selectItemForValue(te):ae=this.selectedItem,!ae&&this.allowCustomValue&&(this._inputElementValue=te),this._toggleHasValue(this.value!=="")}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(te,ie){this._ensureItemsOrDataProvider(()=>{this.items=ie})}_itemsOrPathsChanged(te){if(te.path==="items"||te.path==="items.splices"){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);const ie=this._indexOfValue(this.value,this.items);this._focusedIndex=ie;const ae=ie>-1&&this.items[ie];ae&&(this.selectedItem=ae)}this.__previousItems=te.value}_filteredItemsChanged(te){if(te.path==="filteredItems"||te.path==="filteredItems.splices"){this._setOverlayItems(this.filteredItems);const ie=this._indexOfValue(this.value,this.filteredItems);this.selectedItem===null&&ie>=0&&this._selectItemForValue(this.value),this._inputElementValue===void 0||this._inputElementValue===this.value?this._focusedIndex=this._indexOfValue(this.value,this.filteredItems):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}}_filterItems(te,ie){return te&&te.filter(se=>(ie=ie?ie.toString().toLowerCase():"",this._getItemLabel(se).toString().toLowerCase().indexOf(ie)>-1))}_selectItemForValue(te){const ie=this._indexOfValue(te,this.filteredItems),ae=this.selectedItem;ie>=0?this.selectedItem=this.filteredItems[ie]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&ae===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(te){this.$.dropdown.set("_items",te)}_indexOfValue(te,ie){return!ie||!this._isValidValue(te)?-1:ie.findIndex(ae=>ae instanceof ComboBoxPlaceholder?!1:this._getItemValue(ae)===te)}_isValidValue(te){return te!=null}_overlaySelectedItemChanged(te){te.stopPropagation(),!(te.detail.item instanceof ComboBoxPlaceholder)&&(this.opened?(this._focusedIndex=this.filteredItems.indexOf(te.detail.item),this.close()):this.selectedItem!==te.detail.item&&(this.selectedItem=te.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(te){te.preventDefault(),this.inputElement.focus()}_onFocusout(te){if(te.relatedTarget===this.$.dropdown.$.overlay){te.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_onTouchend(te){!this.clearElement||te.composedPath()[0]!==this.clearElement||(te.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-combo-box",inputFieldShared$1,{moduleId:"vaadin-combo-box-styles"});class ComboBox extends ComboBoxDataProviderMixin(ComboBoxMixin(PatternMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))))){static get is(){return"vaadin-combo-box"}static get template(){return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        renderer="[[renderer]]"
        position-target="[[_positionTarget]]"
        restore-focus-on-close="[[__restoreFocusOnClose]]"
        restore-focus-node="[[inputElement]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,ee=>{this._setInputElement(ee),this._setFocusElement(ee),this.stateTarget=ee,this.ariaTarget=ee})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(ee){super._setFocused(ee),ee||this.validate()}_shouldRemoveFocus(ee){return ee.relatedTarget===this.$.dropdown.$.overlay?(ee.composedPath()[0].focus(),!1):!0}_onClearButtonClick(ee){ee.stopPropagation(),this._handleClearButtonClick(ee)}_onHostClick(ee){const te=ee.composedPath();(te.includes(this._labelNode)||te.includes(this._positionTarget))&&super._onHostClick(ee)}}customElements.define(ComboBox.is,ComboBox);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const customField=i$1`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;registerStyles("vaadin-custom-field",[requiredField,helper,customField],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class CustomField extends FieldMixin(FocusMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-custom-field"}static get template(){return html`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(ee){return ee.split("	")},formatValue:function(ee){return ee.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new FlattenedNodesObserver(this.$.slot,()=>{this.__setInputsFromSlot()}),this.__fixChromeFocus()}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(ee){super._setFocused(ee),ee||this.validate()}_shouldRemoveFocus(ee){const{relatedTarget:te}=ee;return!this.inputs.some(ie=>te===(ie.focusElement||ie))}checkValidity(){return!(this.inputs.filter(te=>!(te.validate||te.checkValidity).call(te)).length||this.required&&!this.value.trim())}__fixChromeFocus(){this.addEventListener("keydown",ee=>{if(ee.keyCode===9){if(ee.target.parentElement.localName==="slot"&&!ee.defaultPrevented&&isChrome){const te=ee.target.parentElement;te.setAttribute("tabindex",-1),setTimeout(()=>te.removeAttribute("tabindex"))}this.inputs.indexOf(ee.target)<this.inputs.length-1&&!ee.shiftKey||this.inputs.indexOf(ee.target)>0&&ee.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}})}__onInputChange(ee){ee.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(ee=>ee.value)]),this.__settingValue=!1}__queryAllAssignedElements(ee){const te=[];let ie;return ee.tagName==="SLOT"?ie=ee.assignedElements({flatten:!0}):(te.push(ee),ie=Array.from(ee.children)),ie.forEach(ae=>te.push(...this.__queryAllAssignedElements(ae))),te}__isInput(ee){return!(ee.getAttribute("slot")==="input"||ee.getAttribute("slot")==="textarea")&&(ee.validate||ee.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(ee=>this.__isInput(ee))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(ee){this.toggleAttribute("has-value",ee!==null&&ee.trim()!=="")}__valueChanged(ee,te){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(ee);const ie=this.i18n.parseValue(ee);if(!ie||ie.length==0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((ae,se)=>ae.value=ie[se]),te!==void 0&&this.validate()}}customElements.define(CustomField.is,CustomField);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const timePicker=i$1`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;registerStyles("vaadin-time-picker",[inputFieldShared,timePicker],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerItem extends ComboBoxItem{static get is(){return"vaadin-time-picker-item"}}customElements.define(TimePickerItem.is,TimePickerItem);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-time-picker-overlay",i$1`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class TimePickerOverlay extends ComboBoxOverlay{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(TimePickerOverlay.is,TimePickerOverlay);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerScroller extends ComboBoxScroller{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(TimePickerScroller.is,TimePickerScroller);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerDropdown extends ComboBoxDropdown{static get is(){return"vaadin-time-picker-dropdown"}static get template(){return html`
      <vaadin-time-picker-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-time-picker-overlay>
    `}}customElements.define(TimePickerDropdown.is,TimePickerDropdown);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerComboBox extends ComboBoxMixin(ThemableMixin(PolymerElement)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[positionTarget]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-time-picker-dropdown>
    `}static get properties(){return{positionTarget:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-time-picker-item"))}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}_isClearButton(ee){return super._isClearButton(ee)||ee.type==="input"&&!ee.isTrusted||ee.composedPath()[0].getAttribute("part")==="clear-button"}_onChange(ee){super._onChange(ee),this._isClearButton(ee)&&this._clear()}}customElements.define(TimePickerComboBox.is,TimePickerComboBox);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-time-picker",inputFieldShared$1,{moduleId:"vaadin-time-picker-styles"});class TimePicker extends PatternMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-time-picker"}static get template(){return html`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[theme]]"
          on-change="__onChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:ee=>{if(!ee)return;const te=(ae=0,se="00")=>(se+ae).substr((se+ae).length-se.length);let ie=`${te(ee.hours)}:${te(ee.minutes)}`;return ee.seconds!==void 0&&(ie+=`:${te(ee.seconds)}`),ee.milliseconds!==void 0&&(ie+=`.${te(ee.milliseconds,"000")}`),ie},parseTime:ee=>{const te="(\\d|[0-1]\\d|2[0-3])",ie="(\\d|[0-5]\\d)",ae=ie,se="(\\d{1,3})",re=new RegExp(`^${te}(?::${ie}(?::${ae}(?:\\.${se})?)?)?$`).exec(ee);if(re){if(re[4])for(;re[4].length<3;)re[4]+="0";return{hours:re[1],minutes:re[2],seconds:re[3],milliseconds:re[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,ee=>{this._setInputElement(ee),this._setFocusElement(ee),this.stateTarget=ee,this.ariaTarget=ee})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(ee){super._inputElementChanged(ee),ee&&this.$.comboBox._setInputElement(ee)}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(ee){super._setFocused(ee),ee||this.validate()}__validDayDivisor(ee){return!ee||24*3600%ee===0||ee<1&&ee%1*1e3%1===0}_onKeyDown(ee){if(this.readonly||this.disabled||this.__dropdownItems.length)return;const te=this.__validDayDivisor(this.step)&&this.step||60;ee.keyCode===40?this.__onArrowPressWithStep(-te):ee.keyCode===38&&this.__onArrowPressWithStep(te)}__onArrowPressWithStep(ee){const te=this.__addStep(this.__getMsec(this.__memoValue),ee,!0);this.__memoValue=te,this.inputElement.value=this.i18n.formatTime(this.__validateTime(te)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(ee){let te=(ee&&ee.hours||0)*60*60*1e3;return te+=(ee&&ee.minutes||0)*60*1e3,te+=(ee&&ee.seconds||0)*1e3,te+=ee&&parseInt(ee.milliseconds)||0,te}__getSec(ee){let te=(ee&&ee.hours||0)*60*60;return te+=(ee&&ee.minutes||0)*60,te+=ee&&ee.seconds||0,te+=ee&&ee.milliseconds/1e3||0,te}__addStep(ee,te,ie){ee===0&&te<0&&(ee=24*60*60*1e3);const ae=te*1e3,se=ee%ae;ae<0&&se&&ie?ee-=se:ae>0&&se&&ie?ee-=se-ae:ee+=ae;var oe=Math.floor(ee/1e3/60/60);ee-=oe*1e3*60*60;var re=Math.floor(ee/1e3/60);ee-=re*1e3*60;var ne=Math.floor(ee/1e3);return ee-=ne*1e3,{hours:oe<24?oe:0,minutes:re,seconds:ne,milliseconds:ee}}__updateDropdownItems(ee,te,ie,ae){const se=this.__validateTime(this.__parseISO(te)),oe=this.__getSec(se),re=this.__validateTime(this.__parseISO(ie)),ne=this.__getSec(re);if(this.__adjustValue(oe,ne,se,re),this.__dropdownItems=this.__generateDropdownList(oe,ne,ae),ae!==this.__oldStep){this.__oldStep=ae;const le=this.__validateTime(this.__parseISO(this.value));this.__updateValue(le)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(ee,te,ie){if(ie<15*60||!this.__validDayDivisor(ie))return[];const ae=[];ie=ie||3600;let se=-ie+ee;for(;se+ie>=ee&&se+ie<=te;){const oe=this.__validateTime(this.__addStep(se*1e3,ie));se+=ie;const re=this.i18n.formatTime(oe);ae.push({label:re,value:re})}return ae}__adjustValue(ee,te,ie,ae){if(!this.__memoValue)return;const se=this.__getSec(this.__memoValue);se<ee?this.__updateValue(ie):se>te&&this.__updateValue(ae)}_valueChanged(ee,te){const ie=this.__memoValue=this.__parseISO(ee),ae=this.__formatISO(ie)||"";this.value!==""&&this.value!==null&&!ie?this.value=te:this.value!==ae?this.value=ae:this.__updateInputValue(ie),this._toggleHasValue(!!this.value)}__comboBoxValueChanged(ee,te){if(ee===""&&te===void 0)return;const ie=this.i18n.parseTime(ee),ae=this.i18n.formatTime(ie)||"";ie?ee!==ae?this._comboBoxValue=ae:this.__updateValue(ie):this.value=""}__onChange(ee){ee.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(ee){const te=this.__formatISO(this.__validateTime(ee))||"";this.value=te}__updateInputValue(ee){const te=this.i18n.formatTime(this.__validateTime(ee))||"";this._comboBoxValue=te}__validateTime(ee){return ee&&(ee.hours=parseInt(ee.hours),ee.minutes=parseInt(ee.minutes||0),ee.seconds=this.__stepSegment<3?void 0:parseInt(ee.seconds||0),ee.milliseconds=this.__stepSegment<4?void 0:parseInt(ee.milliseconds||0)),ee}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(ee){return TimePicker.properties.i18n.value().formatTime(ee)}__parseISO(ee){return TimePicker.properties.i18n.value().parseTime(ee)}_timeAllowed(ee){const te=this.i18n.parseTime(this.min),ie=this.i18n.parseTime(this.max);return(!this.__getMsec(te)||this.__getMsec(ee)>=this.__getMsec(te))&&(!this.__getMsec(ie)||this.__getMsec(ee)<=this.__getMsec(ie))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(TimePicker.is,TimePicker);registerStyles("vaadin-date-time-picker",[requiredField,helper,customField],{moduleId:"lumo-date-time-picker"});registerStyles("vaadin-date-time-picker-date-picker",i$1`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});registerStyles("vaadin-date-time-picker-time-picker",i$1`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DateTimePickerDatePicker extends DatePicker{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(DateTimePickerDatePicker.is,DateTimePickerDatePicker);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DateTimePickerTimePicker extends TimePicker{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(DateTimePickerTimePicker.is,DateTimePickerTimePicker);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const SlotMixin=dedupingMixin(de=>class extends de{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(te=>{if(!(this._getDirectSlotChild(te)!==void 0)){const ae=this.slots[te],se=ae();se instanceof Element&&(te!==""&&se.setAttribute("slot",te),this.appendChild(se))}})}_getDirectSlotChild(te){return Array.from(this.childNodes).find(ie=>ie.nodeType===Node.ELEMENT_NODE&&ie.slot===te||ie.nodeType===Node.TEXT_NODE&&ie.textContent.trim()&&te==="")}});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-date-time-picker",inputFieldShared$1,{moduleId:"vaadin-date-time-picker"});function getPropertyFromPrototype(de,ee){for(;de;){if(de.properties&&de.properties[ee])return de.properties[ee];de=Object.getPrototypeOf(de)}}const datePickerClass=customElements.get("vaadin-date-time-picker-date-picker"),timePickerClass=customElements.get("vaadin-date-time-picker-time-picker"),datePickerI18nDefaults=getPropertyFromPrototype(datePickerClass,"i18n").value(),timePickerI18nDefaults=getPropertyFromPrototype(timePickerClass,"i18n").value(),datePickerI18nProps=Object.keys(datePickerI18nDefaults),timePickerI18nProps=Object.keys(timePickerI18nDefaults);class DateTimePicker extends FieldMixin(SlotMixin(DisabledMixin(FocusMixin(ThemableMixin(ElementMixin(PolymerElement)))))){static get template(){return html`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...datePickerI18nDefaults,...timePickerI18nDefaults})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const ee=document.createElement("vaadin-date-time-picker-date-picker");return ee.__defaultPicker=!0,ee},"time-picker":()=>{const ee=document.createElement("vaadin-date-time-picker-time-picker");return ee.__defaultPicker=!0,ee}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new FlattenedNodesObserver(this,ee=>{this.__onDomChange(ee.addedNodes)})}ready(){super.ready(),this.addEventListener("focusout",ee=>{ee.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this.ariaTarget=this}__filterElements(ee){return ee.nodeType===Node.ELEMENT_NODE}focus(){this.__datePicker.focus()}_shouldRemoveFocus(ee){const te=ee.relatedTarget;return!(this.__datePicker.contains(te)||this.__timePicker.contains(te)||te===this.__datePicker.$.overlay)}__syncI18n(ee,te,ie){ie=ie||Object.keys(te.i18n),ie.forEach(ae=>{te.i18n&&te.i18n.hasOwnProperty(ae)&&ee.set(`i18n.${ae}`,te.i18n[ae])})}__changeEventHandler(ee){ee.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(ee){ee.addEventListener("change",this.__changeEventHandler),ee.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(ee){ee.removeEventListener("change",this.__changeEventHandler),ee.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(ee){ee.filter(te=>te.nodeType===Node.ELEMENT_NODE).forEach(te=>{const ie=te.getAttribute("slot");ie==="date-picker"?this.__datePicker=te:ie==="time-picker"&&(this.__timePicker=te)})}__datePickerChanged(ee,te){!ee||(te&&(this.__removeInputListeners(te),te.remove()),this.__addInputListeners(ee),ee.__defaultPicker?(ee.placeholder=this.datePlaceholder,ee.invalid=this.invalid,ee.initialPosition=this.initialPosition,ee.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(ee,this,datePickerI18nProps)):(this.datePlaceholder=ee.placeholder,this.initialPosition=ee.initialPosition,this.showWeekNumbers=ee.showWeekNumbers,this.__syncI18n(this,ee,datePickerI18nProps)),ee.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),ee.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),ee.required=this.required,ee.disabled=this.disabled,ee.readonly=this.readonly,ee.autoOpenDisabled=this.autoOpenDisabled,ee.validate=()=>{},ee._validateInput=()=>{})}__timePickerChanged(ee,te){!ee||(te&&(this.__removeInputListeners(te),te.remove()),this.__addInputListeners(ee),ee.__defaultPicker?(ee.placeholder=this.timePlaceholder,ee.step=this.step,ee.invalid=this.invalid,this.__syncI18n(ee,this,timePickerI18nProps)):(this.timePlaceholder=ee.placeholder,this.step=ee.step,this.__syncI18n(this,ee,timePickerI18nProps)),this.__updateTimePickerMinMax(),ee.required=this.required,ee.disabled=this.disabled,ee.readonly=this.readonly,ee.autoOpenDisabled=this.autoOpenDisabled,ee.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const ee=this.__parseDate(this.__datePicker.value),te=dateEquals(this.__minDateTime,this.__maxDateTime),ie=this.__timePicker.value;this.__minDateTime&&dateEquals(ee,this.__minDateTime)||te?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&dateEquals(ee,this.__maxDateTime)||te?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==ie&&(this.__timePicker.value=ie)}}__i18nChanged(ee){this.__datePicker&&this.__datePicker.set(ee.path,ee.value),this.__timePicker&&this.__timePicker.set(ee.path,ee.value)}__datePlaceholderChanged(ee){this.__datePicker&&(this.__datePicker.placeholder=ee)}__timePlaceholderChanged(ee){this.__timePicker&&(this.__timePicker.placeholder=ee)}__stepChanged(ee){this.__timePicker&&this.__timePicker.step!==ee&&(this.__timePicker.step=ee)}__initialPositionChanged(ee){this.__datePicker&&(this.__datePicker.initialPosition=ee)}__showWeekNumbersChanged(ee){this.__datePicker&&(this.__datePicker.showWeekNumbers=ee)}__invalidChanged(ee){this.__datePicker&&(this.__datePicker.invalid=ee),this.__timePicker&&(this.__timePicker.invalid=ee)}__requiredChanged(ee){this.__datePicker&&(this.__datePicker.required=ee),this.__timePicker&&(this.__timePicker.required=ee)}__disabledChanged(ee){this.__datePicker&&(this.__datePicker.disabled=ee),this.__timePicker&&(this.__timePicker.disabled=ee)}__readonlyChanged(ee){this.__datePicker&&(this.__datePicker.readonly=ee),this.__timePicker&&(this.__timePicker.readonly=ee)}__parseDate(ee){return datePickerClass.prototype._parseDate(ee)}__formatDateISO(ee,te){return ee?datePickerClass.prototype._formatISO(ee):te}__formatTimeISO(ee){return timePickerI18nDefaults.formatTime(ee)}__parseTimeISO(ee){return timePickerI18nDefaults.parseTime(ee)}__parseDateTime(ee){const[te,ie]=ee.split("T");if(!(te&&ie))return;const ae=this.__parseDate(te);if(!ae)return;const se=this.__parseTimeISO(ie);if(!!se)return ae.setHours(parseInt(se.hours)),ae.setMinutes(parseInt(se.minutes||0)),ae.setSeconds(parseInt(se.seconds||0)),ae.setMilliseconds(parseInt(se.milliseconds||0)),ae}__formatDateTime(ee){if(!ee)return"";const te=this.__formatDateISO(ee,""),ie=this.__dateToIsoTimeString(ee);return`${te}T${ie}`}__dateToIsoTimeString(ee){return this.__formatTimeISO(this.__validateTime({hours:ee.getHours(),minutes:ee.getMinutes(),seconds:ee.getSeconds(),milliseconds:ee.getMilliseconds()}))}__validateTime(ee){return ee&&(ee.seconds=this.__stepSegment<3?void 0:ee.seconds,ee.milliseconds=this.__stepSegment<4?void 0:ee.milliseconds),ee}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const ee=this.__inputs.some(ie=>!ie.checkValidity()),te=this.required&&this.__inputs.some(ie=>!ie.value);return!(ee||te)}get __stepSegment(){const ee=this.step==null?60:parseFloat(this.step);if(ee%3600===0)return 1;if(ee%60===0||!ee)return 2;if(ee%1===0)return 3;if(ee<1)return 4}__dateTimeEquals(ee,te){return dateEquals(ee,te)?ee.getHours()===te.getHours()&&ee.getMinutes()===te.getMinutes()&&ee.getSeconds()===te.getSeconds()&&ee.getMilliseconds()===te.getMilliseconds():!1}__handleDateTimeChange(ee,te,ie,ae){if(!ie){this[ee]="",this[te]="";return}const se=this.__parseDateTime(ie);if(!se){this[ee]=ae;return}this.__dateTimeEquals(this[te],se)||(this[te]=se)}__valueChanged(ee,te){this.__handleDateTimeChange("value","__selectedDateTime",ee,te),te!==void 0&&(this.__dispatchChangeForValue=ee),this.toggleAttribute("has-value",!!ee),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(ee,te){this.__handleDateTimeChange("min","__minDateTime",ee,te),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(ee,te){this.__handleDateTimeChange("max","__maxDateTime",ee,te),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(ee){const te=this.__formatDateTime(ee);if(this.value!==te&&(this.value=te),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[ae,se]=this.value.split("T");this.__datePicker.value=ae||"",this.__timePicker.value=se||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const ee=this.__datePicker.value,te=this.__timePicker.value;return ee&&te?[ee,te].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const ee=this.__formattedValue,[te,ie]=ee.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),te&&ie?ee!==this.value&&(this.value=ee):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(ee){this.__datePicker&&(this.__datePicker.autoOpenDisabled=ee),this.__timePicker&&(this.__timePicker.autoOpenDisabled=ee)}__themeChanged(ee,te,ie){!te||!ie||[te,ie].forEach(ae=>{ee?ae.setAttribute("theme",ee):ae.removeAttribute("theme")})}__pickersChanged(ee,te){!ee||!te||ee.__defaultPicker===te.__defaultPicker&&(ee.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(DateTimePicker.is,DateTimePicker);const dialogOverlay=i$1`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;registerStyles("vaadin-dialog-overlay",[overlay,dialogOverlay],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function getMouseOrFirstTouchEvent(de){return de.touches?de.touches[0]:de}function eventInWindow(de){return de.clientX>=0&&de.clientX<=window.innerWidth&&de.clientY>=0&&de.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DialogDraggableMixin=de=>class extends de{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:isTouch},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(te){if(!(te.type==="touchstart"&&te.touches.length>1)&&this.draggable&&(te.button===0||te.touches)){const ie=this.$.overlay.$.resizerContainer,ae=te.target===ie,se=te.offsetX>ie.clientWidth||te.offsetY>ie.clientHeight,oe=te.target===this.$.overlay.$.content,re=te.composedPath().some((ne,le)=>{if(!ne.classList)return!1;const ce=ne.classList.contains(this.__dragHandleClassName||"draggable"),ue=ne.classList.contains("draggable-leaf-only"),pe=le===0;return ue&&pe||ce&&(!ue||pe)});if(ae&&!se||oe||re){!re&&te.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const ne=getMouseOrFirstTouchEvent(te);this._originalMouseCoords={top:ne.pageY,left:ne.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(te){const ie=getMouseOrFirstTouchEvent(te);if(eventInWindow(ie)){const ae=this._originalBounds.top+(ie.pageY-this._originalMouseCoords.top),se=this._originalBounds.left+(ie.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:ae,left:se})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-dialog-overlay",i$1`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const DialogResizableMixin=de=>class extends de{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(te=>{const ie=document.createElement("div");this._resizeListeners.start[te]=ae=>this._startResize(ae,te),this._resizeListeners.resize[te]=ae=>this._resize(ae,te),this._resizeListeners.stop[te]=()=>this._stopResize(te),te.length===1&&ie.classList.add("edge"),ie.classList.add("resizer"),ie.classList.add(te),ie.addEventListener("mousedown",this._resizeListeners.start[te]),ie.addEventListener("touchstart",this._resizeListeners.start[te]),this.$.overlay.$.resizerContainer.appendChild(ie)})}_startResize(te,ie){if(!(te.type==="touchstart"&&te.touches.length>1)&&(te.button===0||te.touches)){te.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const ae=getMouseOrFirstTouchEvent(te);this._originalMouseCoords={top:ae.pageY,left:ae.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[ie]),window.addEventListener("touchmove",this._resizeListeners.resize[ie]),window.addEventListener("mouseup",this._resizeListeners.stop[ie]),window.addEventListener("touchend",this._resizeListeners.stop[ie]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(te,ie){const ae=getMouseOrFirstTouchEvent(te);eventInWindow(ae)&&ie.split("").forEach(oe=>{switch(oe){case"n":{const re=this._originalBounds.height-(ae.pageY-this._originalMouseCoords.top),ne=this._originalBounds.top+(ae.pageY-this._originalMouseCoords.top);re>40&&this.$.overlay.setBounds({top:ne,height:re});break}case"e":{const re=this._originalBounds.width+(ae.pageX-this._originalMouseCoords.left);re>40&&this.$.overlay.setBounds({width:re});break}case"s":{const re=this._originalBounds.height+(ae.pageY-this._originalMouseCoords.top);re>40&&this.$.overlay.setBounds({height:re});break}case"w":{const re=this._originalBounds.width-(ae.pageX-this._originalMouseCoords.left),ne=this._originalBounds.left+(ae.pageX-this._originalMouseCoords.left);re>40&&this.$.overlay.setBounds({left:ne,width:re});break}}})}_stopResize(te){window.removeEventListener("mousemove",this._resizeListeners.resize[te]),window.removeEventListener("touchmove",this._resizeListeners.resize[te]),window.removeEventListener("mouseup",this._resizeListeners.stop[te]),window.removeEventListener("touchend",this._resizeListeners.stop[te]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const te=this.$.overlay.$.resizerContainer.scrollTop,{width:ie,height:ae}=getComputedStyle(this.$.overlay.$.overlay),se=this.$.overlay.$.content;se.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:oe,height:re}=getComputedStyle(se);return se.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=te,{width:ie,height:ae,contentWidth:oe,contentHeight:re}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-dialog-overlay",i$1`
    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let memoizedTemplate$2;class DialogOverlay extends OverlayElement{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!memoizedTemplate$2){memoizedTemplate$2=super.template.cloneNode(!0);const ee=memoizedTemplate$2.content.querySelector('[part="content"]'),te=memoizedTemplate$2.content.querySelector('[part="overlay"]'),ie=document.createElement("div");ie.id="resizerContainer",ie.classList.add("resizer-container"),ie.appendChild(ee),te.appendChild(ie)}return memoizedTemplate$2}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}setBounds(ee){const te=this.$.overlay,ie={...ee};te.style.position!=="absolute"&&(te.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow());for(const ae in ie)typeof ie[ae]=="number"&&(ie[ae]=`${ie[ae]}px`);Object.assign(te.style,ie)}getBounds(){const ee=this.$.overlay.getBoundingClientRect(),te=this.getBoundingClientRect(),ie=ee.top-te.top,ae=ee.left-te.left,se=ee.width,oe=ee.height;return{top:ie,left:ae,width:se,height:oe}}__forceSafariReflow(){const ee=this.$.resizerContainer.scrollTop,te=this.$.overlay;te.style.display="block",requestAnimationFrame(()=>{te.style.display="",this.$.resizerContainer.scrollTop=ee})}}customElements.define(DialogOverlay.is,DialogOverlay);class Dialog extends ThemePropertyMixin(ElementMixin(DialogDraggableMixin(DialogResizableMixin(PolymerElement)))){static get template(){return html`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_rendererChanged(renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),processTemplates(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(ee){this.$.overlay.setProperties({owner:this,renderer:ee})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(ee){this.$.overlay.opened=ee}_ariaLabelChanged(ee){ee?this.$.overlay.setAttribute("aria-label",ee):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(ee){ee.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(ee){this.noCloseOnOutsideClick&&ee.preventDefault()}_handleEscPress(ee){this.noCloseOnEsc&&ee.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(Dialog.is,Dialog);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const emailField=i$1`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;registerStyles("vaadin-email-field",[inputFieldShared,emailField],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-email-field",i$1`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class EmailField extends TextField{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email")}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.autocapitalize="off")}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define("vaadin-email-field",EmailField);/*!
 * ApexCharts v3.30.0
 * (c) 2018-2021 ApexCharts
 * Released under the MIT License.
 */function t(de){return(t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee})(de)}function e(de,ee){if(!(de instanceof ee))throw new TypeError("Cannot call a class as a function")}function i(de,ee){for(var te=0;te<ee.length;te++){var ie=ee[te];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(de,ie.key,ie)}}function a(de,ee,te){return ee&&i(de.prototype,ee),te&&i(de,te),de}function s(de,ee,te){return ee in de?Object.defineProperty(de,ee,{value:te,enumerable:!0,configurable:!0,writable:!0}):de[ee]=te,de}function r(de,ee){var te=Object.keys(de);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(de);ee&&(ie=ie.filter(function(ae){return Object.getOwnPropertyDescriptor(de,ae).enumerable})),te.push.apply(te,ie)}return te}function o(de){for(var ee=1;ee<arguments.length;ee++){var te=arguments[ee]!=null?arguments[ee]:{};ee%2?r(Object(te),!0).forEach(function(ie){s(de,ie,te[ie])}):Object.getOwnPropertyDescriptors?Object.defineProperties(de,Object.getOwnPropertyDescriptors(te)):r(Object(te)).forEach(function(ie){Object.defineProperty(de,ie,Object.getOwnPropertyDescriptor(te,ie))})}return de}function n(de,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");de.prototype=Object.create(ee&&ee.prototype,{constructor:{value:de,writable:!0,configurable:!0}}),ee&&h(de,ee)}function l(de){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(ee){return ee.__proto__||Object.getPrototypeOf(ee)})(de)}function h(de,ee){return(h=Object.setPrototypeOf||function(te,ie){return te.__proto__=ie,te})(de,ee)}function c(de,ee){return!ee||typeof ee!="object"&&typeof ee!="function"?function(te){if(te===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return te}(de):ee}function d(de){var ee=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var te,ie=l(de);if(ee){var ae=l(this).constructor;te=Reflect.construct(ie,arguments,ae)}else te=ie.apply(this,arguments);return c(this,te)}}function g(de){return function(ee){if(Array.isArray(ee))return u(ee)}(de)||function(ee){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(ee))return Array.from(ee)}(de)||function(ee,te){if(!!ee){if(typeof ee=="string")return u(ee,te);var ie=Object.prototype.toString.call(ee).slice(8,-1);if(ie==="Object"&&ee.constructor&&(ie=ee.constructor.name),ie==="Map"||ie==="Set")return Array.from(ee);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return u(ee,te)}}(de)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function u(de,ee){(ee==null||ee>de.length)&&(ee=de.length);for(var te=0,ie=new Array(ee);te<ee;te++)ie[te]=de[te];return ie}var p=function(){function de(){e(this,de)}return a(de,[{key:"shadeRGBColor",value:function(ee,te){var ie=te.split(","),ae=ee<0?0:255,se=ee<0?-1*ee:ee,oe=parseInt(ie[0].slice(4),10),re=parseInt(ie[1],10),ne=parseInt(ie[2],10);return"rgb("+(Math.round((ae-oe)*se)+oe)+","+(Math.round((ae-re)*se)+re)+","+(Math.round((ae-ne)*se)+ne)+")"}},{key:"shadeHexColor",value:function(ee,te){var ie=parseInt(te.slice(1),16),ae=ee<0?0:255,se=ee<0?-1*ee:ee,oe=ie>>16,re=ie>>8&255,ne=255&ie;return"#"+(16777216+65536*(Math.round((ae-oe)*se)+oe)+256*(Math.round((ae-re)*se)+re)+(Math.round((ae-ne)*se)+ne)).toString(16).slice(1)}},{key:"shadeColor",value:function(ee,te){return de.isColorHex(te)?this.shadeHexColor(ee,te):this.shadeRGBColor(ee,te)}}],[{key:"bind",value:function(ee,te){return function(){return ee.apply(te,arguments)}}},{key:"isObject",value:function(ee){return ee&&t(ee)==="object"&&!Array.isArray(ee)&&ee!=null}},{key:"is",value:function(ee,te){return Object.prototype.toString.call(te)==="[object "+ee+"]"}},{key:"listToArray",value:function(ee){var te,ie=[];for(te=0;te<ee.length;te++)ie[te]=ee[te];return ie}},{key:"extend",value:function(ee,te){var ie=this;typeof Object.assign!="function"&&(Object.assign=function(se){if(se==null)throw new TypeError("Cannot convert undefined or null to object");for(var oe=Object(se),re=1;re<arguments.length;re++){var ne=arguments[re];if(ne!=null)for(var le in ne)ne.hasOwnProperty(le)&&(oe[le]=ne[le])}return oe});var ae=Object.assign({},ee);return this.isObject(ee)&&this.isObject(te)&&Object.keys(te).forEach(function(se){ie.isObject(te[se])&&se in ee?ae[se]=ie.extend(ee[se],te[se]):Object.assign(ae,s({},se,te[se]))}),ae}},{key:"extendArray",value:function(ee,te){var ie=[];return ee.map(function(ae){ie.push(de.extend(te,ae))}),ee=ie}},{key:"monthMod",value:function(ee){return ee%12}},{key:"clone",value:function(ee){if(de.is("Array",ee)){for(var te=[],ie=0;ie<ee.length;ie++)te[ie]=this.clone(ee[ie]);return te}if(de.is("Null",ee))return null;if(de.is("Date",ee))return ee;if(t(ee)==="object"){var ae={};for(var se in ee)ee.hasOwnProperty(se)&&(ae[se]=this.clone(ee[se]));return ae}return ee}},{key:"log10",value:function(ee){return Math.log(ee)/Math.LN10}},{key:"roundToBase10",value:function(ee){return Math.pow(10,Math.floor(Math.log10(ee)))}},{key:"roundToBase",value:function(ee,te){return Math.pow(te,Math.floor(Math.log(ee)/Math.log(te)))}},{key:"parseNumber",value:function(ee){return ee===null?ee:parseFloat(ee)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(ee){var te=String(ee).split(/[eE]/);if(te.length===1)return te[0];var ie="",ae=ee<0?"-":"",se=te[0].replace(".",""),oe=Number(te[1])+1;if(oe<0){for(ie=ae+"0.";oe++;)ie+="0";return ie+se.replace(/^-/,"")}for(oe-=se.length;oe--;)ie+="0";return se+ie}},{key:"getDimensions",value:function(ee){var te=getComputedStyle(ee,null),ie=ee.clientHeight,ae=ee.clientWidth;return ie-=parseFloat(te.paddingTop)+parseFloat(te.paddingBottom),[ae-=parseFloat(te.paddingLeft)+parseFloat(te.paddingRight),ie]}},{key:"getBoundingClientRect",value:function(ee){var te=ee.getBoundingClientRect();return{top:te.top,right:te.right,bottom:te.bottom,left:te.left,width:ee.clientWidth,height:ee.clientHeight,x:te.left,y:te.top}}},{key:"getLargestStringFromArr",value:function(ee){return ee.reduce(function(te,ie){return Array.isArray(ie)&&(ie=ie.reduce(function(ae,se){return ae.length>se.length?ae:se})),te.length>ie.length?te:ie},0)}},{key:"hexToRgba",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#999999",te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.6;ee.substring(0,1)!=="#"&&(ee="#999999");var ie=ee.replace("#","");ie=ie.match(new RegExp("(.{"+ie.length/3+"})","g"));for(var ae=0;ae<ie.length;ae++)ie[ae]=parseInt(ie[ae].length===1?ie[ae]+ie[ae]:ie[ae],16);return te!==void 0&&ie.push(te),"rgba("+ie.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(ee){return parseFloat(ee.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(ee){return(ee=ee.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&ee.length===4?"#"+("0"+parseInt(ee[1],10).toString(16)).slice(-2)+("0"+parseInt(ee[2],10).toString(16)).slice(-2)+("0"+parseInt(ee[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(ee){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(ee)}},{key:"getPolygonPos",value:function(ee,te){for(var ie=[],ae=2*Math.PI/te,se=0;se<te;se++){var oe={};oe.x=ee*Math.sin(se*ae),oe.y=-ee*Math.cos(se*ae),ie.push(oe)}return ie}},{key:"polarToCartesian",value:function(ee,te,ie,ae){var se=(ae-90)*Math.PI/180;return{x:ee+ie*Math.cos(se),y:te+ie*Math.sin(se)}}},{key:"escapeString",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",ie=ee.toString().slice();return ie=ie.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,te)}},{key:"negToZero",value:function(ee){return ee<0?0:ee}},{key:"moveIndexInArray",value:function(ee,te,ie){if(ie>=ee.length)for(var ae=ie-ee.length+1;ae--;)ee.push(void 0);return ee.splice(ie,0,ee.splice(te,1)[0]),ee}},{key:"extractNumber",value:function(ee){return parseFloat(ee.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(ee,te){for(;(ee=ee.parentElement)&&!ee.classList.contains(te););return ee}},{key:"setELstyles",value:function(ee,te){for(var ie in te)te.hasOwnProperty(ie)&&(ee.style.key=te[ie])}},{key:"isNumber",value:function(ee){return!isNaN(ee)&&parseFloat(Number(ee))===ee&&!isNaN(parseInt(ee,10))}},{key:"isFloat",value:function(ee){return Number(ee)===ee&&ee%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(window.navigator.userAgent.indexOf("MSIE")!==-1||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var ee=window.navigator.userAgent,te=ee.indexOf("MSIE ");if(te>0)return parseInt(ee.substring(te+5,ee.indexOf(".",te)),10);if(ee.indexOf("Trident/")>0){var ie=ee.indexOf("rv:");return parseInt(ee.substring(ie+3,ee.indexOf(".",ie)),10)}var ae=ee.indexOf("Edge/");return ae>0&&parseInt(ee.substring(ae+5,ee.indexOf(".",ae)),10)}}]),de}(),f=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.setEasingFunctions()}return a(de,[{key:"setEasingFunctions",value:function(){var ee;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":ee="-";break;case"easein":ee="<";break;case"easeout":ee=">";break;case"easeinout":ee="<>";break;case"swing":ee=function(te){var ie=1.70158;return(te-=1)*te*((ie+1)*te+ie)+1};break;case"bounce":ee=function(te){return te<1/2.75?7.5625*te*te:te<2/2.75?7.5625*(te-=1.5/2.75)*te+.75:te<2.5/2.75?7.5625*(te-=2.25/2.75)*te+.9375:7.5625*(te-=2.625/2.75)*te+.984375};break;case"elastic":ee=function(te){return te===!!te?te:Math.pow(2,-10*te)*Math.sin((te-.075)*(2*Math.PI)/.3)+1};break;default:ee="<>"}this.w.globals.easing=ee}}},{key:"animateLine",value:function(ee,te,ie,ae){ee.attr(te).animate(ae).attr(ie)}},{key:"animateMarker",value:function(ee,te,ie,ae,se,oe){te||(te=0),ee.attr({r:te,width:te,height:te}).animate(ae,se).attr({r:ie,width:ie.width,height:ie.height}).afterAll(function(){oe()})}},{key:"animateCircle",value:function(ee,te,ie,ae,se){ee.attr({r:te.r,cx:te.cx,cy:te.cy}).animate(ae,se).attr({r:ie.r,cx:ie.cx,cy:ie.cy})}},{key:"animateRect",value:function(ee,te,ie,ae,se){ee.attr(te).animate(ae).attr(ie).afterAll(function(){return se()})}},{key:"animatePathsGradually",value:function(ee){var te=ee.el,ie=ee.realIndex,ae=ee.j,se=ee.fill,oe=ee.pathFrom,re=ee.pathTo,ne=ee.speed,le=ee.delay,ce=this.w,ue=0;ce.config.chart.animations.animateGradually.enabled&&(ue=ce.config.chart.animations.animateGradually.delay),ce.config.chart.animations.dynamicAnimation.enabled&&ce.globals.dataChanged&&ce.config.chart.type!=="bar"&&(ue=0),this.morphSVG(te,ie,ae,ce.config.chart.type!=="line"||ce.globals.comboCharts?se:"stroke",oe,re,ne,le*ue)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach(function(ee){ee.el.classList.remove("apexcharts-element-hidden")})}},{key:"animationCompleted",value:function(ee){var te=this.w;te.globals.animationEnded||(te.globals.animationEnded=!0,this.showDelayedElements(),typeof te.config.chart.events.animationEnd=="function"&&te.config.chart.events.animationEnd(this.ctx,{el:ee,w:te}))}},{key:"morphSVG",value:function(ee,te,ie,ae,se,oe,re,ne){var le=this,ce=this.w;se||(se=ee.attr("pathFrom")),oe||(oe=ee.attr("pathTo"));var ue=function(pe){return ce.config.chart.type==="radar"&&(re=1),"M 0 ".concat(ce.globals.gridHeight)};(!se||se.indexOf("undefined")>-1||se.indexOf("NaN")>-1)&&(se=ue()),(!oe||oe.indexOf("undefined")>-1||oe.indexOf("NaN")>-1)&&(oe=ue()),ce.globals.shouldAnimate||(re=1),ee.plot(se).animate(1,ce.globals.easing,ne).plot(se).animate(re,ce.globals.easing,ne).plot(oe).afterAll(function(){p.isNumber(ie)?ie===ce.globals.series[ce.globals.maxValsInArrayIndex].length-2&&ce.globals.shouldAnimate&&le.animationCompleted(ee):ae!=="none"&&ce.globals.shouldAnimate&&(!ce.globals.comboCharts&&te===ce.globals.series.length-1||ce.globals.comboCharts)&&le.animationCompleted(ee),le.showDelayedElements()})}}]),de}(),x=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"getDefaultFilter",value:function(ee,te){var ie=this.w;ee.unfilter(!0),new window.SVG.Filter().size("120%","180%","-5%","-40%"),ie.config.states.normal.filter!=="none"?this.applyFilter(ee,te,ie.config.states.normal.filter.type,ie.config.states.normal.filter.value):ie.config.chart.dropShadow.enabled&&this.dropShadow(ee,ie.config.chart.dropShadow,te)}},{key:"addNormalFilter",value:function(ee,te){var ie=this.w;ie.config.chart.dropShadow.enabled&&!ee.node.classList.contains("apexcharts-marker")&&this.dropShadow(ee,ie.config.chart.dropShadow,te)}},{key:"addLightenFilter",value:function(ee,te,ie){var ae=this,se=this.w,oe=ie.intensity;ee.unfilter(!0),new window.SVG.Filter,ee.filter(function(re){var ne=se.config.chart.dropShadow;(ne.enabled?ae.addShadow(re,te,ne):re).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:oe}})}),ee.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(ee.filterer.node)}},{key:"addDarkenFilter",value:function(ee,te,ie){var ae=this,se=this.w,oe=ie.intensity;ee.unfilter(!0),new window.SVG.Filter,ee.filter(function(re){var ne=se.config.chart.dropShadow;(ne.enabled?ae.addShadow(re,te,ne):re).componentTransfer({rgb:{type:"linear",slope:oe}})}),ee.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(ee.filterer.node)}},{key:"applyFilter",value:function(ee,te,ie){var ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.5;switch(ie){case"none":this.addNormalFilter(ee,te);break;case"lighten":this.addLightenFilter(ee,te,{intensity:ae});break;case"darken":this.addDarkenFilter(ee,te,{intensity:ae})}}},{key:"addShadow",value:function(ee,te,ie){var ae=ie.blur,se=ie.top,oe=ie.left,re=ie.color,ne=ie.opacity,le=ee.flood(Array.isArray(re)?re[te]:re,ne).composite(ee.sourceAlpha,"in").offset(oe,se).gaussianBlur(ae).merge(ee.source);return ee.blend(ee.source,le)}},{key:"dropShadow",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,ae=te.top,se=te.left,oe=te.blur,re=te.color,ne=te.opacity,le=te.noUserSpaceOnUse,ce=this.w;return ee.unfilter(!0),p.isIE()&&ce.config.chart.type==="radialBar"||(re=Array.isArray(re)?re[ie]:re,ee.filter(function(ue){var pe=null;pe=p.isSafari()||p.isFirefox()||p.isIE()?ue.flood(re,ne).composite(ue.sourceAlpha,"in").offset(se,ae).gaussianBlur(oe):ue.flood(re,ne).composite(ue.sourceAlpha,"in").offset(se,ae).gaussianBlur(oe).merge(ue.source),ue.blend(ue.source,pe)}),le||ee.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(ee.filterer.node)),ee}},{key:"setSelectionFilter",value:function(ee,te,ie){var ae=this.w;if(ae.globals.selectedDataPoints[te]!==void 0&&ae.globals.selectedDataPoints[te].indexOf(ie)>-1){ee.node.setAttribute("selected",!0);var se=ae.config.states.active.filter;se!=="none"&&this.applyFilter(ee,te,se.type,se.value)}}},{key:"_scaleFilterSize",value:function(ee){(function(te){for(var ie in te)te.hasOwnProperty(ie)&&ee.setAttribute(ie,te[ie])})({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),de}(),b=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"drawLine",value:function(ee,te,ie,ae){var se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"#a8a8a8",oe=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,re=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,ne=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"butt",le=this.w,ce=le.globals.dom.Paper.line().attr({x1:ee,y1:te,x2:ie,y2:ae,stroke:se,"stroke-dasharray":oe,"stroke-width":re,"stroke-linecap":ne});return ce}},{key:"drawRect",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,oe=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"#fefefe",re=arguments.length>6&&arguments[6]!==void 0?arguments[6]:1,ne=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,le=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,ce=arguments.length>9&&arguments[9]!==void 0?arguments[9]:0,ue=this.w,pe=ue.globals.dom.Paper.rect();return pe.attr({x:ee,y:te,width:ie>0?ie:0,height:ae>0?ae:0,rx:se,ry:se,opacity:re,"stroke-width":ne!==null?ne:0,stroke:le!==null?le:"none","stroke-dasharray":ce}),pe.node.setAttribute("fill",oe),pe}},{key:"drawPolygon",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#e1e1e1",ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"none",se=this.w,oe=se.globals.dom.Paper.polygon(ee).attr({fill:ae,stroke:te,"stroke-width":ie});return oe}},{key:"drawCircle",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ie=this.w;ee<0&&(ee=0);var ae=ie.globals.dom.Paper.circle(2*ee);return te!==null&&ae.attr(te),ae}},{key:"drawPath",value:function(ee){var te=ee.d,ie=te===void 0?"":te,ae=ee.stroke,se=ae===void 0?"#a8a8a8":ae,oe=ee.strokeWidth,re=oe===void 0?1:oe,ne=ee.fill,le=ee.fillOpacity,ce=le===void 0?1:le,ue=ee.strokeOpacity,pe=ue===void 0?1:ue,fe=ee.classes,me=ee.strokeLinecap,ve=me===void 0?null:me,be=ee.strokeDashArray,ye=be===void 0?0:be,_e=this.w;return ve===null&&(ve=_e.config.stroke.lineCap),(ie.indexOf("undefined")>-1||ie.indexOf("NaN")>-1)&&(ie="M 0 ".concat(_e.globals.gridHeight)),_e.globals.dom.Paper.path(ie).attr({fill:ne,"fill-opacity":ce,stroke:se,"stroke-opacity":pe,"stroke-linecap":ve,"stroke-width":re,"stroke-dasharray":ye,class:fe})}},{key:"group",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,te=this.w,ie=te.globals.dom.Paper.group();return ee!==null&&ie.attr(ee),ie}},{key:"move",value:function(ee,te){var ie=["M",ee,te].join(" ");return ie}},{key:"line",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,ae=null;return ie===null?ae=["L",ee,te].join(" "):ie==="H"?ae=["H",ee].join(" "):ie==="V"&&(ae=["V",te].join(" ")),ae}},{key:"curve",value:function(ee,te,ie,ae,se,oe){var re=["C",ee,te,ie,ae,se,oe].join(" ");return re}},{key:"quadraticCurve",value:function(ee,te,ie,ae){return["Q",ee,te,ie,ae].join(" ")}},{key:"arc",value:function(ee,te,ie,ae,se,oe,re){var ne=arguments.length>7&&arguments[7]!==void 0&&arguments[7],le="A";ne&&(le="a");var ce=[le,ee,te,ie,ae,se,oe,re].join(" ");return ce}},{key:"renderPaths",value:function(ee){var te,ie=ee.j,ae=ee.realIndex,se=ee.pathFrom,oe=ee.pathTo,re=ee.stroke,ne=ee.strokeWidth,le=ee.strokeLinecap,ce=ee.fill,ue=ee.animationDelay,pe=ee.initialSpeed,fe=ee.dataChangeSpeed,me=ee.className,ve=ee.shouldClipToGrid,be=ve===void 0||ve,ye=ee.bindEventsOnPaths,_e=ye===void 0||ye,Ae=ee.drawShadow,he=Ae===void 0||Ae,ge=this.w,xe=new x(this.ctx),we=new f(this.ctx),Ce=this.w.config.chart.animations.enabled,Se=Ce&&this.w.config.chart.animations.dynamicAnimation.enabled,ke=!!(Ce&&!ge.globals.resized||Se&&ge.globals.dataChanged&&ge.globals.shouldAnimate);ke?te=se:(te=oe,ge.globals.animationEnded=!0);var Pe=ge.config.stroke.dashArray,Ee=0;Ee=Array.isArray(Pe)?Pe[ae]:ge.config.stroke.dashArray;var Ie=this.drawPath({d:te,stroke:re,strokeWidth:ne,fill:ce,fillOpacity:1,classes:me,strokeLinecap:le,strokeDashArray:Ee});if(Ie.attr("index",ae),be&&Ie.attr({"clip-path":"url(#gridRectMask".concat(ge.globals.cuid,")")}),ge.config.states.normal.filter.type!=="none")xe.getDefaultFilter(Ie,ae);else if(ge.config.chart.dropShadow.enabled&&he&&(!ge.config.chart.dropShadow.enabledOnSeries||ge.config.chart.dropShadow.enabledOnSeries&&ge.config.chart.dropShadow.enabledOnSeries.indexOf(ae)!==-1)){var Te=ge.config.chart.dropShadow;xe.dropShadow(Ie,Te,ae)}_e&&(Ie.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,Ie)),Ie.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,Ie)),Ie.node.addEventListener("mousedown",this.pathMouseDown.bind(this,Ie))),Ie.attr({pathTo:oe,pathFrom:se});var Le={el:Ie,j:ie,realIndex:ae,pathFrom:se,pathTo:oe,fill:ce,strokeWidth:ne,delay:ue};return!Ce||ge.globals.resized||ge.globals.dataChanged?!ge.globals.resized&&ge.globals.dataChanged||we.showDelayedElements():we.animatePathsGradually(o(o({},Le),{},{speed:pe})),ge.globals.dataChanged&&Se&&ke&&we.animatePathsGradually(o(o({},Le),{},{speed:fe})),Ie}},{key:"drawPattern",value:function(ee,te,ie){var ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"#a8a8a8",se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,oe=this.w,re=oe.globals.dom.Paper.pattern(te,ie,function(ne){ee==="horizontalLines"?ne.line(0,0,ie,0).stroke({color:ae,width:se+1}):ee==="verticalLines"?ne.line(0,0,0,te).stroke({color:ae,width:se+1}):ee==="slantedLines"?ne.line(0,0,te,ie).stroke({color:ae,width:se}):ee==="squares"?ne.rect(te,ie).fill("none").stroke({color:ae,width:se}):ee==="circles"&&ne.circle(te).fill("none").stroke({color:ae,width:se})});return re}},{key:"drawGradient",value:function(ee,te,ie,ae,se){var oe,re=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,ne=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,le=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,ce=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,ue=this.w;te.length<9&&te.indexOf("#")===0&&(te=p.hexToRgba(te,ae)),ie.length<9&&ie.indexOf("#")===0&&(ie=p.hexToRgba(ie,se));var pe=0,fe=1,me=1,ve=null;ne!==null&&(pe=ne[0]!==void 0?ne[0]/100:0,fe=ne[1]!==void 0?ne[1]/100:1,me=ne[2]!==void 0?ne[2]/100:1,ve=ne[3]!==void 0?ne[3]/100:null);var be=!(ue.config.chart.type!=="donut"&&ue.config.chart.type!=="pie"&&ue.config.chart.type!=="polarArea"&&ue.config.chart.type!=="bubble");if(oe=le===null||le.length===0?ue.globals.dom.Paper.gradient(be?"radial":"linear",function(Ae){Ae.at(pe,te,ae),Ae.at(fe,ie,se),Ae.at(me,ie,se),ve!==null&&Ae.at(ve,te,ae)}):ue.globals.dom.Paper.gradient(be?"radial":"linear",function(Ae){(Array.isArray(le[ce])?le[ce]:le).forEach(function(he){Ae.at(he.offset/100,he.color,he.opacity)})}),be){var ye=ue.globals.gridWidth/2,_e=ue.globals.gridHeight/2;ue.config.chart.type!=="bubble"?oe.attr({gradientUnits:"userSpaceOnUse",cx:ye,cy:_e,r:re}):oe.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else ee==="vertical"?oe.from(0,0).to(0,1):ee==="diagonal"?oe.from(0,0).to(1,1):ee==="horizontal"?oe.from(0,1).to(1,1):ee==="diagonal2"&&oe.from(1,0).to(0,1);return oe}},{key:"drawText",value:function(ee){var te,ie=ee.x,ae=ee.y,se=ee.text,oe=ee.textAnchor,re=ee.fontSize,ne=ee.fontFamily,le=ee.fontWeight,ce=ee.foreColor,ue=ee.opacity,pe=ee.cssClass,fe=pe===void 0?"":pe,me=ee.isPlainText,ve=me===void 0||me,be=this.w;return se===void 0&&(se=""),oe||(oe="start"),ce&&ce.length||(ce=be.config.chart.foreColor),ne=ne||be.config.chart.fontFamily,le=le||"regular",(te=Array.isArray(se)?be.globals.dom.Paper.text(function(ye){for(var _e=0;_e<se.length;_e++)_e===0?ye.tspan(se[_e]):ye.tspan(se[_e]).newLine()}):ve?be.globals.dom.Paper.plain(se):be.globals.dom.Paper.text(function(ye){return ye.tspan(se)})).attr({x:ie,y:ae,"text-anchor":oe,"dominant-baseline":"auto","font-size":re,"font-family":ne,"font-weight":le,fill:ce,class:"apexcharts-text "+fe}),te.node.style.fontFamily=ne,te.node.style.opacity=ue,te}},{key:"drawMarker",value:function(ee,te,ie){ee=ee||0;var ae=ie.pSize||0,se=null;if(ie.shape==="square"||ie.shape==="rect"){var oe=ie.pRadius===void 0?ae/2:ie.pRadius;te!==null&&ae||(ae=0,oe=0);var re=1.2*ae+oe,ne=this.drawRect(re,re,re,re,oe);ne.attr({x:ee-re/2,y:te-re/2,cx:ee,cy:te,class:ie.class?ie.class:"",fill:ie.pointFillColor,"fill-opacity":ie.pointFillOpacity?ie.pointFillOpacity:1,stroke:ie.pointStrokeColor,"stroke-width":ie.pointStrokeWidth?ie.pointStrokeWidth:0,"stroke-opacity":ie.pointStrokeOpacity?ie.pointStrokeOpacity:1}),se=ne}else ie.shape!=="circle"&&ie.shape||(p.isNumber(te)||(ae=0,te=0),se=this.drawCircle(ae,{cx:ee,cy:te,class:ie.class?ie.class:"",stroke:ie.pointStrokeColor,fill:ie.pointFillColor,"fill-opacity":ie.pointFillOpacity?ie.pointFillOpacity:1,"stroke-width":ie.pointStrokeWidth?ie.pointStrokeWidth:0,"stroke-opacity":ie.pointStrokeOpacity?ie.pointStrokeOpacity:1}));return se}},{key:"pathMouseEnter",value:function(ee,te){var ie=this.w,ae=new x(this.ctx),se=parseInt(ee.node.getAttribute("index"),10),oe=parseInt(ee.node.getAttribute("j"),10);if(typeof ie.config.chart.events.dataPointMouseEnter=="function"&&ie.config.chart.events.dataPointMouseEnter(te,this.ctx,{seriesIndex:se,dataPointIndex:oe,w:ie}),this.ctx.events.fireEvent("dataPointMouseEnter",[te,this.ctx,{seriesIndex:se,dataPointIndex:oe,w:ie}]),(ie.config.states.active.filter.type==="none"||ee.node.getAttribute("selected")!=="true")&&ie.config.states.hover.filter.type!=="none"&&!ie.globals.isTouchDevice){var re=ie.config.states.hover.filter;ae.applyFilter(ee,se,re.type,re.value)}}},{key:"pathMouseLeave",value:function(ee,te){var ie=this.w,ae=new x(this.ctx),se=parseInt(ee.node.getAttribute("index"),10),oe=parseInt(ee.node.getAttribute("j"),10);typeof ie.config.chart.events.dataPointMouseLeave=="function"&&ie.config.chart.events.dataPointMouseLeave(te,this.ctx,{seriesIndex:se,dataPointIndex:oe,w:ie}),this.ctx.events.fireEvent("dataPointMouseLeave",[te,this.ctx,{seriesIndex:se,dataPointIndex:oe,w:ie}]),ie.config.states.active.filter.type!=="none"&&ee.node.getAttribute("selected")==="true"||ie.config.states.hover.filter.type!=="none"&&ae.getDefaultFilter(ee,se)}},{key:"pathMouseDown",value:function(ee,te){var ie=this.w,ae=new x(this.ctx),se=parseInt(ee.node.getAttribute("index"),10),oe=parseInt(ee.node.getAttribute("j"),10),re="false";if(ee.node.getAttribute("selected")==="true"){if(ee.node.setAttribute("selected","false"),ie.globals.selectedDataPoints[se].indexOf(oe)>-1){var ne=ie.globals.selectedDataPoints[se].indexOf(oe);ie.globals.selectedDataPoints[se].splice(ne,1)}}else{if(!ie.config.states.active.allowMultipleDataPointsSelection&&ie.globals.selectedDataPoints.length>0){ie.globals.selectedDataPoints=[];var le=ie.globals.dom.Paper.select(".apexcharts-series path").members,ce=ie.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,ue=function(fe){Array.prototype.forEach.call(fe,function(me){me.node.setAttribute("selected","false"),ae.getDefaultFilter(me,se)})};ue(le),ue(ce)}ee.node.setAttribute("selected","true"),re="true",ie.globals.selectedDataPoints[se]===void 0&&(ie.globals.selectedDataPoints[se]=[]),ie.globals.selectedDataPoints[se].push(oe)}if(re==="true"){var pe=ie.config.states.active.filter;pe!=="none"&&ae.applyFilter(ee,se,pe.type,pe.value)}else ie.config.states.active.filter.type!=="none"&&ae.getDefaultFilter(ee,se);typeof ie.config.chart.events.dataPointSelection=="function"&&ie.config.chart.events.dataPointSelection(te,this.ctx,{selectedDataPoints:ie.globals.selectedDataPoints,seriesIndex:se,dataPointIndex:oe,w:ie}),te&&this.ctx.events.fireEvent("dataPointSelection",[te,this.ctx,{selectedDataPoints:ie.globals.selectedDataPoints,seriesIndex:se,dataPointIndex:oe,w:ie}])}},{key:"rotateAroundCenter",value:function(ee){var te={};return ee&&typeof ee.getBBox=="function"&&(te=ee.getBBox()),{x:te.x+te.width/2,y:te.y+te.height/2}}},{key:"getTextRects",value:function(ee,te,ie,ae){var se=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],oe=this.w,re=this.drawText({x:-200,y:-200,text:ee,textAnchor:"start",fontSize:te,fontFamily:ie,foreColor:"#fff",opacity:0});ae&&re.attr("transform",ae),oe.globals.dom.Paper.add(re);var ne=re.bbox();return se||(ne=re.node.getBoundingClientRect()),re.remove(),{width:ne.width,height:ne.height}}},{key:"placeTextWithEllipsis",value:function(ee,te,ie){if(typeof ee.getComputedTextLength=="function"&&(ee.textContent=te,te.length>0&&ee.getComputedTextLength()>=ie/1.1)){for(var ae=te.length-3;ae>0;ae-=3)if(ee.getSubStringLength(0,ae)<=ie/1.1)return void(ee.textContent=te.substring(0,ae)+"...");ee.textContent="."}}}],[{key:"setAttrs",value:function(ee,te){for(var ie in te)te.hasOwnProperty(ie)&&ee.setAttribute(ie,te[ie])}}]),de}(),v=function(){function de(ee){e(this,de),this.w=ee.w,this.annoCtx=ee}return a(de,[{key:"setOrientations",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ie=this.w;if(ee.label.orientation==="vertical"){var ae=te!==null?te:0,se=ie.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(ae,"']"));if(se!==null){var oe=se.getBoundingClientRect();se.setAttribute("x",parseFloat(se.getAttribute("x"))-oe.height+4),ee.label.position==="top"?se.setAttribute("y",parseFloat(se.getAttribute("y"))+oe.width):se.setAttribute("y",parseFloat(se.getAttribute("y"))-oe.width);var re=this.annoCtx.graphics.rotateAroundCenter(se),ne=re.x,le=re.y;se.setAttribute("transform","rotate(-90 ".concat(ne," ").concat(le,")"))}}}},{key:"addBackgroundToAnno",value:function(ee,te){var ie=this.w;if(!ee||!te.label.text||te.label.text&&!te.label.text.trim())return null;var ae=ie.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),se=ee.getBoundingClientRect(),oe=te.label.style.padding.left,re=te.label.style.padding.right,ne=te.label.style.padding.top,le=te.label.style.padding.bottom;te.label.orientation==="vertical"&&(ne=te.label.style.padding.left,le=te.label.style.padding.right,oe=te.label.style.padding.top,re=te.label.style.padding.bottom);var ce=se.left-ae.left-oe,ue=se.top-ae.top-ne,pe=this.annoCtx.graphics.drawRect(ce-ie.globals.barPadForNumericAxis,ue,se.width+oe+re,se.height+ne+le,te.label.borderRadius,te.label.style.background,1,te.label.borderWidth,te.label.borderColor,0);return te.id&&pe.node.classList.add(te.id),pe}},{key:"annotationsBackground",value:function(){var ee=this,te=this.w,ie=function(ae,se,oe){var re=te.globals.dom.baseEl.querySelector(".apexcharts-".concat(oe,"-annotations .apexcharts-").concat(oe,"-annotation-label[rel='").concat(se,"']"));if(re){var ne=re.parentNode,le=ee.addBackgroundToAnno(re,ae);le&&ne.insertBefore(le.node,re)}};te.config.annotations.xaxis.map(function(ae,se){ie(ae,se,"xaxis")}),te.config.annotations.yaxis.map(function(ae,se){ie(ae,se,"yaxis")}),te.config.annotations.points.map(function(ae,se){ie(ae,se,"point")})}},{key:"getStringX",value:function(ee){var te=this.w,ie=ee;te.config.xaxis.convertedCatToNumeric&&te.globals.categoryLabels.length&&(ee=te.globals.categoryLabels.indexOf(ee)+1);var ae=te.globals.labels.indexOf(ee),se=te.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(ae+1)+")");return se&&(ie=parseFloat(se.getAttribute("x"))),ie}}]),de}(),m=function(){function de(ee){e(this,de),this.w=ee.w,this.annoCtx=ee,this.invertAxis=this.annoCtx.invertAxis}return a(de,[{key:"addXaxisAnnotation",value:function(ee,te,ie){var ae=this.w,se=this.invertAxis?ae.globals.minY:ae.globals.minX,oe=this.invertAxis?ae.globals.maxY:ae.globals.maxX,re=this.invertAxis?ae.globals.yRange[0]:ae.globals.xRange,ne=(ee.x-se)/(re/ae.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(ne=(oe-ee.x)/(re/ae.globals.gridWidth));var le=ee.label.text;ae.config.xaxis.type!=="category"&&!ae.config.xaxis.convertedCatToNumeric||this.invertAxis||ae.globals.dataFormatXNumeric||(ne=this.annoCtx.helpers.getStringX(ee.x));var ce=ee.strokeDashArray;if(p.isNumber(ne)){if(ee.x2===null||ee.x2===void 0){var ue=this.annoCtx.graphics.drawLine(ne+ee.offsetX,0+ee.offsetY,ne+ee.offsetX,ae.globals.gridHeight+ee.offsetY,ee.borderColor,ce,ee.borderWidth);te.appendChild(ue.node),ee.id&&ue.node.classList.add(ee.id)}else{var pe=(ee.x2-se)/(re/ae.globals.gridWidth);if(this.annoCtx.inversedReversedAxis&&(pe=(oe-ee.x2)/(re/ae.globals.gridWidth)),ae.config.xaxis.type!=="category"&&!ae.config.xaxis.convertedCatToNumeric||this.invertAxis||ae.globals.dataFormatXNumeric||(pe=this.annoCtx.helpers.getStringX(ee.x2)),pe<ne){var fe=ne;ne=pe,pe=fe}var me=this.annoCtx.graphics.drawRect(ne+ee.offsetX,0+ee.offsetY,pe-ne,ae.globals.gridHeight+ee.offsetY,0,ee.fillColor,ee.opacity,1,ee.borderColor,ce);me.node.classList.add("apexcharts-annotation-rect"),me.attr("clip-path","url(#gridRectMask".concat(ae.globals.cuid,")")),te.appendChild(me.node),ee.id&&me.node.classList.add(ee.id)}var ve=ee.label.position==="top"?4:ae.globals.gridHeight,be=this.annoCtx.graphics.getTextRects(le,parseFloat(ee.label.style.fontSize)),ye=this.annoCtx.graphics.drawText({x:ne+ee.label.offsetX,y:ve+ee.label.offsetY-(ee.label.orientation==="vertical"?ee.label.position==="top"?be.width/2-12:-be.width/2:0),text:le,textAnchor:ee.label.textAnchor,fontSize:ee.label.style.fontSize,fontFamily:ee.label.style.fontFamily,fontWeight:ee.label.style.fontWeight,foreColor:ee.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(ee.label.style.cssClass," ").concat(ee.id?ee.id:"")});ye.attr({rel:ie}),te.appendChild(ye.node),this.annoCtx.helpers.setOrientations(ee,ie)}}},{key:"drawXAxisAnnotations",value:function(){var ee=this,te=this.w,ie=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return te.config.annotations.xaxis.map(function(ae,se){ee.addXaxisAnnotation(ae,ie.node,se)}),ie}}]),de}(),y=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"getStackedSeriesTotals",value:function(){var ee=this.w,te=[];if(ee.globals.series.length===0)return te;for(var ie=0;ie<ee.globals.series[ee.globals.maxValsInArrayIndex].length;ie++){for(var ae=0,se=0;se<ee.globals.series.length;se++)ee.globals.series[se][ie]!==void 0&&(ae+=ee.globals.series[se][ie]);te.push(ae)}return ee.globals.stackedSeriesTotals=te,te}},{key:"getSeriesTotalByIndex",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return ee===null?this.w.config.series.reduce(function(te,ie){return te+ie},0):this.w.globals.series[ee].reduce(function(te,ie){return te+ie},0)}},{key:"isSeriesNull",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return(ee===null?this.w.config.series.filter(function(te){return te!==null}):this.w.config.series[ee].data.filter(function(te){return te!==null})).length===0}},{key:"seriesHaveSameValues",value:function(ee){return this.w.globals.series[ee].every(function(te,ie,ae){return te===ae[0]})}},{key:"getCategoryLabels",value:function(ee){var te=this.w,ie=ee.slice();return te.config.xaxis.convertedCatToNumeric&&(ie=ee.map(function(ae,se){return te.config.xaxis.labels.formatter(ae-te.globals.minX+1)})),ie}},{key:"getLargestSeries",value:function(){var ee=this.w;ee.globals.maxValsInArrayIndex=ee.globals.series.map(function(te){return te.length}).indexOf(Math.max.apply(Math,ee.globals.series.map(function(te){return te.length})))}},{key:"getLargestMarkerSize",value:function(){var ee=this.w,te=0;return ee.globals.markers.size.forEach(function(ie){te=Math.max(te,ie)}),ee.globals.markers.largestSize=te,te}},{key:"getSeriesTotals",value:function(){var ee=this.w;ee.globals.seriesTotals=ee.globals.series.map(function(te,ie){var ae=0;if(Array.isArray(te))for(var se=0;se<te.length;se++)ae+=te[se];else ae+=te;return ae})}},{key:"getSeriesTotalsXRange",value:function(ee,te){var ie=this.w;return ie.globals.series.map(function(ae,se){for(var oe=0,re=0;re<ae.length;re++)ie.globals.seriesX[se][re]>ee&&ie.globals.seriesX[se][re]<te&&(oe+=ae[re]);return oe})}},{key:"getPercentSeries",value:function(){var ee=this.w;ee.globals.seriesPercent=ee.globals.series.map(function(te,ie){var ae=[];if(Array.isArray(te))for(var se=0;se<te.length;se++){var oe=ee.globals.stackedSeriesTotals[se],re=0;oe&&(re=100*te[se]/oe),ae.push(re)}else{var ne=100*te/ee.globals.seriesTotals.reduce(function(le,ce){return le+ce},0);ae.push(ne)}return ae})}},{key:"getCalculatedRatios",value:function(){var ee,te,ie,ae,se=this.w.globals,oe=[],re=0,ne=[],le=.1,ce=0;if(se.yRange=[],se.isMultipleYAxis)for(var ue=0;ue<se.minYArr.length;ue++)se.yRange.push(Math.abs(se.minYArr[ue]-se.maxYArr[ue])),ne.push(0);else se.yRange.push(Math.abs(se.minY-se.maxY));se.xRange=Math.abs(se.maxX-se.minX),se.zRange=Math.abs(se.maxZ-se.minZ);for(var pe=0;pe<se.yRange.length;pe++)oe.push(se.yRange[pe]/se.gridHeight);if(te=se.xRange/se.gridWidth,ie=Math.abs(se.initialMaxX-se.initialMinX)/se.gridWidth,ee=se.yRange/se.gridWidth,ae=se.xRange/se.gridHeight,(re=se.zRange/se.gridHeight*16)||(re=1),se.minY!==Number.MIN_VALUE&&Math.abs(se.minY)!==0&&(se.hasNegs=!0),se.isMultipleYAxis){ne=[];for(var fe=0;fe<oe.length;fe++)ne.push(-se.minYArr[fe]/oe[fe])}else ne.push(-se.minY/oe[0]),se.minY!==Number.MIN_VALUE&&Math.abs(se.minY)!==0&&(le=-se.minY/ee,ce=se.minX/te);return{yRatio:oe,invertedYRatio:ee,zRatio:re,xRatio:te,initialXRatio:ie,invertedXRatio:ae,baseLineInvertedY:le,baseLineY:ne,baseLineX:ce}}},{key:"getLogSeries",value:function(ee){var te=this,ie=this.w;return ie.globals.seriesLog=ee.map(function(ae,se){return ie.config.yaxis[se]&&ie.config.yaxis[se].logarithmic?ae.map(function(oe){return oe===null?null:te.getLogVal(oe,se)}):ae}),ie.globals.invalidLogScale?ee:ie.globals.seriesLog}},{key:"getLogVal",value:function(ee,te){var ie=this.w;return(Math.log(ee)-Math.log(ie.globals.minYArr[te]))/(Math.log(ie.globals.maxYArr[te])-Math.log(ie.globals.minYArr[te]))}},{key:"getLogYRatios",value:function(ee){var te=this,ie=this.w,ae=this.w.globals;return ae.yLogRatio=ee.slice(),ae.logYRange=ae.yRange.map(function(se,oe){if(ie.config.yaxis[oe]&&te.w.config.yaxis[oe].logarithmic){var re,ne=-Number.MAX_VALUE,le=Number.MIN_VALUE;return ae.seriesLog.forEach(function(ce,ue){ce.forEach(function(pe){ie.config.yaxis[ue]&&ie.config.yaxis[ue].logarithmic&&(ne=Math.max(pe,ne),le=Math.min(pe,le))})}),re=Math.pow(ae.yRange[oe],Math.abs(le-ne)/ae.yRange[oe]),ae.yLogRatio[oe]=re/ae.gridHeight,re}}),ae.invalidLogScale?ee.slice():ae.yLogRatio}}],[{key:"checkComboSeries",value:function(ee){var te=!1,ie=0,ae=0;return ee.length&&ee[0].type!==void 0&&ee.forEach(function(se){se.type!=="bar"&&se.type!=="column"&&se.type!=="candlestick"&&se.type!=="boxPlot"||ie++,se.type!==void 0&&ae++}),ae>0&&(te=!0),{comboBarCount:ie,comboCharts:te}}},{key:"extendArrayProps",value:function(ee,te,ie){return te.yaxis&&(te=ee.extendYAxis(te,ie)),te.annotations&&(te.annotations.yaxis&&(te=ee.extendYAxisAnnotations(te)),te.annotations.xaxis&&(te=ee.extendXAxisAnnotations(te)),te.annotations.points&&(te=ee.extendPointAnnotations(te))),te}}]),de}(),w=function(){function de(ee){e(this,de),this.w=ee.w,this.annoCtx=ee}return a(de,[{key:"addYaxisAnnotation",value:function(ee,te,ie){var ae,se=this.w,oe=ee.strokeDashArray,re=this._getY1Y2("y1",ee),ne=ee.label.text;if(ee.y2===null||ee.y2===void 0){var le=this.annoCtx.graphics.drawLine(0+ee.offsetX,re+ee.offsetY,this._getYAxisAnnotationWidth(ee),re+ee.offsetY,ee.borderColor,oe,ee.borderWidth);te.appendChild(le.node),ee.id&&le.node.classList.add(ee.id)}else{if((ae=this._getY1Y2("y2",ee))>re){var ce=re;re=ae,ae=ce}var ue=this.annoCtx.graphics.drawRect(0+ee.offsetX,ae+ee.offsetY,this._getYAxisAnnotationWidth(ee),re-ae,0,ee.fillColor,ee.opacity,1,ee.borderColor,oe);ue.node.classList.add("apexcharts-annotation-rect"),ue.attr("clip-path","url(#gridRectMask".concat(se.globals.cuid,")")),te.appendChild(ue.node),ee.id&&ue.node.classList.add(ee.id)}var pe=ee.label.position==="right"?se.globals.gridWidth:0,fe=this.annoCtx.graphics.drawText({x:pe+ee.label.offsetX,y:(ae!=null?ae:re)+ee.label.offsetY-3,text:ne,textAnchor:ee.label.textAnchor,fontSize:ee.label.style.fontSize,fontFamily:ee.label.style.fontFamily,fontWeight:ee.label.style.fontWeight,foreColor:ee.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(ee.label.style.cssClass," ").concat(ee.id?ee.id:"")});fe.attr({rel:ie}),te.appendChild(fe.node)}},{key:"_getY1Y2",value:function(ee,te){var ie,ae=ee==="y1"?te.y:te.y2,se=this.w;if(this.annoCtx.invertAxis){var oe=se.globals.labels.indexOf(ae);se.config.xaxis.convertedCatToNumeric&&(oe=se.globals.categoryLabels.indexOf(ae));var re=se.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(oe+1)+")");re&&(ie=parseFloat(re.getAttribute("y")))}else{var ne;se.config.yaxis[te.yAxisIndex].logarithmic?ne=(ae=new y(this.annoCtx.ctx).getLogVal(ae,te.yAxisIndex))/se.globals.yLogRatio[te.yAxisIndex]:ne=(ae-se.globals.minYArr[te.yAxisIndex])/(se.globals.yRange[te.yAxisIndex]/se.globals.gridHeight),ie=se.globals.gridHeight-ne,se.config.yaxis[te.yAxisIndex]&&se.config.yaxis[te.yAxisIndex].reversed&&(ie=ne)}return ie}},{key:"_getYAxisAnnotationWidth",value:function(ee){var te=this.w;return te.globals.gridWidth,(ee.width.indexOf("%")>-1?te.globals.gridWidth*parseInt(ee.width,10)/100:parseInt(ee.width,10))+ee.offsetX}},{key:"drawYAxisAnnotations",value:function(){var ee=this,te=this.w,ie=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return te.config.annotations.yaxis.map(function(ae,se){ee.addYaxisAnnotation(ae,ie.node,se)}),ie}}]),de}(),k=function(){function de(ee){e(this,de),this.w=ee.w,this.annoCtx=ee}return a(de,[{key:"addPointAnnotation",value:function(ee,te,ie){var ae=this.w,se=0,oe=0,re=0;this.annoCtx.invertAxis&&console.warn("Point annotation is not supported in horizontal bar charts.");var ne=parseFloat(ee.y);if(typeof ee.x=="string"||ae.config.xaxis.type==="category"||ae.config.xaxis.convertedCatToNumeric){var le=ae.globals.labels.indexOf(ee.x);ae.config.xaxis.convertedCatToNumeric&&(le=ae.globals.categoryLabels.indexOf(ee.x)),se=this.annoCtx.helpers.getStringX(ee.x),ee.y===null&&(ne=ae.globals.series[ee.seriesIndex][le])}else se=(ee.x-ae.globals.minX)/(ae.globals.xRange/ae.globals.gridWidth);for(var ce,ue=[],pe=0,fe=0;fe<=ee.seriesIndex;fe++){var me=ae.config.yaxis[fe].seriesName;if(me)for(var ve=fe+1;ve<=ee.seriesIndex;ve++)ae.config.yaxis[ve].seriesName===me&&ue.indexOf(me)===-1&&(pe++,ue.push(me))}if(ae.config.yaxis[ee.yAxisIndex].logarithmic)ce=(ne=new y(this.annoCtx.ctx).getLogVal(ne,ee.yAxisIndex))/ae.globals.yLogRatio[ee.yAxisIndex];else{var be=ee.yAxisIndex+pe;ce=(ne-ae.globals.minYArr[be])/(ae.globals.yRange[be]/ae.globals.gridHeight)}if(oe=ae.globals.gridHeight-ce-parseFloat(ee.label.style.fontSize)-ee.marker.size,re=ae.globals.gridHeight-ce,ae.config.yaxis[ee.yAxisIndex]&&ae.config.yaxis[ee.yAxisIndex].reversed&&(oe=ce+parseFloat(ee.label.style.fontSize)+ee.marker.size,re=ce),p.isNumber(se)){var ye={pSize:ee.marker.size,pointStrokeWidth:ee.marker.strokeWidth,pointFillColor:ee.marker.fillColor,pointStrokeColor:ee.marker.strokeColor,shape:ee.marker.shape,pRadius:ee.marker.radius,class:"apexcharts-point-annotation-marker ".concat(ee.marker.cssClass," ").concat(ee.id?ee.id:"")},_e=this.annoCtx.graphics.drawMarker(se+ee.marker.offsetX,re+ee.marker.offsetY,ye);te.appendChild(_e.node);var Ae=ee.label.text?ee.label.text:"",he=this.annoCtx.graphics.drawText({x:se+ee.label.offsetX,y:oe+ee.label.offsetY,text:Ae,textAnchor:ee.label.textAnchor,fontSize:ee.label.style.fontSize,fontFamily:ee.label.style.fontFamily,fontWeight:ee.label.style.fontWeight,foreColor:ee.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(ee.label.style.cssClass," ").concat(ee.id?ee.id:"")});if(he.attr({rel:ie}),te.appendChild(he.node),ee.customSVG.SVG){var ge=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+ee.customSVG.cssClass});ge.attr({transform:"translate(".concat(se+ee.customSVG.offsetX,", ").concat(oe+ee.customSVG.offsetY,")")}),ge.node.innerHTML=ee.customSVG.SVG,te.appendChild(ge.node)}if(ee.image.path){var xe=ee.image.width?ee.image.width:20,we=ee.image.height?ee.image.height:20;this.annoCtx.addImage({x:se+ee.image.offsetX-xe/2,y:oe+ee.image.offsetY-we/2,width:xe,height:we,path:ee.image.path,appendTo:".apexcharts-point-annotations"})}}}},{key:"drawPointAnnotations",value:function(){var ee=this,te=this.w,ie=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return te.config.annotations.points.map(function(ae,se){ee.addPointAnnotation(ae,ie.node,se)}),ie}}]),de}(),A={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},S=function(){function de(){e(this,de),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={x:0,y:null,yAxisIndex:0,seriesIndex:0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return a(de,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[A],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(ee){return new Date(ee).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(ee){return ee}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(ee){return ee+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(ee){return ee.globals.seriesTotals.reduce(function(te,ie){return te+ie},0)/ee.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(ee){return ee}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(ee){return ee}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(ee){return ee.globals.seriesTotals.reduce(function(te,ie){return te+ie},0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(ee){return ee!==null?ee:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(ee){return ee?ee+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),de}(),C=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.graphics=new b(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new v(this),this.xAxisAnnotations=new m(this),this.yAxisAnnotations=new w(this),this.pointsAnnotations=new k(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return a(de,[{key:"drawAxesAnnotations",value:function(){var ee=this.w;if(ee.globals.axisCharts){for(var te=this.yAxisAnnotations.drawYAxisAnnotations(),ie=this.xAxisAnnotations.drawXAxisAnnotations(),ae=this.pointsAnnotations.drawPointAnnotations(),se=ee.config.chart.animations.enabled,oe=[te,ie,ae],re=[ie.node,te.node,ae.node],ne=0;ne<3;ne++)ee.globals.dom.elGraphical.add(oe[ne]),!se||ee.globals.resized||ee.globals.dataChanged||ee.config.chart.type!=="scatter"&&ee.config.chart.type!=="bubble"&&ee.globals.dataPoints>1&&re[ne].classList.add("apexcharts-element-hidden"),ee.globals.delayedElements.push({el:re[ne],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var ee=this;this.w.config.annotations.images.map(function(te,ie){ee.addImage(te,ie)})}},{key:"drawTextAnnos",value:function(){var ee=this;this.w.config.annotations.texts.map(function(te,ie){ee.addText(te,ie)})}},{key:"addXaxisAnnotation",value:function(ee,te,ie){this.xAxisAnnotations.addXaxisAnnotation(ee,te,ie)}},{key:"addYaxisAnnotation",value:function(ee,te,ie){this.yAxisAnnotations.addYaxisAnnotation(ee,te,ie)}},{key:"addPointAnnotation",value:function(ee,te,ie){this.pointsAnnotations.addPointAnnotation(ee,te,ie)}},{key:"addText",value:function(ee,te){var ie=ee.x,ae=ee.y,se=ee.text,oe=ee.textAnchor,re=ee.foreColor,ne=ee.fontSize,le=ee.fontFamily,ce=ee.fontWeight,ue=ee.cssClass,pe=ee.backgroundColor,fe=ee.borderWidth,me=ee.strokeDashArray,ve=ee.borderRadius,be=ee.borderColor,ye=ee.appendTo,_e=ye===void 0?".apexcharts-annotations":ye,Ae=ee.paddingLeft,he=Ae===void 0?4:Ae,ge=ee.paddingRight,xe=ge===void 0?4:ge,we=ee.paddingBottom,Ce=we===void 0?2:we,Se=ee.paddingTop,ke=Se===void 0?2:Se,Pe=this.w,Ee=this.graphics.drawText({x:ie,y:ae,text:se,textAnchor:oe||"start",fontSize:ne||"12px",fontWeight:ce||"regular",fontFamily:le||Pe.config.chart.fontFamily,foreColor:re||Pe.config.chart.foreColor,cssClass:ue}),Ie=Pe.globals.dom.baseEl.querySelector(_e);Ie&&Ie.appendChild(Ee.node);var Te=Ee.bbox();if(se){var Le=this.graphics.drawRect(Te.x-he,Te.y-ke,Te.width+he+xe,Te.height+Ce+ke,ve,pe||"transparent",1,fe,be,me);Ie.insertBefore(Le.node,Ee.node)}}},{key:"addImage",value:function(ee,te){var ie=this.w,ae=ee.path,se=ee.x,oe=se===void 0?0:se,re=ee.y,ne=re===void 0?0:re,le=ee.width,ce=le===void 0?20:le,ue=ee.height,pe=ue===void 0?20:ue,fe=ee.appendTo,me=fe===void 0?".apexcharts-annotations":fe,ve=ie.globals.dom.Paper.image(ae);ve.size(ce,pe).move(oe,ne);var be=ie.globals.dom.baseEl.querySelector(me);be&&be.appendChild(ve.node)}},{key:"addXaxisAnnotationExternal",value:function(ee,te,ie){return this.addAnnotationExternal({params:ee,pushToMemory:te,context:ie,type:"xaxis",contextMethod:ie.addXaxisAnnotation}),ie}},{key:"addYaxisAnnotationExternal",value:function(ee,te,ie){return this.addAnnotationExternal({params:ee,pushToMemory:te,context:ie,type:"yaxis",contextMethod:ie.addYaxisAnnotation}),ie}},{key:"addPointAnnotationExternal",value:function(ee,te,ie){return this.invertAxis===void 0&&(this.invertAxis=ie.w.globals.isBarHorizontal),this.addAnnotationExternal({params:ee,pushToMemory:te,context:ie,type:"point",contextMethod:ie.addPointAnnotation}),ie}},{key:"addAnnotationExternal",value:function(ee){var te=ee.params,ie=ee.pushToMemory,ae=ee.context,se=ee.type,oe=ee.contextMethod,re=ae,ne=re.w,le=ne.globals.dom.baseEl.querySelector(".apexcharts-".concat(se,"-annotations")),ce=le.childNodes.length+1,ue=new S,pe=Object.assign({},se==="xaxis"?ue.xAxisAnnotation:se==="yaxis"?ue.yAxisAnnotation:ue.pointAnnotation),fe=p.extend(pe,te);switch(se){case"xaxis":this.addXaxisAnnotation(fe,le,ce);break;case"yaxis":this.addYaxisAnnotation(fe,le,ce);break;case"point":this.addPointAnnotation(fe,le,ce)}var me=ne.globals.dom.baseEl.querySelector(".apexcharts-".concat(se,"-annotations .apexcharts-").concat(se,"-annotation-label[rel='").concat(ce,"']")),ve=this.helpers.addBackgroundToAnno(me,fe);return ve&&le.insertBefore(ve.node,me),ie&&ne.globals.memory.methodsToExec.push({context:re,id:fe.id?fe.id:p.randomId(),method:oe,label:"addAnnotation",params:te}),ae}},{key:"clearAnnotations",value:function(ee){var te=ee.w,ie=te.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");te.globals.memory.methodsToExec.map(function(ae,se){ae.label!=="addText"&&ae.label!=="addAnnotation"||te.globals.memory.methodsToExec.splice(se,1)}),ie=p.listToArray(ie),Array.prototype.forEach.call(ie,function(ae){for(;ae.firstChild;)ae.removeChild(ae.firstChild)})}},{key:"removeAnnotation",value:function(ee,te){var ie=ee.w,ae=ie.globals.dom.baseEl.querySelectorAll(".".concat(te));ae&&(ie.globals.memory.methodsToExec.map(function(se,oe){se.id===te&&ie.globals.memory.methodsToExec.splice(oe,1)}),Array.prototype.forEach.call(ae,function(se){se.parentElement.removeChild(se)}))}}]),de}(),L=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.opts=null,this.seriesIndex=0}return a(de,[{key:"clippedImgArea",value:function(ee){var te=this.w,ie=te.config,ae=parseInt(te.globals.gridWidth,10),se=parseInt(te.globals.gridHeight,10),oe=ae>se?ae:se,re=ee.image,ne=0,le=0;ee.width===void 0&&ee.height===void 0?ie.fill.image.width!==void 0&&ie.fill.image.height!==void 0?(ne=ie.fill.image.width+1,le=ie.fill.image.height):(ne=oe+1,le=oe):(ne=ee.width,le=ee.height);var ce=document.createElementNS(te.globals.SVGNS,"pattern");b.setAttrs(ce,{id:ee.patternID,patternUnits:ee.patternUnits?ee.patternUnits:"userSpaceOnUse",width:ne+"px",height:le+"px"});var ue=document.createElementNS(te.globals.SVGNS,"image");ce.appendChild(ue),ue.setAttributeNS(window.SVG.xlink,"href",re),b.setAttrs(ue,{x:0,y:0,preserveAspectRatio:"none",width:ne+"px",height:le+"px"}),ue.style.opacity=ee.opacity,te.globals.dom.elDefs.node.appendChild(ce)}},{key:"getSeriesIndex",value:function(ee){var te=this.w;return(te.config.chart.type==="bar"||te.config.chart.type==="rangeBar")&&te.config.plotOptions.bar.distributed||te.config.chart.type==="heatmap"||te.config.chart.type==="treemap"?this.seriesIndex=ee.seriesNumber:this.seriesIndex=ee.seriesNumber%te.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(ee){var te=this.w;this.opts=ee;var ie,ae,se,oe=this.w.config;this.seriesIndex=this.getSeriesIndex(ee);var re=this.getFillColors()[this.seriesIndex];te.globals.seriesColors[this.seriesIndex]!==void 0&&(re=te.globals.seriesColors[this.seriesIndex]),typeof re=="function"&&(re=re({seriesIndex:this.seriesIndex,dataPointIndex:ee.dataPointIndex,value:ee.value,w:te}));var ne=this.getFillType(this.seriesIndex),le=Array.isArray(oe.fill.opacity)?oe.fill.opacity[this.seriesIndex]:oe.fill.opacity;ee.color&&(re=ee.color);var ce=re;if(re.indexOf("rgb")===-1?re.length<9&&(ce=p.hexToRgba(re,le)):re.indexOf("rgba")>-1&&(le=p.getOpacityFromRGBA(re)),ee.opacity&&(le=ee.opacity),ne==="pattern"&&(ae=this.handlePatternFill(ae,re,le,ce)),ne==="gradient"&&(se=this.handleGradientFill(re,le,this.seriesIndex)),ne==="image"){var ue=oe.fill.image.src,pe=ee.patternID?ee.patternID:"";this.clippedImgArea({opacity:le,image:Array.isArray(ue)?ee.seriesNumber<ue.length?ue[ee.seriesNumber]:ue[0]:ue,width:ee.width?ee.width:void 0,height:ee.height?ee.height:void 0,patternUnits:ee.patternUnits,patternID:"pattern".concat(te.globals.cuid).concat(ee.seriesNumber+1).concat(pe)}),ie="url(#pattern".concat(te.globals.cuid).concat(ee.seriesNumber+1).concat(pe,")")}else ie=ne==="gradient"?se:ne==="pattern"?ae:ce;return ee.solid&&(ie=ce),ie}},{key:"getFillType",value:function(ee){var te=this.w;return Array.isArray(te.config.fill.type)?te.config.fill.type[ee]:te.config.fill.type}},{key:"getFillColors",value:function(){var ee=this.w,te=ee.config,ie=this.opts,ae=[];return ee.globals.comboCharts?ee.config.series[this.seriesIndex].type==="line"?Array.isArray(ee.globals.stroke.colors)?ae=ee.globals.stroke.colors:ae.push(ee.globals.stroke.colors):Array.isArray(ee.globals.fill.colors)?ae=ee.globals.fill.colors:ae.push(ee.globals.fill.colors):te.chart.type==="line"?Array.isArray(ee.globals.stroke.colors)?ae=ee.globals.stroke.colors:ae.push(ee.globals.stroke.colors):Array.isArray(ee.globals.fill.colors)?ae=ee.globals.fill.colors:ae.push(ee.globals.fill.colors),ie.fillColors!==void 0&&(ae=[],Array.isArray(ie.fillColors)?ae=ie.fillColors.slice():ae.push(ie.fillColors)),ae}},{key:"handlePatternFill",value:function(ee,te,ie,ae){var se=this.w.config,oe=this.opts,re=new b(this.ctx),ne=se.fill.pattern.strokeWidth===void 0?Array.isArray(se.stroke.width)?se.stroke.width[this.seriesIndex]:se.stroke.width:Array.isArray(se.fill.pattern.strokeWidth)?se.fill.pattern.strokeWidth[this.seriesIndex]:se.fill.pattern.strokeWidth,le=te;return Array.isArray(se.fill.pattern.style)?ee=se.fill.pattern.style[oe.seriesNumber]!==void 0?re.drawPattern(se.fill.pattern.style[oe.seriesNumber],se.fill.pattern.width,se.fill.pattern.height,le,ne,ie):ae:ee=re.drawPattern(se.fill.pattern.style,se.fill.pattern.width,se.fill.pattern.height,le,ne,ie),ee}},{key:"handleGradientFill",value:function(ee,te,ie){var ae,se=this.w.config,oe=this.opts,re=new b(this.ctx),ne=new p,le=se.fill.gradient.type,ce=ee,ue=se.fill.gradient.opacityFrom===void 0?te:Array.isArray(se.fill.gradient.opacityFrom)?se.fill.gradient.opacityFrom[ie]:se.fill.gradient.opacityFrom;ce.indexOf("rgba")>-1&&(ue=p.getOpacityFromRGBA(ce));var pe=se.fill.gradient.opacityTo===void 0?te:Array.isArray(se.fill.gradient.opacityTo)?se.fill.gradient.opacityTo[ie]:se.fill.gradient.opacityTo;if(se.fill.gradient.gradientToColors===void 0||se.fill.gradient.gradientToColors.length===0)ae=se.fill.gradient.shade==="dark"?ne.shadeColor(-1*parseFloat(se.fill.gradient.shadeIntensity),ee.indexOf("rgb")>-1?p.rgb2hex(ee):ee):ne.shadeColor(parseFloat(se.fill.gradient.shadeIntensity),ee.indexOf("rgb")>-1?p.rgb2hex(ee):ee);else if(se.fill.gradient.gradientToColors[oe.seriesNumber]){var fe=se.fill.gradient.gradientToColors[oe.seriesNumber];ae=fe,fe.indexOf("rgba")>-1&&(pe=p.getOpacityFromRGBA(fe))}else ae=ee;if(se.fill.gradient.inverseColors){var me=ce;ce=ae,ae=me}return ce.indexOf("rgb")>-1&&(ce=p.rgb2hex(ce)),ae.indexOf("rgb")>-1&&(ae=p.rgb2hex(ae)),re.drawGradient(le,ce,ae,ue,pe,oe.size,se.fill.gradient.stops,se.fill.gradient.colorStops,ie)}}]),de}(),P=function(){function de(ee,te){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"setGlobalMarkerSize",value:function(){var ee=this.w;if(ee.globals.markers.size=Array.isArray(ee.config.markers.size)?ee.config.markers.size:[ee.config.markers.size],ee.globals.markers.size.length>0){if(ee.globals.markers.size.length<ee.globals.series.length+1)for(var te=0;te<=ee.globals.series.length;te++)ee.globals.markers.size[te]===void 0&&ee.globals.markers.size.push(ee.globals.markers.size[0])}else ee.globals.markers.size=ee.config.series.map(function(ie){return ee.config.markers.size})}},{key:"plotChartMarkers",value:function(ee,te,ie,ae){var se,oe=arguments.length>4&&arguments[4]!==void 0&&arguments[4],re=this.w,ne=te,le=ee,ce=null,ue=new b(this.ctx);if((re.globals.markers.size[te]>0||oe)&&(ce=ue.group({class:oe?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(re.globals.cuid,")")),Array.isArray(le.x))for(var pe=0;pe<le.x.length;pe++){var fe=ie;ie===1&&pe===0&&(fe=0),ie===1&&pe===1&&(fe=1);var me="apexcharts-marker";re.config.chart.type!=="line"&&re.config.chart.type!=="area"||re.globals.comboCharts||re.config.tooltip.intersect||(me+=" no-pointer-events");var ve=Array.isArray(re.config.markers.size)?re.globals.markers.size[te]>0:re.config.markers.size>0;if(ve||oe){p.isNumber(le.y[pe])?me+=" w".concat(p.randomId()):me="apexcharts-nullpoint";var be=this.getMarkerConfig({cssClass:me,seriesIndex:te,dataPointIndex:fe});re.config.series[ne].data[fe]&&(re.config.series[ne].data[fe].fillColor&&(be.pointFillColor=re.config.series[ne].data[fe].fillColor),re.config.series[ne].data[fe].strokeColor&&(be.pointStrokeColor=re.config.series[ne].data[fe].strokeColor)),ae&&(be.pSize=ae),(se=ue.drawMarker(le.x[pe],le.y[pe],be)).attr("rel",fe),se.attr("j",fe),se.attr("index",te),se.node.setAttribute("default-marker-size",be.pSize);var ye=new x(this.ctx);ye.setSelectionFilter(se,te,fe),this.addEvents(se),ce&&ce.add(se)}else re.globals.pointsArray[te]===void 0&&(re.globals.pointsArray[te]=[]),re.globals.pointsArray[te].push([le.x[pe],le.y[pe]])}return ce}},{key:"getMarkerConfig",value:function(ee){var te=ee.cssClass,ie=ee.seriesIndex,ae=ee.dataPointIndex,se=ae===void 0?null:ae,oe=ee.finishRadius,re=oe===void 0?null:oe,ne=this.w,le=this.getMarkerStyle(ie),ce=ne.globals.markers.size[ie],ue=ne.config.markers;return se!==null&&ue.discrete.length&&ue.discrete.map(function(pe){pe.seriesIndex===ie&&pe.dataPointIndex===se&&(le.pointStrokeColor=pe.strokeColor,le.pointFillColor=pe.fillColor,ce=pe.size,le.pointShape=pe.shape)}),{pSize:re===null?ce:re,pRadius:ue.radius,width:Array.isArray(ue.width)?ue.width[ie]:ue.width,height:Array.isArray(ue.height)?ue.height[ie]:ue.height,pointStrokeWidth:Array.isArray(ue.strokeWidth)?ue.strokeWidth[ie]:ue.strokeWidth,pointStrokeColor:le.pointStrokeColor,pointFillColor:le.pointFillColor,shape:le.pointShape||(Array.isArray(ue.shape)?ue.shape[ie]:ue.shape),class:te,pointStrokeOpacity:Array.isArray(ue.strokeOpacity)?ue.strokeOpacity[ie]:ue.strokeOpacity,pointStrokeDashArray:Array.isArray(ue.strokeDashArray)?ue.strokeDashArray[ie]:ue.strokeDashArray,pointFillOpacity:Array.isArray(ue.fillOpacity)?ue.fillOpacity[ie]:ue.fillOpacity,seriesIndex:ie}}},{key:"addEvents",value:function(ee){var te=this.w,ie=new b(this.ctx);ee.node.addEventListener("mouseenter",ie.pathMouseEnter.bind(this.ctx,ee)),ee.node.addEventListener("mouseleave",ie.pathMouseLeave.bind(this.ctx,ee)),ee.node.addEventListener("mousedown",ie.pathMouseDown.bind(this.ctx,ee)),ee.node.addEventListener("click",te.config.markers.onClick),ee.node.addEventListener("dblclick",te.config.markers.onDblClick),ee.node.addEventListener("touchstart",ie.pathMouseDown.bind(this.ctx,ee),{passive:!0})}},{key:"getMarkerStyle",value:function(ee){var te=this.w,ie=te.globals.markers.colors,ae=te.config.markers.strokeColor||te.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(ae)?ae[ee]:ae,pointFillColor:Array.isArray(ie)?ie[ee]:ie}}}]),de}(),M=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return a(de,[{key:"draw",value:function(ee,te,ie){var ae=this.w,se=new b(this.ctx),oe=ie.realIndex,re=ie.pointsPos,ne=ie.zRatio,le=ie.elParent,ce=se.group({class:"apexcharts-series-markers apexcharts-series-".concat(ae.config.chart.type)});if(ce.attr("clip-path","url(#gridRectMarkerMask".concat(ae.globals.cuid,")")),Array.isArray(re.x))for(var ue=0;ue<re.x.length;ue++){var pe=te+1,fe=!0;te===0&&ue===0&&(pe=0),te===0&&ue===1&&(pe=1);var me=0,ve=ae.globals.markers.size[oe];if(ne!==1/0){ve=ae.globals.seriesZ[oe][pe]/ne;var be=ae.config.plotOptions.bubble;be.minBubbleRadius&&ve<be.minBubbleRadius&&(ve=be.minBubbleRadius),be.maxBubbleRadius&&ve>be.maxBubbleRadius&&(ve=be.maxBubbleRadius)}ae.config.chart.animations.enabled||(me=ve);var ye=re.x[ue],_e=re.y[ue];if(me=me||0,_e!==null&&ae.globals.series[oe][pe]!==void 0||(fe=!1),fe){var Ae=this.drawPoint(ye,_e,me,ve,oe,pe,te);ce.add(Ae)}le.add(ce)}}},{key:"drawPoint",value:function(ee,te,ie,ae,se,oe,re){var ne=this.w,le=se,ce=new f(this.ctx),ue=new x(this.ctx),pe=new L(this.ctx),fe=new P(this.ctx),me=new b(this.ctx),ve=fe.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:le,dataPointIndex:oe,finishRadius:ne.config.chart.type==="bubble"||ne.globals.comboCharts&&ne.config.series[se]&&ne.config.series[se].type==="bubble"?ae:null});ae=ve.pSize;var be,ye=pe.fillPath({seriesNumber:se,dataPointIndex:oe,color:ve.pointFillColor,patternUnits:"objectBoundingBox",value:ne.globals.series[se][re]});if(ve.shape==="circle"?be=me.drawCircle(ie):ve.shape!=="square"&&ve.shape!=="rect"||(be=me.drawRect(0,0,ve.width-ve.pointStrokeWidth/2,ve.height-ve.pointStrokeWidth/2,ve.pRadius)),ne.config.series[le].data[oe]&&ne.config.series[le].data[oe].fillColor&&(ye=ne.config.series[le].data[oe].fillColor),be.attr({x:ee-ve.width/2-ve.pointStrokeWidth/2,y:te-ve.height/2-ve.pointStrokeWidth/2,cx:ee,cy:te,fill:ye,"fill-opacity":ve.pointFillOpacity,stroke:ve.pointStrokeColor,r:ae,"stroke-width":ve.pointStrokeWidth,"stroke-dasharray":ve.pointStrokeDashArray,"stroke-opacity":ve.pointStrokeOpacity}),ne.config.chart.dropShadow.enabled){var _e=ne.config.chart.dropShadow;ue.dropShadow(be,_e,se)}if(!this.initialAnim||ne.globals.dataChanged||ne.globals.resized)ne.globals.animationEnded=!0;else{var Ae=ne.config.chart.animations.speed;ce.animateMarker(be,0,ve.shape==="circle"?ae:{width:ve.width,height:ve.height},Ae,ne.globals.easing,function(){window.setTimeout(function(){ce.animationCompleted(be)},100)})}if(ne.globals.dataChanged&&ve.shape==="circle")if(this.dynamicAnim){var he,ge,xe,we,Ce=ne.config.chart.animations.dynamicAnimation.speed;(we=ne.globals.previousPaths[se]&&ne.globals.previousPaths[se][re])!=null&&(he=we.x,ge=we.y,xe=we.r!==void 0?we.r:ae);for(var Se=0;Se<ne.globals.collapsedSeries.length;Se++)ne.globals.collapsedSeries[Se].index===se&&(Ce=1,ae=0);ee===0&&te===0&&(ae=0),ce.animateCircle(be,{cx:he,cy:ge,r:xe},{cx:ee,cy:te,r:ae},Ce,ne.globals.easing)}else be.attr({r:ae});return be.attr({rel:oe,j:oe,index:se,"default-marker-size":ae}),ue.setSelectionFilter(be,se,oe),fe.addEvents(be),be.node.classList.add("apexcharts-marker"),be}},{key:"centerTextInBubble",value:function(ee){var te=this.w;return{y:ee+=parseInt(te.config.dataLabels.style.fontSize,10)/4}}}]),de}(),T=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"dataLabelsCorrection",value:function(ee,te,ie,ae,se,oe,re){var ne=this.w,le=!1,ce=new b(this.ctx).getTextRects(ie,re),ue=ce.width,pe=ce.height;te<0&&(te=0),te>ne.globals.gridHeight+pe&&(te=ne.globals.gridHeight+pe/2),ne.globals.dataLabelsRects[ae]===void 0&&(ne.globals.dataLabelsRects[ae]=[]),ne.globals.dataLabelsRects[ae].push({x:ee,y:te,width:ue,height:pe});var fe=ne.globals.dataLabelsRects[ae].length-2,me=ne.globals.lastDrawnDataLabelsIndexes[ae]!==void 0?ne.globals.lastDrawnDataLabelsIndexes[ae][ne.globals.lastDrawnDataLabelsIndexes[ae].length-1]:0;if(ne.globals.dataLabelsRects[ae][fe]!==void 0){var ve=ne.globals.dataLabelsRects[ae][me];(ee>ve.x+ve.width+2||te>ve.y+ve.height+2||ee+ue<ve.x)&&(le=!0)}return(se===0||oe)&&(le=!0),{x:ee,y:te,textRects:ce,drawnextLabel:le}}},{key:"drawDataLabel",value:function(ee,te,ie){var ae=this,se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:2,oe=this.w,re=new b(this.ctx),ne=oe.config.dataLabels,le=0,ce=0,ue=ie,pe=null;if(!ne.enabled||!Array.isArray(ee.x))return pe;pe=re.group({class:"apexcharts-data-labels"});for(var fe=0;fe<ee.x.length;fe++)if(le=ee.x[fe]+ne.offsetX,ce=ee.y[fe]+ne.offsetY+se,!isNaN(le)){ie===1&&fe===0&&(ue=0),ie===1&&fe===1&&(ue=1);var me=oe.globals.series[te][ue],ve="",be=function(Ae){return oe.config.dataLabels.formatter(Ae,{ctx:ae.ctx,seriesIndex:te,dataPointIndex:ue,w:oe})};if(oe.config.chart.type==="bubble"){ve=be(me=oe.globals.seriesZ[te][ue]),ce=ee.y[fe];var ye=new M(this.ctx),_e=ye.centerTextInBubble(ce,te,ue);ce=_e.y}else me!==void 0&&(ve=be(me));this.plotDataLabelsText({x:le,y:ce,text:ve,i:te,j:ue,parent:pe,offsetCorrection:!0,dataLabelsConfig:oe.config.dataLabels})}return pe}},{key:"plotDataLabelsText",value:function(ee){var te=this.w,ie=new b(this.ctx),ae=ee.x,se=ee.y,oe=ee.i,re=ee.j,ne=ee.text,le=ee.textAnchor,ce=ee.fontSize,ue=ee.parent,pe=ee.dataLabelsConfig,fe=ee.color,me=ee.alwaysDrawDataLabel,ve=ee.offsetCorrection;if(!(Array.isArray(te.config.dataLabels.enabledOnSeries)&&te.config.dataLabels.enabledOnSeries.indexOf(oe)<0)){var be={x:ae,y:se,drawnextLabel:!0};ve&&(be=this.dataLabelsCorrection(ae,se,ne,oe,re,me,parseInt(pe.style.fontSize,10))),te.globals.zoomed||(ae=be.x,se=be.y),be.textRects&&(ae<-10-be.textRects.width||ae>te.globals.gridWidth+be.textRects.width+10)&&(ne="");var ye=te.globals.dataLabels.style.colors[oe];((te.config.chart.type==="bar"||te.config.chart.type==="rangeBar")&&te.config.plotOptions.bar.distributed||te.config.dataLabels.distributed)&&(ye=te.globals.dataLabels.style.colors[re]),typeof ye=="function"&&(ye=ye({series:te.globals.series,seriesIndex:oe,dataPointIndex:re,w:te})),fe&&(ye=fe);var _e=pe.offsetX,Ae=pe.offsetY;if(te.config.chart.type!=="bar"&&te.config.chart.type!=="rangeBar"||(_e=0,Ae=0),be.drawnextLabel){var he=ie.drawText({width:100,height:parseInt(pe.style.fontSize,10),x:ae+_e,y:se+Ae,foreColor:ye,textAnchor:le||pe.textAnchor,text:ne,fontSize:ce||pe.style.fontSize,fontFamily:pe.style.fontFamily,fontWeight:pe.style.fontWeight||"normal"});if(he.attr({class:"apexcharts-datalabel",cx:ae,cy:se}),pe.dropShadow.enabled){var ge=pe.dropShadow;new x(this.ctx).dropShadow(he,ge)}ue.add(he),te.globals.lastDrawnDataLabelsIndexes[oe]===void 0&&(te.globals.lastDrawnDataLabelsIndexes[oe]=[]),te.globals.lastDrawnDataLabelsIndexes[oe].push(re)}}}},{key:"addBackgroundToDataLabel",value:function(ee,te){var ie=this.w,ae=ie.config.dataLabels.background,se=ae.padding,oe=ae.padding/2,re=te.width,ne=te.height,le=new b(this.ctx).drawRect(te.x-se,te.y-oe/2,re+2*se,ne+oe,ae.borderRadius,ie.config.chart.background==="transparent"?"#fff":ie.config.chart.background,ae.opacity,ae.borderWidth,ae.borderColor);return ae.dropShadow.enabled&&new x(this.ctx).dropShadow(le,ae.dropShadow),le}},{key:"dataLabelsBackground",value:function(){var ee=this.w;if(ee.config.chart.type!=="bubble")for(var te=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),ie=0;ie<te.length;ie++){var ae=te[ie],se=ae.getBBox(),oe=null;if(se.width&&se.height&&(oe=this.addBackgroundToDataLabel(ae,se)),oe){ae.parentNode.insertBefore(oe.node,ae);var re=ae.getAttribute("fill");ee.config.chart.animations.enabled&&!ee.globals.resized&&!ee.globals.dataChanged?oe.animate().attr({fill:re}):oe.attr({fill:re}),ae.setAttribute("fill",ee.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var ee=this.w,te=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),ie=ee.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),ae=0;ae<te.length;ae++)ie&&ie.insertBefore(te[ae],ie.nextSibling)}}]),de}(),I=function(){function de(ee){e(this,de),this.w=ee.w,this.barCtx=ee}return a(de,[{key:"handleBarDataLabels",value:function(ee){var te=ee.x,ie=ee.y,ae=ee.y1,se=ee.y2,oe=ee.i,re=ee.j,ne=ee.realIndex,le=ee.series,ce=ee.barHeight,ue=ee.barWidth,pe=ee.barYPosition,fe=ee.visibleSeries,me=ee.renderedPath,ve=this.w,be=new b(this.barCtx.ctx),ye=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[ne]:this.barCtx.strokeWidth,_e=te+parseFloat(ue*fe),Ae=ie+parseFloat(ce*fe);ve.globals.isXNumeric&&!ve.globals.isBarHorizontal&&(_e=te+parseFloat(ue*(fe+1)),Ae=ie+parseFloat(ce*(fe+1))-ye);var he=te,ge=ie,xe={},we=ve.config.dataLabels,Ce=this.barCtx.barOptions.dataLabels;pe!==void 0&&this.barCtx.isRangeBar&&(Ae=pe,ge=pe);var Se=we.offsetX,ke=we.offsetY,Pe={width:0,height:0};if(ve.config.dataLabels.enabled){var Ee=this.barCtx.series[oe][re];Pe=be.getTextRects(ve.globals.yLabelFormatters[0](Ee),parseFloat(we.style.fontSize))}var Ie={x:te,y:ie,i:oe,j:re,renderedPath:me,bcx:_e,bcy:Ae,barHeight:ce,barWidth:ue,textRects:Pe,strokeWidth:ye,dataLabelsX:he,dataLabelsY:ge,barDataLabelsConfig:Ce,offX:Se,offY:ke};return xe=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(Ie):this.calculateColumnsDataLabelsPosition(Ie),me.attr({cy:xe.bcy,cx:xe.bcx,j:re,val:le[oe][re],barHeight:ce,barWidth:ue}),this.drawCalculatedDataLabels({x:xe.dataLabelsX,y:xe.dataLabelsY,val:this.barCtx.isRangeBar?[ae,se]:le[oe][re],i:ne,j:re,barWidth:ue,barHeight:ce,textRects:Pe,dataLabelsConfig:we})}},{key:"calculateColumnsDataLabelsPosition",value:function(ee){var te,ie=this.w,ae=ee.i,se=ee.j,oe=ee.y,re=ee.bcx,ne=ee.barWidth,le=ee.barHeight,ce=ee.textRects,ue=ee.dataLabelsY,pe=ee.barDataLabelsConfig,fe=ee.strokeWidth,me=ee.offX,ve=ee.offY;le=Math.abs(le);var be=ie.config.plotOptions.bar.dataLabels.orientation==="vertical";re-=fe/2;var ye=ie.globals.gridWidth/ie.globals.dataPoints;te=ie.globals.isXNumeric?re-ne/2+me:re-ye+ne/2+me,be&&(te=te+ce.height/2-fe/2-2);var _e=this.barCtx.series[ae][se]<0,Ae=oe;switch(this.barCtx.isReversed&&(Ae=oe-le+(_e?2*le:0),oe-=le),pe.position){case"center":ue=be?_e?Ae+le/2+ve:Ae+le/2-ve:_e?Ae-le/2+ce.height/2+ve:Ae+le/2+ce.height/2-ve;break;case"bottom":ue=be?_e?Ae+le+ve:Ae+le-ve:_e?Ae-le+ce.height+fe+ve:Ae+le-ce.height/2+fe-ve;break;case"top":ue=be?_e?Ae+ve:Ae-ve:_e?Ae-ce.height/2-ve:Ae+ce.height+ve}return ie.config.chart.stacked||(ue<0?ue=0+fe:ue+ce.height/3>ie.globals.gridHeight&&(ue=ie.globals.gridHeight-fe)),{bcx:re,bcy:oe,dataLabelsX:te,dataLabelsY:ue}}},{key:"calculateBarsDataLabelsPosition",value:function(ee){var te=this.w,ie=ee.x,ae=ee.i,se=ee.j,oe=ee.bcy,re=ee.barHeight,ne=ee.barWidth,le=ee.textRects,ce=ee.dataLabelsX,ue=ee.strokeWidth,pe=ee.barDataLabelsConfig,fe=ee.offX,me=ee.offY,ve=te.globals.gridHeight/te.globals.dataPoints;ne=Math.abs(ne);var be=oe-(this.barCtx.isRangeBar?0:ve)+re/2+le.height/2+me-3,ye=this.barCtx.series[ae][se]<0,_e=ie;switch(this.barCtx.isReversed&&(_e=ie+ne-(ye?2*ne:0),ie=te.globals.gridWidth-ne),pe.position){case"center":ce=ye?_e+ne/2-fe:Math.max(le.width/2,_e-ne/2)+fe;break;case"bottom":ce=ye?_e+ne-ue-Math.round(le.width/2)-fe:_e-ne+ue+Math.round(le.width/2)+fe;break;case"top":ce=ye?_e-ue+Math.round(le.width/2)-fe:_e-ue-Math.round(le.width/2)+fe}return te.config.chart.stacked||(ce<0?ce=ce+le.width+ue:ce+le.width/2>te.globals.gridWidth&&(ce=te.globals.gridWidth-le.width-ue)),{bcx:ie,bcy:oe,dataLabelsX:ce,dataLabelsY:be}}},{key:"drawCalculatedDataLabels",value:function(ee){var te=ee.x,ie=ee.y,ae=ee.val,se=ee.i,oe=ee.j,re=ee.textRects,ne=ee.barHeight,le=ee.barWidth,ce=ee.dataLabelsConfig,ue=this.w,pe="rotate(0)";ue.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(pe="rotate(-90, ".concat(te,", ").concat(ie,")"));var fe=new T(this.barCtx.ctx),me=new b(this.barCtx.ctx),ve=ce.formatter,be=null,ye=ue.globals.collapsedSeriesIndices.indexOf(se)>-1;if(ce.enabled&&!ye){be=me.group({class:"apexcharts-data-labels",transform:pe});var _e="";ae!==void 0&&(_e=ve(ae,{seriesIndex:se,dataPointIndex:oe,w:ue}));var Ae=ue.globals.series[se][oe]<0,he=ue.config.plotOptions.bar.dataLabels.position;ue.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(he==="top"&&(ce.textAnchor=Ae?"end":"start"),he==="center"&&(ce.textAnchor="middle"),he==="bottom"&&(ce.textAnchor=Ae?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&le<me.getTextRects(_e,parseFloat(ce.style.fontSize)).width&&(_e=""),ue.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?re.width/1.6>Math.abs(le)&&(_e=""):re.height/1.6>Math.abs(ne)&&(_e=""));var ge=o({},ce);this.barCtx.isHorizontal&&ae<0&&(ce.textAnchor==="start"?ge.textAnchor="end":ce.textAnchor==="end"&&(ge.textAnchor="start")),fe.plotDataLabelsText({x:te,y:ie,text:_e,i:se,j:oe,parent:be,dataLabelsConfig:ge,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return be}}]),de}(),z=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.legendInactiveClass="legend-mouseover-inactive"}return a(de,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(ee){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(p.escapeString(ee),"']"))}},{key:"isSeriesHidden",value:function(ee){var te=this.getSeriesByName(ee),ie=parseInt(te.getAttribute("data:realIndex"),10);return{isHidden:te.classList.contains("apexcharts-series-collapsed"),realIndex:ie}}},{key:"addCollapsedClassToSeries",value:function(ee,te){var ie=this.w;function ae(se){for(var oe=0;oe<se.length;oe++)se[oe].index===te&&ee.node.classList.add("apexcharts-series-collapsed")}ae(ie.globals.collapsedSeries),ae(ie.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(ee){var te=this.isSeriesHidden(ee);return this.ctx.legend.legendHelpers.toggleDataSeries(te.realIndex,te.isHidden),te.isHidden}},{key:"showSeries",value:function(ee){var te=this.isSeriesHidden(ee);te.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(te.realIndex,!0)}},{key:"hideSeries",value:function(ee){var te=this.isSeriesHidden(ee);te.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(te.realIndex,!1)}},{key:"resetSeries",value:function(){var ee=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],ae=this.w,se=p.clone(ae.globals.initialSeries);ae.globals.previousPaths=[],ie?(ae.globals.collapsedSeries=[],ae.globals.ancillaryCollapsedSeries=[],ae.globals.collapsedSeriesIndices=[],ae.globals.ancillaryCollapsedSeriesIndices=[]):se=this.emptyCollapsedSeries(se),ae.config.series=se,ee&&(te&&(ae.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(se,ae.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(ee){for(var te=this.w,ie=0;ie<ee.length;ie++)te.globals.collapsedSeriesIndices.indexOf(ie)>-1&&(ee[ie].data=[]);return ee}},{key:"toggleSeriesOnHover",value:function(ee,te){var ie=this.w;te||(te=ee.target);var ae=ie.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if(ee.type==="mousemove"){var se=parseInt(te.getAttribute("rel"),10)-1,oe=null,re=null;ie.globals.axisCharts||ie.config.chart.type==="radialBar"?ie.globals.axisCharts?(oe=ie.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(se,"']")),re=ie.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(se,"']"))):oe=ie.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(se+1,"']")):oe=ie.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(se+1,"'] path"));for(var ne=0;ne<ae.length;ne++)ae[ne].classList.add(this.legendInactiveClass);oe!==null&&(ie.globals.axisCharts||oe.parentNode.classList.remove(this.legendInactiveClass),oe.classList.remove(this.legendInactiveClass),re!==null&&re.classList.remove(this.legendInactiveClass))}else if(ee.type==="mouseout")for(var le=0;le<ae.length;le++)ae[le].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(ee,te){var ie=this,ae=this.w,se=ae.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),oe=function(ne){for(var le=0;le<se.length;le++)se[le].classList[ne](ie.legendInactiveClass)};if(ee.type==="mousemove"){var re=parseInt(te.getAttribute("rel"),10)-1;oe("add"),function(ne){for(var le=0;le<se.length;le++){var ce=parseInt(se[le].getAttribute("val"),10);ce>=ne.from&&ce<=ne.to&&se[le].classList.remove(ie.legendInactiveClass)}}(ae.config.plotOptions.heatmap.colorScale.ranges[re])}else ee.type==="mouseout"&&oe("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0&&arguments[0],te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"asc",ie=this.w,ae=0;if(ie.config.series.length>1){for(var se=ie.config.series.map(function(re,ne){var le=!1;return ee&&(le=ie.config.series[ne].type==="bar"||ie.config.series[ne].type==="column"),re.data&&re.data.length>0&&!le?ne:-1}),oe=te==="asc"?0:se.length-1;te==="asc"?oe<se.length:oe>=0;te==="asc"?oe++:oe--)if(se[oe]!==-1){ae=se[oe];break}}return ae}},{key:"getPreviousPaths",value:function(){var ee=this.w;function te(oe,re,ne){for(var le=oe[re].childNodes,ce={type:ne,paths:[],realIndex:oe[re].getAttribute("data:realIndex")},ue=0;ue<le.length;ue++)if(le[ue].hasAttribute("pathTo")){var pe=le[ue].getAttribute("pathTo");ce.paths.push({d:pe})}ee.globals.previousPaths.push(ce)}ee.globals.previousPaths=[],["line","area","bar","rangebar","candlestick","radar"].forEach(function(oe){for(var re,ne=(re=oe,ee.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(re,"-series .apexcharts-series"))),le=0;le<ne.length;le++)te(ne,le,oe)}),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var ie=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(ee.config.chart.type," .apexcharts-series"));if(ie.length>0)for(var ae=function(oe){for(var re=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(ee.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(oe,"'] rect")),ne=[],le=function(ue){var pe=function(me){return re[ue].getAttribute(me)},fe={x:parseFloat(pe("x")),y:parseFloat(pe("y")),width:parseFloat(pe("width")),height:parseFloat(pe("height"))};ne.push({rect:fe,color:re[ue].getAttribute("color")})},ce=0;ce<re.length;ce++)le(ce);ee.globals.previousPaths.push(ne)},se=0;se<ie.length;se++)ae(se);ee.globals.axisCharts||(ee.globals.previousPaths=ee.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(ee){var te=this.w,ie=te.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(ee,"-series .apexcharts-series"));if(ie.length>0)for(var ae=0;ae<ie.length;ae++){for(var se=te.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(ee,"-series .apexcharts-series[data\\:realIndex='").concat(ae,"'] circle")),oe=[],re=0;re<se.length;re++)oe.push({x:se[re].getAttribute("cx"),y:se[re].getAttribute("cy"),r:se[re].getAttribute("r")});te.globals.previousPaths.push(oe)}}},{key:"clearPreviousPaths",value:function(){var ee=this.w;ee.globals.previousPaths=[],ee.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var ee=this.w,te=ee.config.noData,ie=new b(this.ctx),ae=ee.globals.svgWidth/2,se=ee.globals.svgHeight/2,oe="middle";if(ee.globals.noData=!0,ee.globals.animationEnded=!0,te.align==="left"?(ae=10,oe="start"):te.align==="right"&&(ae=ee.globals.svgWidth-10,oe="end"),te.verticalAlign==="top"?se=50:te.verticalAlign==="bottom"&&(se=ee.globals.svgHeight-50),ae+=te.offsetX,se=se+parseInt(te.style.fontSize,10)+2+te.offsetY,te.text!==void 0&&te.text!==""){var re=ie.drawText({x:ae,y:se,text:te.text,textAnchor:oe,fontSize:te.style.fontSize,fontFamily:te.style.fontFamily,foreColor:te.style.color,opacity:1,class:"apexcharts-text-nodata"});ee.globals.dom.Paper.add(re)}}},{key:"setNullSeriesToZeroValues",value:function(ee){for(var te=this.w,ie=0;ie<ee.length;ie++)if(ee[ie].length===0)for(var ae=0;ae<ee[te.globals.maxValsInArrayIndex].length;ae++)ee[ie].push(0);return ee}},{key:"hasAllSeriesEqualX",value:function(){for(var ee=!0,te=this.w,ie=this.filteredSeriesX(),ae=0;ae<ie.length-1;ae++)if(ie[ae][0]!==ie[ae+1][0]){ee=!1;break}return te.globals.allSeriesHasEqualX=ee,ee}},{key:"filteredSeriesX",value:function(){var ee=this.w.globals.seriesX.map(function(te){return te.length>0?te:[]});return ee}}]),de}(),X=function(){function de(ee){e(this,de),this.w=ee.w,this.barCtx=ee}return a(de,[{key:"initVariables",value:function(ee){var te=this.w;this.barCtx.series=ee,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var ie=0;ie<ee.length;ie++)if(ee[ie].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=ee[ie].length),te.globals.isXNumeric)for(var ae=0;ae<ee[ie].length;ae++)te.globals.seriesX[ie][ae]>te.globals.minX&&te.globals.seriesX[ie][ae]<te.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=te.globals.dataPoints;this.barCtx.seriesLen===0&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=ee.length-1,te.globals.comboCharts||this.checkZeroSeries({series:ee})}},{key:"initialPositions",value:function(){var ee,te,ie,ae,se,oe,re,ne,le=this.w,ce=le.globals.dataPoints;this.barCtx.isRangeBar&&(ce=le.globals.labels.length);var ue=this.barCtx.seriesLen;if(le.config.plotOptions.bar.rangeBarGroupRows&&(ue=1),this.barCtx.isHorizontal)se=(ie=le.globals.gridHeight/ce)/ue,le.globals.isXNumeric&&(se=(ie=le.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),se=se*parseInt(this.barCtx.barOptions.barHeight,10)/100,ne=this.barCtx.baseLineInvertedY+le.globals.padHorizontal+(this.barCtx.isReversed?le.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),te=(ie-se*this.barCtx.seriesLen)/2;else{if(ae=le.globals.gridWidth/this.barCtx.visibleItems,le.config.xaxis.convertedCatToNumeric&&(ae=le.globals.gridWidth/le.globals.dataPoints),oe=ae/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,le.globals.isXNumeric){var pe=this.barCtx.xRatio;le.config.xaxis.convertedCatToNumeric&&(pe=this.barCtx.initialXRatio),le.globals.minXDiff&&le.globals.minXDiff!==.5&&le.globals.minXDiff/pe>0&&(ae=le.globals.minXDiff/pe),(oe=ae/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(oe=1)}re=le.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?le.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),ee=le.globals.padHorizontal+(ae-oe*this.barCtx.seriesLen)/2}return{x:ee,y:te,yDivision:ie,xDivision:ae,barHeight:se,barWidth:oe,zeroH:re,zeroW:ne}}},{key:"getPathFillColor",value:function(ee,te,ie,ae){var se=this.w,oe=new L(this.barCtx.ctx),re=null,ne=this.barCtx.barOptions.distributed?ie:te;return this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map(function(le){ee[te][ie]>=le.from&&ee[te][ie]<=le.to&&(re=le.color)}),se.config.series[te].data[ie]&&se.config.series[te].data[ie].fillColor&&(re=se.config.series[te].data[ie].fillColor),oe.fillPath({seriesNumber:this.barCtx.barOptions.distributed?ne:ae,dataPointIndex:ie,color:re,value:ee[te][ie]})}},{key:"getStrokeWidth",value:function(ee,te,ie){var ae=0,se=this.w;return this.barCtx.series[ee][te]===void 0||this.barCtx.series[ee][te]===null?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,se.config.stroke.show&&(this.barCtx.isNullValue||(ae=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[ie]:this.barCtx.strokeWidth)),ae}},{key:"barBackground",value:function(ee){var te=ee.j,ie=ee.i,ae=ee.x1,se=ee.x2,oe=ee.y1,re=ee.y2,ne=ee.elSeries,le=this.w,ce=new b(this.barCtx.ctx),ue=new z(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&ue===ie){te>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(te-=this.barCtx.barOptions.colors.backgroundBarColors.length);var pe=this.barCtx.barOptions.colors.backgroundBarColors[te],fe=ce.drawRect(ae!==void 0?ae:0,oe!==void 0?oe:0,se!==void 0?se:le.globals.gridWidth,re!==void 0?re:le.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,pe,this.barCtx.barOptions.colors.backgroundBarOpacity);ne.add(fe),fe.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(ee){var te=ee.barWidth,ie=ee.barXPosition,ae=ee.yRatio,se=ee.y1,oe=ee.y2,re=ee.strokeWidth,ne=ee.series,le=ee.realIndex,ce=ee.i,ue=ee.j,pe=ee.w,fe=new b(this.barCtx.ctx);(re=Array.isArray(re)?re[le]:re)||(re=0);var me={barWidth:te,strokeWidth:re,yRatio:ae,barXPosition:ie,y1:se,y2:oe},ve=this.getRoundedBars(pe,me,ne,ce,ue),be=ie,ye=ie+te,_e=fe.move(be,se),Ae=fe.move(be,se),he=fe.line(ye-re,se);return pe.globals.previousPaths.length>0&&(Ae=this.barCtx.getPreviousPath(le,ue,!1)),_e=_e+fe.line(be,ve.y2)+ve.pathWithRadius+fe.line(ye-re,ve.y2)+he+he+"z",Ae=Ae+fe.line(be,se)+he+he+he+he+he+fe.line(be,se),pe.config.chart.stacked&&(this.barCtx.yArrj.push(ve.y2),this.barCtx.yArrjF.push(Math.abs(se-ve.y2)),this.barCtx.yArrjVal.push(this.barCtx.series[ce][ue])),{pathTo:_e,pathFrom:Ae}}},{key:"getBarpaths",value:function(ee){var te=ee.barYPosition,ie=ee.barHeight,ae=ee.x1,se=ee.x2,oe=ee.strokeWidth,re=ee.series,ne=ee.realIndex,le=ee.i,ce=ee.j,ue=ee.w,pe=new b(this.barCtx.ctx);(oe=Array.isArray(oe)?oe[ne]:oe)||(oe=0);var fe={barHeight:ie,strokeWidth:oe,barYPosition:te,x2:se,x1:ae},me=this.getRoundedBars(ue,fe,re,le,ce),ve=pe.move(ae,te),be=pe.move(ae,te);ue.globals.previousPaths.length>0&&(be=this.barCtx.getPreviousPath(ne,ce,!1));var ye=te,_e=te+ie,Ae=pe.line(ae,_e-oe);return ve=ve+pe.line(me.x2,ye)+me.pathWithRadius+pe.line(me.x2,_e-oe)+Ae+Ae+"z",be=be+pe.line(ae,ye)+Ae+Ae+Ae+Ae+Ae+pe.line(ae,ye),ue.config.chart.stacked&&(this.barCtx.xArrj.push(me.x2),this.barCtx.xArrjF.push(Math.abs(ae-me.x2)),this.barCtx.xArrjVal.push(this.barCtx.series[le][ce])),{pathTo:ve,pathFrom:be}}},{key:"getRoundedBars",value:function(ee,te,ie,ae,se){var oe=new b(this.barCtx.ctx),re=0,ne=ee.config.plotOptions.bar.borderRadius,le=Array.isArray(ne);if(le?re=ne[ae>ne.length-1?ne.length-1:ae]:re=ne,ee.config.chart.stacked&&ie.length>1&&ae!==this.barCtx.radiusOnSeriesNumber&&!le&&(re=0),this.barCtx.isHorizontal){var ce="",ue=te.x2;if(Math.abs(te.x1-te.x2)<re&&(re=Math.abs(te.x1-te.x2)),ie[ae][se]!==void 0||ie[ae][se]!==null){var pe=this.barCtx.isReversed?ie[ae][se]>0:ie[ae][se]<0;pe&&(re*=-1),ue-=re,ce=oe.quadraticCurve(ue+re,te.barYPosition,ue+re,te.barYPosition+(pe?-1*re:re))+oe.line(ue+re,te.barYPosition+te.barHeight-te.strokeWidth-(pe?-1*re:re))+oe.quadraticCurve(ue+re,te.barYPosition+te.barHeight-te.strokeWidth,ue,te.barYPosition+te.barHeight-te.strokeWidth)}return{pathWithRadius:ce,x2:ue}}var fe="",me=te.y2;if(Math.abs(te.y1-te.y2)<re&&(re=Math.abs(te.y1-te.y2)),ie[ae][se]!==void 0||ie[ae][se]!==null){var ve=ie[ae][se]<0;ve&&(re*=-1),me+=re,fe=oe.quadraticCurve(te.barXPosition,me-re,te.barXPosition+(ve?-1*re:re),me-re)+oe.line(te.barXPosition+te.barWidth-te.strokeWidth-(ve?-1*re:re),me-re)+oe.quadraticCurve(te.barXPosition+te.barWidth-te.strokeWidth,me-re,te.barXPosition+te.barWidth-te.strokeWidth,me)}return{pathWithRadius:fe,y2:me}}},{key:"checkZeroSeries",value:function(ee){for(var te=ee.series,ie=this.w,ae=0;ae<te.length;ae++){for(var se=0,oe=0;oe<te[ie.globals.maxValsInArrayIndex].length;oe++)se+=te[ae][oe];se===0&&this.barCtx.zeroSerieses.push(ae)}for(var re=te.length-1;re>=0;re--)this.barCtx.zeroSerieses.indexOf(re)>-1&&re===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var ne=te.length-1;ne>=0;ne--)ie.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(ee,te){var ie=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],ae=ie?te:null;return ee!=null&&(ae=te+ee/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?ee/this.barCtx.invertedYRatio:0)),ae}},{key:"getYForValue",value:function(ee,te){var ie=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],ae=ie?te:null;return ee!=null&&(ae=te-ee/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?ee/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),ae}},{key:"getGoalValues",value:function(ee,te,ie,ae,se){var oe=this,re=this.w,ne=[];return re.globals.seriesGoals[ae]&&re.globals.seriesGoals[ae][se]&&Array.isArray(re.globals.seriesGoals[ae][se])&&re.globals.seriesGoals[ae][se].forEach(function(le){var ce;ne.push((s(ce={},ee,ee==="x"?oe.getXForValue(le.value,te,!1):oe.getYForValue(le.value,ie,!1)),s(ce,"attrs",le),ce))}),ne}},{key:"drawGoalLine",value:function(ee){var te=ee.barXPosition,ie=ee.barYPosition,ae=ee.goalX,se=ee.goalY,oe=ee.barWidth,re=ee.barHeight,ne=new b(this.barCtx.ctx),le=ne.group({className:"apexcharts-bar-goals-groups"}),ce=null;return this.barCtx.isHorizontal?Array.isArray(ae)&&ae.forEach(function(ue){var pe=ue.attrs.strokeHeight!==void 0?ue.attrs.strokeHeight:re/2,fe=ie+pe+re/2;ce=ne.drawLine(ue.x,fe-2*pe,ue.x,fe,ue.attrs.strokeColor?ue.attrs.strokeColor:void 0,ue.attrs.strokeDashArray,ue.attrs.strokeWidth?ue.attrs.strokeWidth:2,ue.attrs.strokeLineCap),le.add(ce)}):Array.isArray(se)&&se.forEach(function(ue){var pe=ue.attrs.strokeWidth!==void 0?ue.attrs.strokeWidth:oe/2,fe=te+pe+oe/2;ce=ne.drawLine(fe-2*pe,ue.y,fe,ue.y,ue.attrs.strokeColor?ue.attrs.strokeColor:void 0,ue.attrs.strokeDashArray,ue.attrs.strokeHeight?ue.attrs.strokeHeight:2,ue.attrs.strokeLineCap),le.add(ce)}),le}}]),de}(),E=function(){function de(ee,te){e(this,de),this.ctx=ee,this.w=ee.w;var ie=this.w;this.barOptions=ie.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=ie.config.stroke.width,this.isNullValue=!1,this.isRangeBar=ie.globals.seriesRangeBar.length&&this.isHorizontal,this.xyRatios=te,this.xyRatios!==null&&(this.xRatio=te.xRatio,this.initialXRatio=te.initialXRatio,this.yRatio=te.yRatio,this.invertedXRatio=te.invertedXRatio,this.invertedYRatio=te.invertedYRatio,this.baseLineY=te.baseLineY,this.baseLineInvertedY=te.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new X(this)}return a(de,[{key:"draw",value:function(ee,te){var ie=this.w,ae=new b(this.ctx),se=new y(this.ctx,ie);ee=se.getLogSeries(ee),this.series=ee,this.yRatio=se.getLogYRatios(this.yRatio),this.barHelpers.initVariables(ee);var oe=ae.group({class:"apexcharts-bar-series apexcharts-plot-series"});ie.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var re=0,ne=0;re<ee.length;re++,ne++){var le,ce,ue,pe,fe=void 0,me=void 0,ve=[],be=[],ye=ie.globals.comboCharts?te[re]:re,_e=ae.group({class:"apexcharts-series",rel:re+1,seriesName:p.escapeString(ie.globals.seriesNames[ye]),"data:realIndex":ye});this.ctx.series.addCollapsedClassToSeries(_e,ye),ee[re].length>0&&(this.visibleI=this.visibleI+1);var Ae=0,he=0;this.yRatio.length>1&&(this.yaxisIndex=ye),this.isReversed=ie.config.yaxis[this.yaxisIndex]&&ie.config.yaxis[this.yaxisIndex].reversed;var ge=this.barHelpers.initialPositions();me=ge.y,Ae=ge.barHeight,ce=ge.yDivision,pe=ge.zeroW,fe=ge.x,he=ge.barWidth,le=ge.xDivision,ue=ge.zeroH,this.horizontal||be.push(fe+he/2);for(var xe=ae.group({class:"apexcharts-datalabels","data:realIndex":ye}),we=ae.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),Ce=0;Ce<ie.globals.dataPoints;Ce++){var Se=this.barHelpers.getStrokeWidth(re,Ce,ye),ke=null,Pe={indexes:{i:re,j:Ce,realIndex:ye,bc:ne},x:fe,y:me,strokeWidth:Se,elSeries:_e};this.isHorizontal?(ke=this.drawBarPaths(o(o({},Pe),{},{barHeight:Ae,zeroW:pe,yDivision:ce})),he=this.series[re][Ce]/this.invertedYRatio):(ke=this.drawColumnPaths(o(o({},Pe),{},{xDivision:le,barWidth:he,zeroH:ue})),Ae=this.series[re][Ce]/this.yRatio[this.yaxisIndex]);var Ee=this.barHelpers.drawGoalLine({barXPosition:ke.barXPosition,barYPosition:ke.barYPosition,goalX:ke.goalX,goalY:ke.goalY,barHeight:Ae,barWidth:he});Ee&&we.add(Ee),me=ke.y,fe=ke.x,Ce>0&&be.push(fe+he/2),ve.push(me);var Ie=this.barHelpers.getPathFillColor(ee,re,Ce,ye);this.renderSeries({realIndex:ye,pathFill:Ie,j:Ce,i:re,pathFrom:ke.pathFrom,pathTo:ke.pathTo,strokeWidth:Se,elSeries:_e,x:fe,y:me,series:ee,barHeight:Ae,barWidth:he,elDataLabelsWrap:xe,elGoalsMarkers:we,visibleSeries:this.visibleI,type:"bar"})}ie.globals.seriesXvalues[ye]=be,ie.globals.seriesYvalues[ye]=ve,oe.add(_e)}return oe}},{key:"renderSeries",value:function(ee){var te=ee.realIndex,ie=ee.pathFill,ae=ee.lineFill,se=ee.j,oe=ee.i,re=ee.pathFrom,ne=ee.pathTo,le=ee.strokeWidth,ce=ee.elSeries,ue=ee.x,pe=ee.y,fe=ee.y1,me=ee.y2,ve=ee.series,be=ee.barHeight,ye=ee.barWidth,_e=ee.barYPosition,Ae=ee.elDataLabelsWrap,he=ee.elGoalsMarkers,ge=ee.visibleSeries,xe=ee.type,we=this.w,Ce=new b(this.ctx);ae||(ae=this.barOptions.distributed?we.globals.stroke.colors[se]:we.globals.stroke.colors[te]),we.config.series[oe].data[se]&&we.config.series[oe].data[se].strokeColor&&(ae=we.config.series[oe].data[se].strokeColor),this.isNullValue&&(ie="none");var Se=se/we.config.chart.animations.animateGradually.delay*(we.config.chart.animations.speed/we.globals.dataPoints)/2.4,ke=Ce.renderPaths({i:oe,j:se,realIndex:te,pathFrom:re,pathTo:ne,stroke:ae,strokeWidth:le,strokeLineCap:we.config.stroke.lineCap,fill:ie,animationDelay:Se,initialSpeed:we.config.chart.animations.speed,dataChangeSpeed:we.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(xe,"-area")});ke.attr("clip-path","url(#gridRectMask".concat(we.globals.cuid,")"));var Pe=we.config.forecastDataPoints;Pe.count>0&&se>=we.globals.dataPoints-Pe.count&&(ke.node.setAttribute("stroke-dasharray",Pe.dashArray),ke.node.setAttribute("stroke-width",Pe.strokeWidth),ke.node.setAttribute("fill-opacity",Pe.fillOpacity)),fe!==void 0&&me!==void 0&&(ke.attr("data-range-y1",fe),ke.attr("data-range-y2",me)),new x(this.ctx).setSelectionFilter(ke,te,se),ce.add(ke);var Ee=new I(this).handleBarDataLabels({x:ue,y:pe,y1:fe,y2:me,i:oe,j:se,series:ve,realIndex:te,barHeight:be,barWidth:ye,barYPosition:_e,renderedPath:ke,visibleSeries:ge});return Ee!==null&&Ae.add(Ee),ce.add(Ae),he&&ce.add(he),ce}},{key:"drawBarPaths",value:function(ee){var te=ee.indexes,ie=ee.barHeight,ae=ee.strokeWidth,se=ee.zeroW,oe=ee.x,re=ee.y,ne=ee.yDivision,le=ee.elSeries,ce=this.w,ue=te.i,pe=te.j;ce.globals.isXNumeric&&(re=(ce.globals.seriesX[ue][pe]-ce.globals.minX)/this.invertedXRatio-ie);var fe=re+ie*this.visibleI;oe=this.barHelpers.getXForValue(this.series[ue][pe],se);var me=this.barHelpers.getBarpaths({barYPosition:fe,barHeight:ie,x1:se,x2:oe,strokeWidth:ae,series:this.series,realIndex:te.realIndex,i:ue,j:pe,w:ce});return ce.globals.isXNumeric||(re+=ne),this.barHelpers.barBackground({j:pe,i:ue,y1:fe-ie*this.visibleI,y2:ie*this.seriesLen,elSeries:le}),{pathTo:me.pathTo,pathFrom:me.pathFrom,x:oe,y:re,goalX:this.barHelpers.getGoalValues("x",se,null,ue,pe),barYPosition:fe}}},{key:"drawColumnPaths",value:function(ee){var te=ee.indexes,ie=ee.x,ae=ee.y,se=ee.xDivision,oe=ee.barWidth,re=ee.zeroH,ne=ee.strokeWidth,le=ee.elSeries,ce=this.w,ue=te.realIndex,pe=te.i,fe=te.j,me=te.bc;if(ce.globals.isXNumeric){var ve=ue;ce.globals.seriesX[ue].length||(ve=ce.globals.maxValsInArrayIndex),ie=(ce.globals.seriesX[ve][fe]-ce.globals.minX)/this.xRatio-oe*this.seriesLen/2}var be=ie+oe*this.visibleI;ae=this.barHelpers.getYForValue(this.series[pe][fe],re);var ye=this.barHelpers.getColumnPaths({barXPosition:be,barWidth:oe,y1:re,y2:ae,strokeWidth:ne,series:this.series,realIndex:te.realIndex,i:pe,j:fe,w:ce});return ce.globals.isXNumeric||(ie+=se),this.barHelpers.barBackground({bc:me,j:fe,i:pe,x1:be-ne/2-oe*this.visibleI,x2:oe*this.seriesLen+ne/2,elSeries:le}),{pathTo:ye.pathTo,pathFrom:ye.pathFrom,x:ie,y:ae,goalY:this.barHelpers.getGoalValues("y",null,re,pe,fe),barXPosition:be}}},{key:"getPreviousPath",value:function(ee,te){for(var ie,ae=this.w,se=0;se<ae.globals.previousPaths.length;se++){var oe=ae.globals.previousPaths[se];oe.paths&&oe.paths.length>0&&parseInt(oe.realIndex,10)===parseInt(ee,10)&&ae.globals.previousPaths[se].paths[te]!==void 0&&(ie=ae.globals.previousPaths[se].paths[te].d)}return ie}}]),de}(),Y=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return a(de,[{key:"isValidDate",value:function(ee){return!isNaN(this.parseDate(ee))}},{key:"getTimeStamp",value:function(ee){return Date.parse(ee)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(ee).toISOString().substr(0,25)).getTime():new Date(ee).getTime():ee}},{key:"getDate",value:function(ee){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(ee).toUTCString()):new Date(ee)}},{key:"parseDate",value:function(ee){var te=Date.parse(ee);if(!isNaN(te))return this.getTimeStamp(ee);var ie=Date.parse(ee.replace(/-/g,"/").replace(/[a-z]+/gi," "));return ie=this.getTimeStamp(ie)}},{key:"parseDateWithTimezone",value:function(ee){return Date.parse(ee.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(ee,te){var ie=this.w.globals.locale,ae=this.w.config.xaxis.labels.datetimeUTC,se=["\0"].concat(g(ie.months)),oe=[""].concat(g(ie.shortMonths)),re=[""].concat(g(ie.days)),ne=[""].concat(g(ie.shortDays));function le(Ce,Se){var ke=Ce+"";for(Se=Se||2;ke.length<Se;)ke="0"+ke;return ke}var ce=ae?ee.getUTCFullYear():ee.getFullYear();te=(te=(te=te.replace(/(^|[^\\])yyyy+/g,"$1"+ce)).replace(/(^|[^\\])yy/g,"$1"+ce.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+ce);var ue=(ae?ee.getUTCMonth():ee.getMonth())+1;te=(te=(te=(te=te.replace(/(^|[^\\])MMMM+/g,"$1"+se[0])).replace(/(^|[^\\])MMM/g,"$1"+oe[0])).replace(/(^|[^\\])MM/g,"$1"+le(ue))).replace(/(^|[^\\])M/g,"$1"+ue);var pe=ae?ee.getUTCDate():ee.getDate();te=(te=(te=(te=te.replace(/(^|[^\\])dddd+/g,"$1"+re[0])).replace(/(^|[^\\])ddd/g,"$1"+ne[0])).replace(/(^|[^\\])dd/g,"$1"+le(pe))).replace(/(^|[^\\])d/g,"$1"+pe);var fe=ae?ee.getUTCHours():ee.getHours(),me=fe>12?fe-12:fe===0?12:fe;te=(te=(te=(te=te.replace(/(^|[^\\])HH+/g,"$1"+le(fe))).replace(/(^|[^\\])H/g,"$1"+fe)).replace(/(^|[^\\])hh+/g,"$1"+le(me))).replace(/(^|[^\\])h/g,"$1"+me);var ve=ae?ee.getUTCMinutes():ee.getMinutes();te=(te=te.replace(/(^|[^\\])mm+/g,"$1"+le(ve))).replace(/(^|[^\\])m/g,"$1"+ve);var be=ae?ee.getUTCSeconds():ee.getSeconds();te=(te=te.replace(/(^|[^\\])ss+/g,"$1"+le(be))).replace(/(^|[^\\])s/g,"$1"+be);var ye=ae?ee.getUTCMilliseconds():ee.getMilliseconds();te=te.replace(/(^|[^\\])fff+/g,"$1"+le(ye,3)),ye=Math.round(ye/10),te=te.replace(/(^|[^\\])ff/g,"$1"+le(ye)),ye=Math.round(ye/10);var _e=fe<12?"AM":"PM";te=(te=(te=te.replace(/(^|[^\\])f/g,"$1"+ye)).replace(/(^|[^\\])TT+/g,"$1"+_e)).replace(/(^|[^\\])T/g,"$1"+_e.charAt(0));var Ae=_e.toLowerCase();te=(te=te.replace(/(^|[^\\])tt+/g,"$1"+Ae)).replace(/(^|[^\\])t/g,"$1"+Ae.charAt(0));var he=-ee.getTimezoneOffset(),ge=ae||!he?"Z":he>0?"+":"-";if(!ae){var xe=(he=Math.abs(he))%60;ge+=le(Math.floor(he/60))+":"+le(xe)}te=te.replace(/(^|[^\\])K/g,"$1"+ge);var we=(ae?ee.getUTCDay():ee.getDay())+1;return te=(te=(te=(te=(te=te.replace(new RegExp(re[0],"g"),re[we])).replace(new RegExp(ne[0],"g"),ne[we])).replace(new RegExp(se[0],"g"),se[ue])).replace(new RegExp(oe[0],"g"),oe[ue])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(ee,te,ie){var ae=this.w;ae.config.xaxis.min!==void 0&&(ee=ae.config.xaxis.min),ae.config.xaxis.max!==void 0&&(te=ae.config.xaxis.max);var se=this.getDate(ee),oe=this.getDate(te),re=this.formatDate(se,"yyyy MM dd HH mm ss fff").split(" "),ne=this.formatDate(oe,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(re[6],10),maxMillisecond:parseInt(ne[6],10),minSecond:parseInt(re[5],10),maxSecond:parseInt(ne[5],10),minMinute:parseInt(re[4],10),maxMinute:parseInt(ne[4],10),minHour:parseInt(re[3],10),maxHour:parseInt(ne[3],10),minDate:parseInt(re[2],10),maxDate:parseInt(ne[2],10),minMonth:parseInt(re[1],10)-1,maxMonth:parseInt(ne[1],10)-1,minYear:parseInt(re[0],10),maxYear:parseInt(ne[0],10)}}},{key:"isLeapYear",value:function(ee){return ee%4==0&&ee%100!=0||ee%400==0}},{key:"calculcateLastDaysOfMonth",value:function(ee,te,ie){return this.determineDaysOfMonths(ee,te)-ie}},{key:"determineDaysOfYear",value:function(ee){var te=365;return this.isLeapYear(ee)&&(te=366),te}},{key:"determineRemainingDaysOfYear",value:function(ee,te,ie){var ae=this.daysCntOfYear[te]+ie;return te>1&&this.isLeapYear()&&ae++,ae}},{key:"determineDaysOfMonths",value:function(ee,te){var ie=30;switch(ee=p.monthMod(ee),!0){case this.months30.indexOf(ee)>-1:ee===2&&(ie=this.isLeapYear(te)?29:28);break;case this.months31.indexOf(ee)>-1:default:ie=31}return ie}}]),de}(),F=function(de){n(te,E);var ee=d(te);function te(){return e(this,te),ee.apply(this,arguments)}return a(te,[{key:"draw",value:function(ie,ae){var se=this.w,oe=new b(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=ie,this.seriesRangeStart=se.globals.seriesRangeStart,this.seriesRangeEnd=se.globals.seriesRangeEnd,this.barHelpers.initVariables(ie);for(var re=oe.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),ne=0;ne<ie.length;ne++){var le,ce,ue,pe=void 0,fe=void 0,me=void 0,ve=se.globals.comboCharts?ae[ne]:ne,be=oe.group({class:"apexcharts-series",seriesName:p.escapeString(se.globals.seriesNames[ve]),rel:ne+1,"data:realIndex":ve});this.ctx.series.addCollapsedClassToSeries(be,ve),ie[ne].length>0&&(this.visibleI=this.visibleI+1);var ye=0,_e=0;this.yRatio.length>1&&(this.yaxisIndex=ve);var Ae=this.barHelpers.initialPositions();fe=Ae.y,ue=Ae.zeroW,pe=Ae.x,_e=Ae.barWidth,le=Ae.xDivision,ce=Ae.zeroH;for(var he=oe.group({class:"apexcharts-datalabels","data:realIndex":ve}),ge=oe.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),xe=0;xe<se.globals.dataPoints;xe++){var we=this.barHelpers.getStrokeWidth(ne,xe,ve),Ce=this.seriesRangeStart[ne][xe],Se=this.seriesRangeEnd[ne][xe],ke=null,Pe=null,Ee={x:pe,y:fe,strokeWidth:we,elSeries:be};if(me=Ae.yDivision,ye=Ae.barHeight,this.isHorizontal){Pe=fe+ye*this.visibleI;var Ie=this.seriesLen;se.config.plotOptions.bar.rangeBarGroupRows&&(Ie=1);var Te=(me-ye*Ie)/2;if(se.config.series[ne].data[xe]===void 0)break;if(se.config.series[ne].data[xe].x){var Le=this.detectOverlappingBars({i:ne,j:xe,barYPosition:Pe,srty:Te,barHeight:ye,yDivision:me,initPositions:Ae});ye=Le.barHeight,Pe=Le.barYPosition}_e=(ke=this.drawRangeBarPaths(o({indexes:{i:ne,j:xe,realIndex:ve},barHeight:ye,barYPosition:Pe,zeroW:ue,yDivision:me,y1:Ce,y2:Se},Ee))).barWidth}else ye=(ke=this.drawRangeColumnPaths(o({indexes:{i:ne,j:xe,realIndex:ve},zeroH:ce,barWidth:_e,xDivision:le},Ee))).barHeight;var ze=this.barHelpers.drawGoalLine({barXPosition:ke.barXPosition,barYPosition:Pe,goalX:ke.goalX,goalY:ke.goalY,barHeight:ye,barWidth:_e});ze&&ge.add(ze),fe=ke.y,pe=ke.x;var Me=this.barHelpers.getPathFillColor(ie,ne,xe,ve),Fe=se.globals.stroke.colors[ve];this.renderSeries({realIndex:ve,pathFill:Me,lineFill:Fe,j:xe,i:ne,x:pe,y:fe,y1:Ce,y2:Se,pathFrom:ke.pathFrom,pathTo:ke.pathTo,strokeWidth:we,elSeries:be,series:ie,barHeight:ye,barYPosition:Pe,barWidth:_e,elDataLabelsWrap:he,elGoalsMarkers:ge,visibleSeries:this.visibleI,type:"rangebar"})}re.add(be)}return re}},{key:"detectOverlappingBars",value:function(ie){var ae=ie.i,se=ie.j,oe=ie.barYPosition,re=ie.srty,ne=ie.barHeight,le=ie.yDivision,ce=ie.initPositions,ue=this.w,pe=[],fe=ue.config.series[ae].data[se].rangeName,me=ue.config.series[ae].data[se].x,ve=ue.globals.labels.indexOf(me),be=ue.globals.seriesRangeBar[ae].findIndex(function(ye){return ye.x===me&&ye.overlaps.length>0});return oe=ue.config.plotOptions.bar.rangeBarGroupRows?re+le*ve:re+ne*this.visibleI+le*ve,be>-1&&!ue.config.plotOptions.bar.rangeBarOverlap&&(pe=ue.globals.seriesRangeBar[ae][be].overlaps).indexOf(fe)>-1&&(oe=(ne=ce.barHeight/pe.length)*this.visibleI+le*(100-parseInt(this.barOptions.barHeight,10))/100/2+ne*(this.visibleI+pe.indexOf(fe))+le*ve),{barYPosition:oe,barHeight:ne}}},{key:"drawRangeColumnPaths",value:function(ie){var ae=ie.indexes,se=ie.x;ie.strokeWidth;var oe=ie.xDivision,re=ie.barWidth,ne=ie.zeroH,le=this.w,ce=ae.i,ue=ae.j,pe=this.yRatio[this.yaxisIndex],fe=ae.realIndex,me=this.getRangeValue(fe,ue),ve=Math.min(me.start,me.end),be=Math.max(me.start,me.end);le.globals.isXNumeric&&(se=(le.globals.seriesX[ce][ue]-le.globals.minX)/this.xRatio-re/2);var ye=se+re*this.visibleI;this.series[ce][ue]===void 0||this.series[ce][ue]===null?ve=ne:(ve=ne-ve/pe,be=ne-be/pe);var _e=Math.abs(be-ve),Ae=this.barHelpers.getColumnPaths({barXPosition:ye,barWidth:re,y1:ve,y2:be,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:ae.realIndex,i:fe,j:ue,w:le});return le.globals.isXNumeric||(se+=oe),{pathTo:Ae.pathTo,pathFrom:Ae.pathFrom,barHeight:_e,x:se,y:be,goalY:this.barHelpers.getGoalValues("y",null,ne,ce,ue),barXPosition:ye}}},{key:"drawRangeBarPaths",value:function(ie){var ae=ie.indexes,se=ie.y,oe=ie.y1,re=ie.y2,ne=ie.yDivision,le=ie.barHeight,ce=ie.barYPosition,ue=ie.zeroW,pe=this.w,fe=ue+oe/this.invertedYRatio,me=ue+re/this.invertedYRatio,ve=Math.abs(me-fe),be=this.barHelpers.getBarpaths({barYPosition:ce,barHeight:le,x1:fe,x2:me,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:ae.realIndex,realIndex:ae.realIndex,j:ae.j,w:pe});return pe.globals.isXNumeric||(se+=ne),{pathTo:be.pathTo,pathFrom:be.pathFrom,barWidth:ve,x:me,goalX:this.barHelpers.getGoalValues("x",ue,null,ae.realIndex,ae.j),y:se}}},{key:"getRangeValue",value:function(ie,ae){var se=this.w;return{start:se.globals.seriesRangeStart[ie][ae],end:se.globals.seriesRangeEnd[ie][ae]}}},{key:"getTooltipValues",value:function(ie){var ae=ie.ctx,se=ie.seriesIndex,oe=ie.dataPointIndex,re=ie.y1,ne=ie.y2,le=ie.w,ce=le.globals.seriesRangeStart[se][oe],ue=le.globals.seriesRangeEnd[se][oe],pe=le.globals.labels[oe],fe=le.config.series[se].name?le.config.series[se].name:"",me=le.config.tooltip.y.formatter,ve=le.config.tooltip.y.title.formatter,be={w:le,seriesIndex:se,dataPointIndex:oe,start:ce,end:ue};typeof ve=="function"&&(fe=ve(fe,be)),Number.isFinite(re)&&Number.isFinite(ne)&&(ce=re,ue=ne,le.config.series[se].data[oe].x&&(pe=le.config.series[se].data[oe].x+":"),typeof me=="function"&&(pe=me(pe,be)));var ye="",_e="",Ae=le.globals.colors[se];if(le.config.tooltip.x.formatter===void 0)if(le.config.xaxis.type==="datetime"){var he=new Y(ae);ye=he.formatDate(he.getDate(ce),le.config.tooltip.x.format),_e=he.formatDate(he.getDate(ue),le.config.tooltip.x.format)}else ye=ce,_e=ue;else ye=le.config.tooltip.x.formatter(ce),_e=le.config.tooltip.x.formatter(ue);return{start:ce,end:ue,startVal:ye,endVal:_e,ylabel:pe,color:Ae,seriesName:fe}}},{key:"buildCustomTooltipHTML",value:function(ie){var ae=ie.color,se=ie.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+ae+'">'+(se||"")+'</span></div><div> <span class="category">'+ie.ylabel+' </span> <span class="value start-value">'+ie.start+'</span> <span class="separator">-</span> <span class="value end-value">'+ie.end+"</span></div></div>"}}]),te}(),R=function(){function de(ee){e(this,de),this.opts=ee}return a(de,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(ee){return this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0,p.extend(ee,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var ee=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(te){var ie=te.seriesIndex,ae=te.dataPointIndex,se=te.w;return ee._getBoxTooltip(se,ie,ae,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var ee=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(te){var ie=te.seriesIndex,ae=te.dataPointIndex,se=te.w;return ee._getBoxTooltip(se,ie,ae,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(ee,te){te.ctx;var ie=te.seriesIndex,ae=te.dataPointIndex,se=te.w,oe=se.globals.seriesRangeStart[ie][ae];return se.globals.seriesRangeEnd[ie][ae]-oe},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(ee){return ee.w.config.plotOptions&&ee.w.config.plotOptions.bar&&ee.w.config.plotOptions.bar.horizontal?function(te){var ie=new F(te.ctx,null),ae=ie.getTooltipValues(te),se=ae.color,oe=ae.seriesName,re=ae.ylabel,ne=ae.startVal,le=ae.endVal;return ie.buildCustomTooltipHTML({color:se,seriesName:oe,ylabel:re,start:ne,end:le})}(ee):function(te){var ie=new F(te.ctx,null),ae=ie.getTooltipValues(te),se=ae.color,oe=ae.seriesName,re=ae.ylabel,ne=ae.start,le=ae.end;return ie.buildCustomTooltipHTML({color:se,seriesName:oe,ylabel:re,start:ne,end:le})}(ee)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(ee){return p.extend(ee,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(ee){ee.dataLabels=ee.dataLabels||{},ee.dataLabels.formatter=ee.dataLabels.formatter||void 0;var te=ee.dataLabels.formatter;return ee.yaxis.forEach(function(ie,ae){ee.yaxis[ae].min=0,ee.yaxis[ae].max=100}),ee.chart.type==="bar"&&(ee.dataLabels.formatter=te||function(ie){return typeof ie=="number"&&ie?ie.toFixed(0)+"%":ie}),ee}},{key:"convertCatToNumeric",value:function(ee){return ee.xaxis.convertedCatToNumeric=!0,ee}},{key:"convertCatToNumericXaxis",value:function(ee,te,ie){ee.xaxis.type="numeric",ee.xaxis.labels=ee.xaxis.labels||{},ee.xaxis.labels.formatter=ee.xaxis.labels.formatter||function(oe){return p.isNumber(oe)?Math.floor(oe):oe};var ae=ee.xaxis.labels.formatter,se=ee.xaxis.categories&&ee.xaxis.categories.length?ee.xaxis.categories:ee.labels;return ie&&ie.length&&(se=ie.map(function(oe){return Array.isArray(oe)?oe:String(oe)})),se&&se.length&&(ee.xaxis.labels.formatter=function(oe){return p.isNumber(oe)?ae(se[Math.floor(oe)-1]):ae(oe)}),ee.xaxis.categories=[],ee.labels=[],ee.xaxis.tickAmount=ee.xaxis.tickAmount||"dataPoints",ee}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(ee){return ee.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(ee){return ee.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(ee){return ee.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(ee){return ee},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(ee,te,ie,ae,se){var oe=ee.globals.seriesCandleO[te][ie],re=ee.globals.seriesCandleH[te][ie],ne=ee.globals.seriesCandleM[te][ie],le=ee.globals.seriesCandleL[te][ie],ce=ee.globals.seriesCandleC[te][ie];return ee.config.series[te].type&&ee.config.series[te].type!==se?`<div class="apexcharts-custom-tooltip">
          `.concat(ee.config.series[te].name?ee.config.series[te].name:"series-"+(te+1),": <strong>").concat(ee.globals.series[te][ie],`</strong>
        </div>`):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(ee.config.chart.type,'">')+"<div>".concat(ae[0],': <span class="value">')+oe+"</span></div>"+"<div>".concat(ae[1],': <span class="value">')+re+"</span></div>"+(ne?"<div>".concat(ae[2],': <span class="value">')+ne+"</span></div>":"")+"<div>".concat(ae[3],': <span class="value">')+le+"</span></div>"+"<div>".concat(ae[4],': <span class="value">')+ce+"</span></div></div>"}}]),de}(),H=function(){function de(ee){e(this,de),this.opts=ee}return a(de,[{key:"init",value:function(ee){var te=ee.responsiveOverride,ie=this.opts,ae=new S,se=new R(ie);this.chartType=ie.chart.type,this.chartType==="histogram"&&(ie.chart.type="bar",ie=p.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},ie)),ie=this.extendYAxis(ie),ie=this.extendAnnotations(ie);var oe=ae.init(),re={};if(ie&&t(ie)==="object"){var ne={};ne=["line","area","bar","candlestick","boxPlot","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(ie.chart.type)!==-1?se[ie.chart.type]():se.line(),ie.chart.brush&&ie.chart.brush.enabled&&(ne=se.brush(ne)),ie.chart.stacked&&ie.chart.stackType==="100%"&&(ie=se.stacked100(ie)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(ie),ie.xaxis=ie.xaxis||window.Apex.xaxis||{},te||(ie.xaxis.convertedCatToNumeric=!1),((ie=this.checkForCatToNumericXAxis(this.chartType,ne,ie)).chart.sparkline&&ie.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(ne=se.sparkline(ne)),re=p.extend(oe,ne)}var le=p.extend(re,window.Apex);return oe=p.extend(le,ie),oe=this.handleUserInputErrors(oe)}},{key:"checkForCatToNumericXAxis",value:function(ee,te,ie){var ae=new R(ie),se=ee==="bar"&&ie.plotOptions&&ie.plotOptions.bar&&ie.plotOptions.bar.horizontal,oe=ee==="pie"||ee==="polarArea"||ee==="donut"||ee==="radar"||ee==="radialBar"||ee==="heatmap",re=ie.xaxis.type!=="datetime"&&ie.xaxis.type!=="numeric",ne=ie.xaxis.tickPlacement?ie.xaxis.tickPlacement:te.xaxis&&te.xaxis.tickPlacement;return se||oe||!re||ne==="between"||(ie=ae.convertCatToNumeric(ie)),ie}},{key:"extendYAxis",value:function(ee,te){var ie=new S;(ee.yaxis===void 0||!ee.yaxis||Array.isArray(ee.yaxis)&&ee.yaxis.length===0)&&(ee.yaxis={}),ee.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(ee.yaxis=p.extend(ee.yaxis,window.Apex.yaxis)),ee.yaxis.constructor!==Array?ee.yaxis=[p.extend(ie.yAxis,ee.yaxis)]:ee.yaxis=p.extendArray(ee.yaxis,ie.yAxis);var ae=!1;ee.yaxis.forEach(function(oe){oe.logarithmic&&(ae=!0)});var se=ee.series;return te&&!se&&(se=te.config.series),ae&&se.length!==ee.yaxis.length&&se.length&&(ee.yaxis=se.map(function(oe,re){if(oe.name||(se[re].name="series-".concat(re+1)),ee.yaxis[re])return ee.yaxis[re].seriesName=se[re].name,ee.yaxis[re];var ne=p.extend(ie.yAxis,ee.yaxis[0]);return ne.show=!1,ne})),ae&&se.length>1&&se.length!==ee.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),ee}},{key:"extendAnnotations",value:function(ee){return ee.annotations===void 0&&(ee.annotations={},ee.annotations.yaxis=[],ee.annotations.xaxis=[],ee.annotations.points=[]),ee=this.extendYAxisAnnotations(ee),ee=this.extendXAxisAnnotations(ee),ee=this.extendPointAnnotations(ee)}},{key:"extendYAxisAnnotations",value:function(ee){var te=new S;return ee.annotations.yaxis=p.extendArray(ee.annotations.yaxis!==void 0?ee.annotations.yaxis:[],te.yAxisAnnotation),ee}},{key:"extendXAxisAnnotations",value:function(ee){var te=new S;return ee.annotations.xaxis=p.extendArray(ee.annotations.xaxis!==void 0?ee.annotations.xaxis:[],te.xAxisAnnotation),ee}},{key:"extendPointAnnotations",value:function(ee){var te=new S;return ee.annotations.points=p.extendArray(ee.annotations.points!==void 0?ee.annotations.points:[],te.pointAnnotation),ee}},{key:"checkForDarkTheme",value:function(ee){ee.theme&&ee.theme.mode==="dark"&&(ee.tooltip||(ee.tooltip={}),ee.tooltip.theme!=="light"&&(ee.tooltip.theme="dark"),ee.chart.foreColor||(ee.chart.foreColor="#f6f7f8"),ee.chart.background||(ee.chart.background="#424242"),ee.theme.palette||(ee.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(ee){var te=ee;if(te.tooltip.shared&&te.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if(te.chart.type==="bar"&&te.plotOptions.bar.horizontal){if(te.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");te.yaxis[0].reversed&&(te.yaxis[0].opposite=!0),te.xaxis.tooltip.enabled=!1,te.yaxis[0].tooltip.enabled=!1,te.chart.zoom.enabled=!1}return te.chart.type!=="bar"&&te.chart.type!=="rangeBar"||te.tooltip.shared&&te.xaxis.crosshairs.width==="barWidth"&&te.series.length>1&&(te.xaxis.crosshairs.width="tickWidth"),te.chart.type!=="candlestick"&&te.chart.type!=="boxPlot"||te.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(te.chart.type," chart is not supported.")),te.yaxis[0].reversed=!1),Array.isArray(te.stroke.width)&&te.chart.type!=="line"&&te.chart.type!=="area"&&(console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"),te.stroke.width=te.stroke.width[0]),te}}]),de}(),D=function(){function de(){e(this,de)}return a(de,[{key:"initGlobalVars",value:function(ee){ee.series=[],ee.seriesCandleO=[],ee.seriesCandleH=[],ee.seriesCandleM=[],ee.seriesCandleL=[],ee.seriesCandleC=[],ee.seriesRangeStart=[],ee.seriesRangeEnd=[],ee.seriesRangeBar=[],ee.seriesPercent=[],ee.seriesGoals=[],ee.seriesX=[],ee.seriesZ=[],ee.seriesNames=[],ee.seriesTotals=[],ee.seriesLog=[],ee.seriesColors=[],ee.stackedSeriesTotals=[],ee.seriesXvalues=[],ee.seriesYvalues=[],ee.labels=[],ee.categoryLabels=[],ee.timescaleLabels=[],ee.noLabelsProvided=!1,ee.resizeTimer=null,ee.selectionResizeTimer=null,ee.delayedElements=[],ee.pointsArray=[],ee.dataLabelsRects=[],ee.isXNumeric=!1,ee.xaxisLabelsCount=0,ee.skipLastTimelinelabel=!1,ee.skipFirstTimelinelabel=!1,ee.isDataXYZ=!1,ee.isMultiLineX=!1,ee.isMultipleYAxis=!1,ee.maxY=-Number.MAX_VALUE,ee.minY=Number.MIN_VALUE,ee.minYArr=[],ee.maxYArr=[],ee.maxX=-Number.MAX_VALUE,ee.minX=Number.MAX_VALUE,ee.initialMaxX=-Number.MAX_VALUE,ee.initialMinX=Number.MAX_VALUE,ee.maxDate=0,ee.minDate=Number.MAX_VALUE,ee.minZ=Number.MAX_VALUE,ee.maxZ=-Number.MAX_VALUE,ee.minXDiff=Number.MAX_VALUE,ee.yAxisScale=[],ee.xAxisScale=null,ee.xAxisTicksPositions=[],ee.yLabelsCoords=[],ee.yTitleCoords=[],ee.barPadForNumericAxis=0,ee.padHorizontal=0,ee.xRange=0,ee.yRange=[],ee.zRange=0,ee.dataPoints=0,ee.xTickAmount=0}},{key:"globalVars",value:function(ee){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:ee.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:ee.chart.toolbar.autoSelected==="zoom"&&ee.chart.toolbar.tools.zoom&&ee.chart.zoom.enabled,panEnabled:ee.chart.toolbar.autoSelected==="pan"&&ee.chart.toolbar.tools.pan,selectionEnabled:ee.chart.toolbar.autoSelected==="selection"&&ee.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(ee){var te=this.globalVars(ee);return this.initGlobalVars(te),te.initialConfig=p.extend({},ee),te.initialSeries=p.clone(ee.series),te.lastXAxis=p.clone(te.initialConfig.xaxis),te.lastYAxis=p.clone(te.initialConfig.yaxis),te}}]),de}(),N=function(){function de(ee){e(this,de),this.opts=ee}return a(de,[{key:"init",value:function(){var ee=new H(this.opts).init({responsiveOverride:!1});return{config:ee,globals:new D().init(ee)}}}]),de}(),O=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new y(this.ctx)}return a(de,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var ee=this.w.config.series.slice(),te=new z(this.ctx);if(this.activeSeriesIndex=te.getActiveConfigSeriesIndex(),ee[this.activeSeriesIndex].data!==void 0&&ee[this.activeSeriesIndex].data.length>0&&ee[this.activeSeriesIndex].data[0]!==null&&ee[this.activeSeriesIndex].data[0].x!==void 0&&ee[this.activeSeriesIndex].data[0]!==null)return!0}},{key:"isFormat2DArray",value:function(){var ee=this.w.config.series.slice(),te=new z(this.ctx);if(this.activeSeriesIndex=te.getActiveConfigSeriesIndex(),ee[this.activeSeriesIndex].data!==void 0&&ee[this.activeSeriesIndex].data.length>0&&ee[this.activeSeriesIndex].data[0]!==void 0&&ee[this.activeSeriesIndex].data[0]!==null&&ee[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(ee,te){for(var ie=this.w.config,ae=this.w.globals,se=ie.chart.type==="boxPlot"||ie.series[te].type==="boxPlot",oe=0;oe<ee[te].data.length;oe++)if(ee[te].data[oe][1]!==void 0&&(Array.isArray(ee[te].data[oe][1])&&ee[te].data[oe][1].length===4&&!se?this.twoDSeries.push(p.parseNumber(ee[te].data[oe][1][3])):ee[te].data[oe].length>=5?this.twoDSeries.push(p.parseNumber(ee[te].data[oe][4])):this.twoDSeries.push(p.parseNumber(ee[te].data[oe][1])),ae.dataFormatXNumeric=!0),ie.xaxis.type==="datetime"){var re=new Date(ee[te].data[oe][0]);re=new Date(re).getTime(),this.twoDSeriesX.push(re)}else this.twoDSeriesX.push(ee[te].data[oe][0]);for(var ne=0;ne<ee[te].data.length;ne++)ee[te].data[ne][2]!==void 0&&(this.threeDSeries.push(ee[te].data[ne][2]),ae.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(ee,te){var ie=this.w.config,ae=this.w.globals,se=new Y(this.ctx),oe=te;ae.collapsedSeriesIndices.indexOf(te)>-1&&(oe=this.activeSeriesIndex);for(var re=0;re<ee[te].data.length;re++)ee[te].data[re].y!==void 0&&(Array.isArray(ee[te].data[re].y)?this.twoDSeries.push(p.parseNumber(ee[te].data[re].y[ee[te].data[re].y.length-1])):this.twoDSeries.push(p.parseNumber(ee[te].data[re].y))),ee[te].data[re].goals!==void 0&&Array.isArray(ee[te].data[re].goals)?(this.seriesGoals[te]===void 0&&(this.seriesGoals[te]=[]),this.seriesGoals[te].push(ee[te].data[re].goals)):(this.seriesGoals[te]===void 0&&(this.seriesGoals[te]=[]),this.seriesGoals[te].push(null));for(var ne=0;ne<ee[oe].data.length;ne++){var le=typeof ee[oe].data[ne].x=="string",ce=Array.isArray(ee[oe].data[ne].x),ue=!ce&&!!se.isValidDate(ee[oe].data[ne].x.toString());if(le||ue)if(le||ie.xaxis.convertedCatToNumeric){var pe=ae.isBarHorizontal&&ae.isRangeData;ie.xaxis.type!=="datetime"||pe?(this.fallbackToCategory=!0,this.twoDSeriesX.push(ee[oe].data[ne].x)):this.twoDSeriesX.push(se.parseDate(ee[oe].data[ne].x))}else ie.xaxis.type==="datetime"?this.twoDSeriesX.push(se.parseDate(ee[oe].data[ne].x.toString())):(ae.dataFormatXNumeric=!0,ae.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(ee[oe].data[ne].x)));else ce?(this.fallbackToCategory=!0,this.twoDSeriesX.push(ee[oe].data[ne].x)):(ae.isXNumeric=!0,ae.dataFormatXNumeric=!0,this.twoDSeriesX.push(ee[oe].data[ne].x))}if(ee[te].data[0]&&ee[te].data[0].z!==void 0){for(var fe=0;fe<ee[te].data.length;fe++)this.threeDSeries.push(ee[te].data[fe].z);ae.isDataXYZ=!0}}},{key:"handleRangeData",value:function(ee,te){var ie=this.w.globals,ae={};return this.isFormat2DArray()?ae=this.handleRangeDataFormat("array",ee,te):this.isFormatXY()&&(ae=this.handleRangeDataFormat("xy",ee,te)),ie.seriesRangeStart.push(ae.start),ie.seriesRangeEnd.push(ae.end),ie.seriesRangeBar.push(ae.rangeUniques),ie.seriesRangeBar.forEach(function(se,oe){se&&se.forEach(function(re,ne){re.y.forEach(function(le,ce){for(var ue=0;ue<re.y.length;ue++)if(ce!==ue){var pe=le.y1,fe=le.y2,me=re.y[ue].y1;pe<=re.y[ue].y2&&me<=fe&&(re.overlaps.indexOf(le.rangeName)<0&&re.overlaps.push(le.rangeName),re.overlaps.indexOf(re.y[ue].rangeName)<0&&re.overlaps.push(re.y[ue].rangeName))}})})}),ae}},{key:"handleCandleStickBoxData",value:function(ee,te){var ie=this.w.globals,ae={};return this.isFormat2DArray()?ae=this.handleCandleStickBoxDataFormat("array",ee,te):this.isFormatXY()&&(ae=this.handleCandleStickBoxDataFormat("xy",ee,te)),ie.seriesCandleO[te]=ae.o,ie.seriesCandleH[te]=ae.h,ie.seriesCandleM[te]=ae.m,ie.seriesCandleL[te]=ae.l,ie.seriesCandleC[te]=ae.c,ae}},{key:"handleRangeDataFormat",value:function(ee,te,ie){var ae=[],se=[],oe=te[ie].data.filter(function(pe,fe,me){return fe===me.findIndex(function(ve){return ve.x===pe.x})}).map(function(pe,fe){return{x:pe.x,overlaps:[],y:[]}}),re="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",ne=new z(this.ctx).getActiveConfigSeriesIndex();if(ee==="array"){if(te[ne].data[0][1].length!==2)throw new Error(re);for(var le=0;le<te[ie].data.length;le++)ae.push(te[ie].data[le][1][0]),se.push(te[ie].data[le][1][1])}else if(ee==="xy"){if(te[ne].data[0].y.length!==2)throw new Error(re);for(var ce=function(pe){var fe=p.randomId(),me=te[ie].data[pe].x,ve={y1:te[ie].data[pe].y[0],y2:te[ie].data[pe].y[1],rangeName:fe};te[ie].data[pe].rangeName=fe;var be=oe.findIndex(function(ye){return ye.x===me});oe[be].y.push(ve),ae.push(ve.y1),se.push(ve.y2)},ue=0;ue<te[ie].data.length;ue++)ce(ue)}return{start:ae,end:se,rangeUniques:oe}}},{key:"handleCandleStickBoxDataFormat",value:function(ee,te,ie){var ae=this.w,se=ae.config.chart.type==="boxPlot"||ae.config.series[ie].type==="boxPlot",oe=[],re=[],ne=[],le=[],ce=[];if(ee==="array")if(se&&te[ie].data[0].length===6||!se&&te[ie].data[0].length===5)for(var ue=0;ue<te[ie].data.length;ue++)oe.push(te[ie].data[ue][1]),re.push(te[ie].data[ue][2]),se?(ne.push(te[ie].data[ue][3]),le.push(te[ie].data[ue][4]),ce.push(te[ie].data[ue][5])):(le.push(te[ie].data[ue][3]),ce.push(te[ie].data[ue][4]));else for(var pe=0;pe<te[ie].data.length;pe++)Array.isArray(te[ie].data[pe][1])&&(oe.push(te[ie].data[pe][1][0]),re.push(te[ie].data[pe][1][1]),se?(ne.push(te[ie].data[pe][1][2]),le.push(te[ie].data[pe][1][3]),ce.push(te[ie].data[pe][1][4])):(le.push(te[ie].data[pe][1][2]),ce.push(te[ie].data[pe][1][3])));else if(ee==="xy")for(var fe=0;fe<te[ie].data.length;fe++)Array.isArray(te[ie].data[fe].y)&&(oe.push(te[ie].data[fe].y[0]),re.push(te[ie].data[fe].y[1]),se?(ne.push(te[ie].data[fe].y[2]),le.push(te[ie].data[fe].y[3]),ce.push(te[ie].data[fe].y[4])):(le.push(te[ie].data[fe].y[2]),ce.push(te[ie].data[fe].y[3])));return{o:oe,h:re,m:ne,l:le,c:ce}}},{key:"parseDataAxisCharts",value:function(ee){var te=this,ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.ctx,ae=this.w.config,se=this.w.globals,oe=new Y(ie),re=ae.labels.length>0?ae.labels.slice():ae.xaxis.categories.slice();se.isRangeBar=ae.chart.type==="rangeBar"&&se.isBarHorizontal;for(var ne=function(){for(var ue=0;ue<re.length;ue++)if(typeof re[ue]=="string"){if(!oe.isValidDate(re[ue]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");te.twoDSeriesX.push(oe.parseDate(re[ue]))}else te.twoDSeriesX.push(re[ue])},le=0;le<ee.length;le++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],ee[le].data===void 0)return void console.error("It is a possibility that you may have not included 'data' property in series.");if(ae.chart.type!=="rangeBar"&&ae.chart.type!=="rangeArea"&&ee[le].type!=="rangeBar"&&ee[le].type!=="rangeArea"||(se.isRangeData=!0,this.handleRangeData(ee,le)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(ee,le):this.isFormatXY()&&this.handleFormatXY(ee,le),ae.chart.type!=="candlestick"&&ee[le].type!=="candlestick"&&ae.chart.type!=="boxPlot"&&ee[le].type!=="boxPlot"||this.handleCandleStickBoxData(ee,le),se.series.push(this.twoDSeries),se.labels.push(this.twoDSeriesX),se.seriesX.push(this.twoDSeriesX),se.seriesGoals=this.seriesGoals,le!==this.activeSeriesIndex||this.fallbackToCategory||(se.isXNumeric=!0);else{ae.xaxis.type==="datetime"?(se.isXNumeric=!0,ne(),se.seriesX.push(this.twoDSeriesX)):ae.xaxis.type==="numeric"&&(se.isXNumeric=!0,re.length>0&&(this.twoDSeriesX=re,se.seriesX.push(this.twoDSeriesX))),se.labels.push(this.twoDSeriesX);var ce=ee[le].data.map(function(ue){return p.parseNumber(ue)});se.series.push(ce)}se.seriesZ.push(this.threeDSeries),ee[le].name!==void 0?se.seriesNames.push(ee[le].name):se.seriesNames.push("series-"+parseInt(le+1,10)),ee[le].color!==void 0?se.seriesColors.push(ee[le].color):se.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(ee){var te=this.w.globals,ie=this.w.config;te.series=ee.slice(),te.seriesNames=ie.labels.slice();for(var ae=0;ae<te.series.length;ae++)te.seriesNames[ae]===void 0&&te.seriesNames.push("series-"+(ae+1));return this.w}},{key:"handleExternalLabelsData",value:function(ee){var te=this.w.config,ie=this.w.globals;te.xaxis.categories.length>0?ie.labels=te.xaxis.categories:te.labels.length>0?ie.labels=te.labels.slice():this.fallbackToCategory?(ie.labels=ie.labels[0],ie.seriesRangeBar.length&&(ie.seriesRangeBar.map(function(ae){ae.forEach(function(se){ie.labels.indexOf(se.x)<0&&se.x&&ie.labels.push(se.x)})}),ie.labels=ie.labels.filter(function(ae,se,oe){return oe.indexOf(ae)===se})),te.xaxis.convertedCatToNumeric&&(new R(te).convertCatToNumericXaxis(te,this.ctx,ie.seriesX[0]),this._generateExternalLabels(ee))):this._generateExternalLabels(ee)}},{key:"_generateExternalLabels",value:function(ee){var te=this.w.globals,ie=this.w.config,ae=[];if(te.axisCharts){if(te.series.length>0)for(var se=0;se<te.series[te.maxValsInArrayIndex].length;se++)ae.push(se+1);te.seriesX=[];for(var oe=0;oe<ee.length;oe++)te.seriesX.push(ae);te.isXNumeric=!0}if(ae.length===0){ae=te.axisCharts?[]:te.series.map(function(ne,le){return le+1});for(var re=0;re<ee.length;re++)te.seriesX.push(ae)}te.labels=ae,ie.xaxis.convertedCatToNumeric&&(te.categoryLabels=ae.map(function(ne){return ie.xaxis.labels.formatter(ne)})),te.noLabelsProvided=!0}},{key:"parseData",value:function(ee){var te=this.w,ie=te.config,ae=te.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),ae.axisCharts?this.parseDataAxisCharts(ee):this.parseDataNonAxisCharts(ee),this.coreUtils.getLargestSeries(),ie.chart.type==="bar"&&ie.chart.stacked){var se=new z(this.ctx);ae.series=se.setNullSeriesToZeroValues(ae.series)}this.coreUtils.getSeriesTotals(),ae.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),ae.dataFormatXNumeric||ae.isXNumeric&&(ie.xaxis.type!=="numeric"||ie.labels.length!==0||ie.xaxis.categories.length!==0)||this.handleExternalLabelsData(ee);for(var oe=this.coreUtils.getCategoryLabels(ae.labels),re=0;re<oe.length;re++)if(Array.isArray(oe[re])){ae.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var ee=this,te=this.w;te.globals.ignoreYAxisIndexes=te.globals.collapsedSeries.map(function(ie,ae){if(ee.w.globals.isMultipleYAxis&&!te.config.chart.stacked)return ie.index})}}]),de}(),W=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.tooltipKeyFormat="dd MMM"}return a(de,[{key:"xLabelFormat",value:function(ee,te,ie,ae){var se=this.w;if(se.config.xaxis.type==="datetime"&&se.config.xaxis.labels.formatter===void 0&&se.config.tooltip.x.formatter===void 0){var oe=new Y(this.ctx);return oe.formatDate(oe.getDate(te),se.config.tooltip.x.format)}return ee(te,ie,ae)}},{key:"defaultGeneralFormatter",value:function(ee){return Array.isArray(ee)?ee.map(function(te){return te}):ee}},{key:"defaultYFormatter",value:function(ee,te,ie){var ae=this.w;return p.isNumber(ee)&&(ee=ae.globals.yValueDecimal!==0?ee.toFixed(te.decimalsInFloat!==void 0?te.decimalsInFloat:ae.globals.yValueDecimal):ae.globals.maxYArr[ie]-ae.globals.minYArr[ie]<5?ee.toFixed(1):ee.toFixed(0)),ee}},{key:"setLabelFormatters",value:function(){var ee=this,te=this.w;return te.globals.xaxisTooltipFormatter=function(ie){return ee.defaultGeneralFormatter(ie)},te.globals.ttKeyFormatter=function(ie){return ee.defaultGeneralFormatter(ie)},te.globals.ttZFormatter=function(ie){return ie},te.globals.legendFormatter=function(ie){return ee.defaultGeneralFormatter(ie)},te.config.xaxis.labels.formatter!==void 0?te.globals.xLabelFormatter=te.config.xaxis.labels.formatter:te.globals.xLabelFormatter=function(ie){if(p.isNumber(ie)){if(!te.config.xaxis.convertedCatToNumeric&&te.config.xaxis.type==="numeric"){if(p.isNumber(te.config.xaxis.decimalsInFloat))return ie.toFixed(te.config.xaxis.decimalsInFloat);var ae=te.globals.maxX-te.globals.minX;return ae>0&&ae<100?ie.toFixed(1):ie.toFixed(0)}return te.globals.isBarHorizontal&&te.globals.maxY-te.globals.minYArr<4?ie.toFixed(1):ie.toFixed(0)}return ie},typeof te.config.tooltip.x.formatter=="function"?te.globals.ttKeyFormatter=te.config.tooltip.x.formatter:te.globals.ttKeyFormatter=te.globals.xLabelFormatter,typeof te.config.xaxis.tooltip.formatter=="function"&&(te.globals.xaxisTooltipFormatter=te.config.xaxis.tooltip.formatter),(Array.isArray(te.config.tooltip.y)||te.config.tooltip.y.formatter!==void 0)&&(te.globals.ttVal=te.config.tooltip.y),te.config.tooltip.z.formatter!==void 0&&(te.globals.ttZFormatter=te.config.tooltip.z.formatter),te.config.legend.formatter!==void 0&&(te.globals.legendFormatter=te.config.legend.formatter),te.config.yaxis.forEach(function(ie,ae){ie.labels.formatter!==void 0?te.globals.yLabelFormatters[ae]=ie.labels.formatter:te.globals.yLabelFormatters[ae]=function(se){return te.globals.xyCharts?Array.isArray(se)?se.map(function(oe){return ee.defaultYFormatter(oe,ie,ae)}):ee.defaultYFormatter(se,ie,ae):se}}),te.globals}},{key:"heatmapLabelFormatters",value:function(){var ee=this.w;if(ee.config.chart.type==="heatmap"){ee.globals.yAxisScale[0].result=ee.globals.seriesNames.slice();var te=ee.globals.seriesNames.reduce(function(ie,ae){return ie.length>ae.length?ie:ae},0);ee.globals.yAxisScale[0].niceMax=te,ee.globals.yAxisScale[0].niceMin=te}}}]),de}(),B=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"getLabel",value:function(ee,te,ie,ae){var se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],oe=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"12px",re=this.w,ne=ee[ae]===void 0?"":ee[ae],le=ne,ce=re.globals.xLabelFormatter,ue=re.config.xaxis.labels.formatter,pe=!1,fe=new W(this.ctx),me=ne;le=fe.xLabelFormat(ce,ne,me,{i:ae,dateFormatter:new Y(this.ctx).formatDate,w:re}),ue!==void 0&&(le=ue(ne,ee[ae],{i:ae,dateFormatter:new Y(this.ctx).formatDate,w:re}));var ve=function(Ae){var he=null;return te.forEach(function(ge){ge.unit==="month"?he="year":ge.unit==="day"?he="month":ge.unit==="hour"?he="day":ge.unit==="minute"&&(he="hour")}),he===Ae};te.length>0?(pe=ve(te[ae].unit),ie=te[ae].position,le=te[ae].value):re.config.xaxis.type==="datetime"&&ue===void 0&&(le=""),le===void 0&&(le=""),le=Array.isArray(le)?le:le.toString();var be=new b(this.ctx),ye={};ye=re.globals.rotateXLabels?be.getTextRects(le,parseInt(oe,10),null,"rotate(".concat(re.config.xaxis.labels.rotate," 0 0)"),!1):be.getTextRects(le,parseInt(oe,10));var _e=!re.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(le)&&(le.indexOf("NaN")===0||le.toLowerCase().indexOf("invalid")===0||le.toLowerCase().indexOf("infinity")>=0||se.indexOf(le)>=0&&_e)&&(le=""),{x:ie,text:le,textRect:ye,isBold:pe}}},{key:"checkLabelBasedOnTickamount",value:function(ee,te,ie){var ae=this.w,se=ae.config.xaxis.tickAmount;return se==="dataPoints"&&(se=Math.round(ae.globals.gridWidth/120)),se>ie||ee%Math.round(ie/(se+1))==0||(te.text=""),te}},{key:"checkForOverflowingLabels",value:function(ee,te,ie,ae,se){var oe=this.w;if(ee===0&&oe.globals.skipFirstTimelinelabel&&(te.text=""),ee===ie-1&&oe.globals.skipLastTimelinelabel&&(te.text=""),oe.config.xaxis.labels.hideOverlappingLabels&&ae.length>0){var re=se[se.length-1];te.x<re.textRect.width/(oe.globals.rotateXLabels?Math.abs(oe.config.xaxis.labels.rotate)/12:1.01)+re.x&&(te.text="")}return te}},{key:"checkForReversedLabels",value:function(ee,te){var ie=this.w;return ie.config.yaxis[ee]&&ie.config.yaxis[ee].reversed&&te.reverse(),te}},{key:"isYAxisHidden",value:function(ee){var te=this.w,ie=new y(this.ctx);return!te.config.yaxis[ee].show||!te.config.yaxis[ee].showForNullSeries&&ie.isSeriesNull(ee)&&te.globals.collapsedSeriesIndices.indexOf(ee)===-1}},{key:"getYAxisForeColor",value:function(ee,te){var ie=this.w;return Array.isArray(ee)&&ie.globals.yAxisScale[te]&&this.ctx.theme.pushExtraColors(ee,ie.globals.yAxisScale[te].result.length,!1),ee}},{key:"drawYAxisTicks",value:function(ee,te,ie,ae,se,oe,re){var ne=this.w,le=new b(this.ctx),ce=ne.globals.translateY;if(ae.show&&te>0){ne.config.yaxis[se].opposite===!0&&(ee+=ae.width);for(var ue=te;ue>=0;ue--){var pe=ce+te/10+ne.config.yaxis[se].labels.offsetY-1;ne.globals.isBarHorizontal&&(pe=oe*ue),ne.config.chart.type==="heatmap"&&(pe+=oe/2);var fe=le.drawLine(ee+ie.offsetX-ae.width+ae.offsetX,pe+ae.offsetY,ee+ie.offsetX+ae.offsetX,pe+ae.offsetY,ae.color);re.add(fe),ce+=oe}}}}]),de}(),V=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"scaleSvgNode",value:function(ee,te){var ie=parseFloat(ee.getAttributeNS(null,"width")),ae=parseFloat(ee.getAttributeNS(null,"height"));ee.setAttributeNS(null,"width",ie*te),ee.setAttributeNS(null,"height",ae*te),ee.setAttributeNS(null,"viewBox","0 0 "+ie+" "+ae)}},{key:"fixSvgStringForIe11",value:function(ee){if(!p.isIE11())return ee.replace(/&nbsp;/g,"&#160;");var te=0,ie=ee.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,function(ae){return++te===2?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':ae});return ie=(ie=ie.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(ee){var te=this.w.globals.dom.Paper.svg();if(ee!==1){var ie=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(ie,ee),te=new XMLSerializer().serializeToString(ie)}return this.fixSvgStringForIe11(te)}},{key:"cleanup",value:function(){var ee=this.w,te=ee.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),ie=ee.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),ae=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(ae,function(se){se.setAttribute("width",0)}),te&&te[0]&&(te[0].setAttribute("x",-500),te[0].setAttribute("x1",-500),te[0].setAttribute("x2",-500)),ie&&ie[0]&&(ie[0].setAttribute("y",-100),ie[0].setAttribute("y1",-100),ie[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var ee=this.getSvgString(),te=new Blob([ee],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(te)}},{key:"dataURI",value:function(ee){var te=this;return new Promise(function(ie){var ae=te.w,se=ee?ee.scale||ee.width/ae.globals.svgWidth:1;te.cleanup();var oe=document.createElement("canvas");oe.width=ae.globals.svgWidth*se,oe.height=parseInt(ae.globals.dom.elWrap.style.height,10)*se;var re=ae.config.chart.background==="transparent"?"#fff":ae.config.chart.background,ne=oe.getContext("2d");ne.fillStyle=re,ne.fillRect(0,0,oe.width*se,oe.height*se);var le=te.getSvgString(se);if(window.canvg&&p.isIE11()){var ce=window.canvg.Canvg.fromString(ne,le,{ignoreClear:!0,ignoreDimensions:!0});ce.start();var ue=oe.msToBlob();ce.stop(),ie({blob:ue})}else{var pe="data:image/svg+xml,"+encodeURIComponent(le),fe=new Image;fe.crossOrigin="anonymous",fe.onload=function(){if(ne.drawImage(fe,0,0),oe.msToBlob){var me=oe.msToBlob();ie({blob:me})}else{var ve=oe.toDataURL("image/png");ie({imgURI:ve})}},fe.src=pe}})}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var ee=this;this.dataURI().then(function(te){var ie=te.imgURI,ae=te.blob;ae?navigator.msSaveOrOpenBlob(ae,ee.w.globals.chartID+".png"):ee.triggerDownload(ie,ee.w.config.chart.toolbar.export.png.filename,".png")})}},{key:"exportToCSV",value:function(ee){var te=this,ie=ee.series,ae=ee.columnDelimiter,se=ee.lineDelimiter,oe=se===void 0?`
`:se,re=this.w,ne=[],le=[],ce="",ue=new O(this.ctx),pe=new B(this.ctx),fe=function(me){var ve="";if(re.globals.axisCharts){if(re.config.xaxis.type==="category"||re.config.xaxis.convertedCatToNumeric)if(re.globals.isBarHorizontal){var be=re.globals.yLabelFormatters[0],ye=new z(te.ctx).getActiveConfigSeriesIndex();ve=be(re.globals.labels[me],{seriesIndex:ye,dataPointIndex:me,w:re})}else ve=pe.getLabel(re.globals.labels,re.globals.timescaleLabels,0,me).text;re.config.xaxis.type==="datetime"&&(re.config.xaxis.categories.length?ve=re.config.xaxis.categories[me]:re.config.labels.length&&(ve=re.config.labels[me]))}else ve=re.config.labels[me];return Array.isArray(ve)&&(ve=ve.join(" ")),p.isNumber(ve)?ve:ve.split(ae).join("")};ne.push(re.config.chart.toolbar.export.csv.headerCategory),ie.map(function(me,ve){var be=me.name?me.name:"series-".concat(ve);re.globals.axisCharts&&ne.push(be.split(ae).join("")?be.split(ae).join(""):"series-".concat(ve))}),re.globals.axisCharts||(ne.push(re.config.chart.toolbar.export.csv.headerValue),le.push(ne.join(ae))),ie.map(function(me,ve){re.globals.axisCharts?function(be,ye){if(ne.length&&ye===0&&le.push(ne.join(ae)),be.data&&be.data.length)for(var _e=0;_e<be.data.length;_e++){ne=[];var Ae=fe(_e);if(Ae||(ue.isFormatXY()?Ae=ie[ye].data[_e].x:ue.isFormat2DArray()&&(Ae=ie[ye].data[_e]?ie[ye].data[_e][0]:"")),ye===0){ne.push((ge=Ae,re.config.xaxis.type==="datetime"&&String(ge).length>=10?re.config.chart.toolbar.export.csv.dateFormatter(Ae):p.isNumber(Ae)?Ae:Ae.split(ae).join("")));for(var he=0;he<re.globals.series.length;he++)ne.push(re.globals.series[he][_e])}(re.config.chart.type==="candlestick"||be.type&&be.type==="candlestick")&&(ne.pop(),ne.push(re.globals.seriesCandleO[ye][_e]),ne.push(re.globals.seriesCandleH[ye][_e]),ne.push(re.globals.seriesCandleL[ye][_e]),ne.push(re.globals.seriesCandleC[ye][_e])),(re.config.chart.type==="boxPlot"||be.type&&be.type==="boxPlot")&&(ne.pop(),ne.push(re.globals.seriesCandleO[ye][_e]),ne.push(re.globals.seriesCandleH[ye][_e]),ne.push(re.globals.seriesCandleM[ye][_e]),ne.push(re.globals.seriesCandleL[ye][_e]),ne.push(re.globals.seriesCandleC[ye][_e])),re.config.chart.type==="rangeBar"&&(ne.pop(),ne.push(re.globals.seriesRangeStart[ye][_e]),ne.push(re.globals.seriesRangeEnd[ye][_e])),ne.length&&le.push(ne.join(ae))}var ge}(me,ve):((ne=[]).push(re.globals.labels[ve].split(ae).join("")),ne.push(re.globals.series[ve]),le.push(ne.join(ae)))}),ce+=le.join(oe),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\uFEFF"+ce),re.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(ee,te,ie){var ae=document.createElement("a");ae.href=ee,ae.download=(te||this.w.globals.chartID)+ie,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae)}}]),de}(),G=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.axesUtils=new B(ee),this.xaxisLabels=te.globals.labels.slice(),te.globals.timescaleLabels.length>0&&!te.globals.isBarHorizontal&&(this.xaxisLabels=te.globals.timescaleLabels.slice()),te.config.xaxis.overwriteCategories&&(this.xaxisLabels=te.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],te.config.xaxis.position==="top"?this.offY=0:this.offY=te.globals.gridHeight+1,this.offY=this.offY+te.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal=te.config.chart.type==="bar"&&te.config.plotOptions.bar.horizontal,this.xaxisFontSize=te.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=te.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=te.config.xaxis.labels.style.colors,this.xaxisBorderWidth=te.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=te.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=te.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=te.config.xaxis.axisBorder.height,this.yaxis=te.config.yaxis[0]}return a(de,[{key:"drawXaxis",value:function(){var ee,te=this,ie=this.w,ae=new b(this.ctx),se=ae.group({class:"apexcharts-xaxis",transform:"translate(".concat(ie.config.xaxis.offsetX,", ").concat(ie.config.xaxis.offsetY,")")}),oe=ae.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(ie.globals.translateXAxisX,", ").concat(ie.globals.translateXAxisY,")")});se.add(oe);for(var re=ie.globals.padHorizontal,ne=[],le=0;le<this.xaxisLabels.length;le++)ne.push(this.xaxisLabels[le]);var ce=ne.length;if(ie.globals.isXNumeric){var ue=ce>1?ce-1:ce;ee=ie.globals.gridWidth/ue,re=re+ee/2+ie.config.xaxis.labels.offsetX}else ee=ie.globals.gridWidth/ne.length,re=re+ee+ie.config.xaxis.labels.offsetX;for(var pe=function(_e){var Ae=re-ee/2+ie.config.xaxis.labels.offsetX;_e===0&&ce===1&&ee/2===re&&ie.globals.dataPoints===1&&(Ae=ie.globals.gridWidth/2);var he=te.axesUtils.getLabel(ne,ie.globals.timescaleLabels,Ae,_e,te.drawnLabels,te.xaxisFontSize),ge=28;if(ie.globals.rotateXLabels&&(ge=22),(he=ie.config.xaxis.tickAmount!==void 0&&ie.config.xaxis.tickAmount!=="dataPoints"&&ie.config.xaxis.type!=="datetime"?te.axesUtils.checkLabelBasedOnTickamount(_e,he,ce):te.axesUtils.checkForOverflowingLabels(_e,he,ce,te.drawnLabels,te.drawnLabelsRects)).text&&ie.globals.xaxisLabelsCount++,ie.config.xaxis.labels.show){var xe=ae.drawText({x:he.x,y:te.offY+ie.config.xaxis.labels.offsetY+ge-(ie.config.xaxis.position==="top"?ie.globals.xAxisHeight+ie.config.xaxis.axisTicks.height-2:0),text:he.text,textAnchor:"middle",fontWeight:he.isBold?600:ie.config.xaxis.labels.style.fontWeight,fontSize:te.xaxisFontSize,fontFamily:te.xaxisFontFamily,foreColor:Array.isArray(te.xaxisForeColors)?ie.config.xaxis.convertedCatToNumeric?te.xaxisForeColors[ie.globals.minX+_e-1]:te.xaxisForeColors[_e]:te.xaxisForeColors,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+ie.config.xaxis.labels.style.cssClass});oe.add(xe);var we=document.createElementNS(ie.globals.SVGNS,"title");we.textContent=Array.isArray(he.text)?he.text.join(" "):he.text,xe.node.appendChild(we),he.text!==""&&(te.drawnLabels.push(he.text),te.drawnLabelsRects.push(he))}re+=ee},fe=0;fe<=ce-1;fe++)pe(fe);if(ie.config.xaxis.title.text!==void 0){var me=ae.group({class:"apexcharts-xaxis-title"}),ve=ae.drawText({x:ie.globals.gridWidth/2+ie.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+ie.globals.xAxisLabelsHeight+ie.config.xaxis.title.offsetY,text:ie.config.xaxis.title.text,textAnchor:"middle",fontSize:ie.config.xaxis.title.style.fontSize,fontFamily:ie.config.xaxis.title.style.fontFamily,fontWeight:ie.config.xaxis.title.style.fontWeight,foreColor:ie.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+ie.config.xaxis.title.style.cssClass});me.add(ve),se.add(me)}if(ie.config.xaxis.axisBorder.show){var be=ie.globals.barPadForNumericAxis,ye=ae.drawLine(ie.globals.padHorizontal+ie.config.xaxis.axisBorder.offsetX-be,this.offY,this.xaxisBorderWidth+be,this.offY,ie.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);se.add(ye)}return se}},{key:"drawXaxisInversed",value:function(ee){var te,ie,ae=this,se=this.w,oe=new b(this.ctx),re=se.config.yaxis[0].opposite?se.globals.translateYAxisX[ee]:0,ne=oe.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:ee}),le=oe.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+re+", 0)"});ne.add(le);var ce=[];if(se.config.yaxis[ee].show)for(var ue=0;ue<this.xaxisLabels.length;ue++)ce.push(this.xaxisLabels[ue]);te=se.globals.gridHeight/ce.length,ie=-te/2.2;var pe=se.globals.yLabelFormatters[0],fe=se.config.yaxis[0].labels;if(fe.show)for(var me=function(ge){var xe=ce[ge]===void 0?"":ce[ge];xe=pe(xe,{seriesIndex:ee,dataPointIndex:ge,w:se});var we=ae.axesUtils.getYAxisForeColor(fe.style.colors,ee),Ce=0;Array.isArray(xe)&&(Ce=xe.length/2*parseInt(fe.style.fontSize,10));var Se=oe.drawText({x:fe.offsetX-15,y:ie+te+fe.offsetY-Ce,text:xe,textAnchor:ae.yaxis.opposite?"start":"end",foreColor:Array.isArray(we)?we[ge]:we,fontSize:fe.style.fontSize,fontFamily:fe.style.fontFamily,fontWeight:fe.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+fe.style.cssClass});le.add(Se);var ke=document.createElementNS(se.globals.SVGNS,"title");if(ke.textContent=Array.isArray(xe)?xe.join(" "):xe,Se.node.appendChild(ke),se.config.yaxis[ee].labels.rotate!==0){var Pe=oe.rotateAroundCenter(Se.node);Se.node.setAttribute("transform","rotate(".concat(se.config.yaxis[ee].labels.rotate," 0 ").concat(Pe.y,")"))}ie+=te},ve=0;ve<=ce.length-1;ve++)me(ve);if(se.config.yaxis[0].title.text!==void 0){var be=oe.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+re+", 0)"}),ye=oe.drawText({x:0,y:se.globals.gridHeight/2,text:se.config.yaxis[0].title.text,textAnchor:"middle",foreColor:se.config.yaxis[0].title.style.color,fontSize:se.config.yaxis[0].title.style.fontSize,fontWeight:se.config.yaxis[0].title.style.fontWeight,fontFamily:se.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+se.config.yaxis[0].title.style.cssClass});be.add(ye),ne.add(be)}var _e=0;this.isCategoryBarHorizontal&&se.config.yaxis[0].opposite&&(_e=se.globals.gridWidth);var Ae=se.config.xaxis.axisBorder;if(Ae.show){var he=oe.drawLine(se.globals.padHorizontal+Ae.offsetX+_e,1+Ae.offsetY,se.globals.padHorizontal+Ae.offsetX+_e,se.globals.gridHeight+Ae.offsetY,Ae.color,0);ne.add(he)}return se.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(_e,ce.length,se.config.yaxis[0].axisBorder,se.config.yaxis[0].axisTicks,0,te,ne),ne}},{key:"drawXaxisTicks",value:function(ee,te){var ie=this.w,ae=ee;if(!(ee<0||ee-2>ie.globals.gridWidth)){var se=this.offY+ie.config.xaxis.axisTicks.offsetY,oe=se+ie.config.xaxis.axisTicks.height;if(ie.config.xaxis.position==="top"&&(oe=se-ie.config.xaxis.axisTicks.height),ie.config.xaxis.axisTicks.show){var re=new b(this.ctx).drawLine(ee+ie.config.xaxis.axisTicks.offsetX,se+ie.config.xaxis.offsetY,ae+ie.config.xaxis.axisTicks.offsetX,oe+ie.config.xaxis.offsetY,ie.config.xaxis.axisTicks.color);te.add(re),re.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var ee=this.w,te=[],ie=this.xaxisLabels.length,ae=ee.globals.padHorizontal;if(ee.globals.timescaleLabels.length>0)for(var se=0;se<ie;se++)ae=this.xaxisLabels[se].position,te.push(ae);else for(var oe=ie,re=0;re<oe;re++){var ne=oe;ee.globals.isXNumeric&&ee.config.chart.type!=="bar"&&(ne-=1),ae+=ee.globals.gridWidth/ne,te.push(ae)}return te}},{key:"xAxisLabelCorrections",value:function(){var ee=this.w,te=new b(this.ctx),ie=ee.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),ae=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),se=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),oe=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(ee.globals.rotateXLabels||ee.config.xaxis.labels.rotateAlways)for(var re=0;re<ae.length;re++){var ne=te.rotateAroundCenter(ae[re]);ne.y=ne.y-1,ne.x=ne.x+1,ae[re].setAttribute("transform","rotate(".concat(ee.config.xaxis.labels.rotate," ").concat(ne.x," ").concat(ne.y,")")),ae[re].setAttribute("text-anchor","end"),ie.setAttribute("transform","translate(0, ".concat(-10,")"));var le=ae[re].childNodes;ee.config.xaxis.labels.trim&&Array.prototype.forEach.call(le,function(fe){te.placeTextWithEllipsis(fe,fe.textContent,ee.globals.xAxisLabelsHeight-(ee.config.legend.position==="bottom"?20:10))})}else(function(){for(var fe=ee.globals.gridWidth/(ee.globals.labels.length+1),me=0;me<ae.length;me++){var ve=ae[me].childNodes;ee.config.xaxis.labels.trim&&ee.config.xaxis.type!=="datetime"&&Array.prototype.forEach.call(ve,function(be){te.placeTextWithEllipsis(be,be.textContent,fe)})}})();if(se.length>0){var ce=se[se.length-1].getBBox(),ue=se[0].getBBox();ce.x<-20&&se[se.length-1].parentNode.removeChild(se[se.length-1]),ue.x+ue.width>ee.globals.gridWidth&&!ee.globals.isBarHorizontal&&se[0].parentNode.removeChild(se[0]);for(var pe=0;pe<oe.length;pe++)te.placeTextWithEllipsis(oe[pe],oe[pe].textContent,ee.config.yaxis[0].labels.maxWidth-2*parseFloat(ee.config.yaxis[0].title.style.fontSize)-20)}}}]),de}(),_=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.xaxisLabels=te.globals.labels.slice(),this.axesUtils=new B(ee),this.isRangeBar=te.globals.seriesRangeBar.length,te.globals.timescaleLabels.length>0&&(this.xaxisLabels=te.globals.timescaleLabels.slice())}return a(de,[{key:"drawGridArea",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,te=this.w,ie=new b(this.ctx);ee===null&&(ee=ie.group({class:"apexcharts-grid"}));var ae=ie.drawLine(te.globals.padHorizontal,1,te.globals.padHorizontal,te.globals.gridHeight,"transparent"),se=ie.drawLine(te.globals.padHorizontal,te.globals.gridHeight,te.globals.gridWidth,te.globals.gridHeight,"transparent");return ee.add(se),ee.add(ae),ee}},{key:"drawGrid",value:function(){var ee=null;return this.w.globals.axisCharts&&(ee=this.renderGrid(),this.drawGridArea(ee.el)),ee}},{key:"createGridMask",value:function(){var ee=this.w,te=ee.globals,ie=new b(this.ctx),ae=Array.isArray(ee.config.stroke.width)?0:ee.config.stroke.width;if(Array.isArray(ee.config.stroke.width)){var se=0;ee.config.stroke.width.forEach(function(ue){se=Math.max(se,ue)}),ae=se}te.dom.elGridRectMask=document.createElementNS(te.SVGNS,"clipPath"),te.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(te.cuid)),te.dom.elGridRectMarkerMask=document.createElementNS(te.SVGNS,"clipPath"),te.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(te.cuid)),te.dom.elForecastMask=document.createElementNS(te.SVGNS,"clipPath"),te.dom.elForecastMask.setAttribute("id","forecastMask".concat(te.cuid)),te.dom.elNonForecastMask=document.createElementNS(te.SVGNS,"clipPath"),te.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(te.cuid));var oe=ee.config.chart.type,re=0,ne=0;(oe==="bar"||oe==="rangeBar"||oe==="candlestick"||oe==="boxPlot"||ee.globals.comboBarCount>0)&&ee.globals.isXNumeric&&!ee.globals.isBarHorizontal&&(re=ee.config.grid.padding.left,ne=ee.config.grid.padding.right,te.barPadForNumericAxis>re&&(re=te.barPadForNumericAxis,ne=te.barPadForNumericAxis)),te.dom.elGridRect=ie.drawRect(-ae/2-re-2,-ae/2,te.gridWidth+ae+ne+re+4,te.gridHeight+ae,0,"#fff"),new y(this).getLargestMarkerSize();var le=ee.globals.markers.largestSize+1;te.dom.elGridRectMarker=ie.drawRect(2*-le,2*-le,te.gridWidth+4*le,te.gridHeight+4*le,0,"#fff"),te.dom.elGridRectMask.appendChild(te.dom.elGridRect.node),te.dom.elGridRectMarkerMask.appendChild(te.dom.elGridRectMarker.node);var ce=te.dom.baseEl.querySelector("defs");ce.appendChild(te.dom.elGridRectMask),ce.appendChild(te.dom.elForecastMask),ce.appendChild(te.dom.elNonForecastMask),ce.appendChild(te.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(ee){var te=ee.i,ie=ee.x1,ae=ee.y1,se=ee.x2,oe=ee.y2,re=ee.xCount,ne=ee.parent,le=this.w;te===0&&le.globals.skipFirstTimelinelabel||te===re-1&&le.globals.skipLastTimelinelabel&&!le.config.xaxis.labels.formatter||le.config.chart.type==="radar"||(le.config.grid.xaxis.lines.show&&this._drawGridLine({x1:ie,y1:ae,x2:se,y2:oe,parent:ne}),new G(this.ctx).drawXaxisTicks(ie,this.elg))}},{key:"_drawGridLine",value:function(ee){var te=ee.x1,ie=ee.y1,ae=ee.x2,se=ee.y2,oe=ee.parent,re=this.w,ne=oe.node.classList.contains("apexcharts-gridlines-horizontal"),le=re.config.grid.strokeDashArray,ce=re.globals.barPadForNumericAxis,ue=new b(this).drawLine(te-(ne?ce:0),ie,ae+(ne?ce:0),se,re.config.grid.borderColor,le);ue.node.classList.add("apexcharts-gridline"),oe.add(ue)}},{key:"_drawGridBandRect",value:function(ee){var te=ee.c,ie=ee.x1,ae=ee.y1,se=ee.x2,oe=ee.y2,re=ee.type,ne=this.w,le=new b(this.ctx),ce=ne.globals.barPadForNumericAxis;if(re!=="column"||ne.config.xaxis.type!=="datetime"){var ue=ne.config.grid[re].colors[te],pe=le.drawRect(ie-(re==="row"?ce:0),ae,se+(re==="row"?2*ce:0),oe,0,ue,ne.config.grid[re].opacity);this.elg.add(pe),pe.attr("clip-path","url(#gridRectMask".concat(ne.globals.cuid,")")),pe.node.classList.add("apexcharts-grid-".concat(re))}}},{key:"_drawXYLines",value:function(ee){var te=this,ie=ee.xCount,ae=ee.tickAmount,se=this.w;if(se.config.grid.xaxis.lines.show||se.config.xaxis.axisTicks.show){var oe,re=se.globals.padHorizontal,ne=se.globals.gridHeight;se.globals.timescaleLabels.length?function(me){for(var ve=me.xC,be=me.x1,ye=me.y1,_e=me.x2,Ae=me.y2,he=0;he<ve;he++)be=te.xaxisLabels[he].position,_e=te.xaxisLabels[he].position,te._drawGridLines({i:he,x1:be,y1:ye,x2:_e,y2:Ae,xCount:ie,parent:te.elgridLinesV})}({xC:ie,x1:re,y1:0,x2:oe,y2:ne}):(se.globals.isXNumeric&&(ie=se.globals.xAxisScale.result.length),se.config.xaxis.convertedCatToNumeric&&(ie=se.globals.xaxisLabelsCount),function(me){var ve=me.xC,be=me.x1,ye=me.y1,_e=me.x2,Ae=me.y2;if(se.config.xaxis.tickAmount!==void 0&&se.config.xaxis.tickAmount!=="dataPoints")se.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function(ge,xe){var we=ge.getBBox();te._drawGridLines({i:xe,x1:we.x+we.width/2,y1:ye,x2:we.x+we.width/2,y2:Ae,xCount:ie,parent:te.elgridLinesV})});else for(var he=0;he<ve+(se.globals.isXNumeric?0:1);he++)he===0&&ve===1&&se.globals.dataPoints===1&&(_e=be=se.globals.gridWidth/2),te._drawGridLines({i:he,x1:be,y1:ye,x2:_e,y2:Ae,xCount:ie,parent:te.elgridLinesV}),_e=be+=se.globals.gridWidth/(se.globals.isXNumeric?ve-1:ve)}({xC:ie,x1:re,y1:0,x2:oe,y2:ne}))}if(se.config.grid.yaxis.lines.show){var le=0,ce=0,ue=se.globals.gridWidth,pe=ae+1;this.isRangeBar&&(pe=se.globals.labels.length);for(var fe=0;fe<pe+(this.isRangeBar?1:0);fe++)this._drawGridLine({x1:0,y1:le,x2:ue,y2:ce,parent:this.elgridLinesH}),ce=le+=se.globals.gridHeight/(this.isRangeBar?pe:ae)}}},{key:"_drawInvertedXYLines",value:function(ee){var te=ee.xCount,ie=this.w;if(ie.config.grid.xaxis.lines.show||ie.config.xaxis.axisTicks.show)for(var ae,se=ie.globals.padHorizontal,oe=ie.globals.gridHeight,re=0;re<te+1;re++)ie.config.grid.xaxis.lines.show&&this._drawGridLine({x1:se,y1:0,x2:ae,y2:oe,parent:this.elgridLinesV}),new G(this.ctx).drawXaxisTicks(se,this.elg),ae=se=se+ie.globals.gridWidth/te+.3;if(ie.config.grid.yaxis.lines.show)for(var ne=0,le=0,ce=ie.globals.gridWidth,ue=0;ue<ie.globals.dataPoints+1;ue++)this._drawGridLine({x1:0,y1:ne,x2:ce,y2:le,parent:this.elgridLinesH}),le=ne+=ie.globals.gridHeight/ie.globals.dataPoints}},{key:"renderGrid",value:function(){var ee=this.w,te=new b(this.ctx);this.elg=te.group({class:"apexcharts-grid"}),this.elgridLinesH=te.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=te.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),ee.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var ie,ae=ee.globals.yAxisScale.length?ee.globals.yAxisScale[0].result.length-1:5,se=0;se<ee.globals.series.length&&(ee.globals.yAxisScale[se]!==void 0&&(ae=ee.globals.yAxisScale[se].result.length-1),!(ae>2));se++);return!ee.globals.isBarHorizontal||this.isRangeBar?(ie=this.xaxisLabels.length,this.isRangeBar&&(ae=ee.globals.labels.length,ee.config.xaxis.tickAmount&&ee.config.xaxis.labels.formatter&&(ie=ee.config.xaxis.tickAmount)),this._drawXYLines({xCount:ie,tickAmount:ae})):(ie=ae,ae=ee.globals.xTickAmount,this._drawInvertedXYLines({xCount:ie,tickAmount:ae})),this.drawGridBands(ie,ae),{el:this.elg,xAxisTickWidth:ee.globals.gridWidth/ie}}},{key:"drawGridBands",value:function(ee,te){var ie=this.w;if(ie.config.grid.row.colors!==void 0&&ie.config.grid.row.colors.length>0)for(var ae=0,se=ie.globals.gridHeight/te,oe=ie.globals.gridWidth,re=0,ne=0;re<te;re++,ne++)ne>=ie.config.grid.row.colors.length&&(ne=0),this._drawGridBandRect({c:ne,x1:0,y1:ae,x2:oe,y2:se,type:"row"}),ae+=ie.globals.gridHeight/te;if(ie.config.grid.column.colors!==void 0&&ie.config.grid.column.colors.length>0)for(var le=ie.globals.isBarHorizontal||ie.config.xaxis.type!=="category"&&!ie.config.xaxis.convertedCatToNumeric?ee:ee-1,ce=ie.globals.padHorizontal,ue=ie.globals.padHorizontal+ie.globals.gridWidth/le,pe=ie.globals.gridHeight,fe=0,me=0;fe<ee;fe++,me++)me>=ie.config.grid.column.colors.length&&(me=0),this._drawGridBandRect({c:me,x1:ce,y1:0,x2:ue,y2:pe,type:"column"}),ce+=ie.globals.gridWidth/le}}]),de}(),j=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"niceScale",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,se=arguments.length>4?arguments[4]:void 0,oe=this.w,re=Math.abs(te-ee);if((ie=this._adjustTicksForSmallRange(ie,ae,re))==="dataPoints"&&(ie=oe.globals.dataPoints-1),ee===Number.MIN_VALUE&&te===0||!p.isNumber(ee)&&!p.isNumber(te)||ee===Number.MIN_VALUE&&te===-Number.MAX_VALUE){ee=0,te=ie;var ne=this.linearScale(ee,te,ie);return ne}ee>te?(console.warn("axis.min cannot be greater than axis.max"),te=ee+.1):ee===te&&(ee=ee===0?0:ee-.5,te=te===0?2:te+.5);var le=[];re<1&&se&&(oe.config.chart.type==="candlestick"||oe.config.series[ae].type==="candlestick"||oe.config.chart.type==="boxPlot"||oe.config.series[ae].type==="boxPlot"||oe.globals.isRangeData)&&(te*=1.01);var ce=ie+1;ce<2?ce=2:ce>2&&(ce-=2);var ue=re/ce,pe=Math.floor(p.log10(ue)),fe=Math.pow(10,pe),me=Math.round(ue/fe);me<1&&(me=1);var ve=me*fe,be=ve*Math.floor(ee/ve),ye=ve*Math.ceil(te/ve),_e=be;if(se&&re>2){for(;le.push(_e),!((_e+=ve)>ye););return{result:le,niceMin:le[0],niceMax:le[le.length-1]}}var Ae=ee;(le=[]).push(Ae);for(var he=Math.abs(te-ee)/ie,ge=0;ge<=ie;ge++)Ae+=he,le.push(Ae);return le[le.length-2]>=te&&le.pop(),{result:le,niceMin:le[0],niceMax:le[le.length-1]}}},{key:"linearScale",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,ae=arguments.length>3?arguments[3]:void 0,se=Math.abs(te-ee);(ie=this._adjustTicksForSmallRange(ie,ae,se))==="dataPoints"&&(ie=this.w.globals.dataPoints-1);var oe=se/ie;ie===Number.MAX_VALUE&&(ie=10,oe=1);for(var re=[],ne=ee;ie>=0;)re.push(ne),ne+=oe,ie-=1;return{result:re,niceMin:re[0],niceMax:re[re.length-1]}}},{key:"logarithmicScale",value:function(ee,te){for(var ie=[],ae=Math.ceil(Math.log(ee)/Math.log(te))+1,se=0;se<ae;se++)ie.push(Math.pow(te,se));return{result:ie,niceMin:ie[0],niceMax:ie[ie.length-1]}}},{key:"_adjustTicksForSmallRange",value:function(ee,te,ie){var ae=ee;if(te!==void 0&&this.w.config.yaxis[te].labels.formatter&&this.w.config.yaxis[te].tickAmount===void 0){var se=this.w.config.yaxis[te].labels.formatter(1);p.isNumber(Number(se))&&!p.isFloat(se)&&(ae=Math.ceil(ie))}return ae<ee?ae:ee}},{key:"setYScaleForIndex",value:function(ee,te,ie){var ae=this.w.globals,se=this.w.config,oe=ae.isBarHorizontal?se.xaxis:se.yaxis[ee];ae.yAxisScale[ee]===void 0&&(ae.yAxisScale[ee]=[]);var re=Math.abs(ie-te);if(oe.logarithmic&&re<=5&&(ae.invalidLogScale=!0),oe.logarithmic&&re>5)ae.allSeriesCollapsed=!1,ae.yAxisScale[ee]=this.logarithmicScale(ie,oe.logBase);else if(ie!==-Number.MAX_VALUE&&p.isNumber(ie))if(ae.allSeriesCollapsed=!1,oe.min===void 0&&oe.max===void 0||oe.forceNiceScale){var ne=se.yaxis[ee].max===void 0&&se.yaxis[ee].min===void 0||se.yaxis[ee].forceNiceScale;ae.yAxisScale[ee]=this.niceScale(te,ie,oe.tickAmount?oe.tickAmount:re<5&&re>1?re+1:5,ee,ne)}else ae.yAxisScale[ee]=this.linearScale(te,ie,oe.tickAmount,ee);else ae.yAxisScale[ee]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(ee,te){var ie=this.w,ae=ie.globals,se=ie.config.xaxis,oe=Math.abs(te-ee);return te!==-Number.MAX_VALUE&&p.isNumber(te)?ae.xAxisScale=this.linearScale(ee,te,se.tickAmount?se.tickAmount:oe<5&&oe>1?oe+1:5,0):ae.xAxisScale=this.linearScale(0,5,5),ae.xAxisScale}},{key:"setMultipleYScales",value:function(){var ee=this,te=this.w.globals,ie=this.w.config,ae=te.minYArr.concat([]),se=te.maxYArr.concat([]),oe=[];ie.yaxis.forEach(function(re,ne){var le=ne;ie.series.forEach(function(pe,fe){pe.name===re.seriesName&&(le=fe,ne!==fe?oe.push({index:fe,similarIndex:ne,alreadyExists:!0}):oe.push({index:fe}))});var ce=ae[le],ue=se[le];ee.setYScaleForIndex(ne,ce,ue)}),this.sameScaleInMultipleAxes(ae,se,oe)}},{key:"sameScaleInMultipleAxes",value:function(ee,te,ie){var ae=this,se=this.w.config,oe=this.w.globals,re=[];ie.forEach(function(ve){ve.alreadyExists&&(re[ve.index]===void 0&&(re[ve.index]=[]),re[ve.index].push(ve.index),re[ve.index].push(ve.similarIndex))}),oe.yAxisSameScaleIndices=re,re.forEach(function(ve,be){re.forEach(function(ye,_e){var Ae,he;be!==_e&&(Ae=ve,he=ye,Ae.filter(function(ge){return he.indexOf(ge)!==-1})).length>0&&(re[be]=re[be].concat(re[_e]))})});var ne=re.map(function(ve){return ve.filter(function(be,ye){return ve.indexOf(be)===ye})}).map(function(ve){return ve.sort()});re=re.filter(function(ve){return!!ve});var le=ne.slice(),ce=le.map(function(ve){return JSON.stringify(ve)});le=le.filter(function(ve,be){return ce.indexOf(JSON.stringify(ve))===be});var ue=[],pe=[];ee.forEach(function(ve,be){le.forEach(function(ye,_e){ye.indexOf(be)>-1&&(ue[_e]===void 0&&(ue[_e]=[],pe[_e]=[]),ue[_e].push({key:be,value:ve}),pe[_e].push({key:be,value:te[be]}))})});var fe=Array.apply(null,Array(le.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),me=Array.apply(null,Array(le.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);ue.forEach(function(ve,be){ve.forEach(function(ye,_e){fe[be]=Math.min(ye.value,fe[be])})}),pe.forEach(function(ve,be){ve.forEach(function(ye,_e){me[be]=Math.max(ye.value,me[be])})}),ee.forEach(function(ve,be){pe.forEach(function(ye,_e){var Ae=fe[_e],he=me[_e];se.chart.stacked&&(he=0,ye.forEach(function(ge,xe){ge.value!==-Number.MAX_VALUE&&(he+=ge.value),Ae!==Number.MIN_VALUE&&(Ae+=ue[_e][xe].value)})),ye.forEach(function(ge,xe){ye[xe].key===be&&(se.yaxis[be].min!==void 0&&(Ae=typeof se.yaxis[be].min=="function"?se.yaxis[be].min(oe.minY):se.yaxis[be].min),se.yaxis[be].max!==void 0&&(he=typeof se.yaxis[be].max=="function"?se.yaxis[be].max(oe.maxY):se.yaxis[be].max),ae.setYScaleForIndex(be,Ae,he))})})})}},{key:"autoScaleY",value:function(ee,te,ie){ee||(ee=this);var ae=ee.w;if(ae.globals.isMultipleYAxis||ae.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),te;var se=ae.globals.seriesX[0],oe=ae.config.chart.stacked;return te.forEach(function(re,ne){for(var le=0,ce=0;ce<se.length;ce++)if(se[ce]>=ie.xaxis.min){le=ce;break}var ue,pe,fe=ae.globals.minYArr[ne],me=ae.globals.maxYArr[ne],ve=ae.globals.stackedSeriesTotals;ae.globals.series.forEach(function(be,ye){var _e=be[le];oe?(_e=ve[le],ue=pe=_e,ve.forEach(function(Ae,he){se[he]<=ie.xaxis.max&&se[he]>=ie.xaxis.min&&(Ae>pe&&Ae!==null&&(pe=Ae),be[he]<ue&&be[he]!==null&&(ue=be[he]))})):(ue=pe=_e,be.forEach(function(Ae,he){if(se[he]<=ie.xaxis.max&&se[he]>=ie.xaxis.min){var ge=Ae,xe=Ae;ae.globals.series.forEach(function(we,Ce){Ae!==null&&(ge=Math.min(we[he],ge),xe=Math.max(we[he],xe))}),xe>pe&&xe!==null&&(pe=xe),ge<ue&&ge!==null&&(ue=ge)}})),ue===void 0&&pe===void 0&&(ue=fe,pe=me),(pe*=pe<0?.9:1.1)<0&&pe<me&&(pe=me),(ue*=ue<0?1.1:.9)<0&&ue>fe&&(ue=fe),te.length>1?(te[ye].min=re.min===void 0?ue:re.min,te[ye].max=re.max===void 0?pe:re.max):(te[0].min=re.min===void 0?ue:re.min,te[0].max=re.max===void 0?pe:re.max)})}),te}}]),de}(),U=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.scales=new j(ee)}return a(de,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-Number.MAX_VALUE,ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,se=this.w.config,oe=this.w.globals,re=-Number.MAX_VALUE,ne=Number.MIN_VALUE;ae===null&&(ae=ee+1);var le=oe.series,ce=le,ue=le;se.chart.type==="candlestick"?(ce=oe.seriesCandleL,ue=oe.seriesCandleH):se.chart.type==="boxPlot"?(ce=oe.seriesCandleO,ue=oe.seriesCandleC):oe.isRangeData&&(ce=oe.seriesRangeStart,ue=oe.seriesRangeEnd);for(var pe=ee;pe<ae;pe++){oe.dataPoints=Math.max(oe.dataPoints,le[pe].length);for(var fe=0;fe<oe.series[pe].length;fe++){var me=le[pe][fe];me!==null&&p.isNumber(me)?(ue[pe][fe]!==void 0&&(re=Math.max(re,ue[pe][fe]),te=Math.min(te,ue[pe][fe])),ce[pe][fe]!==void 0&&(te=Math.min(te,ce[pe][fe]),ie=Math.max(ie,ce[pe][fe])),this.w.config.chart.type!=="candlestick"&&this.w.config.chart.type!=="boxPlot"||(oe.seriesCandleC[pe][fe]!==void 0&&(re=Math.max(re,oe.seriesCandleO[pe][fe]),re=Math.max(re,oe.seriesCandleH[pe][fe]),re=Math.max(re,oe.seriesCandleL[pe][fe]),re=Math.max(re,oe.seriesCandleC[pe][fe]),this.w.config.chart.type==="boxPlot"&&(re=Math.max(re,oe.seriesCandleM[pe][fe]))),!se.series[pe].type||se.series[pe].type==="candlestick"&&se.series[pe].type==="boxPlot"||(re=Math.max(re,oe.series[pe][fe]),te=Math.min(te,oe.series[pe][fe])),ie=re),oe.seriesGoals[pe]&&oe.seriesGoals[pe][fe]&&Array.isArray(oe.seriesGoals[pe][fe])&&oe.seriesGoals[pe][fe].forEach(function(ve){ne!==Number.MIN_VALUE&&(ne=Math.min(ne,ve.value),te=ne),re=Math.max(re,ve.value),ie=re}),p.isFloat(me)&&(me=p.noExponents(me),oe.yValueDecimal=Math.max(oe.yValueDecimal,me.toString().split(".")[1].length)),ne>ce[pe][fe]&&ce[pe][fe]<0&&(ne=ce[pe][fe])):oe.hasNullValues=!0}}return se.chart.type==="rangeBar"&&oe.seriesRangeStart.length&&oe.isBarHorizontal&&(ne=te),se.chart.type==="bar"&&(ne<0&&re<0&&(re=0),ne===Number.MIN_VALUE&&(ne=0)),{minY:ne,maxY:re,lowestY:te,highestY:ie}}},{key:"setYRange",value:function(){var ee=this.w.globals,te=this.w.config;ee.maxY=-Number.MAX_VALUE,ee.minY=Number.MIN_VALUE;var ie=Number.MAX_VALUE;if(ee.isMultipleYAxis)for(var ae=0;ae<ee.series.length;ae++){var se=this.getMinYMaxY(ae,ie,null,ae+1);ee.minYArr.push(se.minY),ee.maxYArr.push(se.maxY),ie=se.lowestY}var oe=this.getMinYMaxY(0,ie,null,ee.series.length);if(ee.minY=oe.minY,ee.maxY=oe.maxY,ie=oe.lowestY,te.chart.stacked&&this._setStackedMinMax(),(te.chart.type==="line"||te.chart.type==="area"||te.chart.type==="candlestick"||te.chart.type==="boxPlot"||te.chart.type==="rangeBar"&&!ee.isBarHorizontal)&&ee.minY===Number.MIN_VALUE&&ie!==-Number.MAX_VALUE&&ie!==ee.maxY){var re=ee.maxY-ie;(ie>=0&&ie<=10||te.yaxis[0].min!==void 0||te.yaxis[0].max!==void 0)&&(re=0),ee.minY=ie-5*re/100,ie>0&&ee.minY<0&&(ee.minY=0),ee.maxY=ee.maxY+5*re/100}return te.yaxis.forEach(function(ne,le){ne.max!==void 0&&(typeof ne.max=="number"?ee.maxYArr[le]=ne.max:typeof ne.max=="function"&&(ee.maxYArr[le]=ne.max(ee.isMultipleYAxis?ee.maxYArr[le]:ee.maxY)),ee.maxY=ee.maxYArr[le]),ne.min!==void 0&&(typeof ne.min=="number"?ee.minYArr[le]=ne.min:typeof ne.min=="function"&&(ee.minYArr[le]=ne.min(ee.isMultipleYAxis?ee.minYArr[le]===Number.MIN_VALUE?0:ee.minYArr[le]:ee.minY)),ee.minY=ee.minYArr[le])}),ee.isBarHorizontal&&["min","max"].forEach(function(ne){te.xaxis[ne]!==void 0&&typeof te.xaxis[ne]=="number"&&(ne==="min"?ee.minY=te.xaxis[ne]:ee.maxY=te.xaxis[ne])}),ee.isMultipleYAxis?(this.scales.setMultipleYScales(),ee.minY=ie,ee.yAxisScale.forEach(function(ne,le){ee.minYArr[le]=ne.niceMin,ee.maxYArr[le]=ne.niceMax})):(this.scales.setYScaleForIndex(0,ee.minY,ee.maxY),ee.minY=ee.yAxisScale[0].niceMin,ee.maxY=ee.yAxisScale[0].niceMax,ee.minYArr[0]=ee.yAxisScale[0].niceMin,ee.maxYArr[0]=ee.yAxisScale[0].niceMax),{minY:ee.minY,maxY:ee.maxY,minYArr:ee.minYArr,maxYArr:ee.maxYArr,yAxisScale:ee.yAxisScale}}},{key:"setXRange",value:function(){var ee=this.w.globals,te=this.w.config,ie=te.xaxis.type==="numeric"||te.xaxis.type==="datetime"||te.xaxis.type==="category"&&!ee.noLabelsProvided||ee.noLabelsProvided||ee.isXNumeric;if(ee.isXNumeric&&function(){for(var re=0;re<ee.series.length;re++)if(ee.labels[re])for(var ne=0;ne<ee.labels[re].length;ne++)ee.labels[re][ne]!==null&&p.isNumber(ee.labels[re][ne])&&(ee.maxX=Math.max(ee.maxX,ee.labels[re][ne]),ee.initialMaxX=Math.max(ee.maxX,ee.labels[re][ne]),ee.minX=Math.min(ee.minX,ee.labels[re][ne]),ee.initialMinX=Math.min(ee.minX,ee.labels[re][ne]))}(),ee.noLabelsProvided&&te.xaxis.categories.length===0&&(ee.maxX=ee.labels[ee.labels.length-1],ee.initialMaxX=ee.labels[ee.labels.length-1],ee.minX=1,ee.initialMinX=1),ee.isXNumeric||ee.noLabelsProvided||ee.dataFormatXNumeric){var ae;if(te.xaxis.tickAmount===void 0?(ae=Math.round(ee.svgWidth/150),te.xaxis.type==="numeric"&&ee.dataPoints<30&&(ae=ee.dataPoints-1),ae>ee.dataPoints&&ee.dataPoints!==0&&(ae=ee.dataPoints-1)):te.xaxis.tickAmount==="dataPoints"?(ee.series.length>1&&(ae=ee.series[ee.maxValsInArrayIndex].length-1),ee.isXNumeric&&(ae=ee.maxX-ee.minX-1)):ae=te.xaxis.tickAmount,ee.xTickAmount=ae,te.xaxis.max!==void 0&&typeof te.xaxis.max=="number"&&(ee.maxX=te.xaxis.max),te.xaxis.min!==void 0&&typeof te.xaxis.min=="number"&&(ee.minX=te.xaxis.min),te.xaxis.range!==void 0&&(ee.minX=ee.maxX-te.xaxis.range),ee.minX!==Number.MAX_VALUE&&ee.maxX!==-Number.MAX_VALUE)if(te.xaxis.convertedCatToNumeric&&!ee.dataFormatXNumeric){for(var se=[],oe=ee.minX-1;oe<ee.maxX;oe++)se.push(oe+1);ee.xAxisScale={result:se,niceMin:se[0],niceMax:se[se.length-1]}}else ee.xAxisScale=this.scales.setXScale(ee.minX,ee.maxX);else ee.xAxisScale=this.scales.linearScale(1,ae,ae),ee.noLabelsProvided&&ee.labels.length>0&&(ee.xAxisScale=this.scales.linearScale(1,ee.labels.length,ae-1),ee.seriesX=ee.labels.slice());ie&&(ee.labels=ee.xAxisScale.result.slice())}return ee.isBarHorizontal&&ee.labels.length&&(ee.xTickAmount=ee.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:ee.minX,maxX:ee.maxX}}},{key:"setZRange",value:function(){var ee=this.w.globals;if(ee.isDataXYZ){for(var te=0;te<ee.series.length;te++)if(ee.seriesZ[te]!==void 0)for(var ie=0;ie<ee.seriesZ[te].length;ie++)ee.seriesZ[te][ie]!==null&&p.isNumber(ee.seriesZ[te][ie])&&(ee.maxZ=Math.max(ee.maxZ,ee.seriesZ[te][ie]),ee.minZ=Math.min(ee.minZ,ee.seriesZ[te][ie]))}}},{key:"_handleSingleDataPoint",value:function(){var ee=this.w.globals,te=this.w.config;if(ee.minX===ee.maxX){var ie=new Y(this.ctx);if(te.xaxis.type==="datetime"){var ae=ie.getDate(ee.minX);ae.setUTCDate(ae.getDate()-2),ee.minX=new Date(ae).getTime();var se=ie.getDate(ee.maxX);se.setUTCDate(se.getDate()+2),ee.maxX=new Date(se).getTime()}else(te.xaxis.type==="numeric"||te.xaxis.type==="category"&&!ee.noLabelsProvided)&&(ee.minX=ee.minX-2,ee.initialMinX=ee.minX,ee.maxX=ee.maxX+2,ee.initialMaxX=ee.maxX)}}},{key:"_getMinXDiff",value:function(){var ee=this.w.globals;ee.isXNumeric&&ee.seriesX.forEach(function(te,ie){te.length===1&&te.push(ee.seriesX[ee.maxValsInArrayIndex][ee.seriesX[ee.maxValsInArrayIndex].length-1]);var ae=te.slice();ae.sort(function(se,oe){return se-oe}),ae.forEach(function(se,oe){if(oe>0){var re=se-ae[oe-1];re>0&&(ee.minXDiff=Math.min(re,ee.minXDiff))}}),ee.dataPoints===1&&ee.minXDiff===Number.MAX_VALUE&&(ee.minXDiff=.5)})}},{key:"_setStackedMinMax",value:function(){var ee=this.w.globals,te=[],ie=[];if(ee.series.length)for(var ae=0;ae<ee.series[ee.maxValsInArrayIndex].length;ae++)for(var se=0,oe=0,re=0;re<ee.series.length;re++)ee.series[re][ae]!==null&&p.isNumber(ee.series[re][ae])&&(ee.series[re][ae]>0?se=se+parseFloat(ee.series[re][ae])+1e-4:oe+=parseFloat(ee.series[re][ae])),re===ee.series.length-1&&(te.push(se),ie.push(oe));for(var ne=0;ne<te.length;ne++)ee.maxY=Math.max(ee.maxY,te[ne]),ee.minY=Math.min(ee.minY,ie[ne])}}]),de}(),q=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.xaxisFontSize=te.config.xaxis.labels.style.fontSize,this.axisFontFamily=te.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=te.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal=te.config.chart.type==="bar"&&te.config.plotOptions.bar.horizontal,this.xAxisoffX=0,te.config.xaxis.position==="bottom"&&(this.xAxisoffX=te.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new B(ee)}return a(de,[{key:"drawYaxis",value:function(ee){var te=this,ie=this.w,ae=new b(this.ctx),se=ie.config.yaxis[ee].labels.style,oe=se.fontSize,re=se.fontFamily,ne=se.fontWeight,le=ae.group({class:"apexcharts-yaxis",rel:ee,transform:"translate("+ie.globals.translateYAxisX[ee]+", 0)"});if(this.axesUtils.isYAxisHidden(ee))return le;var ce=ae.group({class:"apexcharts-yaxis-texts-g"});le.add(ce);var ue=ie.globals.yAxisScale[ee].result.length-1,pe=ie.globals.gridHeight/ue,fe=ie.globals.translateY,me=ie.globals.yLabelFormatters[ee],ve=ie.globals.yAxisScale[ee].result.slice();ve=this.axesUtils.checkForReversedLabels(ee,ve);var be="";if(ie.config.yaxis[ee].labels.show)for(var ye=function(Se){var ke=ve[Se];ke=me(ke,Se,ie);var Pe=ie.config.yaxis[ee].labels.padding;ie.config.yaxis[ee].opposite&&ie.config.yaxis.length!==0&&(Pe*=-1);var Ee=te.axesUtils.getYAxisForeColor(se.colors,ee),Ie=ae.drawText({x:Pe,y:fe+ue/10+ie.config.yaxis[ee].labels.offsetY+1,text:ke,textAnchor:ie.config.yaxis[ee].opposite?"start":"end",fontSize:oe,fontFamily:re,fontWeight:ne,foreColor:Array.isArray(Ee)?Ee[Se]:Ee,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+se.cssClass});Se===ue&&(be=Ie),ce.add(Ie);var Te=document.createElementNS(ie.globals.SVGNS,"title");if(Te.textContent=Array.isArray(ke)?ke.join(" "):ke,Ie.node.appendChild(Te),ie.config.yaxis[ee].labels.rotate!==0){var Le=ae.rotateAroundCenter(be.node),ze=ae.rotateAroundCenter(Ie.node);Ie.node.setAttribute("transform","rotate(".concat(ie.config.yaxis[ee].labels.rotate," ").concat(Le.x," ").concat(ze.y,")"))}fe+=pe},_e=ue;_e>=0;_e--)ye(_e);if(ie.config.yaxis[ee].title.text!==void 0){var Ae=ae.group({class:"apexcharts-yaxis-title"}),he=0;ie.config.yaxis[ee].opposite&&(he=ie.globals.translateYAxisX[ee]);var ge=ae.drawText({x:he,y:ie.globals.gridHeight/2+ie.globals.translateY+ie.config.yaxis[ee].title.offsetY,text:ie.config.yaxis[ee].title.text,textAnchor:"end",foreColor:ie.config.yaxis[ee].title.style.color,fontSize:ie.config.yaxis[ee].title.style.fontSize,fontWeight:ie.config.yaxis[ee].title.style.fontWeight,fontFamily:ie.config.yaxis[ee].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+ie.config.yaxis[ee].title.style.cssClass});Ae.add(ge),le.add(Ae)}var xe=ie.config.yaxis[ee].axisBorder,we=31+xe.offsetX;if(ie.config.yaxis[ee].opposite&&(we=-31-xe.offsetX),xe.show){var Ce=ae.drawLine(we,ie.globals.translateY+xe.offsetY-2,we,ie.globals.gridHeight+ie.globals.translateY+xe.offsetY+2,xe.color,0,xe.width);le.add(Ce)}return ie.config.yaxis[ee].axisTicks.show&&this.axesUtils.drawYAxisTicks(we,ue,xe,ie.config.yaxis[ee].axisTicks,ee,pe,le),le}},{key:"drawYaxisInversed",value:function(ee){var te=this.w,ie=new b(this.ctx),ae=ie.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),se=ie.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(te.globals.translateXAxisX,", ").concat(te.globals.translateXAxisY,")")});ae.add(se);var oe=te.globals.yAxisScale[ee].result.length-1,re=te.globals.gridWidth/oe+.1,ne=re+te.config.xaxis.labels.offsetX,le=te.globals.xLabelFormatter,ce=te.globals.yAxisScale[ee].result.slice(),ue=te.globals.timescaleLabels;ue.length>0&&(this.xaxisLabels=ue.slice(),oe=(ce=ue.slice()).length),ce=this.axesUtils.checkForReversedLabels(ee,ce);var pe=ue.length;if(te.config.xaxis.labels.show)for(var fe=pe?0:oe;pe?fe<pe:fe>=0;pe?fe++:fe--){var me=ce[fe];me=le(me,fe,te);var ve=te.globals.gridWidth+te.globals.padHorizontal-(ne-re+te.config.xaxis.labels.offsetX);if(ue.length){var be=this.axesUtils.getLabel(ce,ue,ve,fe,this.drawnLabels,this.xaxisFontSize);ve=be.x,me=be.text,this.drawnLabels.push(be.text),fe===0&&te.globals.skipFirstTimelinelabel&&(me=""),fe===ce.length-1&&te.globals.skipLastTimelinelabel&&(me="")}var ye=ie.drawText({x:ve,y:this.xAxisoffX+te.config.xaxis.labels.offsetY+30-(te.config.xaxis.position==="top"?te.globals.xAxisHeight+te.config.xaxis.axisTicks.height-2:0),text:me,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[ee]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:te.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+te.config.xaxis.labels.style.cssClass});se.add(ye),ye.tspan(me);var _e=document.createElementNS(te.globals.SVGNS,"title");_e.textContent=me,ye.node.appendChild(_e),ne+=re}return this.inversedYAxisTitleText(ae),this.inversedYAxisBorder(ae),ae}},{key:"inversedYAxisBorder",value:function(ee){var te=this.w,ie=new b(this.ctx),ae=te.config.xaxis.axisBorder;if(ae.show){var se=0;te.config.chart.type==="bar"&&te.globals.isXNumeric&&(se-=15);var oe=ie.drawLine(te.globals.padHorizontal+se+ae.offsetX,this.xAxisoffX,te.globals.gridWidth,this.xAxisoffX,ae.color,0,ae.height);ee.add(oe)}}},{key:"inversedYAxisTitleText",value:function(ee){var te=this.w,ie=new b(this.ctx);if(te.config.xaxis.title.text!==void 0){var ae=ie.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),se=ie.drawText({x:te.globals.gridWidth/2+te.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(te.config.xaxis.title.style.fontSize)+te.config.xaxis.title.offsetY+20,text:te.config.xaxis.title.text,textAnchor:"middle",fontSize:te.config.xaxis.title.style.fontSize,fontFamily:te.config.xaxis.title.style.fontFamily,fontWeight:te.config.xaxis.title.style.fontWeight,foreColor:te.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+te.config.xaxis.title.style.cssClass});ae.add(se),ee.add(ae)}}},{key:"yAxisTitleRotate",value:function(ee,te){var ie=this.w,ae=new b(this.ctx),se={width:0,height:0},oe={width:0,height:0},re=ie.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(ee,"'] .apexcharts-yaxis-texts-g"));re!==null&&(se=re.getBoundingClientRect());var ne=ie.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(ee,"'] .apexcharts-yaxis-title text"));if(ne!==null&&(oe=ne.getBoundingClientRect()),ne!==null){var le=this.xPaddingForYAxisTitle(ee,se,oe,te);ne.setAttribute("x",le.xPos-(te?10:0))}if(ne!==null){var ce=ae.rotateAroundCenter(ne);ne.setAttribute("transform","rotate(".concat(te?-1*ie.config.yaxis[ee].title.rotate:ie.config.yaxis[ee].title.rotate," ").concat(ce.x," ").concat(ce.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(ee,te,ie,ae){var se=this.w,oe=0,re=0,ne=10;return se.config.yaxis[ee].title.text===void 0||ee<0?{xPos:re,padd:0}:(ae?(re=te.width+se.config.yaxis[ee].title.offsetX+ie.width/2+ne/2,(oe+=1)===0&&(re-=ne/2)):(re=-1*te.width+se.config.yaxis[ee].title.offsetX+ne/2+ie.width/2,se.globals.isBarHorizontal&&(ne=25,re=-1*te.width-se.config.yaxis[ee].title.offsetX-ne)),{xPos:re,padd:ne})}},{key:"setYAxisXPosition",value:function(ee,te){var ie=this.w,ae=0,se=0,oe=18,re=1;ie.config.yaxis.length>1&&(this.multipleYs=!0),ie.config.yaxis.map(function(ne,le){var ce=ie.globals.ignoreYAxisIndexes.indexOf(le)>-1||!ne.show||ne.floating||ee[le].width===0,ue=ee[le].width+te[le].width;ne.opposite?ie.globals.isBarHorizontal?(se=ie.globals.gridWidth+ie.globals.translateX-1,ie.globals.translateYAxisX[le]=se-ne.labels.offsetX):(se=ie.globals.gridWidth+ie.globals.translateX+re,ce||(re=re+ue+20),ie.globals.translateYAxisX[le]=se-ne.labels.offsetX+20):(ae=ie.globals.translateX-oe,ce||(oe=oe+ue+20),ie.globals.translateYAxisX[le]=ae+ne.labels.offsetX)})}},{key:"setYAxisTextAlignments",value:function(){var ee=this.w,te=ee.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(te=p.listToArray(te)).forEach(function(ie,ae){var se=ee.config.yaxis[ae];if(se&&se.labels.align!==void 0){var oe=ee.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(ae,"'] .apexcharts-yaxis-texts-g")),re=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(ae,"'] .apexcharts-yaxis-label"));re=p.listToArray(re);var ne=oe.getBoundingClientRect();se.labels.align==="left"?(re.forEach(function(le,ce){le.setAttribute("text-anchor","start")}),se.opposite||oe.setAttribute("transform","translate(-".concat(ne.width,", 0)"))):se.labels.align==="center"?(re.forEach(function(le,ce){le.setAttribute("text-anchor","middle")}),oe.setAttribute("transform","translate(".concat(ne.width/2*(se.opposite?1:-1),", 0)"))):se.labels.align==="right"&&(re.forEach(function(le,ce){le.setAttribute("text-anchor","end")}),se.opposite&&oe.setAttribute("transform","translate(".concat(ne.width,", 0)")))}})}}]),de}(),Z=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.documentEvent=p.bind(this.documentEvent,this)}return a(de,[{key:"addEventListener",value:function(ee,te){var ie=this.w;ie.globals.events.hasOwnProperty(ee)?ie.globals.events[ee].push(te):ie.globals.events[ee]=[te]}},{key:"removeEventListener",value:function(ee,te){var ie=this.w;if(ie.globals.events.hasOwnProperty(ee)){var ae=ie.globals.events[ee].indexOf(te);ae!==-1&&ie.globals.events[ee].splice(ae,1)}}},{key:"fireEvent",value:function(ee,te){var ie=this.w;if(ie.globals.events.hasOwnProperty(ee)){te&&te.length||(te=[]);for(var ae=ie.globals.events[ee],se=ae.length,oe=0;oe<se;oe++)ae[oe].apply(null,te)}}},{key:"setupEventHandlers",value:function(){var ee=this,te=this.w,ie=this.ctx,ae=te.globals.dom.baseEl.querySelector(te.globals.chartClass);this.ctx.eventList.forEach(function(se){ae.addEventListener(se,function(oe){var re=Object.assign({},te,{seriesIndex:te.globals.capturedSeriesIndex,dataPointIndex:te.globals.capturedDataPointIndex});oe.type==="mousemove"||oe.type==="touchmove"?typeof te.config.chart.events.mouseMove=="function"&&te.config.chart.events.mouseMove(oe,ie,re):oe.type==="mouseleave"||oe.type==="touchleave"?typeof te.config.chart.events.mouseLeave=="function"&&te.config.chart.events.mouseLeave(oe,ie,re):(oe.type==="mouseup"&&oe.which===1||oe.type==="touchend")&&(typeof te.config.chart.events.click=="function"&&te.config.chart.events.click(oe,ie,re),ie.ctx.events.fireEvent("click",[oe,ie,re]))},{capture:!1,passive:!0})}),this.ctx.eventList.forEach(function(se){te.globals.dom.baseEl.addEventListener(se,ee.documentEvent,{passive:!0})}),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(ee){var te=this.w,ie=ee.target.className;if(ee.type==="click"){var ae=te.globals.dom.baseEl.querySelector(".apexcharts-menu");ae&&ae.classList.contains("apexcharts-menu-open")&&ie!=="apexcharts-menu-icon"&&ae.classList.remove("apexcharts-menu-open")}te.globals.clientX=ee.type==="touchmove"?ee.touches[0].clientX:ee.clientX,te.globals.clientY=ee.type==="touchmove"?ee.touches[0].clientY:ee.clientY}}]),de}(),$=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"setCurrentLocaleValues",value:function(ee){var te=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(te=this.w.config.chart.locales.concat(window.Apex.chart.locales));var ie=te.filter(function(se){return se.name===ee})[0];if(!ie)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var ae=p.extend(A,ie);this.w.globals.locale=ae.options}}]),de}(),J=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"drawAxis",value:function(ee,te){var ie,ae,se=this.w.globals,oe=this.w.config,re=new G(this.ctx),ne=new q(this.ctx);se.axisCharts&&ee!=="radar"&&(se.isBarHorizontal?(ae=ne.drawYaxisInversed(0),ie=re.drawXaxisInversed(0),se.dom.elGraphical.add(ie),se.dom.elGraphical.add(ae)):(ie=re.drawXaxis(),se.dom.elGraphical.add(ie),oe.yaxis.map(function(le,ce){se.ignoreYAxisIndexes.indexOf(ce)===-1&&(ae=ne.drawYaxis(ce),se.dom.Paper.add(ae))})))}}]),de}(),Q=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"drawXCrosshairs",value:function(){var ee=this.w,te=new b(this.ctx),ie=new x(this.ctx),ae=ee.config.xaxis.crosshairs.fill.gradient,se=ee.config.xaxis.crosshairs.dropShadow,oe=ee.config.xaxis.crosshairs.fill.type,re=ae.colorFrom,ne=ae.colorTo,le=ae.opacityFrom,ce=ae.opacityTo,ue=ae.stops,pe=se.enabled,fe=se.left,me=se.top,ve=se.blur,be=se.color,ye=se.opacity,_e=ee.config.xaxis.crosshairs.fill.color;if(ee.config.xaxis.crosshairs.show){oe==="gradient"&&(_e=te.drawGradient("vertical",re,ne,le,ce,null,ue,null));var Ae=te.drawRect();ee.config.xaxis.crosshairs.width===1&&(Ae=te.drawLine());var he=ee.globals.gridHeight;(!p.isNumber(he)||he<0)&&(he=0);var ge=ee.config.xaxis.crosshairs.width;(!p.isNumber(ge)||ge<0)&&(ge=0),Ae.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:he,width:ge,height:he,fill:_e,filter:"none","fill-opacity":ee.config.xaxis.crosshairs.opacity,stroke:ee.config.xaxis.crosshairs.stroke.color,"stroke-width":ee.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":ee.config.xaxis.crosshairs.stroke.dashArray}),pe&&(Ae=ie.dropShadow(Ae,{left:fe,top:me,blur:ve,color:be,opacity:ye})),ee.globals.dom.elGraphical.add(Ae)}}},{key:"drawYCrosshairs",value:function(){var ee=this.w,te=new b(this.ctx),ie=ee.config.yaxis[0].crosshairs,ae=ee.globals.barPadForNumericAxis;if(ee.config.yaxis[0].crosshairs.show){var se=te.drawLine(-ae,0,ee.globals.gridWidth+ae,0,ie.stroke.color,ie.stroke.dashArray,ie.stroke.width);se.attr({class:"apexcharts-ycrosshairs"}),ee.globals.dom.elGraphical.add(se)}var oe=te.drawLine(-ae,0,ee.globals.gridWidth+ae,0,ie.stroke.color,0,0);oe.attr({class:"apexcharts-ycrosshairs-hidden"}),ee.globals.dom.elGraphical.add(oe)}}]),de}(),K=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"checkResponsiveConfig",value:function(ee){var te=this,ie=this.w,ae=ie.config;if(ae.responsive.length!==0){var se=ae.responsive.slice();se.sort(function(le,ce){return le.breakpoint>ce.breakpoint?1:ce.breakpoint>le.breakpoint?-1:0}).reverse();var oe=new H({}),re=function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ce=se[0].breakpoint,ue=window.innerWidth>0?window.innerWidth:screen.width;if(ue>ce){var pe=y.extendArrayProps(oe,ie.globals.initialConfig,ie);le=p.extend(pe,le),le=p.extend(ie.config,le),te.overrideResponsiveOptions(le)}else for(var fe=0;fe<se.length;fe++)ue<se[fe].breakpoint&&(le=y.extendArrayProps(oe,se[fe].options,ie),le=p.extend(ie.config,le),te.overrideResponsiveOptions(le))};if(ee){var ne=y.extendArrayProps(oe,ee,ie);ne=p.extend(ie.config,ne),re(ne=p.extend(ne,ee))}else re({})}}},{key:"overrideResponsiveOptions",value:function(ee){var te=new H(ee).init({responsiveOverride:!0});this.w.config=te}}]),de}(),tt=function(){function de(ee){e(this,de),this.ctx=ee,this.colors=[],this.w=ee.w;var te=this.w;this.isColorFn=!1,this.isHeatmapDistributed=te.config.chart.type==="treemap"&&te.config.plotOptions.treemap.distributed||te.config.chart.type==="heatmap"&&te.config.plotOptions.heatmap.distributed,this.isBarDistributed=te.config.plotOptions.bar.distributed&&(te.config.chart.type==="bar"||te.config.chart.type==="rangeBar")}return a(de,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var ee=this,te=this.w,ie=new p;if(te.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(te.config.theme.mode)),te.config.colors===void 0?te.globals.colors=this.predefined():(te.globals.colors=te.config.colors,Array.isArray(te.config.colors)&&te.config.colors.length>0&&typeof te.config.colors[0]=="function"&&(te.globals.colors=te.config.series.map(function(fe,me){var ve=te.config.colors[me];return ve||(ve=te.config.colors[0]),typeof ve=="function"?(ee.isColorFn=!0,ve({value:te.globals.axisCharts?te.globals.series[me][0]?te.globals.series[me][0]:0:te.globals.series[me],seriesIndex:me,dataPointIndex:me,w:te})):ve}))),te.globals.seriesColors.map(function(fe,me){fe&&(te.globals.colors[me]=fe)}),te.config.theme.monochrome.enabled){var ae=[],se=te.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(se=te.globals.series[0].length*te.globals.series.length);for(var oe=te.config.theme.monochrome.color,re=1/(se/te.config.theme.monochrome.shadeIntensity),ne=te.config.theme.monochrome.shadeTo,le=0,ce=0;ce<se;ce++){var ue=void 0;ne==="dark"?(ue=ie.shadeColor(-1*le,oe),le+=re):(ue=ie.shadeColor(le,oe),le+=re),ae.push(ue)}te.globals.colors=ae.slice()}var pe=te.globals.colors.slice();this.pushExtraColors(te.globals.colors),["fill","stroke"].forEach(function(fe){te.config[fe].colors===void 0?te.globals[fe].colors=ee.isColorFn?te.config.colors:pe:te.globals[fe].colors=te.config[fe].colors.slice(),ee.pushExtraColors(te.globals[fe].colors)}),te.config.dataLabels.style.colors===void 0?te.globals.dataLabels.style.colors=pe:te.globals.dataLabels.style.colors=te.config.dataLabels.style.colors.slice(),this.pushExtraColors(te.globals.dataLabels.style.colors,50),te.config.plotOptions.radar.polygons.fill.colors===void 0?te.globals.radarPolygons.fill.colors=[te.config.theme.mode==="dark"?"#424242":"none"]:te.globals.radarPolygons.fill.colors=te.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(te.globals.radarPolygons.fill.colors,20),te.config.markers.colors===void 0?te.globals.markers.colors=pe:te.globals.markers.colors=te.config.markers.colors.slice(),this.pushExtraColors(te.globals.markers.colors)}},{key:"pushExtraColors",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,ae=this.w,se=te||ae.globals.series.length;if(ie===null&&(ie=this.isBarDistributed||this.isHeatmapDistributed||ae.config.chart.type==="heatmap"&&ae.config.plotOptions.heatmap.colorScale.inverse),ie&&ae.globals.series.length&&(se=ae.globals.series[ae.globals.maxValsInArrayIndex].length*ae.globals.series.length),ee.length<se)for(var oe=se-ee.length,re=0;re<oe;re++)ee.push(ee[re])}},{key:"updateThemeOptions",value:function(ee){ee.chart=ee.chart||{},ee.tooltip=ee.tooltip||{};var te=ee.theme.mode||"light",ie=ee.theme.palette?ee.theme.palette:te==="dark"?"palette4":"palette1",ae=ee.chart.foreColor?ee.chart.foreColor:te==="dark"?"#f6f7f8":"#373d3f";return ee.tooltip.theme=te,ee.chart.foreColor=ae,ee.theme.palette=ie,ee}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),de}(),et=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(ee){var te=this.w,ie=ee==="title"?te.config.title:te.config.subtitle,ae=te.globals.svgWidth/2,se=ie.offsetY,oe="middle";if(ie.align==="left"?(ae=10,oe="start"):ie.align==="right"&&(ae=te.globals.svgWidth-10,oe="end"),ae+=ie.offsetX,se=se+parseInt(ie.style.fontSize,10)+ie.margin/2,ie.text!==void 0){var re=new b(this.ctx).drawText({x:ae,y:se,text:ie.text,textAnchor:oe,fontSize:ie.style.fontSize,fontFamily:ie.style.fontFamily,fontWeight:ie.style.fontWeight,foreColor:ie.style.color,opacity:1});re.node.setAttribute("class","apexcharts-".concat(ee,"-text")),te.globals.dom.Paper.add(re)}}}]),de}(),it=function(){function de(ee){e(this,de),this.w=ee.w,this.dCtx=ee}return a(de,[{key:"getTitleSubtitleCoords",value:function(ee){var te=this.w,ie=0,ae=0,se=ee==="title"?te.config.title.floating:te.config.subtitle.floating,oe=te.globals.dom.baseEl.querySelector(".apexcharts-".concat(ee,"-text"));if(oe!==null&&!se){var re=oe.getBoundingClientRect();ie=re.width,ae=te.globals.axisCharts?re.height+5:re.height}return{width:ie,height:ae}}},{key:"getLegendsRect",value:function(){var ee=this.w,te=ee.globals.dom.baseEl.querySelector(".apexcharts-legend");ee.config.legend.height||ee.config.legend.position!=="top"&&ee.config.legend.position!=="bottom"||(te.style.maxHeight=ee.globals.svgHeight/2+"px");var ie=Object.assign({},p.getBoundingClientRect(te));return te!==null&&!ee.config.legend.floating&&ee.config.legend.show?this.dCtx.lgRect={x:ie.x,y:ie.y,height:ie.height,width:ie.height===0?0:ie.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},ee.config.legend.position!=="left"&&ee.config.legend.position!=="right"||1.5*this.dCtx.lgRect.width>ee.globals.svgWidth&&(this.dCtx.lgRect.width=ee.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(ee,te){var ie=ee;if(this.w.globals.isMultiLineX){var ae=te.map(function(oe,re){return Array.isArray(oe)?oe.length:1}),se=Math.max.apply(Math,g(ae));ie=te[ae.indexOf(se)]}return ie}}]),de}(),at=function(){function de(ee){e(this,de),this.w=ee.w,this.dCtx=ee}return a(de,[{key:"getxAxisLabelsCoords",value:function(){var ee,te=this.w,ie=te.globals.labels.slice();if(te.config.xaxis.convertedCatToNumeric&&ie.length===0&&(ie=te.globals.categoryLabels),te.globals.timescaleLabels.length>0){var ae=this.getxAxisTimeScaleLabelsCoords();ee={width:ae.width,height:ae.height},te.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends=te.config.legend.position!=="left"&&te.config.legend.position!=="right"||te.config.legend.floating?0:this.dCtx.lgRect.width;var se=te.globals.xLabelFormatter,oe=p.getLargestStringFromArr(ie),re=this.dCtx.dimHelpers.getLargestStringFromMultiArr(oe,ie);te.globals.isBarHorizontal&&(re=oe=te.globals.yAxisScale[0].result.reduce(function(me,ve){return me.length>ve.length?me:ve},0));var ne=new W(this.dCtx.ctx),le=oe;oe=ne.xLabelFormat(se,oe,le,{i:void 0,dateFormatter:new Y(this.dCtx.ctx).formatDate,w:te}),re=ne.xLabelFormat(se,re,le,{i:void 0,dateFormatter:new Y(this.dCtx.ctx).formatDate,w:te}),(te.config.xaxis.convertedCatToNumeric&&oe===void 0||String(oe).trim()==="")&&(re=oe="1");var ce=new b(this.dCtx.ctx),ue=ce.getTextRects(oe,te.config.xaxis.labels.style.fontSize),pe=ue;if(oe!==re&&(pe=ce.getTextRects(re,te.config.xaxis.labels.style.fontSize)),(ee={width:ue.width>=pe.width?ue.width:pe.width,height:ue.height>=pe.height?ue.height:pe.height}).width*ie.length>te.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&te.config.xaxis.labels.rotate!==0||te.config.xaxis.labels.rotateAlways){if(!te.globals.isBarHorizontal){te.globals.rotateXLabels=!0;var fe=function(me){return ce.getTextRects(me,te.config.xaxis.labels.style.fontSize,te.config.xaxis.labels.style.fontFamily,"rotate(".concat(te.config.xaxis.labels.rotate," 0 0)"),!1)};ue=fe(oe),oe!==re&&(pe=fe(re)),ee.height=(ue.height>pe.height?ue.height:pe.height)/1.5,ee.width=ue.width>pe.width?ue.width:pe.width}}else te.globals.rotateXLabels=!1}return te.config.xaxis.labels.show||(ee={width:0,height:0}),{width:ee.width,height:ee.height}}},{key:"getxAxisTitleCoords",value:function(){var ee=this.w,te=0,ie=0;if(ee.config.xaxis.title.text!==void 0){var ae=new b(this.dCtx.ctx).getTextRects(ee.config.xaxis.title.text,ee.config.xaxis.title.style.fontSize);te=ae.width,ie=ae.height}return{width:te,height:ie}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var ee,te=this.w;this.dCtx.timescaleLabels=te.globals.timescaleLabels.slice();var ie=this.dCtx.timescaleLabels.map(function(se){return se.value}),ae=ie.reduce(function(se,oe){return se===void 0?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):se.length>oe.length?se:oe},0);return 1.05*(ee=new b(this.dCtx.ctx).getTextRects(ae,te.config.xaxis.labels.style.fontSize)).width*ie.length>te.globals.gridWidth&&te.config.xaxis.labels.rotate!==0&&(te.globals.overlappingXLabels=!0),ee}},{key:"additionalPaddingXLabels",value:function(ee){var te=this,ie=this.w,ae=ie.globals,se=ie.config,oe=se.xaxis.type,re=ee.width;ae.skipLastTimelinelabel=!1,ae.skipFirstTimelinelabel=!1;var ne=ie.config.yaxis[0].opposite&&ie.globals.isBarHorizontal,le=function(ce,ue){(function(pe){return ae.collapsedSeriesIndices.indexOf(pe)!==-1})(ue)||function(pe){if(te.dCtx.timescaleLabels&&te.dCtx.timescaleLabels.length){var fe=te.dCtx.timescaleLabels[0],me=te.dCtx.timescaleLabels[te.dCtx.timescaleLabels.length-1].position+re/1.75-te.dCtx.yAxisWidthRight,ve=fe.position-re/1.75+te.dCtx.yAxisWidthLeft,be=ie.config.legend.position==="right"&&te.dCtx.lgRect.width>0?te.dCtx.lgRect.width:0;me>ae.svgWidth-ae.translateX-be&&(ae.skipLastTimelinelabel=!0),ve<-(pe.show&&!pe.floating||se.chart.type!=="bar"&&se.chart.type!=="candlestick"&&se.chart.type!=="rangeBar"&&se.chart.type!=="boxPlot"?10:re/1.75)&&(ae.skipFirstTimelinelabel=!0)}else oe==="datetime"?te.dCtx.gridPad.right<re&&!ae.rotateXLabels&&(ae.skipLastTimelinelabel=!0):oe!=="datetime"&&te.dCtx.gridPad.right<re/2-te.dCtx.yAxisWidthRight&&!ae.rotateXLabels&&!ie.config.xaxis.labels.trim&&(ie.config.xaxis.tickPlacement!=="between"||ie.globals.isBarHorizontal)&&(te.dCtx.xPadRight=re/2+1)}(ce)};se.yaxis.forEach(function(ce,ue){ne?(te.dCtx.gridPad.left<re&&(te.dCtx.xPadLeft=re/2+1),te.dCtx.xPadRight=re/2+1):le(ce,ue)})}}]),de}(),st=function(){function de(ee){e(this,de),this.w=ee.w,this.dCtx=ee}return a(de,[{key:"getyAxisLabelsCoords",value:function(){var ee=this,te=this.w,ie=[],ae=10,se=new B(this.dCtx.ctx);return te.config.yaxis.map(function(oe,re){var ne=te.globals.yAxisScale[re],le=0;if(!se.isYAxisHidden(re)&&oe.labels.show&&oe.labels.minWidth!==void 0&&(le=oe.labels.minWidth),!se.isYAxisHidden(re)&&oe.labels.show&&ne.result.length){var ce=te.globals.yLabelFormatters[re],ue=ne.niceMin===Number.MIN_VALUE?0:ne.niceMin,pe=String(ue).length>String(ne.niceMax).length?ue:ne.niceMax,fe=ce(pe,{seriesIndex:re,dataPointIndex:-1,w:te}),me=fe;if(fe!==void 0&&fe.length!==0||(fe=pe),te.globals.isBarHorizontal){ae=0;var ve=te.globals.labels.slice();fe=ce(fe=p.getLargestStringFromArr(ve),{seriesIndex:re,dataPointIndex:-1,w:te}),me=ee.dCtx.dimHelpers.getLargestStringFromMultiArr(fe,ve)}var be=new b(ee.dCtx.ctx),ye="rotate(".concat(oe.labels.rotate," 0 0)"),_e=be.getTextRects(fe,oe.labels.style.fontSize,oe.labels.style.fontFamily,ye,!1),Ae=_e;fe!==me&&(Ae=be.getTextRects(me,oe.labels.style.fontSize,oe.labels.style.fontFamily,ye,!1)),ie.push({width:(le>Ae.width||le>_e.width?le:Ae.width>_e.width?Ae.width:_e.width)+ae,height:Ae.height>_e.height?Ae.height:_e.height})}else ie.push({width:0,height:0})}),ie}},{key:"getyAxisTitleCoords",value:function(){var ee=this,te=this.w,ie=[];return te.config.yaxis.map(function(ae,se){if(ae.show&&ae.title.text!==void 0){var oe=new b(ee.dCtx.ctx),re="rotate(".concat(ae.title.rotate," 0 0)"),ne=oe.getTextRects(ae.title.text,ae.title.style.fontSize,ae.title.style.fontFamily,re,!1);ie.push({width:ne.width,height:ne.height})}else ie.push({width:0,height:0})}),ie}},{key:"getTotalYAxisWidth",value:function(){var ee=this.w,te=0,ie=0,ae=0,se=ee.globals.yAxisScale.length>1?10:0,oe=new B(this.dCtx.ctx),re=function(ne,le){var ce=ee.config.yaxis[le].floating,ue=0;ne.width>0&&!ce?(ue=ne.width+se,function(pe){return ee.globals.ignoreYAxisIndexes.indexOf(pe)>-1}(le)&&(ue=ue-ne.width-se)):ue=ce||oe.isYAxisHidden(le)?0:5,ee.config.yaxis[le].opposite?ae+=ue:ie+=ue,te+=ue};return ee.globals.yLabelsCoords.map(function(ne,le){re(ne,le)}),ee.globals.yTitleCoords.map(function(ne,le){re(ne,le)}),ee.globals.isBarHorizontal&&!ee.config.yaxis[0].floating&&(te=ee.globals.yLabelsCoords[0].width+ee.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=ie,this.dCtx.yAxisWidthRight=ae,te}}]),de}(),rt=function(){function de(ee){e(this,de),this.w=ee.w,this.dCtx=ee}return a(de,[{key:"gridPadForColumnsInNumericAxis",value:function(ee){var te=this.w;if(te.globals.noData||te.globals.allSeriesCollapsed)return 0;var ie=function(ce){return ce==="bar"||ce==="rangeBar"||ce==="candlestick"||ce==="boxPlot"},ae=te.config.chart.type,se=0,oe=ie(ae)?te.config.series.length:1;if(te.globals.comboBarCount>0&&(oe=te.globals.comboBarCount),te.globals.collapsedSeries.forEach(function(ce){ie(ce.type)&&(oe-=1)}),te.config.chart.stacked&&(oe=1),(ie(ae)||te.globals.comboBarCount>0)&&te.globals.isXNumeric&&!te.globals.isBarHorizontal&&oe>0){var re,ne,le=Math.abs(te.globals.initialMaxX-te.globals.initialMinX);le<=3&&(le=te.globals.dataPoints),re=le/ee,te.globals.minXDiff&&te.globals.minXDiff/re>0&&(ne=te.globals.minXDiff/re),ne>ee/2&&(ne/=2),(se=ne/oe*parseInt(te.config.plotOptions.bar.columnWidth,10)/100)<1&&(se=1),se=se/(oe>1?1:1.5)+5,te.globals.barPadForNumericAxis=se}return se}},{key:"gridPadFortitleSubtitle",value:function(){var ee=this,te=this.w,ie=te.globals,ae=this.dCtx.isSparkline||!te.globals.axisCharts?0:10;["title","subtitle"].forEach(function(re){te.config[re].text!==void 0?ae+=te.config[re].margin:ae+=ee.dCtx.isSparkline||!te.globals.axisCharts?0:5}),!te.config.legend.show||te.config.legend.position!=="bottom"||te.config.legend.floating||te.globals.axisCharts||(ae+=10);var se=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),oe=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");ie.gridHeight=ie.gridHeight-se.height-oe.height-ae,ie.translateY=ie.translateY+se.height+oe.height+ae}},{key:"setGridXPosForDualYAxis",value:function(ee,te){var ie=this.w,ae=new B(this.dCtx.ctx);ie.config.yaxis.map(function(se,oe){ie.globals.ignoreYAxisIndexes.indexOf(oe)!==-1||se.floating||ae.isYAxisHidden(oe)||(se.opposite&&(ie.globals.translateX=ie.globals.translateX-(te[oe].width+ee[oe].width)-parseInt(ie.config.yaxis[oe].labels.style.fontSize,10)/1.2-12),ie.globals.translateX<2&&(ie.globals.translateX=2))})}}]),de}(),ot=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new it(this),this.dimYAxis=new st(this),this.dimXAxis=new at(this),this.dimGrid=new rt(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return a(de,[{key:"plotCoords",value:function(){var ee=this.w.globals;this.lgRect=this.dimHelpers.getLegendsRect(),ee.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),ee.gridHeight=ee.gridHeight-this.gridPad.top-this.gridPad.bottom,ee.gridWidth=ee.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var te=this.dimGrid.gridPadForColumnsInNumericAxis(ee.gridWidth);ee.gridWidth=ee.gridWidth-2*te,ee.translateX=ee.translateX+this.gridPad.left+this.xPadLeft+(te>0?te+4:0),ee.translateY=ee.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var ee=this,te=this.w,ie=te.globals,ae=this.dimYAxis.getyAxisLabelsCoords(),se=this.dimYAxis.getyAxisTitleCoords();te.globals.yLabelsCoords=[],te.globals.yTitleCoords=[],te.config.yaxis.map(function(pe,fe){te.globals.yLabelsCoords.push({width:ae[fe].width,index:fe}),te.globals.yTitleCoords.push({width:se[fe].width,index:fe})}),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var oe=this.dimXAxis.getxAxisLabelsCoords(),re=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(oe,re),ie.translateXAxisY=te.globals.rotateXLabels?this.xAxisHeight/8:-4,ie.translateXAxisX=te.globals.rotateXLabels&&te.globals.isXNumeric&&te.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,te.globals.isBarHorizontal&&(ie.rotateXLabels=!1,ie.translateXAxisY=parseInt(te.config.xaxis.labels.style.fontSize,10)/1.5*-1),ie.translateXAxisY=ie.translateXAxisY+te.config.xaxis.labels.offsetY,ie.translateXAxisX=ie.translateXAxisX+te.config.xaxis.labels.offsetX;var ne=this.yAxisWidth,le=this.xAxisHeight;ie.xAxisLabelsHeight=this.xAxisHeight-re.height,ie.xAxisLabelsWidth=this.xAxisWidth,ie.xAxisHeight=this.xAxisHeight;var ce=10;(te.config.chart.type==="radar"||this.isSparkline)&&(ne=0,le=ie.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||te.config.chart.type==="treemap")&&(ne=0,le=0,ce=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(oe);var ue=function(){ie.translateX=ne,ie.gridHeight=ie.svgHeight-ee.lgRect.height-le-(ee.isSparkline||te.config.chart.type==="treemap"?0:te.globals.rotateXLabels?10:15),ie.gridWidth=ie.svgWidth-ne};switch(te.config.xaxis.position==="top"&&(ce=ie.xAxisHeight-te.config.xaxis.axisTicks.height-5),te.config.legend.position){case"bottom":ie.translateY=ce,ue();break;case"top":ie.translateY=this.lgRect.height+ce,ue();break;case"left":ie.translateY=ce,ie.translateX=this.lgRect.width+ne,ie.gridHeight=ie.svgHeight-le-12,ie.gridWidth=ie.svgWidth-this.lgRect.width-ne;break;case"right":ie.translateY=ce,ie.translateX=ne,ie.gridHeight=ie.svgHeight-le-12,ie.gridWidth=ie.svgWidth-this.lgRect.width-ne-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(se,ae),new q(this.ctx).setYAxisXPosition(ae,se)}},{key:"setDimensionsForNonAxisCharts",value:function(){var ee=this.w,te=ee.globals,ie=ee.config,ae=0;ee.config.legend.show&&!ee.config.legend.floating&&(ae=20);var se=ie.chart.type==="pie"||ie.chart.type==="polarArea"||ie.chart.type==="donut"?"pie":"radialBar",oe=ie.plotOptions[se].offsetY,re=ie.plotOptions[se].offsetX;if(!ie.legend.show||ie.legend.floating)return te.gridHeight=te.svgHeight-ie.grid.padding.left+ie.grid.padding.right,te.gridWidth=te.gridHeight,te.translateY=oe,void(te.translateX=re+(te.svgWidth-te.gridWidth)/2);switch(ie.legend.position){case"bottom":te.gridHeight=te.svgHeight-this.lgRect.height-te.goldenPadding,te.gridWidth=te.svgWidth,te.translateY=oe-10,te.translateX=re+(te.svgWidth-te.gridWidth)/2;break;case"top":te.gridHeight=te.svgHeight-this.lgRect.height-te.goldenPadding,te.gridWidth=te.svgWidth,te.translateY=this.lgRect.height+oe+10,te.translateX=re+(te.svgWidth-te.gridWidth)/2;break;case"left":te.gridWidth=te.svgWidth-this.lgRect.width-ae,te.gridHeight=ie.chart.height!=="auto"?te.svgHeight:te.gridWidth,te.translateY=oe,te.translateX=re+this.lgRect.width+ae;break;case"right":te.gridWidth=te.svgWidth-this.lgRect.width-ae-5,te.gridHeight=ie.chart.height!=="auto"?te.svgHeight:te.gridWidth,te.translateY=oe,te.translateX=re+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(ee,te){var ie=this.w,ae=ee.height+te.height,se=ie.globals.isMultiLineX?1.2:ie.globals.LINE_HEIGHT_RATIO,oe=ie.globals.rotateXLabels?22:10,re=ie.globals.rotateXLabels&&ie.config.legend.position==="bottom"?10:0;this.xAxisHeight=ae*se+oe+re,this.xAxisWidth=ee.width,this.xAxisHeight-te.height>ie.config.xaxis.labels.maxHeight&&(this.xAxisHeight=ie.config.xaxis.labels.maxHeight),ie.config.xaxis.labels.minHeight&&this.xAxisHeight<ie.config.xaxis.labels.minHeight&&(this.xAxisHeight=ie.config.xaxis.labels.minHeight),ie.config.xaxis.floating&&(this.xAxisHeight=0);var ne=0,le=0;ie.config.yaxis.forEach(function(ce){ne+=ce.labels.minWidth,le+=ce.labels.maxWidth}),this.yAxisWidth<ne&&(this.yAxisWidth=ne),this.yAxisWidth>le&&(this.yAxisWidth=le)}}]),de}(),nt=function(){function de(ee){e(this,de),this.w=ee.w,this.lgCtx=ee}return a(de,[{key:"getLegendStyles",value:function(){var ee=document.createElement("style");ee.setAttribute("type","text/css");var te=document.createTextNode(`	
    	
      .apexcharts-legend {	
        display: flex;	
        overflow: auto;	
        padding: 0 10px;	
      }	
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
        flex-wrap: wrap	
      }	
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        flex-direction: column;	
        bottom: 0;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        justify-content: flex-start;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
        justify-content: center;  	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
        justify-content: flex-end;	
      }	
      .apexcharts-legend-series {	
        cursor: pointer;	
        line-height: normal;	
      }	
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
        display: flex;	
        align-items: center;	
      }	
      .apexcharts-legend-text {	
        position: relative;	
        font-size: 14px;	
      }	
      .apexcharts-legend-text *, .apexcharts-legend-marker * {	
        pointer-events: none;	
      }	
      .apexcharts-legend-marker {	
        position: relative;	
        display: inline-block;	
        cursor: pointer;	
        margin-right: 3px;	
        border-style: solid;
      }	
      	
      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
        display: inline-block;	
      }	
      .apexcharts-legend-series.apexcharts-no-click {	
        cursor: auto;	
      }	
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
        display: none !important;	
      }	
      .apexcharts-inactive-legend {	
        opacity: 0.45;	
      }`);return ee.appendChild(te),ee}},{key:"getLegendBBox",value:function(){var ee=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),te=ee.width;return{clwh:ee.height,clww:te}}},{key:"appendToForeignObject",value:function(){var ee=this.w.globals;ee.dom.elLegendForeign=document.createElementNS(ee.SVGNS,"foreignObject");var te=ee.dom.elLegendForeign;te.setAttribute("x",0),te.setAttribute("y",0),te.setAttribute("width",ee.svgWidth),te.setAttribute("height",ee.svgHeight),ee.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),te.appendChild(ee.dom.elLegendWrap),te.appendChild(this.getLegendStyles()),ee.dom.Paper.node.insertBefore(te,ee.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(ee,te){var ie=this,ae=this.w;if(ae.globals.axisCharts||ae.config.chart.type==="radialBar"){ae.globals.resized=!0;var se=null,oe=null;ae.globals.risingSeries=[],ae.globals.axisCharts?(se=ae.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(ee,"']")),oe=parseInt(se.getAttribute("data:realIndex"),10)):(se=ae.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(ee+1,"']")),oe=parseInt(se.getAttribute("rel"),10)-1),te?[{cs:ae.globals.collapsedSeries,csi:ae.globals.collapsedSeriesIndices},{cs:ae.globals.ancillaryCollapsedSeries,csi:ae.globals.ancillaryCollapsedSeriesIndices}].forEach(function(ce){ie.riseCollapsedSeries(ce.cs,ce.csi,oe)}):this.hideSeries({seriesEl:se,realIndex:oe})}else{var re=ae.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(ee+1,"'] path")),ne=ae.config.chart.type;if(ne==="pie"||ne==="polarArea"||ne==="donut"){var le=ae.config.plotOptions.pie.donut.labels;new b(this.lgCtx.ctx).pathMouseDown(re.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(re.members[0].node,le)}re.fire("click")}}},{key:"hideSeries",value:function(ee){var te=ee.seriesEl,ie=ee.realIndex,ae=this.w,se=p.clone(ae.config.series);if(ae.globals.axisCharts){var oe=!1;if(ae.config.yaxis[ie]&&ae.config.yaxis[ie].show&&ae.config.yaxis[ie].showAlways&&(oe=!0,ae.globals.ancillaryCollapsedSeriesIndices.indexOf(ie)<0&&(ae.globals.ancillaryCollapsedSeries.push({index:ie,data:se[ie].data.slice(),type:te.parentNode.className.baseVal.split("-")[1]}),ae.globals.ancillaryCollapsedSeriesIndices.push(ie))),!oe){ae.globals.collapsedSeries.push({index:ie,data:se[ie].data.slice(),type:te.parentNode.className.baseVal.split("-")[1]}),ae.globals.collapsedSeriesIndices.push(ie);var re=ae.globals.risingSeries.indexOf(ie);ae.globals.risingSeries.splice(re,1)}}else ae.globals.collapsedSeries.push({index:ie,data:se[ie]}),ae.globals.collapsedSeriesIndices.push(ie);for(var ne=te.childNodes,le=0;le<ne.length;le++)ne[le].classList.contains("apexcharts-series-markers-wrap")&&(ne[le].classList.contains("apexcharts-hide")?ne[le].classList.remove("apexcharts-hide"):ne[le].classList.add("apexcharts-hide"));ae.globals.allSeriesCollapsed=ae.globals.collapsedSeries.length===ae.config.series.length,se=this._getSeriesBasedOnCollapsedState(se),this.lgCtx.ctx.updateHelpers._updateSeries(se,ae.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(ee,te,ie){var ae=this.w,se=p.clone(ae.config.series);if(ee.length>0){for(var oe=0;oe<ee.length;oe++)ee[oe].index===ie&&(ae.globals.axisCharts?(se[ie].data=ee[oe].data.slice(),ee.splice(oe,1),te.splice(oe,1),ae.globals.risingSeries.push(ie)):(se[ie]=ee[oe].data,ee.splice(oe,1),te.splice(oe,1),ae.globals.risingSeries.push(ie)));se=this._getSeriesBasedOnCollapsedState(se),this.lgCtx.ctx.updateHelpers._updateSeries(se,ae.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(ee){var te=this.w;return te.globals.axisCharts?ee.forEach(function(ie,ae){te.globals.collapsedSeriesIndices.indexOf(ae)>-1&&(ee[ae].data=[])}):ee.forEach(function(ie,ae){te.globals.collapsedSeriesIndices.indexOf(ae)>-1&&(ee[ae]=0)}),ee}}]),de}(),lt=function(){function de(ee,te){e(this,de),this.ctx=ee,this.w=ee.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed=this.w.config.chart.type==="bar"&&this.w.config.plotOptions.bar.distributed&&this.w.config.series.length===1,this.legendHelpers=new nt(this)}return a(de,[{key:"init",value:function(){var ee=this.w,te=ee.globals,ie=ee.config;if((ie.legend.showForSingleSeries&&te.series.length===1||this.isBarsDistributed||te.series.length>1||!te.axisCharts)&&ie.legend.show){for(;te.dom.elLegendWrap.firstChild;)te.dom.elLegendWrap.removeChild(te.dom.elLegendWrap.firstChild);this.drawLegends(),p.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),ie.legend.position==="bottom"||ie.legend.position==="top"?this.legendAlignHorizontal():ie.legend.position!=="right"&&ie.legend.position!=="left"||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var ee=this,te=this.w,ie=te.config.legend.fontFamily,ae=te.globals.seriesNames,se=te.globals.colors.slice();if(te.config.chart.type==="heatmap"){var oe=te.config.plotOptions.heatmap.colorScale.ranges;ae=oe.map(function(Ee){return Ee.name?Ee.name:Ee.from+" - "+Ee.to}),se=oe.map(function(Ee){return Ee.color})}else this.isBarsDistributed&&(ae=te.globals.labels.slice());te.config.legend.customLegendItems.length&&(ae=te.config.legend.customLegendItems);for(var re=te.globals.legendFormatter,ne=te.config.legend.inverseOrder,le=ne?ae.length-1:0;ne?le>=0:le<=ae.length-1;ne?le--:le++){var ce=re(ae[le],{seriesIndex:le,w:te}),ue=!1,pe=!1;if(te.globals.collapsedSeries.length>0)for(var fe=0;fe<te.globals.collapsedSeries.length;fe++)te.globals.collapsedSeries[fe].index===le&&(ue=!0);if(te.globals.ancillaryCollapsedSeriesIndices.length>0)for(var me=0;me<te.globals.ancillaryCollapsedSeriesIndices.length;me++)te.globals.ancillaryCollapsedSeriesIndices[me]===le&&(pe=!0);var ve=document.createElement("span");ve.classList.add("apexcharts-legend-marker");var be=te.config.legend.markers.offsetX,ye=te.config.legend.markers.offsetY,_e=te.config.legend.markers.height,Ae=te.config.legend.markers.width,he=te.config.legend.markers.strokeWidth,ge=te.config.legend.markers.strokeColor,xe=te.config.legend.markers.radius,we=ve.style;we.background=se[le],we.color=se[le],we.setProperty("background",se[le],"important"),te.config.legend.markers.fillColors&&te.config.legend.markers.fillColors[le]&&(we.background=te.config.legend.markers.fillColors[le]),te.globals.seriesColors[le]!==void 0&&(we.background=te.globals.seriesColors[le],we.color=te.globals.seriesColors[le]),we.height=Array.isArray(_e)?parseFloat(_e[le])+"px":parseFloat(_e)+"px",we.width=Array.isArray(Ae)?parseFloat(Ae[le])+"px":parseFloat(Ae)+"px",we.left=(Array.isArray(be)?parseFloat(be[le]):parseFloat(be))+"px",we.top=(Array.isArray(ye)?parseFloat(ye[le]):parseFloat(ye))+"px",we.borderWidth=Array.isArray(he)?he[le]:he,we.borderColor=Array.isArray(ge)?ge[le]:ge,we.borderRadius=Array.isArray(xe)?parseFloat(xe[le])+"px":parseFloat(xe)+"px",te.config.legend.markers.customHTML&&(Array.isArray(te.config.legend.markers.customHTML)?te.config.legend.markers.customHTML[le]&&(ve.innerHTML=te.config.legend.markers.customHTML[le]()):ve.innerHTML=te.config.legend.markers.customHTML()),b.setAttrs(ve,{rel:le+1,"data:collapsed":ue||pe}),(ue||pe)&&ve.classList.add("apexcharts-inactive-legend");var Ce=document.createElement("div"),Se=document.createElement("span");Se.classList.add("apexcharts-legend-text"),Se.innerHTML=Array.isArray(ce)?ce.join(" "):ce;var ke=te.config.legend.labels.useSeriesColors?te.globals.colors[le]:te.config.legend.labels.colors;ke||(ke=te.config.chart.foreColor),Se.style.color=ke,Se.style.fontSize=parseFloat(te.config.legend.fontSize)+"px",Se.style.fontWeight=te.config.legend.fontWeight,Se.style.fontFamily=ie||te.config.chart.fontFamily,b.setAttrs(Se,{rel:le+1,i:le,"data:default-text":encodeURIComponent(ce),"data:collapsed":ue||pe}),Ce.appendChild(ve),Ce.appendChild(Se);var Pe=new y(this.ctx);te.config.legend.showForZeroSeries||Pe.getSeriesTotalByIndex(le)===0&&Pe.seriesHaveSameValues(le)&&!Pe.isSeriesNull(le)&&te.globals.collapsedSeriesIndices.indexOf(le)===-1&&te.globals.ancillaryCollapsedSeriesIndices.indexOf(le)===-1&&Ce.classList.add("apexcharts-hidden-zero-series"),te.config.legend.showForNullSeries||Pe.isSeriesNull(le)&&te.globals.collapsedSeriesIndices.indexOf(le)===-1&&te.globals.ancillaryCollapsedSeriesIndices.indexOf(le)===-1&&Ce.classList.add("apexcharts-hidden-null-series"),te.globals.dom.elLegendWrap.appendChild(Ce),te.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(te.config.legend.horizontalAlign)),te.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+te.config.legend.position),Ce.classList.add("apexcharts-legend-series"),Ce.style.margin="".concat(te.config.legend.itemMargin.vertical,"px ").concat(te.config.legend.itemMargin.horizontal,"px"),te.globals.dom.elLegendWrap.style.width=te.config.legend.width?te.config.legend.width+"px":"",te.globals.dom.elLegendWrap.style.height=te.config.legend.height?te.config.legend.height+"px":"",b.setAttrs(Ce,{rel:le+1,seriesName:p.escapeString(ae[le]),"data:collapsed":ue||pe}),(ue||pe)&&Ce.classList.add("apexcharts-inactive-legend"),te.config.legend.onItemClick.toggleDataSeries||Ce.classList.add("apexcharts-no-click")}te.globals.dom.elWrap.addEventListener("click",ee.onLegendClick,!0),te.config.legend.onItemHover.highlightDataSeries&&te.config.legend.customLegendItems.length===0&&(te.globals.dom.elWrap.addEventListener("mousemove",ee.onLegendHovered,!0),te.globals.dom.elWrap.addEventListener("mouseout",ee.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(ee,te){var ie=this.w,ae=ie.globals.dom.baseEl.querySelector(".apexcharts-legend"),se=ae.getBoundingClientRect(),oe=0,re=0;if(ie.config.legend.position==="bottom")re+=ie.globals.svgHeight-se.height/2;else if(ie.config.legend.position==="top"){var ne=new ot(this.ctx),le=ne.dimHelpers.getTitleSubtitleCoords("title").height,ce=ne.dimHelpers.getTitleSubtitleCoords("subtitle").height;re=re+(le>0?le-10:0)+(ce>0?ce-10:0)}ae.style.position="absolute",oe=oe+ee+ie.config.legend.offsetX,re=re+te+ie.config.legend.offsetY,ae.style.left=oe+"px",ae.style.top=re+"px",ie.config.legend.position==="bottom"?(ae.style.top="auto",ae.style.bottom=5-ie.config.legend.offsetY+"px"):ie.config.legend.position==="right"&&(ae.style.left="auto",ae.style.right=25+ie.config.legend.offsetX+"px"),["width","height"].forEach(function(ue){ae.style[ue]&&(ae.style[ue]=parseInt(ie.config.legend[ue],10)+"px")})}},{key:"legendAlignHorizontal",value:function(){var ee=this.w;ee.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var te=this.legendHelpers.getLegendBBox(),ie=new ot(this.ctx),ae=ie.dimHelpers.getTitleSubtitleCoords("title"),se=ie.dimHelpers.getTitleSubtitleCoords("subtitle"),oe=0;ee.config.legend.position==="bottom"?oe=-te.clwh/1.8:ee.config.legend.position==="top"&&(oe=ae.height+se.height+ee.config.title.margin+ee.config.subtitle.margin-10),this.setLegendWrapXY(20,oe)}},{key:"legendAlignVertical",value:function(){var ee=this.w,te=this.legendHelpers.getLegendBBox(),ie=0;ee.config.legend.position==="left"&&(ie=20),ee.config.legend.position==="right"&&(ie=ee.globals.svgWidth-te.clww-10),this.setLegendWrapXY(ie,20)}},{key:"onLegendHovered",value:function(ee){var te=this.w,ie=ee.target.classList.contains("apexcharts-legend-text")||ee.target.classList.contains("apexcharts-legend-marker");if(te.config.chart.type==="heatmap"||this.isBarsDistributed){if(ie){var ae=parseInt(ee.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,ae,this.w]),new z(this.ctx).highlightRangeInSeries(ee,ee.target)}}else!ee.target.classList.contains("apexcharts-inactive-legend")&&ie&&new z(this.ctx).toggleSeriesOnHover(ee,ee.target)}},{key:"onLegendClick",value:function(ee){var te=this.w;if(!te.config.legend.customLegendItems.length&&(ee.target.classList.contains("apexcharts-legend-text")||ee.target.classList.contains("apexcharts-legend-marker"))){var ie=parseInt(ee.target.getAttribute("rel"),10)-1,ae=ee.target.getAttribute("data:collapsed")==="true",se=this.w.config.chart.events.legendClick;typeof se=="function"&&se(this.ctx,ie,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,ie,this.w]);var oe=this.w.config.legend.markers.onClick;typeof oe=="function"&&ee.target.classList.contains("apexcharts-legend-marker")&&(oe(this.ctx,ie,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,ie,this.w])),te.config.chart.type!=="treemap"&&te.config.chart.type!=="heatmap"&&!this.isBarsDistributed&&te.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(ie,ae)}}}]),de}(),ht=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=te.globals.minX,this.maxX=te.globals.maxX}return a(de,[{key:"createToolbar",value:function(){var ee=this,te=this.w,ie=function(){return document.createElement("div")},ae=ie();if(ae.setAttribute("class","apexcharts-toolbar"),ae.style.top=te.config.chart.toolbar.offsetY+"px",ae.style.right=3-te.config.chart.toolbar.offsetX+"px",te.globals.dom.elWrap.appendChild(ae),this.elZoom=ie(),this.elZoomIn=ie(),this.elZoomOut=ie(),this.elPan=ie(),this.elSelection=ie(),this.elZoomReset=ie(),this.elMenuIcon=ie(),this.elMenu=ie(),this.elCustomIcons=[],this.t=te.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var se=0;se<this.t.customIcons.length;se++)this.elCustomIcons.push(ie());var oe=[],re=function(ue,pe,fe){var me=ue.toLowerCase();ee.t[me]&&te.config.chart.zoom.enabled&&oe.push({el:pe,icon:typeof ee.t[me]=="string"?ee.t[me]:fe,title:ee.localeValues[ue],class:"apexcharts-".concat(me,"-icon")})};re("zoomIn",this.elZoomIn,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`),re("zoomOut",this.elZoomOut,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);var ne=function(ue){ee.t[ue]&&te.config.chart[ue].enabled&&oe.push({el:ue==="zoom"?ee.elZoom:ee.elSelection,icon:typeof ee.t[ue]=="string"?ee.t[ue]:ue==="zoom"?`<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>`:`<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`,title:ee.localeValues[ue==="zoom"?"selectionZoom":"selection"],class:te.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(ue,"-icon")})};ne("zoom"),ne("selection"),this.t.pan&&te.config.chart.zoom.enabled&&oe.push({el:this.elPan,icon:typeof this.t.pan=="string"?this.t.pan:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`,title:this.localeValues.pan,class:te.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),re("reset",this.elZoomReset,`<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`),this.t.download&&oe.push({el:this.elMenuIcon,icon:typeof this.t.download=="string"?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var le=0;le<this.elCustomIcons.length;le++)oe.push({el:this.elCustomIcons[le],icon:this.t.customIcons[le].icon,title:this.t.customIcons[le].title,index:this.t.customIcons[le].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[le].class});oe.forEach(function(ue,pe){ue.index&&p.moveIndexInArray(oe,pe,ue.index)});for(var ce=0;ce<oe.length;ce++)b.setAttrs(oe[ce].el,{class:oe[ce].class,title:oe[ce].title}),oe[ce].el.innerHTML=oe[ce].icon,ae.appendChild(oe[ce].el);this._createHamburgerMenu(ae),te.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):te.globals.panEnabled?this.elPan.classList.add(this.selectedClass):te.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(ee){this.elMenuItems=[],ee.appendChild(this.elMenu),b.setAttrs(this.elMenu,{class:"apexcharts-menu"});var te=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||te.splice(2,1);for(var ie=0;ie<te.length;ie++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[ie].innerHTML=te[ie].title,b.setAttrs(this.elMenuItems[ie],{class:"apexcharts-menu-item ".concat(te[ie].name),title:te[ie].title}),this.elMenu.appendChild(this.elMenuItems[ie])}},{key:"addToolbarEventListeners",value:function(){var ee=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach(function(ie){ie.classList.contains("exportSVG")?ie.addEventListener("click",ee.handleDownload.bind(ee,"svg")):ie.classList.contains("exportPNG")?ie.addEventListener("click",ee.handleDownload.bind(ee,"png")):ie.classList.contains("exportCSV")&&ie.addEventListener("click",ee.handleDownload.bind(ee,"csv"))});for(var te=0;te<this.t.customIcons.length;te++)this.elCustomIcons[te].addEventListener("click",this.t.customIcons[te].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(ee){this.ctx.getSyncedCharts().forEach(function(te){te.ctx.toolbar.toggleOtherControls();var ie=ee==="selection"?te.ctx.toolbar.elSelection:te.ctx.toolbar.elZoom,ae=ee==="selection"?"selectionEnabled":"zoomEnabled";te.w.globals[ae]=!te.w.globals[ae],ie.classList.contains(te.ctx.toolbar.selectedClass)?ie.classList.remove(te.ctx.toolbar.selectedClass):ie.classList.add(te.ctx.toolbar.selectedClass)})}},{key:"getToolbarIconsReference",value:function(){var ee=this.w;this.elZoom||(this.elZoom=ee.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=ee.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=ee.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(ee){this.toggleOtherControls(),ee==="pan"?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var te=ee==="pan"?this.elPan:this.elZoom,ie=ee==="pan"?this.elZoom:this.elPan;te&&te.classList.add(this.selectedClass),ie&&ie.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach(function(ee){ee.ctx.toolbar.toggleOtherControls(),ee.w.globals.panEnabled=!ee.w.globals.panEnabled,ee.ctx.toolbar.elPan.classList.contains(ee.ctx.toolbar.selectedClass)?ee.ctx.toolbar.elPan.classList.remove(ee.ctx.toolbar.selectedClass):ee.ctx.toolbar.elPan.classList.add(ee.ctx.toolbar.selectedClass)})}},{key:"toggleOtherControls",value:function(){var ee=this,te=this.w;te.globals.panEnabled=!1,te.globals.zoomEnabled=!1,te.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach(function(ie){ie&&ie.classList.remove(ee.selectedClass)})}},{key:"handleZoomIn",value:function(){var ee=this.w;ee.globals.isRangeBar&&(this.minX=ee.globals.minY,this.maxX=ee.globals.maxY);var te=(this.minX+this.maxX)/2,ie=(this.minX+te)/2,ae=(this.maxX+te)/2,se=this._getNewMinXMaxX(ie,ae);ee.globals.disableZoomIn||this.zoomUpdateOptions(se.minX,se.maxX)}},{key:"handleZoomOut",value:function(){var ee=this.w;if(ee.globals.isRangeBar&&(this.minX=ee.globals.minY,this.maxX=ee.globals.maxY),!(ee.config.xaxis.type==="datetime"&&new Date(this.minX).getUTCFullYear()<1e3)){var te=(this.minX+this.maxX)/2,ie=this.minX-(te-this.minX),ae=this.maxX-(te-this.maxX),se=this._getNewMinXMaxX(ie,ae);ee.globals.disableZoomOut||this.zoomUpdateOptions(se.minX,se.maxX)}}},{key:"_getNewMinXMaxX",value:function(ee,te){var ie=this.w.config.xaxis.convertedCatToNumeric;return{minX:ie?Math.floor(ee):ee,maxX:ie?Math.floor(te):te}}},{key:"zoomUpdateOptions",value:function(ee,te){var ie=this.w;if(ee!==void 0||te!==void 0){if(!(ie.config.xaxis.convertedCatToNumeric&&(ee<1&&(ee=1,te=ie.globals.dataPoints),te-ee<2))){var ae={min:ee,max:te},se=this.getBeforeZoomRange(ae);se&&(ae=se.xaxis);var oe={xaxis:ae},re=p.clone(ie.globals.initialConfig.yaxis);ie.config.chart.zoom.autoScaleYaxis&&(re=new j(this.ctx).autoScaleY(this.ctx,re,{xaxis:ae})),ie.config.chart.group||(oe.yaxis=re),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(oe,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(ae,re)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(ee,te){typeof this.ev.zoomed=="function"&&this.ev.zoomed(this.ctx,{xaxis:ee,yaxis:te})}},{key:"getBeforeZoomRange",value:function(ee,te){var ie=null;return typeof this.ev.beforeZoom=="function"&&(ie=this.ev.beforeZoom(this,{xaxis:ee,yaxis:te})),ie}},{key:"toggleMenu",value:function(){var ee=this;window.setTimeout(function(){ee.elMenu.classList.contains("apexcharts-menu-open")?ee.elMenu.classList.remove("apexcharts-menu-open"):ee.elMenu.classList.add("apexcharts-menu-open")},0)}},{key:"handleDownload",value:function(ee){var te=this.w,ie=new V(this.ctx);switch(ee){case"svg":ie.exportToSVG(this.ctx);break;case"png":ie.exportToPng(this.ctx);break;case"csv":ie.exportToCSV({series:te.config.series,columnDelimiter:te.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(ee){this.ctx.getSyncedCharts().forEach(function(te){var ie=te.w;if(ie.globals.lastXAxis.min=void 0,ie.globals.lastXAxis.max=void 0,te.updateHelpers.revertDefaultAxisMinMax(),typeof ie.config.chart.events.beforeResetZoom=="function"){var ae=ie.config.chart.events.beforeResetZoom(te,ie);ae&&te.updateHelpers.revertDefaultAxisMinMax(ae)}typeof ie.config.chart.events.zoomed=="function"&&te.ctx.toolbar.zoomCallback({min:ie.config.xaxis.min,max:ie.config.xaxis.max}),ie.globals.zoomed=!1;var se=te.ctx.series.emptyCollapsedSeries(p.clone(ie.globals.initialSeries));te.updateHelpers._updateSeries(se,ie.config.chart.animations.dynamicAnimation.enabled)})}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),de}(),ct=function(de){n(te,ht);var ee=d(te);function te(ie){var ae;return e(this,te),(ae=ee.call(this,ie)).ctx=ie,ae.w=ie.w,ae.dragged=!1,ae.graphics=new b(ae.ctx),ae.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],ae.clientX=0,ae.clientY=0,ae.startX=0,ae.endX=0,ae.dragX=0,ae.startY=0,ae.endY=0,ae.dragY=0,ae.moveDirection="none",ae}return a(te,[{key:"init",value:function(ie){var ae=this,se=ie.xyRatios,oe=this.w,re=this;this.xyRatios=se,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=oe.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),oe.globals.dom.elGraphical.add(this.zoomRect),oe.globals.dom.elGraphical.add(this.selectionRect),oe.config.chart.selection.type==="x"?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:oe.globals.gridWidth,maxY:oe.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):oe.config.chart.selection.type==="y"?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:oe.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=oe.globals.dom.baseEl.querySelector("".concat(oe.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach(function(ne){ae.hoverArea.addEventListener(ne,re.svgMouseEvents.bind(re,se),{capture:!1,passive:!0})})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(ie,ae){var se=this.w,oe=this,re=this.ctx.toolbar,ne=se.globals.zoomEnabled?se.config.chart.zoom.type:se.config.chart.selection.type,le=se.config.chart.toolbar.autoSelected;if(ae.shiftKey?(this.shiftWasPressed=!0,re.enableZoomPanFromToolbar(le==="pan"?"zoom":"pan")):this.shiftWasPressed&&(re.enableZoomPanFromToolbar(le),this.shiftWasPressed=!1),ae.target){var ce,ue=ae.target.classList;if(ae.target.parentNode&&ae.target.parentNode!==null&&(ce=ae.target.parentNode.classList),!(ue.contains("apexcharts-selection-rect")||ue.contains("apexcharts-legend-marker")||ue.contains("apexcharts-legend-text")||ce&&ce.contains("apexcharts-toolbar"))){if(oe.clientX=ae.type==="touchmove"||ae.type==="touchstart"?ae.touches[0].clientX:ae.type==="touchend"?ae.changedTouches[0].clientX:ae.clientX,oe.clientY=ae.type==="touchmove"||ae.type==="touchstart"?ae.touches[0].clientY:ae.type==="touchend"?ae.changedTouches[0].clientY:ae.clientY,ae.type==="mousedown"&&ae.which===1){var pe=oe.gridRect.getBoundingClientRect();oe.startX=oe.clientX-pe.left,oe.startY=oe.clientY-pe.top,oe.dragged=!1,oe.w.globals.mousedown=!0}if((ae.type==="mousemove"&&ae.which===1||ae.type==="touchmove")&&(oe.dragged=!0,se.globals.panEnabled?(se.globals.selection=null,oe.w.globals.mousedown&&oe.panDragging({context:oe,zoomtype:ne,xyRatios:ie})):(oe.w.globals.mousedown&&se.globals.zoomEnabled||oe.w.globals.mousedown&&se.globals.selectionEnabled)&&(oe.selection=oe.selectionDrawing({context:oe,zoomtype:ne}))),ae.type==="mouseup"||ae.type==="touchend"||ae.type==="mouseleave"){var fe=oe.gridRect.getBoundingClientRect();oe.w.globals.mousedown&&(oe.endX=oe.clientX-fe.left,oe.endY=oe.clientY-fe.top,oe.dragX=Math.abs(oe.endX-oe.startX),oe.dragY=Math.abs(oe.endY-oe.startY),(se.globals.zoomEnabled||se.globals.selectionEnabled)&&oe.selectionDrawn({context:oe,zoomtype:ne}),se.globals.panEnabled&&se.config.xaxis.convertedCatToNumeric&&oe.delayedPanScrolled()),se.globals.zoomEnabled&&oe.hideSelectionRect(this.selectionRect),oe.dragged=!1,oe.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var ie=this.w;if(this.selectionRect){var ae=this.selectionRect.node.getBoundingClientRect();ae.width>0&&ae.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:ie.globals.gridWidth,maxY:ie.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var ie=this.w,ae=this.xyRatios;if(!ie.globals.zoomEnabled){if(ie.globals.selection!==void 0&&ie.globals.selection!==null)this.drawSelectionRect(ie.globals.selection);else if(ie.config.chart.selection.xaxis.min!==void 0&&ie.config.chart.selection.xaxis.max!==void 0){var se=(ie.config.chart.selection.xaxis.min-ie.globals.minX)/ae.xRatio,oe={x:se,y:0,width:ie.globals.gridWidth-(ie.globals.maxX-ie.config.chart.selection.xaxis.max)/ae.xRatio-se,height:ie.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(oe),this.makeSelectionRectDraggable(),typeof ie.config.chart.events.selection=="function"&&ie.config.chart.events.selection(this.ctx,{xaxis:{min:ie.config.chart.selection.xaxis.min,max:ie.config.chart.selection.xaxis.max},yaxis:{}})}}}},{key:"drawSelectionRect",value:function(ie){var ae=ie.x,se=ie.y,oe=ie.width,re=ie.height,ne=ie.translateX,le=ne===void 0?0:ne,ce=ie.translateY,ue=ce===void 0?0:ce,pe=this.w,fe=this.zoomRect,me=this.selectionRect;if(this.dragged||pe.globals.selection!==null){var ve={transform:"translate("+le+", "+ue+")"};pe.globals.zoomEnabled&&this.dragged&&(oe<0&&(oe=1),fe.attr({x:ae,y:se,width:oe,height:re,fill:pe.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":pe.config.chart.zoom.zoomedArea.fill.opacity,stroke:pe.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":pe.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":pe.config.chart.zoom.zoomedArea.stroke.opacity}),b.setAttrs(fe.node,ve)),pe.globals.selectionEnabled&&(me.attr({x:ae,y:se,width:oe>0?oe:0,height:re>0?re:0,fill:pe.config.chart.selection.fill.color,"fill-opacity":pe.config.chart.selection.fill.opacity,stroke:pe.config.chart.selection.stroke.color,"stroke-width":pe.config.chart.selection.stroke.width,"stroke-dasharray":pe.config.chart.selection.stroke.dashArray,"stroke-opacity":pe.config.chart.selection.stroke.opacity}),b.setAttrs(me.node,ve))}}},{key:"hideSelectionRect",value:function(ie){ie&&ie.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(ie){var ae=ie.context,se=ie.zoomtype,oe=this.w,re=ae,ne=this.gridRect.getBoundingClientRect(),le=re.startX-1,ce=re.startY,ue=!1,pe=!1,fe=re.clientX-ne.left-le,me=re.clientY-ne.top-ce,ve={};return Math.abs(fe+le)>oe.globals.gridWidth?fe=oe.globals.gridWidth-le:re.clientX-ne.left<0&&(fe=le),le>re.clientX-ne.left&&(ue=!0,fe=Math.abs(fe)),ce>re.clientY-ne.top&&(pe=!0,me=Math.abs(me)),ve=se==="x"?{x:ue?le-fe:le,y:0,width:fe,height:oe.globals.gridHeight}:se==="y"?{x:0,y:pe?ce-me:ce,width:oe.globals.gridWidth,height:me}:{x:ue?le-fe:le,y:pe?ce-me:ce,width:fe,height:me},re.drawSelectionRect(ve),re.selectionDragging("resizing"),ve}},{key:"selectionDragging",value:function(ie,ae){var se=this,oe=this.w,re=this.xyRatios,ne=this.selectionRect,le=0;ie==="resizing"&&(le=30);var ce=function(pe){return parseFloat(ne.node.getAttribute(pe))},ue={x:ce("x"),y:ce("y"),width:ce("width"),height:ce("height")};oe.globals.selection=ue,typeof oe.config.chart.events.selection=="function"&&oe.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout(function(){var pe=se.gridRect.getBoundingClientRect(),fe=ne.node.getBoundingClientRect(),me={xaxis:{min:oe.globals.xAxisScale.niceMin+(fe.left-pe.left)*re.xRatio,max:oe.globals.xAxisScale.niceMin+(fe.right-pe.left)*re.xRatio},yaxis:{min:oe.globals.yAxisScale[0].niceMin+(pe.bottom-fe.bottom)*re.yRatio[0],max:oe.globals.yAxisScale[0].niceMax-(fe.top-pe.top)*re.yRatio[0]}};oe.config.chart.events.selection(se.ctx,me),oe.config.chart.brush.enabled&&oe.config.chart.events.brushScrolled!==void 0&&oe.config.chart.events.brushScrolled(se.ctx,me)},le))}},{key:"selectionDrawn",value:function(ie){var ae=ie.context,se=ie.zoomtype,oe=this.w,re=ae,ne=this.xyRatios,le=this.ctx.toolbar;if(re.startX>re.endX){var ce=re.startX;re.startX=re.endX,re.endX=ce}if(re.startY>re.endY){var ue=re.startY;re.startY=re.endY,re.endY=ue}var pe=void 0,fe=void 0;oe.globals.isRangeBar?(pe=oe.globals.yAxisScale[0].niceMin+re.startX*ne.invertedYRatio,fe=oe.globals.yAxisScale[0].niceMin+re.endX*ne.invertedYRatio):(pe=oe.globals.xAxisScale.niceMin+re.startX*ne.xRatio,fe=oe.globals.xAxisScale.niceMin+re.endX*ne.xRatio);var me=[],ve=[];if(oe.config.yaxis.forEach(function(we,Ce){me.push(oe.globals.yAxisScale[Ce].niceMax-ne.yRatio[Ce]*re.startY),ve.push(oe.globals.yAxisScale[Ce].niceMax-ne.yRatio[Ce]*re.endY)}),re.dragged&&(re.dragX>10||re.dragY>10)&&pe!==fe){if(oe.globals.zoomEnabled){var be=p.clone(oe.globals.initialConfig.yaxis),ye=p.clone(oe.globals.initialConfig.xaxis);if(oe.globals.zoomed=!0,oe.config.xaxis.convertedCatToNumeric&&(pe=Math.floor(pe),fe=Math.floor(fe),pe<1&&(pe=1,fe=oe.globals.dataPoints),fe-pe<2&&(fe=pe+1)),se!=="xy"&&se!=="x"||(ye={min:pe,max:fe}),se!=="xy"&&se!=="y"||be.forEach(function(we,Ce){be[Ce].min=ve[Ce],be[Ce].max=me[Ce]}),oe.config.chart.zoom.autoScaleYaxis){var _e=new j(re.ctx);be=_e.autoScaleY(re.ctx,be,{xaxis:ye})}if(le){var Ae=le.getBeforeZoomRange(ye,be);Ae&&(ye=Ae.xaxis?Ae.xaxis:ye,be=Ae.yaxis?Ae.yaxis:be)}var he={xaxis:ye};oe.config.chart.group||(he.yaxis=be),re.ctx.updateHelpers._updateOptions(he,!1,re.w.config.chart.animations.dynamicAnimation.enabled),typeof oe.config.chart.events.zoomed=="function"&&le.zoomCallback(ye,be)}else if(oe.globals.selectionEnabled){var ge,xe=null;ge={min:pe,max:fe},se!=="xy"&&se!=="y"||(xe=p.clone(oe.config.yaxis)).forEach(function(we,Ce){xe[Ce].min=ve[Ce],xe[Ce].max=me[Ce]}),oe.globals.selection=re.selection,typeof oe.config.chart.events.selection=="function"&&oe.config.chart.events.selection(re.ctx,{xaxis:ge,yaxis:xe})}}}},{key:"panDragging",value:function(ie){var ae=ie.context,se=this.w,oe=ae;if(se.globals.lastClientPosition.x!==void 0){var re=se.globals.lastClientPosition.x-oe.clientX,ne=se.globals.lastClientPosition.y-oe.clientY;Math.abs(re)>Math.abs(ne)&&re>0?this.moveDirection="left":Math.abs(re)>Math.abs(ne)&&re<0?this.moveDirection="right":Math.abs(ne)>Math.abs(re)&&ne>0?this.moveDirection="up":Math.abs(ne)>Math.abs(re)&&ne<0&&(this.moveDirection="down")}se.globals.lastClientPosition={x:oe.clientX,y:oe.clientY};var le=se.globals.isRangeBar?se.globals.minY:se.globals.minX,ce=se.globals.isRangeBar?se.globals.maxY:se.globals.maxX;se.config.xaxis.convertedCatToNumeric||oe.panScrolled(le,ce)}},{key:"delayedPanScrolled",value:function(){var ie=this.w,ae=ie.globals.minX,se=ie.globals.maxX,oe=(ie.globals.maxX-ie.globals.minX)/2;this.moveDirection==="left"?(ae=ie.globals.minX+oe,se=ie.globals.maxX+oe):this.moveDirection==="right"&&(ae=ie.globals.minX-oe,se=ie.globals.maxX-oe),ae=Math.floor(ae),se=Math.floor(se),this.updateScrolledChart({xaxis:{min:ae,max:se}},ae,se)}},{key:"panScrolled",value:function(ie,ae){var se=this.w,oe=this.xyRatios,re=p.clone(se.globals.initialConfig.yaxis),ne=oe.xRatio,le=se.globals.minX,ce=se.globals.maxX;se.globals.isRangeBar&&(ne=oe.invertedYRatio,le=se.globals.minY,ce=se.globals.maxY),this.moveDirection==="left"?(ie=le+se.globals.gridWidth/15*ne,ae=ce+se.globals.gridWidth/15*ne):this.moveDirection==="right"&&(ie=le-se.globals.gridWidth/15*ne,ae=ce-se.globals.gridWidth/15*ne),se.globals.isRangeBar||(ie<se.globals.initialMinX||ae>se.globals.initialMaxX)&&(ie=le,ae=ce);var ue={min:ie,max:ae};se.config.chart.zoom.autoScaleYaxis&&(re=new j(this.ctx).autoScaleY(this.ctx,re,{xaxis:ue}));var pe={xaxis:{min:ie,max:ae}};se.config.chart.group||(pe.yaxis=re),this.updateScrolledChart(pe,ie,ae)}},{key:"updateScrolledChart",value:function(ie,ae,se){var oe=this.w;this.ctx.updateHelpers._updateOptions(ie,!1,!1),typeof oe.config.chart.events.scrolled=="function"&&oe.config.chart.events.scrolled(this.ctx,{xaxis:{min:ae,max:se}})}}]),te}(),dt=function(){function de(ee){e(this,de),this.w=ee.w,this.ttCtx=ee,this.ctx=ee.ctx}return a(de,[{key:"getNearestValues",value:function(ee){var te=ee.hoverArea,ie=ee.elGrid,ae=ee.clientX,se=ee.clientY,oe=this.w,re=ie.getBoundingClientRect(),ne=re.width,le=re.height,ce=ne/(oe.globals.dataPoints-1),ue=le/oe.globals.dataPoints,pe=this.hasBars();!oe.globals.comboCharts&&!pe||oe.config.xaxis.convertedCatToNumeric||(ce=ne/oe.globals.dataPoints);var fe=ae-re.left-oe.globals.barPadForNumericAxis,me=se-re.top;fe<0||me<0||fe>ne||me>le?(te.classList.remove("hovering-zoom"),te.classList.remove("hovering-pan")):oe.globals.zoomEnabled?(te.classList.remove("hovering-pan"),te.classList.add("hovering-zoom")):oe.globals.panEnabled&&(te.classList.remove("hovering-zoom"),te.classList.add("hovering-pan"));var ve=Math.round(fe/ce),be=Math.floor(me/ue);pe&&!oe.config.xaxis.convertedCatToNumeric&&(ve=Math.ceil(fe/ce),ve-=1);for(var ye,_e=null,Ae=null,he=[],ge=0;ge<oe.globals.seriesXvalues.length;ge++)he.push([oe.globals.seriesXvalues[ge][0]-1e-6].concat(oe.globals.seriesXvalues[ge]));if(he=he.map(function(Se){return Se.filter(function(ke){return ke})}),ye=oe.globals.seriesYvalues.map(function(Se){return Se.filter(function(ke){return p.isNumber(ke)})}),oe.globals.isXNumeric){var xe=this.ttCtx.getElGrid().getBoundingClientRect(),we=fe*(xe.width/ne),Ce=me*(xe.height/le);_e=(Ae=this.closestInMultiArray(we,Ce,he,ye)).index,ve=Ae.j,_e!==null&&(he=oe.globals.seriesXvalues[_e],ve=(Ae=this.closestInArray(we,he)).index)}return oe.globals.capturedSeriesIndex=_e===null?-1:_e,(!ve||ve<1)&&(ve=0),oe.globals.isBarHorizontal?oe.globals.capturedDataPointIndex=be:oe.globals.capturedDataPointIndex=ve,{capturedSeries:_e,j:oe.globals.isBarHorizontal?be:ve,hoverX:fe,hoverY:me}}},{key:"closestInMultiArray",value:function(ee,te,ie,ae){var se=this.w,oe=0,re=null,ne=-1;se.globals.series.length>1?oe=this.getFirstActiveXArray(ie):re=0;var le=ae[oe][0],ce=ie[oe][0],ue=Math.abs(ee-ce),pe=Math.abs(te-le),fe=pe+ue;return ae.map(function(me,ve){me.map(function(be,ye){var _e=Math.abs(te-ae[ve][ye]),Ae=Math.abs(ee-ie[ve][ye]),he=Ae+_e;he<fe&&(fe=he,ue=Ae,pe=_e,re=ve,ne=ye)})}),{index:re,j:ne}}},{key:"getFirstActiveXArray",value:function(ee){for(var te=0,ie=ee.map(function(se,oe){return se.length>0?oe:-1}),ae=0;ae<ie.length;ae++)if(ie[ae]!==-1){te=ie[ae];break}return te}},{key:"closestInArray",value:function(ee,te){for(var ie=te[0],ae=null,se=Math.abs(ee-ie),oe=0;oe<te.length;oe++){var re=Math.abs(ee-te[oe]);re<se&&(se=re,ae=oe)}return{index:ae}}},{key:"isXoverlap",value:function(ee){var te=[],ie=this.w.globals.seriesX.filter(function(se){return se[0]!==void 0});if(ie.length>0)for(var ae=0;ae<ie.length-1;ae++)ie[ae][ee]!==void 0&&ie[ae+1][ee]!==void 0&&ie[ae][ee]!==ie[ae+1][ee]&&te.push("unEqual");return te.length===0}},{key:"isInitialSeriesSameLen",value:function(){for(var ee=!0,te=this.w.globals.initialSeries,ie=0;ie<te.length-1;ie++)if(te[ie].data.length!==te[ie+1].data.length){ee=!1;break}return ee}},{key:"getBarsHeight",value:function(ee){return g(ee).reduce(function(te,ie){return te+ie.getBBox().height},0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var ee=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(ee=g(ee)).sort(function(ie,ae){return Number(ae.getAttribute("data:realIndex"))<Number(ie.getAttribute("data:realIndex"))?0:-1});var te=[];return ee.forEach(function(ie){te.push(ie.querySelector(".apexcharts-marker"))}),te}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(ee){var te=this.w,ie=te.config.markers.hover.size;return ie===void 0&&(ie=te.globals.markers.size[ee]+te.config.markers.hover.sizeOffset),ie}},{key:"toggleAllTooltipSeriesGroups",value:function(ee){var te=this.w,ie=this.ttCtx;ie.allTooltipSeriesGroups.length===0&&(ie.allTooltipSeriesGroups=te.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var ae=ie.allTooltipSeriesGroups,se=0;se<ae.length;se++)ee==="enable"?(ae[se].classList.add("apexcharts-active"),ae[se].style.display=te.config.tooltip.items.display):(ae[se].classList.remove("apexcharts-active"),ae[se].style.display="none")}}]),de}(),gt=function(){function de(ee){e(this,de),this.w=ee.w,this.ctx=ee.ctx,this.ttCtx=ee,this.tooltipUtil=new dt(ee)}return a(de,[{key:"drawSeriesTexts",value:function(ee){var te=ee.shared,ie=te===void 0||te,ae=ee.ttItems,se=ee.i,oe=se===void 0?0:se,re=ee.j,ne=re===void 0?null:re,le=ee.y1,ce=ee.y2,ue=ee.e,pe=this.w;pe.config.tooltip.custom!==void 0?this.handleCustomTooltip({i:oe,j:ne,y1:le,y2:ce,w:pe}):this.toggleActiveInactiveSeries(ie);var fe=this.getValuesToPrint({i:oe,j:ne});this.printLabels({i:oe,j:ne,values:fe,ttItems:ae,shared:ie,e:ue});var me=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=me.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=me.getBoundingClientRect().height}},{key:"printLabels",value:function(ee){var te,ie=this,ae=ee.i,se=ee.j,oe=ee.values,re=ee.ttItems,ne=ee.shared,le=ee.e,ce=this.w,ue=[],pe=function(ge){return ce.globals.seriesGoals[ge]&&ce.globals.seriesGoals[ge][se]&&Array.isArray(ce.globals.seriesGoals[ge][se])},fe=oe.xVal,me=oe.zVal,ve=oe.xAxisTTVal,be="",ye=ce.globals.colors[ae];se!==null&&ce.config.plotOptions.bar.distributed&&(ye=ce.globals.colors[se]);for(var _e=function(ge,xe){var we=ie.getFormatters(ae);be=ie.getSeriesName({fn:we.yLbTitleFormatter,index:ae,seriesIndex:ae,j:se}),ce.config.chart.type==="treemap"&&(be=we.yLbTitleFormatter(String(ce.config.series[ae].data[se].x),{series:ce.globals.series,seriesIndex:ae,dataPointIndex:se,w:ce}));var Ce=ce.config.tooltip.inverseOrder?xe:ge;if(ce.globals.axisCharts){var Se=function(ke){return we.yLbFormatter(ce.globals.series[ke][se],{series:ce.globals.series,seriesIndex:ke,dataPointIndex:se,w:ce})};ne?(we=ie.getFormatters(Ce),be=ie.getSeriesName({fn:we.yLbTitleFormatter,index:Ce,seriesIndex:ae,j:se}),ye=ce.globals.colors[Ce],te=Se(Ce),pe(Ce)&&(ue=ce.globals.seriesGoals[Ce][se].map(function(ke){return{attrs:ke,val:we.yLbFormatter(ke.value,{seriesIndex:Ce,dataPointIndex:se,w:ce})}}))):(le&&le.target&&le.target.getAttribute("fill")&&(ye=le.target.getAttribute("fill")),te=Se(ae),pe(ae)&&Array.isArray(ce.globals.seriesGoals[ae][se])&&(ue=ce.globals.seriesGoals[ae][se].map(function(ke){return{attrs:ke,val:we.yLbFormatter(ke.value,{seriesIndex:ae,dataPointIndex:se,w:ce})}})))}se===null&&(te=we.yLbFormatter(ce.globals.series[ae],o(o({},ce),{},{seriesIndex:ae,dataPointIndex:ae}))),ie.DOMHandling({i:ae,t:Ce,j:se,ttItems:re,values:{val:te,goalVals:ue,xVal:fe,xAxisTTVal:ve,zVal:me},seriesName:be,shared:ne,pColor:ye})},Ae=0,he=ce.globals.series.length-1;Ae<ce.globals.series.length;Ae++,he--)_e(Ae,he)}},{key:"getFormatters",value:function(ee){var te,ie=this.w,ae=ie.globals.yLabelFormatters[ee];return ie.globals.ttVal!==void 0?Array.isArray(ie.globals.ttVal)?(ae=ie.globals.ttVal[ee]&&ie.globals.ttVal[ee].formatter,te=ie.globals.ttVal[ee]&&ie.globals.ttVal[ee].title&&ie.globals.ttVal[ee].title.formatter):(ae=ie.globals.ttVal.formatter,typeof ie.globals.ttVal.title.formatter=="function"&&(te=ie.globals.ttVal.title.formatter)):te=ie.config.tooltip.y.title.formatter,typeof ae!="function"&&(ae=ie.globals.yLabelFormatters[0]?ie.globals.yLabelFormatters[0]:function(se){return se}),typeof te!="function"&&(te=function(se){return se}),{yLbFormatter:ae,yLbTitleFormatter:te}}},{key:"getSeriesName",value:function(ee){var te=ee.fn,ie=ee.index,ae=ee.seriesIndex,se=ee.j,oe=this.w;return te(String(oe.globals.seriesNames[ie]),{series:oe.globals.series,seriesIndex:ae,dataPointIndex:se,w:oe})}},{key:"DOMHandling",value:function(ee){ee.i;var te=ee.t,ie=ee.j,ae=ee.ttItems,se=ee.values,oe=ee.seriesName,re=ee.shared,ne=ee.pColor,le=this.w,ce=this.ttCtx,ue=se.val,pe=se.goalVals,fe=se.xVal,me=se.xAxisTTVal,ve=se.zVal,be=null;be=ae[te].children,le.config.tooltip.fillSeriesColor&&(ae[te].style.backgroundColor=ne,be[0].style.display="none"),ce.showTooltipTitle&&(ce.tooltipTitle===null&&(ce.tooltipTitle=le.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),ce.tooltipTitle.innerHTML=fe),ce.blxaxisTooltip&&(ce.xaxisTooltipText.innerHTML=me!==""?me:fe);var ye=ae[te].querySelector(".apexcharts-tooltip-text-y-label");ye&&(ye.innerHTML=oe||"");var _e=ae[te].querySelector(".apexcharts-tooltip-text-y-value");_e&&(_e.innerHTML=ue!==void 0?ue:""),be[0]&&be[0].classList.contains("apexcharts-tooltip-marker")&&(le.config.tooltip.marker.fillColors&&Array.isArray(le.config.tooltip.marker.fillColors)&&(ne=le.config.tooltip.marker.fillColors[te]),be[0].style.backgroundColor=ne),le.config.tooltip.marker.show||(be[0].style.display="none");var Ae=ae[te].querySelector(".apexcharts-tooltip-text-goals-label"),he=ae[te].querySelector(".apexcharts-tooltip-text-goals-value");if(pe.length&&le.globals.seriesGoals[te]){var ge=function(){var xe="<div >",we="<div>";pe.forEach(function(Ce,Se){xe+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(Ce.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(Ce.attrs.name,"</div>"),we+="<div>".concat(Ce.val,"</div>")}),Ae.innerHTML=xe+"</div>",he.innerHTML=we+"</div>"};re?le.globals.seriesGoals[te][ie]&&Array.isArray(le.globals.seriesGoals[te][ie])?ge():(Ae.innerHTML="",he.innerHTML=""):ge()}else Ae.innerHTML="",he.innerHTML="";ve!==null&&(ae[te].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=le.config.tooltip.z.title,ae[te].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=ve!==void 0?ve:""),re&&be[0]&&(ue==null||le.globals.collapsedSeriesIndices.indexOf(te)>-1?be[0].parentNode.style.display="none":be[0].parentNode.style.display=le.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(ee){var te=this.w;if(ee)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var ie=te.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");ie&&(ie.classList.add("apexcharts-active"),ie.style.display=te.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(ee){var te=ee.i,ie=ee.j,ae=this.w,se=this.ctx.series.filteredSeriesX(),oe="",re="",ne=null,le=null,ce={series:ae.globals.series,seriesIndex:te,dataPointIndex:ie,w:ae},ue=ae.globals.ttZFormatter;ie===null?le=ae.globals.series[te]:ae.globals.isXNumeric&&ae.config.chart.type!=="treemap"?(oe=se[te][ie],se[te].length===0&&(oe=se[this.tooltipUtil.getFirstActiveXArray(se)][ie])):oe=ae.globals.labels[ie]!==void 0?ae.globals.labels[ie]:"";var pe=oe;return ae.globals.isXNumeric&&ae.config.xaxis.type==="datetime"?oe=new W(this.ctx).xLabelFormat(ae.globals.ttKeyFormatter,pe,pe,{i:void 0,dateFormatter:new Y(this.ctx).formatDate,w:this.w}):oe=ae.globals.isBarHorizontal?ae.globals.yLabelFormatters[0](pe,ce):ae.globals.xLabelFormatter(pe,ce),ae.config.tooltip.x.formatter!==void 0&&(oe=ae.globals.ttKeyFormatter(pe,ce)),ae.globals.seriesZ.length>0&&ae.globals.seriesZ[te].length>0&&(ne=ue(ae.globals.seriesZ[te][ie],ae)),re=typeof ae.config.xaxis.tooltip.formatter=="function"?ae.globals.xaxisTooltipFormatter(pe,ce):oe,{val:Array.isArray(le)?le.join(" "):le,xVal:Array.isArray(oe)?oe.join(" "):oe,xAxisTTVal:Array.isArray(re)?re.join(" "):re,zVal:ne}}},{key:"handleCustomTooltip",value:function(ee){var te=ee.i,ie=ee.j,ae=ee.y1,se=ee.y2,oe=ee.w,re=this.ttCtx.getElTooltip(),ne=oe.config.tooltip.custom;Array.isArray(ne)&&ne[te]&&(ne=ne[te]),re.innerHTML=ne({ctx:this.ctx,series:oe.globals.series,seriesIndex:te,dataPointIndex:ie,y1:ae,y2:se,w:oe})}}]),de}(),ut=function(){function de(ee){e(this,de),this.ttCtx=ee,this.ctx=ee.ctx,this.w=ee.w}return a(de,[{key:"moveXCrosshairs",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ie=this.ttCtx,ae=this.w,se=ie.getElXCrosshairs(),oe=ee-ie.xcrosshairsWidth/2,re=ae.globals.labels.slice().length;if(te!==null&&(oe=ae.globals.gridWidth/re*te),se!==null&&(se.setAttribute("x",oe),se.setAttribute("x1",oe),se.setAttribute("x2",oe),se.setAttribute("y2",ae.globals.gridHeight),se.classList.add("apexcharts-active")),oe<0&&(oe=0),oe>ae.globals.gridWidth&&(oe=ae.globals.gridWidth),ie.blxaxisTooltip){var ne=oe;ae.config.xaxis.crosshairs.width!=="tickWidth"&&ae.config.xaxis.crosshairs.width!=="barWidth"||(ne=oe+ie.xcrosshairsWidth/2),this.moveXAxisTooltip(ne)}}},{key:"moveYCrosshairs",value:function(ee){var te=this.ttCtx;te.ycrosshairs!==null&&b.setAttrs(te.ycrosshairs,{y1:ee,y2:ee}),te.ycrosshairsHidden!==null&&b.setAttrs(te.ycrosshairsHidden,{y1:ee,y2:ee})}},{key:"moveXAxisTooltip",value:function(ee){var te=this.w,ie=this.ttCtx;if(ie.xaxisTooltip!==null){ie.xaxisTooltip.classList.add("apexcharts-active");var ae=ie.xaxisOffY+te.config.xaxis.tooltip.offsetY+te.globals.translateY+1+te.config.xaxis.offsetY;if(ee-=ie.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(ee)){ee+=te.globals.translateX;var se;se=new b(this.ctx).getTextRects(ie.xaxisTooltipText.innerHTML),ie.xaxisTooltipText.style.minWidth=se.width+"px",ie.xaxisTooltip.style.left=ee+"px",ie.xaxisTooltip.style.top=ae+"px"}}}},{key:"moveYAxisTooltip",value:function(ee){var te=this.w,ie=this.ttCtx;ie.yaxisTTEls===null&&(ie.yaxisTTEls=te.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var ae=parseInt(ie.ycrosshairsHidden.getAttribute("y1"),10),se=te.globals.translateY+ae,oe=ie.yaxisTTEls[ee].getBoundingClientRect().height,re=te.globals.translateYAxisX[ee]-2;te.config.yaxis[ee].opposite&&(re-=26),se-=oe/2,te.globals.ignoreYAxisIndexes.indexOf(ee)===-1?(ie.yaxisTTEls[ee].classList.add("apexcharts-active"),ie.yaxisTTEls[ee].style.top=se+"px",ie.yaxisTTEls[ee].style.left=re+te.config.yaxis[ee].tooltip.offsetX+"px"):ie.yaxisTTEls[ee].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,ae=this.w,se=this.ttCtx,oe=se.getElTooltip(),re=se.tooltipRect,ne=ie!==null?parseFloat(ie):1,le=parseFloat(ee)+ne+5,ce=parseFloat(te)+ne/2;if(le>ae.globals.gridWidth/2&&(le=le-re.ttWidth-ne-15),le>ae.globals.gridWidth-re.ttWidth-10&&(le=ae.globals.gridWidth-re.ttWidth),le<-20&&(le=-20),ae.config.tooltip.followCursor){var ue=se.getElGrid(),pe=ue.getBoundingClientRect();ce=se.e.clientY+ae.globals.translateY-pe.top-re.ttHeight/2}else ae.globals.isBarHorizontal?ce-=re.ttHeight:(re.ttHeight/2+ce>ae.globals.gridHeight&&(ce=ae.globals.gridHeight-re.ttHeight+ae.globals.translateY),ce<0&&(ce=0));isNaN(le)||(le+=ae.globals.translateX,oe.style.left=le+"px",oe.style.top=ce+"px")}},{key:"moveMarkers",value:function(ee,te){var ie=this.w,ae=this.ttCtx;if(ie.globals.markers.size[ee]>0)for(var se=ie.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(ee,"'] .apexcharts-marker")),oe=0;oe<se.length;oe++)parseInt(se[oe].getAttribute("rel"),10)===te&&(ae.marker.resetPointsSize(),ae.marker.enlargeCurrentPoint(te,se[oe]));else ae.marker.resetPointsSize(),this.moveDynamicPointOnHover(te,ee)}},{key:"moveDynamicPointOnHover",value:function(ee,te){var ie,ae,se=this.w,oe=this.ttCtx,re=se.globals.pointsArray,ne=oe.tooltipUtil.getHoverMarkerSize(te),le=se.config.series[te].type;if(!le||le!=="column"&&le!=="candlestick"&&le!=="boxPlot"){ie=re[te][ee][0],ae=re[te][ee][1]?re[te][ee][1]:0;var ce=se.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(te,"'] .apexcharts-series-markers circle"));ce&&ae<se.globals.gridHeight&&ae>0&&(ce.setAttribute("r",ne),ce.setAttribute("cx",ie),ce.setAttribute("cy",ae)),this.moveXCrosshairs(ie),oe.fixedTooltip||this.moveTooltip(ie,ae,ne)}}},{key:"moveDynamicPointsOnHover",value:function(ee){var te,ie=this.ttCtx,ae=ie.w,se=0,oe=0,re=ae.globals.pointsArray;te=new z(this.ctx).getActiveConfigSeriesIndex(!0);var ne=ie.tooltipUtil.getHoverMarkerSize(te);re[te]&&(se=re[te][ee][0],oe=re[te][ee][1]);var le=ie.tooltipUtil.getAllMarkers();if(le!==null)for(var ce=0;ce<ae.globals.series.length;ce++){var ue=re[ce];if(ae.globals.comboCharts&&ue===void 0&&le.splice(ce,0,null),ue&&ue.length){var pe=re[ce][ee][1];le[ce].setAttribute("cx",se),pe!==null&&!isNaN(pe)&&pe<ae.globals.gridHeight&&pe>0?(le[ce]&&le[ce].setAttribute("r",ne),le[ce]&&le[ce].setAttribute("cy",pe)):le[ce]&&le[ce].setAttribute("r",0)}}if(this.moveXCrosshairs(se),!ie.fixedTooltip){var fe=oe||ae.globals.gridHeight;this.moveTooltip(se,fe,ne)}}},{key:"moveStickyTooltipOverBars",value:function(ee){var te=this.w,ie=this.ttCtx,ae=te.globals.columnSeries?te.globals.columnSeries.length:te.globals.series.length,se=ae>=2&&ae%2==0?Math.floor(ae/2):Math.floor(ae/2)+1;te.globals.isBarHorizontal&&(se=new z(this.ctx).getActiveConfigSeriesIndex(!1,"desc")+1);var oe=te.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(se,"'] path[j='").concat(ee,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(se,"'] path[j='").concat(ee,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(se,"'] path[j='").concat(ee,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(se,"'] path[j='").concat(ee,"']")),re=oe?parseFloat(oe.getAttribute("cx")):0,ne=oe?parseFloat(oe.getAttribute("cy")):0,le=oe?parseFloat(oe.getAttribute("barWidth")):0,ce=oe?parseFloat(oe.getAttribute("barHeight")):0,ue=ie.getElGrid().getBoundingClientRect();if(te.globals.isXNumeric?(re-=ae%2!=0?le/2:0,oe&&(oe.classList.contains("apexcharts-candlestick-area")||oe.classList.contains("apexcharts-boxPlot-area"))&&te.globals.comboCharts&&(re-=le/2)):te.globals.isBarHorizontal||(re=ie.xAxisTicksPositions[ee-1]+ie.dataPointsDividedWidth/2,isNaN(re)&&(re=ie.xAxisTicksPositions[ee]-ie.dataPointsDividedWidth/2)),te.globals.isBarHorizontal?ne+=ce/3:ne=ie.e.clientY-ue.top-ie.tooltipRect.ttHeight/2,te.globals.isBarHorizontal||this.moveXCrosshairs(re),!ie.fixedTooltip){var pe=ne||te.globals.gridHeight;this.moveTooltip(re,pe)}}}]),de}(),pt=function(){function de(ee){e(this,de),this.w=ee.w,this.ttCtx=ee,this.ctx=ee.ctx,this.tooltipPosition=new ut(ee)}return a(de,[{key:"drawDynamicPoints",value:function(){var ee=this.w,te=new b(this.ctx),ie=new P(this.ctx),ae=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-series");ae=g(ae),ee.config.chart.stacked&&ae.sort(function(ue,pe){return parseFloat(ue.getAttribute("data:realIndex"))-parseFloat(pe.getAttribute("data:realIndex"))});for(var se=0;se<ae.length;se++){var oe=ae[se].querySelector(".apexcharts-series-markers-wrap");if(oe!==null){var re=void 0,ne="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));ee.config.chart.type!=="line"&&ee.config.chart.type!=="area"||ee.globals.comboCharts||ee.config.tooltip.intersect||(ne+=" no-pointer-events");var le=ie.getMarkerConfig({cssClass:ne,seriesIndex:Number(oe.getAttribute("data:realIndex"))});(re=te.drawMarker(0,0,le)).node.setAttribute("default-marker-size",0);var ce=document.createElementNS(ee.globals.SVGNS,"g");ce.classList.add("apexcharts-series-markers"),ce.appendChild(re.node),oe.appendChild(ce)}}}},{key:"enlargeCurrentPoint",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,ae=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,se=this.w;se.config.chart.type!=="bubble"&&this.newPointSize(ee,te);var oe=te.getAttribute("cx"),re=te.getAttribute("cy");if(ie!==null&&ae!==null&&(oe=ie,re=ae),this.tooltipPosition.moveXCrosshairs(oe),!this.fixedTooltip){if(se.config.chart.type==="radar"){var ne=this.ttCtx.getElGrid(),le=ne.getBoundingClientRect();oe=this.ttCtx.e.clientX-le.left}this.tooltipPosition.moveTooltip(oe,re,se.config.markers.hover.size)}}},{key:"enlargePoints",value:function(ee){for(var te=this.w,ie=this,ae=this.ttCtx,se=ee,oe=te.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),re=te.config.markers.hover.size,ne=0;ne<oe.length;ne++){var le=oe[ne].getAttribute("rel"),ce=oe[ne].getAttribute("index");if(re===void 0&&(re=te.globals.markers.size[ce]+te.config.markers.hover.sizeOffset),se===parseInt(le,10)){ie.newPointSize(se,oe[ne]);var ue=oe[ne].getAttribute("cx"),pe=oe[ne].getAttribute("cy");ie.tooltipPosition.moveXCrosshairs(ue),ae.fixedTooltip||ie.tooltipPosition.moveTooltip(ue,pe,re)}else ie.oldPointSize(oe[ne])}}},{key:"newPointSize",value:function(ee,te){var ie=this.w,ae=ie.config.markers.hover.size,se=ee===0?te.parentNode.firstChild:te.parentNode.lastChild;if(se.getAttribute("default-marker-size")!=="0"){var oe=parseInt(se.getAttribute("index"),10);ae===void 0&&(ae=ie.globals.markers.size[oe]+ie.config.markers.hover.sizeOffset),ae<0&&(ae=0),se.setAttribute("r",ae)}}},{key:"oldPointSize",value:function(ee){var te=parseFloat(ee.getAttribute("default-marker-size"));ee.setAttribute("r",te)}},{key:"resetPointsSize",value:function(){for(var ee=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),te=0;te<ee.length;te++){var ie=parseFloat(ee[te].getAttribute("default-marker-size"));p.isNumber(ie)&&ie>=0?ee[te].setAttribute("r",ie):ee[te].setAttribute("r",0)}}}]),de}(),ft=function(){function de(ee){e(this,de),this.w=ee.w,this.ttCtx=ee}return a(de,[{key:"getAttr",value:function(ee,te){return parseFloat(ee.target.getAttribute(te))}},{key:"handleHeatTreeTooltip",value:function(ee){var te=ee.e,ie=ee.opt,ae=ee.x,se=ee.y,oe=ee.type,re=this.ttCtx,ne=this.w;if(te.target.classList.contains("apexcharts-".concat(oe,"-rect"))){var le=this.getAttr(te,"i"),ce=this.getAttr(te,"j"),ue=this.getAttr(te,"cx"),pe=this.getAttr(te,"cy"),fe=this.getAttr(te,"width"),me=this.getAttr(te,"height");if(re.tooltipLabels.drawSeriesTexts({ttItems:ie.ttItems,i:le,j:ce,shared:!1,e:te}),ne.globals.capturedSeriesIndex=le,ne.globals.capturedDataPointIndex=ce,ae=ue+re.tooltipRect.ttWidth/2+fe,se=pe+re.tooltipRect.ttHeight/2-me/2,re.tooltipPosition.moveXCrosshairs(ue+fe/2),ae>ne.globals.gridWidth/2&&(ae=ue-re.tooltipRect.ttWidth/2+fe),re.w.config.tooltip.followCursor){var ve=ne.globals.dom.elWrap.getBoundingClientRect();ae=ne.globals.clientX-ve.left-re.tooltipRect.ttWidth/2,se=ne.globals.clientY-ve.top-re.tooltipRect.ttHeight-5}}return{x:ae,y:se}}},{key:"handleMarkerTooltip",value:function(ee){var te,ie,ae=ee.e,se=ee.opt,oe=ee.x,re=ee.y,ne=this.w,le=this.ttCtx;if(ae.target.classList.contains("apexcharts-marker")){var ce=parseInt(se.paths.getAttribute("cx"),10),ue=parseInt(se.paths.getAttribute("cy"),10),pe=parseFloat(se.paths.getAttribute("val"));if(ie=parseInt(se.paths.getAttribute("rel"),10),te=parseInt(se.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,le.intersect){var fe=p.findAncestor(se.paths,"apexcharts-series");fe&&(te=parseInt(fe.getAttribute("data:realIndex"),10))}if(le.tooltipLabels.drawSeriesTexts({ttItems:se.ttItems,i:te,j:ie,shared:!le.showOnIntersect&&ne.config.tooltip.shared,e:ae}),ae.type==="mouseup"&&le.markerClick(ae,te,ie),ne.globals.capturedSeriesIndex=te,ne.globals.capturedDataPointIndex=ie,oe=ce,re=ue+ne.globals.translateY-1.4*le.tooltipRect.ttHeight,le.w.config.tooltip.followCursor){var me=le.getElGrid().getBoundingClientRect();re=le.e.clientY+ne.globals.translateY-me.top}pe<0&&(re=ue),le.marker.enlargeCurrentPoint(ie,se.paths,oe,re)}return{x:oe,y:re}}},{key:"handleBarTooltip",value:function(ee){var te,ie,ae=ee.e,se=ee.opt,oe=this.w,re=this.ttCtx,ne=re.getElTooltip(),le=0,ce=0,ue=0,pe=this.getBarTooltipXY({e:ae,opt:se});te=pe.i;var fe=pe.barHeight,me=pe.j;oe.globals.capturedSeriesIndex=te,oe.globals.capturedDataPointIndex=me,oe.globals.isBarHorizontal&&re.tooltipUtil.hasBars()||!oe.config.tooltip.shared?(ce=pe.x,ue=pe.y,ie=Array.isArray(oe.config.stroke.width)?oe.config.stroke.width[te]:oe.config.stroke.width,le=ce):oe.globals.comboCharts||oe.config.tooltip.shared||(le/=2),isNaN(ue)?ue=oe.globals.svgHeight-re.tooltipRect.ttHeight:ue<0&&(ue=0);var ve=parseInt(se.paths.parentNode.getAttribute("data:realIndex"),10),be=oe.globals.isMultipleYAxis?oe.config.yaxis[ve]&&oe.config.yaxis[ve].reversed:oe.config.yaxis[0].reversed;if(ce+re.tooltipRect.ttWidth>oe.globals.gridWidth&&!be?ce-=re.tooltipRect.ttWidth:ce<0&&(ce=0),re.w.config.tooltip.followCursor){var ye=re.getElGrid().getBoundingClientRect();ue=re.e.clientY-ye.top}re.tooltip===null&&(re.tooltip=oe.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),oe.config.tooltip.shared||(oe.globals.comboBarCount>0?re.tooltipPosition.moveXCrosshairs(le+ie/2):re.tooltipPosition.moveXCrosshairs(le)),!re.fixedTooltip&&(!oe.config.tooltip.shared||oe.globals.isBarHorizontal&&re.tooltipUtil.hasBars())&&(be&&(ce-=re.tooltipRect.ttWidth)<0&&(ce=0),ne.style.left=ce+oe.globals.translateX+"px",!be||oe.globals.isBarHorizontal&&re.tooltipUtil.hasBars()||(ue=ue+fe-2*(oe.globals.series[te][me]<0?fe:0)),re.tooltipRect.ttHeight+ue>oe.globals.gridHeight?(ue=oe.globals.gridHeight-re.tooltipRect.ttHeight+oe.globals.translateY,ne.style.top=ue+"px"):ne.style.top=ue+oe.globals.translateY-re.tooltipRect.ttHeight/2+"px")}},{key:"getBarTooltipXY",value:function(ee){var te=ee.e,ie=ee.opt,ae=this.w,se=null,oe=this.ttCtx,re=0,ne=0,le=0,ce=0,ue=0,pe=te.target.classList;if(pe.contains("apexcharts-bar-area")||pe.contains("apexcharts-candlestick-area")||pe.contains("apexcharts-boxPlot-area")||pe.contains("apexcharts-rangebar-area")){var fe=te.target,me=fe.getBoundingClientRect(),ve=ie.elGrid.getBoundingClientRect(),be=me.height;ue=me.height;var ye=me.width,_e=parseInt(fe.getAttribute("cx"),10),Ae=parseInt(fe.getAttribute("cy"),10);ce=parseFloat(fe.getAttribute("barWidth"));var he=te.type==="touchmove"?te.touches[0].clientX:te.clientX;se=parseInt(fe.getAttribute("j"),10),re=parseInt(fe.parentNode.getAttribute("rel"),10)-1;var ge=fe.getAttribute("data-range-y1"),xe=fe.getAttribute("data-range-y2");ae.globals.comboCharts&&(re=parseInt(fe.parentNode.getAttribute("data:realIndex"),10)),oe.tooltipLabels.drawSeriesTexts({ttItems:ie.ttItems,i:re,j:se,y1:ge?parseInt(ge,10):null,y2:xe?parseInt(xe,10):null,shared:!oe.showOnIntersect&&ae.config.tooltip.shared,e:te}),ae.config.tooltip.followCursor?ae.globals.isBarHorizontal?(ne=he-ve.left+15,le=Ae-oe.dataPointsDividedHeight+be/2-oe.tooltipRect.ttHeight/2):(ne=ae.globals.isXNumeric?_e-ye/2:_e-oe.dataPointsDividedWidth+ye/2,le=te.clientY-ve.top-oe.tooltipRect.ttHeight/2-15):ae.globals.isBarHorizontal?((ne=_e)<oe.xyRatios.baseLineInvertedY&&(ne=_e-oe.tooltipRect.ttWidth),le=Ae-oe.dataPointsDividedHeight+be/2-oe.tooltipRect.ttHeight/2):(ne=ae.globals.isXNumeric?_e-ye/2:_e-oe.dataPointsDividedWidth+ye/2,le=Ae)}return{x:ne,y:le,barHeight:ue,barWidth:ce,i:re,j:se}}}]),de}(),xt=function(){function de(ee){e(this,de),this.w=ee.w,this.ttCtx=ee}return a(de,[{key:"drawXaxisTooltip",value:function(){var ee=this.w,te=this.ttCtx,ie=ee.config.xaxis.position==="bottom";te.xaxisOffY=ie?ee.globals.gridHeight+1:-ee.globals.xAxisHeight-ee.config.xaxis.axisTicks.height+3;var ae=ie?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",se=ee.globals.dom.elWrap;te.blxaxisTooltip&&ee.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")===null&&(te.xaxisTooltip=document.createElement("div"),te.xaxisTooltip.setAttribute("class",ae+" apexcharts-theme-"+ee.config.tooltip.theme),se.appendChild(te.xaxisTooltip),te.xaxisTooltipText=document.createElement("div"),te.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),te.xaxisTooltipText.style.fontFamily=ee.config.xaxis.tooltip.style.fontFamily||ee.config.chart.fontFamily,te.xaxisTooltipText.style.fontSize=ee.config.xaxis.tooltip.style.fontSize,te.xaxisTooltip.appendChild(te.xaxisTooltipText))}},{key:"drawYaxisTooltip",value:function(){for(var ee=this.w,te=this.ttCtx,ie=function(se){var oe=ee.config.yaxis[se].opposite||ee.config.yaxis[se].crosshairs.opposite;te.yaxisOffX=oe?ee.globals.gridWidth+1:1;var re="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(se,oe?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");ee.globals.yAxisSameScaleIndices.map(function(le,ce){le.map(function(ue,pe){pe===se&&(re+=ee.config.yaxis[pe].show?" ":" apexcharts-yaxistooltip-hidden")})});var ne=ee.globals.dom.elWrap;ee.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(se))===null&&(te.yaxisTooltip=document.createElement("div"),te.yaxisTooltip.setAttribute("class",re+" apexcharts-theme-"+ee.config.tooltip.theme),ne.appendChild(te.yaxisTooltip),se===0&&(te.yaxisTooltipText=[]),te.yaxisTooltipText[se]=document.createElement("div"),te.yaxisTooltipText[se].classList.add("apexcharts-yaxistooltip-text"),te.yaxisTooltip.appendChild(te.yaxisTooltipText[se]))},ae=0;ae<ee.config.yaxis.length;ae++)ie(ae)}},{key:"setXCrosshairWidth",value:function(){var ee=this.w,te=this.ttCtx,ie=te.getElXCrosshairs();if(te.xcrosshairsWidth=parseInt(ee.config.xaxis.crosshairs.width,10),ee.globals.comboCharts){var ae=ee.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(ae!==null&&ee.config.xaxis.crosshairs.width==="barWidth"){var se=parseFloat(ae.getAttribute("barWidth"));te.xcrosshairsWidth=se}else if(ee.config.xaxis.crosshairs.width==="tickWidth"){var oe=ee.globals.labels.length;te.xcrosshairsWidth=ee.globals.gridWidth/oe}}else if(ee.config.xaxis.crosshairs.width==="tickWidth"){var re=ee.globals.labels.length;te.xcrosshairsWidth=ee.globals.gridWidth/re}else if(ee.config.xaxis.crosshairs.width==="barWidth"){var ne=ee.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(ne!==null){var le=parseFloat(ne.getAttribute("barWidth"));te.xcrosshairsWidth=le}else te.xcrosshairsWidth=1}ee.globals.isBarHorizontal&&(te.xcrosshairsWidth=0),ie!==null&&te.xcrosshairsWidth>0&&ie.setAttribute("width",te.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var ee=this.w,te=this.ttCtx;te.ycrosshairs=ee.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),te.ycrosshairsHidden=ee.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(ee,te,ie){var ae=this.ttCtx,se=this.w,oe=se.globals.yLabelFormatters[ee];if(ae.yaxisTooltips[ee]){var re=ae.getElGrid().getBoundingClientRect(),ne=(te-re.top)*ie.yRatio[ee],le=se.globals.maxYArr[ee]-se.globals.minYArr[ee],ce=se.globals.minYArr[ee]+(le-ne);ae.tooltipPosition.moveYCrosshairs(te-re.top),ae.yaxisTooltipText[ee].innerHTML=oe(ce),ae.tooltipPosition.moveYAxisTooltip(ee)}}}]),de}(),bt=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.tConfig=te.config.tooltip,this.tooltipUtil=new dt(this),this.tooltipLabels=new gt(this),this.tooltipPosition=new ut(this),this.marker=new pt(this),this.intersect=new ft(this),this.axesTooltip=new xt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!te.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return a(de,[{key:"getElTooltip",value:function(ee){return ee||(ee=this),ee.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(ee){var te=this.w;this.xyRatios=ee,this.blxaxisTooltip=te.config.xaxis.tooltip.enabled&&te.globals.axisCharts,this.yaxisTooltips=te.config.yaxis.map(function(oe,re){return!!(oe.show&&oe.tooltip.enabled&&te.globals.axisCharts)}),this.allTooltipSeriesGroups=[],te.globals.axisCharts||(this.showTooltipTitle=!1);var ie=document.createElement("div");if(ie.classList.add("apexcharts-tooltip"),ie.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),te.globals.dom.elWrap.appendChild(ie),te.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var ae=new G(this.ctx);this.xAxisTicksPositions=ae.getXAxisTicksPositions()}if(!te.globals.comboCharts&&!this.tConfig.intersect&&te.config.chart.type!=="rangeBar"||this.tConfig.shared||(this.showOnIntersect=!0),te.config.markers.size!==0&&te.globals.markers.largestSize!==0||this.marker.drawDynamicPoints(this),te.globals.collapsedSeries.length!==te.globals.series.length){this.dataPointsDividedHeight=te.globals.gridHeight/te.globals.dataPoints,this.dataPointsDividedWidth=te.globals.gridWidth/te.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||te.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,ie.appendChild(this.tooltipTitle));var se=te.globals.series.length;(te.globals.xyCharts||te.globals.comboCharts)&&this.tConfig.shared&&(se=this.showOnIntersect?1:te.globals.series.length),this.legendLabels=te.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(se),this.addSVGEvents()}}},{key:"createTTElements",value:function(ee){for(var te=this,ie=this.w,ae=[],se=this.getElTooltip(),oe=function(ne){var le=document.createElement("div");le.classList.add("apexcharts-tooltip-series-group"),le.style.order=ie.config.tooltip.inverseOrder?ee-ne:ne+1,te.tConfig.shared&&te.tConfig.enabledOnSeries&&Array.isArray(te.tConfig.enabledOnSeries)&&te.tConfig.enabledOnSeries.indexOf(ne)<0&&le.classList.add("apexcharts-tooltip-series-group-hidden");var ce=document.createElement("span");ce.classList.add("apexcharts-tooltip-marker"),ce.style.backgroundColor=ie.globals.colors[ne],le.appendChild(ce);var ue=document.createElement("div");ue.classList.add("apexcharts-tooltip-text"),ue.style.fontFamily=te.tConfig.style.fontFamily||ie.config.chart.fontFamily,ue.style.fontSize=te.tConfig.style.fontSize,["y","goals","z"].forEach(function(pe){var fe=document.createElement("div");fe.classList.add("apexcharts-tooltip-".concat(pe,"-group"));var me=document.createElement("span");me.classList.add("apexcharts-tooltip-text-".concat(pe,"-label")),fe.appendChild(me);var ve=document.createElement("span");ve.classList.add("apexcharts-tooltip-text-".concat(pe,"-value")),fe.appendChild(ve),ue.appendChild(fe)}),le.appendChild(ue),se.appendChild(le),ae.push(le)},re=0;re<ee;re++)oe(re);return ae}},{key:"addSVGEvents",value:function(){var ee=this.w,te=ee.config.chart.type,ie=this.getElTooltip(),ae=!(te!=="bar"&&te!=="candlestick"&&te!=="boxPlot"&&te!=="rangeBar"),se=te==="area"||te==="line"||te==="scatter"||te==="bubble"||te==="radar",oe=ee.globals.dom.Paper.node,re=this.getElGrid();re&&(this.seriesBound=re.getBoundingClientRect());var ne,le=[],ce=[],ue={hoverArea:oe,elGrid:re,tooltipEl:ie,tooltipY:le,tooltipX:ce,ttItems:this.ttItems};if(ee.globals.axisCharts&&(se?ne=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):ae?ne=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):te!=="heatmap"&&te!=="treemap"||(ne=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),ne&&ne.length))for(var pe=0;pe<ne.length;pe++)le.push(ne[pe].getAttribute("cy")),ce.push(ne[pe].getAttribute("cx"));if(ee.globals.xyCharts&&!this.showOnIntersect||ee.globals.comboCharts&&!this.showOnIntersect||ae&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([oe],ue);else if(ae&&!ee.globals.comboCharts||se&&this.showOnIntersect)this.addDatapointEventsListeners(ue);else if(!ee.globals.axisCharts||te==="heatmap"||te==="treemap"){var fe=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(fe,ue)}if(this.showOnIntersect){var me=ee.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");me.length>0&&this.addPathsEventListeners(me,ue),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(ue)}}},{key:"drawFixedTooltipRect",value:function(){var ee=this.w,te=this.getElTooltip(),ie=te.getBoundingClientRect(),ae=ie.width+10,se=ie.height+10,oe=this.tConfig.fixed.offsetX,re=this.tConfig.fixed.offsetY,ne=this.tConfig.fixed.position.toLowerCase();return ne.indexOf("right")>-1&&(oe=oe+ee.globals.svgWidth-ae+10),ne.indexOf("bottom")>-1&&(re=re+ee.globals.svgHeight-se-10),te.style.left=oe+"px",te.style.top=re+"px",{x:oe,y:re,ttWidth:ae,ttHeight:se}}},{key:"addDatapointEventsListeners",value:function(ee){var te=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(te,ee)}},{key:"addPathsEventListeners",value:function(ee,te){for(var ie=this,ae=function(oe){var re={paths:ee[oe],tooltipEl:te.tooltipEl,tooltipY:te.tooltipY,tooltipX:te.tooltipX,elGrid:te.elGrid,hoverArea:te.hoverArea,ttItems:te.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map(function(ne){return ee[oe].addEventListener(ne,ie.onSeriesHover.bind(ie,re),{capture:!1,passive:!0})})},se=0;se<ee.length;se++)ae(se)}},{key:"onSeriesHover",value:function(ee,te){var ie=this,ae=Date.now()-this.lastHoverTime;ae>=100?this.seriesHover(ee,te):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout(function(){ie.seriesHover(ee,te)},100-ae))}},{key:"seriesHover",value:function(ee,te){var ie=this;this.lastHoverTime=Date.now();var ae=[],se=this.w;se.config.chart.group&&(ae=this.ctx.getGroupedCharts()),se.globals.axisCharts&&(se.globals.minX===-1/0&&se.globals.maxX===1/0||se.globals.dataPoints===0)||(ae.length?ae.forEach(function(oe){var re=ie.getElTooltip(oe),ne={paths:ee.paths,tooltipEl:re,tooltipY:ee.tooltipY,tooltipX:ee.tooltipX,elGrid:ee.elGrid,hoverArea:ee.hoverArea,ttItems:oe.w.globals.tooltip.ttItems};oe.w.globals.minX===ie.w.globals.minX&&oe.w.globals.maxX===ie.w.globals.maxX&&oe.w.globals.tooltip.seriesHoverByContext({chartCtx:oe,ttCtx:oe.w.globals.tooltip,opt:ne,e:te})}):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:ee,e:te}))}},{key:"seriesHoverByContext",value:function(ee){var te=ee.chartCtx,ie=ee.ttCtx,ae=ee.opt,se=ee.e,oe=te.w,re=this.getElTooltip();ie.tooltipRect={x:0,y:0,ttWidth:re.getBoundingClientRect().width,ttHeight:re.getBoundingClientRect().height},ie.e=se,!ie.tooltipUtil.hasBars()||oe.globals.comboCharts||ie.isBarShared||this.tConfig.onDatasetHover.highlightDataSeries&&new z(te).toggleSeriesOnHover(se,se.target.parentNode),ie.fixedTooltip&&ie.drawFixedTooltipRect(),oe.globals.axisCharts?ie.axisChartsTooltips({e:se,opt:ae,tooltipRect:ie.tooltipRect}):ie.nonAxisChartsTooltips({e:se,opt:ae,tooltipRect:ie.tooltipRect})}},{key:"axisChartsTooltips",value:function(ee){var te,ie,ae=ee.e,se=ee.opt,oe=this.w,re=se.elGrid.getBoundingClientRect(),ne=ae.type==="touchmove"?ae.touches[0].clientX:ae.clientX,le=ae.type==="touchmove"?ae.touches[0].clientY:ae.clientY;if(this.clientY=le,this.clientX=ne,oe.globals.capturedSeriesIndex=-1,oe.globals.capturedDataPointIndex=-1,le<re.top||le>re.top+re.height)this.handleMouseOut(se);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!oe.config.tooltip.shared){var ce=parseInt(se.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(ce)<0)return void this.handleMouseOut(se)}var ue=this.getElTooltip(),pe=this.getElXCrosshairs(),fe=oe.globals.xyCharts||oe.config.chart.type==="bar"&&!oe.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||oe.globals.comboCharts&&this.tooltipUtil.hasBars();if(ae.type==="mousemove"||ae.type==="touchmove"||ae.type==="mouseup"){pe!==null&&pe.classList.add("apexcharts-active");var me=this.yaxisTooltips.filter(function(ye){return ye===!0});if(this.ycrosshairs!==null&&me.length&&this.ycrosshairs.classList.add("apexcharts-active"),fe&&!this.showOnIntersect)this.handleStickyTooltip(ae,ne,le,se);else if(oe.config.chart.type==="heatmap"||oe.config.chart.type==="treemap"){var ve=this.intersect.handleHeatTreeTooltip({e:ae,opt:se,x:te,y:ie,type:oe.config.chart.type});te=ve.x,ie=ve.y,ue.style.left=te+"px",ue.style.top=ie+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:ae,opt:se}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:ae,opt:se,x:te,y:ie});if(this.yaxisTooltips.length)for(var be=0;be<oe.config.yaxis.length;be++)this.axesTooltip.drawYaxisTooltipText(be,le,this.xyRatios);se.tooltipEl.classList.add("apexcharts-active")}else ae.type!=="mouseout"&&ae.type!=="touchend"||this.handleMouseOut(se)}}},{key:"nonAxisChartsTooltips",value:function(ee){var te=ee.e,ie=ee.opt,ae=ee.tooltipRect,se=this.w,oe=ie.paths.getAttribute("rel"),re=this.getElTooltip(),ne=se.globals.dom.elWrap.getBoundingClientRect();if(te.type==="mousemove"||te.type==="touchmove"){re.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:ie.ttItems,i:parseInt(oe,10)-1,shared:!1});var le=se.globals.clientX-ne.left-ae.ttWidth/2,ce=se.globals.clientY-ne.top-ae.ttHeight-10;if(re.style.left=le+"px",re.style.top=ce+"px",se.config.legend.tooltipHoverFormatter){var ue=oe-1,pe=(0,se.config.legend.tooltipHoverFormatter)(this.legendLabels[ue].getAttribute("data:default-text"),{seriesIndex:ue,dataPointIndex:ue,w:se});this.legendLabels[ue].innerHTML=pe}}else te.type!=="mouseout"&&te.type!=="touchend"||(re.classList.remove("apexcharts-active"),se.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(fe){var me=fe.getAttribute("data:default-text");fe.innerHTML=decodeURIComponent(me)}))}},{key:"handleStickyTooltip",value:function(ee,te,ie,ae){var se=this.w,oe=this.tooltipUtil.getNearestValues({context:this,hoverArea:ae.hoverArea,elGrid:ae.elGrid,clientX:te,clientY:ie}),re=oe.j,ne=oe.capturedSeries,le=ae.elGrid.getBoundingClientRect();oe.hoverX<0||oe.hoverX>le.width?this.handleMouseOut(ae):ne!==null?this.handleStickyCapturedSeries(ee,ne,ae,re):(this.tooltipUtil.isXoverlap(re)||se.globals.isBarHorizontal)&&this.create(ee,this,0,re,ae.ttItems)}},{key:"handleStickyCapturedSeries",value:function(ee,te,ie,ae){var se=this.w;if(!this.tConfig.shared&&se.globals.series[te][ae]===null)return void this.handleMouseOut(ie);se.globals.series[te][ae]!==void 0?this.tConfig.shared&&this.tooltipUtil.isXoverlap(ae)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(ee,this,te,ae,ie.ttItems):this.create(ee,this,te,ae,ie.ttItems,!1):this.tooltipUtil.isXoverlap(ae)&&this.create(ee,this,0,ae,ie.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var ee=this.w,te=new b(this.ctx),ie=ee.globals.dom.Paper.select(".apexcharts-bar-area"),ae=0;ae<ie.length;ae++)te.pathMouseLeave(ie[ae])}},{key:"handleMouseOut",value:function(ee){var te=this.w,ie=this.getElXCrosshairs();if(ee.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),te.config.chart.type!=="bubble"&&this.marker.resetPointsSize(),ie!==null&&ie.classList.remove("apexcharts-active"),this.ycrosshairs!==null&&this.ycrosshairs.classList.remove("apexcharts-active"),this.blxaxisTooltip&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){this.yaxisTTEls===null&&(this.yaxisTTEls=te.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var ae=0;ae<this.yaxisTTEls.length;ae++)this.yaxisTTEls[ae].classList.remove("apexcharts-active")}te.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(se){var oe=se.getAttribute("data:default-text");se.innerHTML=decodeURIComponent(oe)})}},{key:"markerClick",value:function(ee,te,ie){var ae=this.w;typeof ae.config.chart.events.markerClick=="function"&&ae.config.chart.events.markerClick(ee,this.ctx,{seriesIndex:te,dataPointIndex:ie,w:ae}),this.ctx.events.fireEvent("markerClick",[ee,this.ctx,{seriesIndex:te,dataPointIndex:ie,w:ae}])}},{key:"create",value:function(ee,te,ie,ae,se){var oe=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,re=this.w,ne=te;ee.type==="mouseup"&&this.markerClick(ee,ie,ae),oe===null&&(oe=this.tConfig.shared);var le=this.tooltipUtil.hasMarkers(),ce=this.tooltipUtil.getElBars();if(re.config.legend.tooltipHoverFormatter){var ue=re.config.legend.tooltipHoverFormatter,pe=Array.from(this.legendLabels);pe.forEach(function(ge){var xe=ge.getAttribute("data:default-text");ge.innerHTML=decodeURIComponent(xe)});for(var fe=0;fe<pe.length;fe++){var me=pe[fe],ve=parseInt(me.getAttribute("i"),10),be=decodeURIComponent(me.getAttribute("data:default-text")),ye=ue(be,{seriesIndex:oe?ve:ie,dataPointIndex:ae,w:re});if(oe)me.innerHTML=re.globals.collapsedSeriesIndices.indexOf(ve)<0?ye:be;else if(me.innerHTML=ve===ie?ye:be,ie===ve)break}}if(oe){if(ne.tooltipLabels.drawSeriesTexts({ttItems:se,i:ie,j:ae,shared:!this.showOnIntersect&&this.tConfig.shared}),le&&(re.globals.markers.largestSize>0?ne.marker.enlargePoints(ae):ne.tooltipPosition.moveDynamicPointsOnHover(ae)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(ce),this.barSeriesHeight>0)){var _e=new b(this.ctx),Ae=re.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(ae,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(ae);for(var he=0;he<Ae.length;he++)_e.pathMouseEnter(Ae[he])}}else ne.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:se,i:ie,j:ae}),this.tooltipUtil.hasBars()&&ne.tooltipPosition.moveStickyTooltipOverBars(ae),le&&ne.tooltipPosition.moveMarkers(ie,ae)}}]),de}(),vt=function(de){n(te,E);var ee=d(te);function te(){return e(this,te),ee.apply(this,arguments)}return a(te,[{key:"draw",value:function(ie,ae){var se=this,oe=this.w;this.graphics=new b(this.ctx),this.bar=new E(this.ctx,this.xyRatios);var re=new y(this.ctx,oe);ie=re.getLogSeries(ie),this.yRatio=re.getLogYRatios(this.yRatio),this.barHelpers.initVariables(ie),oe.config.chart.stackType==="100%"&&(ie=oe.globals.seriesPercent.slice()),this.series=ie,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var ne=0;ne<ie.length;ne++)ie[ne].length>0&&(this.totalItems+=ie[ne].length);for(var le=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),ce=0,ue=0,pe=function(ve,be){var ye=void 0,_e=void 0,Ae=void 0,he=void 0,ge=[],xe=[],we=oe.globals.comboCharts?ae[ve]:ve;se.yRatio.length>1&&(se.yaxisIndex=we),se.isReversed=oe.config.yaxis[se.yaxisIndex]&&oe.config.yaxis[se.yaxisIndex].reversed;var Ce=se.graphics.group({class:"apexcharts-series",seriesName:p.escapeString(oe.globals.seriesNames[we]),rel:ve+1,"data:realIndex":we});se.ctx.series.addCollapsedClassToSeries(Ce,we);var Se=se.graphics.group({class:"apexcharts-datalabels","data:realIndex":we}),ke=0,Pe=0,Ee=se.initialPositions(ce,ue,ye,_e,Ae,he);ue=Ee.y,ke=Ee.barHeight,_e=Ee.yDivision,he=Ee.zeroW,ce=Ee.x,Pe=Ee.barWidth,ye=Ee.xDivision,Ae=Ee.zeroH,se.yArrj=[],se.yArrjF=[],se.yArrjVal=[],se.xArrj=[],se.xArrjF=[],se.xArrjVal=[],se.prevY.length===1&&se.prevY[0].every(function(Fe){return isNaN(Fe)})&&(se.prevY[0]=se.prevY[0].map(function(Fe){return Ae}),se.prevYF[0]=se.prevYF[0].map(function(Fe){return 0}));for(var Ie=0;Ie<oe.globals.dataPoints;Ie++){var Te=se.barHelpers.getStrokeWidth(ve,Ie,we),Le={indexes:{i:ve,j:Ie,realIndex:we,bc:be},strokeWidth:Te,x:ce,y:ue,elSeries:Ce},ze=null;se.isHorizontal?(ze=se.drawStackedBarPaths(o(o({},Le),{},{zeroW:he,barHeight:ke,yDivision:_e})),Pe=se.series[ve][Ie]/se.invertedYRatio):(ze=se.drawStackedColumnPaths(o(o({},Le),{},{xDivision:ye,barWidth:Pe,zeroH:Ae})),ke=se.series[ve][Ie]/se.yRatio[se.yaxisIndex]),ue=ze.y,ce=ze.x,ge.push(ce),xe.push(ue);var Me=se.barHelpers.getPathFillColor(ie,ve,Ie,we);Ce=se.renderSeries({realIndex:we,pathFill:Me,j:Ie,i:ve,pathFrom:ze.pathFrom,pathTo:ze.pathTo,strokeWidth:Te,elSeries:Ce,x:ce,y:ue,series:ie,barHeight:ke,barWidth:Pe,elDataLabelsWrap:Se,type:"bar",visibleSeries:0})}oe.globals.seriesXvalues[we]=ge,oe.globals.seriesYvalues[we]=xe,se.prevY.push(se.yArrj),se.prevYF.push(se.yArrjF),se.prevYVal.push(se.yArrjVal),se.prevX.push(se.xArrj),se.prevXF.push(se.xArrjF),se.prevXVal.push(se.xArrjVal),le.add(Ce)},fe=0,me=0;fe<ie.length;fe++,me++)pe(fe,me);return le}},{key:"initialPositions",value:function(ie,ae,se,oe,re,ne){var le,ce,ue=this.w;return this.isHorizontal?(le=(le=oe=ue.globals.gridHeight/ue.globals.dataPoints)*parseInt(ue.config.plotOptions.bar.barHeight,10)/100,ne=this.baseLineInvertedY+ue.globals.padHorizontal+(this.isReversed?ue.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),ae=(oe-le)/2):(ce=se=ue.globals.gridWidth/ue.globals.dataPoints,ce=ue.globals.isXNumeric&&ue.globals.dataPoints>1?(se=ue.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:ce*parseInt(ue.config.plotOptions.bar.columnWidth,10)/100,re=this.baseLineY[this.yaxisIndex]+(this.isReversed?ue.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),ie=ue.globals.padHorizontal+(se-ce)/2),{x:ie,y:ae,yDivision:oe,xDivision:se,barHeight:le,barWidth:ce,zeroH:re,zeroW:ne}}},{key:"drawStackedBarPaths",value:function(ie){for(var ae,se=ie.indexes,oe=ie.barHeight,re=ie.strokeWidth,ne=ie.zeroW,le=ie.x,ce=ie.y,ue=ie.yDivision,pe=ie.elSeries,fe=this.w,me=ce,ve=se.i,be=se.j,ye=0,_e=0;_e<this.prevXF.length;_e++)ye+=this.prevXF[_e][be];if(ve>0){var Ae=ne;this.prevXVal[ve-1][be]<0?Ae=this.series[ve][be]>=0?this.prevX[ve-1][be]+ye-2*(this.isReversed?ye:0):this.prevX[ve-1][be]:this.prevXVal[ve-1][be]>=0&&(Ae=this.series[ve][be]>=0?this.prevX[ve-1][be]:this.prevX[ve-1][be]-ye+2*(this.isReversed?ye:0)),ae=Ae}else ae=ne;le=this.series[ve][be]===null?ae:ae+this.series[ve][be]/this.invertedYRatio-2*(this.isReversed?this.series[ve][be]/this.invertedYRatio:0);var he=this.barHelpers.getBarpaths({barYPosition:me,barHeight:oe,x1:ae,x2:le,strokeWidth:re,series:this.series,realIndex:se.realIndex,i:ve,j:be,w:fe});return this.barHelpers.barBackground({j:be,i:ve,y1:me,y2:oe,elSeries:pe}),ce+=ue,{pathTo:he.pathTo,pathFrom:he.pathFrom,x:le,y:ce}}},{key:"drawStackedColumnPaths",value:function(ie){var ae=ie.indexes,se=ie.x,oe=ie.y,re=ie.xDivision,ne=ie.barWidth,le=ie.zeroH;ie.strokeWidth;var ce=ie.elSeries,ue=this.w,pe=ae.i,fe=ae.j,me=ae.bc;if(ue.globals.isXNumeric){var ve=ue.globals.seriesX[pe][fe];ve||(ve=0),se=(ve-ue.globals.minX)/this.xRatio-ne/2}for(var be,ye=se,_e=0,Ae=0;Ae<this.prevYF.length;Ae++)_e+=isNaN(this.prevYF[Ae][fe])?0:this.prevYF[Ae][fe];if(pe>0&&!ue.globals.isXNumeric||pe>0&&ue.globals.isXNumeric&&ue.globals.seriesX[pe-1][fe]===ue.globals.seriesX[pe][fe]){var he,ge,xe=Math.min(this.yRatio.length+1,pe+1);if(this.prevY[pe-1]!==void 0){for(var we=1;we<xe;we++)if(!isNaN(this.prevY[pe-we][fe])){ge=this.prevY[pe-we][fe];break}}for(var Ce=1;Ce<xe;Ce++){if(this.prevYVal[pe-Ce][fe]<0){he=this.series[pe][fe]>=0?ge-_e+2*(this.isReversed?_e:0):ge;break}if(this.prevYVal[pe-Ce][fe]>=0){he=this.series[pe][fe]>=0?ge:ge+_e-2*(this.isReversed?_e:0);break}}he===void 0&&(he=ue.globals.gridHeight),be=this.prevYF[0].every(function(ke){return ke===0})&&this.prevYF.slice(1,pe).every(function(ke){return ke.every(function(Pe){return isNaN(Pe)})})?ue.globals.gridHeight-le:he}else be=ue.globals.gridHeight-le;oe=be-this.series[pe][fe]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[pe][fe]/this.yRatio[this.yaxisIndex]:0);var Se=this.barHelpers.getColumnPaths({barXPosition:ye,barWidth:ne,y1:be,y2:oe,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:ae.realIndex,i:pe,j:fe,w:ue});return this.barHelpers.barBackground({bc:me,j:fe,i:pe,x1:ye,x2:ne,elSeries:ce}),se+=re,{pathTo:Se.pathTo,pathFrom:Se.pathFrom,x:ue.globals.isXNumeric?se-re:se,y:oe}}}]),te}(),mt=function(de){n(te,E);var ee=d(te);function te(){return e(this,te),ee.apply(this,arguments)}return a(te,[{key:"draw",value:function(ie,ae){var se=this,oe=this.w,re=new b(this.ctx),ne=new L(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot;var le=new y(this.ctx,oe);ie=le.getLogSeries(ie),this.series=ie,this.yRatio=le.getLogYRatios(this.yRatio),this.barHelpers.initVariables(ie);for(var ce=re.group({class:"apexcharts-".concat(oe.config.chart.type,"-series apexcharts-plot-series")}),ue=function(fe){se.isBoxPlot=oe.config.chart.type==="boxPlot"||oe.config.series[fe].type==="boxPlot";var me,ve,be=void 0,ye=void 0,_e=[],Ae=[],he=oe.globals.comboCharts?ae[fe]:fe,ge=re.group({class:"apexcharts-series",seriesName:p.escapeString(oe.globals.seriesNames[he]),rel:fe+1,"data:realIndex":he});se.ctx.series.addCollapsedClassToSeries(ge,he),ie[fe].length>0&&(se.visibleI=se.visibleI+1);var xe,we;se.yRatio.length>1&&(se.yaxisIndex=he);var Ce=se.barHelpers.initialPositions();ye=Ce.y,xe=Ce.barHeight,be=Ce.x,we=Ce.barWidth,me=Ce.xDivision,ve=Ce.zeroH,Ae.push(be+we/2);for(var Se=re.group({class:"apexcharts-datalabels","data:realIndex":he}),ke=function(Ee){var Ie=se.barHelpers.getStrokeWidth(fe,Ee,he),Te=se.drawBoxPaths({indexes:{i:fe,j:Ee,realIndex:he},x:be,y:ye,xDivision:me,barWidth:we,zeroH:ve,strokeWidth:Ie,elSeries:ge});ye=Te.y,be=Te.x,Ee>0&&Ae.push(be+we/2),_e.push(ye),Te.pathTo.forEach(function(Le,ze){var Me=!se.isBoxPlot&&se.candlestickOptions.wick.useFillColor?Te.color[ze]:oe.globals.stroke.colors[fe],Fe=ne.fillPath({seriesNumber:he,dataPointIndex:Ee,color:Te.color[ze],value:ie[fe][Ee]});se.renderSeries({realIndex:he,pathFill:Fe,lineFill:Me,j:Ee,i:fe,pathFrom:Te.pathFrom,pathTo:Le,strokeWidth:Ie,elSeries:ge,x:be,y:ye,series:ie,barHeight:xe,barWidth:we,elDataLabelsWrap:Se,visibleSeries:se.visibleI,type:oe.config.chart.type})})},Pe=0;Pe<oe.globals.dataPoints;Pe++)ke(Pe);oe.globals.seriesXvalues[he]=Ae,oe.globals.seriesYvalues[he]=_e,ce.add(ge)},pe=0;pe<ie.length;pe++)ue(pe);return ce}},{key:"drawBoxPaths",value:function(ie){var ae=ie.indexes,se=ie.x;ie.y;var oe=ie.xDivision,re=ie.barWidth,ne=ie.zeroH,le=ie.strokeWidth,ce=this.w,ue=new b(this.ctx),pe=ae.i,fe=ae.j,me=!0,ve=ce.config.plotOptions.candlestick.colors.upward,be=ce.config.plotOptions.candlestick.colors.downward,ye="";this.isBoxPlot&&(ye=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var _e=this.yRatio[this.yaxisIndex],Ae=ae.realIndex,he=this.getOHLCValue(Ae,fe),ge=ne,xe=ne;he.o>he.c&&(me=!1);var we=Math.min(he.o,he.c),Ce=Math.max(he.o,he.c),Se=he.m;ce.globals.isXNumeric&&(se=(ce.globals.seriesX[Ae][fe]-ce.globals.minX)/this.xRatio-re/2);var ke=se+re*this.visibleI;this.series[pe][fe]===void 0||this.series[pe][fe]===null?(we=ne,Ce=ne):(we=ne-we/_e,Ce=ne-Ce/_e,ge=ne-he.h/_e,xe=ne-he.l/_e,Se=ne-he.m/_e);var Pe=ue.move(ke,ne),Ee=ue.move(ke+re/2,we);return ce.globals.previousPaths.length>0&&(Ee=this.getPreviousPath(Ae,fe,!0)),Pe=this.isBoxPlot?[ue.move(ke,we)+ue.line(ke+re/2,we)+ue.line(ke+re/2,ge)+ue.line(ke+re/4,ge)+ue.line(ke+re-re/4,ge)+ue.line(ke+re/2,ge)+ue.line(ke+re/2,we)+ue.line(ke+re,we)+ue.line(ke+re,Se)+ue.line(ke,Se)+ue.line(ke,we+le/2),ue.move(ke,Se)+ue.line(ke+re,Se)+ue.line(ke+re,Ce)+ue.line(ke+re/2,Ce)+ue.line(ke+re/2,xe)+ue.line(ke+re-re/4,xe)+ue.line(ke+re/4,xe)+ue.line(ke+re/2,xe)+ue.line(ke+re/2,Ce)+ue.line(ke,Ce)+ue.line(ke,Se)+"z"]:[ue.move(ke,Ce)+ue.line(ke+re/2,Ce)+ue.line(ke+re/2,ge)+ue.line(ke+re/2,Ce)+ue.line(ke+re,Ce)+ue.line(ke+re,we)+ue.line(ke+re/2,we)+ue.line(ke+re/2,xe)+ue.line(ke+re/2,we)+ue.line(ke,we)+ue.line(ke,Ce-le/2)],Ee+=ue.move(ke,we),ce.globals.isXNumeric||(se+=oe),{pathTo:Pe,pathFrom:Ee,x:se,y:Ce,barXPosition:ke,color:this.isBoxPlot?ye:me?[ve]:[be]}}},{key:"getOHLCValue",value:function(ie,ae){var se=this.w;return{o:this.isBoxPlot?se.globals.seriesCandleH[ie][ae]:se.globals.seriesCandleO[ie][ae],h:this.isBoxPlot?se.globals.seriesCandleO[ie][ae]:se.globals.seriesCandleH[ie][ae],m:se.globals.seriesCandleM[ie][ae],l:this.isBoxPlot?se.globals.seriesCandleC[ie][ae]:se.globals.seriesCandleL[ie][ae],c:this.isBoxPlot?se.globals.seriesCandleL[ie][ae]:se.globals.seriesCandleC[ie][ae]}}}]),te}(),yt=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"checkColorRange",value:function(){var ee=this.w,te=!1,ie=ee.config.plotOptions[ee.config.chart.type];return ie.colorScale.ranges.length>0&&ie.colorScale.ranges.map(function(ae,se){ae.from<=0&&(te=!0)}),te}},{key:"getShadeColor",value:function(ee,te,ie,ae){var se=this.w,oe=1,re=se.config.plotOptions[ee].shadeIntensity,ne=this.determineColor(ee,te,ie);se.globals.hasNegs||ae?oe=se.config.plotOptions[ee].reverseNegativeShade?ne.percent<0?ne.percent/100*(1.25*re):(1-ne.percent/100)*(1.25*re):ne.percent<=0?1-(1+ne.percent/100)*re:(1-ne.percent/100)*re:(oe=1-ne.percent/100,ee==="treemap"&&(oe=(1-ne.percent/100)*(1.25*re)));var le=ne.color,ce=new p;return se.config.plotOptions[ee].enableShades&&(le=this.w.config.theme.mode==="dark"?p.hexToRgba(ce.shadeColor(-1*oe,ne.color),se.config.fill.opacity):p.hexToRgba(ce.shadeColor(oe,ne.color),se.config.fill.opacity)),{color:le,colorProps:ne}}},{key:"determineColor",value:function(ee,te,ie){var ae=this.w,se=ae.globals.series[te][ie],oe=ae.config.plotOptions[ee],re=oe.colorScale.inverse?ie:te;ae.config.plotOptions[ee].distributed&&(re=ie);var ne=ae.globals.colors[re],le=null,ce=Math.min.apply(Math,g(ae.globals.series[te])),ue=Math.max.apply(Math,g(ae.globals.series[te]));oe.distributed||ee!=="heatmap"||(ce=ae.globals.minY,ue=ae.globals.maxY),oe.colorScale.min!==void 0&&(ce=oe.colorScale.min<ae.globals.minY?oe.colorScale.min:ae.globals.minY,ue=oe.colorScale.max>ae.globals.maxY?oe.colorScale.max:ae.globals.maxY);var pe=Math.abs(ue)+Math.abs(ce),fe=100*se/(pe===0?pe-1e-6:pe);return oe.colorScale.ranges.length>0&&oe.colorScale.ranges.map(function(me,ve){if(se>=me.from&&se<=me.to){ne=me.color,le=me.foreColor?me.foreColor:null,ce=me.from,ue=me.to;var be=Math.abs(ue)+Math.abs(ce);fe=100*se/(be===0?be-1e-6:be)}}),{color:ne,foreColor:le,percent:fe}}},{key:"calculateDataLabels",value:function(ee){var te=ee.text,ie=ee.x,ae=ee.y,se=ee.i,oe=ee.j,re=ee.colorProps,ne=ee.fontSize,le=this.w.config.dataLabels,ce=new b(this.ctx),ue=new T(this.ctx),pe=null;if(le.enabled){pe=ce.group({class:"apexcharts-data-labels"});var fe=le.offsetX,me=le.offsetY,ve=ie+fe,be=ae+parseFloat(le.style.fontSize)/3+me;ue.plotDataLabelsText({x:ve,y:be,text:te,i:se,j:oe,color:re.foreColor,parent:pe,fontSize:ne,dataLabelsConfig:le})}return pe}},{key:"addListeners",value:function(ee){var te=new b(this.ctx);ee.node.addEventListener("mouseenter",te.pathMouseEnter.bind(this,ee)),ee.node.addEventListener("mouseleave",te.pathMouseLeave.bind(this,ee)),ee.node.addEventListener("mousedown",te.pathMouseDown.bind(this,ee))}}]),de}(),wt=function(){function de(ee,te){e(this,de),this.ctx=ee,this.w=ee.w,this.xRatio=te.xRatio,this.yRatio=te.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new yt(ee),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return a(de,[{key:"draw",value:function(ee){var te=this.w,ie=new b(this.ctx),ae=ie.group({class:"apexcharts-heatmap"});ae.attr("clip-path","url(#gridRectMask".concat(te.globals.cuid,")"));var se=te.globals.gridWidth/te.globals.dataPoints,oe=te.globals.gridHeight/te.globals.series.length,re=0,ne=!1;this.negRange=this.helpers.checkColorRange();var le=ee.slice();te.config.yaxis[0].reversed&&(ne=!0,le.reverse());for(var ce=ne?0:le.length-1;ne?ce<le.length:ce>=0;ne?ce++:ce--){var ue=ie.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:p.escapeString(te.globals.seriesNames[ce]),rel:ce+1,"data:realIndex":ce});if(this.ctx.series.addCollapsedClassToSeries(ue,ce),te.config.chart.dropShadow.enabled){var pe=te.config.chart.dropShadow;new x(this.ctx).dropShadow(ue,pe,ce)}for(var fe=0,me=te.config.plotOptions.heatmap.shadeIntensity,ve=0;ve<le[ce].length;ve++){var be=this.helpers.getShadeColor(te.config.chart.type,ce,ve,this.negRange),ye=be.color,_e=be.colorProps;te.config.fill.type==="image"&&(ye=new L(this.ctx).fillPath({seriesNumber:ce,dataPointIndex:ve,opacity:te.globals.hasNegs?_e.percent<0?1-(1+_e.percent/100):me+_e.percent/100:_e.percent/100,patternID:p.randomId(),width:te.config.fill.image.width?te.config.fill.image.width:se,height:te.config.fill.image.height?te.config.fill.image.height:oe}));var Ae=this.rectRadius,he=ie.drawRect(fe,re,se,oe,Ae);if(he.attr({cx:fe,cy:re}),he.node.classList.add("apexcharts-heatmap-rect"),ue.add(he),he.attr({fill:ye,i:ce,index:ce,j:ve,val:le[ce][ve],"stroke-width":this.strokeWidth,stroke:te.config.plotOptions.heatmap.useFillColorAsStroke?ye:te.globals.stroke.colors[0],color:ye}),this.helpers.addListeners(he),te.config.chart.animations.enabled&&!te.globals.dataChanged){var ge=1;te.globals.resized||(ge=te.config.chart.animations.speed),this.animateHeatMap(he,fe,re,se,oe,ge)}if(te.globals.dataChanged){var xe=1;if(this.dynamicAnim.enabled&&te.globals.shouldAnimate){xe=this.dynamicAnim.speed;var we=te.globals.previousPaths[ce]&&te.globals.previousPaths[ce][ve]&&te.globals.previousPaths[ce][ve].color;we||(we="rgba(255, 255, 255, 0)"),this.animateHeatColor(he,p.isColorHex(we)?we:p.rgb2hex(we),p.isColorHex(ye)?ye:p.rgb2hex(ye),xe)}}var Ce=(0,te.config.dataLabels.formatter)(te.globals.series[ce][ve],{value:te.globals.series[ce][ve],seriesIndex:ce,dataPointIndex:ve,w:te}),Se=this.helpers.calculateDataLabels({text:Ce,x:fe+se/2,y:re+oe/2,i:ce,j:ve,colorProps:_e,series:le});Se!==null&&ue.add(Se),fe+=se}re+=oe,ae.add(ue)}var ke=te.globals.yAxisScale[0].result.slice();te.config.yaxis[0].reversed?ke.unshift(""):ke.push(""),te.globals.yAxisScale[0].result=ke;var Pe=te.globals.gridHeight/te.globals.series.length;return te.config.yaxis[0].labels.offsetY=-Pe/2,ae}},{key:"animateHeatMap",value:function(ee,te,ie,ae,se,oe){var re=new f(this.ctx);re.animateRect(ee,{x:te+ae/2,y:ie+se/2,width:0,height:0},{x:te,y:ie,width:ae,height:se},oe,function(){re.animationCompleted(ee)})}},{key:"animateHeatColor",value:function(ee,te,ie,ae){ee.attr({fill:te}).animate(ae).attr({fill:ie})}}]),de}(),kt=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"drawYAxisTexts",value:function(ee,te,ie,ae){var se=this.w,oe=se.config.yaxis[0],re=se.globals.yLabelFormatters[0];return new b(this.ctx).drawText({x:ee+oe.labels.offsetX,y:te+oe.labels.offsetY,text:re(ae,ie),textAnchor:"middle",fontSize:oe.labels.style.fontSize,fontFamily:oe.labels.style.fontFamily,foreColor:Array.isArray(oe.labels.style.colors)?oe.labels.style.colors[ie]:oe.labels.style.colors})}}]),de}(),At=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w;var te=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=te.globals.stroke.colors!==void 0?te.globals.stroke.colors:te.globals.colors,this.defaultSize=Math.min(te.globals.gridWidth,te.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=te.globals.gridWidth/2,te.config.chart.type==="radialBar"?this.fullAngle=360:this.fullAngle=Math.abs(te.config.plotOptions.pie.endAngle-te.config.plotOptions.pie.startAngle),this.initialAngle=te.config.plotOptions.pie.startAngle%this.fullAngle,te.globals.radialSize=this.defaultSize/2.05-te.config.stroke.width-(te.config.chart.sparkline.enabled?0:te.config.chart.dropShadow.blur),this.donutSize=te.globals.radialSize*parseInt(te.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return a(de,[{key:"draw",value:function(ee){var te=this,ie=this.w,ae=new b(this.ctx);if(this.ret=ae.group({class:"apexcharts-pie"}),ie.globals.noData)return this.ret;for(var se=0,oe=0;oe<ee.length;oe++)se+=p.negToZero(ee[oe]);var re=[],ne=ae.group();se===0&&(se=1e-5),ee.forEach(function(we){te.maxY=Math.max(te.maxY,we)}),ie.config.yaxis[0].max&&(this.maxY=ie.config.yaxis[0].max),ie.config.grid.position==="back"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret);for(var le=0;le<ee.length;le++){var ce=this.fullAngle*p.negToZero(ee[le])/se;re.push(ce),this.chartType==="polarArea"?(re[le]=this.fullAngle/ee.length,this.sliceSizes.push(ie.globals.radialSize*ee[le]/this.maxY)):this.sliceSizes.push(ie.globals.radialSize)}if(ie.globals.dataChanged){for(var ue,pe=0,fe=0;fe<ie.globals.previousPaths.length;fe++)pe+=p.negToZero(ie.globals.previousPaths[fe]);for(var me=0;me<ie.globals.previousPaths.length;me++)ue=this.fullAngle*p.negToZero(ie.globals.previousPaths[me])/pe,this.prevSectorAngleArr.push(ue)}this.donutSize<0&&(this.donutSize=0);var ve=ie.config.plotOptions.pie.customScale,be=ie.globals.gridWidth/2,ye=ie.globals.gridHeight/2,_e=be-ie.globals.gridWidth/2*ve,Ae=ye-ie.globals.gridHeight/2*ve;if(this.chartType==="donut"){var he=ae.drawCircle(this.donutSize);he.attr({cx:this.centerX,cy:this.centerY,fill:ie.config.plotOptions.pie.donut.background?ie.config.plotOptions.pie.donut.background:"transparent"}),ne.add(he)}var ge=this.drawArcs(re,ee);if(this.sliceLabels.forEach(function(we){ge.add(we)}),ne.attr({transform:"translate(".concat(_e,", ").concat(Ae,") scale(").concat(ve,")")}),ne.add(ge),this.ret.add(ne),this.donutDataLabels.show){var xe=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:_e,translateY:Ae});this.ret.add(xe)}return ie.config.grid.position==="front"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(ee,te){var ie=this.w,ae=new x(this.ctx),se=new b(this.ctx),oe=new L(this.ctx),re=se.group({class:"apexcharts-slices"}),ne=this.initialAngle,le=this.initialAngle,ce=this.initialAngle,ue=this.initialAngle;this.strokeWidth=ie.config.stroke.show?ie.config.stroke.width:0;for(var pe=0;pe<ee.length;pe++){var fe=se.group({class:"apexcharts-series apexcharts-pie-series",seriesName:p.escapeString(ie.globals.seriesNames[pe]),rel:pe+1,"data:realIndex":pe});re.add(fe),le=ue,ce=(ne=ce)+ee[pe],ue=le+this.prevSectorAngleArr[pe];var me=ce<ne?this.fullAngle+ce-ne:ce-ne,ve=oe.fillPath({seriesNumber:pe,size:this.sliceSizes[pe],value:te[pe]}),be=this.getChangedPath(le,ue),ye=se.drawPath({d:be,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[pe]:this.lineColorArr,strokeWidth:0,fill:ve,fillOpacity:ie.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(pe)});if(ye.attr({index:0,j:pe}),ae.setSelectionFilter(ye,0,pe),ie.config.chart.dropShadow.enabled){var _e=ie.config.chart.dropShadow;ae.dropShadow(ye,_e,pe)}this.addListeners(ye,this.donutDataLabels),b.setAttrs(ye.node,{"data:angle":me,"data:startAngle":ne,"data:strokeWidth":this.strokeWidth,"data:value":te[pe]});var Ae={x:0,y:0};this.chartType==="pie"||this.chartType==="polarArea"?Ae=p.polarToCartesian(this.centerX,this.centerY,ie.globals.radialSize/1.25+ie.config.plotOptions.pie.dataLabels.offset,(ne+me/2)%this.fullAngle):this.chartType==="donut"&&(Ae=p.polarToCartesian(this.centerX,this.centerY,(ie.globals.radialSize+this.donutSize)/2+ie.config.plotOptions.pie.dataLabels.offset,(ne+me/2)%this.fullAngle)),fe.add(ye);var he=0;if(!this.initialAnim||ie.globals.resized||ie.globals.dataChanged?this.animBeginArr.push(0):((he=me/this.fullAngle*ie.config.chart.animations.speed)===0&&(he=1),this.animDur=he+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&ie.globals.dataChanged?this.animatePaths(ye,{size:this.sliceSizes[pe],endAngle:ce,startAngle:ne,prevStartAngle:le,prevEndAngle:ue,animateStartingPos:!0,i:pe,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:ie.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(ye,{size:this.sliceSizes[pe],endAngle:ce,startAngle:ne,i:pe,totalItems:ee.length-1,animBeginArr:this.animBeginArr,dur:he}),ie.config.plotOptions.pie.expandOnClick&&this.chartType!=="polarArea"&&ye.click(this.pieClicked.bind(this,pe)),ie.globals.selectedDataPoints[0]!==void 0&&ie.globals.selectedDataPoints[0].indexOf(pe)>-1&&this.pieClicked(pe),ie.config.dataLabels.enabled){var ge=Ae.x,xe=Ae.y,we=100*me/this.fullAngle+"%";if(me!==0&&ie.config.plotOptions.pie.dataLabels.minAngleToShowLabel<ee[pe]){var Ce=ie.config.dataLabels.formatter;Ce!==void 0&&(we=Ce(ie.globals.seriesPercent[pe][0],{seriesIndex:pe,w:ie}));var Se=ie.globals.dataLabels.style.colors[pe],ke=se.group({class:"apexcharts-datalabels"}),Pe=se.drawText({x:ge,y:xe,text:we,textAnchor:"middle",fontSize:ie.config.dataLabels.style.fontSize,fontFamily:ie.config.dataLabels.style.fontFamily,fontWeight:ie.config.dataLabels.style.fontWeight,foreColor:Se});if(ke.add(Pe),ie.config.dataLabels.dropShadow.enabled){var Ee=ie.config.dataLabels.dropShadow;ae.dropShadow(Pe,Ee)}Pe.node.classList.add("apexcharts-pie-label"),ie.config.chart.animations.animate&&ie.globals.resized===!1&&(Pe.node.classList.add("apexcharts-pie-label-delay"),Pe.node.style.animationDelay=ie.config.chart.animations.speed/940+"s"),this.sliceLabels.push(ke)}}}return re}},{key:"addListeners",value:function(ee,te){var ie=new b(this.ctx);ee.node.addEventListener("mouseenter",ie.pathMouseEnter.bind(this,ee)),ee.node.addEventListener("mouseleave",ie.pathMouseLeave.bind(this,ee)),ee.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,ee.node,te)),ee.node.addEventListener("mousedown",ie.pathMouseDown.bind(this,ee)),this.donutDataLabels.total.showAlways||(ee.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,ee.node,te)),ee.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,ee.node,te)))}},{key:"animatePaths",value:function(ee,te){var ie=this.w,ae=te.endAngle<te.startAngle?this.fullAngle+te.endAngle-te.startAngle:te.endAngle-te.startAngle,se=ae,oe=te.startAngle,re=te.startAngle;te.prevStartAngle!==void 0&&te.prevEndAngle!==void 0&&(oe=te.prevEndAngle,se=te.prevEndAngle<te.prevStartAngle?this.fullAngle+te.prevEndAngle-te.prevStartAngle:te.prevEndAngle-te.prevStartAngle),te.i===ie.config.series.length-1&&(ae+re>this.fullAngle?te.endAngle=te.endAngle-(ae+re):ae+re<this.fullAngle&&(te.endAngle=te.endAngle+(this.fullAngle-(ae+re)))),ae===this.fullAngle&&(ae=this.fullAngle-.01),this.animateArc(ee,oe,re,ae,se,te)}},{key:"animateArc",value:function(ee,te,ie,ae,se,oe){var re,ne=this,le=this.w,ce=new f(this.ctx),ue=oe.size;(isNaN(te)||isNaN(se))&&(te=ie,se=ae,oe.dur=0);var pe=ae,fe=ie,me=te<ie?this.fullAngle+te-ie:te-ie;le.globals.dataChanged&&oe.shouldSetPrevPaths&&oe.prevEndAngle&&(re=ne.getPiePath({me:ne,startAngle:oe.prevStartAngle,angle:oe.prevEndAngle<oe.prevStartAngle?this.fullAngle+oe.prevEndAngle-oe.prevStartAngle:oe.prevEndAngle-oe.prevStartAngle,size:ue}),ee.attr({d:re})),oe.dur!==0?ee.animate(oe.dur,le.globals.easing,oe.animBeginArr[oe.i]).afterAll(function(){ne.chartType!=="pie"&&ne.chartType!=="donut"&&ne.chartType!=="polarArea"||this.animate(le.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":ne.strokeWidth}),oe.i===le.config.series.length-1&&ce.animationCompleted(ee)}).during(function(ve){pe=me+(ae-me)*ve,oe.animateStartingPos&&(pe=se+(ae-se)*ve,fe=te-se+(ie-(te-se))*ve),re=ne.getPiePath({me:ne,startAngle:fe,angle:pe,size:ue}),ee.node.setAttribute("data:pathOrig",re),ee.attr({d:re})}):(re=ne.getPiePath({me:ne,startAngle:fe,angle:ae,size:ue}),oe.isTrack||(le.globals.animationEnded=!0),ee.node.setAttribute("data:pathOrig",re),ee.attr({d:re,"stroke-width":ne.strokeWidth}))}},{key:"pieClicked",value:function(ee){var te,ie=this.w,ae=this,se=ae.sliceSizes[ee]+(ie.config.plotOptions.pie.expandOnClick?4:0),oe=ie.globals.dom.Paper.select(".apexcharts-".concat(ae.chartType.toLowerCase(),"-slice-").concat(ee)).members[0];if(oe.attr("data:pieClicked")!=="true"){var re=ie.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(re,function(ue){ue.setAttribute("data:pieClicked","false");var pe=ue.getAttribute("data:pathOrig");ue.setAttribute("d",pe)}),oe.attr("data:pieClicked","true");var ne=parseInt(oe.attr("data:startAngle"),10),le=parseInt(oe.attr("data:angle"),10);te=ae.getPiePath({me:ae,startAngle:ne,angle:le,size:se}),le!==360&&oe.plot(te)}else{oe.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(oe.node,this.donutDataLabels);var ce=oe.attr("data:pathOrig");oe.attr({d:ce})}}},{key:"getChangedPath",value:function(ee,te){var ie="";return this.dynamicAnim&&this.w.globals.dataChanged&&(ie=this.getPiePath({me:this,startAngle:ee,angle:te-ee,size:this.size})),ie}},{key:"getPiePath",value:function(ee){var te=ee.me,ie=ee.startAngle,ae=ee.angle,se=ee.size,oe=ie,re=Math.PI*(oe-90)/180,ne=ae+ie;Math.ceil(ne)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(ne=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(ne)>this.fullAngle&&(ne-=this.fullAngle);var le=Math.PI*(ne-90)/180,ce=te.centerX+se*Math.cos(re),ue=te.centerY+se*Math.sin(re),pe=te.centerX+se*Math.cos(le),fe=te.centerY+se*Math.sin(le),me=p.polarToCartesian(te.centerX,te.centerY,te.donutSize,ne),ve=p.polarToCartesian(te.centerX,te.centerY,te.donutSize,oe),be=ae>180?1:0,ye=["M",ce,ue,"A",se,se,0,be,1,pe,fe];return te.chartType==="donut"?[].concat(ye,["L",me.x,me.y,"A",te.donutSize,te.donutSize,0,be,0,ve.x,ve.y,"L",ce,ue,"z"]).join(" "):te.chartType==="pie"||te.chartType==="polarArea"?[].concat(ye,["L",te.centerX,te.centerY,"L",ce,ue]).join(" "):[].concat(ye).join(" ")}},{key:"drawPolarElements",value:function(ee){var te=this.w,ie=new j(this.ctx),ae=new b(this.ctx),se=new kt(this.ctx),oe=ae.group(),re=ae.group(),ne=ie.niceScale(0,Math.ceil(this.maxY),te.config.yaxis[0].tickAmount,0,!0),le=ne.result.reverse(),ce=ne.result.length;this.maxY=ne.niceMax;for(var ue=te.globals.radialSize,pe=ue/(ce-1),fe=0;fe<ce-1;fe++){var me=ae.drawCircle(ue);if(me.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":te.config.plotOptions.polarArea.rings.strokeWidth,stroke:te.config.plotOptions.polarArea.rings.strokeColor}),te.config.yaxis[0].show){var ve=se.drawYAxisTexts(this.centerX,this.centerY-ue+parseInt(te.config.yaxis[0].labels.style.fontSize,10)/2,fe,le[fe]);re.add(ve)}oe.add(me),ue-=pe}this.drawSpokes(ee),ee.add(oe),ee.add(re)}},{key:"renderInnerDataLabels",value:function(ee,te){var ie=this.w,ae=new b(this.ctx),se=ae.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(te.translateX?te.translateX:0,", ").concat(te.translateY?te.translateY:0,") scale(").concat(ie.config.plotOptions.pie.customScale,")")}),oe=ee.total.show;se.node.style.opacity=te.opacity;var re,ne,le=te.centerX,ce=te.centerY;re=ee.name.color===void 0?ie.globals.colors[0]:ee.name.color;var ue=ee.name.fontSize,pe=ee.name.fontFamily,fe=ee.name.fontWeight;ne=ee.value.color===void 0?ie.config.chart.foreColor:ee.value.color;var me=ee.value.formatter,ve="",be="";if(oe?(re=ee.total.color,ue=ee.total.fontSize,pe=ee.total.fontFamily,fe=ee.total.fontWeight,be=ee.total.label,ve=ee.total.formatter(ie)):ie.globals.series.length===1&&(ve=me(ie.globals.series[0],ie),be=ie.globals.seriesNames[0]),be&&(be=ee.name.formatter(be,ee.total.show,ie)),ee.name.show){var ye=ae.drawText({x:le,y:ce+parseFloat(ee.name.offsetY),text:be,textAnchor:"middle",foreColor:re,fontSize:ue,fontWeight:fe,fontFamily:pe});ye.node.classList.add("apexcharts-datalabel-label"),se.add(ye)}if(ee.value.show){var _e=ee.name.show?parseFloat(ee.value.offsetY)+16:ee.value.offsetY,Ae=ae.drawText({x:le,y:ce+_e,text:ve,textAnchor:"middle",foreColor:ne,fontWeight:ee.value.fontWeight,fontSize:ee.value.fontSize,fontFamily:ee.value.fontFamily});Ae.node.classList.add("apexcharts-datalabel-value"),se.add(Ae)}return se}},{key:"printInnerLabels",value:function(ee,te,ie,ae){var se,oe=this.w;ae?se=ee.name.color===void 0?oe.globals.colors[parseInt(ae.parentNode.getAttribute("rel"),10)-1]:ee.name.color:oe.globals.series.length>1&&ee.total.show&&(se=ee.total.color);var re=oe.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),ne=oe.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");ie=(0,ee.value.formatter)(ie,oe),ae||typeof ee.total.formatter!="function"||(ie=ee.total.formatter(oe));var le=te===ee.total.label;te=ee.name.formatter(te,le,oe),re!==null&&(re.textContent=te),ne!==null&&(ne.textContent=ie),re!==null&&(re.style.fill=se)}},{key:"printDataLabelsInner",value:function(ee,te){var ie=this.w,ae=ee.getAttribute("data:value"),se=ie.globals.seriesNames[parseInt(ee.parentNode.getAttribute("rel"),10)-1];ie.globals.series.length>1&&this.printInnerLabels(te,se,ae,ee);var oe=ie.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");oe!==null&&(oe.style.opacity=1)}},{key:"drawSpokes",value:function(ee){var te=this,ie=this.w,ae=new b(this.ctx),se=ie.config.plotOptions.polarArea.spokes;if(se.strokeWidth!==0){for(var oe=[],re=360/ie.globals.series.length,ne=0;ne<ie.globals.series.length;ne++)oe.push(p.polarToCartesian(this.centerX,this.centerY,ie.globals.radialSize,ie.config.plotOptions.pie.startAngle+re*ne));oe.forEach(function(le,ce){var ue=ae.drawLine(le.x,le.y,te.centerX,te.centerY,Array.isArray(se.connectorColors)?se.connectorColors[ce]:se.connectorColors);ee.add(ue)})}}},{key:"revertDataLabelsInner",value:function(ee,te,ie){var ae=this,se=this.w,oe=se.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),re=!1,ne=se.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),le=function(pe){var fe=pe.makeSliceOut,me=pe.printLabel;Array.prototype.forEach.call(ne,function(ve){ve.getAttribute("data:pieClicked")==="true"&&(fe&&(re=!0),me&&ae.printDataLabelsInner(ve,te))})};if(le({makeSliceOut:!0,printLabel:!1}),te.total.show&&se.globals.series.length>1)re&&!te.total.showAlways?le({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(te,te.total.label,te.total.formatter(se));else if(le({makeSliceOut:!1,printLabel:!0}),!re)if(se.globals.selectedDataPoints.length&&se.globals.series.length>1)if(se.globals.selectedDataPoints[0].length>0){var ce=se.globals.selectedDataPoints[0],ue=se.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(ce));this.printDataLabelsInner(ue,te)}else oe&&se.globals.selectedDataPoints.length&&se.globals.selectedDataPoints[0].length===0&&(oe.style.opacity=0);else oe&&se.globals.series.length>1&&(oe.style.opacity=0)}}]),de}(),St=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var te=this.w;this.graphics=new b(this.ctx),this.lineColorArr=te.globals.stroke.colors!==void 0?te.globals.stroke.colors:te.globals.colors,this.defaultSize=te.globals.svgHeight<te.globals.svgWidth?te.globals.gridHeight+1.5*te.globals.goldenPadding:te.globals.gridWidth,this.isLog=te.config.yaxis[0].logarithmic,this.coreUtils=new y(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(te.globals.maxY,0):te.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):te.globals.minY,this.polygons=te.config.plotOptions.radar.polygons,this.strokeWidth=te.config.stroke.show?te.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-te.config.chart.dropShadow.blur,te.config.xaxis.labels.show&&(this.size=this.size-te.globals.xAxisLabelsWidth/1.75),te.config.plotOptions.radar.size!==void 0&&(this.size=te.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return a(de,[{key:"draw",value:function(ee){var te=this,ie=this.w,ae=new L(this.ctx),se=[],oe=new T(this.ctx);ee.length&&(this.dataPointsLen=ee[ie.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var re=ie.globals.gridWidth/2,ne=ie.globals.gridHeight/2,le=re+ie.config.plotOptions.radar.offsetX,ce=ne+ie.config.plotOptions.radar.offsetY,ue=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(le||0,", ").concat(ce||0,")")}),pe=[],fe=null,me=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),ee.forEach(function(be,ye){var _e=be.length===ie.globals.dataPoints,Ae=te.graphics.group().attr({class:"apexcharts-series","data:longestSeries":_e,seriesName:p.escapeString(ie.globals.seriesNames[ye]),rel:ye+1,"data:realIndex":ye});te.dataRadiusOfPercent[ye]=[],te.dataRadius[ye]=[],te.angleArr[ye]=[],be.forEach(function(Ie,Te){var Le=Math.abs(te.maxValue-te.minValue);Ie+=Math.abs(te.minValue),te.isLog&&(Ie=te.coreUtils.getLogVal(Ie,0)),te.dataRadiusOfPercent[ye][Te]=Ie/Le,te.dataRadius[ye][Te]=te.dataRadiusOfPercent[ye][Te]*te.size,te.angleArr[ye][Te]=Te*te.disAngle}),pe=te.getDataPointsPos(te.dataRadius[ye],te.angleArr[ye]);var he=te.createPaths(pe,{x:0,y:0});fe=te.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),me=te.graphics.group({class:"apexcharts-datalabels","data:realIndex":ye}),ie.globals.delayedElements.push({el:fe.node,index:ye});var ge={i:ye,realIndex:ye,animationDelay:ye,initialSpeed:ie.config.chart.animations.speed,dataChangeSpeed:ie.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:ie.globals.stroke.colors[ye],strokeLineCap:ie.config.stroke.lineCap},xe=null;ie.globals.previousPaths.length>0&&(xe=te.getPreviousPath(ye));for(var we=0;we<he.linePathsTo.length;we++){var Ce=te.graphics.renderPaths(o(o({},ge),{},{pathFrom:xe===null?he.linePathsFrom[we]:xe,pathTo:he.linePathsTo[we],strokeWidth:Array.isArray(te.strokeWidth)?te.strokeWidth[ye]:te.strokeWidth,fill:"none",drawShadow:!1}));Ae.add(Ce);var Se=ae.fillPath({seriesNumber:ye}),ke=te.graphics.renderPaths(o(o({},ge),{},{pathFrom:xe===null?he.areaPathsFrom[we]:xe,pathTo:he.areaPathsTo[we],strokeWidth:0,fill:Se,drawShadow:!1}));if(ie.config.chart.dropShadow.enabled){var Pe=new x(te.ctx),Ee=ie.config.chart.dropShadow;Pe.dropShadow(ke,Object.assign({},Ee,{noUserSpaceOnUse:!0}),ye)}Ae.add(ke)}be.forEach(function(Ie,Te){var Le=new P(te.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:ye,dataPointIndex:Te}),ze=te.graphics.drawMarker(pe[Te].x,pe[Te].y,Le);ze.attr("rel",Te),ze.attr("j",Te),ze.attr("index",ye),ze.node.setAttribute("default-marker-size",Le.pSize);var Me=te.graphics.group({class:"apexcharts-series-markers"});Me&&Me.add(ze),fe.add(Me),Ae.add(fe);var Fe=ie.config.dataLabels;if(Fe.enabled){var De=Fe.formatter(ie.globals.series[ye][Te],{seriesIndex:ye,dataPointIndex:Te,w:ie});oe.plotDataLabelsText({x:pe[Te].x,y:pe[Te].y,text:De,textAnchor:"middle",i:ye,j:ye,parent:me,offsetCorrection:!1,dataLabelsConfig:o({},Fe)})}Ae.add(me)}),se.push(Ae)}),this.drawPolygons({parent:ue}),ie.config.xaxis.labels.show){var ve=this.drawXAxisTexts();ue.add(ve)}return se.forEach(function(be){ue.add(be)}),ue.add(this.yaxisLabels),ue}},{key:"drawPolygons",value:function(ee){for(var te=this,ie=this.w,ae=ee.parent,se=new kt(this.ctx),oe=ie.globals.yAxisScale[0].result.reverse(),re=oe.length,ne=[],le=this.size/(re-1),ce=0;ce<re;ce++)ne[ce]=le*ce;ne.reverse();var ue=[],pe=[];ne.forEach(function(fe,me){var ve=p.getPolygonPos(fe,te.dataPointsLen),be="";ve.forEach(function(ye,_e){if(me===0){var Ae=te.graphics.drawLine(ye.x,ye.y,0,0,Array.isArray(te.polygons.connectorColors)?te.polygons.connectorColors[_e]:te.polygons.connectorColors);pe.push(Ae)}_e===0&&te.yaxisLabelsTextsPos.push({x:ye.x,y:ye.y}),be+=ye.x+","+ye.y+" "}),ue.push(be)}),ue.forEach(function(fe,me){var ve=te.polygons.strokeColors,be=te.polygons.strokeWidth,ye=te.graphics.drawPolygon(fe,Array.isArray(ve)?ve[me]:ve,Array.isArray(be)?be[me]:be,ie.globals.radarPolygons.fill.colors[me]);ae.add(ye)}),pe.forEach(function(fe){ae.add(fe)}),ie.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach(function(fe,me){var ve=se.drawYAxisTexts(fe.x,fe.y,me,oe[me]);te.yaxisLabels.add(ve)})}},{key:"drawXAxisTexts",value:function(){var ee=this,te=this.w,ie=te.config.xaxis.labels,ae=this.graphics.group({class:"apexcharts-xaxis"}),se=p.getPolygonPos(this.size,this.dataPointsLen);return te.globals.labels.forEach(function(oe,re){var ne=te.config.xaxis.labels.formatter,le=new T(ee.ctx);if(se[re]){var ce=ee.getTextPos(se[re],ee.size),ue=ne(oe,{seriesIndex:-1,dataPointIndex:re,w:te});le.plotDataLabelsText({x:ce.newX,y:ce.newY,text:ue,textAnchor:ce.textAnchor,i:re,j:re,parent:ae,color:Array.isArray(ie.style.colors)&&ie.style.colors[re]?ie.style.colors[re]:"#a8a8a8",dataLabelsConfig:o({textAnchor:ce.textAnchor,dropShadow:{enabled:!1}},ie),offsetCorrection:!1})}}),ae}},{key:"createPaths",value:function(ee,te){var ie=this,ae=[],se=[],oe=[],re=[];if(ee.length){se=[this.graphics.move(te.x,te.y)],re=[this.graphics.move(te.x,te.y)];var ne=this.graphics.move(ee[0].x,ee[0].y),le=this.graphics.move(ee[0].x,ee[0].y);ee.forEach(function(ce,ue){ne+=ie.graphics.line(ce.x,ce.y),le+=ie.graphics.line(ce.x,ce.y),ue===ee.length-1&&(ne+="Z",le+="Z")}),ae.push(ne),oe.push(le)}return{linePathsFrom:se,linePathsTo:ae,areaPathsFrom:re,areaPathsTo:oe}}},{key:"getTextPos",value:function(ee,te){var ie="middle",ae=ee.x,se=ee.y;return Math.abs(ee.x)>=10?ee.x>0?(ie="start",ae+=10):ee.x<0&&(ie="end",ae-=10):ie="middle",Math.abs(ee.y)>=te-10&&(ee.y<0?se-=10:ee.y>0&&(se+=10)),{textAnchor:ie,newX:ae,newY:se}}},{key:"getPreviousPath",value:function(ee){for(var te=this.w,ie=null,ae=0;ae<te.globals.previousPaths.length;ae++){var se=te.globals.previousPaths[ae];se.paths.length>0&&parseInt(se.realIndex,10)===parseInt(ee,10)&&te.globals.previousPaths[ae].paths[0]!==void 0&&(ie=te.globals.previousPaths[ae].paths[0].d)}return ie}},{key:"getDataPointsPos",value:function(ee,te){var ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.dataPointsLen;ee=ee||[],te=te||[];for(var ae=[],se=0;se<ie;se++){var oe={};oe.x=ee[se]*Math.sin(te[se]),oe.y=-ee[se]*Math.cos(te[se]),ae.push(oe)}return ae}}]),de}(),Ct=function(de){n(te,At);var ee=d(te);function te(ie){var ae;e(this,te),(ae=ee.call(this,ie)).ctx=ie,ae.w=ie.w,ae.animBeginArr=[0],ae.animDur=0;var se=ae.w;return ae.startAngle=se.config.plotOptions.radialBar.startAngle,ae.endAngle=se.config.plotOptions.radialBar.endAngle,ae.totalAngle=Math.abs(se.config.plotOptions.radialBar.endAngle-se.config.plotOptions.radialBar.startAngle),ae.trackStartAngle=se.config.plotOptions.radialBar.track.startAngle,ae.trackEndAngle=se.config.plotOptions.radialBar.track.endAngle,ae.donutDataLabels=ae.w.config.plotOptions.radialBar.dataLabels,ae.radialDataLabels=ae.donutDataLabels,ae.trackStartAngle||(ae.trackStartAngle=ae.startAngle),ae.trackEndAngle||(ae.trackEndAngle=ae.endAngle),ae.endAngle===360&&(ae.endAngle=359.99),ae.margin=parseInt(se.config.plotOptions.radialBar.track.margin,10),ae}return a(te,[{key:"draw",value:function(ie){var ae=this.w,se=new b(this.ctx),oe=se.group({class:"apexcharts-radialbar"});if(ae.globals.noData)return oe;var re=se.group(),ne=this.defaultSize/2,le=ae.globals.gridWidth/2,ce=this.defaultSize/2.05;ae.config.chart.sparkline.enabled||(ce=ce-ae.config.stroke.width-ae.config.chart.dropShadow.blur);var ue=ae.globals.fill.colors;if(ae.config.plotOptions.radialBar.track.show){var pe=this.drawTracks({size:ce,centerX:le,centerY:ne,colorArr:ue,series:ie});re.add(pe)}var fe=this.drawArcs({size:ce,centerX:le,centerY:ne,colorArr:ue,series:ie}),me=360;ae.config.plotOptions.radialBar.startAngle<0&&(me=this.totalAngle);var ve=(360-me)/360;if(ae.globals.radialSize=ce-ce*ve,this.radialDataLabels.value.show){var be=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);ae.globals.radialSize+=be*ve}return re.add(fe.g),ae.config.plotOptions.radialBar.hollow.position==="front"&&(fe.g.add(fe.elHollow),fe.dataLabels&&fe.g.add(fe.dataLabels)),oe.add(re),oe}},{key:"drawTracks",value:function(ie){var ae=this.w,se=new b(this.ctx),oe=se.group({class:"apexcharts-tracks"}),re=new x(this.ctx),ne=new L(this.ctx),le=this.getStrokeWidth(ie);ie.size=ie.size-le/2;for(var ce=0;ce<ie.series.length;ce++){var ue=se.group({class:"apexcharts-radialbar-track apexcharts-track"});oe.add(ue),ue.attr({rel:ce+1}),ie.size=ie.size-le-this.margin;var pe=ae.config.plotOptions.radialBar.track,fe=ne.fillPath({seriesNumber:0,size:ie.size,fillColors:Array.isArray(pe.background)?pe.background[ce]:pe.background,solid:!0}),me=this.trackStartAngle,ve=this.trackEndAngle;Math.abs(ve)+Math.abs(me)>=360&&(ve=360-Math.abs(this.startAngle)-.1);var be=se.drawPath({d:"",stroke:fe,strokeWidth:le*parseInt(pe.strokeWidth,10)/100,fill:"none",strokeOpacity:pe.opacity,classes:"apexcharts-radialbar-area"});if(pe.dropShadow.enabled){var ye=pe.dropShadow;re.dropShadow(be,ye)}ue.add(be),be.attr("id","apexcharts-radialbarTrack-"+ce),this.animatePaths(be,{centerX:ie.centerX,centerY:ie.centerY,endAngle:ve,startAngle:me,size:ie.size,i:ce,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:ae.globals.easing})}return oe}},{key:"drawArcs",value:function(ie){var ae=this.w,se=new b(this.ctx),oe=new L(this.ctx),re=new x(this.ctx),ne=se.group(),le=this.getStrokeWidth(ie);ie.size=ie.size-le/2;var ce=ae.config.plotOptions.radialBar.hollow.background,ue=ie.size-le*ie.series.length-this.margin*ie.series.length-le*parseInt(ae.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,pe=ue-ae.config.plotOptions.radialBar.hollow.margin;ae.config.plotOptions.radialBar.hollow.image!==void 0&&(ce=this.drawHollowImage(ie,ne,ue,ce));var fe=this.drawHollow({size:pe,centerX:ie.centerX,centerY:ie.centerY,fill:ce||"transparent"});if(ae.config.plotOptions.radialBar.hollow.dropShadow.enabled){var me=ae.config.plotOptions.radialBar.hollow.dropShadow;re.dropShadow(fe,me)}var ve=1;!this.radialDataLabels.total.show&&ae.globals.series.length>1&&(ve=0);var be=null;this.radialDataLabels.show&&(be=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:ue,centerX:ie.centerX,centerY:ie.centerY,opacity:ve})),ae.config.plotOptions.radialBar.hollow.position==="back"&&(ne.add(fe),be&&ne.add(be));var ye=!1;ae.config.plotOptions.radialBar.inverseOrder&&(ye=!0);for(var _e=ye?ie.series.length-1:0;ye?_e>=0:_e<ie.series.length;ye?_e--:_e++){var Ae=se.group({class:"apexcharts-series apexcharts-radial-series",seriesName:p.escapeString(ae.globals.seriesNames[_e])});ne.add(Ae),Ae.attr({rel:_e+1,"data:realIndex":_e}),this.ctx.series.addCollapsedClassToSeries(Ae,_e),ie.size=ie.size-le-this.margin;var he=oe.fillPath({seriesNumber:_e,size:ie.size,value:ie.series[_e]}),ge=this.startAngle,xe=void 0,we=p.negToZero(ie.series[_e]>100?100:ie.series[_e])/100,Ce=Math.round(this.totalAngle*we)+this.startAngle,Se=void 0;ae.globals.dataChanged&&(xe=this.startAngle,Se=Math.round(this.totalAngle*p.negToZero(ae.globals.previousPaths[_e])/100)+xe),Math.abs(Ce)+Math.abs(ge)>=360&&(Ce-=.01),Math.abs(Se)+Math.abs(xe)>=360&&(Se-=.01);var ke=Ce-ge,Pe=Array.isArray(ae.config.stroke.dashArray)?ae.config.stroke.dashArray[_e]:ae.config.stroke.dashArray,Ee=se.drawPath({d:"",stroke:he,strokeWidth:le,fill:"none",fillOpacity:ae.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+_e,strokeDashArray:Pe});if(b.setAttrs(Ee.node,{"data:angle":ke,"data:value":ie.series[_e]}),ae.config.chart.dropShadow.enabled){var Ie=ae.config.chart.dropShadow;re.dropShadow(Ee,Ie,_e)}re.setSelectionFilter(Ee,0,_e),this.addListeners(Ee,this.radialDataLabels),Ae.add(Ee),Ee.attr({index:0,j:_e});var Te=0;!this.initialAnim||ae.globals.resized||ae.globals.dataChanged||(Te=(Ce-ge)/360*ae.config.chart.animations.speed,this.animDur=Te/(1.2*ie.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),ae.globals.dataChanged&&(Te=(Ce-ge)/360*ae.config.chart.animations.dynamicAnimation.speed,this.animDur=Te/(1.2*ie.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),this.animatePaths(Ee,{centerX:ie.centerX,centerY:ie.centerY,endAngle:Ce,startAngle:ge,prevEndAngle:Se,prevStartAngle:xe,size:ie.size,i:_e,totalItems:2,animBeginArr:this.animBeginArr,dur:Te,shouldSetPrevPaths:!0,easing:ae.globals.easing})}return{g:ne,elHollow:fe,dataLabels:be}}},{key:"drawHollow",value:function(ie){var ae=new b(this.ctx).drawCircle(2*ie.size);return ae.attr({class:"apexcharts-radialbar-hollow",cx:ie.centerX,cy:ie.centerY,r:ie.size,fill:ie.fill}),ae}},{key:"drawHollowImage",value:function(ie,ae,se,oe){var re=this.w,ne=new L(this.ctx),le=p.randomId(),ce=re.config.plotOptions.radialBar.hollow.image;if(re.config.plotOptions.radialBar.hollow.imageClipped)ne.clippedImgArea({width:se,height:se,image:ce,patternID:"pattern".concat(re.globals.cuid).concat(le)}),oe="url(#pattern".concat(re.globals.cuid).concat(le,")");else{var ue=re.config.plotOptions.radialBar.hollow.imageWidth,pe=re.config.plotOptions.radialBar.hollow.imageHeight;if(ue===void 0&&pe===void 0){var fe=re.globals.dom.Paper.image(ce).loaded(function(ve){this.move(ie.centerX-ve.width/2+re.config.plotOptions.radialBar.hollow.imageOffsetX,ie.centerY-ve.height/2+re.config.plotOptions.radialBar.hollow.imageOffsetY)});ae.add(fe)}else{var me=re.globals.dom.Paper.image(ce).loaded(function(ve){this.move(ie.centerX-ue/2+re.config.plotOptions.radialBar.hollow.imageOffsetX,ie.centerY-pe/2+re.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(ue,pe)});ae.add(me)}}return oe}},{key:"getStrokeWidth",value:function(ie){var ae=this.w;return ie.size*(100-parseInt(ae.config.plotOptions.radialBar.hollow.size,10))/100/(ie.series.length+1)-this.margin}}]),te}(),Lt=function(){function de(ee){e(this,de),this.w=ee.w,this.lineCtx=ee}return a(de,[{key:"sameValueSeriesFix",value:function(ee,te){var ie=this.w;if(ie.config.chart.type==="line"&&(ie.config.fill.type==="gradient"||ie.config.fill.type[ee]==="gradient")&&new y(this.lineCtx.ctx,ie).seriesHaveSameValues(ee)){var ae=te[ee].slice();ae[ae.length-1]=ae[ae.length-1]+1e-6,te[ee]=ae}return te}},{key:"calculatePoints",value:function(ee){var te=ee.series,ie=ee.realIndex,ae=ee.x,se=ee.y,oe=ee.i,re=ee.j,ne=ee.prevY,le=this.w,ce=[],ue=[];if(re===0){var pe=this.lineCtx.categoryAxisCorrection+le.config.markers.offsetX;le.globals.isXNumeric&&(pe=(le.globals.seriesX[ie][0]-le.globals.minX)/this.lineCtx.xRatio+le.config.markers.offsetX),ce.push(pe),ue.push(p.isNumber(te[oe][0])?ne+le.config.markers.offsetY:null),ce.push(ae+le.config.markers.offsetX),ue.push(p.isNumber(te[oe][re+1])?se+le.config.markers.offsetY:null)}else ce.push(ae+le.config.markers.offsetX),ue.push(p.isNumber(te[oe][re+1])?se+le.config.markers.offsetY:null);return{x:ce,y:ue}}},{key:"checkPreviousPaths",value:function(ee){for(var te=ee.pathFromLine,ie=ee.pathFromArea,ae=ee.realIndex,se=this.w,oe=0;oe<se.globals.previousPaths.length;oe++){var re=se.globals.previousPaths[oe];(re.type==="line"||re.type==="area")&&re.paths.length>0&&parseInt(re.realIndex,10)===parseInt(ae,10)&&(re.type==="line"?(this.lineCtx.appendPathFrom=!1,te=se.globals.previousPaths[oe].paths[0].d):re.type==="area"&&(this.lineCtx.appendPathFrom=!1,ie=se.globals.previousPaths[oe].paths[0].d,se.config.stroke.show&&se.globals.previousPaths[oe].paths[1]&&(te=se.globals.previousPaths[oe].paths[1].d)))}return{pathFromLine:te,pathFromArea:ie}}},{key:"determineFirstPrevY",value:function(ee){var te=ee.i,ie=ee.series,ae=ee.prevY,se=ee.lineYPosition,oe=this.w;if(ie[te][0]!==void 0)ae=(se=oe.config.chart.stacked&&te>0?this.lineCtx.prevSeriesY[te-1][0]:this.lineCtx.zeroY)-ie[te][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?ie[te][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(oe.config.chart.stacked&&te>0&&ie[te][0]===void 0){for(var re=te-1;re>=0;re--)if(ie[re][0]!==null&&ie[re][0]!==void 0){ae=se=this.lineCtx.prevSeriesY[re][0];break}}return{prevY:ae,lineYPosition:se}}}]),de}(),Pt=function(){function de(ee,te,ie){e(this,de),this.ctx=ee,this.w=ee.w,this.xyRatios=te,this.pointsChart=!(this.w.config.chart.type!=="bubble"&&this.w.config.chart.type!=="scatter")||ie,this.scatter=new M(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Lt(this),this.markers=new P(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return a(de,[{key:"draw",value:function(ee,te,ie){var ae=this.w,se=new b(this.ctx),oe=ae.globals.comboCharts?te:ae.config.chart.type,re=se.group({class:"apexcharts-".concat(oe,"-series apexcharts-plot-series")}),ne=new y(this.ctx,ae);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,ee=ne.getLogSeries(ee),this.yRatio=ne.getLogYRatios(this.yRatio);for(var le=[],ce=0;ce<ee.length;ce++){ee=this.lineHelpers.sameValueSeriesFix(ce,ee);var ue=ae.globals.comboCharts?ie[ce]:ce;this._initSerieVariables(ee,ce,ue);var pe=[],fe=[],me=ae.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,ue),ae.globals.isXNumeric&&ae.globals.seriesX.length>0&&(me=(ae.globals.seriesX[ue][0]-ae.globals.minX)/this.xRatio),fe.push(me);var ve,be=me,ye=be,_e=this.zeroY;_e=this.lineHelpers.determineFirstPrevY({i:ce,series:ee,prevY:_e,lineYPosition:0}).prevY,pe.push(_e),ve=_e;var Ae=this._calculatePathsFrom({series:ee,i:ce,realIndex:ue,prevX:ye,prevY:_e}),he=this._iterateOverDataPoints({series:ee,realIndex:ue,i:ce,x:me,y:1,pX:be,pY:ve,pathsFrom:Ae,linePaths:[],areaPaths:[],seriesIndex:ie,lineYPosition:0,xArrj:fe,yArrj:pe});this._handlePaths({type:oe,realIndex:ue,i:ce,paths:he}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),le.push(this.elSeries)}if(ae.config.chart.stacked)for(var ge=le.length;ge>0;ge--)re.add(le[ge-1]);else for(var xe=0;xe<le.length;xe++)re.add(le[xe]);return re}},{key:"_initSerieVariables",value:function(ee,te,ie){var ae=this.w,se=new b(this.ctx);this.xDivision=ae.globals.gridWidth/(ae.globals.dataPoints-(ae.config.xaxis.tickPlacement==="on"?1:0)),this.strokeWidth=Array.isArray(ae.config.stroke.width)?ae.config.stroke.width[ie]:ae.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=ie),this.isReversed=ae.config.yaxis[this.yaxisIndex]&&ae.config.yaxis[this.yaxisIndex].reversed,this.zeroY=ae.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?ae.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>ae.globals.gridHeight||ae.config.plotOptions.area.fillTo==="end")&&(this.areaBottomY=ae.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=se.group({class:"apexcharts-series",seriesName:p.escapeString(ae.globals.seriesNames[ie])}),this.elPointsMain=se.group({class:"apexcharts-series-markers-wrap","data:realIndex":ie}),this.elDataLabelsWrap=se.group({class:"apexcharts-datalabels","data:realIndex":ie});var oe=ee[te].length===ae.globals.dataPoints;this.elSeries.attr({"data:longestSeries":oe,rel:te+1,"data:realIndex":ie}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(ee){var te,ie,ae,se,oe=ee.series,re=ee.i,ne=ee.realIndex,le=ee.prevX,ce=ee.prevY,ue=this.w,pe=new b(this.ctx);if(oe[re][0]===null){for(var fe=0;fe<oe[re].length;fe++)if(oe[re][fe]!==null){le=this.xDivision*fe,ce=this.zeroY-oe[re][fe]/this.yRatio[this.yaxisIndex],te=pe.move(le,ce),ie=pe.move(le,this.areaBottomY);break}}else te=pe.move(le,ce),ie=pe.move(le,this.areaBottomY)+pe.line(le,ce);if(ae=pe.move(-1,this.zeroY)+pe.line(-1,this.zeroY),se=pe.move(-1,this.zeroY)+pe.line(-1,this.zeroY),ue.globals.previousPaths.length>0){var me=this.lineHelpers.checkPreviousPaths({pathFromLine:ae,pathFromArea:se,realIndex:ne});ae=me.pathFromLine,se=me.pathFromArea}return{prevX:le,prevY:ce,linePath:te,areaPath:ie,pathFromLine:ae,pathFromArea:se}}},{key:"_handlePaths",value:function(ee){var te=ee.type,ie=ee.realIndex,ae=ee.i,se=ee.paths,oe=this.w,re=new b(this.ctx),ne=new L(this.ctx);this.prevSeriesY.push(se.yArrj),oe.globals.seriesXvalues[ie]=se.xArrj,oe.globals.seriesYvalues[ie]=se.yArrj;var le=oe.config.forecastDataPoints;if(le.count>0){var ce=oe.globals.seriesXvalues[ie][oe.globals.seriesXvalues[ie].length-le.count-1],ue=re.drawRect(ce,0,oe.globals.gridWidth,oe.globals.gridHeight,0);oe.globals.dom.elForecastMask.appendChild(ue.node);var pe=re.drawRect(0,0,ce,oe.globals.gridHeight,0);oe.globals.dom.elNonForecastMask.appendChild(pe.node)}this.pointsChart||oe.globals.delayedElements.push({el:this.elPointsMain.node,index:ie});var fe={i:ae,realIndex:ie,animationDelay:ae,initialSpeed:oe.config.chart.animations.speed,dataChangeSpeed:oe.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(te)};if(te==="area")for(var me=ne.fillPath({seriesNumber:ie}),ve=0;ve<se.areaPaths.length;ve++){var be=re.renderPaths(o(o({},fe),{},{pathFrom:se.pathFromArea,pathTo:se.areaPaths[ve],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:me}));this.elSeries.add(be)}if(oe.config.stroke.show&&!this.pointsChart){var ye=null;ye=te==="line"?ne.fillPath({seriesNumber:ie,i:ae}):oe.globals.stroke.colors[ie];for(var _e=0;_e<se.linePaths.length;_e++){var Ae=o(o({},fe),{},{pathFrom:se.pathFromLine,pathTo:se.linePaths[_e],stroke:ye,strokeWidth:this.strokeWidth,strokeLineCap:oe.config.stroke.lineCap,fill:"none"}),he=re.renderPaths(Ae);if(this.elSeries.add(he),le.count>0){var ge=re.renderPaths(Ae);ge.node.setAttribute("stroke-dasharray",le.dashArray),le.strokeWidth&&ge.node.setAttribute("stroke-width",le.strokeWidth),this.elSeries.add(ge),ge.attr("clip-path","url(#forecastMask".concat(oe.globals.cuid,")")),he.attr("clip-path","url(#nonForecastMask".concat(oe.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(ee){for(var te=ee.series,ie=ee.realIndex,ae=ee.i,se=ee.x,oe=ee.y,re=ee.pX,ne=ee.pY,le=ee.pathsFrom,ce=ee.linePaths,ue=ee.areaPaths,pe=ee.seriesIndex,fe=ee.lineYPosition,me=ee.xArrj,ve=ee.yArrj,be=this.w,ye=new b(this.ctx),_e=this.yRatio,Ae=le.prevY,he=le.linePath,ge=le.areaPath,xe=le.pathFromLine,we=le.pathFromArea,Ce=p.isNumber(be.globals.minYArr[ie])?be.globals.minYArr[ie]:be.globals.minY,Se=be.globals.dataPoints>1?be.globals.dataPoints-1:be.globals.dataPoints,ke=0;ke<Se;ke++){var Pe=te[ae][ke+1]===void 0||te[ae][ke+1]===null;if(be.globals.isXNumeric){var Ee=be.globals.seriesX[ie][ke+1];be.globals.seriesX[ie][ke+1]===void 0&&(Ee=be.globals.seriesX[ie][Se-1]),se=(Ee-be.globals.minX)/this.xRatio}else se+=this.xDivision;be.config.chart.stacked?ae>0&&be.globals.collapsedSeries.length<be.config.series.length-1?fe=this.prevSeriesY[function(Le){for(var ze=Le,Me=0;Me<be.globals.series.length;Me++)if(be.globals.collapsedSeriesIndices.indexOf(Le)>-1){ze--;break}return ze>=0?ze:0}(ae-1)][ke+1]:fe=this.zeroY:fe=this.zeroY,oe=Pe?fe-Ce/_e[this.yaxisIndex]+2*(this.isReversed?Ce/_e[this.yaxisIndex]:0):fe-te[ae][ke+1]/_e[this.yaxisIndex]+2*(this.isReversed?te[ae][ke+1]/_e[this.yaxisIndex]:0),me.push(se),ve.push(oe);var Ie=this.lineHelpers.calculatePoints({series:te,x:se,y:oe,realIndex:ie,i:ae,j:ke,prevY:Ae}),Te=this._createPaths({series:te,i:ae,realIndex:ie,j:ke,x:se,y:oe,pX:re,pY:ne,linePath:he,areaPath:ge,linePaths:ce,areaPaths:ue,seriesIndex:pe});ue=Te.areaPaths,ce=Te.linePaths,re=Te.pX,ne=Te.pY,ge=Te.areaPath,he=Te.linePath,this.appendPathFrom&&(xe+=ye.line(se,this.zeroY),we+=ye.line(se,this.zeroY)),this.handleNullDataPoints(te,Ie,ae,ke,ie),this._handleMarkersAndLabels({pointsPos:Ie,series:te,x:se,y:oe,prevY:Ae,i:ae,j:ke,realIndex:ie})}return{yArrj:ve,xArrj:me,pathFromArea:we,areaPaths:ue,pathFromLine:xe,linePaths:ce}}},{key:"_handleMarkersAndLabels",value:function(ee){var te=ee.pointsPos;ee.series,ee.x,ee.y,ee.prevY;var ie=ee.i,ae=ee.j,se=ee.realIndex,oe=this.w,re=new T(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,ae,{realIndex:se,pointsPos:te,zRatio:this.zRatio,elParent:this.elPointsMain});else{oe.globals.series[ie].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var ne=this.markers.plotChartMarkers(te,se,ae+1);ne!==null&&this.elPointsMain.add(ne)}var le=re.drawDataLabel(te,se,ae+1,null);le!==null&&this.elDataLabelsWrap.add(le)}},{key:"_createPaths",value:function(ee){var te=ee.series,ie=ee.i,ae=ee.realIndex,se=ee.j,oe=ee.x,re=ee.y,ne=ee.pX,le=ee.pY,ce=ee.linePath,ue=ee.areaPath,pe=ee.linePaths,fe=ee.areaPaths,me=ee.seriesIndex,ve=this.w,be=new b(this.ctx),ye=ve.config.stroke.curve,_e=this.areaBottomY;if(Array.isArray(ve.config.stroke.curve)&&(ye=Array.isArray(me)?ve.config.stroke.curve[me[ie]]:ve.config.stroke.curve[ie]),ye==="smooth"){var Ae=.35*(oe-ne);ve.globals.hasNullValues?(te[ie][se]!==null&&(te[ie][se+1]!==null?(ce=be.move(ne,le)+be.curve(ne+Ae,le,oe-Ae,re,oe+1,re),ue=be.move(ne+1,le)+be.curve(ne+Ae,le,oe-Ae,re,oe+1,re)+be.line(oe,_e)+be.line(ne,_e)+"z"):(ce=be.move(ne,le),ue=be.move(ne,le)+"z")),pe.push(ce),fe.push(ue)):(ce+=be.curve(ne+Ae,le,oe-Ae,re,oe,re),ue+=be.curve(ne+Ae,le,oe-Ae,re,oe,re)),ne=oe,le=re,se===te[ie].length-2&&(ue=ue+be.curve(ne,le,oe,re,oe,_e)+be.move(oe,re)+"z",ve.globals.hasNullValues||(pe.push(ce),fe.push(ue)))}else{if(te[ie][se+1]===null){ce+=be.move(oe,re);var he=ve.globals.isXNumeric?(ve.globals.seriesX[ae][se]-ve.globals.minX)/this.xRatio:oe-this.xDivision;ue=ue+be.line(he,_e)+be.move(oe,re)+"z"}te[ie][se]===null&&(ce+=be.move(oe,re),ue+=be.move(oe,_e)),ye==="stepline"?(ce=ce+be.line(oe,null,"H")+be.line(null,re,"V"),ue=ue+be.line(oe,null,"H")+be.line(null,re,"V")):ye==="straight"&&(ce+=be.line(oe,re),ue+=be.line(oe,re)),se===te[ie].length-2&&(ue=ue+be.line(oe,_e)+be.move(oe,re)+"z",pe.push(ce),fe.push(ue))}return{linePaths:pe,areaPaths:fe,pX:ne,pY:le,linePath:ce,areaPath:ue}}},{key:"handleNullDataPoints",value:function(ee,te,ie,ae,se){var oe=this.w;if(ee[ie][ae]===null&&oe.config.markers.showNullDataPoints||ee[ie].length===1){var re=this.markers.plotChartMarkers(te,se,ae+1,this.strokeWidth-oe.config.markers.strokeWidth/2,!0);re!==null&&this.elPointsMain.add(re)}}}]),de}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function de(re,ne,le,ce){this.xoffset=re,this.yoffset=ne,this.height=ce,this.width=le,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(ue){var pe,fe=[],me=this.xoffset,ve=this.yoffset,be=se(ue)/this.height,ye=se(ue)/this.width;if(this.width>=this.height)for(pe=0;pe<ue.length;pe++)fe.push([me,ve,me+be,ve+ue[pe]/be]),ve+=ue[pe]/be;else for(pe=0;pe<ue.length;pe++)fe.push([me,ve,me+ue[pe]/ye,ve+ye]),me+=ue[pe]/ye;return fe},this.cutArea=function(ue){var pe;if(this.width>=this.height){var fe=ue/this.height,me=this.width-fe;pe=new de(this.xoffset+fe,this.yoffset,me,this.height)}else{var ve=ue/this.width,be=this.height-ve;pe=new de(this.xoffset,this.yoffset+ve,this.width,be)}return pe}}function ee(re,ne,le,ce,ue){return ce=ce===void 0?0:ce,ue=ue===void 0?0:ue,function(pe){var fe,me,ve=[];for(fe=0;fe<pe.length;fe++)for(me=0;me<pe[fe].length;me++)ve.push(pe[fe][me]);return ve}(te(function(pe,fe){var me,ve=[],be=fe/se(pe);for(me=0;me<pe.length;me++)ve[me]=pe[me]*be;return ve}(re,ne*le),[],new de(ce,ue,ne,le),[]))}function te(re,ne,le,ce){var ue,pe,fe;if(re.length!==0)return ue=le.shortestEdge(),function(me,ve,be){var ye;if(me.length===0)return!0;(ye=me.slice()).push(ve);var _e=ie(me,be),Ae=ie(ye,be);return _e>=Ae}(ne,pe=re[0],ue)?(ne.push(pe),te(re.slice(1),ne,le,ce)):(fe=le.cutArea(se(ne),ce),ce.push(le.getCoordinates(ne)),te(re,[],fe,ce)),ce;ce.push(le.getCoordinates(ne))}function ie(re,ne){var le=Math.min.apply(Math,re),ce=Math.max.apply(Math,re),ue=se(re);return Math.max(Math.pow(ne,2)*ce/Math.pow(ue,2),Math.pow(ue,2)/(Math.pow(ne,2)*le))}function ae(re){return re&&re.constructor===Array}function se(re){var ne,le=0;for(ne=0;ne<re.length;ne++)le+=re[ne];return le}function oe(re){var ne,le=0;if(ae(re[0]))for(ne=0;ne<re.length;ne++)le+=oe(re[ne]);else le=se(re);return le}return function re(ne,le,ce,ue,pe){ue=ue===void 0?0:ue,pe=pe===void 0?0:pe;var fe,me,ve=[],be=[];if(ae(ne[0])){for(me=0;me<ne.length;me++)ve[me]=oe(ne[me]);for(fe=ee(ve,le,ce,ue,pe),me=0;me<ne.length;me++)be.push(re(ne[me],fe[me][2]-fe[me][0],fe[me][3]-fe[me][1],fe[me][0],fe[me][1]))}else be=ee(ne,le,ce,ue,pe);return be}}();var Mt,Tt,It=function(){function de(ee,te){e(this,de),this.ctx=ee,this.w=ee.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new yt(ee),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return a(de,[{key:"draw",value:function(ee){var te=this,ie=this.w,ae=new b(this.ctx),se=new L(this.ctx),oe=ae.group({class:"apexcharts-treemap"});if(ie.globals.noData)return oe;var re=[];return ee.forEach(function(ne){var le=ne.map(function(ce){return Math.abs(ce)});re.push(le)}),this.negRange=this.helpers.checkColorRange(),ie.config.series.forEach(function(ne,le){ne.data.forEach(function(ce){Array.isArray(te.labels[le])||(te.labels[le]=[]),te.labels[le].push(ce.x)})}),window.TreemapSquared.generate(re,ie.globals.gridWidth,ie.globals.gridHeight).forEach(function(ne,le){var ce=ae.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:p.escapeString(ie.globals.seriesNames[le]),rel:le+1,"data:realIndex":le});if(ie.config.chart.dropShadow.enabled){var ue=ie.config.chart.dropShadow;new x(te.ctx).dropShadow(oe,ue,le)}var pe=ae.group({class:"apexcharts-data-labels"});ne.forEach(function(fe,me){var ve=fe[0],be=fe[1],ye=fe[2],_e=fe[3],Ae=ae.drawRect(ve,be,ye-ve,_e-be,0,"#fff",1,te.strokeWidth,ie.config.plotOptions.treemap.useFillColorAsStroke?ge:ie.globals.stroke.colors[le]);Ae.attr({cx:ve,cy:be,index:le,i:le,j:me,width:ye-ve,height:_e-be});var he=te.helpers.getShadeColor(ie.config.chart.type,le,me,te.negRange),ge=he.color;ie.config.series[le].data[me]!==void 0&&ie.config.series[le].data[me].fillColor&&(ge=ie.config.series[le].data[me].fillColor);var xe=se.fillPath({color:ge,seriesNumber:le,dataPointIndex:me});Ae.node.classList.add("apexcharts-treemap-rect"),Ae.attr({fill:xe}),te.helpers.addListeners(Ae);var we={x:ve+(ye-ve)/2,y:be+(_e-be)/2,width:0,height:0},Ce={x:ve,y:be,width:ye-ve,height:_e-be};if(ie.config.chart.animations.enabled&&!ie.globals.dataChanged){var Se=1;ie.globals.resized||(Se=ie.config.chart.animations.speed),te.animateTreemap(Ae,we,Ce,Se)}if(ie.globals.dataChanged){var ke=1;te.dynamicAnim.enabled&&ie.globals.shouldAnimate&&(ke=te.dynamicAnim.speed,ie.globals.previousPaths[le]&&ie.globals.previousPaths[le][me]&&ie.globals.previousPaths[le][me].rect&&(we=ie.globals.previousPaths[le][me].rect),te.animateTreemap(Ae,we,Ce,ke))}var Pe=te.getFontSize(fe),Ee=ie.config.dataLabels.formatter(te.labels[le][me],{value:ie.globals.series[le][me],seriesIndex:le,dataPointIndex:me,w:ie}),Ie=te.helpers.calculateDataLabels({text:Ee,x:(ve+ye)/2,y:(be+_e)/2+te.strokeWidth/2+Pe/3,i:le,j:me,colorProps:he,fontSize:Pe,series:ee});ie.config.dataLabels.enabled&&Ie&&te.rotateToFitLabel(Ie,Ee,ve,be,ye,_e),ce.add(Ae),Ie!==null&&ce.add(Ie)}),ce.add(pe),oe.add(ce)}),oe}},{key:"getFontSize",value:function(ee){var te=this.w,ie,ae,se,oe,re=function ne(le){var ce,ue=0;if(Array.isArray(le[0]))for(ce=0;ce<le.length;ce++)ue+=ne(le[ce]);else for(ce=0;ce<le.length;ce++)ue+=le[ce].length;return ue}(this.labels)/function ne(le){var ce,ue=0;if(Array.isArray(le[0]))for(ce=0;ce<le.length;ce++)ue+=ne(le[ce]);else for(ce=0;ce<le.length;ce++)ue+=1;return ue}(this.labels);return ie=ee[2]-ee[0],ae=ee[3]-ee[1],se=ie*ae,oe=Math.pow(se,.5),Math.min(oe/re,parseInt(te.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(ee,te,ie,ae,se,oe){var re=new b(this.ctx),ne=re.getTextRects(te);if(ne.width+5>se-ie&&ne.width<=oe-ae){var le=re.rotateAroundCenter(ee.node);ee.node.setAttribute("transform","rotate(-90 ".concat(le.x," ").concat(le.y,")"))}}},{key:"animateTreemap",value:function(ee,te,ie,ae){var se=new f(this.ctx);se.animateRect(ee,{x:te.x,y:te.y,width:te.width,height:te.height},{x:ie.x,y:ie.y,width:ie.width,height:ie.height},ae,function(){se.animationCompleted(ee)})}}]),de}(),zt=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return a(de,[{key:"calculateTimeScaleTicks",value:function(ee,te){var ie=this,ae=this.w;if(ae.globals.allSeriesCollapsed)return ae.globals.labels=[],ae.globals.timescaleLabels=[],[];var se=new Y(this.ctx),oe=(te-ee)/864e5;this.determineInterval(oe),ae.globals.disableZoomIn=!1,ae.globals.disableZoomOut=!1,oe<.00011574074074074075?ae.globals.disableZoomIn=!0:oe>5e4&&(ae.globals.disableZoomOut=!0);var re=se.getTimeUnitsfromTimestamp(ee,te,this.utc),ne=ae.globals.gridWidth/oe,le=ne/24,ce=le/60,ue=ce/60,pe=Math.floor(24*oe),fe=Math.floor(1440*oe),me=Math.floor(86400*oe),ve=Math.floor(oe),be=Math.floor(oe/30),ye=Math.floor(oe/365),_e={minMillisecond:re.minMillisecond,minSecond:re.minSecond,minMinute:re.minMinute,minHour:re.minHour,minDate:re.minDate,minMonth:re.minMonth,minYear:re.minYear},Ae={firstVal:_e,currentMillisecond:_e.minMillisecond,currentSecond:_e.minSecond,currentMinute:_e.minMinute,currentHour:_e.minHour,currentMonthDate:_e.minDate,currentDate:_e.minDate,currentMonth:_e.minMonth,currentYear:_e.minYear,daysWidthOnXAxis:ne,hoursWidthOnXAxis:le,minutesWidthOnXAxis:ce,secondsWidthOnXAxis:ue,numberOfSeconds:me,numberOfMinutes:fe,numberOfHours:pe,numberOfDays:ve,numberOfMonths:be,numberOfYears:ye};switch(this.tickInterval){case"years":this.generateYearScale(Ae);break;case"months":case"half_year":this.generateMonthScale(Ae);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(Ae);break;case"hours":this.generateHourScale(Ae);break;case"minutes_fives":case"minutes":this.generateMinuteScale(Ae);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(Ae)}var he=this.timeScaleArray.map(function(ge){var xe={position:ge.position,unit:ge.unit,year:ge.year,day:ge.day?ge.day:1,hour:ge.hour?ge.hour:0,month:ge.month+1};return ge.unit==="month"?o(o({},xe),{},{day:1,value:ge.value+1}):ge.unit==="day"||ge.unit==="hour"?o(o({},xe),{},{value:ge.value}):ge.unit==="minute"?o(o({},xe),{},{value:ge.value,minute:ge.value}):ge.unit==="second"?o(o({},xe),{},{value:ge.value,minute:ge.minute,second:ge.second}):ge});return he.filter(function(ge){var xe=1,we=Math.ceil(ae.globals.gridWidth/120),Ce=ge.value;ae.config.xaxis.tickAmount!==void 0&&(we=ae.config.xaxis.tickAmount),he.length>we&&(xe=Math.floor(he.length/we));var Se=!1,ke=!1;switch(ie.tickInterval){case"years":ge.unit==="year"&&(Se=!0);break;case"half_year":xe=7,ge.unit==="year"&&(Se=!0);break;case"months":xe=1,ge.unit==="year"&&(Se=!0);break;case"months_fortnight":xe=15,ge.unit!=="year"&&ge.unit!=="month"||(Se=!0),Ce===30&&(ke=!0);break;case"months_days":xe=10,ge.unit==="month"&&(Se=!0),Ce===30&&(ke=!0);break;case"week_days":xe=8,ge.unit==="month"&&(Se=!0);break;case"days":xe=1,ge.unit==="month"&&(Se=!0);break;case"hours":ge.unit==="day"&&(Se=!0);break;case"minutes_fives":Ce%5!=0&&(ke=!0);break;case"seconds_tens":Ce%10!=0&&(ke=!0);break;case"seconds_fives":Ce%5!=0&&(ke=!0)}if(ie.tickInterval==="hours"||ie.tickInterval==="minutes_fives"||ie.tickInterval==="seconds_tens"||ie.tickInterval==="seconds_fives"){if(!ke)return!0}else if((Ce%xe==0||Se)&&!ke)return!0})}},{key:"recalcDimensionsBasedOnFormat",value:function(ee,te){var ie=this.w,ae=this.formatDates(ee),se=this.removeOverlappingTS(ae);ie.globals.timescaleLabels=se.slice(),new ot(this.ctx).plotCoords()}},{key:"determineInterval",value:function(ee){var te=24*ee,ie=60*te;switch(!0){case ee/365>5:this.tickInterval="years";break;case ee>800:this.tickInterval="half_year";break;case ee>180:this.tickInterval="months";break;case ee>90:this.tickInterval="months_fortnight";break;case ee>60:this.tickInterval="months_days";break;case ee>30:this.tickInterval="week_days";break;case ee>2:this.tickInterval="days";break;case te>2.4:this.tickInterval="hours";break;case ie>15:this.tickInterval="minutes_fives";break;case ie>5:this.tickInterval="minutes";break;case ie>1:this.tickInterval="seconds_tens";break;case 60*ie>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(ee){var te=ee.firstVal,ie=ee.currentMonth,ae=ee.currentYear,se=ee.daysWidthOnXAxis,oe=ee.numberOfYears,re=te.minYear,ne=0,le=new Y(this.ctx),ce="year";if(te.minDate>1||te.minMonth>0){var ue=le.determineRemainingDaysOfYear(te.minYear,te.minMonth,te.minDate);ne=(le.determineDaysOfYear(te.minYear)-ue+1)*se,re=te.minYear+1,this.timeScaleArray.push({position:ne,value:re,unit:ce,year:re,month:p.monthMod(ie+1)})}else te.minDate===1&&te.minMonth===0&&this.timeScaleArray.push({position:ne,value:re,unit:ce,year:ae,month:p.monthMod(ie+1)});for(var pe=re,fe=ne,me=0;me<oe;me++)pe++,fe=le.determineDaysOfYear(pe-1)*se+fe,this.timeScaleArray.push({position:fe,value:pe,unit:ce,year:pe,month:1})}},{key:"generateMonthScale",value:function(ee){var te=ee.firstVal,ie=ee.currentMonthDate,ae=ee.currentMonth,se=ee.currentYear,oe=ee.daysWidthOnXAxis,re=ee.numberOfMonths,ne=ae,le=0,ce=new Y(this.ctx),ue="month",pe=0;if(te.minDate>1){le=(ce.determineDaysOfMonths(ae+1,te.minYear)-ie+1)*oe,ne=p.monthMod(ae+1);var fe=se+pe,me=p.monthMod(ne),ve=ne;ne===0&&(ue="year",ve=fe,me=1,fe+=pe+=1),this.timeScaleArray.push({position:le,value:ve,unit:ue,year:fe,month:me})}else this.timeScaleArray.push({position:le,value:ne,unit:ue,year:se,month:p.monthMod(ae)});for(var be=ne+1,ye=le,_e=0,Ae=1;_e<re;_e++,Ae++){(be=p.monthMod(be))===0?(ue="year",pe+=1):ue="month";var he=this._getYear(se,be,pe);ye=ce.determineDaysOfMonths(be,he)*oe+ye;var ge=be===0?he:be;this.timeScaleArray.push({position:ye,value:ge,unit:ue,year:he,month:be===0?1:be}),be++}}},{key:"generateDayScale",value:function(ee){var te=ee.firstVal,ie=ee.currentMonth,ae=ee.currentYear,se=ee.hoursWidthOnXAxis,oe=ee.numberOfDays,re=new Y(this.ctx),ne="day",le=te.minDate+1,ce=le,ue=function(Ae,he,ge){return Ae>re.determineDaysOfMonths(he+1,ge)&&(ce=1,ne="month",fe=he+=1),he},pe=(24-te.minHour)*se,fe=le,me=ue(ce,ie,ae);te.minHour===0&&te.minDate===1?(pe=0,fe=p.monthMod(te.minMonth),ne="month",ce=te.minDate,oe++):te.minDate!==1&&te.minHour===0&&te.minMinute===0&&(pe=0,le=te.minDate,fe=le,me=ue(ce=le,ie,ae)),this.timeScaleArray.push({position:pe,value:fe,unit:ne,year:this._getYear(ae,me,0),month:p.monthMod(me),day:ce});for(var ve=pe,be=0;be<oe;be++){ne="day",me=ue(ce+=1,me,this._getYear(ae,me,0));var ye=this._getYear(ae,me,0);ve=24*se+ve;var _e=ce===1?p.monthMod(me):ce;this.timeScaleArray.push({position:ve,value:_e,unit:ne,year:ye,month:p.monthMod(me),day:_e})}}},{key:"generateHourScale",value:function(ee){var te=ee.firstVal,ie=ee.currentDate,ae=ee.currentMonth,se=ee.currentYear,oe=ee.minutesWidthOnXAxis,re=ee.numberOfHours,ne=new Y(this.ctx),le="hour",ce=function(xe,we){return xe>ne.determineDaysOfMonths(we+1,se)&&(be=1,we+=1),{month:we,date:be}},ue=function(xe,we){return xe>ne.determineDaysOfMonths(we+1,se)?we+=1:we},pe=60-(te.minMinute+te.minSecond/60),fe=pe*oe,me=te.minHour+1,ve=me+1;pe===60&&(fe=0,ve=(me=te.minHour)+1);var be=ie,ye=ue(be,ae);this.timeScaleArray.push({position:fe,value:me,unit:le,day:be,hour:ve,year:se,month:p.monthMod(ye)});for(var _e=fe,Ae=0;Ae<re;Ae++){le="hour",ve>=24&&(ve=0,le="day",ye=ce(be+=1,ye).month,ye=ue(be,ye));var he=this._getYear(se,ye,0);_e=ve===0&&Ae===0?pe*oe:60*oe+_e;var ge=ve===0?be:ve;this.timeScaleArray.push({position:_e,value:ge,unit:le,hour:ve,day:be,year:he,month:p.monthMod(ye)}),ve++}}},{key:"generateMinuteScale",value:function(ee){for(var te=ee.currentMillisecond,ie=ee.currentSecond,ae=ee.currentMinute,se=ee.currentHour,oe=ee.currentDate,re=ee.currentMonth,ne=ee.currentYear,le=ee.minutesWidthOnXAxis,ce=ee.secondsWidthOnXAxis,ue=ee.numberOfMinutes,pe=ae+1,fe=oe,me=re,ve=ne,be=se,ye=(60-ie-te/1e3)*ce,_e=0;_e<ue;_e++)pe>=60&&(pe=0,(be+=1)===24&&(be=0)),this.timeScaleArray.push({position:ye,value:pe,unit:"minute",hour:be,minute:pe,day:fe,year:this._getYear(ve,me,0),month:p.monthMod(me)}),ye+=le,pe++}},{key:"generateSecondScale",value:function(ee){for(var te=ee.currentMillisecond,ie=ee.currentSecond,ae=ee.currentMinute,se=ee.currentHour,oe=ee.currentDate,re=ee.currentMonth,ne=ee.currentYear,le=ee.secondsWidthOnXAxis,ce=ee.numberOfSeconds,ue=ie+1,pe=ae,fe=oe,me=re,ve=ne,be=se,ye=(1e3-te)/1e3*le,_e=0;_e<ce;_e++)ue>=60&&(ue=0,++pe>=60&&(pe=0,++be===24&&(be=0))),this.timeScaleArray.push({position:ye,value:ue,unit:"second",hour:be,minute:pe,second:ue,day:fe,year:this._getYear(ve,me,0),month:p.monthMod(me)}),ye+=le,ue++}},{key:"createRawDateString",value:function(ee,te){var ie=ee.year;return ee.month===0&&(ee.month=1),ie+="-"+("0"+ee.month.toString()).slice(-2),ee.unit==="day"?ie+=ee.unit==="day"?"-"+("0"+te).slice(-2):"-01":ie+="-"+("0"+(ee.day?ee.day:"1")).slice(-2),ee.unit==="hour"?ie+=ee.unit==="hour"?"T"+("0"+te).slice(-2):"T00":ie+="T"+("0"+(ee.hour?ee.hour:"0")).slice(-2),ee.unit==="minute"?ie+=":"+("0"+te).slice(-2):ie+=":"+(ee.minute?("0"+ee.minute).slice(-2):"00"),ee.unit==="second"?ie+=":"+("0"+te).slice(-2):ie+=":00",this.utc&&(ie+=".000Z"),ie}},{key:"formatDates",value:function(ee){var te=this,ie=this.w;return ee.map(function(ae){var se=ae.value.toString(),oe=new Y(te.ctx),re=te.createRawDateString(ae,se),ne=oe.getDate(oe.parseDate(re));if(te.utc||(ne=oe.getDate(oe.parseDateWithTimezone(re))),ie.config.xaxis.labels.format===void 0){var le="dd MMM",ce=ie.config.xaxis.labels.datetimeFormatter;ae.unit==="year"&&(le=ce.year),ae.unit==="month"&&(le=ce.month),ae.unit==="day"&&(le=ce.day),ae.unit==="hour"&&(le=ce.hour),ae.unit==="minute"&&(le=ce.minute),ae.unit==="second"&&(le=ce.second),se=oe.formatDate(ne,le)}else se=oe.formatDate(ne,ie.config.xaxis.labels.format);return{dateString:re,position:ae.position,value:se,unit:ae.unit,year:ae.year,month:ae.month}})}},{key:"removeOverlappingTS",value:function(ee){var te,ie=this,ae=new b(this.ctx),se=!1;ee.length>0&&ee[0].value&&ee.every(function(ne){return ne.value.length===ee[0].value.length})&&(se=!0,te=ae.getTextRects(ee[0].value).width);var oe=0,re=ee.map(function(ne,le){if(le>0&&ie.w.config.xaxis.labels.hideOverlappingLabels){var ce=se?te:ae.getTextRects(ee[oe].value).width,ue=ee[oe].position;return ne.position>ue+ce+10?(oe=le,ne):null}return ne});return re=re.filter(function(ne){return ne!==null})}},{key:"_getYear",value:function(ee,te,ie){return ee+Math.floor(te/12)+ie}}]),de}(),Xt=function(){function de(ee,te){e(this,de),this.ctx=te,this.w=te.w,this.el=ee}return a(de,[{key:"setupElements",value:function(){var ee=this.w.globals,te=this.w.config,ie=te.chart.type;ee.axisCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(ie)>-1,ee.xyCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble"].indexOf(ie)>-1,ee.isBarHorizontal=(te.chart.type==="bar"||te.chart.type==="rangeBar")&&te.plotOptions.bar.horizontal,ee.chartClass=".apexcharts"+ee.chartID,ee.dom.baseEl=this.el,ee.dom.elWrap=document.createElement("div"),b.setAttrs(ee.dom.elWrap,{id:ee.chartClass.substring(1),class:"apexcharts-canvas "+ee.chartClass.substring(1)}),this.el.appendChild(ee.dom.elWrap),ee.dom.Paper=new window.SVG.Doc(ee.dom.elWrap),ee.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(te.chart.offsetX,", ").concat(te.chart.offsetY,")")}),ee.dom.Paper.node.style.background=te.chart.background,this.setSVGDimensions(),ee.dom.elGraphical=ee.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),ee.dom.elAnnotations=ee.dom.Paper.group().attr({class:"apexcharts-annotations"}),ee.dom.elDefs=ee.dom.Paper.defs(),ee.dom.elLegendWrap=document.createElement("div"),ee.dom.elLegendWrap.classList.add("apexcharts-legend"),ee.dom.elWrap.appendChild(ee.dom.elLegendWrap),ee.dom.Paper.add(ee.dom.elGraphical),ee.dom.elGraphical.add(ee.dom.elDefs)}},{key:"plotChartType",value:function(ee,te){var ie=this.w,ae=ie.config,se=ie.globals,oe={series:[],i:[]},re={series:[],i:[]},ne={series:[],i:[]},le={series:[],i:[]},ce={series:[],i:[]},ue={series:[],i:[]},pe={series:[],i:[]};se.series.map(function(ge,xe){var we=0;ee[xe].type!==void 0?(ee[xe].type==="column"||ee[xe].type==="bar"?(se.series.length>1&&ae.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),ce.series.push(ge),ce.i.push(xe),we++,ie.globals.columnSeries=ce.series):ee[xe].type==="area"?(re.series.push(ge),re.i.push(xe),we++):ee[xe].type==="line"?(oe.series.push(ge),oe.i.push(xe),we++):ee[xe].type==="scatter"?(ne.series.push(ge),ne.i.push(xe)):ee[xe].type==="bubble"?(le.series.push(ge),le.i.push(xe),we++):ee[xe].type==="candlestick"?(ue.series.push(ge),ue.i.push(xe),we++):ee[xe].type==="boxPlot"?(pe.series.push(ge),pe.i.push(xe),we++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),we>1&&(se.comboCharts=!0)):(oe.series.push(ge),oe.i.push(xe))});var fe=new Pt(this.ctx,te),me=new mt(this.ctx,te);this.ctx.pie=new At(this.ctx);var ve=new Ct(this.ctx);this.ctx.rangeBar=new F(this.ctx,te);var be=new St(this.ctx),ye=[];if(se.comboCharts){if(re.series.length>0&&ye.push(fe.draw(re.series,"area",re.i)),ce.series.length>0)if(ie.config.chart.stacked){var _e=new vt(this.ctx,te);ye.push(_e.draw(ce.series,ce.i))}else this.ctx.bar=new E(this.ctx,te),ye.push(this.ctx.bar.draw(ce.series,ce.i));if(oe.series.length>0&&ye.push(fe.draw(oe.series,"line",oe.i)),ue.series.length>0&&ye.push(me.draw(ue.series,ue.i)),pe.series.length>0&&ye.push(me.draw(pe.series,pe.i)),ne.series.length>0){var Ae=new Pt(this.ctx,te,!0);ye.push(Ae.draw(ne.series,"scatter",ne.i))}if(le.series.length>0){var he=new Pt(this.ctx,te,!0);ye.push(he.draw(le.series,"bubble",le.i))}}else switch(ae.chart.type){case"line":ye=fe.draw(se.series,"line");break;case"area":ye=fe.draw(se.series,"area");break;case"bar":ae.chart.stacked?ye=new vt(this.ctx,te).draw(se.series):(this.ctx.bar=new E(this.ctx,te),ye=this.ctx.bar.draw(se.series));break;case"candlestick":ye=new mt(this.ctx,te).draw(se.series);break;case"boxPlot":ye=new mt(this.ctx,te).draw(se.series);break;case"rangeBar":ye=this.ctx.rangeBar.draw(se.series);break;case"heatmap":ye=new wt(this.ctx,te).draw(se.series);break;case"treemap":ye=new It(this.ctx,te).draw(se.series);break;case"pie":case"donut":case"polarArea":ye=this.ctx.pie.draw(se.series);break;case"radialBar":ye=ve.draw(se.series);break;case"radar":ye=be.draw(se.series);break;default:ye=fe.draw(se.series)}return ye}},{key:"setSVGDimensions",value:function(){var ee=this.w.globals,te=this.w.config;ee.svgWidth=te.chart.width,ee.svgHeight=te.chart.height;var ie=p.getDimensions(this.el),ae=te.chart.width.toString().split(/[0-9]+/g).pop();ae==="%"?p.isNumber(ie[0])&&(ie[0].width===0&&(ie=p.getDimensions(this.el.parentNode)),ee.svgWidth=ie[0]*parseInt(te.chart.width,10)/100):ae!=="px"&&ae!==""||(ee.svgWidth=parseInt(te.chart.width,10));var se=te.chart.height.toString().split(/[0-9]+/g).pop();if(ee.svgHeight!=="auto"&&ee.svgHeight!=="")if(se==="%"){var oe=p.getDimensions(this.el.parentNode);ee.svgHeight=oe[1]*parseInt(te.chart.height,10)/100}else ee.svgHeight=parseInt(te.chart.height,10);else ee.axisCharts?ee.svgHeight=ee.svgWidth/1.61:ee.svgHeight=ee.svgWidth/1.2;if(ee.svgWidth<0&&(ee.svgWidth=0),ee.svgHeight<0&&(ee.svgHeight=0),b.setAttrs(ee.dom.Paper.node,{width:ee.svgWidth,height:ee.svgHeight}),se!=="%"){var re=te.chart.sparkline.enabled?0:ee.axisCharts?te.chart.parentHeightOffset:0;ee.dom.Paper.node.parentNode.parentNode.style.minHeight=ee.svgHeight+re+"px"}ee.dom.elWrap.style.width=ee.svgWidth+"px",ee.dom.elWrap.style.height=ee.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var ee=this.w.globals,te=ee.translateY,ie={transform:"translate("+ee.translateX+", "+te+")"};b.setAttrs(ee.dom.elGraphical.node,ie)}},{key:"resizeNonAxisCharts",value:function(){var ee=this.w,te=ee.globals,ie=0,ae=ee.config.chart.sparkline.enabled?1:15;ae+=ee.config.grid.padding.bottom,ee.config.legend.position!=="top"&&ee.config.legend.position!=="bottom"||!ee.config.legend.show||ee.config.legend.floating||(ie=new lt(this.ctx).legendHelpers.getLegendBBox().clwh+10);var se=ee.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),oe=2.05*ee.globals.radialSize;if(se&&!ee.config.chart.sparkline.enabled&&ee.config.plotOptions.radialBar.startAngle!==0){var re=p.getBoundingClientRect(se);oe=re.bottom;var ne=re.bottom-re.top;oe=Math.max(2.05*ee.globals.radialSize,ne)}var le=oe+te.translateY+ie+ae;te.dom.elLegendForeign&&te.dom.elLegendForeign.setAttribute("height",le),te.dom.elWrap.style.height=le+"px",b.setAttrs(te.dom.Paper.node,{height:le}),te.dom.Paper.node.parentNode.parentNode.style.minHeight=le+"px"}},{key:"coreCalculations",value:function(){new U(this.ctx).init()}},{key:"resetGlobals",value:function(){var ee=this,te=function(){return ee.w.config.series.map(function(se){return[]})},ie=new D,ae=this.w.globals;ie.initGlobalVars(ae),ae.seriesXvalues=te(),ae.seriesYvalues=te()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var ee=null,te=this.w;if(te.globals.axisCharts){if(te.config.xaxis.crosshairs.position==="back"&&new Q(this.ctx).drawXCrosshairs(),te.config.yaxis[0].crosshairs.position==="back"&&new Q(this.ctx).drawYCrosshairs(),te.config.xaxis.type==="datetime"&&te.config.xaxis.labels.formatter===void 0){this.ctx.timeScale=new zt(this.ctx);var ie=[];isFinite(te.globals.minX)&&isFinite(te.globals.maxX)&&!te.globals.isBarHorizontal?ie=this.ctx.timeScale.calculateTimeScaleTicks(te.globals.minX,te.globals.maxX):te.globals.isBarHorizontal&&(ie=this.ctx.timeScale.calculateTimeScaleTicks(te.globals.minY,te.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(ie)}ee=new y(this.ctx).getCalculatedRatios()}return ee}},{key:"updateSourceChart",value:function(ee){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:ee.w.globals.minX,max:ee.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var ee=this,te=this.w;if(te.config.chart.brush.enabled&&typeof te.config.chart.events.selection!="function"){var ie=te.config.chart.brush.targets||[te.config.chart.brush.target];ie.forEach(function(ae){var se=ApexCharts.getChartByID(ae);se.w.globals.brushSource=ee.ctx,typeof se.w.config.chart.events.zoomed!="function"&&(se.w.config.chart.events.zoomed=function(){ee.updateSourceChart(se)}),typeof se.w.config.chart.events.scrolled!="function"&&(se.w.config.chart.events.scrolled=function(){ee.updateSourceChart(se)})}),te.config.chart.events.selection=function(ae,se){ie.forEach(function(oe){var re=ApexCharts.getChartByID(oe),ne=p.clone(te.config.yaxis);if(te.config.chart.brush.autoScaleYaxis&&re.w.globals.series.length===1){var le=new j(re);ne=le.autoScaleY(re,ne,se)}var ce=re.w.config.yaxis.reduce(function(ue,pe,fe){return[].concat(g(ue),[o(o({},re.w.config.yaxis[fe]),{},{min:ne[0].min,max:ne[0].max})])},[]);re.ctx.updateHelpers._updateOptions({xaxis:{min:se.xaxis.min,max:se.xaxis.max},yaxis:ce},!1,!1,!1,!1)})}}}}]),de}(),Et=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"_updateOptions",value:function(ee){var te=this,ie=arguments.length>1&&arguments[1]!==void 0&&arguments[1],ae=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],se=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],oe=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return new Promise(function(re){var ne=[te.ctx];se&&(ne=te.ctx.getSyncedCharts()),te.ctx.w.globals.isExecCalled&&(ne=[te.ctx],te.ctx.w.globals.isExecCalled=!1),ne.forEach(function(le,ce){var ue=le.w;return ue.globals.shouldAnimate=ae,ie||(ue.globals.resized=!0,ue.globals.dataChanged=!0,ae&&le.series.getPreviousPaths()),ee&&t(ee)==="object"&&(le.config=new H(ee),ee=y.extendArrayProps(le.config,ee,ue),le.w.globals.chartID!==te.ctx.w.globals.chartID&&delete ee.series,ue.config=p.extend(ue.config,ee),oe&&(ue.globals.lastXAxis=ee.xaxis?p.clone(ee.xaxis):[],ue.globals.lastYAxis=ee.yaxis?p.clone(ee.yaxis):[],ue.globals.initialConfig=p.extend({},ue.config),ue.globals.initialSeries=p.clone(ue.config.series))),le.update(ee).then(function(){ce===ne.length-1&&re(le)})})})}},{key:"_updateSeries",value:function(ee,te){var ie=this,ae=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return new Promise(function(se){var oe,re=ie.w;return re.globals.shouldAnimate=te,re.globals.dataChanged=!0,te&&ie.ctx.series.getPreviousPaths(),re.globals.axisCharts?((oe=ee.map(function(ne,le){return ie._extendSeries(ne,le)})).length===0&&(oe=[{data:[]}]),re.config.series=oe):re.config.series=ee.slice(),ae&&(re.globals.initialSeries=p.clone(re.config.series)),ie.ctx.update().then(function(){se(ie.ctx)})})}},{key:"_extendSeries",value:function(ee,te){var ie=this.w,ae=ie.config.series[te];return o(o({},ie.config.series[te]),{},{name:ee.name?ee.name:ae&&ae.name,color:ee.color?ee.color:ae&&ae.color,type:ee.type?ee.type:ae&&ae.type,data:ee.data?ee.data:ae&&ae.data})}},{key:"toggleDataPointSelection",value:function(ee,te){var ie=this.w,ae=null,se=".apexcharts-series[data\\:realIndex='".concat(ee,"']");return ie.globals.axisCharts?ae=ie.globals.dom.Paper.select("".concat(se," path[j='").concat(te,"'], ").concat(se," circle[j='").concat(te,"'], ").concat(se," rect[j='").concat(te,"']")).members[0]:te===void 0&&(ae=ie.globals.dom.Paper.select("".concat(se," path[j='").concat(ee,"']")).members[0],ie.config.chart.type!=="pie"&&ie.config.chart.type!=="polarArea"&&ie.config.chart.type!=="donut"||this.ctx.pie.pieClicked(ee)),ae?(new b(this.ctx).pathMouseDown(ae,null),ae.node?ae.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(ee){var te=this.w;if(["min","max"].forEach(function(ae){ee.xaxis[ae]!==void 0&&(te.config.xaxis[ae]=ee.xaxis[ae],te.globals.lastXAxis[ae]=ee.xaxis[ae])}),ee.xaxis.categories&&ee.xaxis.categories.length&&(te.config.xaxis.categories=ee.xaxis.categories),te.config.xaxis.convertedCatToNumeric){var ie=new R(ee);ee=ie.convertCatToNumericXaxis(ee,this.ctx)}return ee}},{key:"forceYAxisUpdate",value:function(ee){var te=this.w;return te.config.chart.stacked&&te.config.chart.stackType==="100%"&&(Array.isArray(ee.yaxis)?ee.yaxis.forEach(function(ie,ae){ee.yaxis[ae].min=0,ee.yaxis[ae].max=100}):(ee.yaxis.min=0,ee.yaxis.max=100)),ee}},{key:"revertDefaultAxisMinMax",value:function(ee){var te=this,ie=this.w,ae=ie.globals.lastXAxis,se=ie.globals.lastYAxis;ee&&ee.xaxis&&(ae=ee.xaxis),ee&&ee.yaxis&&(se=ee.yaxis),ie.config.xaxis.min=ae.min,ie.config.xaxis.max=ae.max;var oe=function(re){se[re]!==void 0&&(ie.config.yaxis[re].min=se[re].min,ie.config.yaxis[re].max=se[re].max)};ie.config.yaxis.map(function(re,ne){ie.globals.zoomed||se[ne]!==void 0?oe(ne):te.ctx.opts.yaxis[ne]!==void 0&&(re.min=te.ctx.opts.yaxis[ne].min,re.max=te.ctx.opts.yaxis[ne].max)})}}]),de}();Mt=typeof window!="undefined"?window:void 0,Tt=function(de,ee){var te=(this!==void 0?this:de).SVG=function(he){if(te.supported)return he=new te.Doc(he),te.parser.draw||te.prepare(),he};if(te.ns="http://www.w3.org/2000/svg",te.xmlns="http://www.w3.org/2000/xmlns/",te.xlink="http://www.w3.org/1999/xlink",te.svgjs="http://svgjs.dev",te.supported=!0,!te.supported)return!1;te.did=1e3,te.eid=function(he){return"Svgjs"+ce(he)+te.did++},te.create=function(he){var ge=ee.createElementNS(this.ns,he);return ge.setAttribute("id",this.eid(he)),ge},te.extend=function(){var he,ge;ge=(he=[].slice.call(arguments)).pop();for(var xe=he.length-1;xe>=0;xe--)if(he[xe])for(var we in ge)he[xe].prototype[we]=ge[we];te.Set&&te.Set.inherit&&te.Set.inherit()},te.invent=function(he){var ge=typeof he.create=="function"?he.create:function(){this.constructor.call(this,te.create(he.create))};return he.inherit&&(ge.prototype=new he.inherit),he.extend&&te.extend(ge,he.extend),he.construct&&te.extend(he.parent||te.Container,he.construct),ge},te.adopt=function(he){return he?he.instance?he.instance:((ge=he.nodeName=="svg"?he.parentNode instanceof de.SVGElement?new te.Nested:new te.Doc:he.nodeName=="linearGradient"?new te.Gradient("linear"):he.nodeName=="radialGradient"?new te.Gradient("radial"):te[ce(he.nodeName)]?new te[ce(he.nodeName)]:new te.Element(he)).type=he.nodeName,ge.node=he,he.instance=ge,ge instanceof te.Doc&&ge.namespace().defs(),ge.setData(JSON.parse(he.getAttribute("svgjs:data"))||{}),ge):null;var ge},te.prepare=function(){var he=ee.getElementsByTagName("body")[0],ge=(he?new te.Doc(he):te.adopt(ee.documentElement).nested()).size(2,0);te.parser={body:he||ee.documentElement,draw:ge.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:ge.polyline().node,path:ge.path().node,native:te.create("svg")}},te.parser={native:te.create("svg")},ee.addEventListener("DOMContentLoaded",function(){te.parser.draw||te.prepare()},!1),te.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},te.utils={map:function(he,ge){for(var xe=he.length,we=[],Ce=0;Ce<xe;Ce++)we.push(ge(he[Ce]));return we},filter:function(he,ge){for(var xe=he.length,we=[],Ce=0;Ce<xe;Ce++)ge(he[Ce])&&we.push(he[Ce]);return we},filterSVGElements:function(he){return this.filter(he,function(ge){return ge instanceof de.SVGElement})}},te.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},te.Color=function(he){var ge,xe;this.r=0,this.g=0,this.b=0,he&&(typeof he=="string"?te.regex.isRgb.test(he)?(ge=te.regex.rgb.exec(he.replace(te.regex.whitespace,"")),this.r=parseInt(ge[1]),this.g=parseInt(ge[2]),this.b=parseInt(ge[3])):te.regex.isHex.test(he)&&(ge=te.regex.hex.exec((xe=he).length==4?["#",xe.substring(1,2),xe.substring(1,2),xe.substring(2,3),xe.substring(2,3),xe.substring(3,4),xe.substring(3,4)].join(""):xe),this.r=parseInt(ge[1],16),this.g=parseInt(ge[2],16),this.b=parseInt(ge[3],16)):t(he)==="object"&&(this.r=he.r,this.g=he.g,this.b=he.b))},te.extend(te.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+ue(this.r)+ue(this.g)+ue(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(he){return this.destination=new te.Color(he),this},at:function(he){return this.destination?(he=he<0?0:he>1?1:he,new te.Color({r:~~(this.r+(this.destination.r-this.r)*he),g:~~(this.g+(this.destination.g-this.g)*he),b:~~(this.b+(this.destination.b-this.b)*he)})):this}}),te.Color.test=function(he){return he+="",te.regex.isHex.test(he)||te.regex.isRgb.test(he)},te.Color.isRgb=function(he){return he&&typeof he.r=="number"&&typeof he.g=="number"&&typeof he.b=="number"},te.Color.isColor=function(he){return te.Color.isRgb(he)||te.Color.test(he)},te.Array=function(he,ge){(he=(he||[]).valueOf()).length==0&&ge&&(he=ge.valueOf()),this.value=this.parse(he)},te.extend(te.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(he){return he=he.valueOf(),Array.isArray(he)?he:this.split(he)}}),te.PointArray=function(he,ge){te.Array.call(this,he,ge||[[0,0]])},te.PointArray.prototype=new te.Array,te.PointArray.prototype.constructor=te.PointArray;for(var ie={M:function(he,ge,xe){return ge.x=xe.x=he[0],ge.y=xe.y=he[1],["M",ge.x,ge.y]},L:function(he,ge){return ge.x=he[0],ge.y=he[1],["L",he[0],he[1]]},H:function(he,ge){return ge.x=he[0],["H",he[0]]},V:function(he,ge){return ge.y=he[0],["V",he[0]]},C:function(he,ge){return ge.x=he[4],ge.y=he[5],["C",he[0],he[1],he[2],he[3],he[4],he[5]]},Q:function(he,ge){return ge.x=he[2],ge.y=he[3],["Q",he[0],he[1],he[2],he[3]]},Z:function(he,ge,xe){return ge.x=xe.x,ge.y=xe.y,["Z"]}},ae="mlhvqtcsaz".split(""),se=0,oe=ae.length;se<oe;++se)ie[ae[se]]=function(he){return function(ge,xe,we){if(he=="H")ge[0]=ge[0]+xe.x;else if(he=="V")ge[0]=ge[0]+xe.y;else if(he=="A")ge[5]=ge[5]+xe.x,ge[6]=ge[6]+xe.y;else for(var Ce=0,Se=ge.length;Ce<Se;++Ce)ge[Ce]=ge[Ce]+(Ce%2?xe.y:xe.x);if(ie&&typeof ie[he]=="function")return ie[he](ge,xe,we)}}(ae[se].toUpperCase());te.PathArray=function(he,ge){te.Array.call(this,he,ge||[["M",0,0]])},te.PathArray.prototype=new te.Array,te.PathArray.prototype.constructor=te.PathArray,te.extend(te.PathArray,{toString:function(){return function(he){for(var ge=0,xe=he.length,we="";ge<xe;ge++)we+=he[ge][0],he[ge][1]!=null&&(we+=he[ge][1],he[ge][2]!=null&&(we+=" ",we+=he[ge][2],he[ge][3]!=null&&(we+=" ",we+=he[ge][3],we+=" ",we+=he[ge][4],he[ge][5]!=null&&(we+=" ",we+=he[ge][5],we+=" ",we+=he[ge][6],he[ge][7]!=null&&(we+=" ",we+=he[ge][7])))));return we+" "}(this.value)},move:function(he,ge){var xe=this.bbox();return xe.x,xe.y,this},at:function(he){if(!this.destination)return this;for(var ge=this.value,xe=this.destination.value,we=[],Ce=new te.PathArray,Se=0,ke=ge.length;Se<ke;Se++){we[Se]=[ge[Se][0]];for(var Pe=1,Ee=ge[Se].length;Pe<Ee;Pe++)we[Se][Pe]=ge[Se][Pe]+(xe[Se][Pe]-ge[Se][Pe])*he;we[Se][0]==="A"&&(we[Se][4]=+(we[Se][4]!=0),we[Se][5]=+(we[Se][5]!=0))}return Ce.value=we,Ce},parse:function(he){if(he instanceof te.PathArray)return he.valueOf();var ge,xe={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};he=typeof he=="string"?he.replace(te.regex.numbersWithDots,ne).replace(te.regex.pathLetters," $& ").replace(te.regex.hyphen,"$1 -").trim().split(te.regex.delimiter):he.reduce(function(Ee,Ie){return[].concat.call(Ee,Ie)},[]);var we=[],Ce=new te.Point,Se=new te.Point,ke=0,Pe=he.length;do te.regex.isPathLetter.test(he[ke])?(ge=he[ke],++ke):ge=="M"?ge="L":ge=="m"&&(ge="l"),we.push(ie[ge].call(null,he.slice(ke,ke+=xe[ge.toUpperCase()]).map(parseFloat),Ce,Se));while(Pe>ke);return we},bbox:function(){return te.parser.draw||te.prepare(),te.parser.path.setAttribute("d",this.toString()),te.parser.path.getBBox()}}),te.Number=te.invent({create:function(he,ge){this.value=0,this.unit=ge||"",typeof he=="number"?this.value=isNaN(he)?0:isFinite(he)?he:he<0?-34e37:34e37:typeof he=="string"?(ge=he.match(te.regex.numberAndUnit))&&(this.value=parseFloat(ge[1]),ge[5]=="%"?this.value/=100:ge[5]=="s"&&(this.value*=1e3),this.unit=ge[5]):he instanceof te.Number&&(this.value=he.valueOf(),this.unit=he.unit)},extend:{toString:function(){return(this.unit=="%"?~~(1e8*this.value)/1e6:this.unit=="s"?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(he){return he=new te.Number(he),new te.Number(this+he,this.unit||he.unit)},minus:function(he){return he=new te.Number(he),new te.Number(this-he,this.unit||he.unit)},times:function(he){return he=new te.Number(he),new te.Number(this*he,this.unit||he.unit)},divide:function(he){return he=new te.Number(he),new te.Number(this/he,this.unit||he.unit)},to:function(he){var ge=new te.Number(this);return typeof he=="string"&&(ge.unit=he),ge},morph:function(he){return this.destination=new te.Number(he),he.relative&&(this.destination.value+=this.value),this},at:function(he){return this.destination?new te.Number(this.destination).minus(this).times(he).plus(this):this}}}),te.Element=te.invent({create:function(he){this._stroke=te.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=he)&&(this.type=he.nodeName,this.node.instance=this,this._stroke=he.getAttribute("stroke")||this._stroke)},extend:{x:function(he){return this.attr("x",he)},y:function(he){return this.attr("y",he)},cx:function(he){return he==null?this.x()+this.width()/2:this.x(he-this.width()/2)},cy:function(he){return he==null?this.y()+this.height()/2:this.y(he-this.height()/2)},move:function(he,ge){return this.x(he).y(ge)},center:function(he,ge){return this.cx(he).cy(ge)},width:function(he){return this.attr("width",he)},height:function(he){return this.attr("height",he)},size:function(he,ge){var xe=pe(this,he,ge);return this.width(new te.Number(xe.width)).height(new te.Number(xe.height))},clone:function(he){this.writeDataToDom();var ge=ve(this.node.cloneNode(!0));return he?he.add(ge):this.after(ge),ge},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(he){return this.after(he).remove(),he},addTo:function(he){return he.put(this)},putIn:function(he){return he.add(this)},id:function(he){return this.attr("id",he)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return this.style("display")!="none"},toString:function(){return this.attr("id")},classes:function(){var he=this.attr("class");return he==null?[]:he.trim().split(te.regex.delimiter)},hasClass:function(he){return this.classes().indexOf(he)!=-1},addClass:function(he){if(!this.hasClass(he)){var ge=this.classes();ge.push(he),this.attr("class",ge.join(" "))}return this},removeClass:function(he){return this.hasClass(he)&&this.attr("class",this.classes().filter(function(ge){return ge!=he}).join(" ")),this},toggleClass:function(he){return this.hasClass(he)?this.removeClass(he):this.addClass(he)},reference:function(he){return te.get(this.attr(he))},parent:function(he){var ge=this;if(!ge.node.parentNode)return null;if(ge=te.adopt(ge.node.parentNode),!he)return ge;for(;ge&&ge.node instanceof de.SVGElement;){if(typeof he=="string"?ge.matches(he):ge instanceof he)return ge;if(!ge.node.parentNode||ge.node.parentNode.nodeName=="#document")return null;ge=te.adopt(ge.node.parentNode)}},doc:function(){return this instanceof te.Doc?this:this.parent(te.Doc)},parents:function(he){var ge=[],xe=this;do{if(!(xe=xe.parent(he))||!xe.node)break;ge.push(xe)}while(xe.parent);return ge},matches:function(he){return function(ge,xe){return(ge.matches||ge.matchesSelector||ge.msMatchesSelector||ge.mozMatchesSelector||ge.webkitMatchesSelector||ge.oMatchesSelector).call(ge,xe)}(this.node,he)},native:function(){return this.node},svg:function(he){var ge=ee.createElement("svg");if(!(he&&this instanceof te.Parent))return ge.appendChild(he=ee.createElement("svg")),this.writeDataToDom(),he.appendChild(this.node.cloneNode(!0)),ge.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");ge.innerHTML="<svg>"+he.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var xe=0,we=ge.firstChild.childNodes.length;xe<we;xe++)this.node.appendChild(ge.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each(function(){this.writeDataToDom()}),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(he){return this.dom=he,this},is:function(he){return function(ge,xe){return ge instanceof xe}(this,he)}}}),te.easing={"-":function(he){return he},"<>":function(he){return-Math.cos(he*Math.PI)/2+.5},">":function(he){return Math.sin(he*Math.PI/2)},"<":function(he){return 1-Math.cos(he*Math.PI/2)}},te.morph=function(he){return function(ge,xe){return new te.MorphObj(ge,xe).at(he)}},te.Situation=te.invent({create:function(he){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new te.Number(he.duration).valueOf(),this.delay=new te.Number(he.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=he.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),te.FX=te.invent({create:function(he){this._target=he,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(he,ge,xe){t(he)==="object"&&(ge=he.ease,xe=he.delay,he=he.duration);var we=new te.Situation({duration:he||1e3,delay:xe||0,ease:te.easing[ge||"-"]||ge});return this.queue(we),this},target:function(he){return he&&he instanceof te.Element?(this._target=he,this):this._target},timeToAbsPos:function(he){return(he-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(he){return this.situation.duration/this._speed*he+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=de.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){de.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(he){return(typeof he=="function"||he instanceof te.Situation)&&this.situations.push(he),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof te.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var he,ge=this.situation;if(ge.init)return this;for(var xe in ge.animations){he=this.target()[xe](),Array.isArray(he)||(he=[he]),Array.isArray(ge.animations[xe])||(ge.animations[xe]=[ge.animations[xe]]);for(var we=he.length;we--;)ge.animations[xe][we]instanceof te.Number&&(he[we]=new te.Number(he[we])),ge.animations[xe][we]=he[we].morph(ge.animations[xe][we])}for(var xe in ge.attrs)ge.attrs[xe]=new te.MorphObj(this.target().attr(xe),ge.attrs[xe]);for(var xe in ge.styles)ge.styles[xe]=new te.MorphObj(this.target().style(xe),ge.styles[xe]);return ge.initialTransformation=this.target().matrixify(),ge.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(he,ge){var xe=this.active;return this.active=!1,ge&&this.clearQueue(),he&&this.situation&&(!xe&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(he){var ge=this.last();return this.target().on("finished.fx",function xe(we){we.detail.situation==ge&&(he.call(this,ge),this.off("finished.fx",xe))}),this._callStart()},during:function(he){var ge=this.last(),xe=function(we){we.detail.situation==ge&&he.call(this,we.detail.pos,te.morph(we.detail.pos),we.detail.eased,ge)};return this.target().off("during.fx",xe).on("during.fx",xe),this.after(function(){this.off("during.fx",xe)}),this._callStart()},afterAll:function(he){var ge=function xe(we){he.call(this),this.off("allfinished.fx",xe)};return this.target().off("allfinished.fx",ge).on("allfinished.fx",ge),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(he,ge,xe){return this.last()[xe||"animations"][he]=ge,this._callStart()},step:function(he){var ge,xe,we;he||(this.absPos=this.timeToAbsPos(+new Date)),this.situation.loops!==!1?(ge=Math.max(this.absPos,0),xe=Math.floor(ge),this.situation.loops===!0||xe<this.situation.loops?(this.pos=ge-xe,we=this.situation.loop,this.situation.loop=xe):(this.absPos=this.situation.loops,this.pos=1,we=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-we)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var Ce=this.situation.ease(this.pos);for(var Se in this.situation.once)Se>this.lastPos&&Se<=Ce&&(this.situation.once[Se].call(this.target(),this.pos,Ce),delete this.situation.once[Se]);return this.active&&this.target().fire("during",{pos:this.pos,eased:Ce,fx:this,situation:this.situation}),this.situation?(this.eachAt(),this.pos==1&&!this.situation.reversed||this.situation.reversed&&this.pos==0?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=Ce,this):this},eachAt:function(){var he,ge=this,xe=this.target(),we=this.situation;for(var Ce in we.animations)he=[].concat(we.animations[Ce]).map(function(Pe){return typeof Pe!="string"&&Pe.at?Pe.at(we.ease(ge.pos),ge.pos):Pe}),xe[Ce].apply(xe,he);for(var Ce in we.attrs)he=[Ce].concat(we.attrs[Ce]).map(function(Ee){return typeof Ee!="string"&&Ee.at?Ee.at(we.ease(ge.pos),ge.pos):Ee}),xe.attr.apply(xe,he);for(var Ce in we.styles)he=[Ce].concat(we.styles[Ce]).map(function(Ee){return typeof Ee!="string"&&Ee.at?Ee.at(we.ease(ge.pos),ge.pos):Ee}),xe.style.apply(xe,he);if(we.transforms.length){he=we.initialTransformation,Ce=0;for(var Se=we.transforms.length;Ce<Se;Ce++){var ke=we.transforms[Ce];ke instanceof te.Matrix?he=ke.relative?he.multiply(new te.Matrix().morph(ke).at(we.ease(this.pos))):he.morph(ke).at(we.ease(this.pos)):(ke.relative||ke.undo(he.extract()),he=he.multiply(ke.at(we.ease(this.pos))))}xe.matrix(he)}return this},once:function(he,ge,xe){var we=this.last();return xe||(he=we.ease(he)),we.once[he]=ge,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:te.Element,construct:{animate:function(he,ge,xe){return(this.fx||(this.fx=new te.FX(this))).animate(he,ge,xe)},delay:function(he){return(this.fx||(this.fx=new te.FX(this))).delay(he)},stop:function(he,ge){return this.fx&&this.fx.stop(he,ge),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),te.MorphObj=te.invent({create:function(he,ge){return te.Color.isColor(ge)?new te.Color(he).morph(ge):te.regex.delimiter.test(he)?te.regex.pathLetters.test(he)?new te.PathArray(he).morph(ge):new te.Array(he).morph(ge):te.regex.numberAndUnit.test(ge)?new te.Number(he).morph(ge):(this.value=he,void(this.destination=ge))},extend:{at:function(he,ge){return ge<1?this.value:this.destination},valueOf:function(){return this.value}}}),te.extend(te.FX,{attr:function(he,ge,xe){if(t(he)==="object")for(var we in he)this.attr(we,he[we]);else this.add(he,ge,"attrs");return this},plot:function(he,ge,xe,we){return arguments.length==4?this.plot([he,ge,xe,we]):this.add("plot",new(this.target()).morphArray(he))}}),te.Box=te.invent({create:function(he,ge,xe,we){if(!(t(he)!=="object"||he instanceof te.Element))return te.Box.call(this,he.left!=null?he.left:he.x,he.top!=null?he.top:he.y,he.width,he.height);arguments.length==4&&(this.x=he,this.y=ge,this.width=xe,this.height=we),be(this)}}),te.BBox=te.invent({create:function(he){if(te.Box.apply(this,[].slice.call(arguments)),he instanceof te.Element){var ge;try{if(!ee.documentElement.contains){for(var xe=he.node;xe.parentNode;)xe=xe.parentNode;if(xe!=ee)throw new Error("Element not in the dom")}ge=he.node.getBBox()}catch{if(he instanceof te.Shape){te.parser.draw||te.prepare();var we=he.clone(te.parser.draw.instance).show();we&&we.node&&typeof we.node.getBBox=="function"&&(ge=we.node.getBBox()),we&&typeof we.remove=="function"&&we.remove()}else ge={x:he.node.clientLeft,y:he.node.clientTop,width:he.node.clientWidth,height:he.node.clientHeight}}te.Box.call(this,ge)}},inherit:te.Box,parent:te.Element,construct:{bbox:function(){return new te.BBox(this)}}}),te.BBox.prototype.constructor=te.BBox,te.Matrix=te.invent({create:function(he){var ge=me([1,0,0,1,0,0]);he=he===null?ge:he instanceof te.Element?he.matrixify():typeof he=="string"?me(he.split(te.regex.delimiter).map(parseFloat)):arguments.length==6?me([].slice.call(arguments)):Array.isArray(he)?me(he):he&&t(he)==="object"?he:ge;for(var xe=_e.length-1;xe>=0;--xe)this[_e[xe]]=he[_e[xe]]!=null?he[_e[xe]]:ge[_e[xe]]},extend:{extract:function(){var he=fe(this,0,1);fe(this,1,0);var ge=180/Math.PI*Math.atan2(he.y,he.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(ge*Math.PI/180)+this.f*Math.sin(ge*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(ge*Math.PI/180)+this.e*Math.sin(-ge*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:ge,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new te.Matrix(this)}},clone:function(){return new te.Matrix(this)},morph:function(he){return this.destination=new te.Matrix(he),this},multiply:function(he){return new te.Matrix(this.native().multiply(function(ge){return ge instanceof te.Matrix||(ge=new te.Matrix(ge)),ge}(he).native()))},inverse:function(){return new te.Matrix(this.native().inverse())},translate:function(he,ge){return new te.Matrix(this.native().translate(he||0,ge||0))},native:function(){for(var he=te.parser.native.createSVGMatrix(),ge=_e.length-1;ge>=0;ge--)he[_e[ge]]=this[_e[ge]];return he},toString:function(){return"matrix("+ye(this.a)+","+ye(this.b)+","+ye(this.c)+","+ye(this.d)+","+ye(this.e)+","+ye(this.f)+")"}},parent:te.Element,construct:{ctm:function(){return new te.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof te.Nested){var he=this.rect(1,1),ge=he.node.getScreenCTM();return he.remove(),new te.Matrix(ge)}return new te.Matrix(this.node.getScreenCTM())}}}),te.Point=te.invent({create:function(he,ge){var xe;xe=Array.isArray(he)?{x:he[0],y:he[1]}:t(he)==="object"?{x:he.x,y:he.y}:he!=null?{x:he,y:ge!=null?ge:he}:{x:0,y:0},this.x=xe.x,this.y=xe.y},extend:{clone:function(){return new te.Point(this)},morph:function(he,ge){return this.destination=new te.Point(he,ge),this}}}),te.extend(te.Element,{point:function(he,ge){return new te.Point(he,ge).transform(this.screenCTM().inverse())}}),te.extend(te.Element,{attr:function(he,ge,xe){if(he==null){for(he={},xe=(ge=this.node.attributes).length-1;xe>=0;xe--)he[ge[xe].nodeName]=te.regex.isNumber.test(ge[xe].nodeValue)?parseFloat(ge[xe].nodeValue):ge[xe].nodeValue;return he}if(t(he)==="object")for(var we in he)this.attr(we,he[we]);else if(ge===null)this.node.removeAttribute(he);else{if(ge==null)return(ge=this.node.getAttribute(he))==null?te.defaults.attrs[he]:te.regex.isNumber.test(ge)?parseFloat(ge):ge;he=="stroke-width"?this.attr("stroke",parseFloat(ge)>0?this._stroke:null):he=="stroke"&&(this._stroke=ge),he!="fill"&&he!="stroke"||(te.regex.isImage.test(ge)&&(ge=this.doc().defs().image(ge,0,0)),ge instanceof te.Image&&(ge=this.doc().defs().pattern(0,0,function(){this.add(ge)}))),typeof ge=="number"?ge=new te.Number(ge):te.Color.isColor(ge)?ge=new te.Color(ge):Array.isArray(ge)&&(ge=new te.Array(ge)),he=="leading"?this.leading&&this.leading(ge):typeof xe=="string"?this.node.setAttributeNS(xe,he,ge.toString()):this.node.setAttribute(he,ge.toString()),!this.rebuild||he!="font-size"&&he!="x"||this.rebuild(he,ge)}return this}}),te.extend(te.Element,{transform:function(he,ge){var xe;return t(he)!=="object"?(xe=new te.Matrix(this).extract(),typeof he=="string"?xe[he]:xe):(xe=new te.Matrix(this),ge=!!ge||!!he.relative,he.a!=null&&(xe=ge?xe.multiply(new te.Matrix(he)):new te.Matrix(he)),this.attr("transform",xe))}}),te.extend(te.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(te.regex.transforms).slice(0,-1).map(function(he){var ge=he.trim().split("(");return[ge[0],ge[1].split(te.regex.delimiter).map(function(xe){return parseFloat(xe)})]}).reduce(function(he,ge){return ge[0]=="matrix"?he.multiply(me(ge[1])):he[ge[0]].apply(he,ge[1])},new te.Matrix)},toParent:function(he){if(this==he)return this;var ge=this.screenCTM(),xe=he.screenCTM().inverse();return this.addTo(he).untransform().transform(xe.multiply(ge)),this},toDoc:function(){return this.toParent(this.doc())}}),te.Transformation=te.invent({create:function(he,ge){if(arguments.length>1&&typeof ge!="boolean")return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(he))for(var xe=0,we=this.arguments.length;xe<we;++xe)this[this.arguments[xe]]=he[xe];else if(he&&t(he)==="object")for(xe=0,we=this.arguments.length;xe<we;++xe)this[this.arguments[xe]]=he[this.arguments[xe]];this.inversed=!1,ge===!0&&(this.inversed=!0)}}),te.Translate=te.invent({parent:te.Matrix,inherit:te.Transformation,create:function(he,ge){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),te.extend(te.Element,{style:function(he,ge){if(arguments.length==0)return this.node.style.cssText||"";if(arguments.length<2)if(t(he)==="object")for(var xe in he)this.style(xe,he[xe]);else{if(!te.regex.isCss.test(he))return this.node.style[le(he)];for(he=he.split(/\s*;\s*/).filter(function(we){return!!we}).map(function(we){return we.split(/\s*:\s*/)});ge=he.pop();)this.style(ge[0],ge[1])}else this.node.style[le(he)]=ge===null||te.regex.isBlank.test(ge)?"":ge;return this}}),te.Parent=te.invent({create:function(he){this.constructor.call(this,he)},inherit:te.Element,extend:{children:function(){return te.utils.map(te.utils.filterSVGElements(this.node.childNodes),function(he){return te.adopt(he)})},add:function(he,ge){return ge==null?this.node.appendChild(he.node):he.node!=this.node.childNodes[ge]&&this.node.insertBefore(he.node,this.node.childNodes[ge]),this},put:function(he,ge){return this.add(he,ge),he},has:function(he){return this.index(he)>=0},index:function(he){return[].slice.call(this.node.childNodes).indexOf(he.node)},get:function(he){return te.adopt(this.node.childNodes[he])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(he,ge){for(var xe=this.children(),we=0,Ce=xe.length;we<Ce;we++)xe[we]instanceof te.Element&&he.apply(xe[we],[we,xe]),ge&&xe[we]instanceof te.Container&&xe[we].each(he,ge);return this},removeElement:function(he){return this.node.removeChild(he.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),te.extend(te.Parent,{ungroup:function(he,ge){return ge===0||this instanceof te.Defs||this.node==te.parser.draw||(he=he||(this instanceof te.Doc?this:this.parent(te.Parent)),ge=ge||1/0,this.each(function(){return this instanceof te.Defs?this:this instanceof te.Parent?this.ungroup(he,ge-1):this.toParent(he)}),this.node.firstChild||this.remove()),this},flatten:function(he,ge){return this.ungroup(he,ge)}}),te.Container=te.invent({create:function(he){this.constructor.call(this,he)},inherit:te.Parent}),te.ViewBox=te.invent({parent:te.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(he){te.Element.prototype[he]=function(ge){return te.on(this.node,he,ge),this}}),te.listeners=[],te.handlerMap=[],te.listenerId=0,te.on=function(he,ge,xe,we,Ce){var Se=xe.bind(we||he.instance||he),ke=(te.handlerMap.indexOf(he)+1||te.handlerMap.push(he))-1,Pe=ge.split(".")[0],Ee=ge.split(".")[1]||"*";te.listeners[ke]=te.listeners[ke]||{},te.listeners[ke][Pe]=te.listeners[ke][Pe]||{},te.listeners[ke][Pe][Ee]=te.listeners[ke][Pe][Ee]||{},xe._svgjsListenerId||(xe._svgjsListenerId=++te.listenerId),te.listeners[ke][Pe][Ee][xe._svgjsListenerId]=Se,he.addEventListener(Pe,Se,Ce||{passive:!0})},te.off=function(he,ge,xe){var we=te.handlerMap.indexOf(he),Ce=ge&&ge.split(".")[0],Se=ge&&ge.split(".")[1],ke="";if(we!=-1)if(xe){if(typeof xe=="function"&&(xe=xe._svgjsListenerId),!xe)return;te.listeners[we][Ce]&&te.listeners[we][Ce][Se||"*"]&&(he.removeEventListener(Ce,te.listeners[we][Ce][Se||"*"][xe],!1),delete te.listeners[we][Ce][Se||"*"][xe])}else if(Se&&Ce){if(te.listeners[we][Ce]&&te.listeners[we][Ce][Se]){for(var Pe in te.listeners[we][Ce][Se])te.off(he,[Ce,Se].join("."),Pe);delete te.listeners[we][Ce][Se]}}else if(Se)for(var Ee in te.listeners[we])for(var ke in te.listeners[we][Ee])Se===ke&&te.off(he,[Ee,Se].join("."));else if(Ce){if(te.listeners[we][Ce]){for(var ke in te.listeners[we][Ce])te.off(he,[Ce,ke].join("."));delete te.listeners[we][Ce]}}else{for(var Ee in te.listeners[we])te.off(he,Ee);delete te.listeners[we],delete te.handlerMap[we]}},te.extend(te.Element,{on:function(he,ge,xe,we){return te.on(this.node,he,ge,xe,we),this},off:function(he,ge){return te.off(this.node,he,ge),this},fire:function(he,ge){return he instanceof de.Event?this.node.dispatchEvent(he):this.node.dispatchEvent(he=new te.CustomEvent(he,{detail:ge,cancelable:!0})),this._event=he,this},event:function(){return this._event}}),te.Defs=te.invent({create:"defs",inherit:te.Container}),te.G=te.invent({create:"g",inherit:te.Container,extend:{x:function(he){return he==null?this.transform("x"):this.transform({x:he-this.x()},!0)}},construct:{group:function(){return this.put(new te.G)}}}),te.Doc=te.invent({create:function(he){he&&((he=typeof he=="string"?ee.getElementById(he):he).nodeName=="svg"?this.constructor.call(this,he):(this.constructor.call(this,te.create("svg")),he.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:te.Container,extend:{namespace:function(){return this.attr({xmlns:te.ns,version:"1.1"}).attr("xmlns:xlink",te.xlink,te.xmlns).attr("xmlns:svgjs",te.svgjs,te.xmlns)},defs:function(){var he;return this._defs||((he=this.node.getElementsByTagName("defs")[0])?this._defs=te.adopt(he):this._defs=new te.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&this.node.parentNode.nodeName!="#document"?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,te.parser.draw&&!te.parser.draw.parentNode&&this.node.appendChild(te.parser.draw),this},clone:function(he){this.writeDataToDom();var ge=this.node,xe=ve(ge.cloneNode(!0));return he?(he.node||he).appendChild(xe.node):ge.parentNode.insertBefore(xe.node,ge.nextSibling),xe}}}),te.extend(te.Element,{}),te.Gradient=te.invent({create:function(he){this.constructor.call(this,te.create(he+"Gradient")),this.type=he},inherit:te.Container,extend:{at:function(he,ge,xe){return this.put(new te.Stop).update(he,ge,xe)},update:function(he){return this.clear(),typeof he=="function"&&he.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(he,ge,xe){return he=="transform"&&(he="gradientTransform"),te.Container.prototype.attr.call(this,he,ge,xe)}},construct:{gradient:function(he,ge){return this.defs().gradient(he,ge)}}}),te.extend(te.Gradient,te.FX,{from:function(he,ge){return(this._target||this).type=="radial"?this.attr({fx:new te.Number(he),fy:new te.Number(ge)}):this.attr({x1:new te.Number(he),y1:new te.Number(ge)})},to:function(he,ge){return(this._target||this).type=="radial"?this.attr({cx:new te.Number(he),cy:new te.Number(ge)}):this.attr({x2:new te.Number(he),y2:new te.Number(ge)})}}),te.extend(te.Defs,{gradient:function(he,ge){return this.put(new te.Gradient(he)).update(ge)}}),te.Stop=te.invent({create:"stop",inherit:te.Element,extend:{update:function(he){return(typeof he=="number"||he instanceof te.Number)&&(he={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),he.opacity!=null&&this.attr("stop-opacity",he.opacity),he.color!=null&&this.attr("stop-color",he.color),he.offset!=null&&this.attr("offset",new te.Number(he.offset)),this}}}),te.Pattern=te.invent({create:"pattern",inherit:te.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(he){return this.clear(),typeof he=="function"&&he.call(this,this),this},toString:function(){return this.fill()},attr:function(he,ge,xe){return he=="transform"&&(he="patternTransform"),te.Container.prototype.attr.call(this,he,ge,xe)}},construct:{pattern:function(he,ge,xe){return this.defs().pattern(he,ge,xe)}}}),te.extend(te.Defs,{pattern:function(he,ge,xe){return this.put(new te.Pattern).update(xe).attr({x:0,y:0,width:he,height:ge,patternUnits:"userSpaceOnUse"})}}),te.Shape=te.invent({create:function(he){this.constructor.call(this,he)},inherit:te.Element}),te.Symbol=te.invent({create:"symbol",inherit:te.Container,construct:{symbol:function(){return this.put(new te.Symbol)}}}),te.Use=te.invent({create:"use",inherit:te.Shape,extend:{element:function(he,ge){return this.attr("href",(ge||"")+"#"+he,te.xlink)}},construct:{use:function(he,ge){return this.put(new te.Use).element(he,ge)}}}),te.Rect=te.invent({create:"rect",inherit:te.Shape,construct:{rect:function(he,ge){return this.put(new te.Rect).size(he,ge)}}}),te.Circle=te.invent({create:"circle",inherit:te.Shape,construct:{circle:function(he){return this.put(new te.Circle).rx(new te.Number(he).divide(2)).move(0,0)}}}),te.extend(te.Circle,te.FX,{rx:function(he){return this.attr("r",he)},ry:function(he){return this.rx(he)}}),te.Ellipse=te.invent({create:"ellipse",inherit:te.Shape,construct:{ellipse:function(he,ge){return this.put(new te.Ellipse).size(he,ge).move(0,0)}}}),te.extend(te.Ellipse,te.Rect,te.FX,{rx:function(he){return this.attr("rx",he)},ry:function(he){return this.attr("ry",he)}}),te.extend(te.Circle,te.Ellipse,{x:function(he){return he==null?this.cx()-this.rx():this.cx(he+this.rx())},y:function(he){return he==null?this.cy()-this.ry():this.cy(he+this.ry())},cx:function(he){return he==null?this.attr("cx"):this.attr("cx",he)},cy:function(he){return he==null?this.attr("cy"):this.attr("cy",he)},width:function(he){return he==null?2*this.rx():this.rx(new te.Number(he).divide(2))},height:function(he){return he==null?2*this.ry():this.ry(new te.Number(he).divide(2))},size:function(he,ge){var xe=pe(this,he,ge);return this.rx(new te.Number(xe.width).divide(2)).ry(new te.Number(xe.height).divide(2))}}),te.Line=te.invent({create:"line",inherit:te.Shape,extend:{array:function(){return new te.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(he,ge,xe,we){return he==null?this.array():(he=ge!==void 0?{x1:he,y1:ge,x2:xe,y2:we}:new te.PointArray(he).toLine(),this.attr(he))},move:function(he,ge){return this.attr(this.array().move(he,ge).toLine())},size:function(he,ge){var xe=pe(this,he,ge);return this.attr(this.array().size(xe.width,xe.height).toLine())}},construct:{line:function(he,ge,xe,we){return te.Line.prototype.plot.apply(this.put(new te.Line),he!=null?[he,ge,xe,we]:[0,0,0,0])}}}),te.Polyline=te.invent({create:"polyline",inherit:te.Shape,construct:{polyline:function(he){return this.put(new te.Polyline).plot(he||new te.PointArray)}}}),te.Polygon=te.invent({create:"polygon",inherit:te.Shape,construct:{polygon:function(he){return this.put(new te.Polygon).plot(he||new te.PointArray)}}}),te.extend(te.Polyline,te.Polygon,{array:function(){return this._array||(this._array=new te.PointArray(this.attr("points")))},plot:function(he){return he==null?this.array():this.clear().attr("points",typeof he=="string"?he:this._array=new te.PointArray(he))},clear:function(){return delete this._array,this},move:function(he,ge){return this.attr("points",this.array().move(he,ge))},size:function(he,ge){var xe=pe(this,he,ge);return this.attr("points",this.array().size(xe.width,xe.height))}}),te.extend(te.Line,te.Polyline,te.Polygon,{morphArray:te.PointArray,x:function(he){return he==null?this.bbox().x:this.move(he,this.bbox().y)},y:function(he){return he==null?this.bbox().y:this.move(this.bbox().x,he)},width:function(he){var ge=this.bbox();return he==null?ge.width:this.size(he,ge.height)},height:function(he){var ge=this.bbox();return he==null?ge.height:this.size(ge.width,he)}}),te.Path=te.invent({create:"path",inherit:te.Shape,extend:{morphArray:te.PathArray,array:function(){return this._array||(this._array=new te.PathArray(this.attr("d")))},plot:function(he){return he==null?this.array():this.clear().attr("d",typeof he=="string"?he:this._array=new te.PathArray(he))},clear:function(){return delete this._array,this}},construct:{path:function(he){return this.put(new te.Path).plot(he||new te.PathArray)}}}),te.Image=te.invent({create:"image",inherit:te.Shape,extend:{load:function(he){if(!he)return this;var ge=this,xe=new de.Image;return te.on(xe,"load",function(){te.off(xe);var we=ge.parent(te.Pattern);we!==null&&(ge.width()==0&&ge.height()==0&&ge.size(xe.width,xe.height),we&&we.width()==0&&we.height()==0&&we.size(ge.width(),ge.height()),typeof ge._loaded=="function"&&ge._loaded.call(ge,{width:xe.width,height:xe.height,ratio:xe.width/xe.height,url:he}))}),te.on(xe,"error",function(we){te.off(xe),typeof ge._error=="function"&&ge._error.call(ge,we)}),this.attr("href",xe.src=this.src=he,te.xlink)},loaded:function(he){return this._loaded=he,this},error:function(he){return this._error=he,this}},construct:{image:function(he,ge,xe){return this.put(new te.Image).load(he).size(ge||0,xe||ge||0)}}}),te.Text=te.invent({create:function(){this.constructor.call(this,te.create("text")),this.dom.leading=new te.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",te.defaults.attrs["font-family"])},inherit:te.Shape,extend:{x:function(he){return he==null?this.attr("x"):this.attr("x",he)},text:function(he){if(he===void 0){he="";for(var ge=this.node.childNodes,xe=0,we=ge.length;xe<we;++xe)xe!=0&&ge[xe].nodeType!=3&&te.adopt(ge[xe]).dom.newLined==1&&(he+=`
`),he+=ge[xe].textContent;return he}if(this.clear().build(!0),typeof he=="function")he.call(this,this);else{xe=0;for(var Ce=(he=he.split(`
`)).length;xe<Ce;xe++)this.tspan(he[xe]).newLine()}return this.build(!1).rebuild()},size:function(he){return this.attr("font-size",he).rebuild()},leading:function(he){return he==null?this.dom.leading:(this.dom.leading=new te.Number(he),this.rebuild())},lines:function(){var he=(this.textPath&&this.textPath()||this).node,ge=te.utils.map(te.utils.filterSVGElements(he.childNodes),function(xe){return te.adopt(xe)});return new te.Set(ge)},rebuild:function(he){if(typeof he=="boolean"&&(this._rebuild=he),this._rebuild){var ge=this,xe=0,we=this.dom.leading*new te.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(ge.textPath()||this.attr("x",ge.attr("x")),this.text()==`
`?xe+=we:(this.attr("dy",we+xe),xe=0))}),this.fire("rebuild")}return this},build:function(he){return this._build=!!he,this},setData:function(he){return this.dom=he,this.dom.leading=new te.Number(he.leading||1.3),this}},construct:{text:function(he){return this.put(new te.Text).text(he)},plain:function(he){return this.put(new te.Text).plain(he)}}}),te.Tspan=te.invent({create:"tspan",inherit:te.Shape,extend:{text:function(he){return he==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof he=="function"?he.call(this,this):this.plain(he),this)},dx:function(he){return this.attr("dx",he)},dy:function(he){return this.attr("dy",he)},newLine:function(){var he=this.parent(te.Text);return this.dom.newLined=!0,this.dy(he.dom.leading*he.attr("font-size")).attr("x",he.x())}}}),te.extend(te.Text,te.Tspan,{plain:function(he){return this._build===!1&&this.clear(),this.node.appendChild(ee.createTextNode(he)),this},tspan:function(he){var ge=(this.textPath&&this.textPath()||this).node,xe=new te.Tspan;return this._build===!1&&this.clear(),ge.appendChild(xe.node),xe.text(he)},clear:function(){for(var he=(this.textPath&&this.textPath()||this).node;he.hasChildNodes();)he.removeChild(he.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),te.TextPath=te.invent({create:"textPath",inherit:te.Parent,parent:te.Text,construct:{morphArray:te.PathArray,array:function(){var he=this.track();return he?he.array():null},plot:function(he){var ge=this.track(),xe=null;return ge&&(xe=ge.plot(he)),he==null?xe:this},track:function(){var he=this.textPath();if(he)return he.reference("href")},textPath:function(){if(this.node.firstChild&&this.node.firstChild.nodeName=="textPath")return te.adopt(this.node.firstChild)}}}),te.Nested=te.invent({create:function(){this.constructor.call(this,te.create("svg")),this.style("overflow","visible")},inherit:te.Container,construct:{nested:function(){return this.put(new te.Nested)}}});var re={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(he,ge){return ge=="color"?he:he+"-"+ge}};function ne(he,ge,xe,we){return xe+we.replace(te.regex.dots," .")}function le(he){return he.toLowerCase().replace(/-(.)/g,function(ge,xe){return xe.toUpperCase()})}function ce(he){return he.charAt(0).toUpperCase()+he.slice(1)}function ue(he){var ge=he.toString(16);return ge.length==1?"0"+ge:ge}function pe(he,ge,xe){if(ge==null||xe==null){var we=he.bbox();ge==null?ge=we.width/we.height*xe:xe==null&&(xe=we.height/we.width*ge)}return{width:ge,height:xe}}function fe(he,ge,xe){return{x:ge*he.a+xe*he.c+0,y:ge*he.b+xe*he.d+0}}function me(he){return{a:he[0],b:he[1],c:he[2],d:he[3],e:he[4],f:he[5]}}function ve(he){for(var ge=he.childNodes.length-1;ge>=0;ge--)he.childNodes[ge]instanceof de.SVGElement&&ve(he.childNodes[ge]);return te.adopt(he).id(te.eid(he.nodeName))}function be(he){return he.x==null&&(he.x=0,he.y=0,he.width=0,he.height=0),he.w=he.width,he.h=he.height,he.x2=he.x+he.width,he.y2=he.y+he.height,he.cx=he.x+he.width/2,he.cy=he.y+he.height/2,he}function ye(he){return Math.abs(he)>1e-37?he:0}["fill","stroke"].forEach(function(he){var ge={};ge[he]=function(xe){if(xe===void 0)return this;if(typeof xe=="string"||te.Color.isRgb(xe)||xe&&typeof xe.fill=="function")this.attr(he,xe);else for(var we=re[he].length-1;we>=0;we--)xe[re[he][we]]!=null&&this.attr(re.prefix(he,re[he][we]),xe[re[he][we]]);return this},te.extend(te.Element,te.FX,ge)}),te.extend(te.Element,te.FX,{translate:function(he,ge){return this.transform({x:he,y:ge})},matrix:function(he){return this.attr("transform",new te.Matrix(arguments.length==6?[].slice.call(arguments):he))},opacity:function(he){return this.attr("opacity",he)},dx:function(he){return this.x(new te.Number(he).plus(this instanceof te.FX?0:this.x()),!0)},dy:function(he){return this.y(new te.Number(he).plus(this instanceof te.FX?0:this.y()),!0)}}),te.extend(te.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(he){return this.node.getPointAtLength(he)}}),te.Set=te.invent({create:function(he){Array.isArray(he)?this.members=he:this.clear()},extend:{add:function(){for(var he=[].slice.call(arguments),ge=0,xe=he.length;ge<xe;ge++)this.members.push(he[ge]);return this},remove:function(he){var ge=this.index(he);return ge>-1&&this.members.splice(ge,1),this},each:function(he){for(var ge=0,xe=this.members.length;ge<xe;ge++)he.apply(this.members[ge],[ge,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(he){return this.index(he)>=0},index:function(he){return this.members.indexOf(he)},get:function(he){return this.members[he]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(he){return new te.Set(he)}}}),te.FX.Set=te.invent({create:function(he){this.set=he}}),te.Set.inherit=function(){var he=[];for(var ge in te.Shape.prototype)typeof te.Shape.prototype[ge]=="function"&&typeof te.Set.prototype[ge]!="function"&&he.push(ge);for(var ge in he.forEach(function(we){te.Set.prototype[we]=function(){for(var Ce=0,Se=this.members.length;Ce<Se;Ce++)this.members[Ce]&&typeof this.members[Ce][we]=="function"&&this.members[Ce][we].apply(this.members[Ce],arguments);return we=="animate"?this.fx||(this.fx=new te.FX.Set(this)):this}}),he=[],te.FX.prototype)typeof te.FX.prototype[ge]=="function"&&typeof te.FX.Set.prototype[ge]!="function"&&he.push(ge);he.forEach(function(xe){te.FX.Set.prototype[xe]=function(){for(var we=0,Ce=this.set.members.length;we<Ce;we++)this.set.members[we].fx[xe].apply(this.set.members[we].fx,arguments);return this}})},te.extend(te.Element,{}),te.extend(te.Element,{remember:function(he,ge){if(t(arguments[0])==="object")for(var xe in he)this.remember(xe,he[xe]);else{if(arguments.length==1)return this.memory()[he];this.memory()[he]=ge}return this},forget:function(){if(arguments.length==0)this._memory={};else for(var he=arguments.length-1;he>=0;he--)delete this.memory()[arguments[he]];return this},memory:function(){return this._memory||(this._memory={})}}),te.get=function(he){var ge=ee.getElementById(function(xe){var we=(xe||"").toString().match(te.regex.reference);if(we)return we[1]}(he)||he);return te.adopt(ge)},te.select=function(he,ge){return new te.Set(te.utils.map((ge||ee).querySelectorAll(he),function(xe){return te.adopt(xe)}))},te.extend(te.Parent,{select:function(he){return te.select(he,this.node)}});var _e="abcdef".split("");if(typeof de.CustomEvent!="function"){var Ae=function(he,ge){ge=ge||{bubbles:!1,cancelable:!1,detail:void 0};var xe=ee.createEvent("CustomEvent");return xe.initCustomEvent(he,ge.bubbles,ge.cancelable,ge.detail),xe};Ae.prototype=de.Event.prototype,te.CustomEvent=Ae}else te.CustomEvent=de.CustomEvent;return te},typeof define=="function"&&define.amd?define(function(){return Tt(Mt,Mt.document)}):(typeof exports=="undefined"?"undefined":t(exports))==="object"&&typeof module!="undefined"?module.exports=Mt.document?Tt(Mt,Mt.document):function(de){return Tt(de,de.document)}:Mt.SVG=Tt(Mt,Mt.document),function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(re,ne){return this.add(re,ne),!re.attr("in")&&this.autoSetIn&&re.attr("in",this.source),re.attr("result")||re.attr("result",re),re},blend:function(re,ne,le){return this.put(new SVG.BlendEffect(re,ne,le))},colorMatrix:function(re,ne){return this.put(new SVG.ColorMatrixEffect(re,ne))},convolveMatrix:function(re){return this.put(new SVG.ConvolveMatrixEffect(re))},componentTransfer:function(re){return this.put(new SVG.ComponentTransferEffect(re))},composite:function(re,ne,le){return this.put(new SVG.CompositeEffect(re,ne,le))},flood:function(re,ne){return this.put(new SVG.FloodEffect(re,ne))},offset:function(re,ne){return this.put(new SVG.OffsetEffect(re,ne))},image:function(re){return this.put(new SVG.ImageEffect(re))},merge:function(){var re=[void 0];for(var ne in arguments)re.push(arguments[ne]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,re)))},gaussianBlur:function(re,ne){return this.put(new SVG.GaussianBlurEffect(re,ne))},morphology:function(re,ne){return this.put(new SVG.MorphologyEffect(re,ne))},diffuseLighting:function(re,ne,le){return this.put(new SVG.DiffuseLightingEffect(re,ne,le))},displacementMap:function(re,ne,le,ce,ue){return this.put(new SVG.DisplacementMapEffect(re,ne,le,ce,ue))},specularLighting:function(re,ne,le,ce){return this.put(new SVG.SpecularLightingEffect(re,ne,le,ce))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(re,ne,le,ce,ue){return this.put(new SVG.TurbulenceEffect(re,ne,le,ce,ue))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(re){var ne=this.put(new SVG.Filter);return typeof re=="function"&&re.call(ne,ne),ne}}),SVG.extend(SVG.Container,{filter:function(re){return this.defs().filter(re)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(re){return this.filterer=re instanceof SVG.Element?re:this.doc().filter(re),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(re){return this.filterer&&re===!0&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(re){return re==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",re)},result:function(re){return re==null?this.attr("result"):this.attr("result",re)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(re){return re==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",re)},result:function(re){return re==null?this.attr("result"):this.attr("result",re)},toString:function(){return this.result()}}});var de={blend:function(re,ne){return this.parent()&&this.parent().blend(this,re,ne)},colorMatrix:function(re,ne){return this.parent()&&this.parent().colorMatrix(re,ne).in(this)},convolveMatrix:function(re){return this.parent()&&this.parent().convolveMatrix(re).in(this)},componentTransfer:function(re){return this.parent()&&this.parent().componentTransfer(re).in(this)},composite:function(re,ne){return this.parent()&&this.parent().composite(this,re,ne)},flood:function(re,ne){return this.parent()&&this.parent().flood(re,ne)},offset:function(re,ne){return this.parent()&&this.parent().offset(re,ne).in(this)},image:function(re){return this.parent()&&this.parent().image(re)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(re,ne){return this.parent()&&this.parent().gaussianBlur(re,ne).in(this)},morphology:function(re,ne){return this.parent()&&this.parent().morphology(re,ne).in(this)},diffuseLighting:function(re,ne,le){return this.parent()&&this.parent().diffuseLighting(re,ne,le).in(this)},displacementMap:function(re,ne,le,ce){return this.parent()&&this.parent().displacementMap(this,re,ne,le,ce)},specularLighting:function(re,ne,le,ce){return this.parent()&&this.parent().specularLighting(re,ne,le,ce).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(re,ne,le,ce,ue){return this.parent()&&this.parent().turbulence(re,ne,le,ce,ue).in(this)}};SVG.extend(SVG.Effect,de),SVG.extend(SVG.ParentEffect,de),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(re){this.attr("in",re)}}});var ee={blend:function(re,ne,le){this.attr({in:re,in2:ne,mode:le||"normal"})},colorMatrix:function(re,ne){re=="matrix"&&(ne=ae(ne)),this.attr({type:re,values:ne===void 0?null:ne})},convolveMatrix:function(re){re=ae(re),this.attr({order:Math.sqrt(re.split(" ").length),kernelMatrix:re})},composite:function(re,ne,le){this.attr({in:re,in2:ne,operator:le})},flood:function(re,ne){this.attr("flood-color",re),ne!=null&&this.attr("flood-opacity",ne)},offset:function(re,ne){this.attr({dx:re,dy:ne})},image:function(re){this.attr("href",re,SVG.xlink)},displacementMap:function(re,ne,le,ce,ue){this.attr({in:re,in2:ne,scale:le,xChannelSelector:ce,yChannelSelector:ue})},gaussianBlur:function(re,ne){re!=null||ne!=null?this.attr("stdDeviation",se(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(re,ne){this.attr({operator:re,radius:ne})},tile:function(){},turbulence:function(re,ne,le,ce,ue){this.attr({numOctaves:ne,seed:le,stitchTiles:ce,baseFrequency:re,type:ue})}},te={merge:function(){var re;if(arguments[0]instanceof SVG.Set){var ne=this;arguments[0].each(function(ce){this instanceof SVG.MergeNode?ne.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&ne.put(new SVG.MergeNode(this))})}else{re=Array.isArray(arguments[0])?arguments[0]:arguments;for(var le=0;le<re.length;le++)re[le]instanceof SVG.MergeNode?this.put(re[le]):this.put(new SVG.MergeNode(re[le]))}},componentTransfer:function(re){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(le){this[le]=new SVG["Func"+le.toUpperCase()]("identity"),this.rgb.add(this[le]),this.node.appendChild(this[le].node)}.bind(this)),re)for(var ne in re.rgb&&(["r","g","b"].forEach(function(le){this[le].attr(re.rgb)}.bind(this)),delete re.rgb),re)this[ne].attr(re[ne])},diffuseLighting:function(re,ne,le){this.attr({surfaceScale:re,diffuseConstant:ne,kernelUnitLength:le})},specularLighting:function(re,ne,le,ce){this.attr({surfaceScale:re,diffuseConstant:ne,specularExponent:le,kernelUnitLength:ce})}},ie={distantLight:function(re,ne){this.attr({azimuth:re,elevation:ne})},pointLight:function(re,ne,le){this.attr({x:re,y:ne,z:le})},spotLight:function(re,ne,le,ce,ue,pe){this.attr({x:re,y:ne,z:le,pointsAtX:ce,pointsAtY:ue,pointsAtZ:pe})},mergeNode:function(re){this.attr("in",re)}};function ae(re){return Array.isArray(re)&&(re=new SVG.Array(re)),re.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function se(re){if(!Array.isArray(re))return re;for(var ne=0,le=re.length,ce=[];ne<le;ne++)ce.push(re[ne]);return ce.join(" ")}function oe(){var re=function(){};for(var ne in typeof arguments[arguments.length-1]=="function"&&(re=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var le in arguments[ne])re(arguments[ne][le],le,arguments[ne])}["r","g","b","a"].forEach(function(re){ie["Func"+re.toUpperCase()]=function(ne){switch(this.attr("type",ne),ne){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),oe(ee,function(re,ne){var le=ne.charAt(0).toUpperCase()+ne.slice(1);SVG[le+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+le)),re.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),oe(te,function(re,ne){var le=ne.charAt(0).toUpperCase()+ne.slice(1);SVG[le+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+le)),re.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),oe(ie,function(re,ne){var le=ne.charAt(0).toUpperCase()+ne.slice(1);SVG[le]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+le)),re.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(re){return re instanceof SVG.MergeNode?this.add(re,0):this.add(new SVG.MergeNode(re),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(re){return re==null?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",re)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function de(se,oe,re,ne,le,ce,ue){for(var pe=se.slice(oe,re||ue),fe=ne.slice(le,ce||ue),me=0,ve={pos:[0,0],start:[0,0]},be={pos:[0,0],start:[0,0]};pe[me]=ee.call(ve,pe[me]),fe[me]=ee.call(be,fe[me]),pe[me][0]!=fe[me][0]||pe[me][0]=="M"||pe[me][0]=="A"&&(pe[me][4]!=fe[me][4]||pe[me][5]!=fe[me][5])?(Array.prototype.splice.apply(pe,[me,1].concat(ie.call(ve,pe[me]))),Array.prototype.splice.apply(fe,[me,1].concat(ie.call(be,fe[me])))):(pe[me]=te.call(ve,pe[me]),fe[me]=te.call(be,fe[me])),!(++me==pe.length&&me==fe.length);)me==pe.length&&pe.push(["C",ve.pos[0],ve.pos[1],ve.pos[0],ve.pos[1],ve.pos[0],ve.pos[1]]),me==fe.length&&fe.push(["C",be.pos[0],be.pos[1],be.pos[0],be.pos[1],be.pos[0],be.pos[1]]);return{start:pe,dest:fe}}function ee(se){switch(se[0]){case"z":case"Z":se[0]="L",se[1]=this.start[0],se[2]=this.start[1];break;case"H":se[0]="L",se[2]=this.pos[1];break;case"V":se[0]="L",se[2]=se[1],se[1]=this.pos[0];break;case"T":se[0]="Q",se[3]=se[1],se[4]=se[2],se[1]=this.reflection[1],se[2]=this.reflection[0];break;case"S":se[0]="C",se[6]=se[4],se[5]=se[3],se[4]=se[2],se[3]=se[1],se[2]=this.reflection[1],se[1]=this.reflection[0]}return se}function te(se){var oe=se.length;return this.pos=[se[oe-2],se[oe-1]],"SCQT".indexOf(se[0])!=-1&&(this.reflection=[2*this.pos[0]-se[oe-4],2*this.pos[1]-se[oe-3]]),se}function ie(se){var oe=[se];switch(se[0]){case"M":return this.pos=this.start=[se[1],se[2]],oe;case"L":se[5]=se[3]=se[1],se[6]=se[4]=se[2],se[1]=this.pos[0],se[2]=this.pos[1];break;case"Q":se[6]=se[4],se[5]=se[3],se[4]=1*se[4]/3+2*se[2]/3,se[3]=1*se[3]/3+2*se[1]/3,se[2]=1*this.pos[1]/3+2*se[2]/3,se[1]=1*this.pos[0]/3+2*se[1]/3;break;case"A":se=(oe=function(re,ne){var le,ce,ue,pe,fe,me,ve,be,ye,_e,Ae,he,ge,xe,we,Ce,Se,ke,Pe,Ee,Ie,Te,Le,ze,Me,Fe,De=Math.abs(ne[1]),Be=Math.abs(ne[2]),Ne=ne[3]%360,We=ne[4],Ve=ne[5],He=ne[6],Ye=ne[7],Oe=new SVG.Point(re),Re=new SVG.Point(He,Ye),Xe=[];if(De===0||Be===0||Oe.x===Re.x&&Oe.y===Re.y)return[["C",Oe.x,Oe.y,Re.x,Re.y,Re.x,Re.y]];for(le=new SVG.Point((Oe.x-Re.x)/2,(Oe.y-Re.y)/2).transform(new SVG.Matrix().rotate(Ne)),(ce=le.x*le.x/(De*De)+le.y*le.y/(Be*Be))>1&&(De*=ce=Math.sqrt(ce),Be*=ce),ue=new SVG.Matrix().rotate(Ne).scale(1/De,1/Be).rotate(-Ne),Oe=Oe.transform(ue),Re=Re.transform(ue),pe=[Re.x-Oe.x,Re.y-Oe.y],me=pe[0]*pe[0]+pe[1]*pe[1],fe=Math.sqrt(me),pe[0]/=fe,pe[1]/=fe,ve=me<4?Math.sqrt(1-me/4):0,We===Ve&&(ve*=-1),be=new SVG.Point((Re.x+Oe.x)/2+ve*-pe[1],(Re.y+Oe.y)/2+ve*pe[0]),ye=new SVG.Point(Oe.x-be.x,Oe.y-be.y),_e=new SVG.Point(Re.x-be.x,Re.y-be.y),Ae=Math.acos(ye.x/Math.sqrt(ye.x*ye.x+ye.y*ye.y)),ye.y<0&&(Ae*=-1),he=Math.acos(_e.x/Math.sqrt(_e.x*_e.x+_e.y*_e.y)),_e.y<0&&(he*=-1),Ve&&Ae>he&&(he+=2*Math.PI),!Ve&&Ae<he&&(he-=2*Math.PI),xe=Math.ceil(2*Math.abs(Ae-he)/Math.PI),Ce=[],Se=Ae,ge=(he-Ae)/xe,we=4*Math.tan(ge/4)/3,Ie=0;Ie<=xe;Ie++)Pe=Math.cos(Se),ke=Math.sin(Se),Ee=new SVG.Point(be.x+Pe,be.y+ke),Ce[Ie]=[new SVG.Point(Ee.x+we*ke,Ee.y-we*Pe),Ee,new SVG.Point(Ee.x-we*ke,Ee.y+we*Pe)],Se+=ge;for(Ce[0][0]=Ce[0][1].clone(),Ce[Ce.length-1][2]=Ce[Ce.length-1][1].clone(),ue=new SVG.Matrix().rotate(Ne).scale(De,Be).rotate(-Ne),Ie=0,Te=Ce.length;Ie<Te;Ie++)Ce[Ie][0]=Ce[Ie][0].transform(ue),Ce[Ie][1]=Ce[Ie][1].transform(ue),Ce[Ie][2]=Ce[Ie][2].transform(ue);for(Ie=1,Te=Ce.length;Ie<Te;Ie++)Le=(Ee=Ce[Ie-1][2]).x,ze=Ee.y,Me=(Ee=Ce[Ie][0]).x,Fe=Ee.y,He=(Ee=Ce[Ie][1]).x,Ye=Ee.y,Xe.push(["C",Le,ze,Me,Fe,He,Ye]);return Xe}(this.pos,se))[0]}return se[0]="C",this.pos=[se[5],se[6]],this.reflection=[2*se[5]-se[3],2*se[6]-se[4]],oe}function ae(se,oe){if(oe===!1)return!1;for(var re=oe,ne=se.length;re<ne;++re)if(se[re][0]=="M")return re;return!1}SVG.extend(SVG.PathArray,{morph:function(se){for(var oe=this.value,re=this.parse(se),ne=0,le=0,ce=!1,ue=!1;ne!==!1||le!==!1;){var pe;ce=ae(oe,ne!==!1&&ne+1),ue=ae(re,le!==!1&&le+1),ne===!1&&(ne=(pe=new SVG.PathArray(fe.start).bbox()).height==0||pe.width==0?oe.push(oe[0])-1:oe.push(["M",pe.x+pe.width/2,pe.y+pe.height/2])-1),le===!1&&(le=(pe=new SVG.PathArray(fe.dest).bbox()).height==0||pe.width==0?re.push(re[0])-1:re.push(["M",pe.x+pe.width/2,pe.y+pe.height/2])-1);var fe=de(oe,ne,ce,re,le,ue);oe=oe.slice(0,ne).concat(fe.start,ce===!1?[]:oe.slice(ce)),re=re.slice(0,le).concat(fe.dest,ue===!1?[]:re.slice(ue)),ne=ce!==!1&&ne+fe.start.length,le=ue!==!1&&le+fe.dest.length}return this.value=oe,this.destination=new SVG.PathArray,this.destination.value=re,this}})}(),function(){function de(ee){ee.remember("_draggable",this),this.el=ee}de.prototype.init=function(ee,te){var ie=this;this.constraint=ee,this.value=te,this.el.on("mousedown.drag",function(ae){ie.start(ae)}),this.el.on("touchstart.drag",function(ae){ie.start(ae)})},de.prototype.transformPoint=function(ee,te){var ie=(ee=ee||window.event).changedTouches&&ee.changedTouches[0]||ee;return this.p.x=ie.clientX-(te||0),this.p.y=ie.clientY,this.p.matrixTransform(this.m)},de.prototype.getBBox=function(){var ee=this.el.bbox();return this.el instanceof SVG.Nested&&(ee=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(ee.x=this.el.x(),ee.y=this.el.y()),ee},de.prototype.start=function(ee){if(ee.type!="click"&&ee.type!="mousedown"&&ee.type!="mousemove"||(ee.which||ee.buttons)==1){var te=this;if(this.el.fire("beforedrag",{event:ee,handler:this}),!this.el.event().defaultPrevented){ee.preventDefault(),ee.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var ie,ae=this.getBBox();if(this.el instanceof SVG.Text)switch(ie=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":ie/=2;break;case"start":ie=0}this.startPoints={point:this.transformPoint(ee,ie),box:ae,transform:this.el.transform()},SVG.on(window,"mousemove.drag",function(se){te.drag(se)}),SVG.on(window,"touchmove.drag",function(se){te.drag(se)}),SVG.on(window,"mouseup.drag",function(se){te.end(se)}),SVG.on(window,"touchend.drag",function(se){te.end(se)}),this.el.fire("dragstart",{event:ee,p:this.startPoints.point,m:this.m,handler:this})}}},de.prototype.drag=function(ee){var te=this.getBBox(),ie=this.transformPoint(ee),ae=this.startPoints.box.x+ie.x-this.startPoints.point.x,se=this.startPoints.box.y+ie.y-this.startPoints.point.y,oe=this.constraint,re=ie.x-this.startPoints.point.x,ne=ie.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:ee,p:ie,m:this.m,handler:this}),this.el.event().defaultPrevented)return ie;if(typeof oe=="function"){var le=oe.call(this.el,ae,se,this.m);typeof le=="boolean"&&(le={x:le,y:le}),le.x===!0?this.el.x(ae):le.x!==!1&&this.el.x(le.x),le.y===!0?this.el.y(se):le.y!==!1&&this.el.y(le.y)}else typeof oe=="object"&&(oe.minX!=null&&ae<oe.minX?re=(ae=oe.minX)-this.startPoints.box.x:oe.maxX!=null&&ae>oe.maxX-te.width&&(re=(ae=oe.maxX-te.width)-this.startPoints.box.x),oe.minY!=null&&se<oe.minY?ne=(se=oe.minY)-this.startPoints.box.y:oe.maxY!=null&&se>oe.maxY-te.height&&(ne=(se=oe.maxY-te.height)-this.startPoints.box.y),oe.snapToGrid!=null&&(ae-=ae%oe.snapToGrid,se-=se%oe.snapToGrid,re-=re%oe.snapToGrid,ne-=ne%oe.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:re,y:ne},!0):this.el.move(ae,se));return ie},de.prototype.end=function(ee){var te=this.drag(ee);this.el.fire("dragend",{event:ee,p:te,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(ee,te){typeof ee!="function"&&typeof ee!="object"||(te=ee,ee=!0);var ie=this.remember("_draggable")||new de(this);return(ee=ee===void 0||ee)?ie.init(te||{},ee):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function de(ee){this.el=ee,ee.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(te,ie,ae){var se=typeof te!="string"?te:ie[te];return ae?se/2:se},this.pointCoords=function(te,ie){var ae=this.pointsList[te];return{x:this.pointCoord(ae[0],ie,te==="t"||te==="b"),y:this.pointCoord(ae[1],ie,te==="r"||te==="l")}}}de.prototype.init=function(ee,te){var ie=this.el.bbox();this.options={};var ae=this.el.selectize.defaults.points;for(var se in this.el.selectize.defaults)this.options[se]=this.el.selectize.defaults[se],te[se]!==void 0&&(this.options[se]=te[se]);var oe=["points","pointsExclude"];for(var se in oe){var re=this.options[oe[se]];typeof re=="string"?re=re.length>0?re.split(/\s*,\s*/i):[]:typeof re=="boolean"&&oe[se]==="points"&&(re=re?ae:[]),this.options[oe[se]]=re}this.options.points=[ae,this.options.points].reduce(function(ne,le){return ne.filter(function(ce){return le.indexOf(ce)>-1})}),this.options.points=[this.options.points,this.options.pointsExclude].reduce(function(ne,le){return ne.filter(function(ce){return le.indexOf(ce)<0})}),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(ie.x,ie.y)),this.options.deepSelect&&["line","polyline","polygon"].indexOf(this.el.type)!==-1?this.selectPoints(ee):this.selectRect(ee),this.observe(),this.cleanup()},de.prototype.selectPoints=function(ee){return this.pointSelection.isSelected=ee,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},de.prototype.getPointArray=function(){var ee=this.el.bbox();return this.el.array().valueOf().map(function(te){return[te[0]-ee.x,te[1]-ee.y]})},de.prototype.drawPoints=function(){for(var ee=this,te=this.getPointArray(),ie=0,ae=te.length;ie<ae;++ie){var se=function(re){return function(ne){(ne=ne||window.event).preventDefault?ne.preventDefault():ne.returnValue=!1,ne.stopPropagation();var le=ne.pageX||ne.touches[0].pageX,ce=ne.pageY||ne.touches[0].pageY;ee.el.fire("point",{x:le,y:ce,i:re,event:ne})}}(ie),oe=this.drawPoint(te[ie][0],te[ie][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",se).on("mousedown",se);this.pointSelection.set.add(oe)}},de.prototype.drawPoint=function(ee,te){var ie=this.options.pointType;switch(ie){case"circle":return this.drawCircle(ee,te);case"rect":return this.drawRect(ee,te);default:if(typeof ie=="function")return ie.call(this,ee,te);throw new Error("Unknown "+ie+" point type!")}},de.prototype.drawCircle=function(ee,te){return this.nested.circle(this.options.pointSize).center(ee,te)},de.prototype.drawRect=function(ee,te){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(ee,te)},de.prototype.updatePointSelection=function(){var ee=this.getPointArray();this.pointSelection.set.each(function(te){this.cx()===ee[te][0]&&this.cy()===ee[te][1]||this.center(ee[te][0],ee[te][1])})},de.prototype.updateRectSelection=function(){var ee=this,te=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:te.width,height:te.height}),this.options.points.length&&this.options.points.map(function(ae,se){var oe=ee.pointCoords(ae,te);ee.rectSelection.set.get(se+1).center(oe.x,oe.y)}),this.options.rotationPoint){var ie=this.rectSelection.set.length();this.rectSelection.set.get(ie-1).center(te.width/2,20)}},de.prototype.selectRect=function(ee){var te=this,ie=this.el.bbox();function ae(re){return function(ne){(ne=ne||window.event).preventDefault?ne.preventDefault():ne.returnValue=!1,ne.stopPropagation();var le=ne.pageX||ne.touches[0].pageX,ce=ne.pageY||ne.touches[0].pageY;te.el.fire(re,{x:le,y:ce,event:ne})}}if(this.rectSelection.isSelected=ee,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(ie.width,ie.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2&&(this.options.points.map(function(re,ne){var le=te.pointCoords(re,ie),ce=te.drawPoint(le.x,le.y).attr("class",te.options.classPoints+"_"+re).on("mousedown",ae(re)).on("touchstart",ae(re));te.rectSelection.set.add(ce)}),this.rectSelection.set.each(function(){this.addClass(te.options.classPoints)})),this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var se=function(re){(re=re||window.event).preventDefault?re.preventDefault():re.returnValue=!1,re.stopPropagation();var ne=re.pageX||re.touches[0].pageX,le=re.pageY||re.touches[0].pageY;te.el.fire("rot",{x:ne,y:le,event:re})},oe=this.drawPoint(ie.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",se).on("mousedown",se);this.rectSelection.set.add(oe)}},de.prototype.handler=function(){var ee=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(ee.x,ee.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},de.prototype.observe=function(){var ee=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver(function(){ee.handler()}),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch{}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",function(){ee.handler()})},de.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each(function(){this.remove()}),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each(function(){this.remove()}),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(ee,te){return typeof ee=="object"&&(te=ee,ee=!0),(this.remember("_selectHandler")||new de(this)).init(ee===void 0||ee,te||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function de(ee){ee.remember("_resizeHandler",this),this.el=ee,this.parameters={},this.lastUpdateCall=null,this.p=ee.doc().node.createSVGPoint()}de.prototype.transformPoint=function(ee,te,ie){return this.p.x=ee-(this.offset.x-window.pageXOffset),this.p.y=te-(this.offset.y-window.pageYOffset),this.p.matrixTransform(ie||this.m)},de.prototype._extractPosition=function(ee){return{x:ee.clientX!=null?ee.clientX:ee.touches[0].clientX,y:ee.clientY!=null?ee.clientY:ee.touches[0].clientY}},de.prototype.init=function(ee){var te=this;if(this.stop(),ee!=="stop"){for(var ie in this.options={},this.el.resize.defaults)this.options[ie]=this.el.resize.defaults[ie],ee[ie]!==void 0&&(this.options[ie]=ee[ie]);this.el.on("lt.resize",function(ae){te.resize(ae||window.event)}),this.el.on("rt.resize",function(ae){te.resize(ae||window.event)}),this.el.on("rb.resize",function(ae){te.resize(ae||window.event)}),this.el.on("lb.resize",function(ae){te.resize(ae||window.event)}),this.el.on("t.resize",function(ae){te.resize(ae||window.event)}),this.el.on("r.resize",function(ae){te.resize(ae||window.event)}),this.el.on("b.resize",function(ae){te.resize(ae||window.event)}),this.el.on("l.resize",function(ae){te.resize(ae||window.event)}),this.el.on("rot.resize",function(ae){te.resize(ae||window.event)}),this.el.on("point.resize",function(ae){te.resize(ae||window.event)}),this.update()}},de.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},de.prototype.resize=function(ee){var te=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var ie=this._extractPosition(ee.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(ie.x,ie.y),x:ee.detail.x,y:ee.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},this.el.type==="text"&&(this.parameters.fontSize=this.el.attr()["font-size"]),ee.detail.i!==void 0){var ae=this.el.array().valueOf();this.parameters.i=ee.detail.i,this.parameters.pointCoords=[ae[ee.detail.i][0],ae[ee.detail.i][1]]}switch(ee.type){case"lt":this.calc=function(se,oe){var re=this.snapToGrid(se,oe);if(this.parameters.box.width-re[0]>0&&this.parameters.box.height-re[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+re[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-re[0]);re=this.checkAspectRatio(re),this.el.move(this.parameters.box.x+re[0],this.parameters.box.y+re[1]).size(this.parameters.box.width-re[0],this.parameters.box.height-re[1])}};break;case"rt":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,2);if(this.parameters.box.width+re[0]>0&&this.parameters.box.height-re[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-re[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+re[0]);re=this.checkAspectRatio(re,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+re[1]).size(this.parameters.box.width+re[0],this.parameters.box.height-re[1])}};break;case"rb":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,0);if(this.parameters.box.width+re[0]>0&&this.parameters.box.height+re[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-re[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+re[0]);re=this.checkAspectRatio(re),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+re[0],this.parameters.box.height+re[1])}};break;case"lb":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,1);if(this.parameters.box.width-re[0]>0&&this.parameters.box.height+re[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+re[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-re[0]);re=this.checkAspectRatio(re,!0),this.el.move(this.parameters.box.x+re[0],this.parameters.box.y).size(this.parameters.box.width-re[0],this.parameters.box.height+re[1])}};break;case"t":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,2);if(this.parameters.box.height-re[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y+re[1]).height(this.parameters.box.height-re[1])}};break;case"r":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,0);if(this.parameters.box.width+re[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+re[0])}};break;case"b":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,0);if(this.parameters.box.height+re[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+re[1])}};break;case"l":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,1);if(this.parameters.box.width-re[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x+re[0],this.parameters.box.y).width(this.parameters.box.width-re[0])}};break;case"rot":this.calc=function(se,oe){var re=se+this.parameters.p.x,ne=oe+this.parameters.p.y,le=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),ce=Math.atan2(ne-this.parameters.box.y-this.parameters.box.height/2,re-this.parameters.box.x-this.parameters.box.width/2),ue=this.parameters.rotation+180*(ce-le)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(ue-ue%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(se,oe){var re=this.snapToGrid(se,oe,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),ne=this.el.array().valueOf();ne[this.parameters.i][0]=this.parameters.pointCoords[0]+re[0],ne[this.parameters.i][1]=this.parameters.pointCoords[1]+re[1],this.el.plot(ne)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:ee}),SVG.on(window,"touchmove.resize",function(se){te.update(se||window.event)}),SVG.on(window,"touchend.resize",function(){te.done()}),SVG.on(window,"mousemove.resize",function(se){te.update(se||window.event)}),SVG.on(window,"mouseup.resize",function(){te.done()})},de.prototype.update=function(ee){if(ee){var te=this._extractPosition(ee),ie=this.transformPoint(te.x,te.y),ae=ie.x-this.parameters.p.x,se=ie.y-this.parameters.p.y;this.lastUpdateCall=[ae,se],this.calc(ae,se),this.el.fire("resizing",{dx:ae,dy:se,event:ee})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},de.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},de.prototype.snapToGrid=function(ee,te,ie,ae){var se;return ae!==void 0?se=[(ie+ee)%this.options.snapToGrid,(ae+te)%this.options.snapToGrid]:(ie=ie==null?3:ie,se=[(this.parameters.box.x+ee+(1&ie?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+te+(2&ie?0:this.parameters.box.height))%this.options.snapToGrid]),ee<0&&(se[0]-=this.options.snapToGrid),te<0&&(se[1]-=this.options.snapToGrid),ee-=Math.abs(se[0])<this.options.snapToGrid/2?se[0]:se[0]-(ee<0?-this.options.snapToGrid:this.options.snapToGrid),te-=Math.abs(se[1])<this.options.snapToGrid/2?se[1]:se[1]-(te<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(ee,te,ie,ae)},de.prototype.constraintToBox=function(ee,te,ie,ae){var se,oe,re=this.options.constraint||{};return ae!==void 0?(se=ie,oe=ae):(se=this.parameters.box.x+(1&ie?0:this.parameters.box.width),oe=this.parameters.box.y+(2&ie?0:this.parameters.box.height)),re.minX!==void 0&&se+ee<re.minX&&(ee=re.minX-se),re.maxX!==void 0&&se+ee>re.maxX&&(ee=re.maxX-se),re.minY!==void 0&&oe+te<re.minY&&(te=re.minY-oe),re.maxY!==void 0&&oe+te>re.maxY&&(te=re.maxY-oe),[ee,te]},de.prototype.checkAspectRatio=function(ee,te){if(!this.options.saveAspectRatio)return ee;var ie=ee.slice(),ae=this.parameters.box.width/this.parameters.box.height,se=this.parameters.box.width+ee[0],oe=this.parameters.box.height-ee[1],re=se/oe;return re<ae?(ie[1]=se/ae-this.parameters.box.height,te&&(ie[1]=-ie[1])):re>ae&&(ie[0]=this.parameters.box.width-oe*ae,te&&(ie[0]=-ie[0])),ie},SVG.extend(SVG.Element,{resize:function(ee){return(this.remember("_resizeHandler")||new de(this)).init(ee||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),window.Apex===void 0&&(window.Apex={});var Yt=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new f(this.ctx),this.ctx.axes=new J(this.ctx),this.ctx.core=new Xt(this.ctx.el,this.ctx),this.ctx.config=new H({}),this.ctx.data=new O(this.ctx),this.ctx.grid=new _(this.ctx),this.ctx.graphics=new b(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new Q(this.ctx),this.ctx.events=new Z(this.ctx),this.ctx.exports=new V(this.ctx),this.ctx.localization=new $(this.ctx),this.ctx.options=new S,this.ctx.responsive=new K(this.ctx),this.ctx.series=new z(this.ctx),this.ctx.theme=new tt(this.ctx),this.ctx.formatters=new W(this.ctx),this.ctx.titleSubtitle=new et(this.ctx),this.ctx.legend=new lt(this.ctx),this.ctx.toolbar=new ht(this.ctx),this.ctx.dimensions=new ot(this.ctx),this.ctx.updateHelpers=new Et(this.ctx),this.ctx.zoomPanSelection=new ct(this.ctx),this.ctx.w.globals.tooltip=new bt(this.ctx)}}]),de}(),Ft=function(){function de(ee){e(this,de),this.ctx=ee,this.w=ee.w}return a(de,[{key:"clear",value:function(ee){var te=ee.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:te})}},{key:"killSVG",value:function(ee){ee.each(function(te,ie){this.removeClass("*"),this.off(),this.stop()},!0),ee.ungroup(),ee.clear()}},{key:"clearDomElements",value:function(ee){var te=this,ie=ee.isUpdating,ae=this.w.globals.dom.Paper.node;ae.parentNode&&ae.parentNode.parentNode&&!ie&&(ae.parentNode.parentNode.style.minHeight="unset");var se=this.w.globals.dom.baseEl;se&&this.ctx.eventList.forEach(function(re){se.removeEventListener(re,te.ctx.events.documentEvent)});var oe=this.w.globals.dom;if(this.ctx.el!==null)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(oe.Paper),oe.Paper.remove(),oe.elWrap=null,oe.elGraphical=null,oe.elAnnotations=null,oe.elLegendWrap=null,oe.baseEl=null,oe.elGridRect=null,oe.elGridRectMask=null,oe.elGridRectMarkerMask=null,oe.elForecastMask=null,oe.elNonForecastMask=null,oe.elDefs=null}}]),de}(),Rt=new WeakMap,Ht=function(){function de(ee,te){e(this,de),this.opts=te,this.ctx=this,this.w=new N(te).init(),this.el=ee,this.w.globals.cuid=p.randomId(),this.w.globals.chartID=this.w.config.chart.id?p.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Yt(this).initModules(),this.create=p.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return a(de,[{key:"render",value:function(){var ee=this;return new Promise(function(te,ie){if(ee.el!==null){Apex._chartInstances===void 0&&(Apex._chartInstances=[]),ee.w.config.chart.id&&Apex._chartInstances.push({id:ee.w.globals.chartID,group:ee.w.config.chart.group,chart:ee}),ee.setLocale(ee.w.config.chart.defaultLocale);var ae=ee.w.config.chart.events.beforeMount;if(typeof ae=="function"&&ae(ee,ee.w),ee.events.fireEvent("beforeMount",[ee,ee.w]),window.addEventListener("resize",ee.windowResizeHandler),ce=ee.el.parentNode,ue=ee.parentResizeHandler,pe=!1,fe=new ResizeObserver(function(me){pe&&ue.call(ce,me),pe=!0}),ce.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(ce.children).forEach(function(me){return fe.observe(me)}):fe.observe(ce),Rt.set(ue,fe),!ee.css){var se=ee.el.getRootNode&&ee.el.getRootNode(),oe=p.is("ShadowRoot",se),re=ee.el.ownerDocument,ne=re.getElementById("apexcharts-css");!oe&&ne||(ee.css=document.createElement("style"),ee.css.id="apexcharts-css",ee.css.textContent=`.apexcharts-canvas {
  position: relative;
  user-select: none;
  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
}


/* scrollbar is not visible by default for legend, hence forcing the visibility */
.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}


.apexcharts-inner {
  position: relative;
}

.apexcharts-text tspan {
  font-family: inherit;
}

.legend-mouseover-inactive {
  transition: 0.15s ease all;
  opacity: 0.20;
}

.apexcharts-series-collapsed {
  opacity: 0;
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: 0.15s ease all;
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, 0.96);
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, 0.8);
}

.apexcharts-tooltip * {
  font-family: inherit;
}


.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px;
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #ECEFF1;
  border-bottom: 1px solid #ddd;
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #333;
}

.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  font-weight: 600;
  margin-left: 5px;
}

.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-z-value:empty {
  display: none;
}

.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-z-value {
  font-weight: 600;
}

.apexcharts-tooltip-text-goals-label, 
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px;
}

.apexcharts-tooltip-goals-group, 
.apexcharts-tooltip-text-goals-label, 
.apexcharts-tooltip-text-goals-value {
  display: flex;
}
.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px;
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0px;
  margin-right: 10px;
  border-radius: 50%;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center;
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1;
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px;
}

.apexcharts-tooltip-series-group-hidden {
  opacity: 0;
  height: 0;
  line-height: 0;
  padding: 0 !important;
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px;
}

.apexcharts-tooltip-box, .apexcharts-custom-tooltip {
  padding: 4px 8px;
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse;
}

.apexcharts-tooltip-box>div {
  margin: 4px 0;
}

.apexcharts-tooltip-box span.value {
  font-weight: bold;
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px;
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777;
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.apexcharts-xaxistooltip {
  opacity: 0;
  padding: 9px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
  transition: 0.15s ease all;
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.apexcharts-xaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-left: -6px;
}

.apexcharts-xaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-left: -7px;
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%;
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%;
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #ECEFF1;
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90A4AE;
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #ECEFF1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90A4AE;
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
  border-top-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-yaxistooltip {
  opacity: 0;
  padding: 4px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.apexcharts-yaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-top: -6px;
}

.apexcharts-yaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-top: -7px;
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%;
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%;
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #ECEFF1;
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90A4AE;
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
  border-left-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #ECEFF1;
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90A4AE;
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
  border-right-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1;
}

.apexcharts-yaxistooltip-hidden {
  display: none;
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: 0.15s ease all;
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0;
}

.apexcharts-selection-rect {
  cursor: move;
}

.svg_select_boundingRect, .svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
}
.apexcharts-selection-rect + g .svg_select_boundingRect,
.apexcharts-selection-rect + g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden;
}

.apexcharts-selection-rect + g .svg_select_points_l,
.apexcharts-selection-rect + g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible;
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2;
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon,
.apexcharts-reset-icon,
.apexcharts-pan-icon,
.apexcharts-selection-icon,
.apexcharts-menu-icon,
.apexcharts-toolbar-custom-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6E8192;
  text-align: center;
}

.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-menu-icon svg {
  fill: #6E8192;
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(0.76)
}

.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
  fill: #f3f4f5;
}

.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
  fill: #008FFB;
}

.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-menu-icon:hover svg {
  fill: #333;
}

.apexcharts-selection-icon,
.apexcharts-menu-icon {
  position: relative;
}

.apexcharts-reset-icon {
  margin-left: 5px;
}

.apexcharts-zoom-icon,
.apexcharts-reset-icon,
.apexcharts-menu-icon {
  transform: scale(0.85);
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(0.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px;
}

.apexcharts-pan-icon {
  transform: scale(0.62);
  position: relative;
  left: 1px;
  top: 0px;
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6E8192;
  stroke-width: 2;
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008FFB;
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333;
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0px 6px 2px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: 0.15s ease all;
  pointer-events: none;
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: 0.15s ease all;
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer;
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee;
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

@media screen and (min-width: 768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1;
  }
}

.apexcharts-datalabel.apexcharts-element-hidden {
  opacity: 0;
}

.apexcharts-pie-label,
.apexcharts-datalabels,
.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value {
  cursor: default;
  pointer-events: none;
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.apexcharts-canvas .apexcharts-element-hidden {
  opacity: 0;
}

.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-gridline,
.apexcharts-annotation-rect,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-area-series .apexcharts-area,
.apexcharts-line,
.apexcharts-zoom-rect,
.apexcharts-toolbar svg,
.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-radar-series path,
.apexcharts-radar-series polygon {
  pointer-events: none;
}


/* markers */

.apexcharts-marker {
  transition: 0.15s ease all;
}

@keyframes opaque {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


/* Resize generated styles */

@keyframes resizeanim {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
}

.resize-triggers,
.resize-triggers>div,
.contract-trigger:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.resize-triggers>div {
  background: #eee;
  overflow: auto;
}

.contract-trigger:before {
  width: 200%;
  height: 200%;
}`,oe?se.prepend(ee.css):re.head.appendChild(ee.css))}var le=ee.create(ee.w.config.series,{});if(!le)return te(ee);ee.mount(le).then(function(){typeof ee.w.config.chart.events.mounted=="function"&&ee.w.config.chart.events.mounted(ee,ee.w),ee.events.fireEvent("mounted",[ee,ee.w]),te(le)}).catch(function(me){ie(me)})}else ie(new Error("Element not found"));var ce,ue,pe,fe})}},{key:"create",value:function(ee,te){var ie=this.w;new Yt(this).initModules();var ae=this.w.globals;if(ae.noData=!1,ae.animationEnded=!1,this.responsive.checkResponsiveConfig(te),ie.config.xaxis.convertedCatToNumeric&&new R(ie.config).convertCatToNumericXaxis(ie.config,this.ctx),this.el===null||(this.core.setupElements(),ie.config.chart.type==="treemap"&&(ie.config.grid.show=!1,ie.config.yaxis[0].show=!1),ae.svgWidth===0))return ae.animationEnded=!0,null;var se=y.checkComboSeries(ee);ae.comboCharts=se.comboCharts,ae.comboBarCount=se.comboBarCount;var oe=ee.every(function(ue){return ue.data&&ue.data.length===0});(ee.length===0||oe)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(ee),this.theme.init(),new P(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),ae.noData&&ae.collapsedSeries.length!==ae.series.length&&!ie.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),ae.axisCharts&&(this.core.coreCalculations(),ie.config.xaxis.type!=="category"&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=ie.globals.minX,this.ctx.toolbar.maxX=ie.globals.maxX),this.formatters.heatmapLabelFormatters(),this.dimensions.plotCoords();var re=this.core.xySettings();this.grid.createGridMask();var ne=this.core.plotChartType(ee,re),le=new T(this);le.bringForward(),ie.config.dataLabels.background.enabled&&le.dataLabelsBackground(),this.core.shiftGraphPosition();var ce={plot:{left:ie.globals.translateX,top:ie.globals.translateY,width:ie.globals.gridWidth,height:ie.globals.gridHeight}};return{elGraph:ne,xyRatios:re,elInner:ie.globals.dom.elGraphical,dimensions:ce}}},{key:"mount",value:function(){var ee=this,te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,ie=this,ae=ie.w;return new Promise(function(se,oe){if(ie.el===null)return oe(new Error("Not enough data to display or target element not found"));(te===null||ae.globals.allSeriesCollapsed)&&ie.series.handleNoData(),ae.config.chart.type!=="treemap"&&ie.axes.drawAxis(ae.config.chart.type,te.xyRatios),ie.grid=new _(ie);var re=ie.grid.drawGrid();ie.annotations=new C(ie),ie.annotations.drawImageAnnos(),ie.annotations.drawTextAnnos(),ae.config.grid.position==="back"&&re&&ae.globals.dom.elGraphical.add(re.el);var ne=new G(ee.ctx),le=new q(ee.ctx);if(re!==null&&(ne.xAxisLabelCorrections(re.xAxisTickWidth),le.setYAxisTextAlignments(),ae.config.yaxis.map(function(pe,fe){ae.globals.ignoreYAxisIndexes.indexOf(fe)===-1&&le.yAxisTitleRotate(fe,pe.opposite)})),ae.config.annotations.position==="back"&&(ae.globals.dom.Paper.add(ae.globals.dom.elAnnotations),ie.annotations.drawAxesAnnotations()),Array.isArray(te.elGraph))for(var ce=0;ce<te.elGraph.length;ce++)ae.globals.dom.elGraphical.add(te.elGraph[ce]);else ae.globals.dom.elGraphical.add(te.elGraph);if(ae.config.grid.position==="front"&&re&&ae.globals.dom.elGraphical.add(re.el),ae.config.xaxis.crosshairs.position==="front"&&ie.crosshairs.drawXCrosshairs(),ae.config.yaxis[0].crosshairs.position==="front"&&ie.crosshairs.drawYCrosshairs(),ae.config.annotations.position==="front"&&(ae.globals.dom.Paper.add(ae.globals.dom.elAnnotations),ie.annotations.drawAxesAnnotations()),!ae.globals.noData){if(ae.config.tooltip.enabled&&!ae.globals.noData&&ie.w.globals.tooltip.drawTooltip(te.xyRatios),ae.globals.axisCharts&&(ae.globals.isXNumeric||ae.config.xaxis.convertedCatToNumeric||ae.globals.isRangeBar))(ae.config.chart.zoom.enabled||ae.config.chart.selection&&ae.config.chart.selection.enabled||ae.config.chart.pan&&ae.config.chart.pan.enabled)&&ie.zoomPanSelection.init({xyRatios:te.xyRatios});else{var ue=ae.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach(function(pe){ue[pe]=!1})}ae.config.chart.toolbar.show&&!ae.globals.allSeriesCollapsed&&ie.toolbar.createToolbar()}ae.globals.memory.methodsToExec.length>0&&ae.globals.memory.methodsToExec.forEach(function(pe){pe.method(pe.params,!1,pe.context)}),ae.globals.axisCharts||ae.globals.noData||ie.core.resizeNonAxisCharts(),se(ie)})}},{key:"destroy",value:function(){var ee,te;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,ee=this.parentResizeHandler,(te=Rt.get(ee))&&(te.disconnect(),Rt.delete(ee));var ie=this.w.config.chart.id;ie&&Apex._chartInstances.forEach(function(ae,se){ae.id===p.escapeString(ie)&&Apex._chartInstances.splice(se,1)}),new Ft(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(ee){var te=this,ie=arguments.length>1&&arguments[1]!==void 0&&arguments[1],ae=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],se=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],oe=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],re=this.w;return re.globals.selection=void 0,ee.series&&(this.series.resetSeries(!1,!0,!1),ee.series.length&&ee.series[0].data&&(ee.series=ee.series.map(function(ne,le){return te.updateHelpers._extendSeries(ne,le)})),this.updateHelpers.revertDefaultAxisMinMax()),ee.xaxis&&(ee=this.updateHelpers.forceXAxisUpdate(ee)),ee.yaxis&&(ee=this.updateHelpers.forceYAxisUpdate(ee)),re.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),ee.theme&&(ee=this.theme.updateThemeOptions(ee)),this.updateHelpers._updateOptions(ee,ie,ae,se,oe)}},{key:"updateSeries",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(ee,te,ie)}},{key:"appendSeries",value:function(ee){var te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],ae=this.w.config.series.slice();return ae.push(ee),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(ae,te,ie)}},{key:"appendData",value:function(ee){var te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=this;ie.w.globals.dataChanged=!0,ie.series.getPreviousPaths();for(var ae=ie.w.config.series.slice(),se=0;se<ae.length;se++)if(ee[se]!==null&&ee[se]!==void 0)for(var oe=0;oe<ee[se].data.length;oe++)ae[se].data.push(ee[se].data[oe]);return ie.w.config.series=ae,te&&(ie.w.globals.initialSeries=p.clone(ie.w.config.series)),this.update()}},{key:"update",value:function(ee){var te=this;return new Promise(function(ie,ae){new Ft(te.ctx).clear({isUpdating:!0});var se=te.create(te.w.config.series,ee);if(!se)return ie(te);te.mount(se).then(function(){typeof te.w.config.chart.events.updated=="function"&&te.w.config.chart.events.updated(te,te.w),te.events.fireEvent("updated",[te,te.w]),te.w.globals.isDirty=!0,ie(te)}).catch(function(oe){ae(oe)})})}},{key:"getSyncedCharts",value:function(){var ee=this.getGroupedCharts(),te=[this];return ee.length&&(te=[],ee.forEach(function(ie){te.push(ie)})),te}},{key:"getGroupedCharts",value:function(){var ee=this;return Apex._chartInstances.filter(function(te){if(te.group)return!0}).map(function(te){return ee.w.config.chart.group===te.group?te.chart:ee})}},{key:"toggleSeries",value:function(ee){return this.series.toggleSeries(ee)}},{key:"highlightSeriesOnLegendHover",value:function(ee,te){return this.series.toggleSeriesOnHover(ee,te)}},{key:"showSeries",value:function(ee){this.series.showSeries(ee)}},{key:"hideSeries",value:function(ee){this.series.hideSeries(ee)}},{key:"resetSeries",value:function(){var ee=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];this.series.resetSeries(ee,te)}},{key:"addEventListener",value:function(ee,te){this.events.addEventListener(ee,te)}},{key:"removeEventListener",value:function(ee,te){this.events.removeEventListener(ee,te)}},{key:"addXaxisAnnotation",value:function(ee){var te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,ae=this;ie&&(ae=ie),ae.annotations.addXaxisAnnotationExternal(ee,te,ae)}},{key:"addYaxisAnnotation",value:function(ee){var te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,ae=this;ie&&(ae=ie),ae.annotations.addYaxisAnnotationExternal(ee,te,ae)}},{key:"addPointAnnotation",value:function(ee){var te=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,ae=this;ie&&(ae=ie),ae.annotations.addPointAnnotationExternal(ee,te,ae)}},{key:"clearAnnotations",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,te=this;ee&&(te=ee),te.annotations.clearAnnotations(te)}},{key:"removeAnnotation",value:function(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,ie=this;te&&(ie=te),ie.annotations.removeAnnotation(ie,ee)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(ee,te){return this.coreUtils.getSeriesTotalsXRange(ee,te)}},{key:"getHighestValueInSeries",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,te=new U(this.ctx);return te.getMinYMaxY(ee).highestY}},{key:"getLowestValueInSeries",value:function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,te=new U(this.ctx);return te.getMinYMaxY(ee).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(ee,te){return this.updateHelpers.toggleDataPointSelection(ee,te)}},{key:"zoomX",value:function(ee,te){this.ctx.toolbar.zoomUpdateOptions(ee,te)}},{key:"setLocale",value:function(ee){this.localization.setCurrentLocaleValues(ee)}},{key:"dataURI",value:function(ee){return new V(this.ctx).dataURI(ee)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var ee=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout(function(){ee.w.globals.resized=!0,ee.w.globals.dataChanged=!1,ee.ctx.update()},150)}},{key:"_windowResizeHandler",value:function(){var ee=this.w.config.chart.redrawOnWindowResize;typeof ee=="function"&&(ee=ee()),ee&&this._windowResize()}}],[{key:"getChartByID",value:function(ee){var te=p.escapeString(ee),ie=Apex._chartInstances.filter(function(ae){return ae.id===te})[0];return ie&&ie.chart}},{key:"initOnLoad",value:function(){for(var ee=document.querySelectorAll("[data-apexcharts]"),te=0;te<ee.length;te++)new de(ee[te],JSON.parse(ee[te].getAttribute("data-options"))).render()}},{key:"exec",value:function(ee,te){var ie=this.getChartByID(ee);if(ie){ie.w.globals.isExecCalled=!0;var ae=null;if(ie.publicMethods.indexOf(te)!==-1){for(var se=arguments.length,oe=new Array(se>2?se-2:0),re=2;re<se;re++)oe[re-2]=arguments[re];ae=ie[te].apply(ie,oe)}return ae}}},{key:"merge",value:function(ee,te){return p.extend(ee,te)}}]),de}();class ApexChartsWrapper extends PolymerElement{static get template(){return html`
            <style include="apex-charts-style"></style>
            <slot></slot>
        `}static get is(){return"apex-charts-wrapper"}static get properties(){return{annotations:{type:Object},chart:{type:Object},colors:{type:Object},dataLabels:{type:Object},fill:{type:Object},grid:{type:Object},labels:{type:Object},legend:{type:Object},markers:{type:Object},noData:{type:Object},plotOptions:{type:Object},responsive:{type:Object},series:{type:Object},states:{type:Object},stroke:{type:Object},subtitle:{type:Object},theme:{type:Object},chartTitle:{type:Object},tooltip:{type:Object},xaxis:{type:Object},yaxis:{type:Object},debug:{type:Boolean},width:{type:String},height:{type:String}}}ready(){super.ready(),this.color=require("onecolor");const de=document.createElement("div");this.appendChild(de),this.updateConfig(),this.chartComponent=new Ht(de,this.config),this.beginRender()}async beginRender(){try{await this.chartComponent.render()}catch(de){console.error("An exception occurred during the rendering of the chart with the following configuration:"),console.error(this.config),console.error(de)}}updateConfig(){let de;ShadyCSS?de=ShadyCSS.getComputedStyleValue(this,"--apex-charts-primary-color"):de=getComputedStyle(this).getPropertyValue("--apex-charts-primary-color");var ee;if(ShadyCSS?ee=ShadyCSS.getComputedStyleValue(this,"--apex-charts-background-color"):ee=getComputedStyle(this).getPropertyValue("--apex-charts-background-color"),this.config={},this.annotations&&(this.config.annotations=JSON.parse(this.annotations)),this.chart&&(this.config.chart=JSON.parse(this.chart),this.config.chart&&this.config.chart.events&&(this.config.chart.events.animationEnd&&(this.config.chart.events.animationEnd=this.evalFunction(this.config.chart.events.animationEnd)),this.config.chart.events.beforeMount&&(this.config.chart.events.beforeMount=this.evalFunction(this.config.chart.events.beforeMount)),this.config.chart.events.mounted&&(this.config.chart.events.mounted=this.evalFunction(this.config.chart.events.mounted)),this.config.chart.events.updated&&(this.config.chart.events.updated=this.evalFunction(this.config.chart.events.updated)),this.config.chart.events.click&&(this.config.chart.events.click=this.evalFunction(this.config.chart.events.click)),this.config.chart.events.mouseMove&&(this.config.chart.events.mouseMove=this.evalFunction(this.config.chart.events.mouseMove)),this.config.chart.events.legendClick&&(this.config.chart.events.legendClick=this.evalFunction(this.config.chart.events.legendClick)),this.config.chart.events.markerClick&&(this.config.chart.events.markerClick=this.evalFunction(this.config.chart.events.markerClick)),this.config.chart.events.selection&&(this.config.chart.events.selection=this.evalFunction(this.config.chart.events.selection)),this.config.chart.events.dataPointSelection&&(this.config.chart.events.dataPointSelection=this.evalFunction(this.config.chart.events.dataPointSelection)),this.config.chart.events.dataPointMouseEnter&&(this.config.chart.events.dataPointMouseEnter=this.evalFunction(this.config.chart.events.dataPointMouseEnter)),this.config.chart.events.dataPointMouseLeave&&(this.config.chart.events.dataPointMouseLeave=this.evalFunction(this.config.chart.events.dataPointMouseLeave)),this.config.chart.events.beforeZoom&&(this.config.chart.events.beforeZoom=this.evalFunction(this.config.chart.events.beforeZoom)),this.config.chart.events.beforeResetZoom&&(this.config.chart.events.beforeResetZoom=this.evalFunction(this.config.chart.events.beforeResetZoom)),this.config.chart.events.zoomed&&(this.config.chart.events.zoomed=this.evalFunction(this.config.chart.events.zoomed)),this.config.chart.events.scrolled&&(this.config.chart.events.scrolled=this.evalFunction(this.config.chart.events.scrolled)))),this.series&&(this.config.series=JSON.parse(this.series)),this.labels&&(this.config.labels=this.labels,this.config.labels.formatter&&(this.config.labels.formatter=this.evalFunction(this.config.labels.formatter))),this.colors&&(this.config.colors=JSON.parse(this.colors)),this.dataLabels&&(this.config.dataLabels=JSON.parse(this.dataLabels),this.config.dataLabels.formatter&&(this.config.dataLabels.formatter=this.evalFunction(this.config.dataLabels.formatter))),this.fill&&(this.config.fill=JSON.parse(this.fill)),this.grid&&(this.config.grid=JSON.parse(this.grid)),this.legend&&(this.config.legend=JSON.parse(this.legend),this.config.legend.formatter&&(this.config.legend.formatter=this.evalFunction(this.config.legend.formatter))),this.markers&&(this.config.markers=JSON.parse(this.markers)),this.noData&&(this.config.noData=this.noData),this.plotOptions&&(this.config.plotOptions=JSON.parse(this.plotOptions)),this.responsive&&(this.config.responsive=JSON.parse(this.responsive)),this.states&&(this.config.states=JSON.parse(this.states)),this.stroke&&(this.config.stroke=JSON.parse(this.stroke)),this.subtitle&&(this.config.subtitle=JSON.parse(this.subtitle)),this.theme?this.config.theme=JSON.parse(this.theme):(!this.config.fill||!this.config.fill.type||!Array.isArray(this.config.fill.type)||this.config.fill.type[0]!=="gradient")&&(ee&&this.color(ee)&&(this.config.theme={mode:this.color(ee).lightness()>.5?"light":"dark"}),!this.colors&&de&&this.color(de)&&(this.config.theme.monochrome={enabled:!0,color:this.color(de).hex(),shadeTo:"light",shadeIntensity:.65})),this.chartTitle&&(this.config.title=JSON.parse(this.chartTitle)),this.tooltip&&(this.config.tooltip=JSON.parse(this.tooltip),this.config.tooltip.x&&this.config.tooltip.x.formatter&&(this.config.tooltip.x.formatter=this.evalFunction(this.config.tooltip.x.formatter)),this.config.tooltip.y&&this.config.tooltip.y.formatter&&(this.config.tooltip.y.formatter=this.evalFunction(this.config.tooltip.y.formatter)),this.config.tooltip.z&&this.config.tooltip.z.formatter&&(this.config.tooltip.z.formatter=this.evalFunction(this.config.tooltip.z.formatter)),this.config.tooltip.custom&&(this.config.tooltip.custom=this.evalFunction(this.config.tooltip.custom))),this.xaxis&&(this.config.xaxis=JSON.parse(this.xaxis),this.config.xaxis.labels&&this.config.xaxis.labels.formatter&&(this.config.xaxis.labels.formatter=this.evalFunction(this.config.xaxis.labels.formatter)),this.config.xaxis.title&&this.config.xaxis.title.formatter&&(this.config.xaxis.title.formatter=this.evalFunction(this.config.xaxis.title.formatter))),this.yaxis){this.config.yaxis=JSON.parse(this.yaxis);for(let te=0;te<this.config.yaxis.length;te++)this.config.yaxis[te].labels&&this.config.yaxis[te].labels.formatter&&(this.config.yaxis[te].labels.formatter=this.evalFunction(this.config.yaxis[te].labels.formatter)),this.config.yaxis[te].title&&this.config.yaxis[te].title.formatter&&(this.config.yaxis[te].title.formatter=this.evalFunction(this.config.yaxis[te].title.formatter))}this.config.chart||(this.config.chart={}),this.width&&(this.config.chart.width=this.width),this.height&&(this.config.chart.height=this.height),!this.config.chart.background&&ee&&this.color(ee)&&(this.config.chart.background=ee),this.config.stroke||(this.config.stroke={}),this.config.chart&&this.config.chart.type==="radar"&&!this.config.plotOptions&&ee&&this.color(ee)&&(this.config.plotOptions={radar:{polygons:{fill:{colors:[this.color(ee).hex()]}}}}),this.config.plotoptions&&this.config.plotoptions.radialbar&&this.config.plotoptions.radialbar.datalabels&&this.config.plotoptions.radialbar.datalabels.value&&this.config.plotoptions.radialbar.datalabels.value.formatter&&(this.config.plotoptions.radialbar.datalabels.value.formatter=this.evalFunction(this.config.plotoptions.radialbar.datalabels.value.formatter)),this.config.plotoptions&&this.config.plotoptions.radialbar&&this.config.plotoptions.radialbar.datalabels&&this.config.plotoptions.radialbar.datalabels.total&&this.config.plotoptions.radialbar.datalabels.total.formatter&&(this.config.plotoptions.radialbar.datalabels.total.formatter=this.evalFunction(this.config.plotoptions.radialbar.datalabels.total.formatter)),this.config.plotoptions&&this.config.plotoptions.pie&&this.config.plotoptions.pie.datalabels&&this.config.plotoptions.pie.datalabels.total&&this.config.plotoptions.pie.datalabels.total.formatter&&(this.config.plotoptions.pie.datalabels.total.formatter=this.evalFunction(this.config.plotoptions.pie.datalabels.total.formatter)),this.config.plotoptions&&this.config.plotoptions.pie&&this.config.plotoptions.pie.datalabels&&this.config.plotoptions.pie.datalabels.value&&this.config.plotoptions.pie.datalabels.value.formatter&&(this.config.plotoptions.pie.datalabels.value.formatter=this.evalFunction(this.config.plotoptions.pie.datalabels.value.formatter))}evalFunction(string){return eval("("+string+")")}updateData(){this.chartComponent&&this.chartComponent.updateSeries(JSON.parse(this.series)),this.debug&&console.log(this.chartComponent)}render(){this.chartComponent&&(this.updateConfig(),this.chartComponent.render())}dataURI(){if(this.chartComponent)return this.updateConfig(),this.chartComponent.dataURI()}toggleSeries(de){if(this.chartComponent)return this.updateConfig(),this.chartComponent.toggleSeries(de)}hideSeries(de){if(this.chartComponent)return this.updateConfig(),this.chartComponent.hideSeries(de)}showSeries(de){if(this.chartComponent)return this.updateConfig(),this.chartComponent.showSeries(de)}resetSeries(de,ee){if(this.chartComponent)return this.updateConfig(),this.chartComponent.resetSeries(de,ee)}}customElements.define(ApexChartsWrapper.is,ApexChartsWrapper);(function(){const de=function(ee){return window.Vaadin.Flow.tryCatchWrapper(ee,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:ee=>de(function(te){if(te.$connector)return;te.$connector={};const ie={};let ae={},se="";const oe=new window.Vaadin.ComboBoxPlaceholder,re=Math.max(te.pageSize*2,500),ne=(()=>{let me="",ve=!1;return{needsDataCommunicatorReset:()=>ve=!0,getLastFilterSentToServer:()=>me,requestData:(Ae,he,ge)=>{const xe=he-Ae,we=ge.filter;te.$server.setRequestedRange(Ae,xe,we),me=we,ve&&(te.$server.resetDataCommunicator(),ve=!1)}}})(),le=(me=Object.keys(ie))=>{me.forEach(ve=>{ie[ve]([],te.size),delete ie[ve];const be=parseInt(ve)*te.pageSize,ye=be+te.pageSize,_e=Math.min(ye,te.filteredItems.length);for(let Ae=be;Ae<_e;Ae++)te.filteredItems[Ae]=oe})};te.dataProvider=function(me,ve){if(me.pageSize!=te.pageSize)throw"Invalid pageSize";if(te._clientSideFilter)if(ae[0]){fe(ae[0],ve);return}else me.filter="";if(me.filter!==se){ae={},se=me.filter,this._debouncer=Debouncer.debounce(this._debouncer,timeOut.after(500),()=>{if(ne.getLastFilterSentToServer()===me.filter&&ne.needsDataCommunicatorReset(),me.filter!==se)throw new Error("Expected params.filter to be '"+se+"' but was '"+me.filter+"'");le(),te.dataProvider(me,ve)});return}if(ae[me.page])pe(me.page,ve);else{ie[me.page]=ve;const ye=Object.keys(ie).map(he=>parseInt(he)),_e=Math.min(...ye),Ae=Math.max(...ye);if(ye.length*me.pageSize>re)me.page===_e?le([String(Ae)]):le([String(_e)]),te.dataProvider(me,ve);else if(Ae-_e+1!==ye.length)le();else{const he=me.pageSize*_e,ge=me.pageSize*(Ae+1);!this._debouncer||!this._debouncer.isActive()?ne.requestData(he,ge,me):this._debouncer=Debouncer.debounce(this._debouncer,timeOut.after(200),()=>ne.requestData(he,ge,me))}}},te.$connector.clear=de((me,ve)=>{const be=Math.floor(me/te.pageSize),ye=Math.ceil(ve/te.pageSize);for(let _e=be;_e<be+ye;_e++)delete ae[_e]}),te.$connector.filter=de(function(me,ve){return ve=ve?ve.toString().toLowerCase():"",te._getItemLabel(me).toString().toLowerCase().indexOf(ve)>-1}),te.$connector.set=de(function(me,ve,be){if(be!=ne.getLastFilterSentToServer())return;if(me%te.pageSize!=0)throw"Got new data to index "+me+" which is not aligned with the page size of "+te.pageSize;if(me===0&&ve.length===0&&ie[0]){ae[0]=[];return}const ye=me/te.pageSize,_e=Math.ceil(ve.length/te.pageSize);for(let Ae=0;Ae<_e;Ae++){let he=ye+Ae,ge=ve.slice(Ae*te.pageSize,(Ae+1)*te.pageSize);ae[he]=ge}}),te.$connector.updateData=de(function(me){for(let ve=0;ve<me.length;ve++){let be=me[ve];for(let ye=0;ye<te.filteredItems.length;ye++)if(te.filteredItems[ye].key===be.key){te.set("filteredItems."+ye,be);break}}}),te.$connector.updateSize=de(function(me){te._clientSideFilter||(te.size=me)}),te.$connector.reset=de(function(){le(),ae={},te.clearCache()}),te.$connector.confirm=de(function(me,ve){if(ve!=ne.getLastFilterSentToServer())return;let be=Object.getOwnPropertyNames(ie);for(let ye=0;ye<be.length;ye++){let _e=be[ye];ae[_e]&&pe(_e,ie[_e])}te.$server.confirmUpdate(me)}),te.addEventListener("opened-changed",de(()=>{const me=te.$.dropdown._scroller.__isItemSelected;te.$.dropdown._scroller.__isItemSelected=(ve,be,ye)=>{let _e=me.call(te,ve,be,ye);return te._selectedKey&&(te.filteredItems.indexOf(be)>-1?delete te._selectedKey:_e=_e||ve.key===te._selectedKey),_e}}),{once:!0}),te.$connector.enableClientValidation=de(function(me){te.$?(me?ue(te):ce(te),te.validate()):setTimeout(function(){te.$connector.enableClientValidation(me)},10)});const ce=de(function(me){typeof me.$checkValidity=="undefined"&&(me.$checkValidity=me.checkValidity,me.checkValidity=function(){return!te.invalid}),typeof me.$validate=="undefined"&&(me.$validate=me.validate,me.validate=function(){return!(te.focusElement.invalid=te.invalid)})}),ue=de(function(me){me.$checkValidity&&(me.checkValidity=me.$checkValidity,delete me.$checkValidity),me.$validate&&(me.validate=me.$validate,delete me.$validate)}),pe=de(function(me,ve){let be=ae[me];te._clientSideFilter?fe(be,ve):(delete ae[me],ve(be,te.size))}),fe=de(function(me,ve){let be=me;te.filter&&(be=me.filter(ye=>te.$connector.filter(ye,te.filter))),ve(be,be.length)});te.addEventListener("custom-value-set",de(me=>me.preventDefault()))})(ee)}})();window.Vaadin.ComboBoxPlaceholder=ComboBoxPlaceholder;window.Vaadin.Flow.ironListConnector={initLazy:function(de){if(de.$connector)return;const ee=20;let te=[0,0];de.$connector={},de.$connector.placeholderItem={__placeholder:!0};const ie=function(){let re=de._virtualStart,ne=de._virtualEnd,le=Math.max(0,re-ee),ce=Math.min(ne+ee,de.items.length);if(te[0]!=le||te[1]!=ce){te=[le,ce];const ue=1+ce-le;de.$server.setRequestedRange(le,ue)}};let ae;const se=function(){ae=Debouncer.debounce(ae,timeOut.after(10),ie)},oe=de._assignModels;de._assignModels=function(){const re=[],ne=de._virtualStart,le=Math.min(de.items.length,de._physicalCount);for(let ce=0;ce<le;ce++)de.items[ne+ce]===void 0&&(re.push(ce),de.items[ne+ce]=de.$connector.placeholderItem);oe.apply(de,arguments);for(let ce=0;ce<re.length;ce++)delete de.items[ne+re[ce]];se()},de.items=[],de.$connector.set=function(re,ne){for(let le=0;le<ne.length;le++){const ce=re+le;de.items[ce]=ne[le]}de._render()},de.$connector.updateData=function(re){const ne=de.items,le={};let ce=re.length;for(let ue=0;ue<re.length;ue++){const pe=re[ue];le[pe.key]=pe}for(let ue=0;ue<ne.length;ue++){const pe=ne[ue],fe=le[pe.key];if(fe&&(de.items[ue]=fe,de.notifyPath("items."+ue),ce--,ce==0))break}},de.$connector.clear=function(re,ne){for(let le=0;le<ne;le++){const ce=re+le;delete de.items[ce],de.notifyPath("items."+ce)}},de.$connector.updateSize=function(re){const ne=re-de.items.length;if(ne>0)de.items.length=re,de.notifySplices("items",[{index:re-ne,removed:[],addedCount:ne,object:de.items,type:"splice"}]);else if(ne<0){const le=de.items.slice(re,de.items.length);de.items.splice(re),de.notifySplices("items",[{index:re,removed:le,addedCount:0,object:de.items,type:"splice"}])}},de.$connector.setPlaceholderItem=function(re){re||(re={}),re.__placeholder=!0,de.$connector.placeholderItem=re}}};const $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild($_documentContainer$4.content);(function(){const de=function(ee){return window.Vaadin.Flow.tryCatchWrapper(ee,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(ee,te,ie)=>de(function(ae,se,oe){const re=new Intl.DateTimeFormat(oe,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});ae.items=se.map(ne=>ne.time?Object.assign(ne,{time:re.format(new Date(ne.time))}):ne)})(ee,te,ie)}})();(function(){const de=function(ee){return window.Vaadin.Flow.tryCatchWrapper(ee,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:ee=>de(function(te){const ie=de(function(){for(let ae=0;ae<te.childElementCount;ae++){const se=te.children[ae];if(se.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return se}});te.$connector||(te.$connector={},te.renderer=de(function(ae){const se=ie();se&&(ae.firstChild&&ae.removeChild(ae.firstChild),ae.appendChild(se))}))})(ee)}})();(function(){const de=function(te){return window.Vaadin.Flow.tryCatchWrapper(te,"Vaadin Time Picker")};function ee(te,ie,ae=0){te()?ie():setTimeout(()=>ee(te,ie,200),ae)}window.Vaadin.Flow.timepickerConnector={initLazy:te=>de(function(ie){if(ie.$connector)return;ie.$connector={};const ae=function(me,ve){const be=ve.toLocaleTimeString(me),ye=/[^\d\u0660-\u0669]+$/g;let _e=be.match(ye);return _e||(_e=be.match(/^[^\d\u0660-\u0669]+/g)),_e&&(_e=_e[0].trim()),_e},se=new Date("August 19, 1975 23:15:30"),oe=new Date("August 19, 1975 05:15:30"),re=function(me){return ae(me,se)},ne=function(me){return ae(me,oe)},le={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},ce=function(me){return me.replace(/[\u0660-\u0669]/g,function(ve){const be="\\u0"+ve.charCodeAt(0).toString(16);return le[be]})},ue=function(me){return parseInt(ce(me))},pe=function(me){return me=ce(me),me.length===1?me+="00":me.length===2&&(me+="0"),parseInt(me)},fe=/[[\.][\d\u0660-\u0669]{1,3}$/;ie.$connector.setLocale=de(function(me){let ve;ie.value&&ie.value!==""&&(ve=ie.i18n.parseTime(ie.value));try{se.toLocaleTimeString(me)}catch{throw me="en-US",new Error("vaadin-time-picker: The locale "+me+" is not supported, falling back to default locale setting(en-US).")}const be=re(me),ye=ne(me);let _e=se.toLocaleTimeString(me);be&&_e.startsWith(be)&&(_e=_e.replace(be,""));const Ae=_e.match(/[^\u0660-\u0669\s\d]/),he=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+Ae+")?","g"),ge=function(){return ie.step&&ie.step<60},xe=function(){return ie.step&&ie.step<1};let we,Ce;const Se=function(){return(!Ce||we!==ie.step)&&(Ce={hour:"numeric",minute:"numeric",second:ge()?"numeric":void 0},we=ie.step),Ce},ke=function(Ie,Te){if(xe()){let Le=Ie;if(Ie.endsWith(ye)?Le=Ie.replace(" "+ye,""):Ie.endsWith(be)&&(Le=Ie.replace(" "+be,"")),Te){let ze=Te<10?"0":"";ze+=Te<100?"0":"",ze+=Te,Le+="."+ze}else Le+=".000";return Ie.endsWith(ye)?Le=Le+" "+ye:Ie.endsWith(be)&&(Le=Le+" "+be),Le}return Ie};let Pe,Ee;ie.i18n={formatTime:de(function(Ie){if(Ie){let Te=new Date;Te.setHours(Ie.hours),Te.setMinutes(Ie.minutes),Te.setSeconds(Ie.seconds!==void 0?Ie.seconds:0);let Le=Te.toLocaleTimeString(me,Se());return Le=ke(Le,Ie.milliseconds),Le}}),parseTime:de(function(Ie){if(Ie&&Ie===Pe&&Ee)return Ee;if(Ie){const Te=Ie.search(be),Le=Ie.search(ye);let ze=Ie.replace(ye,"").replace(be,"").trim();he.lastIndex=0;let Me=he.exec(ze);if(Me){Me=ue(Me[0].replace(Ae,"")),Te!==Le&&(Me===12&&Le!==-1?Me=0:Me+=Te!==-1&&Me!==12?12:0);const Fe=he.exec(ze),De=Fe&&he.exec(ze);let Be=De&&xe()&&fe.exec(ze);return Be&&Be.index<=De.index&&(Be=void 0),Ee=Me!==void 0&&{hours:Me,minutes:Fe?ue(Fe[0].replace(Ae,"")):0,seconds:De?ue(De[0].replace(Ae,"")):0,milliseconds:Fe&&De&&Be?pe(Be[0].replace(".","")):0},Pe=Ie,Ee}}})},ve&&ee(()=>ie.$,()=>{const Ie=ie.i18n.formatTime(ve);ie.inputElement.value!==Ie&&(ie.inputElement.value=Ie,ie.$.comboBox.value=Ie)})})})(te)}})();(function(){let de;customElements.whenDefined("vaadin-text-field").then(()=>{class ee extends customElements.get("vaadin-text-field"){static get template(){return de||(de=super.template.cloneNode(!0),de.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),de}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(ie,ae){this._enabledCharPattern="[\\d-+"+ie+"]",this.value&&ae&&(this.value=this.value.split(ae).join(ie))}}customElements.define(ee.is,ee)})})();window.Vaadin.Flow.virtualListConnector={initLazy:function(de){if(de.$connector)return;const ee=20;let te=[0,0];de.$connector={},de.$connector.placeholderItem={__placeholder:!0};const ie=function(){const se=[...de.children].filter(ce=>"__virtualListIndex"in ce).map(ce=>ce.__virtualListIndex),oe=Math.min(...se),re=Math.max(...se);let ne=Math.max(0,oe-ee),le=Math.min(re+ee,de.items.length);if(te[0]!=ne||te[1]!=le){te=[ne,le];const ce=1+le-ne;de.$server.setRequestedRange(ne,ce)}},ae=function(){de.__requestDebounce=Debouncer.debounce(de.__requestDebounce,timeOut.after(50),ie)};requestAnimationFrame(()=>ie),de.patchVirtualListRenderer=function(){if(!de.renderer||de.renderer.__virtualListConnectorPatched)return;const se=de.renderer,oe=(re,ne,le)=>{re.__virtualListIndex=le.index,le.item===void 0?se.call(ne,re,ne,{...le,item:ne.$connector.placeholderItem}):se.call(ne,re,ne,le),ae()};oe.__virtualListConnectorPatched=!0,oe.__rendererId=se.__rendererId,de.renderer=oe},de._createPropertyObserver("renderer","patchVirtualListRenderer",!0),de.patchVirtualListRenderer(),de.items=[],de.$connector.set=function(se,oe){de.items.splice(se,oe.length,...oe),de.items=[...de.items]},de.$connector.clear=function(se,oe){const re=Math.min(oe,de.items.length-se);de.$connector.set(se,[...Array(re)])},de.$connector.updateData=function(se){const oe=se.reduce((re,ne)=>(re[ne.key]=ne,re),{});de.items=de.items.map(re=>oe[re.key]||re)},de.$connector.updateSize=function(se){const oe=se-de.items.length;oe>0?de.items=[...de.items,...Array(oe)]:oe<0&&(de.items=de.items.slice(0,se))},de.$connector.setPlaceholderItem=function(se={}){se.__placeholder=!0,de.$connector.placeholderItem=se}}};registerStyles("vaadin-form-item",i$1`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class FormItem extends ThemableMixin(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null;const ee=FormItem._uniqueLabelId=1+FormItem._uniqueLabelId||0;this.__labelId=`label-${this.localName}-${ee}`}_getFieldAriaTarget(ee){return ee.ariaTarget||ee}__linkLabelToField(ee){addValueToAttribute(this._getFieldAriaTarget(ee),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(ee){removeValueFromAttribute(this._getFieldAriaTarget(ee),"aria-labelledby",this.__labelId)}__onLabelClick(){const ee=this.__fieldNode;ee&&(ee.focus(),ee.click())}__getValidateFunction(ee){return ee.validate||ee.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode.id="",this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const ee=this.$.labelSlot.assignedElements()[0];ee&&(this.__labelNode=ee,this.__labelNode.id=this.__labelId,this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const ee=this.$.contentSlot.assignedElements();ee.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const te=ee.find(ie=>!!this.__getValidateFunction(ie));te&&(this.__fieldNode=te,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(ee){ee?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const ee=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",ee===!1)}}customElements.define(FormItem.is,FormItem);registerStyles("vaadin-form-layout",i$1`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class FormLayout extends ResizeMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const ee={attributes:!0};this.__mutationObserver=new MutationObserver(te=>{te.forEach(ie=>{ie.type==="attributes"&&(ie.attributeName==="colspan"||ie.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new FlattenedNodesObserver(this,te=>{const ie=this._getObservableNodes(te.addedNodes),ae=this._getObservableNodes(te.removedNodes);ie.forEach(se=>{this.__mutationObserver.observe(se,ee)}),(ie.length>0||ae.length>0)&&this._updateLayout()})}_getObservableNodes(ee){const te=["template","style","dom-repeat","dom-if"];return Array.from(ee).filter(ie=>ie.nodeType===Node.ELEMENT_NODE&&te.indexOf(ie.localName.toLowerCase())===-1)}_naturalNumberOrOne(ee){return typeof ee=="number"&&ee>=1&&ee<1/0?Math.floor(ee):1}_isValidCSSLength(ee){return ee==="inherit"||ee==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${ee}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(ee,te){try{if(!Array.isArray(ee))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(ee.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');ee.forEach(ie=>{if(this._naturalNumberOrOne(ie.columns)!==ie.columns)throw new Error(`Invalid 'columns' value of ${ie.columns}, a natural number is required.`);if(ie.minWidth!==void 0&&!this._isValidCSSLength(ie.minWidth))throw new Error(`Invalid 'minWidth' value of ${ie.minWidth}, a valid CSS length required.`);if(ie.labelsPosition!==void 0&&["aside","top"].indexOf(ie.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${ie.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(ie){te&&te!==ee?(console.warn(`${ie.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=te):(console.warn(`${ie.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(ee){ee.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let ee;const te="background-position";this.responsiveSteps.forEach(ie=>{this.$.layout.style.setProperty(te,ie.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(te))<=this.offsetWidth&&(ee=ie)}),this.$.layout.style.removeProperty(te),ee&&(this._columnCount=ee.columns,this._labelsOnTop=ee.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(ee={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(ee).forEach(([te,ie])=>{this.style.setProperty(te,ie)}),this._updateLayout()}_updateLayout(){const ee=getComputedStyle(this),te=ee.getPropertyValue("--vaadin-form-layout-column-spacing"),ie=ee.direction,ae="margin-"+(ie==="ltr"?"left":"right"),se="margin-"+(ie==="ltr"?"right":"left"),oe=this.offsetWidth;let re=0;Array.from(this.children).filter(ne=>ne.localName==="br"||getComputedStyle(ne).display!=="none").forEach((ne,le,ce)=>{if(ne.localName==="br"){re=0;return}let ue;ue=this._naturalNumberOrOne(parseFloat(ne.getAttribute("colspan"))),ue=Math.min(ue,this._columnCount);const pe=ue/this._columnCount;ne.style.width=`calc(${pe*99.9}% - ${1-pe} * ${te})`,re+ue>this._columnCount&&(re=0),re===0?ne.style.setProperty(ae,"0px"):ne.style.removeProperty(ae);const fe=le+1,me=fe<ce.length&&ce[fe].localName==="br";if(re+ue===this._columnCount)ne.style.setProperty(se,"0px");else if(me){const ve=(this._columnCount-re-ue)/this._columnCount;ne.style.setProperty(se,`calc(${ve*oe}px + ${ve} * ${te})`)}else ne.style.removeProperty(se);re=(re+ue)%this._columnCount,ne.localName==="vaadin-form-item"&&(this._labelsOnTop?ne.setAttribute("label-position","top"):ne.removeAttribute("label-position"))})}_onResize(){this._selectResponsiveStep()}}customElements.define(FormLayout.is,FormLayout);registerStyles("vaadin-grid-tree-toggle",i$1`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild($_documentContainer$3.content);class GridTreeToggle extends ThemableMixin(DirMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",ee=>this._onClick(ee))}_onClick(ee){this.leaf||isFocusable(ee.target)||(ee.preventDefault(),this.expanded=!this.expanded)}_levelChanged(ee){const te=Number(ee).toString();this.style.setProperty("---level",te)}}customElements.define(GridTreeToggle.is,GridTreeToggle);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const numberField=i$1`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;registerStyles("vaadin-number-field",[inputFieldShared,fieldButton,numberField],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const stylesMap=new WeakMap;function getRootStyles(de){return stylesMap.has(de)||stylesMap.set(de,new Set),stylesMap.get(de)}function insertStyles(de,ee){const te=document.createElement("style");te.textContent=de,ee===document?document.head.appendChild(te):ee.insertBefore(te,ee.firstChild)}const SlotStylesMixin=dedupingMixin(de=>class extends de{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const te=this.getRootNode(),ie=getRootStyles(te);this.slotStyles.forEach(ae=>{ie.has(ae)||(insertStyles(ae,te),ie.add(ae))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-number-field",inputFieldShared$1,{moduleId:"vaadin-number-field-styles"});class NumberField extends InputFieldMixin(SlotStylesMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-number-field"}static get template(){return html`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,observer:"_minChanged"},max:{type:Number,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const ee=this.localName;return[`
        ${ee} input[type="number"]::-webkit-outer-spin-button,
        ${ee} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${ee} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${ee}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${ee}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.min=this.min,this.inputElement.max=this.max,this.__applyStep(this.step))}ready(){super.ready(),this.addController(new InputController(this,ee=>{this._setInputElement(ee),this._setFocusElement(ee),this.stateTarget=ee,this.ariaTarget=ee})),this.addController(new LabelledInputController(this.inputElement,this._labelController))}_decreaseButtonTouchend(ee){ee.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(ee){ee.preventDefault(),this._increaseValue()}_constraintsChanged(ee,te,ie,ae){if(!this.invalid)return;const se=oe=>!oe&&oe!==0;!se(te)||!se(ie)?this.validate():ee||(this.invalid=!1)}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(ee){if(this.disabled||this.readonly)return;let te=parseFloat(this.value);this.value?te<this.min?(ee=0,te=this.min):te>this.max&&(ee=0,te=this.max):this.min==0&&ee<0||this.max==0&&ee>0||this.max==0&&this.min==0?(ee=0,te=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?te=0:this.min>0?(te=this.min,this.max<0&&ee<0&&(te=this.max),ee=0):this.max<0&&(te=this.max,ee<0?ee=0:this._getIncrement(1,te-this.step)>this.max?te-=2*this.step:te-=this.step);const ie=this._getIncrement(ee,te);(!this.value||ee==0||this._incrementIsInsideTheLimits(ee,te))&&this._setValue(ie)}_setValue(ee){this.value=this.inputElement.value=String(parseFloat(ee)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(ee,te){let ie=this.step||1,ae=this.min||0;const se=Math.max(this._getMultiplier(te),this._getMultiplier(ie),this._getMultiplier(ae));ie*=se,te=Math.round(te*se),ae*=se;const oe=(te-ae)%ie;return ee>0?(te-oe+ie)/se:ee<0?(te-(oe||ie))/se:te/se}_getDecimalCount(ee){const te=String(ee),ie=te.indexOf(".");return ie===-1?1:te.length-ie-1}_getMultiplier(ee){if(!isNaN(ee))return 10**this._getDecimalCount(ee)}_incrementIsInsideTheLimits(ee,te){return ee<0?this.min==null||this._getIncrement(ee,te)>=this.min:ee>0?this.max==null||this._getIncrement(ee,te)<=this.max:this._getIncrement(ee,te)<=this.max&&this._getIncrement(ee,te)>=this.min}_allowed(ee){const te=ee*(this.step||1),ie=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(te,ie)}__applyStep(ee){this.inputElement&&(this.inputElement.step=this.__validateByStep?ee:"any")}_stepChanged(ee){this.__validateByStep=this.__stepChangedCalled||this.getAttribute("step")!==null,this.__applyStep(ee),this.__stepChangedCalled=!0,this.setAttribute("step",ee)}_minChanged(ee){this.inputElement&&(this.inputElement.min=ee)}_maxChanged(ee){this.inputElement&&(this.inputElement.max=ee)}_valueChanged(ee,te){ee&&isNaN(parseFloat(ee))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,te)}_onKeyDown(ee){ee.key==="ArrowUp"?(ee.preventDefault(),this._increaseValue()):ee.key==="ArrowDown"&&(ee.preventDefault(),this._decreaseValue()),super._onKeyDown(ee)}checkValidity(){return this.inputElement&&(this.required||this.min!==void 0||this.max!==void 0||this.__validateByStep)?this.inputElement.checkValidity():!this.invalid}}customElements.define(NumberField.is,NumberField);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class IntegerField extends NumberField{static get is(){return"vaadin-integer-field"}static get properties(){return{_enabledCharPattern:{value:"[-+\\d]"}}}_valueChanged(ee,te){if(ee!==""&&!this.__isInteger(ee)){console.warn(`Trying to set non-integer value "${ee}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(ee,te)}_stepChanged(ee,te){if(!this.__hasOnlyDigits(ee)){console.warn(`Trying to set invalid step size "${ee}", which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1.`),this.step=1;return}super._stepChanged(ee,te)}__isInteger(ee){return/^(-\d)?\d*$/.test(String(ee))}__hasOnlyDigits(ee){return/^\d*$/.test(String(ee))}}customElements.define(IntegerField.is,IntegerField);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const passwordFieldButton=i$1`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;registerStyles("vaadin-password-field-button",[button,passwordFieldButton],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const passwordField=i$1`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;registerStyles("vaadin-password-field",[inputFieldShared,passwordField],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class PasswordFieldButton extends Button{static get is(){return"vaadin-password-field-button"}static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(PasswordFieldButton.is,PasswordFieldButton);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ownTemplate=html`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let memoizedTemplate$1;class PasswordField extends SlotStylesMixin(TextField){static get is(){return"vaadin-password-field"}static get template(){if(!memoizedTemplate$1){memoizedTemplate$1=super.template.cloneNode(!0);const ee=ownTemplate.content.querySelector('[part="reveal-button"]');memoizedTemplate$1.content.querySelector('[part="input-field"]').appendChild(ee)}return memoizedTemplate$1}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){return[`
        ${this.localName} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new SlotController(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(ee,te)=>{te.disabled=ee.disabled,te.addEventListener("click",ee.__boundRevealButtonClick),te.addEventListener("touchend",ee.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(ee){return ee.target===this.inputElement||ee.target===this._revealNode}_shouldRemoveFocus(ee){return!(ee.relatedTarget===this._revealNode||ee.relatedTarget===this.inputElement&&ee.target===this._revealNode)}_setFocused(ee){if(super._setFocused(ee),!ee)this._setPasswordVisible(!1);else{const te=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!te)}}__updateAriaLabel(ee){ee.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",ee.reveal)}__i18nChanged(ee){this.__updateAriaLabel(ee.base)}_revealButtonHiddenChanged(ee){this._toggleRevealHidden(ee)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(ee){ee.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(ee){this._revealNode&&(ee?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(ee){this._revealNode&&this._revealNode.setAttribute("aria-pressed",ee?"true":"false")}_passwordVisibleChanged(ee){this._setType(ee?"text":"password"),this._updateToggleState(ee)}_disabledChanged(ee,te){super._disabledChanged(ee,te),this._revealNode&&(this._revealNode.disabled=ee)}}customElements.define(PasswordField.is,PasswordField);const loginFormWrapper$1=i$1`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  #forgotPasswordButton {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;registerStyles("vaadin-login-form-wrapper",[color,typography,loginFormWrapper$1],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const LoginMixin=de=>class extends de{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(te){te.stopPropagation();const{detail:ie,composed:ae,cancelable:se,bubbles:oe}=te;this.dispatchEvent(new CustomEvent(te.type,{bubbles:oe,cancelable:se,composed:ae,detail:ie}))||te.preventDefault()}};/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class LoginFormWrapper extends LoginMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(LoginFormWrapper.is,LoginFormWrapper);registerStyles("vaadin-login-form",i$1`
    vaadin-button[part='vaadin-login-submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class LoginForm extends LoginMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        [part='vaadin-login-native-form'] * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper
        theme$="[[theme]]"
        part="vaadin-login-native-form-wrapper"
        action="{{action}}"
        disabled="{{disabled}}"
        error="{{error}}"
        no-forgot-password="{{noForgotPassword}}"
        i18n="{{i18n}}"
        on-login="_retargetEvent"
        on-forgot-password="_retargetEvent"
      >
        <form part="vaadin-login-native-form" method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled$="[[disabled]]"
            >[[i18n.form.submit]]</vaadin-button
          >
        </form>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(ee){this.appendChild(ee)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!(this.__isValid(this.$.vaadinLoginUsername)&&this.__isValid(this.$.vaadinLoginPassword)))return;this.error=!1,this.disabled=!0;const ee={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},te=this.dispatchEvent(new CustomEvent("login",ee));if(this.action&&te){const ie=document.querySelector("meta[name=_csrf_parameter]"),ae=document.querySelector("meta[name=_csrf]");ie&&ae&&(this.$.csrf.name=ie.content,this.$.csrf.value=ae.content),this.querySelector('[part="vaadin-login-native-form"]').submit()}}__isValid(ee){return ee.validate&&ee.validate()||ee.checkValidity&&ee.checkValidity()}_isEnterKey(ee){return ee.key==="Enter"||ee.keyCode===13}_handleInputKeydown(ee){if(this._isEnterKey(ee)){const{currentTarget:te}=ee,ie=te.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(te)&&(this.__isValid(ie)?this.submit():ie.focus())}}_handleInputKeyup(ee){const te=ee.key==="Tab"||ee.keyCode===9,ie=ee.currentTarget;te&&ie&&ie.select&&(ie.select(),setTimeout(()=>ie.setSelectionRange(0,9999)))}}customElements.define(LoginForm.is,LoginForm);const loginOverlayWrapper=i$1`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;registerStyles("vaadin-login-overlay-wrapper",[color,typography,loginOverlayWrapper],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const loginFormWrapper=i$1`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;registerStyles("vaadin-login-form-wrapper",[color,typography,loginFormWrapper],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<dom-module id="vaadin-login-overlay-wrapper-template">
  <template>
    <style>
      [part="overlay"] {
        outline: none;
      }

      [part="card"] {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      [part="brand"] {
        box-sizing: border-box;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      [part="brand"] h1 {
        color: inherit;
        margin: 0;
      }
    </style>
    <section part="card">
      <div part="brand">
        <slot name="title">
          <h1 part="title">[[title]]</h1>
        </slot>
        <p part="description">[[description]]</p>
      </div>
      <div part="form">
        <slot></slot>
      </div>
    </section>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);let memoizedTemplate;class LoginOverlayWrapper extends OverlayElement{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!memoizedTemplate){memoizedTemplate=super.template.cloneNode(!0);const ee=DomModule.import(this.is+"-template","template"),te=ee.content.querySelector("[part=card]"),ie=ee.content.querySelector("style"),ae=memoizedTemplate.content.querySelector("#content");ae.replaceChild(te,ae.children[0]),ae.appendChild(ie)}return memoizedTemplate}}customElements.define(LoginOverlayWrapper.is,LoginOverlayWrapper);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class LoginOverlay extends LoginMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="{{action}}"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="{{noForgotPassword}}"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(ee){const te=ee.base;!te||(this.title=te.title,this.description=te.description)}_preventClosingLogin(ee){ee.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(ee){const te=Array.from(ee).map(ie=>this.$.vaadinLoginOverlayWrapper.appendChild(ie));return()=>{for(;te.length>0;)this.appendChild(te.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(LoginOverlay.is,LoginOverlay);registerStyles("vaadin-message-input",i$1`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const textArea=i$1`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;registerStyles("vaadin-text-area",[inputFieldShared,textArea],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TextAreaController extends SlotController{constructor(ee,te){super(ee,"textarea",()=>document.createElement("textarea"),(ie,ae)=>{const se=ie.getAttribute("value");se&&(ae.value=se);const oe=ie.getAttribute("name");oe&&ae.setAttribute("name",oe);const re=TextAreaController._uniqueTextAreaId=1+TextAreaController._uniqueTextAreaId||0;ie._textareaId=`${ie.localName}-${re}`,ae.id=ie._textareaId,typeof te=="function"&&te(ae)})}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-text-area",inputFieldShared$1,{moduleId:"vaadin-text-area-styles"});class TextArea extends ResizeMixin(PatternMixin(InputFieldMixin(ThemableMixin(ElementMixin(PolymerElement))))){static get is(){return"vaadin-text-area"}static get template(){return html`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",ee=>{const te=this._inputField.scrollTop;this._inputField.scrollTop+=ee.deltaY,te!==this._inputField.scrollTop&&(ee.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new TextAreaController(this,ee=>{this._setInputElement(ee),this._setFocusElement(ee),this.stateTarget=ee,this.ariaTarget=ee})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd)}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",this._inputField.scrollTop+"px")}_onAnimationEnd(ee){ee.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(ee,te){super._valueChanged(ee,te),this._updateHeight()}_updateHeight(){const ee=this.inputElement,te=this._inputField;if(!ee||!te)return;const ie=te.scrollTop,ae=this.value?this.value.length:0;if(this._oldValueLength>=ae){const oe=getComputedStyle(te).height,re=getComputedStyle(ee).width;te.style.display="block",te.style.height=oe,ee.style.maxWidth=re,ee.style.height="auto"}this._oldValueLength=ae;const se=ee.scrollHeight;se>ee.clientHeight&&(ee.style.height=se+"px"),ee.style.removeProperty("max-width"),te.style.removeProperty("display"),te.style.removeProperty("height"),te.scrollTop=ie}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const ee=this.inputElement.value.match(this.pattern);return ee?ee[0]===ee.input:!1}catch{return!0}}}customElements.define(TextArea.is,TextArea);registerStyles("vaadin-message-input-text-area",i$1`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-message-input-text-area",i$1`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class MessageInputTextArea extends TextArea{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(ee){super._inputElementChanged(ee),ee&&(ee.removeAttribute("aria-labelledby"),ee.setAttribute("rows",1),ee.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(ee){ee.key==="Enter"&&!ee.shiftKey&&(ee.preventDefault(),ee.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(ee)}__updateAriaLabel(ee){ee?this.inputElement.setAttribute("aria-label",ee):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(ee){!this.inputElement||this.__updateAriaLabel(ee)}}customElements.define(MessageInputTextArea.is,MessageInputTextArea);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-message-input-button",i$1`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class MessageInputButton extends Button{static get is(){return"vaadin-message-input-button"}}customElements.define(MessageInputButton.is,MessageInputButton);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class MessageInput extends ElementMixin(ThemableMixin(PolymerElement)){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return html`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(MessageInput.is,MessageInput);registerStyles("vaadin-message-avatar",i$1`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});registerStyles("vaadin-message",i$1`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});registerStyles("vaadin-message-list",i$1``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-message-avatar",i$1`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class MessageAvatar extends Avatar{static get is(){return"vaadin-message-avatar"}}customElements.define(MessageAvatar.is,MessageAvatar);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Message extends FocusMixin(ElementMixin(ThemableMixin(PolymerElement))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return html`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(Message.is,Message);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class MessageList extends ElementMixin(ThemableMixin(PolymerElement)){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:function(){return[]},observer:"_itemsChanged"}}}static get template(){return html`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",ee=>this._onKeydown(ee))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(ee,te){const ie=this._getIndexOfFocusableElement();if(ee&&ee.length){const ae=!te||ee.length>te.length,se=this.scrollHeight<this.clientHeight+this.scrollTop+50;microTask$1.run(()=>{this._setTabIndexesByIndex(ie),ae&&se&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(ee){if(ee.metaKey||ee.ctrlKey)return;const te=ee.composedPath()[0];let ie=this._messages.indexOf(te);switch(ee.key){case"ArrowUp":ie-=1;break;case"ArrowDown":ie+=1;break;case"Home":ie=0;break;case"End":ie=this._messages.length-1;break;default:return}ie<0&&(ie=this._messages.length-1),ie>this._messages.length-1&&(ie=0),this._focus(ie),ee.preventDefault()}_focus(ee){this._messages[ee].focus()}_handleFocusEvent(ee){const te=ee.composedPath().find(ie=>ie instanceof Message);this._setTabIndexesByMessage(te)}_setTabIndexesByIndex(ee){const te=this._messages[ee]||this._messages[0];this._setTabIndexesByMessage(te)}_setTabIndexesByMessage(ee){this._messages.forEach(te=>te.tabIndex=te===ee?0:-1)}_getIndexOfFocusableElement(){const ee=this._messages.findIndex(te=>te.tabIndex==0);return ee!=-1?ee:0}}customElements.define(MessageList.is,MessageList);registerStyles("vaadin-notification-card",i$1`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class NotificationContainer extends ThemableMixin(ElementMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(ee){ee?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),isIOS&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const ee=window.innerHeight,ie=window.innerWidth>ee,ae=document.documentElement.clientHeight;ie&&ae>ee?this.style.bottom=ae-ee+"px":this.style.bottom="0"}_onVaadinOverlayClose(ee){const te=ee.detail.sourceEvent;te&&te.composedPath().indexOf(this)>=0&&ee.preventDefault()}}class NotificationCard extends ThemableMixin(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class Notification extends ThemePropertyMixin(ElementMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-notification-card theme$="[[theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),processTemplates(this)}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(ee,te,ie){if(!ie)return;const ae=this._oldRenderer!==ee;this._oldRenderer=ee,ae&&(ie.innerHTML="",delete ie._$litPart$),te&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return Notification._container||(Notification._container=document.createElement("vaadin-notification-container"),document.body.appendChild(Notification._container)),Notification._container}_openedChanged(ee){ee?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const ee=()=>{this._card.removeEventListener("animationend",ee),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",ee),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const ee=getComputedStyle(this._card).getPropertyValue("animation-name");if(ee&&ee!="none"){const te=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",te)};this._card.addEventListener("animationend",te)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(ee,te){te&&(clearTimeout(this._durationTimeoutId),ee>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),ee)))}static show(ee,te){return n$1(ee)?Notification._createAndShowNotification(ie=>{B$1(ee,ie)},te):Notification._createAndShowNotification(ie=>{ie.innerText=ee},te)}static _createAndShowNotification(ee,te){const ie=document.createElement(Notification.is);return te&&Number.isFinite(te.duration)&&(ie.duration=te.duration),te&&te.position&&(ie.position=te.position),te&&te.theme&&ie.setAttribute("theme",te.theme),ie.renderer=ee,document.body.appendChild(ie),ie.opened=!0,ie.addEventListener("opened-changed",ae=>{ae.detail.value||ie.remove()}),ie}}customElements.define(NotificationContainer.is,NotificationContainer);customElements.define(NotificationCard.is,NotificationCard);customElements.define(Notification.is,Notification);registerStyles("vaadin-progress-bar",i$1`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild($_documentContainer$1.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ProgressMixin=de=>class extends de{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(te,ie,ae){const se=this._normalizeValue(te,ie,ae);this.style.setProperty("--vaadin-progress-value",se)}_valueChanged(te){this.setAttribute("aria-valuenow",te)}_minChanged(te){this.setAttribute("aria-valuemin",te)}_maxChanged(te){this.setAttribute("aria-valuemax",te)}_normalizeValue(te,ie,ae){let se;return!te&&te!=0?se=0:ie>=ae?se=1:(se=(te-ie)/(ae-ie),se=Math.min(Math.max(se,0),1)),se}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ProgressBar extends ElementMixin(ThemableMixin(ProgressMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(ProgressBar.is,ProgressBar);registerStyles("vaadin-radio-button",i$1`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='radio'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      /* Needed to align the radio-button nicely on the baseline */
      content: '\\2003';
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class RadioButton extends LabelMixin(CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement))))))){static get is(){return"vaadin-radio-button"}static get template(){return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-radio-button-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div class="vaadin-radio-button-wrapper">
          <div part="radio"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new InputController(this,ee=>{this._setInputElement(ee),this._setFocusElement(ee),this.stateTarget=ee,this.ariaTarget=ee}),this.addController(this._inputController),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this.addController(new SlotTargetController(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(RadioButton.is,RadioButton);const radioGroup=i$1`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;registerStyles("vaadin-radio-group",[requiredField,helper,radioGroup],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class RadioGroup extends FieldMixin(FocusMixin(DisabledMixin(KeyboardMixin(ElementMixin(ThemableMixin(PolymerElement)))))){static get is(){return"vaadin-radio-group"}static get template(){return html`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup");const ee=RadioGroup._uniqueRadioGroupId=1+RadioGroup._uniqueRadioGroupId||0;this._fieldName=`${this.localName}-${ee}`,this._observer=new FlattenedNodesObserver(this,({addedNodes:te,removedNodes:ie})=>{this.__filterRadioButtons(te).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(ie).forEach(this.__unregisterRadioButton)})}__filterRadioButtons(ee){return ee.filter(te=>te instanceof RadioButton)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(ee=>ee.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this.theme!=="vertical"}_onKeyDown(ee){super._onKeyDown(ee);const te=ee.composedPath().find(ie=>ie instanceof RadioButton);["ArrowLeft","ArrowUp"].includes(ee.key)&&(ee.preventDefault(),this.__selectNextRadioButton(te)),["ArrowRight","ArrowDown"].includes(ee.key)&&(ee.preventDefault(),this.__selectPrevRadioButton(te))}__selectNextRadioButton(ee){const te=this.__radioButtons.indexOf(ee);this.__selectIncRadioButton(te,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(ee){const te=this.__radioButtons.indexOf(ee);this.__selectIncRadioButton(te,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(ee,te){const ie=(this.__radioButtons.length+ee+te)%this.__radioButtons.length,ae=this.__radioButtons[ie];ae.disabled?this.__selectIncRadioButton(ie,te):(ae.focusElement.focus(),ae.focusElement.click())}__registerRadioButton(ee){ee.name=this._fieldName,ee.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(ee.disabled=!0),ee.checked&&this.__selectRadioButton(ee)}__unregisterRadioButton(ee){ee.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),ee.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(ee){ee.target.checked&&this.__selectRadioButton(ee.target)}__valueChanged(ee,te){if(!te&&!ee)return;if(te&&!ee){this.__selectRadioButton(null),this.removeAttribute("has-value");return}const ie=this.__radioButtons.find(ae=>ae.value===ee);ie?(this.__selectRadioButton(ie),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${ee}" was not found.`)}__readonlyChanged(ee,te){!ee&&te===void 0||te!==ee&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(ee,te){super._disabledChanged(ee,te),!(!ee&&te===void 0)&&te!==ee&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(ee){return!this.contains(ee.relatedTarget)}_setFocused(ee){super._setFocused(ee),ee||this.validate()}__selectRadioButton(ee){ee?this.value=ee.value:this.value="",this.__radioButtons.forEach(te=>{te.checked=te===ee}),this.validate(),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(ee=>{this.readonly?ee.disabled=ee!==this.__selectedRadioButton:ee.disabled=this.disabled})}}customElements.define(RadioGroup.is,RadioGroup);const scroller=i$1`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;registerStyles("vaadin-scroller",scroller,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Scroller extends FocusMixin(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(ee){return ee.target===this}}customElements.define(Scroller.is,Scroller);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const select=i$1`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --lumo-button-size: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;registerStyles("vaadin-select",[inputFieldShared,select],{moduleId:"lumo-select"});registerStyles("vaadin-select-value-button",i$1`
    :host {
      padding: 0 0.25em;
      --_lumo-selected-item-padding: 0.5em;
    }

    :host::before,
    :host::after {
      display: none;
    }

    :host([focus-ring]) {
      box-shadow: none;
    }

    ::slotted(:not([slot])) {
      min-height: var(--lumo-button-size);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(:not([slot]):hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const selectOverlay=i$1`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;registerStyles("vaadin-select-overlay",[menuOverlay,selectOverlay],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class SelectItem extends Item{static get is(){return"vaadin-select-item"}}customElements.define(SelectItem.is,SelectItem);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class SelectListBox extends ListBox{static get is(){return"vaadin-select-list-box"}}customElements.define(SelectListBox.is,SelectListBox);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-select-overlay",i$1`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class SelectOverlay extends PositionMixin(OverlayElement){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const ee=this._getMenuElement();this.owner._assignMenuElement(ee)}}_getMenuElement(){return Array.from(this.children).find(ee=>ee.localName!=="style")}}customElements.define(SelectOverlay.is,SelectOverlay);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-select-value-button",i$1`
    :host {
      margin: 0;
      min-width: 0;
      width: 0;
      height: auto;
    }

    ::slotted(:not([slot])) {
      padding-left: 0;
      padding-right: 0;
      flex: auto;
    }

    /* placeholder styles */
    ::slotted(:not([slot]):not([selected])) {
      line-height: 1;
    }

    /* TODO: unsupported selector */
    .vaadin-button-container {
      text-align: inherit;
    }

    [part='label'] {
      width: 100%;
      padding: 0;
      line-height: inherit;
    }
  `,{moduleId:"vaadin-select-value-button-styles"});class SelectValueButton extends Button{static get is(){return"vaadin-select-value-button"}}customElements.define(SelectValueButton.is,SelectValueButton);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-select",[fieldShared,inputFieldContainer],{moduleId:"vaadin-select-styles"});class Select extends DelegateFocusMixin(FieldMixin(SlotMixin(ElementMixin(ThemableMixin(PolymerElement))))){static get is(){return"vaadin-select"}static get template(){return html`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
          background-color: transparent;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[theme]]"
      ></vaadin-select-overlay>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get observers(){return["_updateAriaExpanded(opened)","_updateAriaRequired(required)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get slots(){return{...super.slots,value:()=>{const ee=document.createElement("vaadin-select-value-button");return ee.setAttribute("aria-haspopup","listbox"),ee}}}get _valueButton(){return this._getDirectSlotChild("value")}constructor(){super();const ee=Select._uniqueSelectId=1+Select._uniqueSelectId||0;this._fieldId=`${this.localName}-${ee}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this._valueButton&&(this._valueButton.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaRequired(this.required),this._updateAriaExpanded(this.opened),this._setFocusElement(this._valueButton),this.ariaTarget=this._valueButton,this._valueButton.addEventListener("keydown",this._boundOnKeyDown))}disconnectedCallback(){super.disconnectedCallback(),this._valueButton&&this._valueButton.removeEventListener("keydown",this._boundOnKeyDown),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this.addController(new MediaQueryController(this._phoneMediaQuery,ee=>{this._phone=ee})),processTemplates(this)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_rendererChanged(ee,te){!te||(te.setProperties({owner:this,renderer:ee||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(ee,te){(ee||te)&&this.requestContentUpdate()}_assignMenuElement(ee){ee&&ee!==this.__lastMenuElement&&(this._menuElement=ee,this.__initMenuItems(ee),ee.addEventListener("items-changed",()=>{this.__initMenuItems(ee)}),ee.addEventListener("selected-changed",()=>this.__updateValueButton()),ee.addEventListener("keydown",te=>this._onKeyDownInside(te),!0),ee.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),ee.setAttribute("role","listbox"),this.__lastMenuElement=ee)}__initMenuItems(ee){ee.items&&(this._items=ee.items,this._items.forEach(te=>te.setAttribute("role","option")))}_valueChanged(ee,te){this.toggleAttribute("has-value",Boolean(ee)),!(ee===""&&te===void 0)&&this.validate()}_onClick(){this.opened=!this.readonly}_onKeyDown(ee){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(ee.key))ee.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(ee.key)&&ee.key.length===1){const te=this._menuElement.selected,ie=te!==void 0?te:-1,ae=this._menuElement._searchKey(ie,ee.key);ae>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=ae)}}}_onKeyDownInside(ee){/^(Tab)$/.test(ee.key)&&(this.opened=!1)}_openedChanged(ee,te){if(ee){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",this._inputContainer.offsetWidth+"px");const ie=this.hasAttribute("focus-ring");this._openedWithFocusRing=ie,ie&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else te&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(ee){this._valueButton&&this._valueButton.setAttribute("aria-expanded",ee?"true":"false")}_updateAriaRequired(ee){this._valueButton&&this._valueButton.setAttribute("aria-required",ee?"true":"false")}_updateAriaLive(ee){this._valueButton&&(ee?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(ee){let te;const ie=ee.getAttribute("label");ie?te=this.__createItemElement({label:ie}):te=ee.cloneNode(!0),te._sourceItem=ee,this.__appendValueItemElement(te),te.selected=!0}__createItemElement(ee){const te=document.createElement(ee.component||"vaadin-select-item");return ee.label&&(te.textContent=ee.label),ee.value&&(te.value=ee.value),ee.disabled&&(te.disabled=ee.disabled),te}__appendValueItemElement(ee){ee.removeAttribute("tabindex"),ee.removeAttribute("role"),ee.setAttribute("id",this._fieldId),this._valueButton.appendChild(ee)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const ee=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),ee)this.__attachSelectedItem(ee),this._valueChanging||(this._selectedChanging=!0,this.value=ee.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const te=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(te),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(ee,te){te&&(this._menuElement.selected=te.reduce((ie,ae,se)=>ie===void 0&&ae.value===ee?se:ie,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging))}_shouldRemoveFocus(){return!this.opened}_setFocused(ee){super._setFocused(ee),ee||this.validate()}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}__defaultRenderer(ee,te){if(!this.items||this.items.length===0){ee.textContent="";return}let ie=ee.firstElementChild;ie||(ie=document.createElement("vaadin-select-list-box"),ee.appendChild(ie)),ie.textContent="",this.items.forEach(ae=>{ie.appendChild(this.__createItemElement(ae))})}}customElements.define(Select.is,Select);registerStyles("vaadin-split-layout",i$1`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class SplitLayout extends ElementMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new FlattenedNodesObserver(this,te=>{this._cleanupNodes(te.removedNodes),this._processChildren()});const ee=this.$.splitter;addListener(ee,"track",this._onHandleTrack.bind(this)),addListener(ee,"down",this._setPointerEventsNone.bind(this)),addListener(ee,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(ee){ee.forEach(te=>{te.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((ee,te)=>{te===0?(this._primaryChild=ee,ee.setAttribute("slot","primary")):te==1?(this._secondaryChild=ee,ee.setAttribute("slot","secondary")):ee.removeAttribute("slot")})}_setFlexBasis(ee,te,ie){te=Math.max(0,Math.min(te,ie)),te===0&&(te=1e-6),ee.style.flex="1 1 "+te+"px"}_setPointerEventsNone(ee){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",ee.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(ee){if(!this._primaryChild||!this._secondaryChild)return;var te=this.orientation==="vertical"?"height":"width";if(ee.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[te]-this.$.splitter.getBoundingClientRect()[te],primary:this._primaryChild.getBoundingClientRect()[te],secondary:this._secondaryChild.getBoundingClientRect()[te]};return}var ie=this.orientation==="vertical"?ee.detail.dy:ee.detail.dx;const se=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-ie:ie;this._setFlexBasis(this._primaryChild,this._startSize.primary+se,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-se,this._startSize.container),ee.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(SplitLayout.is,SplitLayout);registerStyles("vaadin-tab",i$1`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tab extends ElementMixin(ThemableMixin(ItemMixin(PolymerElement))){static get template(){return html`<slot></slot>`}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(ee){const te=this.hasAttribute("active");if(super._onKeyUp(ee),te){const ie=this.querySelector("a");ie&&ie.click()}}}customElements.define(Tab.is,Tab);registerStyles("vaadin-tabs",i$1`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tabs extends ResizeMixin(ElementMixin(ListMixin(ThemableMixin(PolymerElement)))){static get template(){return html`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),afterNextRender(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(ee){this.__itemsResizeObserver.disconnect(),(ee||[]).forEach(te=>{this.__itemsResizeObserver.observe(te)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const ee=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),te=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let ie=ee>0?"start":"";ie+=ee+this._scrollOffset<te?" end":"",this.__direction==1&&(ie=ie.replace(/start|end/gi,ae=>ae==="start"?"end":"start")),ie?this.setAttribute("overflow",ie.trim()):this.removeAttribute("overflow")}}customElements.define(Tabs.is,Tabs);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild($_documentContainer.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class UploadFile extends FocusMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",ee=>{ee.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",ee=>{ee.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(ee){return ee.composedPath()[0]===this}_fileAborted(ee){ee&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(ee){return ee/100}_fireFileEvent(ee){return ee.preventDefault(),this.dispatchEvent(new CustomEvent(ee.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(ee,te){const ie=Boolean(ee);this.hasAttribute(te)!==ie&&(ie?this.setAttribute(te,""):this.removeAttribute(te))}}customElements.define(UploadFile.is,UploadFile);registerStyles("vaadin-upload",i$1`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const uploadFile=i$1`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;registerStyles("vaadin-upload-file",[fieldButton,uploadFile],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Upload extends ElementMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:isTouch},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(ee){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(ee);const te=this.i18n.units.sizeBase||1e3,ie=~~(Math.log(ee)/Math.log(te)),ae=Math.max(0,Math.min(3,ie-1));return parseFloat((ee/te**ie).toFixed(ae))+" "+this.i18n.units.size[ie]}_splitTimeByUnits(ee){const te=[60,60,24,1/0],ie=[0];for(var ae=0;ae<te.length&&ee>0;ae++)ie[ae]=ee%te[ae],ee=Math.floor(ee/te[ae]);return ie}_formatTime(ee,te){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(ee,te);for(;te.length<3;)te.push(0);return te.reverse().map(ie=>(ie<10?"0":"")+ie).join(":")}_formatFileProgress(ee){return ee.totalStr+": "+ee.progress+"% ("+(ee.loaded>0?this.i18n.uploading.remainingTime.prefix+ee.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(ee,te){return ee>=0&&te>=ee}_onDragover(ee){ee.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),ee.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(ee){ee.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(ee){this.nodrop||(ee.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(ee.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(ee){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}for(var te in this.headers)ee.setRequestHeader(te,this.headers[te]);this.timeout&&(ee.timeout=this.timeout),ee.withCredentials=this.withCredentials}_setStatus(ee,te,ie,ae){ee.elapsed=ae,ee.elapsedStr=this._formatTime(ee.elapsed,this._splitTimeByUnits(ee.elapsed)),ee.remaining=Math.ceil(ae*(te/ie-1)),ee.remainingStr=this._formatTime(ee.remaining,this._splitTimeByUnits(ee.remaining)),ee.speed=~~(te/ae/1024),ee.totalStr=this._formatSize(te),ee.loadedStr=this._formatSize(ie),ee.status=this._formatFileProgress(ee)}uploadFiles(ee){ee&&!Array.isArray(ee)&&(ee=[ee]),ee=ee||this.files,ee=ee.filter(te=>!te.complete),Array.prototype.forEach.call(ee,this._uploadFile.bind(this))}_uploadFile(ee){if(ee.uploading)return;const te=Date.now(),ie=ee.xhr=this._createXhr();let ae,se;ie.upload.onprogress=le=>{clearTimeout(ae),se=Date.now();const ce=(se-te)/1e3,ue=le.loaded,pe=le.total,fe=~~(ue/pe*100);ee.loaded=ue,ee.progress=fe,ee.indeterminate=ue<=0||ue>=pe,ee.error?ee.indeterminate=ee.status=void 0:ee.abort||(fe<100?(this._setStatus(ee,pe,ue,ce),ae=setTimeout(()=>{ee.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(ee)},2e3)):(ee.loadedStr=ee.totalStr,ee.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(ee),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:ee,xhr:ie}}))},ie.onreadystatechange=()=>{if(ie.readyState==4){if(clearTimeout(ae),ee.indeterminate=ee.uploading=!1,ee.abort){this._notifyFileChanges(ee);return}if(ee.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:ee,xhr:ie},cancelable:!0})))return;ie.status===0?ee.error=this.i18n.uploading.error.serverUnavailable:ie.status>=500?ee.error=this.i18n.uploading.error.unexpectedServerError:ie.status>=400&&(ee.error=this.i18n.uploading.error.forbidden),ee.complete=!ee.error,this.dispatchEvent(new CustomEvent(`upload-${ee.error?"error":"success"}`,{detail:{file:ee,xhr:ie}})),this._notifyFileChanges(ee)}};const oe=new FormData;if(ee.uploadTarget=ee.uploadTarget||this.target||"",ee.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:ee,xhr:ie},cancelable:!0})))return;oe.append(ee.formDataName,ee,ee.name),ie.open(this.method,ee.uploadTarget,!0),this._configureXhr(ie),ee.status=this.i18n.uploading.status.connecting,ee.uploading=ee.indeterminate=!0,ee.complete=ee.abort=ee.error=ee.held=!1,ie.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:ee,xhr:ie}})),this._notifyFileChanges(ee)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:ee,xhr:ie,formData:oe},cancelable:!0}))&&ie.send(oe)}_retryFileUpload(ee){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:ee,xhr:ee.xhr},cancelable:!0}))&&this._uploadFile(ee)}_abortFileUpload(ee){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:ee,xhr:ee.xhr},cancelable:!0}))&&(ee.abort=!0,ee.xhr&&ee.xhr.abort(),this._notifyFileChanges(ee))}_notifyFileChanges(ee){var te="files."+this.files.indexOf(ee)+".";for(const ie in ee)ee.hasOwnProperty(ie)&&this.notifyPath(te+ie,ee[ie])}_addFiles(ee){Array.prototype.forEach.call(ee,this._addFile.bind(this))}_addFile(ee){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:ee,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&ee.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:ee,error:this.i18n.error.fileIsTooBig}}));return}const te=ee.name.match(/\.[^.]*$|$/)[0],ie=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");if(this.accept&&!(ie.test(ee.type)||ie.test(te))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:ee,error:this.i18n.error.incorrectFileType}}));return}ee.loaded=0,ee.held=!0,ee.status=this.i18n.uploading.status.held,this.files=[ee,...this.files],this.noAuto||this._uploadFile(ee)}_removeFile(ee){this.files.indexOf(ee)>-1&&(this.files=this.files.filter(te=>te!==ee))}_onAddFilesTouchEnd(ee){ee.preventDefault(),this._onAddFilesClick(ee)}_onAddFilesClick(ee){this.maxFilesReached||(ee.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(ee){this._addFiles(ee.target.files)}_onFileStart(ee){this._uploadFile(ee.detail.file)}_onFileRetry(ee){this._retryFileUpload(ee.detail.file)}_onFileAbort(ee){this._abortFileUpload(ee.detail.file)}_onFileRemove(ee){this._removeFile(ee.detail.file)}_onFileReject(ee){announce(`${ee.detail.file.name}: ${ee.detail.file.error}`,{mode:"alert"})}_onUploadStart(ee){announce(`${ee.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(ee){announce(`${ee.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(ee){announce(`${ee.detail.file.name}: ${ee.detail.file.error}`,{mode:"alert"})}_dragoverChanged(ee){ee?this.setAttribute("dragover",ee):this.removeAttribute("dragover")}_dragoverValidChanged(ee){ee?this.setAttribute("dragover-valid",ee):this.removeAttribute("dragover-valid")}_i18nPlural(ee,te){return ee==1?te.one:te.many}_isMultiple(ee){return ee!=1}}customElements.define(Upload.is,Upload);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class VirtualList extends ElementMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Virtualizer({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),processTemplates(this)}scrollToIndex(ee){this.__virtualizer.scrollToIndex(ee)}__createElements(ee){return[...Array(ee)].map(()=>document.createElement("div"))}__updateElement(ee,te){ee.__renderer!==this.renderer&&(ee.__renderer=this.renderer,this.__clearRenderTargetContent(ee)),this.renderer&&this.renderer(ee,this,{item:this.items[te],index:te})}__clearRenderTargetContent(ee){ee.innerHTML="",delete ee._$litPart$}__itemsOrRendererChanged(ee,te,ie){const ae=this.childElementCount>0;(te||ae)&&ie&&(ie.size=(ee||[]).length,ie.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(VirtualList.is,VirtualList);const addCssBlock=function(de,ee=!1){const te=document.createElement("template");te.innerHTML=de,document.head[ee?"insertBefore":"appendChild"](te.content,document.head.firstChild)},$css_0=r$1($cssFromFile_0);registerStyles("",$css_0,{moduleId:"apex-charts-style"});export{addCssBlock};
