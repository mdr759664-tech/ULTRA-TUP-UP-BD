// ======================================
// ULTRA TOP UP BD - BANNERS.JS - FINAL
// সব ব্যানার + লোগো এখান থেকে চলবো
// ======================================

const BANNERS = {
  // ✅ APP LOGO - এইটাই থাকবো, সবুজ শিল্ড
  logo: "https://i.ibb.co/DDmdVS2L/IMG-20261123-WA0003.jpg",

  // ✅ MAIN BANNER - 30 Second Delivery
  main: "https://i.ibb.co/fzjSw1r7/IMG-20261123-WA0001.jpg",

  // ✅ FREE FIRE BANNER
  freefire: "https://i.ibb.co/nMZ7XyrZ/IMG-20261123-WA0002.jpg",

  // ✅ MLBB BANNER
  mlbb: "https://i.ibb.co/chgmxZX6/IMG-20261123-WA0004.jpg",

  // ✅ TELEGRAM PP BANNER - গিভওয়ে ও সকল অফার
  telegram: "https://i.ibb.co/MkXJHqq6/IMG-20261123-WA0001.jpg",

  // ✅ PAYMENT BANNER - bKash / Nagad
  payment: "https://i.ibb.co/gM3S599M/IMG-20261123-WA0000.jpg"
};

function loadBanners(){
  const set = (id, url) => {
    const el = document.getElementById(id);
    if(el && url) el.src = url;
  };

  // Logo
  set("appLogo", BANNERS.logo);

  // Slider Banners - সব 16:9 সাইজে দেখা যাইবো
  set("bannerMain", BANNERS.main);
  set("bannerFreefire", BANNERS.freefire);
  set("bannerMlbb", BANNERS.mlbb);
  set("bannerTelegram", BANNERS.telegram);
  set("bannerPayment", BANNERS.payment);

  // Telegram Popup Banner - GG Bazar Style
  set("bannerTelegramPopup", BANNERS.telegram);
}

document.addEventListener("DOMContentLoaded", loadBanners);
