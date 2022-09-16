var sorteio = Math.floor(Math.random() * 6 + 1 );

switch (sorteio) {
    case 1:
        document.getElementById("face").src = "./assets/1.jpeg";
        break;

    case 2:
    document.getElementById("face").src = "./assets/2.jpeg";
    break;

    case 3:
    document.getElementById("face").src = "./assets/3.jpeg";
    break;

    case 4:
    document.getElementById("face").src = "./assets/4.jpeg";
    break;

    case 5:
    document.getElementById("face").src = "./assets/5.jpeg";
    break;

    case 6:
    document.getElementById("face").src = "./assets/6.jpeg";
    break;
    default:
        //caso contrario
        break;
}
