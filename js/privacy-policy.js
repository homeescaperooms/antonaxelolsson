window.onload = ()=> {
    const wrapperPrivacyPolicy = document.querySelector('#wrapper-privacy-policy');
    const checkboxPrivacyPolicy = document.querySelector('#checkbox-privacy-policy');
    
    checkboxPrivacyPolicy.addEventListener('click', () => {
        wrapperPrivacyPolicy.classList.add('fade-out');
        window.sntchChat.Init(52517);
    });
}
