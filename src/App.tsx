import React, { useState } from 'react'
import { Calculator } from './components/Calculator'
import { AIChat } from './components/AIChat'
import { CodeEditor } from './components/CodeEditor'
import { Bot, Calculator as CalcIcon, Code } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'chat' | 'code'>('calculator')
  const [appCode, setAppCode] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">AI增强制作一个在线计算器,越简单越好。只要能用就可以</h1>
            </div>
            <div className="flex space-x-4 items-center">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'calculator' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <CalcIcon className="w-4 h-4 mr-2" />
                计算器
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'chat' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI助手
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'code' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Code className="w-4 h-4 mr-2" />
                代码编辑
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'chat' && <AIChat onCodeUpdate={setAppCode} />}
        {activeTab === 'code' && <CodeEditor code={appCode} onCodeChange={setAppCode} />}
      </main>
    </div>
  )
}

export default App