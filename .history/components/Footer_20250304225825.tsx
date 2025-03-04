import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer py-10  mt-10">
      <h1 className="text-center text-xl font-bold text-white">
        Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
        TemplateMo
      </h1>
      <p className="text-center">Facebook: Chakkaphat Chanlueang</p>
      <div className="text-center text-xl text-white">
        โคลนเว็บจาก{" "}
        <Link
          target="_blank"
          className="z-50"
          href="https://templatemo.com/live/templatemo_589_lugx_gaming"
        >
          https://templatemo.com/live/templatemo_589_lugx_gaming
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
