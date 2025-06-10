import { useState } from 'react';
import WordForm from './components/WordForm';
import WordList from './components/WordList';
import Weather from './components/Weather';
import { initialWords } from './data/words';

function App() {
  const [words, setWords] = useState(initialWords);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  const deleteWord = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">単語管理アプリ</h1>

      <Weather />
      <WordForm onAddWord={addWord} />
      <WordList words={words} onDeleteWord={deleteWord} />
    </div>
  );
}

export default App;