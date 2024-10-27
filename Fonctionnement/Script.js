document.addEventListener("DOMContentLoaded", function() {

    const baseUrl = document.location.origin + document.location.pathname.replace('index.html', '');
    const cmdImageUrl = baseUrl + 'Resources/Images/cmd-vert.gif';


    document.querySelectorAll('.Nav-Link').forEach(navLink => {
        navLink.addEventListener('mouseover', () => navLink.style.backgroundImage =  "url('"+cmdImageUrl+"')");
        navLink.addEventListener('mouseout', () => navLink.style.backgroundImage = '');
    });

    const scrollToElement = id => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop + 10, behavior: 'smooth' });
            if (window.innerWidth < 800) try { document.getElementById('nav-check').checked = false; } catch (e) { console.log(e); }
        }
    };

    document.getElementById("goto-comp").addEventListener('click', () => scrollToElement("comp"));
    document.getElementById("goto-proj").addEventListener('click', () => scrollToElement("proj"));
    document.getElementById("goto-parc").addEventListener('click', () => scrollToElement("parc"));
    document.getElementById("CV").addEventListener('click', () => { if (window.innerWidth < 800) try { document.getElementById('nav-check').checked = false; } catch (e) { console.log(e); }});
});