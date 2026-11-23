// ===== ULTRA TOP UP BD - BANNER FILE =====
// ব্যানার পাল্টাইতে হইলে খালি নিচের লিংক গুলা পাল্টাও

const BANNERS = {
  main: "https://i.ibb.co/fzjSw1r7/main.jpg",
  freefire: "https://i.ibb.co/nMZ7XyrZ/freefire.jpg",
  logo: "https://i.ibb.co/DDmdVS2L/logo.jpg",
  mlbb: "https://i.ibb.co/chgmxZX6/mlbb.jpg",
  telegram: "https://i.ibb.co/MkXJHqq6/telegram.jpg",
  payment: "https://i.ibb.co/gM3S599M/payment.jpg"
};

function loadBanners(){
  const set=(id,url)=>{const el=document.getElementById(id); if(el) el.src=url;};
  set("bannerMain",BANNERS.main);
  set("bannerFreefire",BANNERS.freefire);
  set("appLogo",BANNERS.logo);
  set("bannerMlbb",BANNERS.mlbb);
  set("bannerTelegram",BANNERS.telegram);
  set("bannerTelegramPopup",BANNERS.telegram);
  set("bannerPayment",BANNERS.payment);
}
document.addEventListener("DOMContentLoaded",loadBanners);
