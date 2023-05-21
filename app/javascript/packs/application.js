// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'jquery'
import 'bootstrap';
import '../stylesheets/application';
import 'flatpickr/dist/flatpickr.css';
import flatpickr from 'flatpickr';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', () => {
    flatpickr("[data-behavior='flatpickr']", { })    
})

document.addEventListener('turbolinks:load', () => {
    const config ={
        dateFormat: "Y/m/d",
    };
    flatpickr('#flatpickr', {
        ...config,
        closeOnSelect: false,
        onReady: function(selectedDates, dateStr, instance) {
            const $clear = $('<div class="flatpickr-button"><button class="btn btn-outline-warning">クリア</button></div>')
                .on('click', () => {
                    instance.clear();
                })
                .appendTo($(instance.calendarContainer));

            const $save = $('<div class="flatpickr-button"><button class="btn btn-outline-info">OK</button></div>')
                .on('click', () => {
                    instance.close();                    
                })
                .appendTo($(instance.calendarContainer));
        }
    })
})






  