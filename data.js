// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Jingyi Wang",        // TODO: Add your name
        title: "Enterprise Services Specialist, Buy-side Trading",      // TODO: Add your professional title
        email: "jingyiw@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "studying things @ Berkeley | ex-BBG AIM" // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals"
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Project 3",
            description: "Javascript Portfolio Project",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-28",
            featured: true
        }
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);