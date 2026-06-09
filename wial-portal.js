const CC={
  pt:{n:'Portugal',f:'🇵🇹',l:'pt',lang:'Português',ch:'Portugal Chapter',cur:'€'},
  us:{n:'United States',f:'🇺🇸',l:'en',lang:'English',ch:'United States Chapter',cur:'$'},
  ng:{n:'Nigeria',f:'🇳🇬',l:'en',lang:'English',ch:'Nigeria Chapter',cur:'₦'},
  ke:{n:'Kenya',f:'🇰🇪',l:'en',lang:'English',ch:'Kenya Chapter',cur:'KSh'},
  ph:{n:'Philippines',f:'🇵🇭',l:'en',lang:'English',ch:'Philippines Chapter',cur:'₱'},
  de:{n:'Germany',f:'🇩🇪',l:'de',lang:'Deutsch',ch:'Germany Chapter',cur:'€'},
  gh:{n:'Ghana',f:'🇬🇭',l:'en',lang:'English',ch:'Ghana Chapter',cur:'₵'},
  fr:{n:'France',f:'🇫🇷',l:'fr',lang:'Français',ch:'France Chapter',cur:'€'},
  mx:{n:'Mexico',f:'🇲🇽',l:'es',lang:'Español',ch:'Mexico Chapter',cur:'$'},
};
const allC=['pt','us','ng','ke','ph','de','gh','fr','mx'];
const AVCOLORS=['#0072B2','#009E73','#7A68A6','#D55E00','#E69F00','#c0152a','#00a0b0','#17324d'];
const mapPins={us:{x:170,y:162,n:24},mx:{x:163,y:218,n:6},pt:{x:450,y:152,n:14},fr:{x:476,y:142,n:9},de:{x:498,y:130,n:8},gh:{x:462,y:250,n:4},ng:{x:485,y:244,n:7},ke:{x:538,y:270,n:6},ph:{x:788,y:224,n:5}};

const coaches=[
  {name:'Sarah Chen',i:'SC',c:'us',cert:'SALC',r:4.8,rev:118,skills:['leadership','communication','time management'],spec:'Executive leadership, high-growth teams, organisational change',hist:'Acme Corporation (2021–2024) · Delta Health (2022–2023) · McKinsey Programme (2020)',badges:['SALC Certified','Global Mentor','Top Rated 2024'],bio:'Executive leadership coach focused on high-growth teams.',ok:true,course:'Leadership Essentials',price:'$499',flow:82},
  {name:'Beatriz Silva',i:'BS',c:'pt',cert:'SALC',r:4.7,rev:96,skills:['leadership','conflict resolution','team bonding'],spec:'Conflict resolution, team dynamics, Portuguese business culture',hist:'EDP Energy (2020–2024) · Sonae Group (2019–2021)',badges:['SALC Certified','Affiliate Lead'],bio:'Portugal chapter lead and senior action learning facilitator.',ok:true,course:'Conflict Resolution Sprint',price:'€420',flow:67},
  {name:'Sophie Martin',i:'SM',c:'fr',cert:'SALC',r:4.7,rev:88,skills:['leadership','communication','stress management'],spec:'Multinational teams, communication strategy',hist:'Danone (2021–2024) · Air France (2020–2022)',badges:['SALC Certified','Client Favourite'],bio:'Leadership and communication coach for multinational teams.',ok:true,course:'Communication for Leaders',price:'€450',flow:74},
  {name:'Lucía Torres',i:'LT',c:'mx',cert:'PALC',r:4.2,rev:72,skills:['communication','team bonding','time management'],spec:'Cross-functional teams, team performance',hist:'Grupo Norte (2020–2024) · Cemex HR Academy (2022)',badges:['PALC Certified','Regional Coach'],bio:'Regional coach supporting cross-functional team performance.',ok:true,course:'Team Bonding Lab',price:'$390',flow:55},
  {name:'Njeri Kilonzo',i:'NK',c:'ke',cert:'PALC',r:4.3,rev:63,skills:['leadership','team bonding','stress management'],spec:'Resilient teams, people managers, African business context',hist:'Safaricom Leadership Lab (2021–2024) · KCB Group (2022)',badges:['PALC Certified','Africa Cohort Lead'],bio:'Coach focused on resilient teams and people managers.',ok:true,course:'Resilient Leadership',price:'$410',flow:60},
  {name:'Ama Boateng',i:'AB',c:'gh',cert:'CALC',r:4.0,rev:41,skills:['stress management','team bonding','communication'],spec:'People capability, team alignment, West Africa',hist:'Ecobank Academy (2022–2024) · GCB Bank (2023)',badges:['CALC Certified','Emerging Coach'],bio:'Facilitator for people capability and team alignment.',ok:true,course:'Stress Management Studio',price:'$280',flow:45},
  {name:'Jonas Keller',i:'JK',c:'de',cert:'PALC',r:3.9,rev:54,skills:['time management','communication','leadership'],spec:'Operational excellence, execution clarity, manufacturing',hist:'Siemens AG (2020–2024) · Bosch (2022–2023)',badges:['PALC Certified'],bio:'Coach for operational excellence and execution clarity.',ok:false,course:'Time Management Mastery',price:'€395',flow:0},
  {name:'Miguel Santos',i:'MS',c:'ph',cert:'PALC',r:4.1,rev:48,skills:['communication','team bonding','leadership'],spec:'People enablement, leadership readiness, Southeast Asia',hist:'Aboitiz People Team (2021–2024) · BDO (2022)',badges:['PALC Certified','Regional Facilitator'],bio:'Coach for people enablement and leadership readiness.',ok:true,course:'Communication for Teams',price:'$360',flow:58},
  {name:'Leah James',i:'LJ',c:'ng',cert:'CALC',r:3.5,rev:22,skills:['leadership','time management'],spec:'Emerging leaders, execution habits, Nigeria',hist:'Zenith Bank Pilot Team (2023–2024)',badges:['CALC Certified'],bio:'Coach focused on emerging leaders and execution habits.',ok:false,course:'Execution Habits',price:'$260',flow:0},
];
const orgClients=[{n:'Acme Corporation',l:'AC',c:'us',s:'Technology',cn:3},{n:'Bayer AG',l:'BA',c:'de',s:'Pharma',cn:2},{n:'EDP Energy',l:'EP',c:'pt',s:'Energy',cn:4},{n:'Safaricom',l:'SF',c:'ke',s:'Telecom',cn:1},{n:'DBS Bank',l:'DB',c:'ph',s:'Finance',cn:2},{n:'Grupo Norte',l:'GN',c:'mx',s:'Manufacturing',cn:1}];
const cMetrics={pt:{n:14,rev:'€26.2K',rem:6,g:'+12%'},us:{n:24,rev:'$61.4K',rem:9,g:'+18%'},ng:{n:7,rev:'$9.8K',rem:3,g:'+8%'},ke:{n:6,rev:'$8.7K',rem:2,g:'+10%'},ph:{n:5,rev:'$7.1K',rem:2,g:'+9%'},de:{n:8,rev:'€18.3K',rem:4,g:'+11%'},gh:{n:4,rev:'$5.4K',rem:1,g:'+7%'},fr:{n:9,rev:'€19.9K',rem:5,g:'+14%'},mx:{n:6,rev:'$11.6K',rem:2,g:'+9%'}};
const events=[{d:'02',m:'Apr',t:'CALC Certification Workshop — Lisbon',ch:'Portugal',v:false,rsvp:12,type:'Certification'},{d:'05',m:'Apr',t:'Action Learning Masterclass (Virtual)',ch:'Global',v:true,rsvp:48,type:'Masterclass'},{d:'10',m:'Apr',t:'Leadership Coaching Sprint — Lagos',ch:'Nigeria',v:false,rsvp:22,type:'Workshop'},{d:'15',m:'Apr',t:'SALC Cohort Kick-off — USA',ch:'United States',v:true,rsvp:30,type:'Certification'},{d:'20',m:'Apr',t:'Team Bonding Intensive — Manila',ch:'Philippines',v:false,rsvp:18,type:'Workshop'},{d:'28',m:'Apr',t:'WIAL Global Coaches Summit',ch:'Global',v:true,rsvp:120,type:'Summit'}];
const forums=[{t:"Finding Action Learning coaches for healthcare sector?",a:'Maria Chen',r:12,tag:'Coach Search',time:'2h ago'},{t:"Comparing CALC vs PALC — what is the difference?",a:'James O.',r:8,tag:'Certification',time:'5h ago'},{t:'Best practices for virtual Action Learning sessions',a:'Priya S.',r:24,tag:'Best Practice',time:'1d ago'},{t:'Coaches in Southeast Asia — recommendations?',a:'Tan Wei',r:6,tag:'Regional',time:'2d ago'}];
const jobs=[{t:'Senior Action Learning Coach (SALC+)',o:'Acme Corporation',loc:'San Francisco, USA',s:'$140–180K',type:'Full-time',cert:'SALC',dl:'Apr 15'},{t:'Leadership Development Facilitator',o:'Bayer AG',loc:'Berlin, Germany',s:'€90–120K',type:'Contract',cert:'PALC',dl:'Apr 20'},{t:'Regional CALC Coach — West Africa',o:'Ecobank',loc:'Accra, Ghana',s:'₵80K',type:'Full-time',cert:'CALC',dl:'May 1'},{t:'Team Development Coach',o:'Safaricom',loc:'Nairobi, Kenya',s:'KSh 1.8M',type:'Full-time',cert:'PALC',dl:'May 5'}];
const emailTmpls=[{t:'Recertification Reminder',seg:'CALC coaches — 3 months to deadline',sub:'⏰ Your certification expires in 3 months'},{t:'New Event Announcement',seg:'All chapter members',sub:'🎓 New Workshop: Leadership Masterclass'},{t:'Chapter Newsletter',seg:'Portugal Chapter',sub:'🇵🇹 WIAL Portugal — Monthly Update'},{t:'Dues Reminder',seg:'Coaches with outstanding dues',sub:'💳 WIAL dues payment pending'}];

