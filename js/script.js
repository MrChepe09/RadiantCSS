const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
// const iframe = document.querySelector('iframe');

const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar')

// iframe.width = '200px';

sidebarBtn.addEventListener('click', function() {
    // console.log(sidebar);
    // console.log(sidebarBtn);
    sidebar.classList.toggle('sidebar-hide')
    sidebar.classList.toggle('sidebar-show')
})

modalBtn.addEventListener('click', function() {
    modal.classList.add('bg-active');
})

modalClose.addEventListener('click', function() {
    modal.classList.remove('bg-active');
})