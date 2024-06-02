import NavBrand from "components/atoms/NavBrand";
import NavLink from "components/atoms/NavLink";
import Text from "components/atoms/Text";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-40 pt-16 bg-[#632020] flex justify-center">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:gap-20">
        <div className="space-y-5 text-center">
          <NavBrand />
          <div className="">
            <Text
              value={`Copyright © ${new Date().getFullYear()}`}
              textStyle="SectionParagraph"
            />
            <Text value={``} textStyle="SectionParagraph" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20 text-center">
          <div className="space-y-5">
            <Text value="Follow us" textStyle="FooterLinkGroupTitle" />
            <div className="space-y-[10px]">
              <NavLink value="Twitter" href="https://twitter.com/icphub_KE" />
              <NavLink
                value="Instagram"
                href="https://www.instagram.com/icphub_ke/"
              />
              <NavLink
                value="LinkedIn"
                href="https://www.linkedin.com/company/icphub-ke/"
              />
            </div>
          </div>
          <div className="space-y-5">
            <Text value="Education" textStyle="FooterLinkGroupTitle" />
            <div className="space-y-[10px]">
              <NavLink
                value="Dacade course"
                href="https://dacade.org/communities/icp"
              />
              <NavLink value="About" href="http://localhost:3000/about" />
            </div>
          </div>
          <div className="space-y-5">
            <Text value="Blog" textStyle="FooterLinkGroupTitle" />
            <div className="space-y-[10px]">
              <NavLink value="Our blog posts" href="/blog" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