const testimonialsByLang={
  en:{
    admin:[
      {txt:'Managing our chapter through the WIAL platform has been transformative. Branding is consistent and we can focus on local coaches.',star:5,auth:'Chapter Lead, Nigeria',role:'Admin'},
      {txt:'The event management tools allowed us to get our local certification calendar visible globally for the first time.',star:5,auth:'Chapter Lead, Philippines',role:'Admin'},
      {txt:'Dues collection used to be completely manual. Now it runs automatically and reports to global HQ.',star:4,auth:'Chapter Lead, France',role:'Admin'},
    ],
    coach:[
      {txt:'My profile in the WIAL directory brought three new client enquiries within a week of going live.',star:5,auth:'Sarah Chen, SALC · USA',role:'Coach'},
      {txt:'The CE credit tracker finally gives me one place to manage my recertification. Reminder emails are a lifesaver.',star:5,auth:'Jonas Keller, PALC · Germany',role:'Coach'},
      {txt:'The job board surfaced an opportunity I would never have found otherwise. Placed in a role within 2 weeks.',star:4,auth:'Njeri Kilonzo, PALC · Kenya',role:'Coach'},
    ],
    client:[
      {txt:'Action Learning transformed how our leadership team tackles complex problems. The sessions were incredibly impactful.',star:5,auth:'Marcus Weber, Bayer AG · Germany',role:'Client'},
      {txt:'The AI search found exactly the right SALC coach for our manufacturing team — in under 30 seconds.',star:5,auth:'Priya Sharma, DBS Bank · Singapore',role:'Client'},
      {txt:'Sarah brought fresh perspectives. The ROI on this coaching programme exceeded all expectations.',star:4,auth:'James Mitchell, Acme Corp · USA',role:'Client'},
      {txt:'We found and enrolled three coaches for our internal leadership programme through WIAL in under a week.',star:5,auth:'Ana Rodrigues, Embraer · Brazil',role:'Client'},
    ],
    superadmin:[
      {txt:'The badge approval workflow is exactly what we needed. Nothing goes live until the Executive Director signs off.',star:5,auth:'WIAL HQ Reviewer',role:'Global Admin'},
      {txt:'Pushing a branding update to all 9 chapter sites in one click is a game-changer for global consistency.',star:5,auth:'Global Operations Team',role:'Global Admin'},
    ],
    creator:[
      {txt:'I can update events and testimonials for my chapter without ever touching the global template. Clean separation.',star:5,auth:'Content Lead, USA',role:'Content Creator'},
    ],
  },
  pt:{
    admin:[
      {txt:'Gerir o nosso capítulo através da plataforma WIAL foi transformador. A marca mantém-se consistente e podemos focar-nos nos coaches locais.',star:5,auth:'Líder do Capítulo, Nigéria',role:'Admin'},
      {txt:'As ferramentas de gestão de eventos permitiram tornar o nosso calendário local de certificação visível globalmente pela primeira vez.',star:5,auth:'Líder do Capítulo, Filipinas',role:'Admin'},
      {txt:'A cobrança de quotas costumava ser totalmente manual. Agora funciona automaticamente e envia relatórios para a sede global.',star:4,auth:'Líder do Capítulo, França',role:'Admin'},
    ],
    coach:[
      {txt:'O meu perfil no diretório WIAL trouxe três novos contactos de clientes numa semana após ficar ativo.',star:5,auth:'Sarah Chen, SALC · EUA',role:'Coach'},
      {txt:'O registo de créditos de formação contínua finalmente dá-me um único lugar para gerir a minha recertificação. Os lembretes por email ajudam imenso.',star:5,auth:'Jonas Keller, PALC · Alemanha',role:'Coach'},
      {txt:'O quadro de oportunidades mostrou-me uma vaga que eu nunca teria encontrado de outra forma. Fui colocado numa função em duas semanas.',star:4,auth:'Njeri Kilonzo, PALC · Quénia',role:'Coach'},
    ],
    client:[
      {txt:'A Action Learning transformou a forma como a nossa equipa de liderança enfrenta problemas complexos. As sessões tiveram um impacto enorme.',star:5,auth:'Marcus Weber, Bayer AG · Alemanha',role:'Client'},
      {txt:'A pesquisa com IA encontrou exatamente o coach SALC certo para a nossa equipa de manufatura em menos de 30 segundos.',star:5,auth:'Priya Sharma, DBS Bank · Singapura',role:'Client'},
      {txt:'A Sarah trouxe perspetivas novas. O retorno deste programa de coaching superou todas as expectativas.',star:4,auth:'James Mitchell, Acme Corp · EUA',role:'Client'},
      {txt:'Encontrámos e inscrevemos três coaches para o nosso programa interno de liderança através da WIAL em menos de uma semana.',star:5,auth:'Ana Rodrigues, Embraer · Brasil',role:'Client'},
    ],
    superadmin:[
      {txt:'O fluxo de aprovação de distintivos é exatamente o que precisávamos. Nada fica público até a Diretora Executiva aprovar.',star:5,auth:'Revisor WIAL HQ',role:'Global Admin'},
      {txt:'Enviar uma atualização de marca para os 9 sites de capítulos com um clique mudou completamente a consistência global.',star:5,auth:'Equipa Global de Operações',role:'Global Admin'},
    ],
    creator:[
      {txt:'Consigo atualizar eventos e testemunhos do meu capítulo sem tocar no template global. A separação está muito bem feita.',star:5,auth:'Responsável de Conteúdo, EUA',role:'Content Creator'},
    ],
  },
  es:{
    admin:[
      {txt:'Gestionar nuestro capítulo a través de la plataforma WIAL ha sido transformador. La marca es consistente y podemos centrarnos en los coaches locales.',star:5,auth:'Líder del Capítulo, Nigeria',role:'Admin'},
      {txt:'Las herramientas de eventos nos permitieron hacer visible globalmente nuestro calendario local de certificación por primera vez.',star:5,auth:'Líder del Capítulo, Filipinas',role:'Admin'},
      {txt:'La recaudación de cuotas solía ser completamente manual. Ahora funciona automáticamente y reporta a la sede global.',star:4,auth:'Líder del Capítulo, Francia',role:'Admin'},
    ],
    coach:[
      {txt:'Mi perfil en el directorio de WIAL generó tres nuevas consultas de clientes en una semana después de publicarse.',star:5,auth:'Sarah Chen, SALC · EE. UU.',role:'Coach'},
      {txt:'El seguimiento de créditos de educación continua por fin me da un solo lugar para gestionar mi recertificación. Los recordatorios por correo son una gran ayuda.',star:5,auth:'Jonas Keller, PALC · Alemania',role:'Coach'},
      {txt:'La bolsa de trabajo mostró una oportunidad que nunca habría encontrado de otra manera. Conseguí un puesto en dos semanas.',star:4,auth:'Njeri Kilonzo, PALC · Kenia',role:'Coach'},
    ],
    client:[
      {txt:'Action Learning transformó la forma en que nuestro equipo de liderazgo aborda problemas complejos. Las sesiones tuvieron un impacto enorme.',star:5,auth:'Marcus Weber, Bayer AG · Alemania',role:'Client'},
      {txt:'La búsqueda con IA encontró exactamente al coach SALC adecuado para nuestro equipo de manufactura en menos de 30 segundos.',star:5,auth:'Priya Sharma, DBS Bank · Singapur',role:'Client'},
      {txt:'Sarah aportó perspectivas nuevas. El retorno de este programa de coaching superó todas las expectativas.',star:4,auth:'James Mitchell, Acme Corp · EE. UU.',role:'Client'},
      {txt:'Encontramos e inscribimos a tres coaches para nuestro programa interno de liderazgo a través de WIAL en menos de una semana.',star:5,auth:'Ana Rodrigues, Embraer · Brasil',role:'Client'},
    ],
    superadmin:[
      {txt:'El flujo de aprobación de insignias es exactamente lo que necesitábamos. Nada se publica hasta que la Directora Ejecutiva lo aprueba.',star:5,auth:'Revisor de WIAL HQ',role:'Global Admin'},
      {txt:'Enviar una actualización de marca a los 9 sitios de capítulos con un solo clic cambió por completo la consistencia global.',star:5,auth:'Equipo Global de Operaciones',role:'Global Admin'},
    ],
    creator:[
      {txt:'Puedo actualizar eventos y testimonios de mi capítulo sin tocar la plantilla global. La separación es muy limpia.',star:5,auth:'Responsable de Contenido, EE. UU.',role:'Content Creator'},
    ],
  },
  fr:{
    admin:[
      {txt:'Gérer notre chapitre via la plateforme WIAL a été transformateur. La marque reste cohérente et nous pouvons nous concentrer sur les coaches locaux.',star:5,auth:'Responsable du Chapitre, Nigeria',role:'Admin'},
      {txt:'Les outils de gestion d’événements nous ont permis de rendre notre calendrier local de certification visible dans le monde entier pour la première fois.',star:5,auth:'Responsable du Chapitre, Philippines',role:'Admin'},
      {txt:'La collecte des cotisations était entièrement manuelle. Désormais, elle fonctionne automatiquement et remonte au siège mondial.',star:4,auth:'Responsable du Chapitre, France',role:'Admin'},
    ],
    coach:[
      {txt:'Mon profil dans l`annuaire WIAL a généré trois nouvelles demandes clients en une semaine après sa mise en ligne.',star:5,auth:'Sarah Chen, SALC · États-Unis',role:'Coach'},
      {txt:'Le suivi des crédits de formation continue me donne enfin un seul endroit pour gérer ma recertification. Les rappels par e-mail sont précieux.',star:5,auth:'Jonas Keller, PALC · Allemagne',role:'Coach'},
      {txt:'Le tableau d’offres a fait remonter une opportunité que je n’aurais jamais trouvée autrement. J’ai été placé sur une mission en deux semaines.',star:4,auth:'Njeri Kilonzo, PALC · Kenya',role:'Coach'},
    ],
    client:[
      {txt:'L’Action Learning a transformé la manière dont notre équipe de direction aborde les problèmes complexes. Les séances ont eu un impact remarquable.',star:5,auth:'Marcus Weber, Bayer AG · Allemagne',role:'Client'},
      {txt:'La recherche assistée par IA a trouvé exactement le coach SALC adapté à notre équipe industrielle en moins de 30 secondes.',star:5,auth:'Priya Sharma, DBS Bank · Singapour',role:'Client'},
      {txt:'Sarah a apporté des perspectives nouvelles. Le retour sur investissement de ce programme de coaching a dépassé toutes les attentes.',star:4,auth:'James Mitchell, Acme Corp · États-Unis',role:'Client'},
      {txt:'Nous avons trouvé et inscrit trois coaches pour notre programme interne de leadership via WIAL en moins d’une semaine.',star:5,auth:'Ana Rodrigues, Embraer · Brésil',role:'Client'},
    ],
    superadmin:[
      {txt:'Le workflow d’approbation des badges est exactement ce qu’il nous fallait. Rien n’est publié tant que la Directrice Exécutive n’a pas validé.',star:5,auth:'Relecteur WIAL HQ',role:'Global Admin'},
      {txt:'Déployer une mise à jour de marque sur les 9 sites de chapitres en un clic a complètement changé la cohérence globale.',star:5,auth:'Équipe Opérations Globales',role:'Global Admin'},
    ],
    creator:[
      {txt:'Je peux mettre à jour les événements et témoignages de mon chapitre sans jamais toucher au modèle global. La séparation est excellente.',star:5,auth:'Responsable Contenu, États-Unis',role:'Content Creator'},
    ],
  },
  de:{
    admin:[
      {txt:'Die Verwaltung unseres Kapitels über die WIAL-Plattform war transformativ. Das Branding bleibt konsistent und wir können uns auf lokale Coaches konzentrieren.',star:5,auth:'Kapitelleitung, Nigeria',role:'Admin'},
      {txt:'Die Event-Tools haben es uns ermöglicht, unseren lokalen Zertifizierungskalender erstmals weltweit sichtbar zu machen.',star:5,auth:'Kapitelleitung, Philippinen',role:'Admin'},
      {txt:'Die Beitragserhebung war früher komplett manuell. Jetzt läuft sie automatisch und berichtet an die globale Zentrale.',star:4,auth:'Kapitelleitung, Frankreich',role:'Admin'},
    ],
    coach:[
      {txt:'Mein Profil im WIAL-Verzeichnis brachte innerhalb einer Woche nach Veröffentlichung drei neue Kundenanfragen.',star:5,auth:'Sarah Chen, SALC · USA',role:'Coach'},
      {txt:'Die Erfassung der Fortbildungspunkte gibt mir endlich einen zentralen Ort für meine Rezertifizierung. Die E-Mail-Erinnerungen sind enorm hilfreich.',star:5,auth:'Jonas Keller, PALC · Deutschland',role:'Coach'},
      {txt:'Die Jobbörse hat eine Gelegenheit sichtbar gemacht, die ich sonst nie gefunden hätte. Innerhalb von zwei Wochen wurde ich vermittelt.',star:4,auth:'Njeri Kilonzo, PALC · Kenia',role:'Coach'},
    ],
    client:[
      {txt:'Action Learning hat verändert, wie unser Führungsteam komplexe Probleme angeht. Die Sitzungen waren äußerst wirkungsvoll.',star:5,auth:'Marcus Weber, Bayer AG · Deutschland',role:'Client'},
      {txt:'Die KI-Suche fand in weniger als 30 Sekunden genau den richtigen SALC-Coach für unser Fertigungsteam.',star:5,auth:'Priya Sharma, DBS Bank · Singapur',role:'Client'},
      {txt:'Sarah brachte neue Perspektiven ein. Der ROI dieses Coaching-Programms hat alle Erwartungen übertroffen.',star:4,auth:'James Mitchell, Acme Corp · USA',role:'Client'},
      {txt:'Wir haben über WIAL innerhalb einer Woche drei Coaches für unser internes Leadership-Programm gefunden und eingeschrieben.',star:5,auth:'Ana Rodrigues, Embraer · Brasilien',role:'Client'},
    ],
    superadmin:[
      {txt:'Der Badge-Freigabeprozess ist genau das, was wir gebraucht haben. Nichts wird veröffentlicht, bevor die Executive Director freigegeben hat.',star:5,auth:'WIAL HQ Reviewer',role:'Global Admin'},
      {txt:'Eine Markenaktualisierung mit einem Klick auf alle 9 Chapter-Sites auszurollen, hat die globale Konsistenz grundlegend verbessert.',star:5,auth:'Global Operations Team',role:'Global Admin'},
    ],
    creator:[
      {txt:'Ich kann Events und Testimonials für mein Chapter aktualisieren, ohne die globale Vorlage anzufassen. Die Trennung ist sehr sauber.',star:5,auth:'Content Lead, USA',role:'Content Creator'},
    ],
  }
};
function getRoleTestimonials(){
  const loc=curLocale();
  const pack=testimonialsByLang[loc]||testimonialsByLang.en;
  return (pack[role]||pack.client||testimonialsByLang.en.client);
}


const roleUsers={
  admin:{name:'Beatriz Silva',i:'BS',title:'WIAL Portugal Chapter Lead',c:'pt',email:'chapter.lead@wial.org',ph:'+351 912 440 880',level:'Admin · Chapter Lead'},
  creator:{name:'Alex Johnson',i:'AJ',title:'WIAL USA Content Creator',c:'us',email:'content.creator@wial.org',ph:'+1 (212) 555-0144',level:'Content Creator · USA'},
  coach:{name:'Sarah Chen',i:'SC',title:'SALC Certified Coach',c:'us',email:'coach@wial.org',ph:'+1 (415) 882-3947',level:'Coach · SALC'},
  superadmin:{name:'Michael Grant',i:'MG',title:'WIAL Global Administrator',c:'us',email:'global.admin@wial.org',ph:'+1 (202) 555-0182',level:'Super Admin · Global'},
  client:{name:'Global Client',i:'GC',title:'Client / Organisation',c:'us',email:'client@wial.org',ph:'—',level:'Client · Discovery'},
};
const roleNav={
  admin:{main:[['⬛','Dashboard'],['🏗️','Chapter Sites'],['👤','Profile'],['💬','Testimonials']],ops:[['📅','Events'],['📧','Email Campaigns'],['🏢','Clients']],acct:[['💳','Payments'],['⚙️','Settings']]},
  creator:{main:[['⬛','Dashboard'],['👤','Profile'],['📅','Schedule']],ops:[['🏗️','Chapter Site'],['💬','Testimonials'],['📅','Events'],['🏢','Clients']],acct:[['⚙️','Settings']]},
  coach:{main:[['⬛','Dashboard'],['👤','Profile'],['💬','Testimonials'],['📅','Schedule']],ops:[['🏢','Clients'],['⏱️','Hours Log'],['🎓','Certification'],['🧳','Job Board']],acct:[['⚙️','Settings']]},
  superadmin:{main:[['⬛','Dashboard'],['👤','Profile'],['📅','Schedule']],ops:[['🏗️','Chapter Sites'],['🏅','Badge Approvals'],['📧','Email Campaigns'],['📅','Events']],acct:[['⚙️','Settings']]},
  client:{main:[['⬛','Dashboard'],['👤','Profile']],ops:[['🔍','Find Coaches'],['📅','Events'],['💬','Forums']],acct:[['⚙️','Settings']]},
};

const corePages={
  admin:['About WIAL','Certification','Coach Directory','Resources & Library','Events Calendar','Contact'],
  creator:['About WIAL','Resources & Library','Events Calendar','Contact'],
  coach:['About WIAL','Certification','Resources & Library','Events Calendar','Contact'],
  superadmin:['About WIAL','Certification','Coach Directory','Events Calendar'],
  client:['About WIAL','Certification','Coach Directory','Resources & Library','Events Calendar','Contact'],
};


let role='',country='us',prefLang='en',userEmail='',forceEn=false;
let clQ='',clCountry='',clRes=[];
let chatOpen=false,chatInited=false;
let activeCPage='';


function toggleA11y(){
  const p=document.getElementById('a11yPanel');
  const btn=document.getElementById('a11yBtn');
  const open=p.classList.toggle('open');
  btn.setAttribute('aria-expanded',String(open));
}
function toggleMode(cls,id){
  if(cls==='a11y-large'){document.documentElement.classList.toggle(cls);}
  else{document.body.classList.toggle(cls);}
  const btn=document.getElementById(id);
  const on=cls==='a11y-large'?document.documentElement.classList.contains(cls):document.body.classList.contains(cls);
  btn.classList.toggle('on',on);
  btn.setAttribute('aria-pressed',String(on));
}

