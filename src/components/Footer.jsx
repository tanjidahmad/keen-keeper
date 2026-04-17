import Link from "next/link";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-6xl mx-auto text-center py-12 px-4">

        <h1 className="text-3xl font-bold mb-2">
          KeenKeeper
        </h1>

        <p className="text-sm text-gray-300 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="mb-3">Social Links</p>

       
        <div className="flex justify-center gap-4 mb-6">

  <Image
    src="/assets/facebook.png"
    width={32}
    height={32}
    alt="facebook"
    className="bg-white p-2 rounded-full"
  />

  <Image
    src="/assets/twitter.png"
    width={32}
    height={32}
    alt="twitter"
    className="bg-white p-2 rounded-full"
  />

  <Image
    src="/assets/instagram.png"
    width={32}
    height={32}
    alt="instagram"
    className="bg-white p-2 rounded-full"
  />

</div>

       
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 justify-center mt-2 md:mt-0 text-gray-300">
  <span className="hover:text-white cursor-pointer">Privacy Policy</span>
  <span className="hover:text-white cursor-pointer">Terms of Service</span>
  <span className="hover:text-white cursor-pointer">Cookies</span>
</div>
        </div>
      </div>
    </footer>
  );
}