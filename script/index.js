let value = document.querySelectorAll('span');
let action = document.getElementById('submit');
let item;
value.forEach(span =>{
  span.addEventListener('click', () => {
    item = span.textContent;
    console.log(item);
  })  
})
action.addEventListener('click', ()=>{
    let select = item; 
    console.log(select);
    
    switch(select){
        case 'Github':
            window.open("https://www.github.com");
            break;
        case 'Quora':
            window.open("https://www.quora.com");
            break;
        case 'Pinterest':
            window.open("https://www.pinterest.com");
            break;
        case 'Amazon':
            window.open("https://www.amazon.com");
            break;
        case 'Flipkart':
            window.open("https://www.flipkart.com");
            break;
        case 'Myntra':
            window.open("https://www.myntra.com");
            break;
        case 'Jiomart':
            window.open("https://www.jiomart.com");
            break;
        case 'Tata Neu':
            window.open("https://www.tataneu.com");
            break;
        case 'CodeWithHarry':
            window.open("https://www.codewithharry.com");
            break;
        case 'Apna College':
            window.open("https://www.apnacollege.in");
            break;
        case 'Twitter':
            window.open("https://www.twitter.com");
            break;
        case 'Instagram':
            window.open("https://www.instagram.com");
            break;
        case 'Threads':
            window.open("https://www.threads.com");
            break;
        case 'Snapchat':
            window.open("https://www.snapchat.com");
            break;
        case 'Whatsapp':
            window.open("https://www.whatsapp.com");
            break;
        case 'Facebook':
            window.open("https://www.facebook.com");
            break;
        case 'ChatGpt / Open Ai':
            window.open("https://www.chatgpt.com");
            break;
        case 'Google Bard':
            window.open("https://www.bard.com");
            break;
        default:
            window.open("https://www.google.com");
    }
});