document.documentElement.addEventListener('classChange',()=>{});

document.addEventListener('keydown',e=>{if(e.key==='Tab'&&document.body.classList.contains('a11y-keyboard')){/* already active */}});
document.addEventListener('click',e=>{if(!e.target.closest('.a11y-panel')&&!e.target.closest('#a11yBtn'))document.getElementById('a11yPanel').classList.remove('open');});

const i18n={
  en:{hero_tag:'Action Learning',hero_h:'What is Action Learning?',hero_p:'Action Learning is a new way of thinking, doing business and interacting in teams. WIAL is the world\'s leading certifying body for Action Learning coaches across 20+ countries.',btn1:'Find a Coach',btn2:'View Certification',hs1:'Countries',hs2:'Certified Coaches',hs3:'Cert Levels',hs4:'Organisations',ct_tag:'Contact',ct_title:'Get in Touch',ct_info_h:'WIAL Global Headquarters',ct_form_h:'Send us a message',res_tag:'Resources & Library',res_title:'Knowledge & Research',ev_tag:'Events',ev_title:'Upcoming Events',cl_tag:'Our Clients',cl_title:'Organisations supported by WIAL',dir_title:'Search for Action Learning Coaches',cert_tag:'Certifications',cert_title:"WIAL is the world's leading certifying body",recert_h:'📋 Recertification',alt_tag:'Action Learning',alt_title:'The Action Learning Solution',banner:'This page is in a non-English language.',translate_btn:'Translate to English',show_orig:'Show original language'},
  pt:{hero_tag:'Aprendizagem Ativa',hero_h:'O que é Aprendizagem Ativa?',hero_p:'A Aprendizagem Ativa é uma nova forma de pensar, fazer negócios e interagir em equipes. A WIAL é o principal organismo certificador de coaches de Aprendizagem Ativa em 20+ países.',btn1:'Encontrar Coach',btn2:'Ver Certificação',hs1:'Países',hs2:'Coaches Certificados',hs3:'Níveis',hs4:'Organizações',ct_tag:'Contacto',ct_title:'Entre em Contacto',ct_info_h:'Sede Global WIAL',ct_form_h:'Envie-nos uma mensagem',res_tag:'Recursos & Biblioteca',res_title:'Conhecimento & Pesquisa',ev_tag:'Eventos',ev_title:'Próximos Eventos',cl_tag:'Os Nossos Clientes',cl_title:'Organizações apoiadas pela WIAL',dir_title:'Pesquisar Coaches de Aprendizagem Ativa',cert_tag:'Certificações',cert_title:'A WIAL é o principal organismo certificador',recert_h:'📋 Recertificação',alt_tag:'Aprendizagem Ativa',alt_title:'A Solução de Aprendizagem Ativa',banner:'Esta página está num idioma não inglês.',translate_btn:'Traduzir para inglês',show_orig:'Mostrar idioma original'},
  es:{hero_tag:'Aprendizaje en Acción',hero_h:'¿Qué es el Aprendizaje en Acción?',hero_p:'El Aprendizaje en Acción es una nueva forma de pensar, hacer negocios e interactuar en equipos. WIAL es el principal organismo certificador de coaches en 20+ países.',btn1:'Encontrar Coach',btn2:'Ver Certificación',hs1:'Países',hs2:'Coaches Certificados',hs3:'Niveles',hs4:'Organizaciones',ct_tag:'Contacto',ct_title:'Ponte en Contacto',ct_info_h:'Sede Global WIAL',ct_form_h:'Envíanos un mensaje',res_tag:'Recursos y Biblioteca',res_title:'Conocimiento e Investigación',ev_tag:'Eventos',ev_title:'Próximos Eventos',cl_tag:'Nuestros Clientes',cl_title:'Organizaciones apoyadas por WIAL',dir_title:'Buscar Coaches de Aprendizaje en Acción',cert_tag:'Certificaciones',cert_title:'WIAL es el principal organismo certificador',recert_h:'📋 Recertificación',alt_tag:'Aprendizaje en Acción',alt_title:'La Solución de Aprendizaje en Acción',banner:'Esta página está en un idioma no inglés.',translate_btn:'Traducir al inglés',show_orig:'Mostrar idioma original'},
  fr:{hero_tag:"Apprentissage par l'Action",hero_h:"Qu'est-ce que l'Apprentissage par l'Action ?",hero_p:"L'Apprentissage par l'Action est une nouvelle façon de penser, de faire des affaires et d'interagir en équipe. WIAL est le principal organisme certificateur de coaches dans 20+ pays.",btn1:'Trouver un Coach',btn2:'Voir la Certification',hs1:'Pays',hs2:'Coaches Certifiés',hs3:'Niveaux',hs4:'Organisations',ct_tag:'Contact',ct_title:'Nous Contacter',ct_info_h:'Siège Mondial WIAL',ct_form_h:'Envoyez-nous un message',res_tag:'Ressources & Bibliothèque',res_title:'Connaissances & Recherche',ev_tag:'Événements',ev_title:'Prochains Événements',cl_tag:'Nos Clients',cl_title:'Organisations soutenues par WIAL',dir_title:'Rechercher des Coaches en Apprentissage par l\'Action',cert_tag:'Certifications',cert_title:'WIAL est le principal organisme certificateur',recert_h:'📋 Recertification',alt_tag:"Apprentissage par l'Action",alt_title:"La Solution d'Apprentissage par l'Action",banner:'Cette page est dans une langue autre que l\'anglais.',translate_btn:'Traduire en anglais',show_orig:"Afficher la langue d'origine"},
  de:{hero_tag:'Aktionslernen',hero_h:'Was ist Aktionslernen?',hero_p:'Aktionslernen ist eine neue Art zu denken, Geschäfte zu machen und in Teams zu interagieren. WIAL ist die führende Zertifizierungsstelle für Action-Learning-Coaches in 20+ Ländern.',btn1:'Coach finden',btn2:'Zertifizierung anzeigen',hs1:'Länder',hs2:'Zertifizierte Coaches',hs3:'Stufen',hs4:'Organisationen',ct_tag:'Kontakt',ct_title:'Kontakt aufnehmen',ct_info_h:'WIAL Hauptsitz',ct_form_h:'Senden Sie uns eine Nachricht',res_tag:'Ressourcen & Bibliothek',res_title:'Wissen & Forschung',ev_tag:'Veranstaltungen',ev_title:'Bevorstehende Veranstaltungen',cl_tag:'Unsere Kunden',cl_title:'Von WIAL unterstützte Organisationen',dir_title:'Action-Learning-Coaches suchen',cert_tag:'Zertifizierungen',cert_title:'WIAL ist die führende Zertifizierungsstelle',recert_h:'📋 Rezertifizierung',alt_tag:'Aktionslernen',alt_title:'Die Aktionslernlösung',banner:'Diese Seite ist in einer nicht-englischen Sprache.',translate_btn:'Ins Englische übersetzen',show_orig:'Originalsprache anzeigen'},
};
function curLocale(){
  if(forceEn) return 'en';
  if(role==='client') return prefLang||'en';
  return CC[country]?.l||'en';
}
function tx(k){const l=curLocale();return(i18n[l]&&i18n[l][k])||i18n.en[k]||k;}
function applyTranslations(){
  const keys=['hero_tag','hero_h','hero_p','btn1','btn2','hs1','hs2','hs3','hs4','ct_tag','ct_title','ct_info_h','ct_form_h','res_tag','res_title','ev_tag','ev_title','cl_tag','cl_title','dir_title','cert_tag','cert_title','recert_h','alt_tag','alt_title'];
  const idMap={hero_tag:'hero-tag',hero_h:'hero-h1',hero_p:'hero-p',btn1:'hero-btn1',btn2:'hero-btn2',hs1:'hs1',hs2:'hs2',hs3:'hs3',hs4:'hs4',ct_tag:'ct-tag',ct_title:'ct-title',ct_info_h:'ct-info-h',ct_form_h:'ct-form-h',res_tag:'res-tag',res_title:'res-title',ev_tag:'ev-tag',ev_title:'ev-title',cl_tag:'cl-tag',cl_title:'cl-title',dir_title:'dir-title',cert_tag:'cert-tag',cert_title:'cert-title',recert_h:'recert-h',alt_tag:'alt-tag',alt_title:'alt-title'};
  keys.forEach(k=>{const el=document.getElementById(idMap[k]);if(el)el.textContent=tx(k);});
  // Update translate bar
  const loc=curLocale();
  const bar=document.getElementById('translateBar');
  if(bar){
    bar.style.display=loc!=='en'?'flex':'none';
    const msg=document.getElementById('translateMsg');const btn=document.getElementById('translateBtn');
    if(msg)msg.textContent=tx('banner');
    if(btn)btn.textContent=forceEn?tx('show_orig'):tx('translate_btn');
  }
  document.documentElement.lang=loc;
}
function forceEnglish(){
  forceEn=!forceEn;
  applyTranslations();
  if(role) renderDashboard();
}
function updateTranslateBarVisibility(){
  const loc=curLocale();
  const bar=document.getElementById('translateBar');
  if(bar) bar.style.display=loc!=='en'&&!forceEn?'flex':'none';
}

