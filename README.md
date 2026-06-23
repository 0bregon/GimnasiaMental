<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gimnasio Mental | Entrenamiento de Pensamiento Analítico para Niños</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
:root{
  --verde: #1B4D3E;
  --verde-claro: #2D6E58;
  --amarillo: #F4C430;
  --azul: #1E3A5F;
  --crema: #FAF7F0;
  --tinta: #16241F;
  --linea: rgba(27,77,62,0.14);
}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{
  font-family:'Inter',sans-serif;
  background:var(--crema);
  color:var(--tinta);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,.display{font-family:'Space Grotesk',sans-serif;letter-spacing:-0.01em;}
a{text-decoration:none;color:inherit;}
img{max-width:100%;display:block;}
.wrap{max-width:1140px;margin:0 auto;padding:0 28px;}

/* ===== HEADER ===== */
header{
  position:sticky;top:0;z-index:50;
  background:rgba(250,247,240,0.92);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--linea);
}
.nav{display:flex;align-items:center;justify-content:space-between;padding:18px 28px;max-width:1140px;margin:0 auto;}
.brand{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.25rem;color:var(--verde);}
.brand .dot{width:10px;height:10px;border-radius:50%;background:var(--amarillo);box-shadow:0 0 0 4px rgba(244,196,48,0.25);}
.nav-links{display:flex;gap:34px;font-size:0.95rem;font-weight:500;}
.nav-links a{color:var(--tinta);opacity:0.75;transition:opacity .2s;}
.nav-links a:hover{opacity:1;}
.nav-cta{
  background:var(--azul);color:#fff;padding:11px 22px;border-radius:999px;
  font-weight:600;font-size:0.92rem;border:none;cursor:pointer;
  transition:transform .15s ease, background .2s;
}
.nav-cta:hover{background:var(--verde);transform:translateY(-1px);}
.menu-toggle{display:none;background:none;border:none;font-size:1.4rem;color:var(--verde);cursor:pointer;}

/* ===== HERO ===== */
.hero{
  position:relative;overflow:hidden;
  padding:90px 0 70px;
  background:
    radial-gradient(circle at 85% 10%, rgba(244,196,48,0.16), transparent 45%),
    radial-gradient(circle at 5% 90%, rgba(30,58,95,0.10), transparent 50%);
}
.hero-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center;}
.eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(27,77,62,0.08);color:var(--verde);
  padding:7px 16px;border-radius:999px;font-size:0.82rem;font-weight:600;
  letter-spacing:0.03em;text-transform:uppercase;margin-bottom:22px;
}
.eyebrow i{color:var(--amarillo);}
.hero h1{
  font-size:3.05rem;font-weight:700;line-height:1.08;color:var(--verde);
  margin-bottom:22px;
}
.hero h1 .accent{color:var(--azul);position:relative;}
.hero h1 .accent::after{
  content:'';position:absolute;left:0;right:0;bottom:6px;height:10px;
  background:var(--amarillo);z-index:-1;opacity:0.55;
}
.hero p.lead{font-size:1.13rem;color:rgba(22,36,31,0.75);max-width:480px;margin-bottom:32px;}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:36px;}
.btn-primary{
  background:var(--azul);color:#fff;padding:15px 28px;border-radius:999px;
  font-weight:600;font-size:1rem;border:none;cursor:pointer;
  display:inline-flex;align-items:center;gap:10px;
  transition:transform .15s ease, box-shadow .2s;
  box-shadow:0 10px 24px rgba(30,58,95,0.22);
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(30,58,95,0.28);}
.btn-secondary{
  background:transparent;color:var(--verde);padding:15px 24px;border-radius:999px;
  font-weight:600;font-size:1rem;border:1.5px solid rgba(27,77,62,0.3);cursor:pointer;
  transition:border-color .2s, background .2s;
}
.btn-secondary:hover{border-color:var(--verde);background:rgba(27,77,62,0.05);}

.hero-stats{display:flex;gap:30px;}
.stat b{font-family:'Space Grotesk',sans-serif;font-size:1.6rem;color:var(--azul);display:block;}
.stat span{font-size:0.85rem;color:rgba(22,36,31,0.6);}

