import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offer in Compromise Help | Settle IRS Debt for Less',
  description: 'Check if you qualify for the IRS Offer in Compromise program. Reduce or eliminate your tax debt in minutes with our free tool.',
  keywords: 'IRS tax debt, offer in compromise, settle IRS debt, tax relief, OIC eligibility',
  openGraph: {
    title: 'Settle IRS Debt for Less with an Offer in Compromise',
    description: 'Use our free OIC eligibility checker to see if you qualify to reduce your IRS tax debt today.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Owe Money to the IRS? Settle Your Tax Debt for Less</h1>
        <p className="mb-6 text-lg text-blue-700">
          If you're struggling with tax debt, you're not alone. Find out if you qualify to settle your IRS debt for less than you owe through the Offer in Compromise program.
        </p>
        <a
          href="https://www.verifiedtaxresolution.com"
          className="inline-block bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition-all duration-200 hover:shadow-xl text-lg"
        >
          See If You Qualify →
        </a>
      </div>

      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">Behind on Tax Payments?</h2>
          <p className="text-blue-900 mb-4">
            If you owe back taxes to the IRS, the Offer in Compromise program could help you settle your tax debt for significantly less than what you owe. Don't let tax debt control your life.
          </p>
          <ul className="list-disc list-inside text-blue-900 space-y-2">
            <li>Reduce or eliminate IRS tax debt</li>
            <li>Stop IRS collections and wage garnishments</li>
            <li>Get relief from tax penalties and interest</li>
          </ul>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">Tax Debt Relief Options</h2>
          <p className="text-blue-900 mb-4">
            Can't pay your full tax balance? We'll help you understand your options, including IRS payment plans, tax debt settlement, and the Offer in Compromise program.
          </p>
          <ul className="list-disc list-inside text-blue-900 space-y-2">
            <li>Free tax debt consultation</li>
            <li>Explore all available relief options</li>
            <li>Stop IRS collections immediately</li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12">
          <div className="relative h-32 w-full md:w-64 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <Image
              src="/images/filing.png"
              alt="Tax Filing Made Easy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
              priority
              sizes="(max-width: 768px) 100vw, 256px"
              quality={85}
            />
          </div>
          <div className="relative h-32 w-full md:w-64 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <Image
              src="/images/tax-advisor.png"
              alt="Expert Tax Advisors"
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
              priority
              sizes="(max-width: 768px) 100vw, 256px"
              quality={85}
            />
          </div>
          <div className="relative h-32 w-full md:w-64 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <Image
              src="/images/white-couple.png"
              alt="Satisfied Tax Relief Clients"
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
              priority
              sizes="(max-width: 768px) 100vw, 256px"
              quality={85}
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Ready to resolve your tax debt?</h2>
        <p className="text-blue-900 mb-6">
          Take our free qualification check to see if you're eligible for the IRS Offer in Compromise program.
        </p>
      </div>
    </main>
  );
}
