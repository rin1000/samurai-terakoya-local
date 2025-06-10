import { useState } from 'react';

const WordForm = ({ onAddWord }) => {
  const [newWord, setNewWord] = useState({ english: '', japanese: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWord.english && newWord.japanese && newWord.category) {
      onAddWord({
        id: Date.now(),
        ...newWord
      });
      setNewWord({ english: '', japanese: '', category: '' });
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">新しい単語を追加</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="英語"
          value={newWord.english}
          onChange={(e) => setNewWord({...newWord, english: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="日本語"
          value={newWord.japanese}
          onChange={(e) => setNewWord({...newWord, japanese: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <select
          value={newWord.category}
          onChange={(e) => setNewWord({...newWord, category: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="">カテゴリを選択</option>
          <option value="fruit">果物</option>
          <option value="animal">動物</option>
          <option value="object">物</option>
          <option value="verb">動詞</option>
          <option value="color">色</option>
        </select>
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          追加
        </button>
      </div>
    </div>
  );
}

export default WordForm;