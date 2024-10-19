// Change theme
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check if prefers-color-scheme is dark
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (mediaQuery.matches) {
  html.dataset.theme = 'dark';
  html.classList.add('dark');
} else {
  html.dataset.theme = 'light';
  html.classList.remove('dark');
}

// Check if theme is set to dark
themeToggle.checked = html.dataset.theme === 'dark';

// Toggle theme
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    html.dataset.theme = 'dark';
    html.classList.add('dark');
  } else {
    html.dataset.theme = 'light';
    html.classList.remove('dark');
  }
});

// Dictionary with translations
const dictionary = {
	ru: {
	  name: 'Винокуров Владимир',
	  position: '📱 Мобильный разработчик',
	  about: 'О себе:',
	  about_text_1: 'У меня шестимесячный опыт стажировки в веб-разработке, где я разработал веб-портал для ПАО Уралмашзавода. Реализовал базу данных, админ панель, ограничение прав пользователя.',
	  about_text_2:'Теперь я собираюсь освоить разработку мобильных приложений и стать профессионалом в этой области.',
	  bio: 'Биография:',
	  live: '📍 <strong>Живу в:</strong> Екатеринбург, Россия',
	  employment: '💼 <strong>Занятость:</strong> Только удаленная, полный рабочий день',
	  experience: 'Опыт работы:',
	  period_head: 'Период',
	  position_head: 'Должность',
	  location_head: 'Место',
	  first_period_job: 'Окт. 2022 - настоящее время',
	  first_company: '<strong>АО \"Вектор\"</strong>',
	  description_first_company: '<strong>Описание:</strong> Работа с Oracle SQL (для составления отчетов), офисная работа, подписание договоров. Помощь сотрудникам в CRM. Разграничение прав пользователей в системе.</p>',
	  position_first_company: "<strong>Должность:</strong> Техник компьютерного центра",
	  technologies_first_company: "<strong>Технологии:</strong> Oracle SQL, Java, Dashboards",
	  first_location_job: "Екатеринбург, Россия",
	  education: 'Образование:',
	  university_name: 'Уральский Государственный Горный Университет',
	  university_specialization_name: 'Информатика и вычислительная техника',
	  university_location: 'Екатеринбург, Россия',
	  college_name: 'Уральский Политехнический Колледж',
	  college_specialization_name: 'Программирование в компьютерных системах',
	  college_location: 'Екатеринбург, Россия',
	  skills: 'Навыки:',
	  skills_languages: 'Языки:',
	  skills_database: 'Базы данных:',
	  skills_stack: 'Стек:',
	  skills_tools: 'Инструменты:',
	},
	en: {
	  name: 'Vinokurov Vladimir',
	  position: '📱 Mobile Developer',
	  about: 'About me:',
	  about_text_1: 'I have a six-month internship experience in web development, where I developed a web portal for PJSC "Uralmashfactory". Implemented a database, admin panel, user rights restriction.',
	  about_text_2: 'Now I\'m going to master mobile app development and become a professional in this field.',
	  bio: 'Bio:',
	  live: '📍 <strong>Live in:</strong> Ekaterinburg, Russia',
	  employment: '💼 <strong>Employment:</strong> Only remote, Full-time',
	  experience: 'Experience:',
	  period_head: 'Period',
	  position_head: 'Position',
	  location_head: 'Location',
	  first_period_job: 'Oct. 2022 - Presently',
	  first_company: '<strong>JSC \"Vector\"</strong>',
	  description_first_company: '<strong>Description:</strong> Working with Oracle SQL (for reporting), office work, signing contracts. Assistance to staff in CRM. Differentiation of user rights in the system.</p>',
	  position_first_company: '<strong>Position:</strong> Computer Center Technician',
	  technologies_first_company: "<strong>Technologies:</strong> Oracle SQL, Java, Dashboards",
	  first_location_job: "Ekaterinburg, Russia",
	  education: 'Education:',
	  university_name: 'Ural State Mining University',
	  university_specialization_name: 'Informatics and Computer Engineering',
	  university_location: 'Ekaterinburg, Russia',
	  college_name: 'Ural Polytechnic College',
	  college_specialization_name: 'Programming in computer systems',
	  college_location: 'Ekaterinburg, Russia',
	  skills: 'Skills:',
	  skills_languages: 'Languages:',
	  skills_database: 'Databases:',
	  skills_stack: 'Stack:',
	  skills_tools: 'Tools:',
	}
};
  
// Function to change the content of all elements with the class 'translatable'
const changeLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = dictionary[lang][key];
        
        if (translation) {
            element.innerHTML = translation;
        }
    });
};

// Event handler for language switch
const langSwitch = document.getElementById('lang-switch');
langSwitch.checked = true;
langSwitch.addEventListener('change', () => {
    const lang = langSwitch.checked ? 'en' : 'ru';
    changeLanguage(lang);
});

// Initializing the default content of the page
changeLanguage('en');

