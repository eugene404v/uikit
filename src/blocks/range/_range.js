import noUiSlider from 'nouislider';

export default function rangeInit(idSlider, idInput1, idInput2) {
  const slider = document.getElementById(idSlider);
  const inputNumber1 = document.getElementById(idInput1);
  const inputNumber2 = document.getElementById(idInput2);

  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 100,
    range: {
      'min': 0,
      'max': 15000
    }
  });

  slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    if (handle) {
      inputNumber2.value = Math.round(value);
    } else {
      inputNumber1.value = Math.round(value);
    }
  });

  inputNumber1.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
  });

  inputNumber2.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
  });
}