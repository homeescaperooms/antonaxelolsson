window.onload = ()=> {
    const grid = document.querySelector('#grid');
    const wrapperPrivacyPolicy = document.querySelector('#wrapper-privacy-policy');
    const checkboxPrivacyPolicy = document.querySelector('#checkbox-privacy-policy');
    
    checkboxPrivacyPolicy.addEventListener('click', () => {
        grid.classList.add('fade-out');
        wrapperPrivacyPolicy.classList.add('fade-out');
        window.sntchChat.Init(52517);
    });
}
