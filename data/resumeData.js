import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2018-2022",
        title: "淡江大學-資訊傳播學校",
        place: "新北-台灣",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2019",
        title: "四川大學-網絡與新媒體（留學生）",
        place: "四川-中國",
        bg: "#FFF1FB",
      },

      {
        id: 3,
        date: "2023",
        title: "清邁大學語言學校",
        place: "清邁-泰國",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2018-2019",
        title: "高島屋帳篷專櫃銷售人員-兼職",
        place: "士林-台灣",
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "2019-2020",
        title: "臺北市士林運動中心-兼職人員",
        place: "士林-台灣",
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2022-2023",
        title: "TVBS電商-軟體測試工程師助理-實習生",
        place: "內湖-台灣",
        bg: "#EEF5FA",
      },
      {
        id: 4,
        date: "2023",
        title: "TVBS電商-前端工程師-實習生",
        place: "內湖-台灣",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
