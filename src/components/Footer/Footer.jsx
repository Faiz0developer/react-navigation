import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      title: "Docs",
      data: [
        {
          subTitle: "Getting Started",
          link: "https://reactnavigation.org/docs/getting-started",
        },
        {
          subTitle: "Building your own Navigator",
          link: "https://reactnavigation.org/docs/custom-navigators",
        },
        {
          subTitle: "Contributing",
          link: "https://reactnavigation.org/docs/contributing",
        },
      ],
    },
    {
      title: "Support",
      data: [
        {
          subTitle: "Chat in our Discord channel",
          link: "https://discord.com/invite/reactiflux",
        },
        {
          subTitle: "Get help on Stack Overflow",
          link: "https://stackoverflow.com/questions/tagged/react-navigation",
        },
        {
          subTitle: "Request a feature on Canny",
          link: "https://react-navigation.canny.io/feature-requests",
        },
        {
          subTitle: "Report a bug on GitHub",
          link: "https://github.com/react-navigation/react-navigation/issues/new/choose",
        },
      ],
    },
    {
      title: "Social",
      data: [
        {
          subTitle: "Blog",
          link: "https://reactnavigation.org/blog",
        },
        {
          subTitle: "GitHub",
          link: "https://github.com/react-navigation/react-navigation",
        },
        {
          subTitle: "Twitter",
          link: "https://twitter.com/reactnavigation",
        },
      ],
    },
    {
      title: "Built with",
      data: [
        {
          subTitle: "Docusaurus",
          link: "https://docusaurus.io/",
        },
        {
          subTitle: "GitHub Pages",
          link: "https://pages.github.com/",
        },
        {
          subTitle: "Netlify",
          link: "https://www.netlify.com/",
        },
      ],
    },
  ];
  return (
    <div className="lg:w-11/12 px-3 lg:mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 ">
        {footerData.map((item) => {
          return (
            <div className="flex flex-col gap-5" key={item.title}>
              <strong>
                <div>{item.title}</div>
              </strong>
              <ul className="flex flex-col gap-2.5">
                {item.data.map((ele) => {
                  return (
                    <Link
                      to={ele.link}
                      target={
                        item.title === "Support" ||
                        ele.subTitle === "GitHub" ||
                        ele.subTitle === "Twitter" ||
                        ele.subTitle === "GitHub Pages" ||
                        ele.subTitle === "Netlify"
                          ? "_blank"
                          : "_self"
                      }
                      className=" hover:text-[#6b52ae] hover:underline"
                      key={ele.subTitle}
                    >
                      <li key={ele.link} className="flex gap-1">
                        {ele.subTitle}
                        {item.title === "Support" ||
                        ele.subTitle === "GitHub" ||
                        ele.subTitle === "Twitter" ||
                        ele.subTitle === "GitHub Pages" ||
                        ele.subTitle === "Netlify" ? (
                          <BsLink45Deg />
                        ) : (
                          ""
                        )}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
