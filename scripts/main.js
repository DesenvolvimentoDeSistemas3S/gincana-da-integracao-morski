document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('.provas > div');

    divs.forEach(div => {
        div.addEventListener('click', () => {
            // Recolhe todas as provas antes de expandir a clicada
            divs.forEach(otherDiv => {
                if (otherDiv !== div && otherDiv.classList.contains('clicked')) {
                    otherDiv.classList.remove('clicked');
                }
            });

            // Alterna a classe clicked na div clicada
            div.classList.toggle('clicked');
        });

        div.addEventListener('mouseover', () => {
            // Recolhe todas as provas antes de expandir a que está sendo hover
            divs.forEach(otherDiv => {
                if (otherDiv !== div && otherDiv.classList.contains('clicked')) {
                    otherDiv.classList.remove('clicked');
                }
            });

            // Expande a prova apenas quando estiver em hover, se não estiver clicada
            if (!div.classList.contains('clicked')) {
                div.classList.add('clicked');
            }
        });
    });
});