import "./landing.css";

const arrow = '<span aria-hidden="true">↗</span>';

export function landing(root: HTMLElement) {
  root.innerHTML = `<div class="site-shell home-page">
    <header class="topbar">
      <a class="brand" href="/" aria-label="PocketLab STEM — главная" aria-current="page"><img class="brand-mark" src="/pocketlab-logo.png" alt=""><strong>PocketLab</strong><span>STEM</span></a>
      <nav class="main-navigation" aria-label="Главная навигация">
        <a href="/pendulum">Маятник</a><a href="/sound">Увидь свой голос</a><a href="/bottle">Собери музыкальный инструмент</a>
      </nav>
    </header>
    <main class="home-main" id="top">
      <section class="home-intro" aria-labelledby="home-title">
        <div class="home-copy">
          <p class="home-kicker"><span></span> ФИЗИКА ПОД РУКОЙ</p>
          <h1 id="home-title">Мир работает<br>по законам.<br><em>Проверь их.</em></h1>
          <p class="home-lead">Нить, бутылка, твой голос. Привычные вещи становятся экспериментами, а телефон — измерительным прибором.</p>
          <a class="home-primary" href="#experiments">Выбрать эксперимент <span aria-hidden="true">↓</span></a>
          <p class="home-small">На телефоне — датчики. На компьютере — открытия.</p>
        </div>
        <div class="home-demo" aria-label="Интерактивная модель маятника">
          <div class="home-demo-heading"><span>ПОПРОБУЙ ПРЯМО ЗДЕСЬ</span><span class="home-model-label">Модель · не измерение</span></div>
          <div class="home-demo-question">Длиннее нить.<br>Медленнее маятник?</div>
          <svg class="home-apparatus" viewBox="0 0 550 280" role="img" aria-label="Модель маятника и график его колебаний">
            <defs><pattern id="home-grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#dce5ef" stroke-width=".7"/></pattern></defs>
            <rect width="550" height="280" fill="url(#home-grid)"/>
            <path d="M42 29H215M62 22l-7 7m23-7-7 7m23-7-7 7m23-7-7 7m23-7-7 7m23-7-7 7m23-7-7 7m23-7-7 7m23-7-7 7" stroke="#8193ac" stroke-width="2"/>
            <path d="M130 36V245" stroke="#b5c4d6" stroke-dasharray="4 5"/>
            <path id="home-arc" d="M63 214Q130 252 197 214" fill="none" stroke="#cfdae7" stroke-dasharray="4 4"/>
            <g id="home-pendulum" class="home-pendulum"><path id="home-string" d="M130 36V215" stroke="#334d70" stroke-width="2"/><g id="home-bob" transform="translate(130 215)"><rect x="-18" y="-29" width="36" height="58" rx="8" fill="#17365a"/><rect x="-13" y="-22" width="26" height="42" rx="3" fill="#edf3fa"/><path d="M-8 1l4-8 5 15 5-10h3" fill="none" stroke="#ed701e" stroke-width="2"/><circle cy="24" r="1.5" fill="#e5edf7"/></g></g>
            <circle cx="130" cy="36" r="5" fill="#ef741f"/>
            <text x="24" y="267" class="home-svg-note">01 / ДВИЖЕНИЕ</text>
            <g transform="translate(280 55)"><text x="0" y="0" class="home-svg-note">02 / КОЛЕБАНИЯ</text><path d="M0 40H235M0 100H235M0 160H235" stroke="#d0dce9"/><path d="M0 100H235" stroke="#9baec5" stroke-dasharray="3 4"/><path id="home-wave" d="" fill="none" stroke="#ef741f" stroke-width="2.5" stroke-linecap="round"/><text x="0" y="181" class="home-svg-note">0</text><text x="210" y="181" class="home-svg-note">6 с</text></g>
          </svg>
          <div class="home-demo-controls"><div class="home-range"><label for="home-length">Длина нити <output id="home-length-value" for="home-length">50 см</output></label><input id="home-length" type="range" min="20" max="100" value="50" step="5"><div class="home-range-ends"><span>20 см</span><span>100 см</span></div></div><div class="home-period"><span>Период колебания</span><div><output id="home-period">1,42</output> <small>с</small></div></div></div>
          <div class="home-demo-bottom"><span>Потяни ползунок — сравни ритм</span><span>T = 2π√(L/g)</span></div>
        </div>
      </section>
      <section class="home-experiments" id="experiments" aria-labelledby="home-experiments-title">
        <div class="home-section-heading"><div><p class="home-kicker">ОТ ВОПРОСА К ОПЫТУ</p><h2 id="home-experiments-title">Что исследуем?</h2></div><p>Три способа посмотреть<br>на привычное иначе.</p></div>
        <div class="home-labs">
          <a class="home-lab" href="/pendulum"><div class="home-lab-top"><span>01 / МЕХАНИКА</span>${arrow}</div><div class="home-lab-art"><img src="/pendulum-logo.png" alt="" width="112" height="112"><span class="home-formula">T = 2π√<span class="home-radicand">L/g</span></span></div><h3>От чего зависит<br>ритм маятника?</h3><p>Меняй длину нити, измеряй период и вычисли ускорение свободного падения.</p><div class="home-lab-bottom"><span>Маятник</span><span class="home-lab-sensor">Датчик движения</span></div></a>
          <a class="home-lab" href="/sound"><div class="home-lab-top"><span>02 / АКУСТИКА</span>${arrow}</div><div class="home-lab-art"><img src="/sound-logo.png" alt="" width="112" height="112"><svg viewBox="0 0 150 60" aria-hidden="true"><path d="M0 30h9l5-9 6 18 6-28 6 40 6-47 6 52 6-43 6 33 6-23 6 16 6-12 6 6h9l6-10 6 18 6-29 6 40 6-31 6 22 6-14 6 6h13" fill="none" stroke="currentColor" stroke-width="2"/></svg></div><h3>Как выглядит<br>твой голос?</h3><p>Произнеси звук. Увидь его частоты и узнай, чем высокий голос отличается от низкого.</p><div class="home-lab-bottom"><span>Увидь свой голос</span><span class="home-lab-sensor">Микрофон</span></div></a>
          <a class="home-lab" href="/bottle"><div class="home-lab-top"><span>03 / РЕЗОНАНС</span>${arrow}</div><div class="home-lab-art"><img src="/bottle-logo.png" alt="" width="112" height="112"><span class="home-notes" aria-hidden="true">♪ <span>♫</span> ♪</span></div><h3>Может ли бутылка<br>стать инструментом?</h3><p>Добавляй воду, исследуй высоту звука и настрой собственный музыкальный инструмент.</p><div class="home-lab-bottom"><span>Собери инструмент</span><span class="home-lab-sensor">Микрофон</span></div></a>
        </div>
      </section>
      <section class="home-start" aria-labelledby="home-start-title"><div class="home-start-intro"><p class="home-kicker">ВСЁ УЖЕ ПОД РУКОЙ</p><h2 id="home-start-title">Телефон.<br>Компьютер.<br>Любопытство.</h2><p>Приложение устанавливать не нужно.<br>Оба устройства работают в браузере.</p></div><ol class="home-steps"><li><span>01</span><div><h3>Открой любой эксперимент</h3><p>В лаборатории есть подсказки по подготовке и проведению опыта.</p></div></li><li><span>02</span><div><h3>Подключи телефон по QR-коду</h3><p>Создай сессию на компьютере и разреши доступ к нужному датчику на телефоне.</p></div></li><li><span>03</span><div><h3>Измеряй. Сравнивай. Объясняй.</h3><p>Наблюдай графики на большом экране и проверяй свои предположения.</p></div></li></ol><div class="home-start-aside"><span aria-hidden="true">↗</span><p>Не просто<br>«так в учебнике».<br><strong>Так в твоём опыте.</strong></p><a href="/pendulum">Начать с маятника →</a></div></section>
      <footer class="home-footer"><a href="#top">PocketLab <span>STEM</span></a><p>Маленькая лаборатория. Настоящая физика.</p><a href="#experiments">К экспериментам ↑</a></footer>
    </main>
  </div>`;

  const length = root.querySelector<HTMLInputElement>("#home-length")!;
  const period = root.querySelector<HTMLOutputElement>("#home-period")!;
  const lengthValue = root.querySelector<HTMLOutputElement>("#home-length-value")!;
  const pendulum = root.querySelector<SVGGElement>("#home-pendulum")!;
  function updateModel() {
    const cm = Number(length.value);
    const seconds = 2 * Math.PI * Math.sqrt(cm / 100 / 9.81);
    const bobY = 106 + cm * 1.4;
    lengthValue.value = `${cm} см`;
    length.setAttribute("aria-valuetext", `${cm} сантиметров`);
    period.value = seconds.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    pendulum.style.animationDuration = `${seconds}s`;
    root.querySelector("#home-string")!.setAttribute("d", `M130 36V${bobY}`);
    root.querySelector("#home-bob")!.setAttribute("transform", `translate(130 ${bobY})`);
    root.querySelector("#home-arc")!.setAttribute("d", `M${130 - (bobY - 36) * .34} ${bobY - 11}Q130 ${bobY + 13} ${130 + (bobY - 36) * .34} ${bobY - 11}`);
    const points = Array.from({ length: 236 }, (_, x) => `${x === 0 ? "M" : "L"}${x},${(100 - 42 * Math.cos((x / 235) * 6 / seconds * 2 * Math.PI)).toFixed(2)}`);
    root.querySelector("#home-wave")!.setAttribute("d", points.join(" "));
  }
  length.addEventListener("input", updateModel);
  updateModel();
}
