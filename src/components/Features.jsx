import React from 'react'
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileCode2, Link, Search } from 'lucide-react';import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import '.././App.css'

const cardContent = [
    {
        logo: <FileCode2/>,
        title: "Automated API Documentation",
        description: "Parse source code to automatically generate comprehensive API docs, reducing manual documentation effort by 80%.",
        points: [
            "Real-time updates",
            "Multiple format exports",
            "Code-to-doc linking",
        ]
    },
    {   logo: <Link/>,
        title: "Smart Code-Doc Linking",
        description: "Intelligent system that connects meeting notes directly to relevant code sections and maintains documentation accuracy.",
        points: [
            "Context preservation",
            "Change tracking",
            "Developer insights",
        ]
    },
    {
        logo: <Search/>,
        title: "Natural Language Doc Search",
        description: "Find any information across your documentation using plain English queries powered by advanced AI.",
        points: [
            "Instant results",
            "Context understanding",
            "Cross-reference discovery",
        ]
    },
]

const testimonials = [
    {
        name: "Sarah Chen",
        position: "Senior Developer at TechCorp",
        feedback: "SpecScribe AI cut our documentation time by 70%. Our API docs are always current now.",
        rating: 5
    },
    {
        name: "Marcus Rodriguez",
        position: "Engineering Manager at DevScale Inc",
        feedback: "The meeting transcription feature is a game-changer. We never lose important technical decisions.",
        rating: 5
    },
    {
        name: "Emily Watson",
        position: "Technical Writer at CloudByte",
        feedback: "TFinally, a tool that understands both code and context. Documentation quality has improved dramatically.",
        rating: 5
    }
];

function Features() {
  return (

            <section id="features" className="min-h-screen py-16 bg-gradient-to-b from-green-200 via-white to-green-200 flex items-center justify-center text-center flex-col px-4">
                <Button variant="primary" className="mt-16 text-sm p-2 border-2 border-green-600 bg-green-200 hover:bg-green-300  text-green-600">✨ AI Powered Documentation</Button>


                <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
                    <h2 className='text-3xl md:text-5xl font-semibold text-green-950'>Everything you need for </h2>
                    <h2 className='text-3xl md:text-5xl font-semibold text-green-700'> effortless documentation</h2>
                    <p className="text-gray-700 mt-4 max-w-xl leading-relaxed px-4">
                        Our AI-powered platform handles the complete documentation lifecycle, from generation to maintenance, so you can focus on building great software.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-6xl px-4">
                    {cardContent.map((card, index) => {
                        return (
                            <Card key={index} className="tilt-card rotate-3 m-4 bg-slate-50 border-green-500 p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300">
                                <CardHeader className="flex flex-row items-center space-x-4 justify-center text-lg">
                                    {card.logo}
                                    <CardTitle>{card.title}</CardTitle>

                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">{card.description}</p>
                                    <ul className='text-md text-gray-700 mt-2 '>
                                        {card.points.map((point, i) => (
                                            <li className='flex flex-row items-center justify-start gap-x-2' key={i}> <CheckCircle2 color='green' /> {point}</li>
                                        ))}
                                    </ul>
                                </CardContent>

                            </Card>
                        );
                    })}
                </div>
                <div className='mt-32 flex flex-col items-center justify-center w-full max-w-6xl'>
                    <h2 className='text-3xl md:text-5xl font-semibold text-green-950'>Loved by developers</h2>
                    <h2 className='text-3xl md:text-5xl font-semibold text-green-700'>worldwide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-16 mt-2">
                      {testimonials.map((testimonial, index) => (

                             <Card key={index} className="bg-white p-4 shadow-md m-4 w-80 hover:shadow-lg hover:scale-105 transition-transform duration-300 text-lg">
                                <CardHeader>
                                    <CardTitle>{testimonial.name}</CardTitle>
                                    <p className="text-sm text-gray-500 mt-2">{testimonial.position}</p>
                                </CardHeader>

                            <CardContent>
                                <p>"{testimonial.feedback}"</p>
                                <p>{'⭐'.repeat(testimonial.rating)}</p>
                            </CardContent>

                           </Card>
                    ))}
                    </div>
                </div>
            </section>

  )
}

export default Features
