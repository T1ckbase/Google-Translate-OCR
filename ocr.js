// document.querySelector('.Jmlpdc').alt

let image_translate_selector = '.caTGn';
let image_selector = '.Jmlpdc';

function addTextarea(selecor) {
    let div = document.createElement('div');
    let html = '<div class="🌊">';
    html += '<label for="🎵" class="🎈">Detected text</label>';
    html += '<textarea class="📝" id="🎵" rows="1"></textarea>';
    html += '</div>';
    html += '<div class="🌊">';
    html += '<label for="🎃" class="🎈">Translated text</label>';
    html += '<textarea class="📝" id="🎃" rows="1"></textarea>';
    html += '</div>';
    
    div.classList.add('🥱');
    div.innerHTML = html;
    document.querySelector(selecor).append(div);
}

addTextarea(image_translate_selector);

const config = { attributes: false, childList: true, subtree: true };
const observer = new MutationObserver(function (mutationList, observer) {
    let detected_text = document.querySelector(image_selector)?.alt;
    let translated_text = document.querySelectorAll(image_selector)[document.querySelectorAll(image_selector)?.length - 1]?.alt;

    document.querySelector('#🎵').value = detected_text ? detected_text : '';
    document.querySelector('#🎃').value = translated_text ? translated_text : '';

    document.querySelector('#🎵').dispatchEvent(new Event('input'));
    document.querySelector('#🎃').dispatchEvent(new Event('input'));
});
observer.observe(document.querySelector(image_translate_selector), config);

document.querySelectorAll('.📝').forEach((element) => {
    element.addEventListener('input', function () {
        this.style.height = (this.scrollHeight > 0 && this.value.length > 0) ? ('calc(' + this.scrollHeight + 'px - 0.75rem)') : ('auto');
    });
});


/* navigator.clipboard.writeText('text').then(function () {
    console.log('Async: Copying to clipboard was successful!');
}, function (err) {
    console.error('Async: Could not copy text: ', err);
}); */
