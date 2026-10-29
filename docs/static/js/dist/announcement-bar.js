"use strict";(()=>{var t="_announcement_bar_dismissed";var e=document.querySelector(".announcement-bar"),n=e&&e.querySelector(".announcement-bar__close");e&&n&&n.addEventListener("click",()=>{document.cookie=t+"="+e.dataset.announcementId+";max-age=34560000;path=/;SameSite=Lax",e.remove()});})();
//# sourceMappingURL=announcement-bar.js.map