const DASH_I18N={
  pt:{
    'Main':'Principal','Operations':'Operações','Account':'Conta','Dashboard':'Painel','Chapter Sites':'Sites do Capítulo','Profile':'Perfil','Testimonials':'Testemunhos','Events':'Eventos','Email Campaigns':'Campanhas de Email','Clients':'Clientes','Payments':'Pagamentos','Settings':'Definições','Sign Out':'Sair','About WIAL':'Sobre a WIAL','Certification':'Certificação','Coach Directory':'Diretório de Coaches','Resources & Library':'Recursos & Biblioteca','Events Calendar':'Calendário de Eventos','Contact':'Contacto','Chapter Overview':'Visão Geral do Capítulo','Coaches in chapter':'Coaches no capítulo','Content':'Conteúdo','Editable pages':'Páginas editáveis','Revenue':'Receita','Growth':'Crescimento','Reminders':'Lembretes','Brand sync':'Sincronização da marca','Events live':'Eventos ativos','Draft events':'Eventos em rascunho','Pending':'Pendente','Chapter Sites':'Sites do Capítulo','active sites':'sites ativos','Create New Chapter':'Criar Novo Capítulo','Live':'Ativo','Draft':'Rascunho','Organisational Clients':'Clientes Organizacionais','Add Client':'Adicionar Cliente','read-only':'somente leitura','Payment Flow — UC4 Dues System':'Fluxo de Pagamento — Sistema de Taxas UC4','How it works:':'Como funciona:','Client Pays Website':'Cliente paga o site','Chapter Collects Dues':'Capítulo recolhe as taxas','Admin Pays WIAL Global':'Admin paga à WIAL Global','Chapter Revenue':'Receita do Capítulo','Pending reminders':'Lembretes pendentes','Conversion rate':'Taxa de conversão','Pay WIAL Global Now':'Pagar à WIAL Global agora','eLearning fee':'Taxa de eLearning','Certification fee':'Taxa de certificação','Pay with Stripe':'Pagar com Stripe','Pay with PayPal':'Pagar com PayPal','Profile in Directory':'Perfil no Diretório','Coaching Hours & Progress':'Horas de Coaching e Progresso','Total Hours':'Horas Totais','this month':'este mês','Active Clients':'Clientes Ativos','Future / Yet to Start':'Futuros / Ainda não iniciados','Upcoming Schedule':'Próxima Agenda','Job Board — Coaching Opportunities':'Quadro de Empregos — Oportunidades de Coaching','Apply Now':'Candidatar-se','Badge Approval Queue':'Fila de Aprovação de Distintivos','Revenue by Chapter':'Receita por Capítulo','Platform Health':'Saúde da Plataforma','Global Network':'Rede Global','Total coaches':'Total de coaches','Countries':'Países','Payment conversion':'Conversão de pagamentos','Template pushes':'Atualizações de template','Badge approvals':'Aprovações de distintivos','Chapters live':'Capítulos ativos','Analytics Dashboard':'Painel Analítico','Membership Growth by Chapter':'Crescimento de membros por capítulo','Certification Mix':'Distribuição de certificações','Payment Funnel':'Funil de Pagamento','Overall conversion':'Conversão geral','Find Your Action Learning Coach':'Encontre o seu Coach de Action Learning','Search Coaches':'Pesquisar Coaches','Global Coach Map':'Mapa Global de Coaches','Click a country to explore':'Clique num país para explorar','Coaches by Country':'Coaches por País','Smart Matching':'Correspondência Inteligente','Certified Coaches':'Coaches Certificados','Average Rating':'Avaliação Média','Coaches by Certification Level':'Coaches por Nível de Certificação','Member Forums':'Fóruns dos Membros','Start New Thread':'Iniciar Novo Tópico','Open':'Abrir','View Profile':'Ver Perfil','Enrol in':'Inscrever-se em','Apply for Recertification':'Solicitar Recertificação','My Profile in Directory':'Meu Perfil no Diretório','Search by skill or coaching need. Our AI understands any language — English, Portuguese, Spanish, French, German and more.':'Pesquise por competência ou necessidade de coaching. A nossa IA entende qualquer idioma — inglês, português, espanhol, francês, alemão e mais.','Showing results for':'A mostrar resultados para','Click to view':'Clique para ver','No coaches in':'Sem coaches em','View all countries':'Ver todos os países','Translate to English':'Traduzir para inglês','Show original language':'Mostrar idioma original'
  },
  es:{
    'Main':'Principal','Operations':'Operaciones','Account':'Cuenta','Dashboard':'Panel','Chapter Sites':'Sitios del Capítulo','Profile':'Perfil','Testimonials':'Testimonios','Events':'Eventos','Email Campaigns':'Campañas de Correo','Clients':'Clientes','Payments':'Pagos','Settings':'Configuración','Sign Out':'Cerrar sesión','About WIAL':'Sobre WIAL','Certification':'Certificación','Coach Directory':'Directorio de Coaches','Resources & Library':'Recursos y Biblioteca','Events Calendar':'Calendario de Eventos','Contact':'Contacto','Chapter Overview':'Resumen del Capítulo','Coaches in chapter':'Coaches en el capítulo','Content':'Contenido','Editable pages':'Páginas editables','Revenue':'Ingresos','Growth':'Crecimiento','Reminders':'Recordatorios','Brand sync':'Sincronización de marca','Events live':'Eventos activos','Draft events':'Eventos borrador','Pending':'Pendiente','active sites':'sitios activos','Create New Chapter':'Crear Nuevo Capítulo','Live':'Activo','Draft':'Borrador','Organisational Clients':'Clientes Organizacionales','Add Client':'Agregar Cliente','read-only':'solo lectura','Payment Flow — UC4 Dues System':'Flujo de Pago — Sistema de Cuotas UC4','How it works:':'Cómo funciona:','Client Pays Website':'El cliente paga el sitio','Chapter Collects Dues':'El capítulo cobra cuotas','Admin Pays WIAL Global':'El admin paga a WIAL Global','Chapter Revenue':'Ingresos del Capítulo','Pending reminders':'Recordatorios pendientes','Conversion rate':'Tasa de conversión','Pay WIAL Global Now':'Pagar a WIAL Global ahora','eLearning fee':'Cuota de eLearning','Certification fee':'Cuota de certificación','Pay with Stripe':'Pagar con Stripe','Pay with PayPal':'Pagar con PayPal','Coaching Hours & Progress':'Horas de Coaching y Progreso','Total Hours':'Horas Totales','Active Clients':'Clientes Activos','Future / Yet to Start':'Futuros / Aún no iniciados','Upcoming Schedule':'Próxima Agenda','Job Board — Coaching Opportunities':'Bolsa de Trabajo — Oportunidades de Coaching','Apply Now':'Postular','Badge Approval Queue':'Cola de Aprobación de Insignias','Revenue by Chapter':'Ingresos por Capítulo','Platform Health':'Salud de la Plataforma','Global Network':'Red Global','Total coaches':'Total de coaches','Countries':'Países','Payment conversion':'Conversión de pagos','Analytics Dashboard':'Panel Analítico','Find Your Action Learning Coach':'Encuentra tu Coach de Action Learning','Search Coaches':'Buscar Coaches','Global Coach Map':'Mapa Global de Coaches','Click a country to explore':'Haz clic en un país para explorar','Coaches by Country':'Coaches por País','Smart Matching':'Emparejamiento Inteligente','Certified Coaches':'Coaches Certificados','Average Rating':'Calificación Promedio','Coaches by Certification Level':'Coaches por Nivel de Certificación','Member Forums':'Foros de Miembros','Start New Thread':'Iniciar Nuevo Tema','Open':'Abrir','View Profile':'Ver Perfil','No coaches in':'No hay coaches en','View all countries':'Ver todos los países'
  },
  fr:{
    'Main':'Principal','Operations':'Opérations','Account':'Compte','Dashboard':'Tableau de bord','Chapter Sites':'Sites du Chapitre','Profile':'Profil','Testimonials':'Témoignages','Events':'Événements','Email Campaigns':'Campagnes Email','Clients':'Clients','Payments':'Paiements','Settings':'Paramètres','Sign Out':'Se déconnecter','About WIAL':'À propos de WIAL','Certification':'Certification','Coach Directory':'Annuaire des Coaches','Resources & Library':'Ressources & Bibliothèque','Events Calendar':'Calendrier des Événements','Contact':'Contact','Chapter Overview':'Aperçu du Chapitre','Coaches in chapter':'Coaches du chapitre','Content':'Contenu','Editable pages':'Pages modifiables','Revenue':'Revenu','Growth':'Croissance','Reminders':'Rappels','Brand sync':'Synchronisation de marque','Events live':'Événements actifs','Draft events':'Brouillons d’événements','Pending':'En attente','active sites':'sites actifs','Create New Chapter':'Créer un Nouveau Chapitre','Live':'Actif','Draft':'Brouillon','Organisational Clients':'Clients Organisationnels','Add Client':'Ajouter un Client','read-only':'lecture seule','Payment Flow — UC4 Dues System':'Flux de Paiement — Système de Cotisations UC4','How it works:':'Comment ça marche :','Client Pays Website':'Le client paie le site','Chapter Collects Dues':'Le chapitre collecte les cotisations','Admin Pays WIAL Global':'L’admin paie WIAL Global','Chapter Revenue':'Revenu du Chapitre','Pending reminders':'Rappels en attente','Conversion rate':'Taux de conversion','Pay WIAL Global Now':'Payer WIAL Global maintenant','eLearning fee':'Frais eLearning','Certification fee':'Frais de certification','Pay with Stripe':'Payer avec Stripe','Pay with PayPal':'Payer avec PayPal','Coaching Hours & Progress':'Heures de Coaching et Progrès','Total Hours':'Heures Totales','Active Clients':'Clients Actifs','Future / Yet to Start':'Futurs / Pas encore commencés','Upcoming Schedule':'Agenda à venir','Job Board — Coaching Opportunities':'Offres — Opportunités de Coaching','Apply Now':'Postuler','Badge Approval Queue':'File d’Approbation des Badges','Revenue by Chapter':'Revenu par Chapitre','Platform Health':'Santé de la Plateforme','Global Network':'Réseau Mondial','Total coaches':'Nombre total de coaches','Countries':'Pays','Payment conversion':'Conversion des paiements','Analytics Dashboard':'Tableau Analytique','Find Your Action Learning Coach':'Trouvez votre Coach en Action Learning','Search Coaches':'Rechercher des Coaches','Global Coach Map':'Carte Mondiale des Coaches','Click a country to explore':'Cliquez sur un pays pour explorer','Coaches by Country':'Coaches par Pays','Smart Matching':'Correspondance Intelligente','Certified Coaches':'Coaches Certifiés','Average Rating':'Note Moyenne','Coaches by Certification Level':'Coaches par Niveau de Certification','Member Forums':'Forums des Membres','Start New Thread':'Nouveau Sujet','Open':'Ouvrir','View Profile':'Voir le Profil','No coaches in':'Aucun coach en','View all countries':'Voir tous les pays'
  },
  de:{
    'Main':'Hauptmenü','Operations':'Betrieb','Account':'Konto','Dashboard':'Dashboard','Chapter Sites':'Kapitel-Seiten','Profile':'Profil','Testimonials':'Referenzen','Events':'Veranstaltungen','Email Campaigns':'E-Mail-Kampagnen','Clients':'Kunden','Payments':'Zahlungen','Settings':'Einstellungen','Sign Out':'Abmelden','About WIAL':'Über WIAL','Certification':'Zertifizierung','Coach Directory':'Coach-Verzeichnis','Resources & Library':'Ressourcen & Bibliothek','Events Calendar':'Veranstaltungskalender','Contact':'Kontakt','Chapter Overview':'Kapitelübersicht','Coaches in chapter':'Coaches im Kapitel','Content':'Inhalt','Editable pages':'Bearbeitbare Seiten','Revenue':'Umsatz','Growth':'Wachstum','Reminders':'Erinnerungen','Brand sync':'Markensynchronisierung','Events live':'Live-Veranstaltungen','Draft events':'Entwürfe','Pending':'Ausstehend','active sites':'aktive Seiten','Create New Chapter':'Neues Kapitel erstellen','Live':'Live','Draft':'Entwurf','Organisational Clients':'Organisationale Kunden','Add Client':'Kunde hinzufügen','read-only':'schreibgeschützt','Payment Flow — UC4 Dues System':'Zahlungsablauf — UC4-Gebührensystem','How it works:':'So funktioniert es:','Client Pays Website':'Kunde zahlt Website','Chapter Collects Dues':'Kapitel sammelt Gebühren','Admin Pays WIAL Global':'Admin zahlt WIAL Global','Chapter Revenue':'Kapitelumsatz','Pending reminders':'Ausstehende Erinnerungen','Conversion rate':'Konversionsrate','Pay WIAL Global Now':'Jetzt an WIAL Global zahlen','eLearning fee':'eLearning-Gebühr','Certification fee':'Zertifizierungsgebühr','Pay with Stripe':'Mit Stripe zahlen','Pay with PayPal':'Mit PayPal zahlen','Coaching Hours & Progress':'Coaching-Stunden & Fortschritt','Total Hours':'Gesamtstunden','Active Clients':'Aktive Kunden','Future / Yet to Start':'Zukünftig / Noch nicht gestartet','Upcoming Schedule':'Bevorstehender Zeitplan','Job Board — Coaching Opportunities':'Jobbörse — Coaching-Möglichkeiten','Apply Now':'Jetzt bewerben','Badge Approval Queue':'Badge-Freigabewarteschlange','Revenue by Chapter':'Umsatz nach Kapitel','Platform Health':'Plattformstatus','Global Network':'Globales Netzwerk','Total coaches':'Gesamtzahl Coaches','Countries':'Länder','Payment conversion':'Zahlungskonversion','Analytics Dashboard':'Analyse-Dashboard','Find Your Action Learning Coach':'Finden Sie Ihren Action-Learning-Coach','Search Coaches':'Coaches suchen','Global Coach Map':'Globale Coach-Karte','Click a country to explore':'Klicken Sie auf ein Land, um es zu erkunden','Coaches by Country':'Coaches nach Land','Smart Matching':'Intelligentes Matching','Certified Coaches':'Zertifizierte Coaches','Average Rating':'Durchschnittsbewertung','Coaches by Certification Level':'Coaches nach Zertifizierungsstufe','Member Forums':'Mitgliederforen','Start New Thread':'Neues Thema starten','Open':'Öffnen','View Profile':'Profil ansehen','No coaches in':'Keine Coaches in','View all countries':'Alle Länder anzeigen'
  }
};
function replaceLongest(text,map){
  if(!map) return text;
  const keys=Object.keys(map).sort((a,b)=>b.length-a.length);
  let out=text;
  keys.forEach(k=>{out=out.split(k).join(map[k]);});
  return out;
}
function localizeElementTree(root){
  const loc=curLocale();
  if(loc==='en' || forceEn || !root) return;
  const map=DASH_I18N[loc]||{};
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);
  const textNodes=[];
  while(walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node=>{
    const parent=node.parentElement;
    if(!parent || ['SCRIPT','STYLE'].includes(parent.tagName)) return;
    const original=node.nodeValue;
    const trimmed=original.trim();
    if(!trimmed) return;
    node.nodeValue=replaceLongest(original,map);
  });
  root.querySelectorAll('input[placeholder], textarea[placeholder], select option').forEach(el=>{
    if(el.hasAttribute('placeholder')) el.setAttribute('placeholder', replaceLongest(el.getAttribute('placeholder'), map));
    if(el.tagName==='OPTION') el.textContent = replaceLongest(el.textContent, map);
  });
}
function localizeRenderedContent(){
  localizeElementTree(document.getElementById('publicSite'));
  localizeElementTree(document.getElementById('portalPage'));
  localizeElementTree(document.getElementById('dashPage'));
}

function showPublic(){
  document.getElementById('publicSite').style.display='block';
  document.getElementById('portalPage').style.display='none';
  document.getElementById('dashPage').classList.remove('show');
  document.getElementById('chatW').style.display='none';
  renderPublic();
  applyTranslations();
  localizeRenderedContent();
}
function showPortal(){
  document.getElementById('publicSite').style.display='none';
  document.getElementById('portalPage').style.display='block';
  document.getElementById('dashPage').classList.remove('show');
}
function scrollTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function goToContact(){
  if(role==='superadmin') return;
  if(document.getElementById('dashPage').classList.contains('show')){
    activeCPage='Contact';
    renderDashboard();
    const panel=document.getElementById('corePanel');
    if(panel) panel.scrollIntoView({behavior:'smooth',block:'start'});
  }else{
    scrollTo('s-contact');
  }
}
function renderPublic(){
  // Coach directory
  filterPub();
  // Clients
  const cl=document.getElementById('pubClients');
  if(cl)cl.innerHTML=orgClients.map((c,i)=>`<div class="clogob"><div class="clogo-av" style="background:${AVCOLORS[i%AVCOLORS.length]}">${c.l}</div><div class="clogo-name">${c.n}</div><div class="clogo-sec">${CC[c.c].f} ${c.s}</div></div>`).join('');
  // Events
  const ev=document.getElementById('pubEvents');
  if(ev)ev.innerHTML=events.map(e=>`<div class="ev-item"><div class="ev-date"><div class="d">${e.d}</div><div class="m">${e.m}</div></div><div style="flex:1"><div style="font-weight:700">${e.t}</div><div style="color:var(--muted);font-size:.82rem;margin-top:.2rem">${e.v?'🌐 Virtual':'📍 In-person'} · ${e.ch} · <span class="ev-rsvp">${e.rsvp} RSVPs</span></div></div><button class="db g" style="padding:.45rem .9rem;font-size:.8rem">RSVP</button></div>`).join('');
  // Chapter contacts
  const cc=document.getElementById('pubChapterContacts');
  if(cc)cc.innerHTML=allC.map(c=>`<div class="dr" style="font-size:.82rem"><span>${CC[c].f} ${CC[c].n}</span><strong>${c}@wial.org</strong></div>`).join('');
}
function filterPub(){
  const q=(document.getElementById('pubSearch')?.value||'').toLowerCase();
  const co=document.getElementById('pubCountry')?.value||'';
  const ce=document.getElementById('pubCert')?.value||'';
  const list=coaches.filter(c=>c.ok&&(!co||c.c===co)&&(!ce||c.cert===ce)&&(!q||c.name.toLowerCase().includes(q)||c.skills.some(s=>s.includes(q))||c.spec.toLowerCase().includes(q)));
  const g=document.getElementById('pubDir');
  if(!g)return;
  g.innerHTML=list.map((c,i)=>`<div class="dcard" tabindex="0">
    <div class="dav" style="background:${AVCOLORS[i%AVCOLORS.length]}">${c.i}</div>
    <div class="dname">${c.name}</div>
    <div class="dmeta">${CC[c.c].f} ${CC[c.c].n} · ${c.cert}</div>
    <div style="margin-bottom:.6rem">${[`<span class="dbadge cert">${c.cert}</span>`,...c.badges.map(b=>`<span class="dbadge gold">${b}</span>`),`<span class="dbadge ${c.ok?'ok':'pend'}">${c.ok?'✓ Approved':'⏳ Pending'}</span>`].join('')}</div>
    <div class="dbio">${c.bio}</div>
    <div style="font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:.35rem">Specialisations</div>
    <div style="font-size:.82rem;color:var(--muted);margin-bottom:.75rem">${c.spec}</div>
    <div style="font-size:.8rem;color:var(--muted);display:flex;flex-direction:column;gap:.25rem">
      <span>📍 ${CC[c.c].n}</span><span>⭐ ${c.r}/5 (${c.rev} reviews)</span>
    </div>
    <div style="margin-top:.75rem"><button class="db p" onclick="showPortal()" style="padding:.5rem 1rem;font-size:.82rem">Contact Coach</button></div>
  </div>`).join('');
}

