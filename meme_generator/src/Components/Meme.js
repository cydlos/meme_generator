import memesData from "../memesData";

function Meme() {
    const handleClick = () => {
        const randomMeme = memesData[Math.floor(Math.random() * memesData.length)];
        console.log(randomMeme.name);
    };

  return (
    <main>
    <div className="form">
        <input
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button
            className="form--button"
            onClick={handleClick}
        >
            Get a new meme image 🖼
        </button>
    </div>
    </main>
  );
}

export default Meme;
