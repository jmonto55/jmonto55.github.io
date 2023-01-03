const burgerMenu = document.querySelector('.burger_icon');
const closeIcon = document.querySelector('.close_icon');
const navList = document.querySelector('.nav_var_list_m');
const navProgram = document.querySelector('.nav_list_link_p');
const navSpeakers = document.querySelector('.nav_list_link_s');
const navPartners = document.querySelector('.nav_list_link_pa');
const mobileLogo = document.querySelector('.mobile_icon');
const speakersData = [
  {
    name: 'Carlos smidth',
    title: 'Professor of Biotechnology at ULC Berkeley',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_one.jpg',
  },

  {
    name: 'Benjamin Bottom',
    title: 'Investor and chairman of BLP ventures',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_two.jpg',
  },

  {
    name: 'David Kurvalrtz',
    title: 'Bioethicist, autor of the book: editing human germline, Harvard',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_three.jpg',
  },

  {
    name: 'Alexa Van Dourzem',
    title: 'Molecular Genetist, CEO of customRNA Labs, San Mateo',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_four.jpg',
  },

  {
    name: 'Juliana Franco',
    title: 'Director of the Metabolic and Cancer Research Center',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_five.jpg',
  },

  {
    name: 'Irina Jakovkish',
    title: 'Transhumanism art creator, director of the Modern Art Museum',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_six.jpg',
  },

];

// Mobile Menu Open/Close
function toggleActive() {
  burgerMenu.classList.toggle('inactive');
  closeIcon.classList.toggle('inactive');
  navList.classList.toggle('inactive');
}

burgerMenu.addEventListener('click', toggleActive);

closeIcon.addEventListener('click', () => {
  toggleActive();
  window.location.assign('#');
});

navProgram.addEventListener('click', toggleActive);

navSpeakers.addEventListener('click', toggleActive);

navPartners.addEventListener('click', toggleActive);

mobileLogo.addEventListener('click', () => {
  window.location.assign('./index.html#');
});

// Speakers Section Dynamic Creation
const speakersSection = document.querySelector('.speakers_section');

const speakersSectionTitle = document.createElement('h2');
speakersSectionTitle.innerText = 'Featured Speakers';
speakersSectionTitle.className = 'speakers_sections_title';
speakersSection.append(speakersSectionTitle);

const speakersLine = document.createElement('hr');
speakersLine.classList.add('speakers_line');
speakersSection.append(speakersLine);

const speakersContainer = document.createElement('div');
speakersContainer.classList.add('speakers_container');
speakersSection.append(speakersContainer);

for (let i = 0; i < speakersData.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  const speakerImgContainer = document.createElement('div');
  speakerImgContainer.classList.add('speaker_img_container');
  speaker.append(speakerImgContainer);

  const speakerBG = document.createElement('img');
  speakerBG.classList.add('speaker_background');
  speakerBG.src = './assets/images/speaker_backg.gif';
  speakerImgContainer.append(speakerBG);

  const speakerImg = document.createElement('img');
  speakerImg.classList.add('speaker_img');
  speakerImg.src = speakersData[i].photo;
  speakerImgContainer.append(speakerImg);

  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speaker_info');
  speaker.append(speakerInfo);

  const speakerName = document.createElement('h2');
  speakerName.classList.add('speaker_name');
  speakerName.innerText = speakersData[i].name;
  speakerInfo.append(speakerName);

  const speakerTitle = document.createElement('h3');
  speakerTitle.classList.add('speaker_title');
  speakerTitle.innerText = speakersData[i].title;
  speakerInfo.append(speakerTitle);

  const speakerLine = document.createElement('hr');
  speakerLine.classList.add('speaker_line');
  speakerInfo.append(speakerLine);

  const speakerText = document.createElement('p');
  speakerText.classList.add('speaker_text');
  speakerText.innerText = speakersData[i].description;
  speakerInfo.append(speakerText);

  speakersContainer.append(speaker);
}