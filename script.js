const profile = {
  basics: {
    name: 'Muhammad Umair',
    shortName: 'MU',
    label: 'BSCS Student',
    headline: 'I study full-time and am trying to become a complete Software Engineer.',
    summary: 'Software Engineering Student based in Karachi, Pakistan.',
    location: {
      country: 'Pakistan',
      countryCode: 'PK',
      region: 'Karachi'
    },
    email: 'umairmuhammadumair798@gmail.com',
    availability: 'Currently part of GU Tech since April 2026',
    profiles: [
      {
        network: 'LinkedIn',
        username: 'Muhammad umair',
        url: 'www.linkedin.com/in/muhammad-umair-umair-ab719543b',
        icon: 'fa-brands fa-linkedin-in'
      },
      {
        network: 'GitHub',
        username: 'umairmuhammadumair798',
        url: 'https://github.com/umairmuhammadumair798-ai',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  about: {
    intro: [
      'My Matric and Intermediate background is in Computer Science, where I learned C++ for my Matric, C for my Intermediate, and I\'ve also learned Python independently.'
    ],
    strengths: ['C languages']
  },
  skills: [
    { category: 'Languages', items: ['C', 'Python', 'C++'] }
  ],
  education: [
    {
      institution: 'GU Tech',
      area: 'Computer Science',
      studyType: 'BSCS',
      startDate: '2026-01-01',
      endDate: '2030-12-01'
    },
    {
      institution: 'Jinnah Goverment college',
      area: 'Computer Science',
      studyType: 'Intermediate',
      details: ['Computer Science'],
      startDate: '2022-08-01',
      endDate: '2024-06-01'
    },
    {
      institution: 'SM Public Academy',
      area: 'Computer Science',
      studyType: 'Matric',
      startDate: '2013-01-01',
      endDate: '2023-12-01'
    }
  ],
  languages: [
    { language: 'English', fluency: 'Fluent' },
    { language: 'Urdu', fluency: 'Native' }
  ]
};

const formatDate = (dateString) => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(date);
};

const renderHeader = () => {
  document.getElementById('brand').textContent = profile.basics.shortName;
  document.getElementById('name').textContent = profile.basics.name;
  document.getElementById('headline').textContent = profile.basics.headline;
  document.getElementById('email-link').href = `mailto:${profile.basics.email}`;

  const meta = [
    profile.basics.location.region,
    profile.basics.location.country,
    profile.basics.availability
  ];

  const metaList = document.getElementById('basic-meta');
  metaList.innerHTML = meta
    .filter(Boolean)
    .map((item) => `<li>${item}</li>`)
    .join('');

  const profileSummary = document.getElementById('profile-summary');
  profileSummary.innerHTML = `
    <p><strong>Role:</strong> ${profile.basics.label}</p>
    <p><strong>Location:</strong> ${profile.basics.location.region}, ${profile.basics.location.country}</p>
    <p><strong>Summary:</strong> ${profile.basics.summary}</p>
  `;

  const socialLinks = document.getElementById('social-links');
  socialLinks.innerHTML = profile.basics.profiles
    .map(
      (profileItem) => `
        <a href="${profileItem.url.startsWith('http') ? profileItem.url : `https://${profileItem.url}`}" target="_blank" rel="noreferrer">
          ${profileItem.network}
        </a>
      `
    )
    .join('');
};

const renderAbout = () => {
  const introContainer = document.getElementById('about-intro');
  introContainer.innerHTML = profile.about.intro
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('');

  const strengthsList = document.getElementById('strengths-list');
  strengthsList.innerHTML = profile.about.strengths
    .map((item) => `<li>${item}</li>`)
    .join('');
};

const renderSkills = () => {
  const container = document.getElementById('skills-grid');
  container.innerHTML = profile.skills
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${group.category}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
};

const renderEducation = () => {
  const container = document.getElementById('education-list');
  container.innerHTML = profile.education
    .map(
      (item) => `
        <article class="timeline-item">
          <h3>${item.institution}</h3>
          <div class="meta">${item.studyType} • ${item.area}</div>
          <p>${formatDate(item.startDate)} - ${formatDate(item.endDate)}</p>
          ${item.details ? `<p>${item.details.join(' • ')}</p>` : ''}
        </article>
      `
    )
    .join('');
};

const renderLanguages = () => {
  const container = document.getElementById('languages-list');
  container.innerHTML = profile.languages
    .map(
      (item) => `
        <article class="language-item">
          <h3>${item.language}</h3>
          <span>${item.fluency}</span>
        </article>
      `
    )
    .join('');
};

renderHeader();
renderAbout();
renderSkills();
renderEducation();
renderLanguages();
