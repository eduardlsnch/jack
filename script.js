let step = 0;

function nextContent() {
  const content = document.getElementById("content");

  const messages = [
    "Ти, мов світанок, ніжна й ясна,<br></br>Твоя усмішка — весна прекрасна.",
    "Очі, як зорі, вночі виграють,<br>Серце в полоні — вони чарують.",
    "Твоя краса, мов квітка в росі,<br>Легка й чарівна, як мрії у сні.",
    "З тобою весь світ стає кольоровим,<br>Ти — моя муза, мій день казковий.",
    "Нехай цей вірш тобі нагадає:<br>Ти — наймиліша, хай світ це знає! ❤️",
    "Сподобалось?"
  ];

  step++;

  if (step < messages.length - 1) {
    content.innerHTML = messages[step];
  } else if (step === messages.length - 1) {
    // Показываем вопрос и сразу заменяем кнопку
    content.innerHTML = messages[step];

    const buttonContainer = document.querySelector(".next-button-container");
    buttonContainer.innerHTML = ""; // Очищаем предыдущие кнопки

    // Добавляем кнопку "Так"
    const yesButton = document.createElement("button");
    yesButton.innerHTML = "Так";
    yesButton.className = "yes-button";
    yesButton.onclick = askAnotherQuestion;
    buttonContainer.appendChild(yesButton);

    // Добавляем кнопку "Ні"
    const noButton = document.createElement("button");
    noButton.innerHTML = "Ні";
    noButton.className = "no-button";
    noButton.onclick = showDisappointmentMessage;
    buttonContainer.appendChild(noButton);
  }
}

function askAnotherQuestion() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Обновляем контент с новым вопросом
  content.innerHTML = "Дякую, мені дуже приємно робити так, щоб ти посміхалась";
  buttonContainer.innerHTML = ""; // Убираем кнопки

  startCountdown(); // Запуск таймера
}

function showDisappointmentMessage() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Отображаем сообщение о разочаровании
  content.innerHTML = "Шкода, що не сподобалось. Буду працювати, щоб стати краще.";
  buttonContainer.innerHTML = ""; // Убираем кнопки

  startCountdown(); // Запуск таймера
}

function startCountdown() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Создаем элемент для таймера
  const timerElement = document.createElement("div");
  timerElement.className = "timer";
  timerElement.style.fontSize = "12px"; // Стили таймера
  timerElement.style.marginTop = "10px";
  timerElement.style.color = "#ffffff";
  buttonContainer.appendChild(timerElement);

  let timeLeft = 15; // Время до смены текста (в секундах)

  // Функция для обновления таймера каждую секунду
  const countdown = setInterval(() => {
    if (timeLeft > 0) {
      timerElement.textContent = `Через: ${timeLeft--} секунд, повідомлення буде закрито, та відкрито new banner`; // Обновляем текст
    } else {
      clearInterval(countdown); // Останавливаем таймер
      content.innerHTML = "Дякую за увагу, в майбутньому хочу реалізувати проєкт, в якому будуть додані всі проєкти клікабельно створені для тебе. Свого роду history for im and you.";
      buttonContainer.innerHTML = ""; // Убираем таймер
      buttonContainer.style.display = "none"; // Скрываем контейнер
    }
  }, 1000); // Интервал в 1 секунду
}
// Вибір елементів
const bannerButton = document.querySelector('.banner-button');
const banner = document.querySelector('.banner');
const closeBannerButton = document.querySelector('.close-banner');

// Показати банер
bannerButton.addEventListener('click', () => {
  banner.classList.remove('hidden');
});

// Закрити банер
closeBannerButton.addEventListener('click', () => {
  banner.classList.add('hidden');
});
