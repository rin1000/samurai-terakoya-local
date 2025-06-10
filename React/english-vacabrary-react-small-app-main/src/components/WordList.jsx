const WordList = ({ words, onDeleteWord }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">登録済み単語: {words.length}個</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {words.map(word => (
          <div key={word.id} className="bg-white p-4 border rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{word.english}</span>
                <span className="mx-2">→</span>
                <span>{word.japanese}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                  {word.category}
                </span>
                <button
                  onClick={() => onDeleteWord(word.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  削除
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordList;