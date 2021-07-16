document.addEventListener("DOMContentLoaded", function (event) {

    const result = document.querySelector('.result span');

    let sex, height, weight, age, activityRatio;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !activityRatio) {
            result.textContent = 'Введите все данные!';
            return;
        }

        if (sex === 'woman') {
            result.textContent = `${((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activityRatio).toFixed(0)} ккал`;
        } else {
            result.textContent = `${((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activityRatio).toFixed(0)} ккал`;
        }
    }

    document.querySelectorAll('.top div').forEach(function (item) {//обрабатываем кнопки пола мужского или женского
        item.addEventListener('click', function () {
            document.querySelectorAll('.top div').forEach(function (i) {
                i.classList.remove('active');
            });

            sex = item.getAttribute('id');
            item.classList.add('active');
            calcTotal();
        });
    });

    document.querySelectorAll('.bot div').forEach(function (item) {//обрабатываем кнопки активности(те которые снизу)
        item.addEventListener('click', function () {
            document.querySelectorAll('.bot div').forEach(function (i) {
                i.classList.remove('active');
            });

            activityRatio = item.getAttribute('data-ratio');
            calcTotal();
            item.classList.add('active');
        });
    });

    document.querySelectorAll('.mid div').forEach(function (item) {//обрабатываем поля ввода роста веса и возраста
        item.querySelector('input').addEventListener('change', function () {
            if (item.getAttribute('id') === 'height') {
                height = item.querySelector('input').value;
            } else if (item.getAttribute('id') === 'weight') {
                weight = item.querySelector('input').value;
            } else {
                age = item.querySelector('input').value;
            }
            calcTotal();
        });
    });
});