import React from 'react'
import { Button } from '@/components/ui/button';
import { FileCode2, Link, Search } from 'lucide-react';

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
            "nstant results",
            "Context understanding",
            "Cross-reference discovery",
        ]
    },
]

function Features() {
  return (

            <section id="features" className="h-screen bg-gradient-to-br from-white to-green-200  flex items-center justify-center text-center flex-col px-2">
                <Button variant="primary" className="text-sm p-2 border-2 border-green-600 bg-green-200 hover:bg-green-300  text-green-600">✨ AI Powered Documentation</Button>


                <div className='flex flex-col items-center justify-center '>
                    <h1 className='text-6xl font-bold text-green-950'>Everything you need for </h1>
                    <h1 className='text-6xl font-bold text-green-700'> effortless documentation</h1>
                    <p className="text-gray-700 mt-4 max-w-xl leading-relaxed ">Our AI-powered platform handles the complete documentation lifecycle, from generation to maintenance, so you can focus on building great software..</p>

                </div>
                <div className="grid"></div>

            </section>

  )
}

export default Features
