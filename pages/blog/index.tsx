import Button from "components/atoms/Button";
import LineDivider from "components/atoms/LineDivider";
import BlogCard, { BlogCardProps } from "components/molecules/Card/BlogCard";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import Link from "next/link";
import React from "react";
import Footer from 'components/organisms/Footer'

import randomString from "utils/randomString";

const Blog = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-uo"
        >
          <PageSentence
            badge="ICP Hub Kenya Blog"
            title="Whats new"
            description="Check out some of our Medium blogs and learn how ICP is revolutionizing the blockchain space"
          />
        </div>
        <div className="">
          <Link
            href="https://medium.com/dfinity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Visit our Blog" color="#F0BC39" style="light" />
          </Link>
        </div>
      </section>
  
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-5"></div>
      </section>
      <Footer /> 
    </PageTemplate>
  );
};

export default Blog;
