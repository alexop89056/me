const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
    '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    })
}


$(document).ready(function() {
    let skillsContainer = $('.skills');
    for (let i = 0; i < SKILLS_ARRAY.length; i++) {
        skillsContainer.append(`<div class="skills__skill">${SKILLS_ARRAY[i]}</div>`);
    }

    $.each(PROJECTS, function(index, project) {
        $('.projects__content').append( `
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img
                            src="/me/assets/jpeg/project-mockup-example.jpeg"
                            alt="Software Screenshot"
                            class="projects__row-img"
                            loading="lazy"
                    />
                    <img class="projects__row-own-img" src="/me${project.image}" alt="Project Image"/>

                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">${project.title}</h3>
                    <p class="projects__row-content-desc">
                        ${project.shortDescription}
                    </p>
                    <div id="skillsContainer${project.id}" class="skills"></div>
                     ${project.githubLink
                        ? `<a href="${project.githubLink}" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Code Link</a>`
                        : (project.liveLink
                                ? `<a href="${project.liveLink}" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Live Link</a>`
                                : `<span class="no-link-text">No Link Available</span>`
                        )
                    }
                     
                </div>
            </div>
        ` )

        const skillsContainer = $(`#skillsContainer${project.id}`);
        for (let i = 0; i < project.technologies.length; i++) {
            skillsContainer.append(`<div class="skills__skill">${project.technologies[i]}</div>`);
        }
    });

    $('#currentYear').html(new Date().getFullYear())
});