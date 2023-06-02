
Vue.component('app-header', {
    template: `<div class="app-header">
    <div class="header_block">
        <div class="header_block_logo">
            <img src="img/logo.png" alt="">
        </div>
        <div class="header_block_navbar">
            <div class="header_block_navbar_links">
                <a href="#pannels">Панели</a>
                <a href="#doors">Двери</a>
                <a href="#windows">Окна</a>
            </div>
        </div>
        <div class="header_block_title">
            <span>Glassmate — это оригинальные продукты из стекла и полимеров, которые прослужат вам очень долго</span>
        </div>
        <div class="arrow">
            <a href="#pannels"><img src="img/arrow.png" alt=""><a>
        </div>
    </div>
</div>`
})


    


Vue.component('app-pannels', {
    template: `<div class="app-main">
    <div class="main_block">
        <div class="app-title" id="pannels">
            Панели
        </div>
        <div class="main_block_images">
            <div class="main_block_images_img">
                <img src="img/image 6.png" alt="">
            </div>
            <div class="main_block_images_img">
                <img src="img/image 7.png" alt="">
            </div>
            <div class="main_block_images_img">
                <img src="img/image 8.png" alt="">
            </div>
            <div class="main_block_images_img">
                <img src="img/image 9.png" alt="">
            </div>
            <div class="main_block_images_img">
                <img src="img/image 10.png" alt="">
            </div>
            <div class="main_block_images_img">
                <img src="img/image 11.png" alt="">
            </div>
        </div>
        <div class="main_block_description">
            <span>Строительные материалы из стекла сейчас широко используются не только в качестве вставок для окон и дверей, но и для облицовки различных поверхностей</span>
        </div>
        <div class="arrow">
            <a href="#doors"><img src="img/arrow.png" alt=""><a>
        </div>
    </div>
</div>`
});
Vue.component('app-doors', {
    template: ` <div class="app-doors">
    <div class="doors_block">
        <div class="app-title" id="doors">Двери</div>
        <div class="doors_block_columns">
            <div class="doors_block_column">
                <div class="doors_block_column_text">
                   Учет ваших пожеланий к дизайну и внешнему виду дверей и  возможность выполнить замеры исходя из условий помещения и размеров дверного
                </div>
                <div class="doors_block_column_img">
                    <img src="img/door1.png" alt="">
                </div>
            </div>
            <div class="doors_block_column">
                <div class="doors_block_column_text">
                    Одни из ключевых особенностей современного интерьера — двери из стекла, выполняющие не только свои практические функции, но и являющиеся элегантным приемом дизайнерского оформления
                </div>
                <div class="doors_block_column_img">
                    <img src="img/door2.png" alt="">
                </div>
            </div>
            <div class="doors_block_column">
                <div class="doors_block_column_text_link">
                   Подробнее
                    <img src="img/Vector.png" alt="">
                </div>
                <div class="doors_block_column_img">
                    <img src="img/door3.png" alt="">
                </div>
            </div>
        </div>
        <div class="arrow">
            <a href="#windows"><img src="img/arrow.png" alt=""><a></a>
        </div>
    </div>
</div>`
});
Vue.component('app-windows', {
    template: `<div class="window">
    <div class="app-title" id="windows">Окна</div>
    <image-slider>
        
        
        <transition-group name='fade' tag='div'>
          <div class="windows_img"
           v-for="number in [currentNumber]"
           :key='number'
           >
             <img
                 :src="currentImage"
                 v-on:mouseover="stopRotation"
                 v-on:mouseout="startRotation"
                 />
        </div>
      </transition-group>
     
    </image-slider>
    <div class="arrow">
        <a href="#about"><img src="img/arrow.png" alt=""><a>
    </div>
</div>`,
data(){
    return {
        images: ['img/slide1.png', 'img/slide2.png', 'img/slide3.png'],
        currentNumber: 0,
        timer: null
    }
    },

    mounted: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 4000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },
    
    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
})

Vue.component('app-about', {

    template: `<div class="app-about">
    <div class="app-title" id="about">Свяжитесь снами</div>
    <div class="about_block">
        <div class="about_block_links">
            <img src="img/Telegram.png" alt="">
            <img src="img/VK.png" alt="">
            <img src="img/OK.png" alt="">
        </div>
        <div class="app-title">или</div>
        <div class="about_block_inputs">
            <div class="about_block_inputs_names">
                <input class="about_block_inputs_names_name" type="text" id="name" placeholder="Имя и Фамилия">
                <input class="about_block_inputs_names_email" type="text" id="e-mail" placeholder="E-mail">
            </div>
            <div class="about_block_inputs_text">
                <input class="about_block_inputs_text_letter"type="text" id="text" placeholder="Сообщение">
            </div>
        </div>
        <div class="about_block_button">
            Отправить
        </div>
        <div class="arrow">
            <img src="img/arrow.png" alt="">
        </div>
    </div>
</div>`
})
Vue.component('app-footer', {
    template: `<div class="app-footer">
    <div class="footer_block">
        <div class="footer_block_navbar">
            <div class="footer_block_navbar_contacts">
                <span>E-mail: Ellezar.7495@yandex.ru</span>
                <span>Телефон: 8 (911) 027-82-99</span>
            </div>
            <div class="footer_block_navbar_links">
                <a href="#pannels">Панели</a>
                <a href="#doors">Двери</a>
                <a href="#windows">Окна</a>
            </div>
        </div>
        <div class="footer_block_logo">
            <img src="img/logo.png" alt="">
        </div>
    </div>
</div>
    `
})

new Vue({
    el: "#app",
    
})