const mlMap={'liderança':'leadership','lideranca':'leadership','liderazgo':'leadership','führung':'leadership','comunicação':'communication','comunicacion':'communication','kommunikation':'communication','equipa':'team','equipe':'team','mannschaft':'team','conflito':'conflict','conflicto':'conflict','konflikt':'conflict','saúde':'healthcare','salud':'healthcare','gesundheit':'healthcare','governo':'government','gobierno':'government','fabricação':'manufacturing','fabricacion':'manufacturing','fertigung':'manufacturing','brasil':'brazil','são paulo':'brazil','nigeria':'nigeria','lagos':'nigeria','nairobi':'kenya','alemanha':'germany','deutschland':'germany','filipinas':'philippines'};
function normQ(q){let s=q.toLowerCase();Object.entries(mlMap).forEach(([k,v])=>{s=s.replace(new RegExp(k,'gi'),v);});return s;}
function aiSc(c,nq){let sc=0;const all=[c.bio,c.skills.join(' '),c.spec,c.hist,c.cert,CC[c.c].n,c.course].join(' ').toLowerCase();c.skills.forEach(sk=>{if(nq.includes(sk))sc+=30;});if(nq.includes(CC[c.c].n.toLowerCase()))sc+=25;['manufacturing','healthcare','government','finance','tech','pharma','banking'].forEach(d=>{if(nq.includes(d)&&all.includes(d))sc+=20;});['SALC','PALC','MALC','CALC'].forEach(cv=>{if(nq.includes(cv.toLowerCase())&&c.cert===cv)sc+=40;});nq.split(/\s+/).forEach(w=>{if(w.length>3&&all.includes(w))sc+=8;});sc+=c.r*2;return Math.min(99,Math.round(sc));}
function aiWhy(c,q){const nq=normQ(q);const r=[];c.skills.forEach(sk=>{if(nq.includes(sk))r.push(`${sk} specialist`);});if(nq.includes(CC[c.c].n.toLowerCase()))r.push(`based in ${CC[c.c].n}`);if(c.cert==='SALC')r.push('senior certified SALC');if(c.r>=4.5)r.push(`top-rated ${c.r}/5`);return r.length?r.join(' · '):'profile matches your query';}
function runAI(q){const nq=normQ(q);return coaches.map(c=>({...c,sc:aiSc(c,nq),why:aiWhy(c,q)})).sort((a,b)=>b.sc-a.sc);}

// AI-3: Chat
function toggleChat(){chatOpen=!chatOpen;document.getElementById('chatP').classList.toggle('open',chatOpen);if(chatOpen&&!chatInited){initChat();chatInited=true;}}
function initChat(){addCM('bot',"Hi! I'm your AI Coach Finder 🤖\n\nDescribe your organisation and coaching need — I'll find the best matches.\n\nExample: 'Manufacturing company in Brazil needing leadership coaching'");const s=document.getElementById('chatSugs');s.innerHTML=['Manufacturing in Brazil','Healthcare Nigeria','Tech startup Kenya','Government France'].map(t=>`<button class="cs" onclick="sendCM('${t}')">${t}</button>`).join('');}
function addCM(tp,tx){const d=document.getElementById('chatMsgs');const m=document.createElement('div');m.className=`cm ${tp}`;m.textContent=tx;d.appendChild(m);d.scrollTop=d.scrollHeight;}
function sendChat(){const v=document.getElementById('chatInp').value.trim();if(!v)return;document.getElementById('chatInp').value='';sendCM(v);}
function sendCM(msg){addCM('u',msg);document.getElementById('chatSugs').innerHTML='';setTimeout(()=>{const res=runAI(msg).slice(0,3);let t=`🤖 Top ${res.length} matches:\n\n`;res.forEach((c,i)=>{t+=`${i+1}. ${c.name} (${c.cert}) · ${CC[c.c].f} ${CC[c.c].n}\n   ${c.sc}% match — ${c.why}\n\n`;});t+='👆 Use the coach search to see full profiles.';addCM('b',t);document.getElementById('chatSugs').innerHTML=['Show SALC only','Different region','Tell me more'].map(t=>`<button class="cs" onclick="sendCM('${t}')">${t}</button>`).join('');},500);}

function setTab(t){document.getElementById('tabA').classList.toggle('act',t==='login');document.getElementById('tabB').classList.toggle('act',t==='register');document.getElementById('loginForm').classList.toggle('hidden',t!=='login');document.getElementById('registerForm').classList.toggle('hidden',t!=='register');}
function roleDefaultC(r){return r==='coach'||r==='superadmin'||r==='client'?'us':r==='creator'?'us':'pt';}
function populateCountries(r){
  const sel=document.getElementById('countrySelect');
  const fixed={admin:'pt',creator:'us',coach:'us'};
  if(fixed[r]){country=fixed[r];sel.innerHTML=`<option value="${fixed[r]}">${CC[fixed[r]].f} ${CC[fixed[r]].n}</option>`;sel.disabled=true;}
  else{sel.innerHTML=allC.map(c=>`<option value="${c}">${CC[c].f} ${CC[c].n}</option>`).join('');sel.disabled=false;sel.value=country;}
}
function onRoleChange(){
  const r=document.getElementById('roleSelect').value;
  if(r==='client'){document.getElementById('fCountry').classList.add('hidden');document.getElementById('fLang').classList.remove('hidden');country='us';}
  else{document.getElementById('fCountry').classList.remove('hidden');document.getElementById('fLang').classList.add('hidden');if(r)populateCountries(r);}
  if(r&&roleUsers[r])document.getElementById('emailInp').value=roleUsers[r].email;
  updateTranslateBarVisibility();
  localizeRenderedContent();
}
function onCountryChange(){country=document.getElementById('countrySelect').value||'us';updateTranslateBarVisibility();applyTranslations();}
function onLangChange(){prefLang=document.getElementById('langSelect').value||'en';updateTranslateBarVisibility();applyTranslations();}
function doLogin(){
  const r=document.getElementById('roleSelect').value;
  if(!r){alert('Please select your role.');return;}
  role=r;userEmail=document.getElementById('emailInp').value||roleUsers[r].email;
  if(r==='client')prefLang=document.getElementById('langSelect').value||'en';
  else country=document.getElementById('countrySelect').value||roleDefaultC(r);
  forceEn=false;clQ='';clCountry='';clRes=[];activeCPage='';
  document.getElementById('publicSite').style.display='none';
  document.getElementById('portalPage').style.display='none';
  document.getElementById('dashPage').classList.add('show');
  document.getElementById('chatW').style.display=(r==='client'||r==='coach')?'block':'none';
  renderDashboard();
}
function doLogout(){
  document.getElementById('dashPage').classList.remove('show');
  document.getElementById('publicSite').style.display='block';
  document.getElementById('chatW').style.display='none';
  document.getElementById('roleSelect').value='';
  role='';country='us';forceEn=false;chatInited=false;chatOpen=false;activeCPage='';
  renderPublic();applyTranslations();localizeRenderedContent();
}

function renderSidebar(){
  const u=roleUsers[role]||roleUsers.admin;
  document.getElementById('sAv').textContent=u.i;
  document.getElementById('sNm').textContent=u.name;
  document.getElementById('sRl').textContent=u.title;
  const nav=roleNav[role]||roleNav.admin;
  document.getElementById('navMain').innerHTML=nav.main.map((n,i)=>`<button class="ni${i===0?' act':''}" tabindex="0"><span class="ico">${n[0]}</span>${n[1]}</button>`).join('');
  document.getElementById('navOps').innerHTML=nav.ops.map(n=>`<button class="ni" tabindex="0"><span class="ico">${n[0]}</span>${n[1]}</button>`).join('');
  document.getElementById('navAcct').innerHTML=nav.acct.map(n=>`<button class="ni" tabindex="0"><span class="ico">${n[0]}</span>${n[1]}</button>`).join('');
}
function renderTopbar(){
  const h=new Date().getHours();const gmap={en:['Good morning','Good afternoon','Good evening'],pt:['Bom dia','Boa tarde','Boa noite'],fr:['Bonjour','Bon après-midi','Bonsoir'],es:['Buenos días','Buenas tardes','Buenas noches'],de:['Guten Morgen','Guten Tag','Guten Abend']};
  const glist=gmap[curLocale()]||gmap.en;const g=h<12?glist[0]:h<17?glist[1]:glist[2];
  const langMeta={en:{f:'🇬🇧',n:'English'},pt:{f:'🇵🇹',n:'Português'},es:{f:'🇪🇸',n:'Español'},fr:{f:'🇫🇷',n:'Français'},de:{f:'🇩🇪',n:'Deutsch'}};
  const lm=langMeta[curLocale()]||langMeta.en;
  document.getElementById('greetH').textContent=`${g}, ${(roleUsers[role]||roleUsers.admin).name.split(' ')[0]} 👋`;
  document.getElementById('greetSub').textContent=`Sunday, March 29, 2026 · ${CC[country].ch}`;
  document.getElementById('langPill').textContent=`${lm.f} ${forceEn?'English':lm.n}`;
  document.getElementById('chPill').textContent=CC[country].ch;
  updateTranslateBarVisibility();
}
function renderCorePages(){
  const pages=corePages[role]||[];
  const bar=document.getElementById('corePagesBar');
  bar.innerHTML=pages.map(p=>`<button class="cpb${activeCPage===p?' act':''}" onclick="showCorePage('${p}')" tabindex="0">${p}</button>`).join('');
  const panel=document.getElementById('corePanel');
  if(activeCPage){panel.classList.add('show');panel.innerHTML=buildCorePage(activeCPage);}
  else panel.classList.remove('show');
}
function showCorePage(page){activeCPage=activeCPage===page?'':page;renderDashboard();}
function buildCorePage(page){
  if(page==='About WIAL') return`<div><div class="dct"><div class="dd"></div>About WIAL</div><p style="font-size:.95rem;line-height:1.75;color:var(--muted);max-width:720px">WIAL is a global non-profit dedicated to advancing Action Learning methodology. Founded by Dr. Michael Marquardt based on Reg Revans' work, WIAL certifies Action Learning Coaches and helps organisations solve business challenges while developing leaders across 20+ countries.</p><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin-top:1.25rem">${[{l:'CALC',c:'#eef7fd',tc:'var(--blue)',d:'Entry-level · 32+ hrs'},{l:'PALC',c:'#e8f8f2',tc:'var(--green)',d:'100+ coaching hours'},{l:'SALC',c:'#fdf5e0',tc:'var(--orange)',d:'Can certify coaches'},{l:'MALC',c:'#f5f0fe',tc:'var(--purple)',d:'Highest level'}].map(x=>`<div style="background:${x.c};border-radius:12px;padding:1rem;text-align:center;border:1px solid var(--border)"><div style="font-size:1.5rem;font-weight:800;color:${x.tc}">${x.l}</div><div style="font-size:.8rem;color:var(--muted);margin-top:.3rem">${x.d}</div></div>`).join('')}</div></div>`;
  if(page==='Certification') return`<div><div class="dct"><div class="dd"></div>Certification Information</div><p style="color:var(--muted);font-size:.9rem;line-height:1.7;margin-bottom:1rem">All certifications require renewal every 2 years. Coaches must complete 32+ CE hours and submit a recertification application. Reminders sent at 3, 2, and 1 month before deadline.</p>${role==='coach'?`<button class="db p" onclick="openM('recertModal')" style="padding:.6rem 1.1rem;font-size:.85rem">Apply for Recertification →</button>`:''}  </div>`;
  if(page==='Coach Directory') return`<div><div class="dct"><div class="dd"></div>Coach Directory${role==='admin'?` · ${CC[country].n} Chapter`:' · Global'}</div><div style="display:grid;gap:.6rem;margin-top:.5rem">${coaches.filter(c=>c.ok&&(role==='superadmin'||role==='client'||c.c===country)).map((c,i)=>`<div style="display:flex;gap:.75rem;align-items:center;padding:.75rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><div style="width:38px;height:38px;border-radius:50%;background:${AVCOLORS[i%AVCOLORS.length]};display:grid;place-items:center;color:white;font-weight:800;font-size:.85rem;flex-shrink:0">${c.i}</div><div style="flex:1"><div style="font-weight:700">${c.name}</div><div style="font-size:.8rem;color:var(--muted)">${CC[c.c].f} ${CC[c.c].n} · ${c.cert} · ${c.spec.split(',')[0]}</div></div><span class="chip b">${c.cert}</span></div>`).join('')}</div></div>`;
  if(page==='Resources & Library') return`<div><div class="dct"><div class="dd"></div>Resources & Library</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:.5rem">${[{t:'Research Paper',title:'Action Learning in Healthcare'},{t:'Guide',title:'Getting Started with AL'},{t:'Webinar',title:'Building Resilient Teams'},{t:'Case Study',title:'Safaricom Transformation'},{t:'Template',title:'Practice Session Report'},{t:'Journal Article',title:'Cross-Cultural AL'}].map(r=>`<div style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:.9rem"><div style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--wial-teal);margin-bottom:.35rem">${r.t}</div><div style="font-weight:700;font-size:.9rem;margin-bottom:.5rem">${r.title}</div><span style="color:var(--wial-red);font-size:.82rem;font-weight:700;cursor:pointer">↓ Download</span></div>`).join('')}</div></div>`;
  if(page==='Events Calendar') return`<div><div class="dct"><div class="dd"></div>Events${role==='admin'?` · ${CC[country].n} + Global`:' · Global'}</div><div style="display:grid;gap:.5rem;margin-top:.5rem">${events.filter(e=>role==='superadmin'||e.ch==='Global'||e.ch===CC[country].n).map(e=>`<div class="ev-item"><div class="ev-date"><div class="d">${e.d}</div><div class="m">${e.m}</div></div><div><div style="font-weight:700">${e.t}</div><div style="color:var(--muted);font-size:.82rem">${e.v?'🌐 Virtual':'📍 In-person'} · ${e.ch} · <span class="ev-rsvp">${e.rsvp} RSVPs</span></div></div><button class="db g" style="padding:.4rem .8rem;font-size:.8rem">${role==='admin'||role==='superadmin'?'Edit':'RSVP'}</button></div>`).join('')}${role==='admin'||role==='superadmin'?`<div style="margin-top:.6rem"><button class="db p" style="padding:.6rem 1rem;font-size:.85rem">+ Create Event</button></div>`:''}</div>`;
  if(page==='Contact') return`<div><div class="dct"><div class="dd"></div>Contact</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.5rem"><div><div style="font-weight:700;margin-bottom:.5rem">WIAL Global</div><div style="font-size:.88rem;color:var(--muted);display:grid;gap:.3rem"><div>📧 executive.director@wial.org</div><div>🌐 wial.org</div><div>📍 20+ countries, 9 chapters</div></div></div><div><div style="font-weight:700;margin-bottom:.5rem">Send a Message</div><div class="f-field" style="margin-bottom:.5rem"><label>Subject</label><input placeholder="Your subject"/></div><div class="f-field" style="margin-bottom:.5rem"><label>Message</label><textarea style="min-height:70px" placeholder="How can we help?"></textarea></div><button class="db p" style="padding:.55rem 1rem;font-size:.85rem" onclick="alert('Message sent!')">Send →</button></div></div></div>`;
  return`<div><div class="dct"><div class="dd"></div>${page}</div><p style="color:var(--muted)">Content for ${page} coming soon.</p></div>`;
}