// Animation background
(function(){
	var canvas = document.querySelectorAll('#bg canvas'),
		background = canvas[0],
		foreground1 = canvas[1],
		foreground2 = canvas[2],
		config = {
			circle: {
				amount: 18,
				layer: 3,
				color: [157, 97, 207],
				alpha: 0.3
			},
			line: {
				amount: 12,
				layer: 3,
				color: [255, 255, 255],
				alpha: 0.3
			},
			speed: 0.3,
			angle: 20
		};

	if (background.getContext){
		var bctx = background.getContext('2d'),
			fctx1 = foreground1.getContext('2d'),
			fctx2 = foreground2.getContext('2d'),
			M = window.Math, // Cached Math
			degree = config.angle/360*M.PI*2,
			circles = [],
			lines = [],
			wWidth, wHeight, timer,
			isResizing = false;

		requestAnimationFrame = window.requestAnimationFrame || 
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function(callback, element) { setTimeout(callback, 1000 / 60); };

		cancelAnimationFrame = window.cancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.msCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			clearTimeout;

		var setCanvasHeight = function(){
			wWidth = window.innerWidth;
			wHeight = window.innerHeight,

			canvas.forEach(function(item){
				item.width = wWidth;
				item.height = wHeight;
			});
		};

		var drawCircle = function(x, y, radius, color, alpha){
			var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
			gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
			gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

			fctx1.beginPath();
			fctx1.arc(x, y, radius, 0, M.PI*2, true);
			fctx1.fillStyle = gradient;
			fctx1.fill();
		};

		var drawLine = function(x, y, width, color, alpha){
			var endX = x+M.sin(degree)*width,
				endY = y-M.cos(degree)*width,
				gradient = fctx2.createLinearGradient(x, y, endX, endY);
			gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
			gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

			fctx2.beginPath();
			fctx2.moveTo(x, y);
			fctx2.lineTo(endX, endY);
			fctx2.lineWidth = 3;
			fctx2.lineCap = 'round';
			fctx2.strokeStyle = gradient;
			fctx2.stroke();
		};

		var drawBack = function(){
			bctx.clearRect(0, 0, wWidth, wHeight);

			var gradient = [];
			
			gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
			gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
			gradient[0].addColorStop(1, 'transparent');

			bctx.translate(wWidth, 0);
			bctx.scale(-1,1);
			bctx.beginPath();
			bctx.fillStyle = gradient[0];
			bctx.fillRect(0, 0, wWidth, wHeight);

			gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
			gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
			gradient[1].addColorStop(0.8, 'transparent');

			bctx.translate(wWidth, 0);
			bctx.scale(-1,1);
			bctx.beginPath();
			bctx.fillStyle = gradient[1];
			bctx.fillRect(0, 0, wWidth, wHeight);

			gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
			gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
			gradient[2].addColorStop(1, 'transparent');

			bctx.beginPath();
			bctx.fillStyle = gradient[2];
			bctx.fillRect(0, 0, wWidth, wHeight);
		};

		var animate = function(){
			var sin = M.sin(degree),
				cos = M.cos(degree);

			if (config.circle.amount > 0 && config.circle.layer > 0){
				fctx1.clearRect(0, 0, wWidth, wHeight);
				for (var i=0, len = circles.length; i<len; i++){
					var item = circles[i],
						x = item.x,
						y = item.y,
						radius = item.radius,
						speed = item.speed;

					if (x > wWidth + radius){
						x = -radius;
					} else if (x < -radius){
						x = wWidth + radius
					} else {
						x += sin*speed;
					}

					if (y > wHeight + radius){
						y = -radius;
					} else if (y < -radius){
						y = wHeight + radius;
					} else {
						y -= cos*speed;
					}

					item.x = x;
					item.y = y;
					drawCircle(x, y, radius, item.color, item.alpha);
				}
			}

			if (config.line.amount > 0 && config.line.layer > 0){
				fctx2.clearRect(0, 0, wWidth, wHeight);
				for (var j=0, len = lines.length; j<len; j++){
					var item = lines[j],
						x = item.x,
						y = item.y,
						width = item.width,
						speed = item.speed;

					if (x > wWidth + width * sin){
						x = -width * sin;
					} else if (x < -width * sin){
						x = wWidth + width * sin;
					} else {
						x += sin*speed;
					}

					if (y > wHeight + width * cos){
						y = -width * cos;
					} else if (y < -width * cos){
						y = wHeight + width * cos;
					} else {
						y -= cos*speed;
					}
					
					item.x = x;
					item.y = y;
					drawLine(x, y, width, item.color, item.alpha);
				}
			}

			timer = requestAnimationFrame(animate);
		};

		var createItem = function(){
			circles = [];
			lines = [];

			if (config.circle.amount > 0 && config.circle.layer > 0){
				for (var i=0; i<config.circle.amount/config.circle.layer; i++){
					for (var j=0; j<config.circle.layer; j++){
						circles.push({
							x: M.random() * wWidth,
							y: M.random() * wHeight,
							radius: M.random()*(20+j*5)+(20+j*5),
							color: config.circle.color,
							alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
							speed: config.speed*(1+j*0.5)
						});
					}
				}
			}

			if (config.line.amount > 0 && config.line.layer > 0){
				for (var m=0; m<config.line.amount/config.line.layer; m++){
					for (var n=0; n<config.line.layer; n++){
						lines.push({
							x: M.random() * wWidth,
							y: M.random() * wHeight,
							width: M.random()*(20+n*5)+(20+n*5),
							color: config.line.color,
							alpha: M.random()*0.2+(config.line.alpha-n*0.1),
							speed: config.speed*(1+n*0.5)
						});
					}
				}
			}

			cancelAnimationFrame(timer);
			timer = requestAnimationFrame(animate);
			drawBack();
		};

		window.addEventListener('load', function(){
			setCanvasHeight();
			createItem();
		});

		window.addEventListener('resize', function(){
			if (isResizing) return;
			isResizing = true;
			setTimeout(function(){
				isResizing = false;
				setCanvasHeight();
				createItem();
			}, 500);
		});
	}
})();