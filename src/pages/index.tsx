import { useEffect, useState, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const refSection1 = useRef<HTMLDivElement | null>(null);
  const refSection2 = useRef<HTMLDivElement | null>(null);
  const refSection3 = useRef<HTMLDivElement | null>(null);
  const refSection4 = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-col min-h-screen">
      <aside className="fixed inset-y-0 flex flex-col items-center justify-between p-24 bg-red-200">
        <button
          className={scrollPosition < 500 ? "text-white" : "text-black"}
          onClick={() =>
            refSection1.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Content 1
        </button>
        <button
          className={scrollPosition >= 500 && scrollPosition < 1000 ? "text-white" : "text-black"}

          onClick={() =>
            refSection2.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Content 2
        </button>
        <button
          className={scrollPosition >= 1000 && scrollPosition < 1500 ? "text-white" : "text-black"}

          onClick={() =>
            refSection3.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Content 3
        </button>
        <button
          className={scrollPosition >= 1500 ? "text-white" : "text-black"}
          onClick={() =>
            refSection4.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Content 4
        </button>
      </aside>
      <div className="flex flex-col ml-[264px]">
        {/* your scrollable content goes here */}
        <div ref={refSection1} className="h-[100vh] bg-blue-500 p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam, a
          nisi ducimus fuga quisquam qui architecto animi accusamus possimus
          ratione repudiandae odio voluptatum cumque eaque! Eum sapiente saepe
          quisquam.
        </div>
        <div ref={refSection2} className="h-[100vh] bg-red-500 p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam, a
          nisi ducimus fuga quisquam qui architecto animi accusamus possimus
          ratione repudiandae odio voluptatum cumque eaque! Eum sapiente saepe
          quisquam.
        </div>
        <div ref={refSection3} className="h-[100vh] bg-green-500 p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam, a
          nisi ducimus fuga quisquam qui architecto animi accusamus possimus
          ratione repudiandae odio voluptatum cumque eaque! Eum sapiente saepe
          quisquam.
        </div>
        <div ref={refSection4} className="h-[100vh] bg-yellow-500 p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam, a
          nisi ducimus fuga quisquam qui architecto animi accusamus possimus
          ratione repudiandae odio voluptatum cumque eaque! Eum sapiente saepe
          quisquam.
        </div>
      </div>
    </div>
  );
}
