const sec = document.querySelectorAll(".sec")
const nav_default = document.querySelector(".nav_default")
const body = document.querySelector('.body')

function change(obj) {
    let id = obj.getAttribute('id');
    if (id) {
        sec.forEach(function (sub_section) {
            sub_section.classList.add("hidden")
        })
        let section = document.querySelector('.' + id)
        section.classList.remove("hidden")
        section.classList.add("fadeout")
        nav_default.classList.add("fadeout")
        setTimeout(function () {
            section.classList.remove("fadeout")
            nav_default.classList.remove("fadeout")
            section.style.opacity = "1"
            nav_default.style.opacity = "1"
        }, 2000)


    }
}

function change2(id){
    const btn = document.getElementById(id);
    btn.click()
}

function tab(obj){
    let nav_item = document.querySelectorAll('.nav-item')
    let nav_link = document.querySelectorAll('.nav-link')
    nav_item.forEach(function(item){
        item.classList.remove('active')
    })
    obj.classList.add('active')
}