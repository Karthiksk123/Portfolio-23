import React from "react";
import "./SButton.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SButton = () => {
  const scrollTopButton = document.querySelectorAll(".scroll-top-button");

  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 100) {
      scrollTopButton.classList.add("visible");
    } else {
      scrollTopButton.classList.remove("visible");
    }
  });

  // const onScroll = (event) => {
  //   const scrollPosition = event.target.scrollingElement.scrollTop;
  //   console.log(scrollPosition);
  //   scrollTopButton.classList.toggle("visible", scrollPosition > 0);
  // };

  // const scrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // document.addEventListener("scroll", onScroll);

  // const [verticalOffset, setVerticalOffset] = useState(0);

  // useEffect(() => {
  //   if (verticalOffset < 5) {
  //     window.addEventListener("scroll", () => {
  //       setVerticalOffset(window.pageYOffset);
  //     });
  //   }
  //   console.log("verticalOffset: ", verticalOffset);

  //   if (verticalOffset > 0) {
  //     const scrollTopButton = document.querySelector("#Scroll-top-button");
  //     scrollTopButton.className("visible");
  //   }
  // });

  return (
    <div>
      <button
        className="scroll-top-button"
        type="button"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default SButton;