/* Signature visual: barra de "series mentales" */
.hero-visual{position:relative;display:flex;justify-content:center;}
.rep-bar{
  background:#fff;border-radius:24px;padding:30px 28px;
  box-shadow:0 24px 50px rgba(27,77,62,0.14);
  width:100%;max-width:360px;border:1px solid var(--linea);
}
.rep-bar-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px;}
.rep-bar-head span{font-size:0.8rem;color:rgba(22,36,31,0.55);font-weight:600;letter-spacing:0.04em;text-transform:uppercase;}
.rep-bar-head b{font-family:'Space Grotesk',sans-serif;color:var(--verde);font-size:1.1rem;}
.set{display:flex;align-items:center;gap:14px;margin-bottom:16px;}
.set .label{width:120px;font-size:0.85rem;font-weight:600;color:var(--tinta);}
.set .track{flex:1;height:10px;background:rgba(27,77,62,0.08);border-radius:6px;overflow:hidden;}
.set .fill{height:100%;border-radius:6px;}
.set:nth-child(2) .fill{background:var(--verde-claro);width:88%;}
.set:nth-child(3) .fill{background:var(--azul);width:64%;}
.set:nth-child(4) .fill{background:var(--amarillo);width:97%;}
.set .pct{width:38px;text-align:right;font-size:0.82rem;font-weight:700;color:rgba(22,36,31,0.6);}
.rep-bar-foot{margin-top:18px;padding-top:16px;border-top:1px dashed var(--linea);font-size:0.82rem;color:rgba(22,36,31,0.6);display:flex;align-items:center;gap:8px;}
.rep-bar-foot i{color:var(--amarillo);}

/* ===== PROGRAMAS (3 CARDS) ===== */
.programas{padding:90px 0;}
.section-head{text-align:center;max-width:620px;margin:0 auto 56px;}
.section-head .eyebrow{margin-bottom:16px;}
.section-head h2{font-size:2.15rem;color:var(--verde);margin-bottom:14px;font-weight:700;}
.section-head p{color:rgba(22,36,31,0.68);font-size:1.05rem;}

.cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.card{
  background:#fff;border-radius:22px;padding:34px 28px;
  border:1px solid var(--linea);
  transition:transform .2s ease, box-shadow .2s ease;
  position:relative;overflow:hidden;
}
.card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(27,77,62,0.12);}
.card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:5px;
}
.card.c1::before{background:var(--verde);}
.card.c2::before{background:var(--azul);}
.card.c3::before{background:var(--amarillo);}
.card-icon{
  width:54px;height:54px;border-radius:16px;display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;margin-bottom:22px;color:#fff;
}
.card.c1 .card-icon{background:var(--verde);}
.card.c2 .card-icon{background:var(--azul);}
.card.c3 .card-icon{background:var(--amarillo);color:var(--tinta);}
.card h3{font-size:1.28rem;color:var(--verde);margin-bottom:10px;font-weight:700;}
.card p.desc{color:rgba(22,36,31,0.68);font-size:0.96rem;margin-bottom:20px;}
.card .skills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px;}
.card .skills span{
  font-size:0.78rem;background:rgba(27,77,62,0.06);color:var(--verde);
  padding:5px 11px;border-radius:999px;font-weight:600;
}
.card .meta{display:flex;justify-content:space-between;font-size:0.82rem;color:rgba(22,36,31,0.55);padding-top:16px;border-top:1px solid var(--linea);}
.card .meta b{color:var(--tinta);}

