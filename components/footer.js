import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newslatter from "./_child/newslatter";

const footer = () => {
  const date = new Date().getFullYear();
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="https://www.facebook.com/mdsajalali0/" target="_blank">
              <ImFacebook color="#888888" />
            </Link>

            <Link href="https://twitter.com/mdsajalali0" target="_blank">
              <ImTwitter color="#888888" />
            </Link>

            <Link href="/">
              <ImYoutube color="#888888" />
            </Link>
          </div>

          <p className="py-5 text-gray-400">
            Copyright @{date} All right reserved ||{" "}
            <Link
              className="text-black font-bold"
              href="https://www.facebook.com/mdsajalali0/"
              target="_blank"
            >
              Md. Sajal Ali
            </Link>
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
