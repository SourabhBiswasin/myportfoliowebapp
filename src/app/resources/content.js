import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sourabh",
  lastName: "Biswas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Devops Engineer",
  avatar: "/images/profile.jpg",
  location: "Delhi, India",
  timezone: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SourabhBiswasin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sourabhbiswasdevops/",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:sourabhbiswas@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Devops Engineer</>,
  subline: (
    <>
      I'm Sourabh Biswas, a Devops engineer at <InlineCode>DOCKHOUSE LLP</InlineCode>, Helping Businesses Deploy Software <InlineCode>Faster Time to Market</InlineCode>, Enhanced <InlineCode>Scalability</InlineCode>, 
      <InlineCode>Cost Efficiency</InlineCode>, and <InlineCode>Robust Security</InlineCode> Through Continuous <InlineCode>Monitoring</InlineCode> and Feedback.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        3+ Years of IT Experience, Certified DevOps Engineer Helping Businesses
        Deploy Software Faster Time to Market, Enhanced Scalability, Cost
        Efficiency, and Robust Security Through Continuous Monitoring and
        Feedback.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DOCKHOUSE LLP",
        timeframe: "2021 - Present",
        role: "Devops Engineer",
        achievements: [
          <>
            3-tier Architecture deployment on Amazon EKS 2 cluster kubernetes
          </>,
          <>3-tier Architecture deployment on Azure AKS 2 cluster kubernetes</>,
          <>
            3-tier Architecture deployment on Azure kops 2 cluster kubernetes
          </>,
          <>80% Cloud cost optimization on AWS.</>,
          <>End To End CI-CD using Jenkins, Gitops, Azure Devops, CircleCI.</>,
          <>AKS Upgrade with Zero Downtime using terraform</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "J.C. Bose University of Science and Technology, YMCA",
        description: <>B-TECH</>,
      },
      {
        name: "Electronics and Communication",
        description: (
          <>
            Studied electronics hardware, Communication hardware and software.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Devops",
        description: (
          <>
            Docker, Kubernetes, Linux, Cloud Computing: AWS, Azure, Terraform,
            Ansible. CI/CD: Jenkins, GitLab CI/CD, Azure DevOps, Gitops,
            Bash/Shell, Python,Prometheus, Grafana, ELK Stack, New Relic,
            Networking: TCP/IP, DNS, Load Balancing, Firewalls, Cloud
            Networking, Security: IAM, Hashicrop Valt, AWS secrets manager.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
