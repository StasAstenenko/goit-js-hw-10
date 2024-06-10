// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
    e.preventDefault();

    const delay = e.target.delay.value;
    const status = e.target.state.value

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay)
            }
        }, delay);
    });

promise.then((delay) => iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
    })).catch((delay) => iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
        }));
    });
