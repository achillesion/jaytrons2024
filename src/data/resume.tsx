import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaFreeCodeCamp } from "react-icons/fa";
export const DATA = {
  name: "Ahmad Bashir",
  initials: "AB",
  url: "https://jaytrons.com",
  location: "Lahore, Pakistan, PK",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Lead UI/UX Designer. Top Rated Plus on Upwork ",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go full-time into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Lead UI/UX Designer with 5+ years crafting human-centred digital products. Expert at turning ambiguous briefs into validated, pixel-perfect interfaces. Proven track record in building from the ground up on products like Hangar Direct & Pet Emporio and scaling design systems used by 200k+ users. Passionate about accessible, delightful experiences. Invested 700+ hours as sole designer on Hangar Direct, delivering live product — from discovery research through pixel-perfect handoff",
  avatarUrl: "https://raw.githubusercontent.com/achillesion/imageUrl/main/New%20Project%202.png",
  skills: [
    "Figma", 
    "User Research & Analysis", 
    "Wireframing & Prototyping", 
    "User-Centered Design (UCD) Principles",
    "React", 
    "Next.js", 
    "Nest.js",
    "Typescript",
    "Node.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
     "Python / Django",
     "Postgres", "MongoDB", "SQL",
     "Docker",
    "Kubernetes",
     "Java",
     "C++",
  
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/achillesion",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imahmadbashir/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Be: {
        name: "Behance",
        url: "https://www.be.net/ahmadbashir",
        icon: Icons.be,
        navbar: true,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/ahmadbashir1",
        icon: Icons.upwork,
        navbar: true,
      },
      Figma: {
        name: "Figma",
        url: "https://www.figma.com/@ahmadbashir",
        icon: Icons.figma,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "achillesion@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  
    
    
        {
      company: "Hangar Direct",
      badges: [],
      href: "https://www.hangardirect.com/",
      location: "Montana, USA",
      title: "Lead UI/UX Designer ",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpz7xb22SRN-hbWsrX26LM7AwTccrlkbwQ_aQ36EQ2Wum9aKmk4SNI2k0&s=10",
      start: "Aug 2024",
      end: "May 2025",
      description:
        "Designed the end-to-end location-based search and map experience, enabling pilots to find, filter, and book hangars by state, city, and airport code across the USCrafted the property listing flow for hangar owners — simplifying a complex multi-step process (photos, dimensions, pricing, availability) into a frictionless self-serve experienceLed UX for the booking and payment checkout flow, designing trust signals and transparent pricing screens that reduced abandonment Designed the dual-sided dashboard for both pilots (renters) and facility operators — giving each user type clear visibility into bookings, availability, and demandCreated mobile-first responsive screens so pilots could search and book on the go from any deviceInvested 700+ hours as primary designer on the platform — owning discovery, wireframes, prototyping, usability testing, and final UI handoffCollaborated directly with founders and developers to ship a product described by users as 'the easiest experience ever' and 'like Airbnb and MLS in one'",
    },    {
      company: "Pet Emporio",
      badges: [],
      href: "https://www.linkedin.com/company/petemporio/",
      location: "California, USA",
      title: "Lead UI/UX Designer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQELEz2tidtWLg/company-logo_200_200/B56Z54e.IcIIAE-/0/1780137846047/petemporio_logo?e=1782345600&v=beta&t=qcn2IVrirb7iqJptdB6Pq4Our-SDteffjftjBVJ9fEg",
      start: "Mar 2024",
      end: "Jan 2025",
      description:
        "Designed the product listing experience — including filters by pet type, breed, age, and category — reducing time-to-find for shoppers browsing a large product catalogueOwned the full checkout flow UX from cart through payment confirmation, focusing on reducing friction and building purchase confidence with clear progress indicators and trust signals",
    },
    
    {
      company: "myAlfred",
      badges: [],
      href: "https://myAlfred.com",
      location: "Dubai, UAE",
      title: "Fullstack UI/UX Designer & Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j_lzE0JQB1PuOuhcM1tEB9dIKr7nZGiGAw&s",
      start: "Sep 2022",
      end: "Aug 2023",
      description:
        "Product Design and Development, Wireframing, UI Design for 26+ Modules, 300+ Figma designs along with leading of designers. Video Commercials, Marketing strategy",
    },
    {
      company: "Courioo Technologies",
      href: "",
      badges: [],
      location: "Dubai, UAE",
      title: "UI/UX Designer",
      logoUrl: "data:image/jpeg;base64,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",
      start: "January 2018",
      end: "April 2022",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Narsun Studios",
      href: "https://narsunstudios.com/",
      badges: [],
      location: "Lahore, Pakistan, PK",
      title: "Full Stack Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EeMwsgJtSL2EnV8Q6ulugkq-m-NSRHs0kg&s",
      start: "January 2015",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
  ],
  education: [
        {
      school: "Google UX Design",
      href: "https://grow.google/certificates/ux-design/",
      degree: "User Experience (UX) Design Certification, UX Design",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg",
      start: "2016",
      end: "2017",
    },

    {
      school: "freeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "Full Stack Web Development Certification, Computer Science",
      logoUrl: "/icon/FreecodeCamplogo.png",      
      start: "2015",
      end: "2016",
    },
 
  
   
      {
      school: "Lancaster University",
      href: "https://www.lancaster.ac.uk/",
      degree: "Bachelor's degree  in Computer Science, Computer Science",
      logoUrl: "/icon/lu-shield.svg",
      start: "2012",
      end: "2016",
    },
    {
      school: "Beaconhouse School System",
      href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/",
      degree: "Cambridge International A Levels - Pre Engineering",
      logoUrl: "https://www.beaconhouse.net/wp-content/uploads/2017/07/bss-logo.png",
      start: "2010",
      end: "2012",
    },
    {
      school: "Beaconhouse School System",
      href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-o-level/",
      degree: "Cambridge International O Levels - Pre Engineering",
      logoUrl: "https://www.beaconhouse.net/wp-content/uploads/2017/07/bss-logo.png",
      start: "2007",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
