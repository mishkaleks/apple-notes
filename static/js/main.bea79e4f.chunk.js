(this["webpackJsonpapple-notes"]=this["webpackJsonpapple-notes"]||[]).push([[0],{89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),o=n.n(i),r=n(9),d=n.n(r),c=n(10),l=n(19),s=n(58),p=n(6),O=n(3),b={folders:[],newFolderName:"",activeFolderId:null,newNoteName:"",activeNoteId:null,isOpen:!1,typeModal:"",deleteIdForModal:null,isDisabledFolders:!1},f="ADD_FOLDER_TO_NOTES",u="DELETE_FOLDER_TO_NOTES",j="EDIT_FOLDER_NAME_TO_NOTES",m="GET_FOLDER_NAME_TO_NOTES",x="ACCEPT_FOLDER_NAME_TO_NOTES",N="GET_ACTIVE_FOLDER_TO_NOTES",h="ADD_NOTE_TO_FOLDER",g="DELETE_NOTE_TO_FOLDER",v="EDIT_NOTE_NAME_TO_FOLDER",I="DISABLED_FOLDER",E="GET_NOTE_NAME_TO_FOLDER",w="ACCEPT_NOTE_NAME_TO_FOLDER",F="GET_ACTIVE_NOTE_TO_FOLDER",_="GET_CONTENT_TO_NOTE",T="REORDER_FOLDERS_TO_NOTES",D="REORDER_NOTES_TO_FOLDER",y="MOVE_AND_REORDER_NOTES",C="CLOSE_MODAL_WINDOW",S="OPEN_MODAL_WINDOW",A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),{},{folders:[].concat(Object(p.a)(e.folders),[t.item])});case u:return Object(O.a)(Object(O.a)({},e),{},{folders:[].concat(Object(p.a)(e.folders.slice(0,e.deleteIdForModal)),Object(p.a)(e.folders.slice(e.deleteIdForModal+1))),activeFolderId:null,activeNoteId:null,deleteIdForModal:null});case j:return Object(O.a)(Object(O.a)({},e),{},{folders:[].concat(Object(p.a)(e.folders.slice(0,t.id)),[t.item],Object(p.a)(e.folders.slice(t.id+1)))});case m:return Object(O.a)(Object(O.a)({},e),{},{newFolderName:t.payload});case x:return Object(O.a)(Object(O.a)({},e),{},{folders:[].concat(Object(p.a)(e.folders.slice(0,t.id)),[t.item],Object(p.a)(e.folders.slice(t.id+1))),newFolderName:""});case N:return Object(O.a)(Object(O.a)({},e),{},{activeFolderId:t.id,activeNoteId:null});case h:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(n){return n.id===e.activeFolderId?Object(O.a)(Object(O.a)({},n),{},{notes:[].concat(Object(p.a)(n.notes),[t.item]),countNotes:n.countNotes+1}):n})))});case g:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(t){return t.id===e.activeFolderId?Object(O.a)(Object(O.a)({},t),{},{notes:[].concat(Object(p.a)(t.notes.slice(0,e.deleteIdForModal)),Object(p.a)(t.notes.slice(e.deleteIdForModal+1)))}):t}))),activeNoteId:null,deleteIdForModal:null});case v:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(n){return n.id===e.activeFolderId?Object(O.a)(Object(O.a)({},n),{},{notes:[].concat(Object(p.a)(n.notes.slice(0,t.idx)),[t.item],Object(p.a)(n.notes.slice(t.idx+1)))}):n}))),activeNoteId:t.id});case I:return Object(O.a)(Object(O.a)({},e),{},{isDisabledFolders:!e.isDisabledFolders});case E:return Object(O.a)(Object(O.a)({},e),{},{newNoteName:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(n){return n.id===e.activeFolderId?Object(O.a)(Object(O.a)({},n),{},{notes:[].concat(Object(p.a)(n.notes.slice(0,t.id)),[t.item],Object(p.a)(n.notes.slice(t.id+1)))}):n}))),newNoteName:""});case F:return Object(O.a)(Object(O.a)({},e),{},{activeNoteId:t.id});case _:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(n){return n.id===e.activeFolderId?Object(O.a)(Object(O.a)({},n),{},{notes:[].concat(Object(p.a)(n.notes.slice(0,t.id)),[t.item],Object(p.a)(n.notes.slice(t.id+1)))}):n})))});case T:return Object(O.a)(Object(O.a)({},e),{},{folders:t.list});case D:return Object(O.a)(Object(O.a)({},e),{},{folders:Object(p.a)(e.folders.map((function(n){return n.id===e.activeFolderId?Object(O.a)(Object(O.a)({},n),{},{notes:t.list}):n})))});case y:return Object(O.a)(Object(O.a)({},e),{},{folders:t.list,activeNoteId:null});case S:return Object(O.a)(Object(O.a)({},e),{},{isOpen:!e.isOpen,typeModal:t.flag,deleteIdForModal:t.id});case C:return Object(O.a)(Object(O.a)({},e),{},{isOpen:!e.isOpen,typeModal:""});default:return e}},R=function(e){return{type:"ADD_FOLDER_TO_NOTES",item:e}},L=function(e,t){return{type:"OPEN_MODAL_WINDOW",id:e,flag:t}},k=Object(s.createLogger)(),B=Object(l.a)(k),M=Object(l.d)(A,B),G=n(16),P=n(50),W=n(5),z=n(116),H=n(30),V=n(111),J=n(112),$=n(113),q=n(114),K=n(62),Q=n.n(K),U=n(48),X=n.n(U),Y=n(63),Z=n.n(Y),ee=n(110),te=n(109),ne=Object(te.a)((function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(260,"px)"),marginLeft:260,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),"@media screen and (max-width: 667px)":{marginRight:"0"}},hide:{display:"none"},"\u0441reateNewFolderIcon":{color:"#fff"},inactiveCreateNewNoteBtn:{pointerEvents:"none","& svg":{opacity:"0.3"}},activeCreateNewNoteBtn:{pointerEvents:"auto","& svg":{color:"#fff"}},inactiveNoteAddIcon:{opacity:"0.9"}}})),ae={onAddFolder:R,onCreateNewNote:function(e){return{type:"ADD_NOTE_TO_FOLDER",item:e}}},ie=Object(c.b)((function(e){return{activeFolderId:e.activeFolderId}}),ae)((function(e){var t=e.activeFolderId,n=e.open,i=e.setOpen,o=e.onAddFolder,r=e.onCreateNewNote,d=ne(),c=Object(ee.a)("(max-width:667px)");return Object(a.jsx)(V.a,{position:"fixed",className:Object(W.a)(d.appBar,Object(G.a)({},d.appBarShift,n)),children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)($.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(W.a)(d.menuButton,n&&d.hide),children:Object(a.jsx)(Q.a,{})}),Object(a.jsxs)(q.a,{variant:"h6",noWrap:!0,children:[!c&&Object(a.jsx)($.a,{onClick:function(){var e={id:"id".concat((+new Date).toString(16)),title:"New Foolder",notes:[],edited:!1};o(e)},"aria-label":"create new folder",children:Object(a.jsx)(X.a,{className:d.\u0441reateNewFolderIcon})}),Object(a.jsx)($.a,{onClick:function(){var e=(new Date).toLocaleString(),n={id:"id".concat(t,"_").concat((+new Date).toString(16)),title:"New Note",content:"Add description to note",edited:!1,startTime:e};r(n)},"aria-label":"note add",disabled:!t,classes:{root:d.activeCreateNewNoteBtn,disabled:d.inactiveCreateNewNoteBtn},children:Object(a.jsx)(Z.a,{})})]})]})})})),oe=n(117),re=n(118),de=n(35),ce=n(67),le=n.n(ce),se=n(68),pe=n.n(se),Oe=n.p+"static/media/add-folder.34e40b83.svg",be=Object(te.a)((function(e){return{wrImgAddFolder:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",userSelect:"none",textAlign:"center","& img":{width:"50px"}},stubText:{marginTop:"15px",fontWeight:"bold",color:"#3f51b5"}}})),fe=function(){var e=be();return Object(a.jsxs)(re.a,{className:e.wrImgAddFolder,children:[Object(a.jsx)("img",{src:Oe,alt:"add folder"}),Object(a.jsx)(re.a,{className:e.stubText,children:"Please add a directory"})]})},ue=n(27),je=n(28),me=n(32),xe=n(31),Ne=n(64),he=n.n(Ne),ge=n(65),ve=n.n(ge),Ie=n(66),Ee=n.n(Ie),we=Object(te.a)((function(e){return{activeFolderName:{display:"flex",alignItems:"center",flexGrow:1,width:"120px",border:"1px solid #cfe8fc",borderRadius:"5px",marginRight:"5px",padding:"5px",boxShadow:"none",outline:"none",background:"#fff",pointerEvents:"auto"}}}));var Fe=function(e){var t=e.title,n=e.edited,i=e.handleClickItemName,o=e.handleGetItemName,r=we();return n?Object(a.jsx)("input",{onClick:i,onChange:o,className:r.activeFolderName,defaultValue:t}):Object(a.jsx)("div",{className:r.inactiveItemName,children:t})},_e=Object(te.a)((function(e){return{listItem:{display:"flex",flexDirection:"column",border:"1px solid #ddd",borderRadius:"5px",margin:"5px",padding:"15px 5px",cursor:"pointer","&:hover":{background:"#cfe8fc"}},activeListItem:{background:"#cfe8fc",color:"#000"},unclickableListItem:{opacity:"0.6",pointerEvents:"none"},unclickableListItems:{opacity:"0.6",pointerEvents:"none"},wrOutsideListItem:{display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"center",width:"100%",minHeight:"40px"},listItemName:{display:"flex",alignItems:"center",flexGrow:1,width:"120px",border:"1px solid #cfe8fc",borderRadius:"5px",marginRight:"5px",padding:"5px",boxShadow:"none",outline:"none",background:"#fff",pointerEvents:"auto"},wrControlBtns:{display:"flex",justifyContent:"flex-end",alignItems:"center"},btnsIncons:{fontSize:"1rem"},controlBtns:{padding:"10px",fontSize:"1rem"},disabledListItemName:{whiteSpace:"nowrap",overflow:"hidden",padding:"5px",textOverflow:"ellipsis"}}})),Te=Object(te.a)((function(e){return{listItem:{display:"flex",flexDirection:"column",border:"1px solid #ddd",borderRadius:"5px",margin:"5px",padding:"15px 5px",backgroundColor:"#fff",cursor:"pointer","&:hover":{border:"1px solid #fff",background:"#3f51b5",color:"#fff"},"&:hover $btnsIncons":{color:"#fff"}},activeListItem:{background:"#3f51b5",color:"#fff"},unclickableListItem:{opacity:"0.6",pointerEvents:"none"},wrOutsideListItem:{display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"center",width:"100%",minHeight:"40px"},listItemName:{display:"flex",alignItems:"center",flexGrow:1,width:"120px",border:"1px solid #cfe8fc",borderRadius:"5px",marginRight:"5px",padding:"5px",boxShadow:"none",outline:"none",background:"#fff",pointerEvents:"auto"},wrControlBtns:{display:"flex",justifyContent:"flex-end",alignItems:"center"},editableControlBtns:{"& svg":{color:"#fff"}},btnsIncons:{fontSize:"1rem"},controlBtns:{padding:"10px",fontSize:"1rem"},timeCreation:{fontSize:"10px"},disabledListItemName:{maxWidth:"266px",paddingRight:"5px",whiteSpace:"nowrap",overflow:"hidden",padding:"5px",textOverflow:"ellipsis"}}})),De=function(e){var t=e.getItemStyle,n=e.typeStyles,i=e.id,o=e.title,r=e.edited,d=e.startTime,c=e.index,l=e.isDrag,s=e.isSelected,p=e.isEditable,b=e.isDisabledFolders,f=e.handleOnActiveItem,u=e.handleClickItemName,j=e.handleGetItemName,m=e.handleOnAcceptItemName,x=e.handleOnEditItemName,N=e.handleOnDeleteItem,h=_e(),g=Te(),v=n?h:g;return Object(a.jsx)(H.b,{draggableId:"".concat(i),index:c,isDragDisabled:l,children:function(e,n){var i;return Object(a.jsxs)("li",Object(O.a)(Object(O.a)(Object(O.a)({onClick:f,className:Object(W.a)(v.listItem,(i={},Object(G.a)(i,v.activeListItem,s),Object(G.a)(i,v.unclickableListItem,p&&!s),Object(G.a)(i,v.unclickableListItems,b),i)),ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:t(n.isDragging,e.draggableProps.style),children:[Object(a.jsxs)("div",{className:v.wrOutsideListItem,children:[Object(a.jsx)(Fe,{classes:v,title:o,edited:r,handleClickItemName:u,handleGetItemName:j}),Object(a.jsxs)("div",{className:v.wrControlBtns,children:[r&&Object(a.jsx)($.a,{onClick:m,"aria-label":"check",className:Object(W.a)(Object(G.a)({},v.editableControlBtns,s)),children:Object(a.jsx)(he.a,{className:v.btnsIncons})}),Object(a.jsx)($.a,{onClick:x,"aria-label":"edit",disabled:r&&s,className:Object(W.a)(v.controlBtns,Object(G.a)({},v.editableControlBtns,s)),children:Object(a.jsx)(ve.a,{className:v.btnsIncons})}),Object(a.jsx)($.a,{onClick:N,"aria-label":"delete",disabled:r&&s,className:Object(W.a)(v.controlBtns,Object(G.a)({},v.editableControlBtns,s)),children:Object(a.jsx)(Ee.a,{className:v.btnsIncons})})]})]}),Object(a.jsx)("div",{className:v.timeCreation,children:d})]}))}})},ye=function(e){Object(me.a)(n,e);var t=Object(xe.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleOnDeleteFolder=function(t){var n=e.props,a=n.folders,i=n.id,o=n.onOpenModal,r=a.findIndex((function(e){return e.id===i}));t.stopPropagation(),o(r,"folder")},e.handleOnEditFolderName=function(t){var n=e.props,a=n.folders,i=n.id,o=n.onActiveFolder,r=n.onEditFolderName,d=a.findIndex((function(e){return e.id===i})),c=a[d],l=Object(O.a)(Object(O.a)({},c),{},{edited:!0});t.stopPropagation(),o(i),r(d,l)},e.handleClickFolderName=function(e){e.stopPropagation()},e.handleGetFolderName=function(t){e.props.getFolderName(t)},e.handleOnAcceptFolderName=function(t){var n=e.props,a=n.folders,i=n.newFolderName,o=n.id,r=n.onAcceptFolderName,d=a.findIndex((function(e){return e.id===o})),c=a[d],l=i||c.title,s=Object(O.a)(Object(O.a)({},c),{},{title:l,edited:!c.edited});t.stopPropagation(),r(d,s)},e.handleOnActiveFolder=function(){var t=e.props,n=t.id,a=t.isMobile,i=t.setOpen,o=t.onActiveFolder;a&&i(!1),o(n)},e.getItemStyle=function(e,t){return Object(O.a)({userSelect:"none",background:e?"#A5B9C9":""},t)},e}return Object(je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.folders,n=e.activeFolderId,i=e.id,o=e.title,r=e.index,d=e.edited,c=e.isDisabledFolders,l=n===i,s=!!n&&t.find((function(e){return e.id===n})).edited;return Object(a.jsx)(De,{getItemStyle:this.getItemStyle,id:i,title:o,index:r,edited:d,typeStyles:"folder",isSelected:l,isEditable:s,isDisabledFolders:c,handleOnActiveItem:this.handleOnActiveFolder,handleClickItemName:this.handleClickFolderName,handleGetItemName:this.handleGetFolderName,handleOnAcceptItemName:this.handleOnAcceptFolderName,handleOnEditItemName:this.handleOnEditFolderName,handleOnDeleteItem:this.handleOnDeleteFolder})}}]),n}(i.Component),Ce={onEditFolderName:function(e,t){return{type:"EDIT_FOLDER_NAME_TO_NOTES",id:e,item:t}},getFolderName:function(e){return{type:"GET_FOLDER_NAME_TO_NOTES",payload:e.target.value}},onAcceptFolderName:function(e,t){return{type:"ACCEPT_FOLDER_NAME_TO_NOTES",id:e,item:t}},onActiveFolder:function(e){return{type:"GET_ACTIVE_FOLDER_TO_NOTES",id:e}},onOpenModal:L},Se=Object(c.b)((function(e){return{folders:e.folders,newFolderName:e.newFolderName,activeFolderId:e.activeFolderId,activeNoteId:e.activeNoteId,newNoteName:e.newNoteName,isDisabledFolders:e.isDisabledFolders}}),Ce)(ye),Ae=function(e){var t=e.classes,n=e.folders,i=e.isMobile,o=e.setOpen;return Object(a.jsx)(H.c,{droppableId:"droppableFolder",isCombineEnabled:!0,children:function(e){return Object(a.jsx)("div",Object(O.a)(Object(O.a)({ref:e.innerRef},e.droppableProps),{},{children:Object(a.jsx)("div",{className:t.wrFolderList,children:Object(a.jsx)("ul",{className:t.folderList,children:n.map((function(e,n){return Object(a.jsx)(Se,{classes:t,id:e.id,title:e.title,index:n,edited:e.edited,isMobile:i,setOpen:o},e.id)}))})})}))}})},Re=Object(te.a)((function(e){return{wrFolderList:{minHeight:"calc(100vh - 124px)","@media screen and (max-width: 599px)":{minHeight:"calc(100vh - 116px)"}},folderList:{width:"100%",margin:0,padding:0,listStyleType:"none"}}})),Le=function(e){var t=e.folders,n=e.setOpen,i=Re(),o=Object(ee.a)("(max-width:667px)");return Object(a.jsx)(a.Fragment,{children:t.length?Object(a.jsx)(Ae,{classes:i,folders:t,isMobile:o,setOpen:n}):Object(a.jsx)(fe,{})})},ke=Object(te.a)((function(e){return{drawer:{width:260,flexShrink:0,"@media screen and (max-width: 667px)":{flexShrink:"1"}},drawerPaper:{width:260,"@media screen and (max-width: 667px)":{width:"100%"}},drawerHeader:Object(O.a)(Object(O.a)({display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",borderBottom:"1px solid #ddd",padding:e.spacing(0,1)},e.mixins.toolbar),{},{"@media screen and (max-width: 667px)":{backgroundColor:"#3f51b5",color:"#fff"}}),wrLogo:{display:"flex",alignItems:"center",width:"100%",fontSize:"1.5rem",fontWeight:"bold"},"\u0441reateNewFolderIcon":{color:"#fff"},drawerCloseBtn:{color:"rgba(0, 0, 0, 0.54)","@media screen and (max-width: 667px)":{color:"#fff"}}}})),Be=function(e){var t=e.folders,n=e.open,i=e.setOpen,o=e.handleOnAddFolder,r=ke(),d=Object(de.a)(),c=Object(ee.a)("(max-width:667px)");return Object(a.jsxs)(oe.a,{className:r.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:r.drawerPaper},children:[Object(a.jsxs)("div",{className:r.drawerHeader,children:[Object(a.jsx)(re.a,{className:r.wrLogo,children:Object(a.jsx)("span",{children:"Apple Notes"})}),c&&Object(a.jsx)($.a,{onClick:o,"aria-label":"create new folder",children:Object(a.jsx)(X.a,{className:r.\u0441reateNewFolderIcon})}),Object(a.jsx)($.a,{onClick:function(){i(!1)},children:"ltr"===d.direction?Object(a.jsx)(le.a,{className:r.drawerCloseBtn}):Object(a.jsx)(pe.a,{className:r.drawerCloseBtn})})]}),Object(a.jsx)(Le,{folders:t,setOpen:i})]})},Me=function(e){Object(me.a)(n,e);var t=Object(xe.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleOnDeleteNote=function(t){var n=e.props,a=n.folders,i=n.activeFolderId,o=n.id,r=n.onOpenModal,d=a.find((function(e){return e.id===i})).notes.findIndex((function(e){return e.id===o}));t.stopPropagation(),r(d,"note")},e.handleOnEditNoteName=function(){var t=e.props,n=t.folders,a=t.activeFolderId,i=t.id,o=t.onEditNoteName,r=t.onDisabledFolders,d=n.find((function(e){return e.id===a})).notes.findIndex((function(e){return e.id===i})),c=n.find((function(e){return e.id===a})).notes[d],l=Object(O.a)(Object(O.a)({},c),{},{edited:!0});o(i,d,l),r()},e.handleGetNoteName=function(t){e.props.getNoteName(t)},e.handleOnAcceptNoteName=function(){var t=e.props,n=t.folders,a=t.activeFolderId,i=t.newNoteName,o=t.id,r=t.onAcceptNoteName,d=t.onDisabledFolders,c=n.find((function(e){return e.id===a})).notes.findIndex((function(e){return e.id===o})),l=n.find((function(e){return e.id===a})).notes[c],s=i||l.title;r(c,Object(O.a)(Object(O.a)({},l),{},{title:s,edited:!l.edited})),d()},e.handleOnActiveNote=function(){var t=e.props,n=t.id;(0,t.onActiveNote)(n)},e.getItemStyle=function(e,t){return Object(O.a)({userSelect:"none",background:e?"#A5B9C9":""},t)},e}return Object(je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.folders,n=e.activeFolderId,i=e.activeNoteId,o=e.id,r=e.title,d=e.startTime,c=e.index,l=e.edited,s=e.isDrag,p=i===o,O=!!i&&t.find((function(e){return e.id===n})).notes.find((function(e){return e.id===i})).edited;return Object(a.jsx)(De,{getItemStyle:this.getItemStyle,id:o,title:r,edited:l,startTime:d,index:c,isDrag:s,isSelected:p,isEditable:O,handleOnActiveItem:this.handleOnActiveNote,handleGetItemName:this.handleGetNoteName,handleOnAcceptItemName:this.handleOnAcceptNoteName,handleOnEditItemName:this.handleOnEditNoteName,handleOnDeleteItem:this.handleOnDeleteNote})}}]),n}(i.Component),Ge={onEditNoteName:function(e,t,n){return{type:"EDIT_NOTE_NAME_TO_FOLDER",id:e,idx:t,item:n}},onDisabledFolders:function(){return{type:"DISABLED_FOLDER"}},getNoteName:function(e){return{type:"GET_NOTE_NAME_TO_FOLDER",payload:e.target.value}},onAcceptNoteName:function(e,t){return{type:"ACCEPT_NOTE_NAME_TO_FOLDER",id:e,item:t}},onActiveNote:function(e){return{type:"GET_ACTIVE_NOTE_TO_FOLDER",id:e}},onOpenModal:L},Pe=Object(c.b)((function(e){return{folders:e.folders,activeFolderId:e.activeFolderId,activeNoteId:e.activeNoteId,newNoteName:e.newNoteName}}),Ge)(Me),We=Object(te.a)((function(e){return{listNotes:{width:"325px",height:"calc(100vh - 64px)",padding:"15px",overflow:"scroll",backgroundColor:"#cfe8fc","@media screen and (max-width: 991px)":{width:"100%",height:"calc(50vh)"}}}})),ze=Object(c.b)((function(e){return{folders:e.folders,activeFolderId:e.activeFolderId}}),null)((function(e){var t=e.folders,n=e.activeFolderId,i=We(),o=Object(ee.a)("(max-width:667px)");return Object(a.jsx)(H.c,{droppableId:"droppableNote",children:function(e){return Object(a.jsx)("div",Object(O.a)(Object(O.a)({ref:e.innerRef},e.droppableProps),{},{children:Object(a.jsx)("div",{className:i.listNotes,children:n?t.find((function(e){return e.id===n})).notes.map((function(e,t){return Object(a.jsx)(Pe,{id:e.id,title:e.title,edited:e.edited,startTime:e.startTime,index:t,isDrag:o},e.id)})):"List of the notes"})}))}})})),He=function(e){Object(me.a)(n,e);var t=Object(xe.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleGetNoteContent=function(t){var n=e.props,a=n.folders,i=n.activeFolderId,o=n.activeNoteId,r=n.getNoteContent,d=a.find((function(e){return e.id===i})).notes.findIndex((function(e){return e.id===o})),c=a.find((function(e){return e.id===i})).notes.find((function(e){return e.id===o})),l=t.target.value?t.target.value:"Add description to note";r(d,Object(O.a)(Object(O.a)({},c),{},{content:l}))},e}return Object(je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.folders,i=e.activeFolderId,o=e.activeNoteId,r=!(!i||!o)&&n.find((function(e){return e.id===i})).notes.find((function(e){return e.id===o})).content,d="".concat(i,"_").concat(o);return Object(a.jsx)("textarea",{onChange:this.handleGetNoteContent,className:t.noteContent,defaultValue:r},d)}}]),n}(i.Component),Ve={getNoteContent:function(e,t){return{type:"GET_CONTENT_TO_NOTE",id:e,item:t}}},Je=Object(c.b)((function(e){return{folders:e.folders,activeFolderId:e.activeFolderId,activeNoteId:e.activeNoteId}}),Ve)(He),$e=Object(te.a)((function(e){return{stubNoteText:{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",border:"none",padding:"15px",resize:"none"}}})),qe=function(){var e=$e();return Object(a.jsx)(re.a,{className:e.stubNoteText,disabled:!0,children:"Please select a note..."})},Ke=function(e){Object(me.a)(n,e);var t=Object(xe.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.activeNoteId;return Object(a.jsx)("div",{className:t.wrNoteContent,children:n?Object(a.jsx)(Je,{classes:t}):Object(a.jsx)(qe,{})})}}]),n}(i.Component),Qe=Object(c.b)((function(e){return{activeNoteId:e.activeNoteId}}),null)(Ke),Ue=n(115),Xe=n(69),Ye=n.n(Xe),Ze=Object(te.a)((function(e){return{modalOverlay:{display:"flex",justifyContent:"center",alignItems:"center",zIndex:"9999",position:"fixed",top:"0",right:"0",bottom:"0",left:"0",padding:"0 30px",background:"linear-gradient(180deg, rgba(241,241,241,0.85) 0%, rgba(241,241,241,1) 100%)",webkitBoxShadow:"0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",mozBoxShadow:"0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",boxShadow:"0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",userSelect:"none"},modalWindow:{width:"100%",maxWidth:"350px",padding:"30px",background:"#fff",webkitBoxShadow:"0px 0px 15px -10px #000000",mozBoxShadow:"0px 0px 15px -10px #000000",boxShadow:"0px 0px 15px -10px #000000"},modalHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"5px",borderBottom:"1px solid #f1f1f1"},modalTitle:{fontSize:"20px"},closeModalBtn:{cursor:"pointer"},modalBody:{margin:"10px 0 15px"},modalFooter:{display:"flex",justifyContent:"flex-end",alignItems:"center"},modalBtns:{padding:"6px 8px",background:"none",boxShadow:"none",fontSize:"0.875rem",color:"#1976d2","&:hover":{backgroundColor:"rgba(25, 118, 210, 0.04)",boxShadow:"none"}},modalBtnCancel:{marginRight:"15px"}}})),et={onDeleteFolder:function(){return{type:"DELETE_FOLDER_TO_NOTES"}},onDeleteNote:function(){return{type:"DELETE_NOTE_TO_FOLDER"}},onCloseModal:function(){return{type:"CLOSE_MODAL_WINDOW"}}},tt=Object(c.b)((function(e){return{typeModal:e.typeModal}}),et)((function(e){var t=e.typeModal,n=e.isOpen,i=e.onDeleteFolder,o=e.onDeleteNote,r=e.onCloseModal,d=Ze(),c=String(t);return Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsx)("div",{className:d.modalOverlay,children:Object(a.jsxs)("div",{className:d.modalWindow,children:[Object(a.jsxs)("div",{className:d.modalHeader,children:[Object(a.jsxs)("div",{className:d.modalTitle,children:["Delete this ",t,"?"]}),Object(a.jsx)(Ye.a,{onClick:r,className:d.closeModalBtn})]}),Object(a.jsx)("div",{className:d.modalBody,children:Object(a.jsxs)("div",{component:"span",className:d.modalText,children:["Are you sure you want to delete this ",t,"?"]})}),Object(a.jsxs)("div",{className:d.modalFooter,children:[Object(a.jsx)(Ue.a,{variant:"contained",className:Object(W.a)(d.modalBtns,d.modalBtnCancel),onClick:r,children:"Cancel"}),Object(a.jsx)(Ue.a,{variant:"contained",color:"primary",className:d.modalBtns,onClick:"note"===c?function(){o(),r()}:function(){i(),r()},children:"Submit"})]})]})})})})),nt=Object(te.a)((function(e){return{root:{display:"flex"},content:{display:"flex",flexDirection:"column",flexGrow:1,height:"calc(100vh - 20px)",marginLeft:-260,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},drawerHeader:Object(O.a)({display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",borderBottom:"1px solid #ddd",padding:e.spacing(0,1)},e.mixins.toolbar),wrColumn:{display:"flex",flexGrow:1,"@media screen and (max-width: 991px)":{flexDirection:"column"}},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},wrNoteContent:{position:"relative",width:"calc(100% - 325px)","@media screen and (max-width: 991px)":{width:"100%",height:"100%"}},noteContent:{position:"absolute",top:0,right:0,bottom:0,left:0,flexGrow:1,width:"100%",border:"none",padding:"15px",resize:"none","&:focus":{outline:"none"}}}}));var at={onReorderFolders:function(e){return{type:"REORDER_FOLDERS_TO_NOTES",list:e}},onReorderNotes:function(e){return{type:"REORDER_NOTES_TO_FOLDER",list:e}},onMoveAndReorder:function(e){return{type:"MOVE_AND_REORDER_NOTES",list:e}},onAddFolder:R},it=Object(c.b)((function(e){return{isOpen:e.isOpen,folders:e.folders,activeFolderId:e.activeFolderId}}),at)((function(e){var t=nt(),n=o.a.useState(!0),i=Object(P.a)(n,2),r=i[0],d=i[1],c=e.folders,l=e.isOpen,s=e.onAddFolder,O=function(e,t,n){var a=Object(p.a)(e),i=a.splice(t,1),o=Object(P.a)(i,1)[0];return a.splice(n,0,o),a};return Object(a.jsx)(H.a,{onDragEnd:function(t){var n=e.folders,a=e.activeFolderId,i=e.onReorderFolders,o=e.onReorderNotes,r=e.onMoveAndReorder,d=t.combine,c=t.source,l=t.destination;null!==d&&"droppableFolder"===d.droppableId&&d.draggableId&&"droppableNote"===c.droppableId&&r(function(e,t,n,a,i){var o,r=Object(p.a)(e),d=Object(p.a)(t).splice(n,1),c=Object(P.a)(d,1)[0],l=Object(p.a)(e.find((function(e){return e.id===a})).notes);return l.push(c),(o=r.find((function(e){return e.id===a})).notes).splice.apply(o,[0,l.length].concat(Object(p.a)(l))),r.find((function(e){return e.id===i})).notes.splice(n,1),r}(n,n.find((function(e){return e.id===a})).notes,c.index,d.draggableId,a)),l&&("droppableFolder"===c.droppableId&&"droppableFolder"===l.droppableId&&i(O(n,c.index,l.index)),"droppableNote"===c.droppableId&&"droppableNote"===l.droppableId&&o(O(n.find((function(e){return e.id===a})).notes,c.index,l.index)))},children:Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(ie,{open:r,setOpen:d}),Object(a.jsx)(Be,{folders:c,open:r,setOpen:d,handleOnAddFolder:function(){var e={id:"id".concat((+new Date).toString(16)),title:"New Foolder",notes:[],edited:!1};s(e)}}),Object(a.jsxs)("main",{className:Object(W.a)(t.content,Object(G.a)({},t.contentShift,r)),children:[Object(a.jsx)("div",{className:t.drawerHeader}),Object(a.jsxs)("div",{className:t.wrColumn,children:[Object(a.jsx)(ze,{}),Object(a.jsx)(Qe,{classes:t})]})]}),Object(a.jsx)(tt,{isOpen:l})]})})}));n(89);d.a.render(Object(a.jsx)(c.a,{store:M,children:Object(a.jsx)(it,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.bea79e4f.chunk.js.map