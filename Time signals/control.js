function toggleNav() {
  var nav = document.getElementById("sidenav");
  nav.classList.toggle("active");
}

function toggleTheme() {
  var theme = document.getElementById("theme");
  theme.classList.toggle("active");
}

function togglePages() {
  var pages = document.getElementById("pages");
  pages.classList.toggle("active");
}

function toggleTrading() {
  var trading = document.getElementById("trading");
  trading.classList.toggle("active");
}

function toggleMining() {
  var mining = document.getElementById("mining");
  mining.classList.toggle("active");
}

function toggleDark() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

function toggleFirstCopyFaq() {
  var copyfirst = document.getElementById("copyfirst");
  copyfirst.classList.toggle("active");
}

function toggleSecondCopyFaq() {
  var copysecond = document.getElementById("copysecond");
  copysecond.classList.toggle("active");
}

function toggleThirdCopyFaq() {
  var copythird = document.getElementById("copythird");
  copythird.classList.toggle("active");
}

function toggleFourthCopyFaq() {
  var copyfourth = document.getElementById("copyfourth");
  copyfourth.classList.toggle("active");
}

function toggleFifthCopyFaq() {
  var copyfifth = document.getElementById("copyfifth");
  copyfifth.classList.toggle("active");
}

function toggleSixthCopyFaq() {
  var copysixth = document.getElementById("copysixth");
  copysixth.classList.toggle("active");
}

function toggleSeventhCopyFaq() {
  var copyseventh = document.getElementById("copyseventh");
  copyseventh.classList.toggle("active");
}

function toggleEighthCopyFaq() {
  var copyeighth = document.getElementById("copyeighth");
  copyeighth.classList.toggle("active");
}

function toggleNinthCopyFaq() {
  var copyninth = document.getElementById("copyninth");
  copyninth.classList.toggle("active");
}

function toggleTenthCopyFaq() {
  var copytenth = document.getElementById("copytenth");
  copytenth.classList.toggle("active");
}

function openSection(evt, section) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(section).style.display = "block";
  evt.currentTarget.className += "active";
}

function toggleMyaccountOne() {
  var myaccountone = document.getElementById("myaccountone");
  myaccountone.classList.toggle("active");
}

function toggleMyaccountTwo() {
  var myaccounttwo = document.getElementById("myaccounttwo");
  myaccounttwo.classList.toggle("active");
}

function toggleMyaccountThird() {
  var myaccountthird = document.getElementById("myaccountthird");
  myaccountthird.classList.toggle("active");
}

function toggleMyaccountFourth() {
  var myaccountfourth = document.getElementById("myaccountfourth");
  myaccountfourth.classList.toggle("active");
}

function toggleMyaccountFifth() {
  var myaccountfifth = document.getElementById("myaccountfifth");
  myaccountfifth.classList.toggle("active");
}

function toggleMyaccountSixth() {
  var myaccountsixth = document.getElementById("myaccountsixth");
  myaccountsixth.classList.toggle("active");
}

function toggleMiningoutputOne() {
  var miningoutputone = document.getElementById("miningoutputone");
  miningoutputone.classList.toggle("active");
}

function toggleMiningoutputTwo() {
  var miningoutputtwo = document.getElementById("miningoutputtwo");
  miningoutputtwo.classList.toggle("active");
}

function toggleAllocationOne() {
  var allocationone = document.getElementById("allocationone");
  allocationone.classList.toggle("active");
}

function toggleAllocationTwo() {
  var allocationtwo = document.getElementById("allocationtwo");
  allocationtwo.classList.toggle("active");
}

function toggleContractOne() {
  var contractone = document.getElementById("contractone");
  contractone.classList.toggle("active");
}

function toggleContractTwo() {
  var contracttwo = document.getElementById("contracttwo");
  contracttwo.classList.toggle("active");
}

function toggleContractThree() {
  var contractthree = document.getElementById("contractthree");
  contractthree.classList.toggle("active");
}

function toggleContractFour() {
  var contractfour = document.getElementById("contractfour");
  contractfour.classList.toggle("active");
}

function toggleContractFive() {
  var contractfive = document.getElementById("contractfive");
  contractfive.classList.toggle("active");
}

function toggleContractSix() {
  var contractsix = document.getElementById("contractsix");
  contractsix.classList.toggle("active");
}

function toggleContractSeven() {
  var contractseven = document.getElementById("contractseven");
  contractseven.classList.toggle("active");
}

function toggleAffiliateOne() {
  var affiliateone = document.getElementById("affiliateone");
  affiliateone.classList.toggle("active")
}

function toggleAffiliateTwo() {
  var affiliatetwo = document.getElementById("affiliatetwo");
  affiliatetwo.classList.toggle("active")
}

function toggleAffiliateThree() {
  var affiliatethree = document.getElementById("affiliatethree");
  affiliatethree.classList.toggle("active");
}

function toggleAffiliateFour() {
  var affiliatefour = document.getElementById("affiliatefour");
  affiliatefour.classList.toggle("active")
}

function toggleGeneralOne() {
  var generalone = document.getElementById("generalone");
  generalone.classList.toggle("active")
}