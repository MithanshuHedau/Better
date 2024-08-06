import React, { useState, useEffect } from 'react';

function MortgageCalculator() {
    const [homePrice, setHomePrice] = useState(754800);
    const [downPayment, setDownPayment] = useState(0.20 * homePrice);
    const [interestRate, setInterestRate] = useState(6.50);
    const [loanLength, setLoanLength] = useState(30);
    const [zipCode, setZipCode] = useState('411016');
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        calculateMortgage();
    }, [homePrice, downPayment, interestRate, loanLength]);

    const calculateMortgage = () => {
        const principal = homePrice - downPayment;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanLength * 12;

        const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        setMonthlyPayment(payment || 0);
    };

    return (
        <section className="bg-gray-100 py-8 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                        Mortgage Calculator
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 mb-6">
                        Use our mortgage calculator to estimate your monthly payments. Adjust the parameters below to see how your payments might change.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="home-price" className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                                Home Price
                            </label>
                            <input
                                type="number"
                                id="home-price"
                                min="50000"
                                max="3000000"
                                step="1000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                value={homePrice}
                                onChange={(e) => setHomePrice(parseFloat(e.target.value))}
                            />
                        </div>
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                                Monthly Payment
                            </label>
                            <p className="text-lg font-semibold text-gray-900">
                                ${monthlyPayment.toFixed(2)}/mo
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                            Adjust Home Price
                        </label>
                        <input
                            type="range"
                            min="50000"
                            max="3000000"
                            step="1000"
                            className="w-full cursor-pointer rounded-md bg-gray-300"
                            style={{ backgroundImage: `linear-gradient(to right, #4CAF50 ${(homePrice / 3000000) * 100}%, #d3d3d3 ${(homePrice / 3000000) * 100}%, #d3d3d3 100%)` }}
                            value={homePrice}
                            onChange={(e) => setHomePrice(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="mt-6 sm:flex sm:justify-between sm:items-center">
                        <div>
                            <label htmlFor="zip-code" className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                                ZIP Code
                            </label>
                            <input
                                type="text"
                                id="zip-code"
                                maxLength="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <label htmlFor="down-payment" className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
                                Down Payment
                            </label>
                            <input
                                type="number"
                                id="down-payment"
                                min="0"
                                max={homePrice}
                                step="1000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                value={downPayment}
                                onChange={(e) => setDownPayment(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            href="/preapproval/nxt-purchase"
                        >
                            Get Pre-Approved
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MortgageCalculator;
