//Import Images
import athlete from "./img2/athlete-small.png";
import goodtimes from "./img2/goodtimes-small.png";
import theracer from "./img2/theracer-small.png";
import athlete2 from "./img2/athlete2.png";
import goodtimes2 from "./img2/good-times2.jpg";
import theracer2 from "./img2/the-racer2.jpg";

export const WorkState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/portfolio/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/portfolio/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
