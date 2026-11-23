// ULTRA TOP UP BD - FINAL
const BANNERS = {
  logo: "https://i.ibb.co/DDmdVS2L/IMG-20261123-WA0003.jpg",
  main: "https://i.ibb.co/fzjSw1r7/IMG-20261123-WA0001.jpg",
  freefire: "https://i.ibb.co/nMZ7XyrZ/IMG-20261123-WA0002.jpg",
  mlbb: "https://i.ibb.co/chgmxZX6/IMG-20261123-WA0004.jpg",
  // ✅ TELEGRAM PP BANNER - এইটাই থাকবো
  telegram: "https://i.ibb.co/MkXJHqq6/IMG-20261123-WA0001.jpg",
  payment: "https://i.ibb.co/gM3S599M/IMG-20261123-WA0000.jpg"
};
function loadBanners(){
  const set=(id,url)=>{const el=document.getElementById(id); if(el) el.src=url;};
  set("appLogo",BANNERS.logo);
  set("bannerMain",BANNERS.main);
  set("bannerFreefire",BANNERS.freefire);
  set("bannerMlbb",BANNERS.mlbb);
  set("bannerTelegram",BANNERS.telegram);
  set("bannerTelegramPopup",BANNERS.telegram);
  set("bannerPayment",BANNERS.payment);
}
document.addEventListener("DOMContentLoaded",loadBanners);
