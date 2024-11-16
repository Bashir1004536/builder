// script.js
document.getElementById('create-resume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('objective').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const grade = document.getElementById('grade').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const jobDescription = document.getElementById('job-description').value;
    const skills = document.getElementById('skills').value;
  
    const resume = `
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Career Objective</h3>
      <p>${objective}</p>
      <h3>Education</h3>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Year of Completion:</strong> ${year}</p>
      <p><strong>Grade:</strong> ${grade}</p>
      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      <p><strong>Description:</strong> ${jobDescription}</p>
      <h3>Skills</h3>
      <p>${skills.split(',').join(', ')}</p>
    `;
  
    document.getElementById('resume').innerHTML = resume;
  });
  