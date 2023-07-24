import{N as e,a8 as t,a9 as s,aa as i,ab as l,C as o,O as a,x as r,y as n,o as d,a as h,w as p,j as u,F as c,k as f,n as m,m as g,b as y,d as w,e as b,r as v,t as x,f as $,i as k}from"./index-0856ab2f.js";import{_ as C}from"./mypage.6300dc88.js";import{_ as S}from"./u-line-progress.2ab57d69.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const F=T({name:"u-upload",emits:["update:file-list","on-oversize","on-list-change","on-preview","on-remove","on-success","on-change","on-error","on-progress","on-uploaded","on-choose-complete","on-choose-fail"],props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:()=>({})},formData:{type:Object,default:()=>({})},name:{type:String,default:"file"},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:()=>[]},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},height:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},successIcon:{type:String,default:"checkbox-mark"},successColor:{type:String,default:"#ffffff"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},limitType:{type:Array,default:()=>["png","jpg","jpeg","webp","gif","image"]},index:{type:[Number,String],default:""}},mounted(){},data:()=>({lists:[],isInCount:!0,uploading:!1}),watch:{fileList:{immediate:!0,handler(e){let t=JSON.parse(JSON.stringify(this.lists));e.map((e=>{t.some((t=>t.url==e.url))||t.push({url:e.url,error:!1,progress:100})})),this.lists=JSON.parse(JSON.stringify(t))}},lists:{deep:!0,handler(e){this.$emit("update:file-list",e),this.$emit("on-list-change",e,this.index)}}},methods:{clear(){this.lists=[]},reUpload(){this.uploadFile()},selectFile(){let t=this;if(t.disabled)return;const{name:s="",maxCount:i,multiple:l,maxSize:o,sizeType:a,camera:r,compressed:n,maxDuration:d,sourceType:h}=t;let p=null,u=JSON.parse(JSON.stringify(t.lists));const c=i-u.length;p=new Promise(((t,s)=>{e({count:l?c>9?9:c:1,sourceType:h,sizeType:a,success:t,fail:s})})),p.then((e=>{let s=t.lists.length;e.tempFiles.map(((e,s)=>{if(t.checkFileExt(e)&&(l||!(s>=1)))if(e.size>o)t.$emit("on-oversize",e,t.lists,t.index),t.showToast("超出允许的文件大小");else{if(i<=u.length)return t.$emit("on-exceed",e,t.lists,t.index),void t.showToast("超出最大允许的文件个数");u.push({url:e.path,progress:0,error:!1,file:e})}})),this.deepClone(u,t.lists),t.$emit("on-choose-complete",t.lists,t.index),t.autoUpload&&t.uploadFile(s)})).catch((e=>{t.$emit("on-choose-fail",e)}))},showToast(e,s=!1){(this.showTips||s)&&t({title:e,icon:"none"})},upload(){this.uploadFile()},retry(e){this.lists[e].progress=0,this.lists[e].error=!1,this.lists[e].response=null,s({title:"重新上传"}),this.uploadFile(e)},async uploadFile(e=0){if(this.disabled)return;if(this.uploading)return;if(e>=this.lists.length)return void this.$emit("on-uploaded",this.lists,this.index);if(100==this.lists[e].progress)return void(0==this.autoUpload&&this.uploadFile(e+1));if(this.beforeUpload&&"function"==typeof this.beforeUpload){let t=this.beforeUpload.bind(this.$u.$parent.call(this))(e,this.lists);if(t&&"function"==typeof t.then)await t.then((e=>{})).catch((t=>this.uploadFile(e+1)));else if(!1===t)return this.uploadFile(e+1)}if(!this.action)return void this.showToast("请配置上传地址",!0);this.lists[e].error=!1,this.uploading=!0;i({url:this.action,filePath:this.lists[e].url,name:this.name,formData:this.formData,header:this.header,success:t=>{let s=this.toJson&&this.$u.test.jsonString(t.data)?JSON.parse(t.data):t.data;[200,201,204].includes(t.statusCode)?(this.lists[e].response=s,this.lists[e].progress=100,this.lists[e].error=!1,this.$emit("on-success",s,e,this.lists,this.index)):this.uploadError(e,s)},fail:t=>{this.uploadError(e,t)},complete:t=>{l(),this.uploading=!1,this.uploadFile(e+1),this.$emit("on-change",t,e,this.lists,this.index)}}).onProgressUpdate((t=>{t.progress>0&&(this.lists[e].progress=t.progress,this.$emit("on-progress",t,e,this.lists,this.index))}))},uploadError(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.$emit("on-error",t,e,this.lists,this.index),this.showToast("上传失败，请重试")},deleteItem(e){o({title:"提示",content:"您确定要删除此项吗？",success:async t=>{if(t.confirm)if(this.beforeRemove&&"function"==typeof this.beforeRemove){let t=this.beforeRemove.bind(this.$u.$parent.call(this))(e,this.lists);t&&"function"==typeof t.then?await t.then((t=>{this.handlerDeleteItem(e)})).catch((e=>{this.showToast("已终止移除")})):!1===t?this.showToast("已终止移除"):this.handlerDeleteItem(e)}else this.handlerDeleteItem(e)}})},handlerDeleteItem(e){this.lists[e].progress<100&&this.lists[e].progress>0&&void 0!==this.lists[e].uploadTask&&this.lists[e].uploadTask.abort(),this.lists.splice(e,1),this.$forceUpdate(),this.$emit("on-remove",e,this.lists,this.index)},remove(e){e>=0&&e<this.lists.length&&(this.lists.splice(e,1),this.$emit("on-list-change",this.lists,this.index))},doPreviewImage(e,s){if(!this.previewFullImage)return void this.$emit("on-preview",e,this.lists,this.index);const i=this.lists.map((e=>e.url||e.path));a({urls:i,current:e,success:()=>{this.$emit("on-preview",e,this.lists,this.index)},fail:()=>{t({title:"预览图片失败",icon:"none"})}})},checkFileExt(e){let t=!1,s="";return s=e.name.replace(/.+\./,"").toLowerCase(),t=this.limitType.some((e=>e.toLowerCase()===s)),t||this.showToast(`不允许选择${s}格式的文件`),t},deepClone(e,t){for(let s in e){const i=e[s];Array.isArray(i)?(t[s]=[],this.deepClone(i,t[s])):null!==i&&"object"==typeof i?(t[s]={},this.deepClone(i,t[s])):t[s]=i}}}},[["render",function(e,t,s,i,l,o){const a=r(n("u-icon"),C),T=$,F=r(n("u-line-progress"),S),_=k;return s.disabled?w("",!0):(d(),h(T,{key:0,class:"u-upload"},{default:p((()=>[s.showUploadList?(d(!0),u(c,{key:0},f(l.lists,((t,i)=>(d(),h(T,{class:"u-list-item u-preview-wrap",key:i,style:m({width:e.$u.addUnit(s.width),height:e.$u.addUnit(s.height)})},{default:p((()=>[s.deletable?(d(),h(T,{key:0,class:"u-delete-icon",onClick:g((e=>o.deleteItem(i)),["stop"]),style:m({background:s.delBgColor})},{default:p((()=>[y(a,{class:"u-icon",name:s.delIcon,size:"20",color:s.delColor},null,8,["name","color"])])),_:2},1032,["onClick","style"])):w("",!0),s.showProgress&&t.progress>0&&100!=t.progress&&!t.error?(d(),h(F,{key:1,"show-percent":!1,height:"16",class:"u-progress",percent:t.progress},null,8,["percent"])):w("",!0),t.error?(d(),h(T,{key:2,onClick:g((e=>o.retry(i)),["stop"]),class:"u-error-btn"},{default:p((()=>[b("点击重试")])),_:2},1032,["onClick"])):w("",!0),t.isImage?w("",!0):(d(),h(_,{key:3,onClick:g((e=>o.doPreviewImage(t.url||t.path,i)),["stop"]),class:"u-preview-image",src:t.url||t.path,mode:s.imageMode},null,8,["onClick","src","mode"]))])),_:2},1032,["style"])))),128)):w("",!0),v(e.$slots,"file",{file:l.lists},void 0,!0),s.maxCount>l.lists.length?(d(),h(T,{key:1,style:{display:"inline-block"},onClick:o.selectFile},{default:p((()=>[v(e.$slots,"addBtn",{},void 0,!0),s.customBtn?w("",!0):(d(),h(T,{key:0,class:"u-list-item u-add-wrap","hover-class":"u-add-wrap__hover","hover-stay-time":"150",style:m({width:e.$u.addUnit(s.width),height:e.$u.addUnit(s.height)})},{default:p((()=>[y(a,{name:"plus",class:"u-add-btn",size:"40"}),y(T,{class:"u-add-tips"},{default:p((()=>[b(x(s.uploadText),1)])),_:1})])),_:1},8,["style"]))])),_:3},8,["onClick"])):w("",!0)])),_:3}))}],["__scopeId","data-v-65e24841"]]);export{F as _};
