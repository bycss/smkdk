import React from 'react'
import { Code } from 'lucide-react'

interface CodeEditorProps {
  code: string
  onCodeChange: (code: string) => void
}

export const CodeEditor = ({ code, onCodeChange }: CodeEditorProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold flex items-center">
          <Code className="w-5 h-5 mr-2 text-green-500" />
          代码编辑器
        </h3>
        <p className="text-sm text-gray-600">查看和编辑AI生成的代码</p>
      </div>

      <div className="p-4">
        <textarea
          value={code || '// AI生成的代码将在这里显示\n// 当你在AI助手中请求修改时，相关代码会出现在这里'}
          onChange={(e) => onCodeChange(e.target.value)}
          className="w-full h-64 p-3 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="代码将在这里显示..."
        />
      </div>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            在完整版本中，这里会有语法高亮、自动补全和实时预览功能
          </span>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            应用更改
          </button>
        </div>
      </div>
    </div>
  )
}