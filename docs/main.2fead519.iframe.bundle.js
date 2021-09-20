(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1675:function(module,exports,__webpack_require__){__webpack_require__(1676),__webpack_require__(1853),__webpack_require__(1854),__webpack_require__(2758),__webpack_require__(2759),__webpack_require__(2762),__webpack_require__(2763),__webpack_require__(2761),__webpack_require__(2760),__webpack_require__(2764),__webpack_require__(2565),__webpack_require__(2693),__webpack_require__(2765),module.exports=__webpack_require__(2715)},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1609),__webpack_require__(318),__webpack_require__(2752);__webpack_exports__.a=function delay(time){return new Promise((function(resolve){setTimeout(resolve,time||1e3)}))}},173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(317),__webpack_require__(621),__webpack_require__(1604),__webpack_require__(1605),__webpack_require__(1589),__webpack_require__(437),__webpack_require__(2722),__webpack_require__(622),__webpack_require__(623),__webpack_require__(2723),__webpack_require__(2724),__webpack_require__(1609),__webpack_require__(318),__webpack_require__(427),__webpack_require__(624),__webpack_require__(625),__webpack_require__(439),__webpack_require__(319),__webpack_require__(440),__webpack_require__(626),__webpack_require__(1603);var react=__webpack_require__(0),index_es=__webpack_require__(1649),rules_rule=(__webpack_require__(2736),__webpack_require__(1621),__webpack_require__(2740),__webpack_require__(1003),__webpack_require__(2744),__webpack_require__(1622),__webpack_require__(2746),function makeRule(handler){return function validate(name,label,value,rule,formState){var shouldRun=!0;if("function"==typeof rule.condition&&(shouldRun=rule.condition(formState)),shouldRun){var result=handler(name,label,value,rule);if(result)return rule.message||result}}});function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var rules_date=rules_rule((function date(_,label,value){if(value){var _value$split$map2=_slicedToArray(value.split("/").map((function(el){return Number.parseInt(el,10)})),3),day=_value$split$map2[0],month=_value$split$map2[1],year=_value$split$map2[2];month-=1;var date=new Date(year,month,day);if(date.getDate()!==day||date.getMonth()!==month||date.getFullYear()!==year)return'Field "'.concat(label,'" contains invalid date.')}})),rules_format=(__webpack_require__(2747),__webpack_require__(2748),rules_rule((function format(_,label,value,rule){if(value&&!new RegExp(rule.attrs.regexp).test(value))return'Field "'.concat(label,'" contains one, or more invalid characters.')}))),max_length=rules_rule((function maxLength(_,label,value,rule){if(value.length>rule.attrs.size)return'Field "'.concat(label,'" exceeds max length of ').concat(rule.attrs.size," characters.")})),min_length=rules_rule((function minLength(_,label,value,rule){if(value.length<rule.attrs.size)return'Field "'.concat(label,'" exceeds min length of ').concat(rule.attrs.size," characters.")})),one_of=rules_rule((function oneOf(_,label,value,rule){if(value&&!rule.attrs.options.includes(value))return'Selected value of "'.concat(label,'" is not valid.')}));__webpack_require__(2749);function range_slicedToArray(arr,i){return function range_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function range_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function range_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return range_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return range_arrayLikeToArray(o,minLen)}(arr,i)||function range_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function range_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var rules_range=rules_rule((function range(_,label,value,rule){if(value){var n=Number(value),_rule$attrs$range=range_slicedToArray(rule.attrs.range,2),from=_rule$attrs$range[0],to=_rule$attrs$range[1];if(!(!1===Number.isNaN(n)&&n>=from&&n<=to))return'Field "'.concat(label,'" is out of range <').concat(from,", ").concat(to,">.")}})),rules_required=(__webpack_require__(2750),rules_rule((function required(_,label,value){if(!("string"==typeof value&&value&&""!==value.trim()||(null==value?void 0:value.length)>0))return'Field "'.concat(label,'" is mandatory.')}))),registerRule=function registerRule(ruleId,rule){if(ValidationRules.has(ruleId))throw new Error("The rule ".concat(ruleId," is already registered."));ValidationRules.set(ruleId,rule)},getRule=function getRule(ruleId){return ValidationRules.get(ruleId)},ValidationRules=new Map;function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function validate_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return validate_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return validate_arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function validate_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}registerRule("date",rules_date),registerRule("format",rules_format),registerRule("maxlen",max_length),registerRule("minlen",min_length),registerRule("oneof",one_of),registerRule("range",rules_range),registerRule("required",rules_required);var src_validate=function validate(name,field,formState){var _step,_iterator=_createForOfIteratorHelper(field.schema);try{for(_iterator.s();!(_step=_iterator.n()).done;){var rule=_step.value,result=("function"==typeof rule.validate?rule.validate:getRule(rule.id))(name,field.label,field.value,rule,formState);if(result)return result}}catch(err){_iterator.e(err)}finally{_iterator.f()}};function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function src_slicedToArray(arr,i){return function src_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function src_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||src_unsupportedIterableToArray(arr,i)||function src_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function src_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return src_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?src_arrayLikeToArray(o,minLen):void 0}}function src_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hasOwn={}.hasOwnProperty,serialize=function serialize(formState){var serializedState={};for(var k in formState)if(hasOwn.call(formState,k)){var value=formState[k].value;(null==value?void 0:value.length)>0&&(serializedState[k]=value)}return serializedState};__webpack_exports__.a=function useForm(formConfig){var _useBool2=src_slicedToArray(Object(index_es.a)(),3),pending=_useBool2[0],reqStart=_useBool2[1],reqEnd=_useBool2[2],_useState2=src_slicedToArray(Object(react.useState)(formConfig),2),formState=_useState2[0],setFormState=_useState2[1],resetFieldsValue=function resetFieldsValue(names){var _step,nextState=Object.assign({},formState),_iterator=function src_createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=src_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e3){didErr=!0,err=_e3},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(names);try{for(_iterator.s();!(_step=_iterator.n()).done;){var name=_step.value;nextState[name].value&&(nextState=Object.assign({},nextState,_defineProperty({},name,Object.assign({},nextState[name],{value:Array.isArray(nextState[name].value)?[]:""}))))}}catch(err){_iterator.e(err)}finally{_iterator.f()}setFormState(nextState)},_useState4=src_slicedToArray(Object(react.useState)(null),2),formErrors=_useState4[0],setFormErrors=_useState4[1],resetErrors=function resetErrors(names){if(null!=formErrors){var errors={};for(var k in formErrors)if(hasOwn.call(formErrors,k)){if(names.includes(k))continue;errors[k]=formErrors[k]}var isValid=0===Object.keys(errors).length;setFormErrors(!1===isValid?errors:null)}},onBlur=function onBlur(event){var name=event.target.name,error=src_validate(name,formState[name],serialize(formState));error?function setError(name,error){setFormErrors(Object.assign({},formErrors,_defineProperty({},name,error)))}(name,error):resetErrors([name])},onChange=function onChange(event){var input=event.target,name=input.name,type=input.type,value=input.value;"checkbox"===type&&(value=function toggleValue(name,value){var values=formState[name].value||[],at=values.findIndex((function(el){return el===value}));if(at<0)return values.concat(value);var nextValues=values.slice();return nextValues.splice(at,1),nextValues}(name,value)),input instanceof HTMLSelectElement&&input.multiple&&(value=function getSelectMultipleValues(select){for(var options=select.selectedOptions,values=[],i=0;i<options.length;i++){var value=options[i].value;value&&values.push(value)}return values}(input)),function setFieldValue(name,value){setFormState(Object.assign({},formState,_defineProperty({},name,Object.assign({},formState[name],{value:value}))))}(name,value)};return{debug:function debug(){console.log("--- form state"),console.log(function logFormat(formState,errors){var serializedState={};for(var k in formState)hasOwn.call(formState,k)&&(serializedState[k]={value:formState[k].value},null!=errors&&errors[k]&&(serializedState[k].error=null==errors?void 0:errors[k]));return JSON.stringify(serializedState,null,2)}(formState,formErrors)),console.log("---")},errors:formErrors,register:function register(name){var attrs=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},checkable="radio"===attrs.type||"checkbox"===attrs.type;if(checkable&&!attrs.value)throw new Error("Value is mandatory for radio, and checkbox. Missing value for input named ".concat(name,"."));return Object.assign({},attrs,checkable?{checked:(formState[name].value||[]).includes(attrs.value)}:null,{name:name,onBlur:onBlur,onChange:onChange,value:attrs.value||formState[name].value||(attrs.multiple?[]:"")})},reset:function reset(){resetFieldsValue(Object.keys(formState)),setFormErrors(null)},valueOf:function valueOf(name){return formState[name].value},onSubmit:function onSubmit(send){return function onSubmit_(event){event.preventDefault();var payload=serialize(formState);!1!==function validateForm(payload){var isValid=!0,errors={};for(var k in formState)if(hasOwn.call(formState,k)){var error=src_validate(k,formState[k],payload);error&&(errors[k]=error,isValid=!1)}return setFormErrors(!1===isValid?errors:null),isValid}(payload)&&(reqStart(),send(payload).finally(reqEnd))}},pending:pending,unregister:function unregister(names){"string"!=typeof names?(resetErrors(names),resetFieldsValue(names)):unregister([names])}}}},1744:function(module,exports){},1854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1076)},2606:function(module,exports){},2608:function(module,exports){},2619:function(module,exports){},2621:function(module,exports){},2646:function(module,exports){},2648:function(module,exports){},2649:function(module,exports){},2654:function(module,exports){},2656:function(module,exports){},2675:function(module,exports){},2687:function(module,exports){},2690:function(module,exports){},2711:function(module,exports,__webpack_require__){var api=__webpack_require__(990),content=__webpack_require__(2712);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2712:function(module,exports,__webpack_require__){(exports=__webpack_require__(991)(!1)).push([module.i,'body {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n  font-size: 16px;\n  line-height: 24px; }\n\n.comment {\n  font-size: 14px;\n  font-style: italic;\n  margin: 0; }\n\n.form-title {\n  font-size: 18px;\n  margin: 0 0 10px; }\n\ninput[type="text"],\ninput[type="password"],\ninput[type="email"],\nselect {\n  box-sizing: border-box;\n  display: block;\n  padding: 2px 5px;\n  width: 180px; }\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  margin: 0;\n  margin-right: 4px; }\n\n.form-group + .form-group {\n  margin: 20px 0 0; }\n\n.form-group label {\n  cursor: pointer; }\n\n.form-group .checkbox-group label {\n  display: flex;\n  align-items: baseline; }\n\n.form-group .radio-group {\n  display: flex; }\n  .form-group .radio-group label {\n    display: flex;\n    align-items: baseline;\n    margin: 0;\n    margin-right: 16px; }\n\n.form-group .field-error {\n  color: red;\n  font-size: 14px;\n  margin: 2px 0 4px; }\n\n.form-buttons {\n  margin: 20px 0 0; }\n  .form-buttons button {\n    margin-right: 4px; }\n',""]),module.exports=exports},2713:function(module,exports,__webpack_require__){var api=__webpack_require__(990),content=__webpack_require__(2714);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2714:function(module,exports,__webpack_require__){(exports=__webpack_require__(991)(!1)).push([module.i,".label {\n  font-size: 1rem; }\n",""]),module.exports=exports},2715:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1076).configure)([__webpack_require__(2716)],module,!1)}).call(this,__webpack_require__(119)(module))},2716:function(module,exports,__webpack_require__){var map={"./dynamic-form.stories.js":2717,"./field-with-initial-value.stories.js":2754,"./form-with-checkbox-group.stories.js":2755,"./form-with-select.stories.js":2756,"./simple-form.stories.js":2757};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2716},2717:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DynamicForm",(function(){return DynamicForm}));__webpack_require__(317),__webpack_require__(436);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173),_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),Form=function Form(){var _useForm=Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)({type:{label:"Login type",schema:[{id:"required"}]},email:{label:"Email",schema:[{id:"required",condition:function condition(state){return"classic"===state.type}}]},password:{label:"Password",schema:[{id:"required",condition:function condition(state){return"classic"===state.type}}]},phone:{label:"Phone number",schema:[{id:"required",condition:function condition(state){return"token"===state.type}}]}}),debug=_useForm.debug,errors=_useForm.errors,pending=_useForm.pending,register=_useForm.register,reset=_useForm.reset,onSubmit=_useForm.onSubmit,valueOf=_useForm.valueOf,unregister=_useForm.unregister;Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(debug);var currentType=valueOf("type");return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){"classic"===currentType&&unregister("phone"),"token"===currentType&&unregister(["email","password"])}),[currentType]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{onSubmit:onSubmit((function(payload){return console.log("--- payload:"),console.log(payload),console.log("---"),Object(_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__.a)(2e3)})),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"form-title",children:"Fill the form"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{className:"comment",children:"Choosing one of the options below will trigger the form content to change."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("legend",{children:"Choose how you want to login"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"radio-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("type",{type:"radio",value:"classic"}))),"Classic (email/password)"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("type",{type:"radio",value:"token"}))),"Token"]})]}),(null==errors?void 0:errors.type)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.type})]}),"classic"===currentType&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:["Email:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("email",{type:"email"})))]}),(null==errors?void 0:errors.email)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.email})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:["Password:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("password",{type:"password"})))]}),(null==errors?void 0:errors.password)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.password})]})]}),"token"===currentType&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:["Phone:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("phone")))]}),(null==errors?void 0:errors.phone)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.phone})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"reset",onClick:reset,children:"Clean"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{disabled:errors||pending,children:"Send"})]})]})};Form.displayName="Form",__webpack_exports__.default={title:"useForm",component:Form};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form,Object.assign({},args))};Template.displayName="Template";var DynamicForm=Template.bind({});DynamicForm.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},DynamicForm.parameters)},2754:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FieldWithInitialValue",(function(){return FieldWithInitialValue}));__webpack_require__(317),__webpack_require__(437),__webpack_require__(436);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(173),_fixtures_delay__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),Form=function Form(){var _useForm=Object(_src__WEBPACK_IMPORTED_MODULE_4__.a)({name:{label:"Name",schema:[{id:"required"}],value:"Bruno"}}),debug=_useForm.debug,errors=_useForm.errors,pending=_useForm.pending,register=_useForm.register,reset=_useForm.reset,onSubmit=_useForm.onSubmit;return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(debug),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form",{onSubmit:onSubmit((function(payload){return console.log("--- payload:"),console.log(payload),console.log("---"),Object(_fixtures_delay__WEBPACK_IMPORTED_MODULE_5__.a)(2e3)})),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"form-title",children:"Fill the form"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label",{children:["Name:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",Object.assign({},register("name")))]}),(null==errors?void 0:errors.name)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"field-error",children:errors.name})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"form-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"reset",onClick:reset,children:"Clean"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{disabled:errors||pending,children:"Send"})]})]})};Form.displayName="Form",__webpack_exports__.default={title:"useForm",component:Form};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Form,Object.assign({},args))};Template.displayName="Template";var FieldWithInitialValue=Template.bind({});FieldWithInitialValue.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},FieldWithInitialValue.parameters)},2755:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FormWithCheckboxes",(function(){return FormWithCheckboxes}));__webpack_require__(317),__webpack_require__(436);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173),_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),Form=function Form(){var _useForm=Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)({sports:{label:"Sports",schema:[{id:"required",message:"Choosing at least a sport is mandatory."}]}}),debug=_useForm.debug,errors=_useForm.errors,pending=_useForm.pending,register=_useForm.register,reset=_useForm.reset,onSubmit=_useForm.onSubmit;return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(debug),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{onSubmit:onSubmit((function(payload){return console.log("--- payload:"),console.log(payload),console.log("---"),Object(_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__.a)(2e3)})),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"form-title",children:"Fill the form"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("legend",{children:"Selects all the sports you like:"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"checkbox-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("sports",{type:"checkbox",value:"soccer"}))),"Soccer"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("sports",{type:"checkbox",value:"basket"}))),"Basketball"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({},register("sports",{type:"checkbox",value:"volley"}))),"Volley"]})]}),(null==errors?void 0:errors.sports)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.sports})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"reset",onClick:reset,children:"Clean"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{disabled:errors||pending,children:"Send"})]})]})};Form.displayName="Form",__webpack_exports__.default={title:"useForm",component:Form};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form,Object.assign({},args))};Template.displayName="Template";var FormWithCheckboxes=Template.bind({});FormWithCheckboxes.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},FormWithCheckboxes.parameters)},2756:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FormWithSelect",(function(){return FormWithSelect}));__webpack_require__(1621),__webpack_require__(317),__webpack_require__(436);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(173),_fixtures_delay__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),Form=function Form(props){var _useForm=Object(_src__WEBPACK_IMPORTED_MODULE_5__.a)({color:{label:"Color",schema:[{id:"required",message:"Choosing a color is mandatory."}]}}),debug=_useForm.debug,errors=_useForm.errors,pending=_useForm.pending,register=_useForm.register,reset=_useForm.reset,onSubmit=_useForm.onSubmit;return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(debug),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form",{onSubmit:onSubmit((function(payload){return console.log("--- payload:"),console.log(payload),console.log("---"),Object(_fixtures_delay__WEBPACK_IMPORTED_MODULE_6__.a)(2e3)})),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"form-title",children:"Fill the form"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label",{children:["Colors:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select",Object.assign({},register("color"),{multiple:props.multiple,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option",{value:"",children:"Choose a color"}),["Blue","Black","Green","Red","White"].map((function(color){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option",{value:color.toLowerCase(),children:color},color)}))]}))]}),(null==errors?void 0:errors.color)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"field-error",children:errors.color})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"form-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"reset",onClick:reset,children:"Clean"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{disabled:errors||pending,children:"Send"})]})]})};Form.displayName="Form",Form.propTypes={multiple:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool},__webpack_exports__.default={title:"useForm",component:Form};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Form,Object.assign({},args))};Template.displayName="Template";var FormWithSelect=Template.bind({});FormWithSelect.args={multiple:!1},FormWithSelect.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},FormWithSelect.parameters)},2757:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleForm",(function(){return SimpleForm}));__webpack_require__(317),__webpack_require__(436);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173),_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),Form=function Form(){var _useForm=Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)({username:{label:"Username",schema:[{id:"required"}]}}),debug=_useForm.debug,errors=_useForm.errors,pending=_useForm.pending,register=_useForm.register,reset=_useForm.reset,onSubmit=_useForm.onSubmit;return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(debug),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{onSubmit:onSubmit((function(payload){return console.log("--- payload:"),console.log(payload),console.log("---"),Object(_fixtures_delay__WEBPACK_IMPORTED_MODULE_4__.a)(2e3)})),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"form-title",children:"Fill the form"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label",{children:["Username:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",Object.assign({type:"text"},register("username")))]}),(null==errors?void 0:errors.username)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"field-error",children:errors.username})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"form-buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"reset",onClick:reset,children:"Clean"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{disabled:errors||pending,children:"Send"})]})]})};Form.displayName="Form",__webpack_exports__.default={title:"useForm",component:Form};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form,Object.assign({},args))};Template.displayName="Template";var SimpleForm=Template.bind({});SimpleForm.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},SimpleForm.parameters)},2765:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(1589),__webpack_require__(427),__webpack_require__(2702),__webpack_require__(2703),__webpack_require__(2704),__webpack_require__(2706),__webpack_require__(2707),__webpack_require__(2708),__webpack_require__(1603);var client_api=__webpack_require__(178),esm=__webpack_require__(6),parameters=(__webpack_require__(2709),__webpack_require__(2711),__webpack_require__(2713),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[1675,2,3]]]);