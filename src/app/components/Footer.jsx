import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GFGIcon from "../../../public/gfg-icon.svg";
import LeetcodeIcon from "../../../public/leetcode-icon.svg";
import PhoneIcon from "../../../public/phone-icon.svg";
import MailIcon from "../../../public/gmail-icon.svg";
const  Footer= () => {
  return (
    <section className="bg-transparent text-white py-12 flex flex-col items-center justify-center" id='contact'>
      <div className="z-10 text-center">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Lets Connect
        </h2>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I am currently exploring new career paths, and I am eager to connect. 
            Whether you have questions or simply want to reach out, 
            I am here and will respond promptly.Looking forward to connecting with you!
          </p>
          <div className="socials flex flex-row gap-2 justify-center mt-8">
            <Link href="tel:+6369019028">
              <Image src={PhoneIcon} alt="Phone Icon" />
            </Link>
            <Link href="mailto:2000pathma@gmail.com">
              <Image src={MailIcon} alt="Mail Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/pathmapriyam/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://auth.geeksforgeeks.org/user/pathmapriyam">
              <Image src={GFGIcon} alt="GFG Icon" />
            </Link>
            <Link href="https://github.com/PathmaPriyaM">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://leetcode.com/u/PathmaPriyaM/">
              <Image src={LeetcodeIcon} alt="Leetcode Icon" width={40} height={40}/>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Footer;