/* ===== POR QUÉ / BENEFICIOS ===== */
.beneficios{padding:90px 0;background:var(--verde);color:#fff;position:relative;overflow:hidden;}
.beneficios::after{
  content:'';position:absolute;right:-120px;top:-120px;width:340px;height:340px;
  border-radius:50%;background:rgba(244,196,48,0.12);
}
.ben-grid{display:grid;grid-template-columns:0.85fr 1.15fr;gap:60px;align-items:center;position:relative;z-index:1;}
.ben-grid h2{font-size:2rem;margin-bottom:18px;font-weight:700;}
.ben-grid > div:first-child p{color:rgba(255,255,255,0.78);font-size:1.02rem;}
.ben-list{display:flex;flex-direction:column;gap:22px;}
.ben-item{display:flex;gap:18px;align-items:flex-start;}
.ben-item .num{
  font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1rem;
  width:38px;height:38px;border-radius:50%;background:rgba(244,196,48,0.18);color:var(--amarillo);
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
}
.ben-item h4{font-size:1.04rem;margin-bottom:5px;font-weight:600;}
.ben-item p{color:rgba(255,255,255,0.7);font-size:0.92rem;}

/* ===== TESTIMONIOS ===== */
.testimonios{padding:90px 0;}
.test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.test-card{
  background:#fff;border:1px solid var(--linea);border-radius:20px;padding:30px;
}
.stars{color:var(--amarillo);margin-bottom:16px;font-size:0.9rem;}
.test-card p{font-size:0.96rem;color:rgba(22,36,31,0.78);margin-bottom:20px;font-style:italic;}
.test-who{display:flex;align-items:center;gap:12px;}
.test-avatar{
  width:42px;height:42px;border-radius:50%;background:var(--azul);color:#fff;
  display:flex;align-items:center;justify-content:center;font-weight:700;font-family:'Space Grotesk',sans-serif;
}
.test-who b{display:block;font-size:0.9rem;}
.test-who span{font-size:0.8rem;color:rgba(22,36,31,0.55);}

/* ===== FORMULARIO AGENDAR ===== */
.agendar{padding:90px 0 110px;background:var(--crema);}
.agendar-box{
  background:#fff;border-radius:28px;border:1px solid var(--linea);
  box-shadow:0 30px 60px rgba(27,77,62,0.10);
  display:grid;grid-template-columns:0.95fr 1.05fr;overflow:hidden;
}
.agendar-info{
  background:var(--azul);color:#fff;padding:50px 42px;display:flex;flex-direction:column;justify-content:center;
  position:relative;
}
.agendar-info::before{
  content:'';position:absolute;left:-80px;bottom:-80px;width:220px;height:220px;border-radius:50%;
  background:rgba(244,196,48,0.10);
}
.agendar-info h2{font-size:1.7rem;margin-bottom:16px;position:relative;z-index:1;font-weight:700;}
.agendar-info p{color:rgba(255,255,255,0.8);font-size:0.96rem;margin-bottom:26px;position:relative;z-index:1;}
.agendar-points{display:flex;flex-direction:column;gap:14px;position:relative;z-index:1;}
.agendar-points div{display:flex;gap:10px;align-items:center;font-size:0.9rem;color:rgba(255,255,255,0.92);}
.agendar-points i{color:var(--amarillo);}

.agendar-form{padding:50px 42px;}
.agendar-form h3{font-size:1.2rem;color:var(--verde);margin-bottom:6px;font-weight:700;}
.agendar-form .sub{font-size:0.88rem;color:rgba(22,36,31,0.6);margin-bottom:26px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.field{display:flex;flex-direction:column;gap:6px;}
.field.full{grid-column:1/-1;}
.field label{font-size:0.82rem;font-weight:600;color:var(--tinta);}
.field input,.field select{
  border:1.5px solid var(--linea);border-radius:10px;padding:11px 13px;font-size:0.93rem;
  font-family:'Inter',sans-serif;background:var(--crema);color:var(--tinta);
  transition:border-color .2s;
}
.field input:focus,.field select:focus{outline:none;border-color:var(--azul);background:#fff;}
.submit-btn{
  width:100%;background:var(--azul);color:#fff;border:none;border-radius:10px;
  padding:15px;font-size:0.98rem;font-weight:700;cursor:pointer;margin-top:8px;
  display:flex;align-items:center;justify-content:center;gap:10px;
  transition:background .2s, transform .15s;
}
.submit-btn:hover{background:var(--verde);transform:translateY(-1px);}
.form-note{font-size:0.78rem;color:rgba(22,36,31,0.5);margin-top:12px;text-align:center;}

/* ===== FOOTER ===== */
footer{background:var(--tinta);color:rgba(255,255,255,0.7);padding:50px 0 30px;}
.foot-grid{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:30px;margin-bottom:30px;}
.foot-brand{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;color:#fff;font-size:1.1rem;}
.foot-brand .dot{width:9px;height:9px;border-radius:50%;background:var(--amarillo);}
.foot-links{display:flex;gap:30px;flex-wrap:wrap;}
.foot-links a{font-size:0.88rem;color:rgba(255,255,255,0.65);transition:color .2s;}
.foot-links a:hover{color:#fff;}
.foot-social{display:flex;gap:16px;}
.foot-social a{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;transition:background .2s;}
.foot-social a:hover{background:var(--azul);}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.1);padding-top:22px;font-size:0.8rem;text-align:center;color:rgba(255,255,255,0.45);}

/* ===== TOASTS ===== */
.notification-container{position:fixed;top:20px;right:20px;z-index:999;display:flex;flex-direction:column;gap:10px;}
.notification{
  background:#fff;border-radius:12px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;
  box-shadow:0 12px 30px rgba(0,0,0,0.14);min-width:280px;max-width:340px;
  border-left:4px solid var(--verde);animation:slideIn .25s ease;
}
.notification-success{border-left-color:var(--verde);}
.notification-error{border-left-color:#c0392b;}
.notification-warning{border-left-color:var(--amarillo);}
.notification-info{border-left-color:var(--azul);}
.notification-icon{font-size:1.1rem;color:var(--verde);margin-top:1px;}
.notification-title{font-weight:700;font-size:0.88rem;}
.notification-message{font-size:0.84rem;color:rgba(22,36,31,0.7);}
.notification-close{background:none;border:none;cursor:pointer;color:rgba(22,36,31,0.4);margin-left:auto;}
@keyframes slideIn{from{transform:translateX(30px);opacity:0;}to{transform:translateX(0);opacity:1;}}

/* ===== RESPONSIVE ===== */
@media (max-width:880px){
  .nav-links{display:none;}
  .menu-toggle{display:block;}
  .hero-grid{grid-template-columns:1fr;}
  .hero h1{font-size:2.3rem;}
  .hero-visual{margin-top:10px;}
  .cards-grid{grid-template-columns:1fr;}
  .ben-grid{grid-template-columns:1fr;gap:36px;}
  .test-grid{grid-template-columns:1fr;}
  .agendar-box{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
  .agendar-info,.agendar-form{padding:36px 26px;}
  .foot-grid{flex-direction:column;}
}
@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.01ms !important;transition-duration:0.01ms !important;}
}
</style>
</head>
<body>

<header>
  <div class="nav">
    <div class="brand"><span class="dot"></span>Gimnasio Mental</div>
    <nav class="nav-links">
      <a href="#programas">Programas</a>
      <a href="#beneficios">Beneficios</a>
      <a href="#testimonios">Testimonios</a>
      <a href="#agendar">Contacto</a>
    </nav>
    <button class="nav-cta" onclick="document.getElementById('agendar').scrollIntoView({behavior:'smooth'})">Evaluación gratuita</button>
  </div>
</header>

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow"><i class="fas fa-brain"></i> Centro de entrenamiento cognitivo</div>
      <h1>El gimnasio donde tu hijo<br>entrena <span class="accent">la mente</span>,<br>no los músculos.</h1>
      <p class="lead">Igual que el cuerpo, el pensamiento analítico se entrena con repetición, técnica y guía experta. Series de lógica, lectura y algoritmos diseñadas para que cada sesión deje músculo mental.</p>
      <div class="hero-ctas">
        <button class="btn-primary" onclick="document.getElementById('agendar').scrollIntoView({behavior:'smooth'})">
          <i class="fas fa-calendar-check"></i> Agendar evaluación gratuita
        </button>
        <button class="btn-secondary" onclick="document.getElementById('programas').scrollIntoView({behavior:'smooth'})">Ver programas</button>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>+1,200</b><span>niños entrenados</span></div>
        <div class="stat"><b>92%</b><span>mejora medible en 8 semanas</span></div>
        <div class="stat"><b>3</b><span>programas especializados</span></div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="rep-bar">
        <div class="rep-bar-head"><span>Progreso semanal</span><b>Serie 4 de 6</b></div>
        <div class="set"><div class="label">Lógica matemática</div><div class="track"><div class="fill"></div></div><div class="pct">88%</div></div>
        <div class="set"><div class="label">Comprensión lectora</div><div class="track"><div class="fill"></div></div><div class="pct">64%</div></div>
        <div class="set"><div class="label">Algoritmos básicos</div><div class="track"><div class="fill"></div></div><div class="pct">97%</div></div>
        <div class="rep-bar-foot"><i class="fas fa-bolt"></i> 3 repeticiones más para subir de nivel</div>
      </div>
    </div>
  </div>
</section>

<section class="programas" id="programas">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow"><i class="fas fa-dumbbell"></i> Nuestros programas</div>
      <h2>Tres rutinas de entrenamiento mental</h2>
      <p>Cada programa funciona como una rutina de gimnasio: series progresivas, retos medibles y un instructor que ajusta la intensidad al ritmo de cada niño.</p>
    </div>
    <div class="cards-grid">

      <div class="card c1">
        <div class="card-icon"><i class="fas fa-square-root-variable"></i></div>
        <h3>Lógica Matemática</h3>
        <p class="desc">Ejercicios de razonamiento numérico y patrones que convierten "no entiendo matemáticas" en "encontré la forma de resolverlo".</p>
        <div class="skills"><span>Patrones</span><span>Problemas</span><span>Razonamiento</span></div>
        <div class="meta"><span>Edad <b>7–12 años</b></span><span><b>2</b> sesiones/sem</span></div>
      </div>

      <div class="card c2">
        <div class="card-icon"><i class="fas fa-book-open"></i></div>
        <h3>Comprensión Lectora</h3>
        <p class="desc">Entrena la capacidad de leer entre líneas, inferir y argumentar, la base de todo pensamiento crítico futuro.</p>
        <div class="skills"><span>Inferencia</span><span>Análisis</span><span>Vocabulario</span></div>
        <div class="meta"><span>Edad <b>6–12 años</b></span><span><b>2</b> sesiones/sem</span></div>
      </div>

      <div class="card c3">
        <div class="card-icon"><i class="fas fa-diagram-project"></i></div>
        <h3>Algoritmos Básicos</h3>
        <p class="desc">Pensamiento computacional sin pantallas complicadas: secuencias, condiciones y lógica paso a paso para resolver cualquier problema.</p>
        <div class="skills"><span>Secuencias</span><span>Lógica</span><span>Resolución</span></div>
        <div class="meta"><span>Edad <b>8–13 años</b></span><span><b>1</b> sesión/sem</span></div>
      </div>

    </div>
  </div>
</section>

<section class="beneficios" id="beneficios">
  <div class="wrap ben-grid">
    <div>
      <h2>¿Por qué entrenar el pensamiento como se entrena el cuerpo?</h2>
      <p>El cerebro de un niño tiene la misma capacidad de mejora que cualquier músculo: con la rutina correcta y constancia, los resultados son medibles en semanas, no en años.</p>
    </div>
    <div class="ben-list">
      <div class="ben-item">
        <div class="num">1</div>
        <div><h4>Mejor desempeño escolar</h4><p>El razonamiento lógico se transfiere directamente a matemáticas, ciencias y comprensión de lectura en la escuela.</p></div>
      </div>
      <div class="ben-item">
        <div class="num">2</div>
        <div><h4>Confianza para resolver problemas</h4><p>Niños que practican lógica con regularidad enfrentan retos nuevos sin bloquearse ante lo desconocido.</p></div>
      </div>
      <div class="ben-item">
        <div class="num">3</div>
        <div><h4>Resultados que se pueden medir</h4><p>Cada sesión se evalúa con métricas claras, así ves el progreso real de tu hijo, no solo una sensación.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="testimonios" id="testimonios">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow"><i class="fas fa-star"></i> Lo que dicen los padres</div>
      <h2>Resultados que se notan en casa</h2>
    </div>
    <div class="test-grid">
      <div class="test-card">
        <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>Mi hijo pasó de evitar las matemáticas a pedirme que le ponga retos extra los fines de semana.</p>
        <div class="test-who"><div class="test-avatar">M</div><div><b>Marisol Quintero</b><span>Mamá de Andrés, 9 años</span></div></div>
      </div>
      <div class="test-card">
        <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>La evaluación diagnóstica nos mostró exactamente dónde estaba atorada y el programa se ajustó a eso.</p>
        <div class="test-who"><div class="test-avatar">R</div><div><b>Roberto Sánchez</b><span>Papá de Valentina, 11 años</span></div></div>
      </div>
      <div class="test-card">
        <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>Cambió la forma en que mi hijo lee instrucciones de cualquier cosa, no solo de la tarea.</p>
        <div class="test-who"><div class="test-avatar">L</div><div><b>Lucía Fernández</b><span>Mamá de Diego, 8 años</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="agendar" id="agendar">
  <div class="wrap">
    <div class="agendar-box">
      <div class="agendar-info">
        <h2>Agenda la evaluación diagnóstica gratuita</h2>
        <p>Una sesión sin costo donde identificamos el nivel de pensamiento analítico de tu hijo y te recomendamos el programa ideal.</p>
        <div class="agendar-points">
          <div><i class="fas fa-check"></i> Sin costo ni compromiso</div>
          <div><i class="fas fa-check"></i> Reporte de resultados para los padres</div>
          <div><i class="fas fa-check"></i> Recomendación de programa personalizada</div>
          <div><i class="fas fa-check"></i> Duración aproximada: 30 minutos</div>
        </div>
      </div>
      <div class="agendar-form">
        <h3>Reserva tu cupo</h3>
        <p class="sub">Te contactaremos en menos de 24 horas para confirmar el horario.</p>
        <form id="formAgenda" onsubmit="enviarFormulario(event)">
          <div class="form-row">
            <div class="field"><label for="nombrePadre">Nombre del padre/madre</label><input type="text" id="nombrePadre" required></div>
            <div class="field"><label for="nombreHijo">Nombre del niño/a</label><input type="text" id="nombreHijo" required></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="edadHijo">Edad del niño/a</label><input type="number" id="edadHijo" min="5" max="14" required></div>
            <div class="field"><label for="programaInteres">Programa de interés</label>
              <select id="programaInteres">
                <option value="logica">Lógica Matemática</option>
                <option value="lectura">Comprensión Lectora</option>
                <option value="algoritmos">Algoritmos Básicos</option>
                <option value="no-seguro">No estoy seguro/a</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="field full"><label for="emailPadre">Correo electrónico</label><input type="email" id="emailPadre" required></div>
          </div>
          <div class="form-row">
            <div class="field full"><label for="telPadre">Teléfono / WhatsApp</label><input type="tel" id="telPadre" required></div>
          </div>
          <button type="submit" class="submit-btn"><i class="fas fa-paper-plane"></i> Solicitar evaluación gratuita</button>
          <p class="form-note">Al enviar este formulario, aceptas que te contactemos para coordinar la sesión.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand"><span class="dot"></span>Gimnasio Mental</div>
      <div class="foot-links">
        <a href="#programas">Programas</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#agendar">Agendar evaluación</a>
      </div>
      <div class="foot-social">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
    <div class="foot-bottom">© 2026 Gimnasio Mental — Entrenamiento de pensamiento analítico para niños.</div>
  </div>
</footer>

<script>
function escapeXSS(str){ if(!str) return ''; return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;'); }

class NotificationSystem {
  constructor(){ this.createContainer(); }
  createContainer(){ if(!document.querySelector('.notification-container')){ const c=document.createElement('div'); c.className='notification-container'; document.body.appendChild(c); } }
  showToast(message, type='info', duration=3500){
    const container = document.querySelector('.notification-container');
    const toast = document.createElement('div');
    const icons = { success:'fa-check-circle', error:'fa-exclamation-circle', warning:'fa-exclamation-triangle', info:'fa-info-circle' };
    const titles = { success:'Listo', error:'Error', warning:'Atención', info:'Información' };
    toast.className = `notification notification-${type}`;
    toast.innerHTML = `<div class="notification-icon"><i class="fas ${icons[type]}"></i></div>
      <div class="notification-content"><div class="notification-title">${titles[type]}</div><div class="notification-message">${escapeXSS(message)}</div></div>
      <button class="notification-close"><i class="fas fa-times"></i></button>`;
    container.appendChild(toast);
    setTimeout(()=> toast.remove(), duration);
    toast.querySelector('.notification-close').onclick = () => toast.remove();
  }
}
const notifier = new NotificationSystem();

function enviarFormulario(e){
  e.preventDefault();
  const nombrePadre = document.getElementById('nombrePadre').value.trim();
  const nombreHijo = document.getElementById('nombreHijo').value.trim();
  const edadHijo = document.getElementById('edadHijo').value;
  const emailPadre = document.getElementById('emailPadre').value.trim();
  const telPadre = document.getElementById('telPadre').value.trim();

  if(!nombrePadre || !nombreHijo || !edadHijo || !emailPadre || !telPadre){
    notifier.showToast('Completa todos los campos para continuar', 'warning');
    return;
  }

  // Aquí se conectaría a Supabase u otro backend para guardar la solicitud:
  // await db.from('solicitudes_evaluacion').insert({ nombre_padre, nombre_hijo, edad_hijo, email_padre, tel_padre, programa_interes });

  notifier.showToast(`¡Gracias ${nombrePadre}! Te contactaremos pronto para agendar la evaluación de ${nombreHijo}.`, 'success');
  document.getElementById('formAgenda').reset();
}
</script>

</body>
</html>
