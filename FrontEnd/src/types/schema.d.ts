interface PHOTO {
  img: string;
}

interface FEEDBACK {
  feedback: string;
  feedback_img: PHOTO[];
}

interface ME {
  bio: string;
  profession: string;
  about_me: string;
  photo: string;
  back_round_img: string;
}

interface HeroSection {
  profession: string;
  main_text: string;
  publication: number;
  follower: string;
  subscription: number;
  main_photo: string;
}
interface CONSUL {
  id: 0;
  title: string;
  description: string;
  con_keys: [
    {
      id: 0;
      keys: string;
    }
  ];
  duration: string;
  format: string;
  feedback: string;
  price: number;
}
interface ISERVICE {
  title: string;
  services: [
    {
      id: number;
      name_services: string;
      pattern: number;
    }
  ];
}

interface CONSUL {
  id: 0;
  title: string;
  description: string;
  con_keys: [
    {
      id: 0;
      keys: string;
    }
  ];
  duration: string;
  format: string;
  feedback: string;
  price: number;
}

interface ANSWER {
  questions: string;
  answer: string;
}

interface SERVICES {
  id: number;
  name_services: string;
  pattern: number;
}
interface serviceId {
  name_services: string;
  main_img: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  price: number;
  photo: Array<{
    img: string;
    services_text: string;
  }>;
  services_keys: Array<{
    services_title: number;
    keys: string;
  }>;
}

interface FooterTex {
  title: string;
  text: string;
}

interface PublicOffer {
  title: string;
  text: string;
}

interface MyContact {
  email: string;
  my_phone: number;
  name: string;
  title: string;
}

interface textFoot {
  main: string;
}
