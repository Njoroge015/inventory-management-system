import flatpickr from "flatpickr";
import TomSelect from "tom-select";
import "./bootstrap";
// PowerGrid vendor import: required when Composer packages are available during build
// If your CI doesn't run `composer install`, comment this line to avoid build errors.
import "./../../vendor/power-components/livewire-powergrid/dist/powergrid";

// @ts-ignore
window.TomSelect = TomSelect;
window.flatpickr = flatpickr;

// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();
