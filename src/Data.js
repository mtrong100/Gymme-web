// images
import Bg from "./images/bg.png";
import ResistanceImg from "./images/resistance.png";
import BoxingImg from "./images/boxing.png";
import BodyPumpImg from "./images/body-pump.png";
import YogaImg from "./images/yoga.png";
import FullBodyImg from "./images/full-body.png";
import FitnessImg from "./images/fitness.png";
import BattleRopeImg from "./images/battle-rope.png";
import CommunityImg1 from "./images/pt1.png";
import CommunityImg2 from "./images/pt2.png";
import CommunityImg3 from "./images/pt3.png";
import CommunityImg4 from "./images/pt4.png";
import CommunityImg5 from "./images/pt5.png";
import CommunityImg6 from "./images/pt6.png";
import JoinImg from "./images/woman.png";

export const header = {
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Workouts", href: "#workouts" },
  { id: 4, name: "Pricing", href: "#pricing" },
  { id: 5, name: "Community", href: "#community" },
  { id: 6, name: "FAQ", href: "#faq" },
];

export const banner = {
  titlePart1: "Get the best part of your day",
  titlePart2: "– you fit here.",
  subtitle:
    "We provide serious fitness but within a fun and friendly, safe space.",
  textBtn: "Join Now",
  image: Bg,
};

export const about = {
  title: "Our misson",
  subtitle1:
    "We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.",
  subtitle2:
    "The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.",
  link: "Join Now",
  image: BoxingImg,
};

export const workouts = {
  title: "Training programs",
  programs: [
    {
      id: 1,
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      id: 2,
      image: BoxingImg,
      name: "Boxing",
    },
    {
      id: 3,
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      id: 4,
      image: YogaImg,
      name: "Yoga",
    },
    {
      id: 5,
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      id: 6,
      image: FitnessImg,
      name: "Fitness",
    },
    {
      id: 7,
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  title: "Pricing plan",
  plans: [
    {
      id: 1,
      name: "Basic",
      price: "20",
      list: [
        { id: 1, name: "unlimited gym access" },
        { id: 2, name: "1 training programs" },
        { id: 3, name: "free fitness consultation" },
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: "35",
      list: [
        { id: 1, name: "unlimited gym access" },
        { id: 2, name: "5 training programs" },
        { id: 3, name: "free fitness consultation" },
        { id: 4, name: "personal trainer" },
      ],
    },
    {
      id: 3,
      name: "VIP",
      price: "49",
      list: [
        { id: 1, name: "unlimited gym access" },
        { id: 2, name: "all training programs" },
        { id: 3, name: "free fitness consultation" },
        { id: 4, name: "personal trainer" },
        { id: 5, name: "50% off drinks" },
      ],
    },
  ],
};

export const community = {
  title: "Community",
  slogan: "Sore today, strong tomorrow.",
  testimonials: [
    {
      id: 1,
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      id: 2,
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      id: 3,
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      id: 4,
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      id: 4,
      image: CommunityImg5,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      id: 4,
      image: CommunityImg6,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
  ],
};

export const faq = {
  title: "FAQ",
  accordions: [
    {
      id: 1,
      question: "How can I book a workout class?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.  adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam",
    },
    {
      id: 2,
      question: "Can I pay by cash for my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.olestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.  adipisicing elit. Molestiae temporibus beatae, totam repudiandae",
    },
    {
      id: 3,
      question: "What age do I need to be to join?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.totam repudiandae nam recusandae ea dolores tempora maxime.  adipisicing elit. Molestiae temporibus beatae",
    },
    {
      id: 4,
      question: "Are there any lockers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime. dolor sit amet  dolor sit amet ",
    },
    {
      id: 5,
      question: "How do I cancel my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime dipisicing elit. Molestiae temporibus beatae.",
    },
    {
      id: 6,
      question: "Is there water available at the gym?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet consectetur, aMolestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.sit amet consectetur, adipisicing eli",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less. The most difficult thing is the decision to act, the rest is merely tenacity. If you do what you’ve always done, you’ll get what you’ve always gotten.",
  btnText: "Contact",
};

export const footer = {
  copyrightText: "@All rights reserved. Gymme 2022.",
};
