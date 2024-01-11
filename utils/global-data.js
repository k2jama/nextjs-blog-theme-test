export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Perspexa AI';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Perspexa AI - Automation & Integration';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  // Additional content
  const coreIdentity = {
    name: 'Perspexa AI',
    tagline: 'Revolutionizing Business through Intelligent Automation',
    logo: 'path/to/logo.svg', // Replace with the actual path to your logo
  };

  const mission =
    'At Perspexa AI, our vision transcends mere automation; we envision a paradigm shift where businesses seamlessly integrate AI into their DNA, redefining the way they operate and thrive in the digital age.';

  const targetAudienceDescription =
    'Our focus extends to a diverse array of service-based businesses, recognizing the unique challenges and opportunities within each industry. Perspexa AI caters to the following sectors:';

  const targetAudience = [
    'Medical Practices (Chiropractors, Dentists, Dermatologists, etc.)',
    'Legal Firms',
    'Construction Industry (HVAC, Landscapers, Painters, etc.)',
    'Automotive Sector (Car Dealerships, Car Detailers)',
    'Real Estate and Travel (Realtors, Real Estate Agencies, Travel Agencies)',
    'Hospitality (Restaurants)',
  ];

  const serviceOfferings = [
    {
      title: 'Workflow Automation',
      description: 'Streamlining and optimizing business processes for maximum efficiency.',
    },
    {
      title: 'Lead Generation',
      description: 'Utilizing advanced AI tools to identify and engage potential clients strategically.',
    },
    {
      title: 'Customer Support',
      description: 'Elevating customer service through AI-driven solutions that ensure personalized interactions.',
    },
    // Add more service offerings as needed
  ];

  const automationsProvided = [
    'Payment & Contracts: Simplifying and expediting financial transactions.',
    'Client Onboarding: Ensuring a smooth and efficient onboarding experience for new clients.',
    'Sales Pipeline: Streamlining and optimizing the sales journey for enhanced conversions.',
    // Add more automations as needed
  ];

  const approachToClients = [
    "Chief Automation Officer Role: We don't just offer solutions; we integrate ourselves as the 'Chief Automation Officer', aligning with clients' teams.",
    'Tailored Strategies: No copy-paste approaches here; our strategies are meticulously tailored around the unique characteristics of each industry, adapting to specific needs and goals.',
    'Innovation at the Core: Our core identity revolves around innovation, where creativity meets expertise to untangle any operational knot.',
    'Ongoing Engagement: Proactive communication, regular follow-ups, and continuous support define our commitment to ongoing client engagement.',
  ];

  const coreValues = [
    'Innovation: A commitment to fostering a culture of continuous innovation, staying ahead of industry trends.',
    'Client-Centricity: Prioritizing client needs through every step of service delivery, ensuring client satisfaction remains at the forefront.',
    'Efficiency and Streamlining: Dedicated to eliminating bottlenecks and enhancing overall operational efficiency.',
    'Adaptability: An unwavering commitment to adaptability, anticipating challenges and providing scalable solutions.',
    'Transparency: Ensuring transparent communication in pricing, processes, and service expectations.',
  ];

  const brandPersonaDescription =
    'Perspexa AI\'s brand persona is a dynamic amalgamation of expertise, creativity, and passion for driving positive change. We are perceived as a dynamic, forward-thinking, and reliable partner in business transformation, where the intersection of innovation and efficiency creates an unparalleled client experience.';

  const pricingModel = [
    {
      title: 'Basic Tier - Starting at $1,000 per month',
      description: 'Core automation features, basic chatbot implementation, AI consultation, limited customization, performance analytics, customer onboarding.',
      details: [
        'Standardized workflow automation for up to two (2) key business processes.',
        'Basic lead generation tools with template-based campaigns.',
        // Add more details as needed
      ],
    },
    // Add more pricing tiers as needed
  ];

  const additionalConsiderations = [
    'Scalability Options: All tiers include scalable options to accommodate business growth seamlessly.',
    'Security Features: Standard security features included in all tiers to ensure compliance with data privacy regulations.',
    'Regular Updates and Maintenance: Monthly updates and maintenance included in all tiers to keep the solutions up-to-date.',
    'Educational Resources: Access to an extensive library of educational materials, webinars, and workshops for ongoing learning and skill development.',
  ];

  return {
    name,
    blogTitle,
    footerText,
    coreIdentity,
    mission,
    targetAudienceDescription,
    targetAudience,
    serviceOfferings,
    automationsProvided,
    approachToClients,
    coreValues,
    brandPersonaDescription,
    pricingModel,
    additionalConsiderations,
  };
};
