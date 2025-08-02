import React from "react";

const ServiceDetailsPage = ({ params }) => {
  const id = params?.id;

  const data = [
    {
      _id: "1",
      service_name: "Web Design",
      service_image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
      service_description:
        "Professional web design services to create responsive and user-friendly websites.",
    },
    {
      _id: "2",
      service_name: "App Development",
      service_image:
        "https://images.unsplash.com/photo-1605810230434-7631f4b6d593",
      service_description:
        "Custom mobile app development for Android and iOS platforms.",
    },
    {
      _id: "3",
      service_name: "SEO Optimization",
      service_image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      service_description:
        "Boost your website visibility with expert SEO techniques.",
    },
    {
      _id: "4",
      service_name: "Digital Marketing",
      service_image:
        "https://images.unsplash.com/photo-1581091012184-5c48b1c632d3",
      service_description:
        "Comprehensive digital marketing services to grow your business online.",
    },
    {
      _id: "5",
      service_name: "Graphic Design",
      service_image:
        "https://images.unsplash.com/photo-1587614203976-365c74645e83",
      service_description:
        "Creative graphic design solutions including logos, banners, and branding.",
    },
    {
      _id: "6",
      service_name: "Content Writing",
      service_image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042",
      service_description:
        "High-quality content writing for blogs, websites, and social media.",
    },
    {
      _id: "7",
      service_name: "E-commerce Solutions",
      service_image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
      service_description:
        "Build and manage powerful e-commerce platforms with ease.",
    },
    {
      _id: "8",
      service_name: "Cloud Hosting",
      service_image:
        "https://images.unsplash.com/photo-1581090700227-1e8e5f163b85",
      service_description:
        "Reliable and scalable cloud hosting services for businesses of all sizes.",
    },
    {
      _id: "9",
      service_name: "IT Consultancy",
      service_image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      service_description:
        "Expert IT consulting services to guide your technology decisions.",
    },
  ];

  const singleData = data.find((d) => d._id == id);

  return (
    <div>
      <h1 className="text-center my-10 text-6xl">ServiceDetailsPage</h1>
      <div key={singleData._id} className="flex gap-16">
        <div className="space-y-6 text-xl">
          <p>ID: {id}</p>
          <p>{singleData.service_name}</p>
          <p className="font-bold">Description</p>
          <p className="max-w-xl">{singleData.service_description}</p>
        </div>
        <img className="w-[600px] h-auto" src={singleData.service_image} />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;