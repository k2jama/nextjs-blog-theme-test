// index.js

import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.blogTitle} description={globalData.mission} />
      <Header name={globalData.coreIdentity.name} />

      {/* Mission Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            {globalData.coreIdentity.tagline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {globalData.mission}
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {globalData.targetAudienceDescription}
          </p>
          {/* List of target audience sectors */}
          <ul className="mt-4">
            {globalData.targetAudience.map((sector) => (
              <li key={sector} className="text-blue-500">
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Service Offerings</h2>
          {/* List of service offerings */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalData.serviceOfferings.map((offering) => (
              <li key={offering.title} className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {offering.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Automations Provided Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Automations Provided</h2>
          {/* List of automations */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalData.automationsProvided.map((automation) => (
              <li key={automation} className="text-blue-500">
                {automation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach to Clients Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Approach to Clients</h2>
          {/* List of approach points */}
          <ul className="text-gray-600 dark:text-gray-400">
            {globalData.approachToClients.map((approach) => (
              <li key={approach}>{approach}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Core Values</h2>
          {/* List of core values */}
          <ul className="text-gray-600 dark:text-gray-400">
            {globalData.coreValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand Persona Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Brand Persona</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {globalData.brandPersonaDescription}
          </p>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pricing Model</h2>
          {/* List of pricing tiers */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalData.pricingModel.map((tier) => (
              <li key={tier.title} className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tier.description}
                </p>
                {/* Additional details for each tier */}
                <ul className="mt-2">
                  {tier.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Considerations Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Additional Considerations</h2>
          {/* List of additional considerations */}
          <ul className="text-gray-600 dark:text-gray-400">
            {globalData.additionalConsiderations.map((consideration) => (
              <li key={consideration}>{consideration}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {globalData.conclusion}
          </p>
        </div>
      </section>

      <Footer copyrightText={globalData.footerText} />

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
