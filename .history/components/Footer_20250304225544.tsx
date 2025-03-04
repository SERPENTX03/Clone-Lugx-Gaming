import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer mt-10">
      <h1 className="text-center py-10 text-xl font-bold text-white">
        Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
        TemplateMo
      </h1>
      <div>
        โคลนเว็บจาก{" "}
        <Link href={"https://templatemo.com/live/templatemo_589_lugx_gaming"} />
      </div>
    </footer>
  );
};
export default Footer;
