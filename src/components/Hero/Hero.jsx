import { Button } from '@/components/ui/button';
import { ArrowRightCircle, PlayCircle } from 'lucide-react';
import React from 'react'
import '../../App.css'
import FuzzyText from '@/components/ui/FuzzyText';
import Features from '../Features';
import Form from '../Form';

function Hero() {
    return (
        <div>
            <section id="home" className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-green-200 flex items-center justify-center text-center flex-col px-4 py-8">
                <Button variant="primary" className="text-sm p-2 border-2 border-green-600 bg-green-200 hover:bg-green-300 text-green-600">
                    ✨ AI Powered Documentation
                </Button>

                <div className='w-full max-w-4xl'>
                    <h1 className='text-4xl md:text-6xl font-bold text-green-950'>Never Write <br /> Documentation</h1>
                    <h1 className='text-4xl md:text-6xl font-bold text-green-700'>From Scratch Again</h1>
                    <p className="text-gray-700 mt-4 max-w-xl mx-auto leading-relaxed px-4">
                        SpecScribe AI automatically generates, updates, and maintains your technical documentation by parsing code and transcribing developer meetings. Keep your docs current without the manual effort.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button size="lg" variant="secondary" className="bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-3 float-btn flex items-center " asChild>
                            <a href="#contact"><PlayCircle /> Watch Demo</a>
                        </Button>
                        <Button size="lg" variant="outline" className="ml-4 border-green-500  hover:bg-green-100 rounded-xl px-4 py-3 flex items-center" asChild>
                            <a href="#about">Start Free Trial <ArrowRightCircle /></a>
                        </Button>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-8 w-full max-w-4xl'>
                    <div className='flex flex-col items-center text-sm text-slate-500'>
                        <div>
                            <FuzzyText
                                baseIntensity={0.2}
                                fontWeight={700}
                                color='#15803d'
                            >
                                80%
                            </FuzzyText>
                        </div>
                        Reduction in documentation time
                    </div>
                    <div className='flex flex-col items-center text-sm text-slate-500'>
                        <div>
                            <FuzzyText
                                baseIntensity={0.2}
                                fontWeight={700}
                                color='#15803d'
                            >
                                500+
                            </FuzzyText>
                        </div>
                        Development teams using SpecScribe
                    </div>
                    <div className='flex flex-col items-center text-sm text-slate-500'>
                        <div className='text-4xl text-green-700 font-bold'>
                            <FuzzyText
                                baseIntensity={0.2}
                                fontWeight={700}
                                color='#15803d'
                            >
                               99.9%
                            </FuzzyText>
                        </div>
                        Accuracy in documentation
                    </div>
                    <div className='flex flex-col items-center text-sm text-slate-500'>
                        <div className='text-4xl text-green-700 font-bold'>
                            <FuzzyText
                                baseIntensity={0.2}
                                fontWeight={700}
                                color='#15803d'
                            >
                            24/7
                            </FuzzyText>
                        </div>
                        Automated monitoring
                    </div>
                </div>
            </section>
            <Features/>
            <section id="contact" className="h-screen bg-gradient-to-b from-green-200 via-yellow-200 to-white flex flex-col items-center justify-center">
                 <Button variant="primary" className="text-sm p-2 border-2 border-green-600 bg-green-200 hover:bg-green-300  text-green-600"> Get Started</Button>
                <div className="text-center">
                    <h1 className='text-4xl md:text-6xl font-bold text-green-950'>Ready to transform your </h1>
                    <h1 className='text-4xl md:text-6xl font-bold text-green-700'>documentation workflow?</h1>
                    <p className="text-gray-700 mt-4 max-w-xl leading-relaxed ">Schedule a personalized demo and see how SpecScribe AI can save your team hours every week.</p>
                </div>
                <Form />
            </section>
        </div>
    )
}

export default Hero;
