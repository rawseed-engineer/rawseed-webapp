// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RawSeedLogo from "./assets/rawseed_logo.png";
// import SeedsHorizontal from "./assets/seeds_horizontal.jpg";

import "./i18n";
import HomePage from "./pages/home";
import RawSeedOilPage from "./pages/raw-seed-oil-page";
import BlackSeedOilPage from "./pages/black-seed-oil-page";
import NotFoundPage from "./pages/not-found-page";
// import { useTranslation } from "react-i18next";
// import Story from "./ui/home/story";
// import WhatWeDo from "./ui/home/what-we-do";
// import Products from "./ui/home/products";
// import WhyRawSeed from "./ui/home/why-raw-seed";
// import Values from "./ui/home/Values";
// import Vision from "./ui/home/vision";
// import ContactUs from "./ui/home/contact-us";

export default function App() {
  // const [count, setCount] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  // const { t } = useTranslation();
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 100);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <>
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/rawseed-webapp" element={<HomePage />} />
        <Route
          path="/rawseed-webapp/raw-seed-oil"
          element={<RawSeedOilPage />}
        />
        <Route
          path="rawseed-webapp/black-seed-oil"
          element={<BlackSeedOilPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    // </>
  );

  // return (
  //   <>
  //     {/* <div className="h-full antialiased">
  //       <div className="flex min-h-full flex-col">
  //         <div
  //           className="flex min-h-full flex-1 flex-col bg-white"
  //           vaul-drawer-wrapper=""
  //         >
  //           <div>
  //             <a href="https://vite.dev" target="_blank">
  //               <img
  //                 src={viteLogo}
  //                 className={`${module.logo} ${module.react}`}
  //                 alt="Vite logo"
  //               />
  //             </a>
  //             <a href="https://react.dev" target="_blank">
  //               <img
  //                 src={reactLogo}
  //                 className={`${module.logo} ${module.react}`}
  //                 alt="React logo"
  //               />
  //             </a>
  //           </div>
  //           <div className={`${module.card}`}>
  //             <button onClick={() => setCount((count) => count + 1)}>
  //               count is {count}
  //             </button>
  //             <p>
  //               Edit <code>src/App.tsx</code> and save to test HMR
  //             </p>
  //           </div>
  //           <p className="emerald-400 text-9xl">
  //             Click on the Vite and React logos to learn more
  //           </p>
  //           <header className="z-50 py-12 sticky top-0 bg-[#181818] backdrop-blur-xl nav-border-reveal">
  //             <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
  //               <a href="/">
  //                 <h1>Vite + React</h1>
  //                 <img
  //                   src="rs_logo.png"
  //                   className="mx-8 h-[2rem] aspect-auto"
  //                   alt="RawSeed"
  //                 />
  //               </a>
  //             </div>
  //           </header>
  //         </div>
  //       </div>
  //     </div> */}
  //     <div className="min-h-screen antialiased">
  //       {/* Sticky Navigation */}
  //       <nav
  //         className={`fixed top-0 left-0 right-0 z-50 px-8 py-8 sm:px-6 lg:px-8 transition-all duration-300 ${
  //           isSticky
  //             ? "bg-[#181818] bg-opacity-95 backdrop-blur-lg shadow-lg"
  //             : "bg-transparent"
  //         }`}
  //       >
  //         <div className="flex items-center justify-between max-w-7xl mx-auto">
  //           {/* Logo */}
  //           <div className="flex items-center space-x-2">
  //             <img
  //               src={RawSeedLogo}
  //               alt="RawSeed Logo"
  //               className="mx-8 h-[2.5rem] aspect-auto"
  //             />
  //           </div>
  //           {/* Desktop Navigation */}
  //           <div className="hidden md:flex items-center space-x-8 text-3xl">
  //             <a
  //               href="#home"
  //               className="text-gray-300 hover:text-white transition-colors duration-200"
  //             >
  //               {t("menu.sesame_oil")}
  //             </a>
  //             <a
  //               href="#features"
  //               className="text-gray-300 hover:text-white transition-colors duration-200"
  //             >
  //               {t("menu.black_seed_oil")}
  //             </a>
  //             <button className="bg-gradient-to-r from-amber-300 to-yellow-700 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
  //               {t("menu.get_started")}
  //             </button>
  //           </div>
  //           {/* Mobile menu button */}
  //           <button
  //             onClick={toggleMenu}
  //             className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
  //           >
  //             {isMenuOpen
  //               ? // <X className="w-6 h-6" />
  //                 `X`
  //               : // <Menu className="w-6 h-6" />
  //                 `Menu`}
  //           </button>
  //         </div>
  //         {/* Mobile Navigation Menu */}
  //         {isMenuOpen && (
  //           <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 backdrop-blur-lg bg-opacity-95 border-t border-gray-700">
  //             <div className="px-4 py-6 space-y-4">
  //               <a
  //                 href="#home"
  //                 className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
  //               >
  //                 Home
  //               </a>
  //               <a
  //                 href="#features"
  //                 className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
  //               >
  //                 Features
  //               </a>
  //               <a
  //                 href="#services"
  //                 className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
  //               >
  //                 Services
  //               </a>
  //               <a
  //                 href="#about"
  //                 className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
  //               >
  //                 About
  //               </a>
  //               <a
  //                 href="#contact"
  //                 className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
  //               >
  //                 Contact
  //               </a>
  //               <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 mt-4">
  //                 Get Started
  //               </button>
  //             </div>
  //           </div>
  //         )}
  //       </nav>
  //       {/* Hero Section with Full Page Image */}
  //       <section
  //         id="home"
  //         className="relative min-h-screen flex items-center justify-center"
  //       >
  //         {/* Hero Background Image */}
  //         <div
  //           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  //           style={{
  //             backgroundImage: `url("hero_image_home.jpg")`,
  //             opacity: 0.9,
  //             filter: "brightness(50%)",
  //             //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23667eea"/><circle cx="960" cy="540" r="300" fill="%23764ba2" opacity="0.8"/><circle cx="600" cy="300" r="200" fill="%23f093fb" opacity="0.6"/><circle cx="1300" cy="700" r="250" fill="%234facfe" opacity="0.7"/></svg>')`,
  //           }}
  //         />
  //         <div className="absolute top-[35%] ">
  //           <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  //             {/* Hero Heading */}
  //             {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"> */}
  //             <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
  //               {t("hero.title")}
  //               {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"> */}
  //             </h1>
  //             <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
  //               {t("hero.subtitle")}
  //             </h2>
  //             {/* Hero Description */}
  //             <p className="text-pretty text-white text-2xl mb-6">
  //               {t("hero.description")}
  //             </p>
  //             {/* Call Out Button */}
  //             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
  //               <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
  //                 {t("hero.learn")}
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       {/* White Background Section - Features */}
  //       <section className="rounded py-8 mt-12 sm:py-12 mx-64">
  //         <Story />
  //       </section>
  //       <section className="rounded py-8 mt-12 sm:py-12 mx-64">
  //         <WhatWeDo />
  //       </section>
  //       <section className="flex-grow overflow-x-auto w-full ">
  //         <img
  //           src={SeedsHorizontal}
  //           alt="All RawSeed Oils"
  //           className="w-full brightness-70 aspect-auto"
  //         />
  //       </section>
  //       <section className="rounded py-8 sm:py-12 mx-64">
  //         <Products />
  //       </section>
  //       {/* Why Raw Seed ? */}
  //       <section className="rounded bg-[#181818] py-12 sm:py-24">
  //         <WhyRawSeed />
  //       </section>
  //       <section className="rounded bg-white py-8 sm:py-12 md:mx-64">
  //         <Values />
  //       </section>
  //       {/* Our Vision */}
  //       <section className="flex-grow overflow-x-auto w-full ">
  //         <Vision />
  //       </section>
  //       <section className="rounded py-8 mt-12 sm:py-12 mx-64">
  //         <ContactUs />
  //       </section>
  //       <section className="rounded bg-white py-8 sm:py-12 mx-64"></section>
  //       {/* White Background Section 1 - Features */}
  //       <section id="features" className="bg-white py-20">
  //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //           <div className="text-center mb-16">
  //             <h2 className="text-4xl font-bold text-gray-900 mb-4">
  //               Powerful Features
  //             </h2>
  //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //               Everything you need to build exceptional web applications
  //             </p>
  //           </div>
  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-200">
  //               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
  //                 {/* <Zap className="w-8 h-8 text-white" /> */}
  //                 ZAP
  //               </div>
  //               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
  //                 Lightning Fast
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed">
  //                 Optimized for speed and performance across all devices with
  //                 cutting-edge technology
  //               </p>
  //             </div>
  //             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-200">
  //               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
  //                 {/* <Users className="w-8 h-8 text-white" /> */}
  //                 User
  //               </div>
  //               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
  //                 Team Collaboration
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed">
  //                 Work together seamlessly with real-time collaboration tools
  //                 and shared workspaces
  //               </p>
  //             </div>
  //             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-200">
  //               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
  //                 {/* <Shield className="w-8 h-8 text-white" /> */}
  //                 Shield
  //               </div>
  //               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
  //                 Secure & Reliable
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed">
  //                 Enterprise-grade security and 99.9% uptime guarantee for peace
  //                 of mind
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       {/* White Background Section 2 - Services */}
  //       <section
  //         id="services"
  //         className="bg-white py-20 border-t border-gray-200"
  //       >
  //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  //             <div>
  //               <h2 className="text-4xl font-bold text-gray-900 mb-6">
  //                 Our Services
  //               </h2>
  //               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
  //                 We provide comprehensive solutions to help you succeed in the
  //                 digital world.
  //               </p>
  //               <div className="space-y-6">
  //                 <div className="flex items-start space-x-4">
  //                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
  //                     {/* <Award className="w-5 h-5 text-blue-600" /> */}
  //                     Award
  //                   </div>
  //                   <div>
  //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
  //                       Premium Support
  //                     </h3>
  //                     <p className="text-gray-600">
  //                       24/7 expert support to help you whenever you need
  //                       assistance
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start space-x-4">
  //                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
  //                     {/* <Globe className="w-5 h-5 text-green-600" /> */}
  //                     Globe
  //                   </div>
  //                   <div>
  //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
  //                       Global Reach
  //                     </h3>
  //                     <p className="text-gray-600">
  //                       Serve customers worldwide with our global infrastructure
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start space-x-4">
  //                   <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
  //                     {/* <Star className="w-5 h-5 text-purple-600" /> */}
  //                     Star
  //                   </div>
  //                   <div>
  //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
  //                       Custom Solutions
  //                     </h3>
  //                     <p className="text-gray-600">
  //                       Tailored solutions designed specifically for your
  //                       business needs
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="relative">
  //               <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-96 flex items-center justify-center">
  //                 <div className="text-center">
  //                   <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
  //                     {/* <Zap className="w-12 h-12 text-white" /> */}
  //                     Zap
  //                   </div>
  //                   <h3 className="text-2xl font-semibold text-gray-900 mb-4">
  //                     Service Showcase
  //                   </h3>
  //                   <p className="text-gray-600">
  //                     Visual representation of our services and solutions
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       {/* Black Background Section - About */}
  //       <section id="about" className="bg-gray-900 py-20">
  //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //           <div className="text-center mb-16">
  //             <h2 className="text-4xl font-bold text-white mb-6">
  //               About NextApp
  //             </h2>
  //             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  //               We're passionate about creating innovative solutions that
  //               empower businesses to thrive in the digital age. Our team of
  //               experts is dedicated to delivering exceptional results.
  //             </p>
  //           </div>
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //             <div className="text-center">
  //               <div className="text-4xl font-bold text-purple-400 mb-2">
  //                 10K+
  //               </div>
  //               <div className="text-gray-300">Happy Customers</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-4xl font-bold text-purple-400 mb-2">
  //                 99.9%
  //               </div>
  //               <div className="text-gray-300">Uptime Guarantee</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-4xl font-bold text-purple-400 mb-2">
  //                 50+
  //               </div>
  //               <div className="text-gray-300">Countries Served</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-4xl font-bold text-purple-400 mb-2">
  //                 24/7
  //               </div>
  //               <div className="text-gray-300">Expert Support</div>
  //             </div>
  //           </div>
  //           <div className="mt-16 text-center">
  //             <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 text-lg font-semibold">
  //               Learn More About Us
  //             </button>
  //           </div>
  //         </div>
  //       </section>
  //       {/* Footer */}
  //       <footer className="bg-[#181818] border-t border-gray-800 py-16">
  //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  //             {/* Company Info */}
  //             <div className="md:col-span-1">
  //               <div className="flex items-center space-x-2 mb-4">
  //                 <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
  //                   {/* <Zap className="w-5 h-5 text-white" /> */}
  //                   ZAP
  //                 </div>
  //                 <span className="text-xl font-bold text-white">NextApp</span>
  //               </div>
  //               <p className="text-gray-400 mb-6 leading-relaxed">
  //                 Building the future of web applications with innovative
  //                 technology and exceptional user experiences.
  //               </p>
  //               <div className="flex space-x-4">
  //                 <a
  //                   href="#"
  //                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
  //                 >
  //                   {/* <Facebook className="w-5 h-5 text-gray-400 hover:text-white" /> */}
  //                   FAcebook
  //                 </a>
  //                 <a
  //                   href="#"
  //                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
  //                 >
  //                   {/* <Twitter className="w-5 h-5 text-gray-400 hover:text-white" /> */}
  //                   Twitter
  //                 </a>
  //                 <a
  //                   href="#"
  //                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
  //                 >
  //                   {/* <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" /> */}
  //                   Linkedin
  //                 </a>
  //                 <a
  //                   href="#"
  //                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
  //                 >
  //                   {/* <Instagram className="w-5 h-5 text-gray-400 hover:text-white" /> */}
  //                   Instagam
  //                 </a>
  //               </div>
  //             </div>
  //             {/* Quick Links */}
  //             <div>
  //               <h3 className="text-lg font-semibold text-white mb-4">
  //                 Quick Links
  //               </h3>
  //               <ul className="space-y-3">
  //                 <li>
  //                   <a
  //                     href="#home"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Home
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#features"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Features
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#services"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Services
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#about"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     About
  //                   </a>
  //                 </li>
  //               </ul>
  //             </div>
  //             {/* Support */}
  //             <div>
  //               <h3 className="text-lg font-semibold text-white mb-4">
  //                 Support
  //               </h3>
  //               <ul className="space-y-3">
  //                 <li>
  //                   <a
  //                     href="#"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Help Center
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Documentation
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Contact Support
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="#"
  //                     className="text-gray-400 hover:text-white transition-colors duration-200"
  //                   >
  //                     Status Page
  //                   </a>
  //                 </li>
  //               </ul>
  //             </div>
  //             {/* Contact Info */}
  //             <div id="contact">
  //               <h3 className="text-lg font-semibold text-white mb-4">
  //                 Contact
  //               </h3>
  //               <div className="space-y-3">
  //                 <div className="flex items-center space-x-3">
  //                   {/* <Mail className="w-5 h-5 text-purple-400" /> */}
  //                   Mail
  //                   <span className="text-gray-400">hello@nextapp.com</span>
  //                 </div>
  //                 <div className="flex items-center space-x-3">
  //                   {/* <Phone className="w-5 h-5 text-purple-400" /> */}
  //                   Phone
  //                   <span className="text-gray-400">+1 (555) 123-4567</span>
  //                 </div>
  //                 <div className="flex items-center space-x-3">
  //                   {/* <MapPin className="w-5 h-5 text-purple-400" /> */}
  //                   Map
  //                   <span className="text-gray-400">San Francisco, CA</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
  //             <p className="text-gray-400 mb-4 md:mb-0">
  //               © 2025 RawSeed Inc. All rights reserved.
  //             </p>
  //             <div className="flex space-x-6">
  //               <a
  //                 href="#"
  //                 className="text-gray-400 hover:text-white transition-colors duration-200"
  //               >
  //                 Privacy Policy
  //               </a>
  //               <a
  //                 href="#"
  //                 className="text-gray-400 hover:text-white transition-colors duration-200"
  //               >
  //                 Terms of Service
  //               </a>
  //               <a
  //                 href="#"
  //                 className="text-gray-400 hover:text-white transition-colors duration-200"
  //               >
  //                 Cookie Policy
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </footer>
  //     </div>
  //   </>
  // );
}