function mCard(title,val,sub,rows,span='s3'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>${title}</div><div class="dm">${val}</div><div class="dmeta">${sub}</div><div style="margin-top:.75rem;display:grid;gap:.3rem">${rows.map(r=>`<div class="dr"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join('')}</div></div>`;}
function pCard(u,span='s3'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Profile</div><div style="display:flex;gap:.9rem;align-items:center;margin-bottom:.9rem"><div class="s-av" style="width:54px;height:54px;background:var(--wial-red);font-size:1.1rem">${u.i}</div><div><div style="font-size:1.2rem;font-weight:800;color:var(--wial-navy)">${u.name}</div><div style="color:var(--muted);font-size:.82rem">${u.level}</div></div></div><div style="display:grid;gap:.3rem"><div class="dr"><span>Email</span><strong style="font-size:.82rem">${userEmail}</strong></div><div class="dr"><span>Phone</span><strong>${u.ph}</strong></div><div class="dr"><span>Country</span><strong>${CC[country].f} ${CC[country].n}</strong></div></div></div>`;}
function tmplCard(span='s12'){
  const chapters=[{c:'pt',s:'Live',n:14,url:'portugal.wial.org'},{c:'us',s:'Live',n:24,url:'usa.wial.org'},{c:'ng',s:'Live',n:7,url:'nigeria.wial.org'},{c:'ke',s:'Live',n:6,url:'kenya.wial.org'},{c:'ph',s:'Draft',n:5,url:'philippines.wial.org'},{c:'de',s:'Live',n:8,url:'germany.wial.org'},{c:'gh',s:'Live',n:4,url:'ghana.wial.org'},{c:'fr',s:'Live',n:9,url:'france.wial.org'},{c:'mx',s:'Draft',n:6,url:'mexico.wial.org'}];
  return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Chapter Sites</div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem"><div style="font-size:.9rem;font-weight:700">${chapters.length} active sites</div>${role==='admin'||role==='superadmin'?`<button class="db p" style="padding:.5rem .9rem;font-size:.82rem" onclick="openM('chapterModal')">+ New Chapter</button>`:''}</div><div style="display:grid;gap:.35rem">${chapters.map(ch=>`<div class="dr"><span>${CC[ch.c].f} ${CC[ch.c].n} <span class="chip ${ch.s==='Live'?'g':'o'}" style="margin-left:.4rem">${ch.s}</span></span><strong style="display:flex;align-items:center;gap:.6rem;font-size:.82rem"><span style="color:var(--muted)">${ch.n} coaches · ${ch.url}</span>${role==='superadmin'?`<button class="db w" style="padding:.25rem .6rem;font-size:.72rem">Push Update</button>`:''}</strong></div>`).join('')}</div>${role==='superadmin'?`<div style="margin-top:.75rem"><button class="db w" style="padding:.6rem 1rem;font-size:.85rem">🔄 Push Template to ALL Chapters</button></div>`:''}</div>`;}
function evCard(span='s12'){const fil=role==='superadmin'?events:events.filter(e=>e.ch==='Global'||e.ch===CC[country].n);return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Events Calendar${role==='superadmin'?' · Global':` · ${CC[country].n} + Global`}</div><div style="display:grid;gap:.5rem">${fil.map(e=>`<div class="ev-item"><div class="ev-date"><div class="d">${e.d}</div><div class="m">${e.m}</div></div><div style="flex:1"><div style="font-weight:700;font-size:.9rem">${e.t}</div><div style="color:var(--muted);font-size:.8rem;margin-top:.15rem">${e.v?'🌐':'📍'} ${e.ch} · <span class="ev-rsvp">${e.rsvp} RSVPs</span></div></div>${role==='admin'||role==='superadmin'?`<button class="db g" style="padding:.4rem .75rem;font-size:.8rem">Edit</button>`:`<button class="db g" style="padding:.4rem .75rem;font-size:.8rem">RSVP</button>`}</div>`).join('')}${role==='admin'||role==='superadmin'?`<div style="margin-top:.6rem"><button class="db p" style="padding:.55rem .9rem;font-size:.82rem">+ Create Event</button></div>`:''}</div></div>`;}
function clientsCard(span='s12'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Organisational Clients</div><div style="display:grid;gap:.45rem">${orgClients.map((c,i)=>`<div style="border:1px solid var(--border);border-radius:10px;padding:.7rem .9rem;display:flex;justify-content:space-between;align-items:center;background:var(--bg)"><div style="display:flex;align-items:center;gap:.75rem"><div style="width:36px;height:36px;border-radius:8px;background:${AVCOLORS[i%AVCOLORS.length]};color:white;display:grid;place-items:center;font-weight:800;font-size:.8rem">${c.l}</div><div><div style="font-weight:700;font-size:.9rem">${c.n}</div><div style="color:var(--muted);font-size:.78rem">${CC[c.c].f} ${CC[c.c].n} · ${c.s}</div></div></div><div style="display:flex;gap:.5rem;align-items:center"><span class="chip g">${c.cn} coaches</span><span style="color:var(--blue);font-size:.82rem;font-weight:600">Visit →</span></div></div>`).join('')}${role==='admin'||role==='superadmin'?`<div style="margin-top:.6rem"><button class="db p" style="padding:.55rem .9rem;font-size:.82rem">+ Add Client</button></div>`:''}</div></div>`;}
function testCard(span='s6'){
  const items=getRoleTestimonials();
  return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Testimonials <span style="font-size:.68rem;font-weight:400;color:var(--muted);margin-left:.3rem">(read-only)</span></div><div style="display:grid;gap:.6rem">${items.map(it=>`<div class="tcard"><div style="color:var(--wial-gold,#E69F00);font-weight:800;font-size:.88rem">${'★'.repeat(it.star)}${'☆'.repeat(5-it.star)}</div><div style="font-size:.88rem;line-height:1.6;margin:.3rem 0">"${it.txt}"</div><div style="font-size:.78rem;color:var(--muted);font-weight:600">— ${it.auth}</div></div>`).join('')}</div>${role==='admin'||role==='creator'?`<div style="margin-top:.75rem;display:flex;gap:.5rem"><button class="db p" style="padding:.5rem .9rem;font-size:.82rem">+ Add Testimonial</button><button class="db g" style="padding:.5rem .9rem;font-size:.82rem">+ Video</button></div>`:''}</div>`;}
function emailCard(span='s12'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Email Campaigns</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem;margin-bottom:.9rem"><div class="dr" style="flex-direction:column;gap:.1rem"><span>Subscribers</span><strong>1,247</strong></div><div class="dr" style="flex-direction:column;gap:.1rem"><span>Open rate</span><strong>38.4%</strong></div><div class="dr" style="flex-direction:column;gap:.1rem"><span>Queued</span><strong>34</strong></div><div class="dr" style="flex-direction:column;gap:.1rem"><span>Last sent</span><strong>Mar 22</strong></div></div>${emailTmpls.map(t=>`<div class="etmpl"><div class="etmpl-h">${t.t} · <span style="font-weight:400;font-size:.78rem">${t.seg}</span></div><div style="font-size:.85rem;font-weight:700;margin-bottom:.4rem">${t.sub}</div><div class="brow"><button class="db p" style="padding:.45rem .75rem;font-size:.78rem">Send</button><button class="db g" style="padding:.45rem .75rem;font-size:.78rem">Edit</button></div></div>`).join('')}</div>`;}
function analyticsCard(span='s12'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Analytics Dashboard</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem"><div><div style="font-weight:700;font-size:.88rem;margin-bottom:.4rem">📈 Membership Growth</div><div class="bars-wrap">${allC.slice(0,6).map((c,i)=>{const h=[120,70,100,52,88,65][i];return`<div class="bar-col"><div style="font-size:.7rem;font-weight:700">${[14,24,7,6,5,8][i]}</div><div class="bar-v" style="height:${h}px"></div><div class="bar-l">${CC[c].f}</div></div>`;}).join('')}</div></div><div><div style="font-weight:700;font-size:.88rem;margin-bottom:.4rem">🥧 Certification Mix</div><svg viewBox="0 0 130 130" width="130"><circle cx="65" cy="65" r="50" fill="none" stroke="#e0e8f0" stroke-width="18"/><circle cx="65" cy="65" r="50" fill="none" stroke="#0072B2" stroke-width="18" stroke-dasharray="${.45*314} ${314}" stroke-dashoffset="0" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#009E73" stroke-width="18" stroke-dasharray="${.30*314} ${314}" stroke-dashoffset="${-.45*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#E69F00" stroke-width="18" stroke-dasharray="${.20*314} ${314}" stroke-dashoffset="${-.75*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#7A68A6" stroke-width="18" stroke-dasharray="${.05*314} ${314}" stroke-dashoffset="${-.95*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="40" fill="white"/><text x="65" y="69" text-anchor="middle" font-size="16" font-weight="800" fill="#17324d">83</text></svg><div style="display:grid;gap:.3rem;margin-top:.3rem">${[['#0072B2','CALC 45%'],['#009E73','PALC 30%'],['#E69F00','SALC 20%'],['#7A68A6','MALC 5%']].map(x=>`<div class="dleg-r"><span class="dleg-d" style="background:${x[0]}"></span>${x[1]}</div>`).join('')}</div></div><div><div style="font-weight:700;font-size:.88rem;margin-bottom:.4rem">💳 Payment Funnel</div><div class="funnel"><div class="fn" style="background:var(--wial-navy);width:100%">Initiated · 100%</div><div class="fn" style="background:var(--blue);width:84%">Processing · 84%</div><div class="fn" style="background:var(--wial-teal);width:72%">Confirmed · 72%</div><div class="fn" style="background:var(--green);width:91%">Completed · 91%</div></div><div class="dr" style="margin-top:.5rem"><span>Conversion</span><strong style="color:var(--green)">91.2% ✓</strong></div></div></div></div>`;}

// PAYMENT FLOW CARD (admin — shows client pays website, admin pays WIAL)
function payFlowCard(span='s12'){
  return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Payment Flow — UC4 Dues System</div>
  <div class="ib">💡 <strong>How it works:</strong> Clients/students pay the chapter website. Affiliates and chapter leads pay WIAL Global. $50 per eLearning enrolment, $30 per coach certified.</div>
  <div class="payment-flow">
    <div class="pf-step"><div class="ps-num">1</div><div class="ps-title">Client Pays Website</div><div class="ps-desc">Client or organisation pays the chapter site for coaching enrolment or certification programme.</div></div>
    <div class="pf-step"><div class="ps-num">2</div><div class="ps-title">Chapter Collects Dues</div><div class="ps-desc">Chapter lead collects and tracks all local payments. Auto-receipts sent. Revenue report generated.</div></div>
    <div class="pf-step"><div class="ps-num">3</div><div class="ps-title">Admin Pays WIAL Global</div><div class="ps-desc">Chapter lead pays WIAL Global: $50 per eLearning enrolment · $30 per coach certified.</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1rem">
    <div style="background:var(--bg);border-radius:10px;padding:.9rem">
      <div style="font-weight:700;font-size:.88rem;margin-bottom:.6rem">Chapter Revenue (${CC[country].n})</div>
      <div class="dr"><span>Total collected</span><strong>${cMetrics[country].rev}</strong></div>
      <div class="dr"><span>Pending reminders</span><strong>${cMetrics[country].rem} coaches</strong></div>
      <div class="dr"><span>Conversion rate</span><strong style="color:var(--green)">91.2% ✓</strong></div>
    </div>
    <div style="background:var(--bg);border-radius:10px;padding:.9rem">
      <div style="font-weight:700;font-size:.88rem;margin-bottom:.6rem">Pay WIAL Global Now</div>
      <div class="dr"><span>eLearning fee</span><strong>$50/student</strong></div>
      <div class="dr"><span>Certification fee</span><strong>$30/coach</strong></div>
      <div class="brow" style="margin-top:.6rem"><button class="db p" style="padding:.55rem .9rem;font-size:.82rem" onclick="openPayModal('WIAL Dues','Chapter Admin','\$80')">Pay with Stripe</button><button class="db s" style="padding:.55rem .9rem;font-size:.82rem" onclick="openPayModal('WIAL Dues','Chapter Admin','\$80')">Pay with PayPal</button></div>
    </div>
  </div></div>`;
}
function badgeCard(span='s12'){
  const badges=[{coach:'Jonas Keller',c:'de',cert:'PALC',badge:'PALC Certified',s:'pend'},{coach:'Leah James',c:'ng',cert:'CALC',badge:'CALC Certified',s:'pend'},{coach:'Sarah Chen',c:'us',cert:'SALC',badge:'Top Rated 2026',s:'ok'},{coach:'Beatriz Silva',c:'pt',cert:'SALC',badge:'Affiliate Lead',s:'ok'}];
  return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>🏅 Badge Approval Queue <span class="chip r" style="margin-left:.4rem">2 pending</span></div><div class="ib">Badges require Executive Director review before publishing to the directory.</div>${badges.map(b=>`<div class="bq-item ${b.s}"><div style="flex:1"><div style="font-weight:700;font-size:.88rem">${CC[b.c].f} ${b.coach} — <span class="chip ${b.s==='ok'?'g':'o'}">${b.badge}</span></div><div style="color:var(--muted);font-size:.78rem;margin-top:.2rem">${b.cert} · ${CC[b.c].n}</div></div>${b.s==='pend'?`<div class="brow"><button class="db s" style="padding:.4rem .7rem;font-size:.78rem" onclick="this.closest('.bq-item').className='bq-item ok';this.parentNode.innerHTML='<span class=\'chip g\'>✓ Approved</span>'">Approve</button><button class="db d" style="padding:.4rem .7rem;font-size:.78rem" onclick="this.closest('.bq-item').className='bq-item';this.parentNode.innerHTML='<span class=\'chip r\'>✗ Rejected</span>'">Reject</button></div>`:`<span class="chip g">✓ Published</span>`}</div>`).join('')}</div>`;}
function ceCard(span='s6'){const ce=[{name:'Leadership in Complex Systems',hrs:6,date:'Feb 2026',s:'Approved'},{name:'Cross-Cultural Coaching',hrs:4,date:'Jan 2026',s:'Approved'},{name:'Virtual AL Facilitation',hrs:4,date:'Dec 2025',s:'Approved'},{name:'Stress Management',hrs:4,date:'Nov 2025',s:'Pending'}];const tot=ce.reduce((a,c)=>a+c.hrs,0);const pct=Math.round(tot/32*100);return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>CE Credit Tracker</div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem"><div><div class="dm" style="font-size:1.7rem">${tot}/32 hrs</div><div class="dmeta">CE credits toward recertification</div></div><button class="db p" style="padding:.55rem .9rem;font-size:.82rem" onclick="openM('recertModal')">Apply for Recert</button></div><div class="pb" style="height:10px;margin-bottom:.9rem"><div class="pf" style="width:${pct}%"></div></div>${ce.map(c=>`<div class="ce-item"><div><div style="font-weight:600;font-size:.88rem">${c.name}</div><div style="font-size:.78rem;color:var(--muted)">${c.date}</div></div><div style="text-align:right"><div style="font-weight:700;font-size:.88rem">${c.hrs} hrs</div><span class="chip ${c.s==='Approved'?'g':'o'}" style="font-size:.7rem">${c.s}</span></div></div>`).join('')}<div style="margin-top:.6rem"><button class="db g" style="padding:.5rem .9rem;font-size:.82rem">+ Log Credits</button></div></div>`;}
function sessCard(span='s6'){const sessions=[{cl:'Acme Corporation',dt:'Mar 15, 2026',hrs:2,t:'Leadership Cohort'},{cl:'Delta Health',dt:'Mar 10, 2026',hrs:1.5,t:'Team Workshop'},{cl:'Acme Corporation',dt:'Mar 5, 2026',hrs:2,t:'Strategy Session'},{cl:'McKinsey',dt:'Feb 28, 2026',hrs:2,t:'Executive Coaching'}];const tot=sessions.reduce((a,s)=>a+s.hrs,0);return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Session Log</div><div class="dm" style="font-size:1.7rem;margin-bottom:.2rem">${tot} hrs</div><div class="dmeta" style="margin-bottom:.9rem">Logged this cycle</div>${sessions.map(s=>`<div class="sess-item"><div><div style="font-weight:600;font-size:.88rem">${s.cl}</div><div style="font-size:.78rem;color:var(--muted)">${s.dt} · ${s.t}</div></div><div style="font-weight:700;font-size:.95rem;color:var(--blue)">${s.hrs}h</div></div>`).join('')}<div style="margin-top:.6rem"><button class="db g" style="padding:.5rem .9rem;font-size:.82rem">+ Log Session</button></div></div>`;}
function jobCard(span='s12'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>🧳 Job Board</div><div class="ib">Coaching roles posted by partner organisations. Apply directly through WIAL.</div>${jobs.map(j=>`<div class="jb"><div style="display:flex;justify-content:space-between;gap:.75rem"><div><div style="font-weight:700;font-size:.9rem">${j.t}</div><div style="color:var(--muted);font-size:.8rem;margin-top:.2rem">${j.o} · 📍 ${j.loc}</div></div><div style="text-align:right;flex-shrink:0"><span class="chip g">${j.type}</span><div style="color:var(--muted);font-size:.75rem;margin-top:.2rem">By ${j.dl}</div></div></div><div class="brow" style="margin-top:.6rem"><span class="chip b">${j.cert} required</span><span style="color:var(--muted);font-size:.82rem;margin-left:auto">${j.s}</span><button class="db p" style="padding:.4rem .8rem;font-size:.8rem">Apply</button></div></div>`).join('')}</div>`;}
function forumsCard(span='s12'){return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>💬 Member Forums</div><div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.75rem">${['All','Coach Search','Certification','Best Practice','Regional','Strategy'].map(t=>`<button class="db g" style="padding:.35rem .75rem;font-size:.8rem">${t}</button>`).join('')}</div>${forums.map(th=>`<div class="ft"><div style="display:flex;justify-content:space-between;gap:.75rem"><div><div style="font-weight:700;font-size:.88rem">${th.t}</div><div style="display:flex;gap:.5rem;margin-top:.3rem;font-size:.78rem;color:var(--muted)"><span>${th.a}</span><span>${th.time}</span><span class="ft-tag">${th.tag}</span></div></div><div style="text-align:right;flex-shrink:0"><div style="font-weight:700;color:var(--blue);font-size:.88rem">${th.r} replies</div><button class="db g" style="padding:.35rem .7rem;font-size:.78rem;margin-top:.3rem">Open</button></div></div></div>`).join('')}<div style="margin-top:.75rem"><button class="db p" style="padding:.6rem 1rem;font-size:.85rem">+ New Thread</button></div></div>`;}
function dirCard(span='s12'){
  const list=coaches.filter(c=>role==='superadmin'?true:c.c===country||c.ok);
  return`<div class="dc ${span}"><div class="dct"><div class="dd"></div>Coach Directory${role==='superadmin'?' · Global':` · ${CC[country].n}`}</div>
  <div class="ib">🤖 <strong>AI-1: Cross-Lingual Search</strong> — search in any language. AI matches meaning, not just keywords.</div>
  <div style="position:relative;margin-bottom:.9rem"><input id="aiSrchInp" style="width:100%;padding:.75rem 1rem;border-radius:10px;border:1px solid var(--border);font-size:.9rem;outline:none;padding-right:7rem" placeholder='Try: "liderança Brasil" or "manufacturing leadership"'/><button onclick="runDirSearch()" style="position:absolute;right:.4rem;top:50%;transform:translateY(-50%);background:var(--wial-red);color:white;border:none;border-radius:8px;padding:.5rem .9rem;font-size:.8rem;font-weight:700;cursor:pointer">🔍 Search</button></div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.9rem">${['Leadership Brazil','liderança Portugal','healthcare Kenya','manufacturing Germany','team bonding Philippines'].map(q=>`<button class="db g" style="padding:.3rem .7rem;font-size:.78rem" onclick="document.getElementById('aiSrchInp').value='${q}';runDirSearch()">${q}</button>`).join('')}</div>
  <div id="dirResults"><div style="display:grid;gap:.5rem">${list.map((c,i)=>`<div style="display:flex;gap:.75rem;align-items:center;padding:.75rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><div style="width:40px;height:40px;border-radius:50%;background:${AVCOLORS[i%AVCOLORS.length]};display:grid;place-items:center;color:white;font-weight:800;font-size:.88rem;flex-shrink:0">${c.i}</div><div style="flex:1"><div style="font-weight:700;font-size:.9rem">${c.name}</div><div style="font-size:.78rem;color:var(--muted)">${CC[c.c].f} ${CC[c.c].n} · ${c.cert} · ⭐${c.r}</div></div><span class="chip b">${c.cert}</span>${c.ok?'<span class="chip g">✓ Approved</span>':'<span class="chip o">⏳ Pending</span>'}${role==='superadmin'?`<button class="db w" style="padding:.3rem .6rem;font-size:.75rem">Review</button>`:''}</div>`).join('')}</div></div></div>`;}
function runDirSearch(){
  const q=document.getElementById('aiSrchInp')?.value?.trim()||'';if(!q)return;
  const res=runAI(q);
  const el=document.getElementById('dirResults');
  if(!el)return;
  el.innerHTML=`<div style="background:#eef7fd;border:1px solid #b8d9f0;border-radius:9px;padding:.6rem .9rem;font-size:.82rem;color:var(--blue);margin-bottom:.6rem">🤖 AI found <strong>${res.length} matches</strong> for "<strong>${q}</strong>"</div><div style="display:grid;gap:.5rem">${res.map((c,i)=>`<div style="display:flex;gap:.75rem;align-items:center;padding:.75rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><div style="width:40px;height:40px;border-radius:50%;background:${AVCOLORS[i%AVCOLORS.length]};display:grid;place-items:center;color:white;font-weight:800;font-size:.88rem;flex-shrink:0">${c.i}</div><div style="flex:1"><div style="font-weight:700;font-size:.9rem">${c.name}</div><div style="font-size:.78rem;color:var(--muted)">${CC[c.c].f} ${CC[c.c].n} · ${c.cert}</div><div style="font-size:.75rem;color:var(--blue);margin-top:.15rem">🤖 ${c.why}</div></div><span style="background:var(--wial-red);color:white;border-radius:8px;padding:.25rem .6rem;font-size:.78rem;font-weight:800;flex-shrink:0">${c.sc}%</span></div>`).join('')}</div>`;
}

function buildMap(){
  const land=`<path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M60 140 L120 130 L160 135 L200 125 L240 130 L270 140 L290 155 L300 175 L280 185 L250 190 L220 195 L190 188 L160 185 L130 178 L100 170 L70 162 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M130 200 L170 205 L185 225 L180 255 L170 280 L155 310 L140 340 L125 360 L110 345 L105 315 L108 285 L112 255 L118 230 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M155 195 L200 190 L215 200 L210 220 L200 240 L185 255 L170 248 L158 232 L153 212 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M380 95 L440 88 L510 92 L560 85 L630 90 L680 98 L720 112 L740 128 L730 145 L700 155 L660 158 L620 155 L580 160 L550 168 L510 162 L470 155 L440 145 L410 135 L390 120 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M440 165 L490 160 L530 168 L545 185 L540 208 L525 228 L505 240 L480 238 L462 225 L450 205 L442 185 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M455 240 L510 235 L545 248 L555 270 L545 295 L525 315 L500 325 L478 318 L460 300 L450 278 L448 258 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M510 248 L565 242 L600 255 L615 275 L608 298 L590 315 L568 320 L548 308 L533 288 L520 268 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M590 148 L650 140 L720 145 L775 138 L830 142 L870 150 L900 162 L910 178 L895 192 L860 200 L820 205 L780 200 L740 195 L700 192 L660 188 L625 180 L600 168 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M700 205 L760 200 L810 210 L835 228 L828 248 L808 262 L782 265 L758 255 L738 240 L718 225 Z"/><path fill="#b8d4e8" stroke="#8ab0cc" stroke-width=".5" d="M800 188 L870 182 L920 188 L950 200 L945 218 L925 230 L895 232 L865 225 L838 210 Z"/>`;
  const pins=Object.entries(mapPins).map(([code,pin])=>{
    const cnt=clRes.length>0?clRes.filter(c=>c.c===code).length:pin.n;
    const sel=clCountry===code;const active=cnt>0;
    return`<g class="map-pin${sel?' sel':''}" onclick="selCountry('${code}')" onmouseenter="showTip(event,'${CC[code].f} ${CC[code].n}','${cnt} coach${cnt!==1?'es':''} · click to view')" onmouseleave="hideTip()">
      <circle class="mo" cx="${pin.x}" cy="${pin.y}" r="${sel?22:17}" fill="${active?(sel?'#c0152a':'#E69F00'):'#aaa'}" opacity="${active?0.22:0.1}"/>
      <circle class="mi" cx="${pin.x}" cy="${pin.y}" r="${sel?13:10}" fill="${active?(sel?'#c0152a':'#E69F00'):'#bbb'}" stroke="white" stroke-width="2.5"/>
      <text x="${pin.x}" y="${pin.y+4}" text-anchor="middle" font-size="9" font-weight="800" fill="white">${cnt}</text>
    </g>`;
  }).join('');
  return`<svg class="map-svg" viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="420" fill="#dbeeff"/>${land}${pins}</svg>`;
}
function showTip(e,nm,info){const t=document.getElementById('mapTip');t.innerHTML=`<strong>${nm}</strong><br><span style="opacity:.8;font-size:.78rem">${info}</span>`;t.style.display='block';const r=e.target.closest('svg').getBoundingClientRect();t.style.left=(e.clientX-r.left-70)+'px';t.style.top=(e.clientY-r.top-52)+'px';}
function hideTip(){document.getElementById('mapTip').style.display='none';}
function selCountry(c){clCountry=c;renderDashboard();setTimeout(()=>{const el=document.getElementById('clRes');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},100);}
function doClientSearch(q){clQ=q||(document.getElementById('clInp')?.value||'');clCountry='';clRes=clQ?runAI(clQ):[];renderDashboard();}

function clientDash(){
  const countryRes=clCountry?(clRes.length>0?clRes:coaches).filter(c=>c.c===clCountry):[];
  const hero=`<div class="cl-hero"><h2>Find Your Action Learning Coach</h2><p>Search by skill in any language. AI matches meaning across English, Portuguese, Spanish, French, German and more.</p><div class="cl-search"><input id="clInp" class="cl-inp" placeholder='Try: "leadership manufacturing" or "liderança para equipes"' value="${clQ}" onkeydown="if(event.key==='Enter')doClientSearch()"/><button class="cl-btn" onclick="doClientSearch()">🔍 Search</button></div><div class="skill-pills">${['leadership','communication','conflict resolution','team bonding','stress management','time management'].map(s=>`<button class="sp${clQ===s?' on':''}" onclick="doClientSearch('${s}')">${s}</button>`).join('')}</div></div>`;
  const stats=`<div class="vis-row"><div class="vb"><div class="vi">🌍</div><div class="vn">9</div><div class="vl">Countries</div></div><div class="vb"><div class="vi">🎓</div><div class="vn">83</div><div class="vl">Coaches</div></div><div class="vb"><div class="vi">⭐</div><div class="vn">4.2</div><div class="vl">Avg Rating</div></div><div class="vb"><div class="vi">🤖</div><div class="vn">AI</div><div class="vl">Smart Match</div></div></div>`;
  const map=`<div class="dc s12" style="position:relative"><div class="dct"><div class="dd"></div>🌍 Global Coach Map ${clRes.length>0?`· "<strong>${clQ}</strong>"`:' · hover a pin, click to explore'}</div><div style="font-size:.82rem;color:var(--muted);margin-bottom:.75rem">${clRes.length>0?`AI found <strong>${clRes.length} matches</strong>. Pin numbers show matches per country.`:'Hover over a pin to preview. Click to view coaches in that country.'}</div><div class="map-wrap" style="position:relative">${buildMap()}</div>${clCountry?`<div style="margin-top:.6rem;background:#eef7fd;border:1px solid #b8d9f0;border-radius:9px;padding:.55rem .9rem;font-size:.82rem;color:var(--blue)">📍 <strong>${CC[clCountry].f} ${CC[clCountry].n}</strong>${clQ?` · matching "<strong>${clQ}</strong>"`:''} · ${countryRes.length} result${countryRes.length!==1?'s':''} <button class="db g" style="padding:.2rem .6rem;font-size:.75rem;margin-left:.5rem" onclick="clCountry='';renderDashboard()">✕ Clear</button></div>`:''}</div>`;
  let resHTML='';
  if(clCountry&&countryRes.length>0){
    resHTML=`<div class="dc s12" id="clRes"><div class="dct"><div class="dd"></div>Coaches in ${CC[clCountry].f} ${CC[clCountry].n}${clQ?` · "${clQ}"`:''} <span class="chip b" style="margin-left:auto">${countryRes.length}</span></div><div style="display:grid;gap:.9rem">${countryRes.map((c,i)=>`<div class="c-res"><div class="c-res-h"><div class="cav" style="background:${AVCOLORS[i%AVCOLORS.length]}">${c.i}</div><div style="flex:1"><div class="cname">${c.name}</div><div style="font-size:.82rem;color:var(--muted);margin-top:.15rem">${CC[c.c].f} ${CC[c.c].n}</div><div class="c-badges"><span class="cbg cert">${c.cert}</span>${c.badges.map(b=>`<span class="cbg">${b}</span>`).join('')}</div></div>${clQ?`<div style="background:var(--wial-red);color:white;border-radius:10px;padding:.5rem .75rem;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800">${c.sc}%</div><div style="font-size:.68rem;opacity:.8">AI Match</div></div>`:''}</div><div class="c-stats"><div class="cst"><div class="cv">⭐ ${c.r}</div><div class="cl">Rating</div></div><div class="cst"><div class="cv">${c.rev}</div><div class="cl">Reviews</div></div><div class="cst"><div class="cv">${c.cert}</div><div class="cl">Level</div></div></div><div class="c-hist"><div class="c-hist-l">📋 Coaching History</div>${c.hist}</div><div class="c-hist" style="margin-bottom:.6rem"><div class="c-hist-l">🎯 Specialisations</div>${c.spec}</div><div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem">${c.skills.map(s=>`<span class="chip b">${s}</span>`).join('')}</div>${clQ?`<div class="ai-why">🤖 <strong>Why matched:</strong> ${c.why}</div>`:''}<div class="brow"><button class="db p" onclick="openPayModal('${c.course}','${c.name}','${c.price}')" style="padding:.55rem .9rem;font-size:.85rem">Enrol in ${c.course}</button><button class="db g" style="padding:.55rem .9rem;font-size:.85rem">View Profile</button></div></div>`).join('')}</div></div>`;
  } else if(clCountry&&countryRes.length===0){
    resHTML=`<div class="dc s12" id="clRes"><div style="text-align:center;padding:2rem;color:var(--muted)"><div style="font-size:2.5rem;margin-bottom:.75rem">😔</div><div style="font-weight:700">No coaches in ${CC[clCountry].n}${clQ?` for "${clQ}"`:''}.</div><button class="db g" onclick="clCountry='';renderDashboard()" style="margin-top:.75rem;padding:.5rem 1rem;font-size:.85rem">View all countries</button></div></div>`;
  }
  const donut=`<div class="dc s6"><div class="dct"><div class="dd"></div>Certification Mix</div><div class="donut-wrap"><svg viewBox="0 0 130 130" width="130"><circle cx="65" cy="65" r="50" fill="none" stroke="#e0e8f0" stroke-width="18"/><circle cx="65" cy="65" r="50" fill="none" stroke="#0072B2" stroke-width="18" stroke-dasharray="${.45*314} ${314}" stroke-dashoffset="0" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#009E73" stroke-width="18" stroke-dasharray="${.30*314} ${314}" stroke-dashoffset="${-.45*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#E69F00" stroke-width="18" stroke-dasharray="${.20*314} ${314}" stroke-dashoffset="${-.75*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="50" fill="none" stroke="#7A68A6" stroke-width="18" stroke-dasharray="${.05*314} ${314}" stroke-dashoffset="${-.95*314}" transform="rotate(-90 65 65)"/><circle cx="65" cy="65" r="40" fill="white"/><text x="65" y="69" text-anchor="middle" font-size="16" font-weight="800" fill="#17324d">83</text></svg><div class="dleg"><div class="dleg-r"><span class="dleg-d" style="background:#0072B2"></span>CALC · 45%</div><div class="dleg-r"><span class="dleg-d" style="background:#009E73"></span>PALC · 30%</div><div class="dleg-r"><span class="dleg-d" style="background:#E69F00"></span>SALC · 20%</div><div class="dleg-r"><span class="dleg-d" style="background:#7A68A6"></span>MALC · 5%</div></div></div></div>`;
  const barChart=`<div class="dc s6"><div class="dct"><div class="dd"></div>Coaches by Country</div><div class="bars-wrap">${allC.map(c=>{const n=mapPins[c]?.n||0;const h=Math.round(n/24*90);return`<div class="bar-col"><div style="font-size:.72rem;font-weight:700">${n}</div><div class="bar-v" style="height:${h}px;background:${clCountry===c?'var(--wial-red)':'linear-gradient(180deg,var(--wial-teal),var(--blue))'}"></div><div class="bar-l">${CC[c].f}</div></div>`;}).join('')}</div></div>`;
  return[hero,stats,map,resHTML,donut,barChart,evCard('s12'),forumsCard('s12')].join('');
}

function dashAdmin(){const u=roleUsers.admin;const m=cMetrics[country];return[pCard(u),mCard('Chapter Overview',m.n,'Coaches in chapter',[['Revenue',m.rev],['Growth',m.g],['Reminders',m.rem],['Brand sync','✓ Live']]),mCard('Content','8','Editable pages',[['Events live','4'],['Testimonials','6'],['Draft events','2'],['Pending','1']]),tmplCard('s12'),evCard('s12'),clientsCard('s12'),testCard('s6'),payFlowCard('s6'),emailCard('s12'),analyticsCard('s12')].join('');}
function dashCreator(){const u=roleUsers.creator;return[pCard(u),mCard('Editable Content','8','Pages assigned',[['Structure','Locked'],['Template','Inherited'],['Media assets','14'],['Pending','3']]),tmplCard('s6'),evCard('s6'),testCard('s6'),clientsCard('s6')].join('');}
function dashCoach(){
  const u=roleUsers.coach;
  const active=coaches.filter(c=>c.c==='us'&&c.flow>0).slice(0,2);
  const future=coaches.filter(c=>c.c!=='us').slice(0,2);
  return[pCard(u),
    mCard('Earnings','$12,450','Total earned (USD)',[['This month','+$2,100'],['Pending','$850'],['Dues','Up to date'],['Next due','Jun 1, 2026']]),
    mCard('Recertification','14','months until renewal',[['Due','May 2027'],['Status','✅ On Track'],['Hours logged','247'],['CE credits','18/32']]),
    testCard('s6'),
    `<div class="dc s6"><div class="dct"><div class="dd"></div>Coaching Hours & Progress</div><div style="background:linear-gradient(135deg,#eef7fd,#e8f8f2);border-radius:10px;padding:.9rem;margin-bottom:.9rem;display:flex;gap:1rem;align-items:center"><div style="font-size:2.4rem;font-weight:800;color:var(--wial-navy)">247</div><div><div style="font-weight:700">Total Hours</div><div style="color:var(--muted);font-size:.82rem">↑ 18 this month</div></div></div><div style="font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--green);margin-bottom:.5rem">Active Clients</div>${active.map(c=>`<div style="background:var(--bg);border:1px solid var(--border);border-radius:9px;padding:.75rem;margin-bottom:.45rem"><div style="display:flex;justify-content:space-between;margin-bottom:.4rem"><span style="font-weight:700;font-size:.88rem">${c.hist.split('(')[0].trim()}</span><span class="chip b">${c.flow}%</span></div><div class="pb"><div class="pf" style="width:${c.flow}%"></div></div></div>`).join('')}<div style="font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--orange);margin:.75rem 0 .5rem">Future / Yet to Start</div>${future.map(c=>`<div style="background:var(--bg);border:1px solid var(--border);border-radius:9px;padding:.75rem;margin-bottom:.45rem"><div style="display:flex;justify-content:space-between;margin-bottom:.4rem"><span style="font-weight:700;font-size:.88rem">${CC[c.c].f} ${CC[c.c].n} Client</span><span class="chip o">0%</span></div><div class="pb"><div class="pf" style="width:0%"></div></div></div>`).join('')}</div>`,
    `<div class="dc s6"><div class="dct"><div class="dd"></div>Upcoming Schedule</div>${[{d:'29',m:'Mar',t:'Acme Corp — Leadership Cohort',meta:'10:00 AM PST · 90 min'},{d:'30',m:'Mar',t:'Delta Health — Team Workshop',meta:'1:00 PM PST · 2 hrs'},{d:'02',m:'Apr',t:'Siemens — Intro Session',meta:'9:00 AM CET'}].map(e=>`<div class="ev-item"><div class="ev-date"><div class="d">${e.d}</div><div class="m">${e.m}</div></div><div><div style="font-weight:700;font-size:.9rem">${e.t}</div><div style="color:var(--muted);font-size:.8rem">${e.meta}</div></div></div>`).join('')}</div>`,
    ceCard('s6'),sessCard('s6'),
    `<div class="dc s12"><div class="dct"><div class="dd"></div>My Profile in Directory</div><div class="ib">🎓 Your profile is live in the global directory. Certification badges require Executive Director approval before showing publicly.</div><div style="display:flex;gap:.9rem;align-items:center;margin-bottom:.9rem"><div class="s-av" style="width:52px;height:52px">SC</div><div><div style="font-size:1.1rem;font-weight:800">Sarah Chen · SALC</div><div style="color:var(--muted);font-size:.82rem">USA · coach@wial.org</div></div></div><div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.9rem"><span class="chip b">SALC Certified ✓</span><span class="chip g">Global Mentor ✓</span><span class="chip g">Top Rated 2024 ✓</span><span class="chip o">Top Rated 2026 ⏳ Pending</span></div><button class="db p" onclick="openM('profileModal')" style="padding:.6rem 1rem;font-size:.85rem">✏️ Edit My Profile</button></div>`,
    jobCard('s12')
  ].join('');}
function dashSuper(){const u=roleUsers.superadmin;return[pCard(u),mCard('Global Network','9','Active chapters',[['Total coaches','83'],['Countries','9'],['Brand sync','100%'],['Revenue','~$168K']]),mCard('Platform Health','91.2%','Payment conversion',[['Template pushes','2 this month'],['Badge approvals','2 pending'],['Reminders queued','34'],['Chapters live','7/9']]),badgeCard('s12'),tmplCard('s12'),`<div class="dc s6"><div class="dct"><div class="dd"></div>Revenue by Chapter</div>${allC.map(c=>`<div class="dr"><span>${CC[c].f} ${CC[c].n}</span><strong>${cMetrics[c].rev} <span class="chip g" style="margin-left:.3rem">${cMetrics[c].g}</span></strong></div>`).join('')}</div>`,emailCard('s6'),evCard('s12'),clientsCard('s12'),analyticsCard('s12')].join('');}

function renderDashboard(){
  renderSidebar();renderTopbar();renderCorePages();
  const g=document.getElementById('dashGrid');
  if(role==='admin')g.innerHTML=dashAdmin();
  else if(role==='creator')g.innerHTML=dashCreator();
  else if(role==='coach')g.innerHTML=dashCoach();
  else if(role==='superadmin')g.innerHTML=dashSuper();
  else g.innerHTML=clientDash();
  applyTranslations();
  localizeRenderedContent();
}


function openM(id){document.getElementById(id).classList.add('show');}
function closeM(id){document.getElementById(id).classList.remove('show');}
function openPayModal(c,h,p){document.getElementById('pmC').textContent=c;document.getElementById('pmH').textContent=h;document.getElementById('pmP').textContent=p;document.getElementById('payRes').style.display='none';openM('payModal');}
function doPayment(m){const r=document.getElementById('payRes');r.textContent=`✅ Paid with ${m}. Confirmed. Receipt sent to ${userEmail}.`;r.style.display='block';}
function provChapter(){const c=document.getElementById('ncC').value;const n=document.getElementById('ncN').value||`WIAL ${CC[c]?.n||c}`;const url=document.getElementById('ncU').value==='sub'?`${c}.wial.org`:`wial.org/${c}`;const r=document.getElementById('ncRes');r.style.display='block';r.textContent=`✅ "${n}" provisioned! URL: ${url} · Template applied · Core pages created.`;}

setTab('login');
showPublic();

let tabCount=0;
document.addEventListener('keydown',e=>{
  if(e.key==='Tab'){tabCount++;if(tabCount===3&&!document.body.classList.contains('a11y-keyboard')){console.log('Tip: Enable Keyboard Navigation in Accessibility menu for visible focus rings.');}}
});