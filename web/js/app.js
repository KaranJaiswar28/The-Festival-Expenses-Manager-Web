/* Shared: icons, navbar, auth, storage.
   DATA LAYER: Store (donations), Exp (expenses), Auth (users) all use localStorage now.
   To link with your app, replace the bodies of these functions with fetch() calls to your backend. */
const P={heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M20 17v4h-3"/>',
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
rupee:'<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3M9 13c6.7 0 6.7-10 0-10"/>',
card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
bank:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 3 7h18z"/>',
msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
ok:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
no:'<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
ban:'<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
print:'<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2M5.5 5h13l3.5 7v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/>',
home:'<path d="m3 11 9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
wallet:'<path d="M20 7H5a2 2 0 0 1 0-4h13v4M3 5v14a2 2 0 0 0 2 2h15V7M16 14h.01"/>',
gear:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
login:'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M16 7l3 3"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
chev:'<path d="m6 9 6 6 6-6"/>'};
const icon=(n,s)=>`<svg class="ic" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''} aria-hidden="true">${P[n]||''}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inr=n=>'₹'+Number(n||0).toLocaleString('en-IN');
const when=iso=>iso?new Date(iso).toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'}):'—';
const DB={get(k,f){try{const v=JSON.parse(localStorage.getItem(k));return v==null?f:v}catch(e){return f}},set(k,v){localStorage.setItem(k,JSON.stringify(v))}};
const DEF={event:'Festival Expense Manager',committee:'Donation Portal',upi:'festival@upi',amounts:[101,501,1001,2001]};
const Cfg=()=>({...DEF,...DB.get('fem_settings',{})});
/* Donations */
const Store={K:'fem_donations',C:'fem_current',
 all(){return DB.get(this.K,[])},put(l){DB.set(this.K,l)},
 add(d){const l=this.all();l.unshift(d);this.put(l)},
 get(id){return this.all().find(d=>d.id===id)},
 update(id,p){const l=this.all();const i=l.findIndex(d=>d.id===id);if(i<0)return null;Object.assign(l[i],p);this.put(l);return l[i]},
 clear(){localStorage.removeItem(this.K);sessionStorage.removeItem(this.C)},
 cur(){return this.get(sessionStorage.getItem(this.C))},
 setCur(id){sessionStorage.setItem(this.C,id)}};
/* Expenses */
const Exp={all:()=>DB.get('fem_expenses',[]),put:l=>DB.set('fem_expenses',l),clear:()=>localStorage.removeItem('fem_expenses')};
/* Auth (demo: client-side only. A real app must verify passwords on a server.) */
const h53=s=>{let a=0xdeadbeef,b=0x41c6ce57;for(let i=0,c;i<s.length;i++){c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677)}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return(4294967296*(2097151&b)+(a>>>0)).toString(36)};
const hp=p=>h53('fem:'+p);
const COL=[['#ffb52e','#ff5d8f'],['#2dd4bf','#3b82f6'],['#a78bfa','#ec4899'],['#4ade80','#14b8a6'],['#fb923c','#ef4444']];
const ACCESS={home:['Admin','Treasurer','Member'],donations:['Admin','Treasurer','Member'],expenses:['Admin','Treasurer','Member'],settings:['Admin'],profile:['Admin','Treasurer','Member']};
const Auth={
 users(){return DB.get('fem_users',[])},save(u){DB.set('fem_users',u)},
 seed(){if(this.users().length)return;this.save([
  {id:'U1',name:'Festival Admin',email:'admin@festival.app',mobile:'9000000001',role:'Admin',color:0,pw:hp('admin123')},
  {id:'U2',name:'Treasurer',email:'treasurer@festival.app',mobile:'9000000002',role:'Treasurer',color:1,pw:hp('treasurer123')},
  {id:'U3',name:'Volunteer',email:'member@festival.app',mobile:'9000000003',role:'Member',color:2,pw:hp('member123')}])},
 sessions(){return DB.get('fem_sessions',[])},
 start(u,how){const sid='S'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),at=new Date().toISOString();
  DB.set('fem_sessions',[...this.sessions(),{sid,uid:u.id,at}]);
  DB.set('fem_logins',[{uid:u.id,name:u.name,role:u.role,how,at},...DB.get('fem_logins',[])].slice(0,50));
  sessionStorage.setItem('fem_sid',sid);return u},
 me(){const sid=sessionStorage.getItem('fem_sid'),s=this.sessions().find(x=>x.sid===sid);return(s&&this.users().find(u=>u.id===s.uid))||null},
 login(email,pw){const u=this.users().find(u=>u.email===email.trim().toLowerCase());return u&&u.pw===hp(pw)?this.start(u,'Signed in'):null},
 register(o){const l=this.users();if(l.some(u=>u.email===o.email))return null;const u={id:'U'+Date.now().toString(36),name:o.name,email:o.email,mobile:o.mobile,role:'Member',color:l.length%5,pw:hp(o.pw)};l.push(u);this.save(l);return this.start(u,'Registered')},
 update(id,p){const l=this.users();const i=l.findIndex(u=>u.id===id);if(i<0)return null;Object.assign(l[i],p);this.save(l);return l[i]},
 revoke(sid){DB.set('fem_sessions',this.sessions().filter(x=>x.sid!==sid))},
 dropUser(id){this.save(this.users().filter(u=>u.id!==id));DB.set('fem_sessions',this.sessions().filter(x=>x.uid!==id))},
 logout(){this.revoke(sessionStorage.getItem('fem_sid'));sessionStorage.removeItem('fem_sid');location.href='index.html'},
 require(pg){const me=this.me();
  if(!me){location.replace('login.html?next='+encodeURIComponent(location.pathname.split('/').pop()));return null}
  if(!ACCESS[pg].includes(me.role)){document.querySelector('main').innerHTML=`<section class="glass card narrow empty">${icon('shield')}<h1>No access</h1><p class="sub">Your role (${esc(me.role)}) cannot open this page. Ask an Admin to change your access.</p><a class="btn pri" href="home.html">${icon('home')}Go to Home</a></section>`;return null}
  return me}};
Auth.seed();
/* What each role may do */
const CAN={donorDetails:['Admin','Treasurer'],addExpense:['Admin','Treasurer'],edit:['Admin']};
const can=c=>{const m=Auth.me();return !!m&&CAN[c].includes(m.role)};
/* If an Admin removes this login or changes this role, react right away */
const role0=(Auth.me()||{}).role;
window.addEventListener('storage',e=>{
 if(e.key!=='fem_sessions'&&e.key!=='fem_users')return;
 if(!sessionStorage.getItem('fem_sid'))return;
 const m=Auth.me(),pg=document.body.dataset.page;
 if(!m){sessionStorage.removeItem('fem_sid');if(['donate','qr','login'].includes(pg))location.reload();else location.href='login.html?removed=1'}
 else if(m.role!==role0)location.reload()});
const avatar=(u,c)=>{const k=COL[(u.color||0)%5],t=u.name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();return `<span class="av ${c||''}" style="background:linear-gradient(135deg,${k[0]},${k[1]})">${esc(t)}</span>`};
function toast(html,ms){const t=document.createElement('div');t.className='toast glass';t.innerHTML=`<div>${html}</div><button aria-label="Close">×</button>`;t.querySelector('button').onclick=()=>t.remove();document.body.appendChild(t);setTimeout(()=>t.remove(),ms||4000)}

/* Edit dialog (Admin tools). fields:[{k,label,type,options}] */
const Edit={open({title,fields,values,onSave,onDelete}){
 const d=document.createElement('dialog');d.className='dlg glass';
 d.innerHTML=`<form novalidate><h2>${esc(title)}</h2>${fields.map(f=>`<div class="fg"><label for="ef_${f.k}">${esc(f.label)}</label>${f.options?`<select class="sel wide" id="ef_${f.k}">${f.options.map(o=>`<option ${o===values[f.k]?'selected':''}>${esc(o)}</option>`).join('')}</select>`:`<input class="plain" type="${f.type||'text'}" id="ef_${f.k}" value="${f.type==='password'?'':esc(values[f.k])}" autocomplete="off">`}</div>`).join('')}<div class="err" id="ef_er"></div><div class="row"><button class="btn pri" type="submit">Save</button><button class="btn sec" type="button" id="ef_c">Cancel</button>${onDelete?'<button class="btn sec" type="button" id="ef_d" style="color:var(--bad)">Delete</button>':''}</div></form>`;
 document.body.appendChild(d);const cl=()=>{d.close();d.remove()};
 d.querySelector('#ef_c').onclick=cl;d.addEventListener('cancel',()=>d.remove());
 if(onDelete)d.querySelector('#ef_d').onclick=()=>{if(confirm('Delete this record permanently?')){onDelete();cl()}};
 d.querySelector('form').onsubmit=e=>{e.preventDefault();const v={};fields.forEach(f=>v[f.k]=d.querySelector('#ef_'+f.k).value.trim());const er=onSave(v);if(er)d.querySelector('#ef_er').textContent=er;else cl()};
 d.showModal()}};
function stepper(n){const s=['Details','Payment','Receipt'];return `<div class="steps">${s.map((t,i)=>`<div class="step ${i+1<n?'done':''} ${i+1===n?'on':''}"><b>${i+1<n?'✓':i+1}</b>${t}</div>${i<2?'<i></i>':''}`).join('')}</div>`}
function mount(){
 const pg=document.body.dataset.page,me=Auth.me(),c=Cfg();
 const L=[['home.html','home','Home','home'],['index.html','heart','Donate','donate'],['donations.html','list','Donations','donations'],['expenses.html','wallet','Expenses','expenses'],['qr.html','qr','QR Code','qr','dsk'],['settings.html','gear','Settings','settings','dsk']]
  .filter(l=>['donate','qr'].includes(l[3])||(me&&ACCESS[l[3]].includes(me.role)));
 const links=L.map(l=>`<a href="${l[0]}" class="${pg===l[3]?'on':''} ${l[4]||''}" ${pg===l[3]?'aria-current="page"':''}>${icon(l[1])}<span>${l[2]}</span></a>`).join('');
 const brand=`<a class="brand" href="index.html"><span class="om">ॐ</span><span class="bn">${esc(c.event)}<small>${esc(c.committee)}</small></span></a>`;
 const acct=s=>me?`<div class="acct"><button class="avbtn" id="acb${s}" aria-haspopup="menu" aria-expanded="false" aria-label="Account menu">${avatar(me,'sm')}<span class="who">${esc(me.name.split(' ')[0])}<small>${me.role}</small></span>${icon('chev')}</button>
 <div class="menu glass" id="mn${s}" role="menu" hidden><div class="mh">${esc(me.name)}<small>${esc(me.email)} · ${me.role}</small></div><a href="profile.html" role="menuitem">${icon('edit')}Edit profile</a>${ACCESS.settings.includes(me.role)?`<a href="settings.html" role="menuitem">${icon('gear')}Settings</a>`:''}<a href="qr.html" role="menuitem">${icon('qr')}QR code</a><button id="lo${s}" role="menuitem">${icon('logout')}Sign out</button></div></div>`
  :`<a class="btn pri sm" href="login.html">${icon('login')}Sign in</a>`;
 const nav=document.getElementById('nav');
 if(nav){nav.innerHTML=`<div class="nav glass">${brand}<nav class="links" aria-label="Main">${links}</nav>${acct('d')}</div><header class="mtop glass">${brand}${acct('m')}</header><nav class="mbar glass" aria-label="Main">${links}</nav>`;
  ['d','m'].forEach(s=>{const b=document.getElementById('acb'+s),m=document.getElementById('mn'+s);if(!b)return;
   const cl=()=>{m.hidden=true;b.setAttribute('aria-expanded','false')};
   b.onclick=e=>{e.stopPropagation();m.hidden=!m.hidden;b.setAttribute('aria-expanded',String(!m.hidden))};
   document.addEventListener('click',e=>{if(!m.contains(e.target))cl()});document.addEventListener('keydown',e=>{if(e.key==='Escape')cl()});
   document.getElementById('lo'+s).onclick=()=>Auth.logout()})}
 document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=icon(e.dataset.i,e.dataset.s));
}
document.addEventListener('DOMContentLoaded',mount);
